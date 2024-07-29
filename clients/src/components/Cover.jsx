import React from "react";
import hero2 from "../assets/images/hero2.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Cover = () => {
  return (
    <>
      {/* First background image with opacity on the right half */}
      <div
        className="relative text-white min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative  z-10 flex justify-center mt-32 items-center p-6">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-100 h-32 mr-10 mt-32 object-cover"
            />
          </Link>
          <h1 className="text-4xl font-bold ml-4 mt-32">
            One critical insight can make or break your battle plan.
          </h1>
        </div>

        <div className="relative z-10 flex-1 p-32 space-y-6">
          <div className="flex-1 gap-10">
            <p className="text-4xl font-bold mb-6">
              Book calls with <span className="text-orange-600">insiders</span>{" "}
              <br />
              to supercharge your <br /> applications
            </p>
            <span className="text-2xl font-bold">
              Get insider information to gain real <br />
              competitive advantage and blow <br /> away the competition.
            </span>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 font-bold text-2xl rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
            Find an insider
          </button>
        </div>
      </div>

      {/* Second background image with full opacity */}
      <div
        className="relative text-white min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"/>
        <div className="relative z-10 flex mt-32 items-center justify-center text-center p-16">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="w-100 h-32 mt-32 mr-10 object-cover"
            />
          </Link>
          <h1 className="text-5xl mt-32 font-bold ml-4">
            Book calls with <span className="text-orange-600">insiders</span> to
            supercharge <br />
            <span className="text-center px-64 flex">your applications</span>
          </h1>
        </div>
        <div className="relative z-10 flex-1 items-center text-center mt-16 space-y-6">
          <p className="text-4xl font-bold mb-6">
            Get insider information to gain real competitive advantage
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 font-bold text-2xl rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
            Find an Insider
          </button>
        </div>
      </div>
    </>
  );
};

export default Cover;
