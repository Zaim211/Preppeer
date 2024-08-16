
import React from 'react';
import { Picture1, Picture2, Picture3 } from '../assets';

const Cover = () => {
  return (
    <div className="cover-container bg-gray-200 text-center p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Why Us?</h1>
      <div className="cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <div className="card flex flex-col items-center bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 w-full max-w-sm">
          <img src={Picture1} alt="Picture 1" className="w-full h-auto object-cover mb-4 rounded-t-lg"/>
          <p className="text-base sm:text-lg text-gray-700">Get insights and build a list where you’ll thrive.</p>
        </div>
        <div className="card flex flex-col items-center bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 w-full max-w-sm">
          <img src={Picture2} alt="Picture 2" className="w-full h-auto object-cover mb-4 rounded-t-lg"/>
          <p className="text-base sm:text-lg text-gray-700">Learn about the university's vibe and identity.</p>
        </div>
        <div className="card flex flex-col items-center bg-white shadow-lg p-6 rounded-lg transition-transform transform hover:scale-105 w-full max-w-sm">
          <img src={Picture3} alt="Picture 3" className="w-full h-auto object-cover mb-4 rounded-t-lg"/>
          <p className="text-base sm:text-lg text-gray-700">Personalize your essays for each university.</p>
        </div>
      </div>
    </div>
  );
}

export default Cover;
