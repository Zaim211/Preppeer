// import Hero from "../components/Hero";
// import About from "../components/About";
// import Cover from "../components/Cover";

// import ConsultantContent from "../components/ConsultantContent";
// import FeedbackForm from "../components/FeedbackForm";
// const IndexPage = () => {
//   return (
//     <>
//       <div className="w-full">
//         <Hero />
//       </div>

//       <About />
//       <div className="">
//         <Cover />
//       </div>

//       <ConsultantContent />
//       <FeedbackForm />
//     </>
//   );
// };

// export default IndexPage;
import Hero from "../components/Hero";
import About from "../components/About";
import Cover from "../components/Cover";
import ConsultantContent from "../components/ConsultantContent";
import FeedbackForm from "../components/FeedbackForm";

const IndexPage = () => {
  return (
    <>
      <div className="w-full">
        <Hero />
      </div>


      <About />

      <div className="h-px bg-gray-300 opacity-50 py-[0.5px]"></div>

      <div className="">
        <Cover />
      </div>

      <div className="h-px bg-gray-300 opacity-50 py-[0.5px]"></div>

      <ConsultantContent />

      <div className="h-px bg-gray-300 opacity-50 py-[0.5px]"></div>

      <FeedbackForm />
    </>
  );
};

export default IndexPage;
