import React from "react";

// Import images
import alto from '../assets/images/University_Logos/Aalto-University.png';
import bowdoin from '../assets/images/University_Logos/Bowdoin.png';
import columbia from '../assets/images/University_Logos/columbia-university.png';
import cornell from '../assets/images/University_Logos/Cornell-University.png';
import dartmouth from '../assets/images/University_Logos/Dartmouth.png';
import cambridge from '../assets/images/University_Logos/university-of-cambridge.png';
import hongkong from '../assets/images/University_Logos/Hong-Kong-University.png';
import nayyang from '../assets/images/University_Logos/Nanyang_Technological_University.png';
import minerve from '../assets/images/University_Logos/Minerva.png';
import nyu from '../assets/images/University_Logos/NYU-Abu-Dhabi.png';
import nys from '../assets/images/University_Logos/national-university-of-singapore.png';
import nyu2 from '../assets/images/University_Logos/NYU.png';
import oxford from '../assets/images/University_Logos/Oxford.png';
import peking from '../assets/images/University_Logos/Peking.png';
import jhu from '../assets/images/University_Logos/jhu.png';

import antler from "../assets/images/Company-Logos/Antler.webp";
import bi from '../assets/images/Company-Logos/B&I-capital.png';
import boldr from '../assets/images/Company-Logos/Boldr.webp';
import us from '../assets/images/Company-Logos/US.png';
import vc from '../assets/images/Company-Logos/VC.png';
import ey from '../assets/images/Company-Logos/EY.jpg';
import ibm from '../assets/images/Company-Logos/IBM.png';
import mashreq from '../assets/images/Company-Logos/Mashreq.png';
import coinhako from '../assets/images/Company-Logos/Coinhako.png';
import cocacola from '../assets/images/Company-Logos/Coca-Cola.png';
import jpmorgan from '../assets/images/Company-Logos/JPMorgan.jpg';
import roland from '../assets/images/Company-Logos/Roland-Berger.jpg';
import shoroq from '../assets/images/Company-Logos/Shorooq.webp';
import slush from '../assets/images/Company-Logos/slush_d.jpg';

import c5 from '../assets/images/Programs-Logo/C5+1.jpeg';
import erasmus from '../assets/images/Programs-Logo/Erasmus+.jpg';
import lumiere from '../assets/images/Programs-Logo/Lumiere.png';
import techgirls from '../assets/images/Programs-Logo/TechGirls.jpg';
import notredame from '../assets/images/Programs-Logo/Notre-Dame.jpg';
import opensociety from '../assets/images/Programs-Logo/Open-Society.png';
import technovation from '../assets/images/Programs-Logo/Technovation.png';
import virginia from '../assets/images/Programs-Logo/Virginia-Tech.jpg';
import yygs from '../assets/images/Programs-Logo/YYGS.jpg';

const About = () => {
  const universities = [alto, bowdoin, columbia, cornell, dartmouth, cambridge, hongkong, nayyang, minerve, nyu, nys, nyu2, oxford, peking, jhu];
  const programs = [c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs];
  const sponsors = [antler, bi, boldr, us, vc, ey, ibm, mashreq, coinhako, cocacola, jpmorgan, roland, shoroq, slush];

  const renderRow = (images, animationClass) => {
    // Duplicate images to create a continuous loop
    // const loopImages = [...images, ...images];

    return (
      <div className="mt-12 space-y-8 hide-scrollbar gap-12">
        <div className={`sponsor-row ${animationClass}`}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-32 w-32 object-contain"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="md:p-12 flex flex-col border-t items-center w-full bg-gray-200">
      <div className="w-full max-w-full">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-center flex-1">
            Video chat with <span className="underline">vetted</span> insiders who go to...
          </h1>
        </div>

        <div className="mt-12 space-y-8">
          <div className="w-full">
            {renderRow(universities, 'row-0')}
          </div>
          <div>
            {renderRow(sponsors, 'row-2')}
          </div>
          <div className="flex items-center justify-center">
            {renderRow(programs, 'row-1')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
