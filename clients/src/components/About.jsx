<<<<<<< HEAD
import React from "react";
import {
  alto,
  bowdoin,
  columbia,
  cornel,
  dartmouth,
  cambridge,
  hongkong,
  nayyang,
  minerve,
  nyu,
  nys,
  nyu2,
  oxford,
  peking,
  jhu,
  antler,
  bi,
  boldr,
  us,
  vc,
  ey,
  ibm,
  mashreq,
  coinhako,
  cocacola,
  jpmorgan,
  roland,
  shoroq,
  slush,
  c5,
  erasmus,
  lumiere,
  techgirls,
  notredame,
  opensociety,
  technovation,
  virginia,
  yygs,
=======
import { 
  alto, bowdoin, columbia, cornell, dartmouth, cambridge, hongkong, nayyang, minerve, nyu, nys, nyu2,
  oxford, peking, jhu, antler, bi, boldr, us, vc, ey, ibm, mashreq, coinhako, cocacola, jpmorgan, roland, 
  shoroq, slush, c5, erasmus, lumiere, techgirls, notredame, opensociety, technovation, virginia, yygs,
>>>>>>> a938492363cdabda370358a6a939e75ff6b9887a
} from "../assets";
import AboutMobile from "./AboutMobile";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const universities1 = [
    bowdoin,
    columbia,
    cornel,
    dartmouth,
    cambridge,
    hongkong,
    nayyang,
    minerve,
    nyu,
    nys,
  ];
  const universities2 = [
    minerve,
    nyu,
    nys,
    nyu2,
    oxford,
    peking,
    jhu,
    alto,
    columbia,
    cornel,
    dartmouth,
  ];
  const programs = [
    c5,
    erasmus,
    lumiere,
    techgirls,
    notredame,
    opensociety,
    technovation,
    virginia,
    yygs,
  ];
  const sponsors = [
    antler,
    bi,
    boldr,
    us,
    vc,
    ey,
    ibm,
    mashreq,
    coinhako,
    cocacola,
    jpmorgan,
    roland,
    shoroq,
    slush,
  ];

  const renderRow = (images, animationClass) => {
    return (
      <div className={`sponsor-row ${animationClass}`}>
        <div className="flex gap-6 mb-6">
          {[...images,...images].map((image, index) => {
            return (
              <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              className="h-20 w-20 object-contain"
            />
            )
          })}
        </div>
      </div>
    );
  };

  const isMobileDevice = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobileDevice) {
    return (
      <div className="w-full">
        <AboutMobile />
      </div>
    );
  }

  return (
    <div className="md:p-2 flex flex-col border-t  w-full bg-gray-200">
      <div className="w-full max-w-full mb-6">
        <div className="flex-1 p-4 justify-start mt-4">
          <h1 className="text-3xl text-destructive font-bold">
<<<<<<< HEAD
            Our <span className="underline">Vetted</span>{" "}
            <span className=" text-secondary">Insider</span> Mentors:
          </h1>
          <div>
            <p className="mt-2 font-lg text-2xl text-destructive s">
              Educated at Leading Universities/Trained in Top Summer
              Programs/Selected for Prestigious Internships
            </p>
          </div>
=======
          Our <span className="underline">Vetted</span>{" "} 
          <span className=" text-secondary">Insiders:</span>
          </h1>
       <div>
       <p className="mt-2 font-lg text-2xl text-destructive s">
        Educated at Leading Universities, Trained in Top Summer Programs, Selected for Prestigious Internships.
        </p>
       </div>
>>>>>>> a938492363cdabda370358a6a939e75ff6b9887a
        </div>
        <div className="mt-12 max-w-auto w-full space-y-4 hide-scrollbar">
          <div className="w-full overflow-hidden">
            {renderRow(universities1, "row-0")}
            {renderRow(universities2, "row-1")}
          </div>
<<<<<<< HEAD
          <div className="w-full gap-8">{renderRow(sponsors, "row-0")}</div>
          <div className="w-full overflow-hidden flex gap-2 items-center justify-center">
            {renderRow(programs, "row-0")}
=======
          <div className="w-full gap-8">
            {renderRow([...sponsors,...programs], "row-0")}
>>>>>>> a938492363cdabda370358a6a939e75ff6b9887a
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
