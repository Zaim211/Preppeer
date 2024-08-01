


import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqs } from "../constants/index";

const Informations = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="px-8 py-12  border rounded-lg shadow-lg mx-auto max-w-screen-lg">
      <h2 className="text-6xl font-bold mb-8 text-center">FAQs</h2>
      <div className="space-y-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" border-b-2 border-black rounded-lg shadow-md"
          >
            <div
              className="p-8 cursor-pointer flex items-center justify-between"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-2xl font-bold">{faq.question}</h3>
              {expandedIndex === index ? (
                <FaChevronUp className="text-black" />
              ) : (
                <FaChevronDown className="text-black" />
              )}
            </div>
            {expandedIndex === index && (
              <div className="p-6 text-gray-700 text-xl font-bold italic">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Informations;
