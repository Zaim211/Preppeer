import {
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
  Altouni,
  berkeleyuni,
  boston,
  Bowdoin,
  BrockU,
  columb,
  corn,
  Darh,
  Duk,
  Edin,
  Geor,
  harv,
  HonKon,
  Insea,
  jhuu,
  kimp,
  Michg,
  Menirv,
  Nan,
  nyuA,
  NyuN,
  oxfo,
  Pek,
  Plite,
  Princ,
  Rio,
  russ,
  sing,
  ucl,
  camb,
  tex,
  unsw,
  usf,
  syracuse,
  weslyyan,
  wrocl,
  yaleU,
} from "../assets";
import AboutMobile from "./AboutMobile";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const universities1 = [
    Altouni,
    berkeleyuni,
    boston,
    Bowdoin,
    BrockU,
    columb,
    corn,
    Darh,
    Duk,
    Edin,
    Geor,
    harv,
    HonKon,
    Insea,
    jhuu,
    kimp,
    Michg,
    Menirv,
    
  ];
  const universities2 = [
    Nan,
    nyuA,
    NyuN,
    oxfo,
    Pek,
    Plite,
    Princ,
    Rio,
    russ,
    sing,
    ucl,
    camb,
    tex,
    unsw,
    usf,
    syracuse,
    weslyyan,
    wrocl,
    yaleU,
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
          {[...images, ...images].map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                className="h-20 w-20 object-contain"
              />
            );
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
      <div className="w-full max-w-full mb-8">
        <div className="flex  justify-center mt-12">
          <h1 className="text-3xl text-destructive font-bold">
            Our Insiders come from Top universities, Elite programs, and
            Prestigious Internships
          </h1>
          <div></div>
        </div>
        <div className="mt-16 max-w-auto w-full space-y-4 hide-scrollbar">
          <div className="w-full overflow-hidden">
            {renderRow(universities1, "row-0")}
            {renderRow([...universities2, ...programs], "row-1")}
          </div>
          <div className="w-full gap-8">
            {renderRow([...sponsors, ...programs], "row-0")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
