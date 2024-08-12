import React from "react";
import hero2 from "../assets/images/hero2.png";
import CoverMobile from "./CoverMobile";
import { useMediaQuery } from "react-responsive";

const Cover = () => {

  const isMobileDevice = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobileDevice) {
    return (
      <div className="">
        <CoverMobile />
      </div>
    );
  }
  return (
    <div
       className="relative text-white min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{backgroundImage: `url(${hero2})`}}
    >
      
      <div className="relative w-full flex">
        <div className="flex flex-col p-16 mt-12 mb-12 h-[80%] w-full z-10 bg-gradient-to-r from-black/80 to-black/50">
          <div className="flex-1 justify-between items-center">
            <h1 className="text-5xl font-semibold mb-2">
              Why <span className="text-secondary">PrepPeer ?</span>
            </h1>
            
            <p className="font-lg text-2xl mt-6">One critical insight can make or break your battle plan.</p>
          </div>
          <div>
            <h1 className="text-2xl mt-12 font-semibold">Differentiate Yourself</h1>
            <p className="text-2xl mt-4">
              Gain insider knowledge about the university before you even attend. Understand the vibe and
              <br /> identity of the institution, and use this key information to make your essays stand out.
            </p>
            <h1 className="text-2xl mt-12 font-semibold">Valuable Insider’s Background at Your Fingertips</h1>
            <p className="text-2xl mt-4">
              Every minute counts in the college application process. Explore the profiles of our mentors,
              <br /> learn from their experiences, and ask questions to boost your chances of acceptance.
            </p>
            <h1 className="text-2xl mt-12 font-semibold">Choose a University Where You’ll Thrive</h1>
            <p className="text-2xl mt-4">
              Discuss your concerns and questions with our insiders. Access exclusive information about
              <br /> the school that you won't find on websites, and select the university where you will truly thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
