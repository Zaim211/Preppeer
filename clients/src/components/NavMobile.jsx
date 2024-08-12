import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  img2,
  img1,
  jhu,
  img3,
  img4,
  img5,
  img6,
  img8,
  img10,
  img13,
  img14,
  img9,
  img15,
  img16,
  img11,
  img12,
  img7,
  pekingUni,
  bowdoin,
  cambridge,
  nyu2,
  columbiaUni,
  cornel,
  hongkong,
  dartmouth,
  minerve,
  alt,
  oxfordUni,
  nus,
  
} from "../assets/index.js";


const NavMobile = () => {
 
  const imagePairs = [
    [cornel, img6],
    [img13, nyu2],
    [img4, columbiaUni],
    [img2, bowdoin],
    [nus, img12],
    [cambridge, img3],
    [hongkong, img8],
    [img15, oxfordUni],
    [nyu2, img14],
    [pekingUni, img16],
    [img10, minerve],
    [img5, cornel],
    [jhu, img9],
    [img11, cornel],
    [img7, dartmouth],
    [img1, alt],
  ];


  const [flippedCards, setFlippedCards] = useState(Array(16).fill(false));

  useEffect(() => {
    const getRandomIndices = () => {
      const indices = new Set();
      while (indices.size < 3) {
        indices.add(Math.floor(Math.random() * 16));
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
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-primary">
      {/* Right side: Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 text-center md:text-left">
        <div className="flex  items-center md:items-end mb-8">
         
          <div className="flex  gap-4">
            <a
              href='https://airtable.com/app1tVh9OMDN6l18L/shrDzR9cJplUlf2Na'
              className="underline font-bold text-xl text-white"
            >
              Be an insider
            </a>
            <Link to="/Insights" className="underline text-white font-bold text-xl">
              Insights
            </Link>
          </div>
          <Link to="/" className="flex-shrink-0 mb-4">
            <img src={logo} alt="logo" className="w-24 h-16 object-cover" />
          </Link>
        </div>

        <div className="text-center md:text-left">
          <h1 className="font-bold text-3xl text-white mb-6">
            Book calls with{" "}
            <span className="text-secondary">insiders</span>
            <br /> to supercharge your
            <br />
            <span className="underline">college applications.</span>
          </h1>
          <Link to="#" className="bg-secondary p-2 rounded-lg inline-block mt-6">
            <button onClick={()=>scrollToSection('insiders')} className="text-white text-lg font-bold flex items-center">
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
      <div className="w-[30%] flex flex-wrap-col3">
        {imagePairs.map((pair, index) => (
          <div
            key={index}
            className={`w-1/2 h-1/2 p-1 flip-card ${flippedCards[index] ? "flipped" : ""}`}
          >
            <div className="flip-card-inner-mobile">
              <div
                className="flip-card-front-mobile"
                style={{ backgroundImage: `url(${pair[0]})` }}
              ></div>
              <div
                className="flip-card-back-mobile"
                style={{ backgroundImage: `url(${pair[1]})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavMobile;
