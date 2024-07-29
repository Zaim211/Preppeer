


import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqs } from "../constants/index";

const Informations = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="px-8 py-12 border rounded-lg shadow-lg mx-auto max-w-screen-lg">
      <h2 className="text-xl font-bold mb-8 text-center">What other mentors have asked us…</h2>
      <div className="space-y-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg shadow-md"
          >
            <div
              className="p-8 cursor-pointer flex items-center justify-between"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-bold">{faq.question}</h3>
              {expandedIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
            {expandedIndex === index && (
              <div className="p-6 text-gray-700 text-lg font-bold italic">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Informations;
