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
        <div className="relative w-full flex">
          <div className="flex flex-col pl-32 pb-12 pt-12 h-[60%] w-full z-1 bg-gradient-to-r from-black/80 to-black/50">
           <div className="flex justify-between items-center">
           <h1 className="text-6xl font-semibold mb-6">
              Why <span className="text-secondary">PrepPeer ?</span>
            </h1>
            <p className="pr-12">One critical insight can make or break your battle plan.</p>
           </div>
            <p>
              <h1 className="text-4xl mt-12 font-semibold ">Differentiate Yourself</h1>
              <p className="text-2xl mt-4">
                Gain insider knowledge about the university before you even
                attend. Understand the vibe and <br /> identity of the institution, and
                use this key information to make your essays stand out.
              </p>
              <h1 className="text-4xl mt-12 font-semibold ">Valuable Insider’s Background at Your Fingertips</h1>
              <p className="text-2xl mt-4">
              Every minute counts in the college application process. Explore
              the profiles of our mentors, <br /> learn from their experiences, and ask
              questions to boost your chances of acceptance.
              </p>
              <h1 className="text-4xl mt-12 font-semibold ">Choose a University Where You’ll Thrive</h1>
              <p className="text-2xl mt-4">
                Discuss your concerns and questions with our insiders. Access
                exclusive information about <br /> the school that you won't find on
                websites, and select the university where you will truly thrive.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cover;
