import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserContext } from "../UserContext";

// images for the front cards
import img1 from "../assets/images/mentors/img1.png";
import img2 from "../assets/images/mentors/img2.png";
import img3 from "../assets/images/mentors/img3.png";
import img4 from "../assets/images/mentors/img4.png";
import img5 from "../assets/images/mentors/img5.png";
import img6 from "../assets/images/mentors/img6.png";
import img7 from "../assets/images/mentors/img7.png";
import img8 from "../assets/images/mentors/img8.png";
import img9 from "../assets/images/mentors/img9.png";
import img10 from "../assets/images/mentors/img10.jpeg";
import img11 from "../assets/images/mentors/img11.png";
import img12 from "../assets/images/mentors/img12.png";
import img13 from "../assets/images/mentors/img13.png";
import img14 from "../assets/images/mentors/img14.png";
import img15 from "../assets/images/mentors/img15.png";
import img16 from "../assets/images/mentors/img16.jpg";

import alto from '../assets/images/University_Logos/Aalto-University.png'
import bowdoin from '../assets/images/University_Logos/Bowdoin.png'
import columbia from '../assets/images/University_Logos/columbia-university.png'
import cornell from '../assets/images/University_Logos/Cornell-University.png'
import dartmouth from '../assets/images/University_Logos/Dartmouth.png'
import cambridge from '../assets/images/University_Logos/university-of-cambridge.png'
import hongkong from '../assets/images/University_Logos/Hong-Kong-University.png'
import nayyang from '../assets/images/University_Logos/Nanyang_Technological_University.png'
import minerve from '../assets/images/University_Logos/Minerva.png'
import nyu from '../assets/images/University_Logos/NYU-Abu-Dhabi.png'
import nys from '../assets/images/University_Logos/national-university-of-singapore.png'
import nyu2 from '../assets/images/University_Logos/NYU.png'
import oxford from '../assets/images/University_Logos/Oxford.png'
import peking from '../assets/images/University_Logos/Peking.png'
import jhu from '../assets/images/University_Logos/jhu.png'

const Hero = () => {
  const { consultant } = useContext(UserContext);

  // Define 16 images
  const imagePairs = [
    [img1, alto], [img2, bowdoin], [img3, cambridge], [img4, columbia],
    [img5, cornell], [img6, cornell], [img13, nyu], [img8, hongkong],
    [img15, oxford], [img10, minerve], [img14, nyu2], [img16, peking],
    // [img13, nyu], [img14, nyu2],[img9, jhu] , [img12, nys]
  ];

  // Initialize state to manage flipped cards
  const [flippedCards, setFlippedCards] = useState(Array(16).fill(false));

  useEffect(() => {
    // Function to get 3 unique random indices
    const getRandomIndices = () => {
      const indices = new Set();
      while (indices.size < 3) {
        indices.add(Math.floor(Math.random() * 16));
      }
      return Array.from(indices);
    };

    const interval = setInterval(() => {
      const flipIndices = getRandomIndices();
      setFlippedCards(prev => {
        const newFlipped = [...prev];
        flipIndices.forEach(index => {
          newFlipped[index] = true;
        });
        return newFlipped;
      });

      // Reset flip after 4 seconds
      setTimeout(() => {
        setFlippedCards(prev => {
          const newFlipped = [...prev];
          flipIndices.forEach(index => {
            newFlipped[index] = false;
          });
          return newFlipped;
        });
      }, 4000); // 4 seconds delay
    }, 6000); // 6 seconds for each flip sequence

    return () => clearInterval(interval);
  }, []);




  return (
    <div className="relative h-[80%] flex w-full" style={{ backgroundColor: "#060724" }}>
      {/* Sponsor images container */}
      <div className="relative w-full mt-2 mb-1 md:w-1/2">
        <div className="grid grid-cols-4 gap-10">
          {imagePairs.map((pair, index) => (
            <div key={index} className={`flip-card ${flippedCards[index] ? "flipped" : ""}`}>
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

      {/* Text and button on the right */}
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
              to='/RegisterStudentPage'
              
              className="underline text-2xl text-white font-bold transition"
            >
              Login
            </Link>
          </div>
          <div>
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="logo" className="w-42 h-24 mr-10 object-cover" />
            </Link>
          </div>
        </div>
        <div className="mb-32 ml-16 mt-10">
          <h1 className="text-6xl font-bold sm:text-3xl md:text-4xl  text-white mb-10">
            Book calls with <span className="text-orange-600 leading-[160%]">insiders</span>
            <br /> to supercharge your
            <br />
            <span className="underline leading-[160%]">college applications.</span>
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
