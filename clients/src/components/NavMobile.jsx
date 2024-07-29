import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserContext } from "../UserContext";

export default function NavMobile() {
  const [showHeader, setShowHeader] = useState(false);
  const { consultant, ready } = useContext(UserContext);

  const toggleHeader = () => {
    setShowHeader(!showHeader);
  };

  const hideHeader = () => {
    setShowHeader(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b z-50">
      <div className="flex justify-between items-center p-4">
        <Link to={"/"} onClick={hideHeader}>
          <img src={logo} alt="logo" width={120} height={40} />
        </Link>
        <button className="text-xl" onClick={toggleHeader}>
          {showHeader ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      {showHeader && (
        <div className="absolute  flex-col mt-2 p-2 items-end rounded-2xl top-16 left-0 w-full flex justify-center z-20">
          <div className="bg-gray-100   max-w-sm p-4 rounded-lg shadow-lg">
            <Link
              to="/giftcard"
              className="block bg-gray-200 underline text-black font-bold p-2 rounded-full hover:bg-gray-300 transition mb-2 text-center"
              onClick={hideHeader}
            >
              SessionGift
            </Link>
            <Link
              to={consultant ? "/ConsultantProfile" : "/RegisterConsultantPage"}
              className="block bg-gray-200 underline text-black font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition mb-2 text-center"
              onClick={hideHeader}
            >
              Become a Member
            </Link>
            <Link
              to="/OurMissions"
              className="block bg-gray-200 underline text-black font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition mb-2 text-center"
              onClick={hideHeader}
            >
              Our Missions
            </Link>
            {ready && consultant ? (
              <div className="flex justify-center mb-4">
                <img
                  src={consultant?.profilePicture}
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            ) : (
              <div className="flex justify-center bg-gray-500 text-white rounded-full border border-gray-500 overflow-hidden mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
