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
      <div className="">
        <Cover />
      </div>

      <ConsultantContent />
      <FeedbackForm />
    </>
  );
};

export default IndexPage;
