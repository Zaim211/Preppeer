import React, { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserContext } from "../UserContext";
import { useMediaQuery } from 'react-responsive';

import {
  img2,
  img3,
  img4,
  img5,
  img6,
  img8,
  img10,
  img13,
  img14,
  img15,
  img16,
  img12,
  pekingUni,
  bowdoin,
  cambridge,
  nyu2,
  columbiaUni,
  cornell,
  hongkong,
  minerve,
  nyu,
  oxfordUni,
  nus
} from "../assets/index.js";
import NavMobile from "./NavMobile";

const Hero = () => {
  const { consultant, user } = useContext(UserContext);

  const imagePairs = [
    [cornell, img6],
    [img13, nyu],
    [nyu2, img14],
    [img4, columbiaUni],
    [img2, bowdoin],
    [nus, img12],
    [cambridge, img3],
    [hongkong, img8],
    [img15, oxfordUni],
    [pekingUni, img16],
    [img10, minerve],
    [img5, cornell],
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
    }, 6000);

    return () => clearInterval(interval);
  }, []);


  const isMobileDevice = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobileDevice) {
    return (
      <div className="">
        <NavMobile />
      </div>
    );
  }

  return (
    <div className="relative h-[80vh] flex w-full sm:w-full bg-primary">
      <div className="relative aspect-auto w-full mt-2 md:w-1/2  mb-1 md:block">
        <div className="grid grid-cols-4 gap-10">
          {imagePairs.map((pair, index) => (
            <div
              key={index}
              className={`flip-card ${flippedCards[index] ? "flipped" : ""}`}
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
        </div>
      </div>

      <div className="flex flex-col aspect-auto w-full md:w-[50%] justify-center pl-4 pb-12 text-center md:text-left">
        <div className="flex items-center  justify-end pl-40  mt-40 mb-16">
          <div className="flex p-20-semibold  items-center gap-6">
          <Link
              to={consultant ? "/ConsultantProfile" : "/RegisterConsultantPage"}
              className="underline p-20-semibold text-white "
            >
              Be an insider
            </Link>
            <Link
              to="/OurMissions"
              className="underline p-20-semibold  text-white"
            >
              Insights
            </Link>
            <Link
              to={user ? "/StudentProfile" : "/RegisterStudentPage"}
              StudentProfile
              className="underline p-20-semibold text-white"
            >
              Login
            </Link>
          </div>
          <div>
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="logo"
                className="w-50 h-32 mr-10 object-cover"
              />
            </Link>
          </div>
        </div>
        
        <div className="mb-32 ml-20 mt-5">
          <h1 className=" text-4xl text-white mb-4">
            Book calls with{" "}
            <span className="text-secondary  leading-[160%]">insiders</span>
            <br /> to supercharge your
            <br />
            <span className="underline leading-[160%]">
              college applications.
            </span>
          </h1>
          <div className="bg-secondary p-2 rounded-lg inline-block mt-10 mb-16">
            <button  className="text-white p-20-semibold text-xl font-bold text-center flex items-center">
              Find an Insider
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Hero;