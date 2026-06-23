"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Placeholder question goes here?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    question: "Placeholder question goes here?",
    answer:
      "Yes — this is an example answer for the second FAQ item. Brief and to the point.",
  },
  {
    question: "Placeholder question goes here?",
    answer:
      "Short answer for the third item explaining the common concern in one or two sentences.",
  },
  {
    question: "Placeholder question goes here?",
    answer:
      "Final FAQ item with a concise answer that helps users quickly understand the feature.",
  },
];

const PlusIcon = ({ className = "w-4 h-4 text-gray-600" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M12 5v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CloseIcon = ({ className = "w-4 h-4 text-gray-600" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <p className="text-center text-sm text-gray-400 tracking-widest mb-3">TRUSTED BY</p>
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => {
            const open = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-200 ${open ? 'bg-white shadow-xl rounded-2xl border' : 'bg-slate-100 rounded-full'}`}
              >
                <button
                  className={`w-full flex items-center justify-between ${open ? 'px-6 py-5 rounded-2xl' : 'px-6 py-4 rounded-full'}`}
                  onClick={() => toggle(index)}
                  aria-expanded={open}
                  aria-controls={`faq-${index}`}
                >
                  <span className={`text-left flex-1 ${open ? 'text-gray-900 font-medium' : 'text-gray-700 font-medium'}`}>
                    {item.question}
                  </span>

                  <span className="ml-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow">
                      {open ? <CloseIcon /> : <PlusIcon />}
                    </div>
                  </span>
                </button>

                <div
                  id={`faq-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ${open ? 'max-h-96 py-4 border-t' : 'max-h-0'}`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;