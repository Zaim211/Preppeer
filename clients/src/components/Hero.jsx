import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserContext } from "../UserContext";

import {
  img1,
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
  alto,
  bowdoin,
  cambridge,
  nyu2,
  columbia,
  cornell,
  hongkong,
  minerve,
  nyu,
  oxford,
  peking,
} from "../assets/index.js";

const Hero = () => {
  const { consultant, user } = useContext(UserContext);

  const imagePairs = [
    [cornell, img6],
    [img13, nyu],
    [nyu2, img14],
    [img4, columbia],
    [img2, bowdoin],
    [alto, img1],
    [cambridge, img3],
    [hongkong, img8],
    [img15, oxford],
    [peking, img16],
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

  return (
    <div
      className="relative h-[80%] flex w-full"
      style={{ backgroundColor: "#060724" }}
    >
      <div className="relative w-full mt-2 mb-1 md:w-1/2">
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

      <div className="flex flex-col w-full md:w-1/2 justify-center pl-4 pb-12 text-center md:text-left">
        <div className="flex items-center justify-between pl-60 gap-6 mt-40 mb-16">
          <div className="flex items-center gap-6">
            <Link
              to="/OurMissions"
              className="underline text-2xl text-white font-bold transition"
            >
              Mission
            </Link>
            <Link
              to="/blog"
              className="underline text-2xl text-white font-bold transition"
            >
              Blog
            </Link>
            <Link
              to={consultant ? "/ConsultantProfile" : "/be-an-insider"}
              className="underline text-2xl text-white font-bold transition"
            >
              Be an insider
            </Link>

            <Link
              to={user ? "/StudentProfile" : "/RegisterStudentPage"}
              StudentProfile
              className="underline text-2xl text-white font-bold transition"
            >
              Login
            </Link>
          </div>
          <div>
            <Link to="/" className="flex-shrink-0">
              <img
                src={logo}
                alt="logo"
                className="w-42 h-24 mr-10 object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="mb-32 ml-16 mt-10">
          <h1 className="text-6xl font-bold sm:text-3xl md:text-4xl  text-white mb-10">
            Book calls with{" "}
            <span className="text-orange-600 leading-[160%]">insiders</span>
            <br /> to supercharge your
            <br />
            <span className="underline leading-[160%]">
              college applications.
            </span>
          </h1>
          <Link
            to="#"
            className="bg-orange-600 p-2 rounded-lg inline-block mt-10 mb-16"
          >
            <button className="text-white text-xl font-bold text-center flex items-center">
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
