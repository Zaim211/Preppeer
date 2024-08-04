import React from "react";
import { 
  alto, bowdoin, columbia, cornell, dartmouth, cambridge, hongkong, nayyang, minerve, nyu, nys, nyu2,
  oxford, peking, jhu, antler, bi, boldr, us, vc, ey, ibm, mashreq, coinhako, cocacola, jpmorgan, roland, 
  shoroq, slush, c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs,
} from "../assets";
import AboutMobile from "./AboutMobile";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const universities1 = [ bowdoin, columbia, cornell, dartmouth, cambridge, hongkong, nayyang, minerve, nyu, nys];
  const universities2 = [ minerve, nyu, nys, nyu2, oxford, peking, jhu, alto, columbia, cornell, dartmouth ];
  const programs = [ c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs ];
  const sponsors = [ antler, bi, boldr, us, vc, ey, ibm, mashreq, coinhako, cocacola, jpmorgan, roland, shoroq, slush,
    c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs
   ];

  const renderRow = (images, animationClass) => {

    return (
      <div className={`sponsor-row ${animationClass}`}>
        <div className="flex gap-6">
          {images.concat(images).map((image, index) => (
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

  const isMobileDevice = useMediaQuery({ query: '(max-width: 768px)' });

  if (isMobileDevice) {
    return (
      <div className="w-full">
        <AboutMobile />
      </div>
    );
  }

  return (
    <div className="md:p-2 flex flex-col border-t items-center  w-full bg-gray-200">
      <div className="w-full max-w-full mb-12">
        <div className="flex items-center mt-12 justify-between">
          <h1 className="text-4xl text-destructive font-bold text-center flex-1">
            Video chat with <span className="underline text-destructive">vetted</span> insiders
            who go to...
          </h1>
        </div>

        <div className="mt-12 max-w-auto w-full space-y-16 hide-scrollbar">
          <div className="w-full overflow-hidden">
            {renderRow(universities1, "row-0")}
            {renderRow(universities2, "row-0")}
          </div>
          <div className="w-full">
            {renderRow(sponsors, "row-1")}
          </div>
          <div className="w-full overflow-hidden flex gap-2 items-center justify-center">
            {renderRow(programs, "row-2")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
