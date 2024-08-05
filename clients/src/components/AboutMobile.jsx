import React from 'react';
import logo from '../assets/logo.png';
import { 
  alto, bowdoin, columbia, cornell, dartmouth, cambridge, hongkong, nayyang, minerve, nyu, nys, nyu2,
  oxford, peking, jhu, antler, bi, boldr, us, vc, ey, ibm, mashreq, coinhako, cocacola, jpmorgan, roland, 
  shoroq, slush, c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs
} from "../assets";

const AboutMobile = () => {

  const universities1 = [bowdoin, columbia, cornell, dartmouth, cambridge, hongkong, nayyang, minerve, nyu, nys,
    minerve, nyu2, oxford, peking, jhu, alto
  ];
  const programs = [c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs];
  const sponsors = [antler, bi, boldr, us, vc, ey, ibm, mashreq, coinhako, cocacola, jpmorgan, roland, shoroq, slush, c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs];

  const renderRow = (images) => (
    <div className="w-full mb-8">
      <div className="flex gap-4 mt-2 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Logo ${index}`}
            className="h-20 w-20 object-contain flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-2 bg-gray-200 flex flex-col items-center">
      {/* Main Content */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-destructive mt-6 mb-4">
          Video chat with <span className="underline">vetted</span> insiders who go to...
        </h1>
      </div>

      {/* Logos with Titles */}
      <div className="w-full mt-6 mb-4">
        {renderRow(universities1)}
        {renderRow(sponsors)}
        {renderRow(programs)}
      </div>
    </div>
  );
};

export default AboutMobile;
