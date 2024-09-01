import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavMobile = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };
  
  const hideHeader = () => {
    setIsContentVisible(false);
  };

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      console.log("Scrolling to element:", element);
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      console.log("Element not found:", id);
    }
  }

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row bg-primary z-40"> 
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 py-2 mt-2 md:p-8 text-center md:text-left">
          <nav>
            <div
              className="fixed top-0 right-4 flex flex-col justify-center items-end p-6 z-30" 
              style={{ cursor: "pointer" }}
            >
              <button className="text-xl" onClick={toggleContentVisibility}>
                {isContentVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                )}
              </button>
              {isContentVisible && (
                <div className="flex flex-col z-10 bg-secondary p-4 rounded-lg">
                  <Link
                    to="https://airtable.com/app1tVh9OMDN6l18L/shrDzR9cJplUlf2Na"
                    className="underline font-bold text-lg text-white"
                    onClick={hideHeader}
                  >
                    Be an insider
                  </Link>

                  <Link
                    to="/Insights"
                    className="underline text-white font-bold text-lg sm:text-xl"
                    onClick={hideHeader}
                  >
                    Insights
                  </Link>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection("insiders");
                    }}
                    className="text-white underline text-lg font-bold"
                  >
                    Find an Insider
                  </button>
                </div>
              )}
            </div>
            <div className="absolute top-0 left-0 flex flex-col justify-center items-end"> {/* Increased z-index here */}
              <Link to="/" className="flex-shrink-0 mt-4">
                <img
                  src={logo}
                  alt="logo"
                  className="w-28 h-14 sm:w-32 sm:h-16 object-cover"
                />
              </Link>
            </div>
          </nav>
          <div className="text-center mt-16 md:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl text-white mb-6 z-40">
              Book calls with <span className="text-secondary">insiders</span>
              <br /> to supercharge your
              <br />
              <span className="underline">college applications.</span>
            </h1>
            <Link
              to="https://airtable.com/appq0uohTDXcCq600/pag2TkbhHE7FCiqIs/form"
              className="bg-secondary p-2 rounded-lg inline-block mt-6 z-40"
            >
              <button className="text-white text-lg font-bold flex items-center">
                Join Our Webinar!
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
      </div>
      
      {isContentVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleContentVisibility}></div>
      )}
    </div>
  );
};

export default NavMobile;
