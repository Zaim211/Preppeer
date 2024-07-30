import React from "react";
import hero2 from "../assets/images/hero2.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { img13 } from "../assets/index.js";

const Cover = () => {
  return (
    <>
      <div
        className="relative text-white min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="absolute top-0 right-0 p-4 mt-32">
          <Link to="/">
            <img src={logo} alt="logo" className="w-40 h-auto object-cover" />
          </Link>
        </div>
        <div className="relative w-full z-10 flex flex-col items-center text-center px-8 py-24 bg-gradient-to-r from-black/50 to-transparent">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-6xl font-semibold mb-32">Our Mission</h1>
            <p className="font-semibold text-6xl mb-6">
              Provide <span className="text-orange-600">firsthand</span> &{" "}
              <span className="text-orange-600">authentic</span> insight into{" "}
              <br />
              university life and the admissions process.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 mt-12 font-bold text-xl md:text-2xl rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
              Find an insider
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative text-white min-h-screen w-full bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="absolute top-0 right-0 p-4 mt-16">
          <Link to="/">
            <img src={logo} alt="logo" className="w-40 h-auto object-cover" />
          </Link>
        </div>
        <div className="relative w-full z-10 flex flex-col items-center text-center px-8 py-24 bg-gradient-to-r from-black/50 to-transparent">
          <div className="flex flex-col items-center w-full bg-gradient-to-r from-black/50 to-transparent shadow-md px-16 py-16 rounded-lg">
            <h1 className="text-6xl font-semibold mt-6 mb-12">Who we are</h1>
            <div className="grid grid-cols-1 w-full md:grid-cols-4 gap-6 mt-12 mb-12">
              <div className="text-black p-6 rounded-lg bg-white shadow-md w-full">
                <img
                  src={img13}
                  alt="Default"
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl text-black font-bold mb-4">
                  Zebo Furqatzoda
                </h2>
                <p className="text-xl text-black font-semibold mb-4">Founder</p>
              </div>
              <div className="text-black p-6 rounded-lg bg-white shadow-md w-full">
                <img
                  src={img13}
                  alt="Default"
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl text-black font-bold mb-4">
                  Zebo Furqatzoda
                </h2>
                <p className="text-xl text-black font-semibold mb-4">Founder</p>
              </div>
              <div className="text-black p-6 rounded-lg bg-white shadow-md w-full">
                <img
                  src={img13}
                  alt="Default"
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl text-black font-bold mb-4">
                  Zebo Furqatzoda
                </h2>
                <p className="text-xl text-black font-semibold mb-4">Founder</p>
              </div>
              <div className="text-black p-6 rounded-lg bg-white shadow-md w-full">
                <img
                  src={img13}
                  alt="Default"
                  className="w-full h-64 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-xl text-black font-bold mb-4">
                  Zebo Furqatzoda
                </h2>
                <p className="text-xl text-black font-semibold mb-4">Founder</p>
              </div>
            </div>
            <button className="bg-orange-500 text-white px-12 py-3 mt-12 font-semibold text-xl md:text-2xl rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
              Join Us
            </button>
          </div>
        </div>
      </div>

      <div
        className="relative text-white min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <div className="absolute top-0 right-0 p-4 mt-32">
          <Link to="/">
            <img src={logo} alt="logo" className="w-40 h-auto object-cover" />
          </Link>
        </div>
        <div
          className="relative w-full z-10 flex flex-col 
        items-center text-center px-8 py-24 bg-gradient-to-r from-black/50 to-transparent"
        >
          <div className="flex flex-col items-center w-full">
            <h1 className="text-6xl font-semibold mb-6">Why we matter</h1>
            <p className="font-semibold text-6xl mb-6 mt-16">
              One critical insight can make or <br />
              break your battle plan.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 mt-12 font-bold text-xl md:text-2xl rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
              Start Strategizing
            </button>
          </div>
        </div>
      </div>

      
      <div
  className="relative text-white min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${hero2})` }}
>
  <div className="absolute inset-0 bg-black opacity-50" />
  <div className="absolute top-0 right-0 p-4 mt-32">
    <Link to="/">
      <img src={logo} alt="logo" className="w-40 h-auto object-cover" />
    </Link>
  </div>
  <div className="relative z-10 flex flex-col  items-center justify-center text-center p-16">
    <div className="mt-32">
    <h1 className="text-6xl font-semibold mb-12">
      Book calls with <span className="text-orange-600">insiders</span> to supercharge <br />
      <span className="px-64">your applications</span>
    </h1>
    <p className="text-6xl font-semibold mb-6 mt-32">
      Get insider information to gain real competitive advantage
    </p>
    <button className="bg-orange-500 text-white mt-12 px-6 py-3 font-bold text-2xl rounded-xl shadow-lg hover:bg-orange-600 transition-colors">
      Find an Insider
    </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Cover;
