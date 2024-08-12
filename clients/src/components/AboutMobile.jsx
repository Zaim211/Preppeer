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

  // const renderRow = (images) => (
  //   <div className="w-full mb-8">
  //     <div className="flex gap-4 mt-2 overflow-x-auto">
  //       {images.map((image, index) => (
  //         <img
  //           key={index}
  //           src={image}
  //           alt={`Logo ${index}`}
  //           className="h-20 w-20 object-contain flex-shrink-0"
  //         />
  //       ))}
  //     </div>
  //   </div>
  // );
  const renderRow = (images, animationClass) => {
    return (
      <div className={`sponsor-row ${animationClass}`}>
        <div className="flex gap-2 mb-6">
          {[...images,...images].map((image, index) => {
            return (
              <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-20 w-10 object-contain"
            />
            )
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="p-2 bg-gray-200 flex flex-col items-center">
      {/* Main Content */}
      <div className="text-center">
        
        <div className="flex-1 justify-start mt-4">
          <h1 className="text-xl text-destructive font-bold">
          Our <span className="underline">Vetted</span>{" "} 
          <span className=" text-secondary">Insiders:</span>
          </h1>
       <div>
       <p className="mt-2 font-lg text-md text-destructive s">
        Educated at Leading Universities, Trained in Top Summer Programs, Selected for Prestigious Internships.
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
