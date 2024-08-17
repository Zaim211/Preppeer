import React from 'react';

import { 
  alto, bowdoin, columbia, cornel, dartmouth, cambridge, hongkong, nayyang, minerve, nyu, nys, nyu2,
  oxford, peking, jhu, antler, bi, boldr, us, vc, ey, ibm, mashreq, coinhako, cocacola, jpmorgan, roland, 
  shoroq, slush, c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs
} from "../assets";

const AboutMobile = () => {

  const universities1 = [bowdoin, columbia, cornel, dartmouth, cambridge, hongkong, nayyang, minerve, nyu, nys,
    minerve, nyu2, oxford, peking, jhu, alto
  ];
  const programs = [c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs];
  const sponsors = [antler, bi, boldr, us, vc, ey, ibm, mashreq, coinhako, cocacola, jpmorgan, roland, shoroq, slush, c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs];

  const renderRow = (images, animationClass) => {
    return (
      <div className={`sponsor-row ${animationClass}`}>
        <div className="flex mb-6">
          {[...images,...images].map((image, index) => {
            return (
              <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-16 w-[10%] object-contain"
            />
            )
          })}
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-gray-200 flex flex-col items-center">
      {/* Main Content */}
      <div className="text-center">
        
        <div className="flex-1 justify-start mt-4">
        
       <div>
       <p className="mt-2 text-2xl font-bold lg:text-lg text-destructive s">
       Our Insiders come from Top universities, Elite programs, and Prestigious Internships
        </p>
       </div>
        </div>
      </div>

      {/* Logos with Titles */}
      <div className="w-full mt-6 mb-4">
        {renderRow(universities1, "row-0")}
        {renderRow(sponsors, "row-1")}
        {renderRow(programs, "row-0")}
      </div>
    </div>
  );
};

export default AboutMobile;
