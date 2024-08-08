import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserContext } from "../UserContext";
import {
  img2,
  img3,
  img4,
  img5,
  img6,
  img8,
  cornell,
  hongkong,
  minerve,
  nyu,
  oxfordUni,
  nus
} from "../assets/index.js";

const NavMobile = () => {
  const { consultant, user } = useContext(UserContext);

  const imagePairs = [
    [cornell, img6],
    [img3, nyu],
    [img5, minerve],
    [img2, hongkong],
    [nus, img8],
    [img4, oxfordUni],
  ];

  const [flippedCards, setFlippedCards] = useState(Array(8).fill(false));

  useEffect(() => {
    const getRandomIndices = () => {
      const indices = new Set();
      while (indices.size < 3) {
        indices.add(Math.floor(Math.random() * 8));
      }
      return Array.from(indices);
    };

    const interval = setInterval(() => {
      const flipIndices = getRandomIndices();
      setFlippedCards((prev) => {
        const newFlipped = [...prev];
        flipIndices.forEach((index) => {
          newFlipped[index] = true;
        });
        return newFlipped;
      });

      setTimeout(() => {
        setFlippedCards((prev) => {
          const newFlipped = [...prev];
          flipIndices.forEach((index) => {
            newFlipped[index] = false;
          });
          return newFlipped;
        });
      }, 4000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-primary">
      {/* Right side: Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 text-center md:text-left">
        <div className="flex  items-center md:items-end mb-8">
         
          <div className="flex  gap-4">
            <Link
              to={consultant ? "/ConsultantProfile" : "/RegisterConsultantPage"}
              className="underline text-white text-lg"
            >
              Be an insider
            </Link>
            <Link to="/OurMissions" className="underline text-white text-lg">
              Insights
            </Link>
          </div>
          <Link to="/" className="flex-shrink-0 mb-4">
            <img src={logo} alt="logo" className="w-24 h-16 object-cover" />
          </Link>
        </div>

        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl text-white mb-6">
            Book calls with{" "}
            <span className="text-secondary">insiders</span>
            <br /> to supercharge your
            <br />
            <span className="underline">college applications.</span>
          </h1>
          <Link to="#" className="bg-secondary p-2 rounded-lg inline-block mt-6">
            <button className="text-white text-lg font-bold flex items-center">
              Find an Insider
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Left side: 2x4 grid of images */}
      {/* <div className="w-full md:w-1/2 flex flex-wrap">
        {imagePairs.map((pair, index) => (
          <div
            key={index}
            className={`w-1/2 h-1/2 p-1 flip-card ${flippedCards[index] ? "flipped" : ""}`}
          >
            <div className="flip-card-inner">
              <div
                className="flip-card-front"
                style={{ backgroundImage: `url(${pair[0]})` }}
              ></div>
              <div
                className="flip-card-back"
                style={{ backgroundImage: `url(${pair[1]})` }}
              ></div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default NavMobile;
