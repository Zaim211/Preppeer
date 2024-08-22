import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMediaQuery } from 'react-responsive';

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
  img12,
  img30,
  img17,
  pekingUni,
  syracuse,
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
import NavMobile from "./NavMobile";

const Hero = () => {
 
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
    [img17, syracuse],
    [img30, dartmouth],
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


  const isMobileDevice = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobileDevice) {
    return (
      <div className="">
        <NavMobile />
      </div>
    );
  }

  function scrollToSection(id){
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  return (
    <div className="aspect-auto flex w-full sm:w-full bg-primary">
      <div className="w-[50%] mt-2 md:w-1/2 h-max-auto h-full mb-1 md:block">
        <div className="grid-container">
          {imagePairs.map((pair, index) => (
            <div
              key={index}
              className={`flip-card ${flippedCards[index] ? "flipped" : ""}`}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{ backgroundImage: `url(${pair[0]})` }}
                />
                <div
                  className="flip-card-back"
                  style={{ backgroundImage: `url(${pair[1]})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex lg:flex-wrap  mb-32 w-[50%]  justify-center text-center md:text-left">
        {/* <div className="flex items-center  ml-60 gap-2 mb-12">
          <div className="flex justify-between font-bold items-center gap-12">
          <a
              href='https://airtable.com/app1tVh9OMDN6l18L/shrDzR9cJplUlf2Na'
              className="underline font-bold text-2xl text-white"
            >
              Be an insider
            </a>
            <Link
              to="/Insights"
              className="underline font-bold text-2xl text-white"
            >
              Insights
            </Link>
            <Link to="/" className="">
              <img
                src={logo}
                alt="logo"
                className="w-42 object-cover"
              />
            </Link>
          </div>
         
        </div> */}
          <div className="flex items-center  ml-60 gap-6 ">
          <div className="flex font-bold items-center gap-12">
          <a
              href='https://airtable.com/app1tVh9OMDN6l18L/shrDzR9cJplUlf2Na'
              className="underline font-bold text-2xl text-white"
            >
              Be an insider
            </a>
            <Link
              to="/Insights"
              className="underline font-bold text-2xl text-white"
            >
              Insights
            </Link>
          </div>
          <div className=" mt-6">
            <Link to="/" className="flex-shrink-0  mt-6">
              <img
                src={logo}
                alt="logo"
                className="w-36 mr-1 object-cover"
              />
            </Link>
          </div>
        </div>
        
        <div className="mr-48">
          <h1 className="text-4xl font-bold text-white">
            Book calls with{" "}
            <span className="text-secondary  leading-[160%]">insiders</span>
            <br /> to supercharge your
            <br />
            <span className="underline leading-[160%]">
              college applications.
            </span>
          </h1>
          <div className="bg-secondary px-6 py-2 rounded-lg inline-block mt-10 mb-16">
            <button onClick={()=> scrollToSection('insiders') }  className="text-white  text-2xl font-bold text-center flex items-center justify-center">
              Find an Insider
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-12 ml-2"
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