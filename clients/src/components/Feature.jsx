import React from "react";
import { features } from "../constants/index";

const Feature = () => {
  return (
    <div className="px-8 py-12 mx-auto max-w-screen-2xl">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Features to make your life easy
      </h2>
      <div className="feature-scroll flex overflow-x-auto p-4 space-x-6 pb-4">
        {features.map((feature, index) => (
          <div className="flex-1">
            <div
              key={index}
              className="flex-shrink-0 w-96 h-96 bg-white  border-gray-300 rounded-lg shadow-md flex flex-col"
            >
              <div className="flex-1 p-2">{feature.details}</div>
            </div>
            <div>
              <h1 className="text-xl p-4 mt-4 font-bold pt-2">{feature.title}</h1>
              <h2 className="text-black p-16-medium">{feature.description}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
