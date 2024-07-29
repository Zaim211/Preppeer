import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const HeroMember = () => {
    const { consultant } = useContext(UserContext);
  return (
    <div className="relative w-full h-[600px] rounded-full bg-cover bg-center" >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-white bg-opacity-10">
        <h1 className="text-xl font-bold sm:text-3xl md:text-4xl text-black mb-32">
          Connect with students with your expérience and skills <br /> and get their over a video call
        </h1>
        <div className="mt-8">
          <Link to={consultant ? '/ConsultantProfile' : '/be-an-insider/RegisterConsultantPage'} className="bg-black p-8 rounded-lg">
            <button className="text-white text-lg font-bold text-center">Join us as Member</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroMember;
