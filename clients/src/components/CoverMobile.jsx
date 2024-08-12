import React, { useState } from 'react';
import hero2 from "../assets/images/hero2.png";

const CoverMobile = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const questions = [
    {
      question: "Differentiate Yourself",
      answer: "Gain insider knowledge about the university before you even attend. Understand the vibe and identity of the institution, and use this key information to make your essays stand out."
    },
    {
      question: "Valuable Insider’s Background at Your Fingertips",
      answer: "Every minute counts in the college application process. Explore the profiles of our mentors, learn from their experiences, and ask questions to boost your chances of acceptance."
    },
    {
      question: "Choose a University Where You’ll Thrive",
      answer: "Discuss your concerns and questions with our insiders. Access exclusive information about the school that you won't find on websites, and select the university where you will truly thrive."
    }
  ];

  const toggleQuestion = index => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div 
      className="relative flex flex-col md:pl-32 md:pb-12 md:pt-12 h-full w-full bg-gray-200 bg-cover bg-center"
      style={{ backgroundImage: `url(${hero2})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center w-full z-10">
        <h1 className="text-4xl p-4 md:text-6xl font-semibold md:mb-2 text-white">
          Why <span className="text-secondary">PrepPeer ?</span>
        </h1>
        <p className="font-lg p-2 text-white text-lg ">One critical insight can make or break your battle plan.</p>
      </div>
      <div className="relative space-y-2 text-white z-10">
        {questions.map((item, index) => (
          <div key={index} className="p-4 rounded-lg bg-black/50 bg-opacity-70">
            <div 
              className="flex items-center justify-between text-xl md:text-4xl font-semibold cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h2>
                {item.question}
              </h2>
              <span className={`transform transition-transform duration-300 ${openQuestion === index ? 'rotate-180' : ''}`}>
                &#9660;
              </span>
            </div>
            {openQuestion === index && (
              <p className="text-base md:text-2xl mt-4">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoverMobile;
