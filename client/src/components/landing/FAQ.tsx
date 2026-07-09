"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What industries do you work with?",
    answer:
      "We work with startups, SaaS companies, healthcare, finance, education, logistics, and e-commerce businesses. Our solutions are customized to fit each industry's needs.",
  },
  {
    id: 2,
    question: "How long does implementation take?",
    answer:
      "Project timelines typically range from 2–6 weeks depending on complexity.\n\nSmaller automation systems — such as AI chatbots with CRM integration — can often be deployed within 2–3 weeks.\n\nMore advanced projects involving multi-platform integrations, custom AI logic, internal workflow automation, and reporting dashboards may take 4–6 weeks or longer.",
  },
  {
    id: 3,
    question: "Do we need technical knowledge to work with you?",
    answer:
      "No. We handle the technical implementation while keeping you informed throughout the process. You only need to explain your business requirements.",
  },
  {
    id: 4,
    question: "Is AI automation secure?",
    answer:
      "Yes. We follow modern security practices, encrypted communication, secure authentication, and privacy-first architecture for every solution.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(1);
  return (
    <section className="py-28 bg-[#f7f7f5]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="rounded-full border border-zinc-300 bg-white px-4 py-1 text-xs font-medium text-zinc-600">
            ○ ○ FAQs
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-16">
          Common Questions
        </h2>

        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const active = open === faq.id;

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-[28px] bg-white transition-all duration-300
                ${
                  active
                    ? "border border-indigo-200 shadow-[0_0_0_2px_rgba(99,102,241,0.12)]"
                    : "border border-transparent shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpen(active ? 0 : faq.id)}
                  className="w-full flex items-center justify-between gap-5 px-7 py-6 text-left"
                >
                  <div className="flex items-center gap-5">
                    {/* Number */}
                    <div className="w-8 h-8 rounded-full bg-zinc-100 text-zinc-600 flex items-center justify-center text-xs font-semibold">
                      {faq.id}
                    </div>

                    <h3 className="text-[17px] font-medium text-zinc-900">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shrink-0
                    ${
                      active
                        ? "bg-white border border-zinc-200 text-zinc-500"
                        : "bg-black text-white"
                    }`}
                  >
                    {active ? <X size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    active
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pl-[72px] pr-10 pb-8 text-[15px] leading-7 text-zinc-500 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="text-zinc-500 text-sm">
            Have any other questions?
          </p>

          <button className="mt-3 text-sm font-medium underline underline-offset-4 hover:text-black transition">
            Contact Us →
          </button>
        </div>
      </div>
    </section>
  );
}