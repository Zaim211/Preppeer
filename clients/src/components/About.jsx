import React from "react";
import {
  alto,
  bowdoin,
  columbia,
  cornell,
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
} from "../assets";

const About = () => {
  const universities1 = [
    bowdoin,
    columbia,
    cornell,
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
    cornell,
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
    console.log(`Rendering row with ${animationClass}`, images);
    const duplicatedImages = images.concat(images);
    return (
      <div className={`sponsor-row ${animationClass}`}>
        <div className="flex">
          {duplicatedImages.map((image, index) => (
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
            Video chat with <span className="underline">vetted</span> insiders
            who go to...
          </h1>
        </div>

        <div className="mt-12 space-y-8 hide-scrollbar">
          <div className="w-full overflow-hidden">
            {renderRow(universities1, "row-0")}
            {renderRow(universities2, "row-0")}
          </div>
          <div className="w-full">{renderRow(sponsors, "row-1")}</div>
          <div className="w-full overflow-hidden flex gap-2 items-center justify-center">
            {renderRow(programs, "row-2")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
