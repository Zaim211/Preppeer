
import React from 'react';
import { Picture1, Picture2, Picture3 } from '../assets';

const Cover = () => {
  return (
    <div className=" bg-primary text-center p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl text-white font-bold mb-12">Why Us?</h1>
      <div className=" mb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <div className="card flex flex-col items-center bg-white p-6 rounded-lg shadow-2xl transition-transform transform hover:scale-105 w-full max-w-sm">
          <img src={Picture1} alt="Picture 1" className="w-autp h-full object-contain mb-4 border-gray-100 shadow-2xl border rounded-lg"/>
          <p className="text-xl sm:text-lg text-black font-semibold">Get insights and build a list where you’ll thrive.</p>
        </div>
        <div className="card flex flex-col items-center bg-white shadow-2xl p-6 rounded-lg transition-transform transform hover:scale-105 w-full max-w-sm">
          <img src={Picture2} alt="Picture 2" className="w-auto h-full object-contain mb-4 shadow-2xl rounded-lg"/>
          <p className="text-xl sm:text-lg text-black font-semibold">Learn about the university's vibe and identity.</p>
        </div>
        <div className="card flex flex-col items-center bg-white shadow-2xl p-8 rounded-xl transition-transform transform hover:scale-105 w-full max-w-sm">
          <img src={Picture3} alt="Picture 3" className="w-auto h-full object-cover shadow-2xl mb-4 rounded-lg"/>
          <p className="text-xl sm:text-lg text-black font-semibold">Personalize your essays for each university.</p>
        </div>
      </div>
    </div>
  );
}

export default Cover;
