"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is Gridtick?",
    answer: "Gridtick is a platform that helps users manage their workflow.",
  },
  {
    question: "Is it free?",
    answer: "Yes, there is a free plan available.",
  },
  {
    question: "How do I get started?",
    answer: "Simply create an account and begin using the platform.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg mb-4 overflow-hidden"
          >
            <button
              className="w-full text-left p-5 flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              <span>{item.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="p-5 border-t">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;