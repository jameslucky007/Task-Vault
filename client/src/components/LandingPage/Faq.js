import React, { useState } from "react";

const QUESTIONS = [
  {
    q: "What is Task Vault?",
    a: "Task Vault is a lightweight habit and task tracker focused on visual consistency. It helps you mark daily progress, visualize patterns, and build routines that stick.",
  },
  {
    q: "Is my data private?",
    a: "Yes — data is private by default. You control exports and sharing; no unnecessary analytics or public feeds are enabled unless you opt in.",
  },
  {
    q: "Can I use Task Vault on mobile?",
    a: "Absolutely. The site is responsive and works great on phones and tablets. A dedicated native app may be available in the future.",
  },
  {
    q: "Can I export my data?",
    a: "Yes — you can export your habit history in a simple CSV format for backups or analysis.",
  },
  {
    q: "How do I track multiple habits or goals?",
    a: "Create separate trackers for each habit or goal. Use tags or labels to group related items and focus on what matters most each day.",
  },
  {
    q: "Where can I get help or support?",
    a: "Visit the Support page from the top navigation or email the team via the contact link. Donations and feedback are welcome on the Donate page.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="w-full bg-white px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 text-center mb-6">Frequently asked questions</h2>
        <p className="text-center text-zinc-500 max-w-2xl mx-auto mb-10">Answers to common questions about how Task Vault works, privacy, and getting support.</p>

        <div className="space-y-4">
          {QUESTIONS.map((item, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIndex === idx}
                aria-controls={`faq-panel-${idx}`}
              >
                <div>
                  <p className="text-zinc-900 font-semibold">{item.q}</p>
                </div>

                <svg
                  className={`h-5 w-5 transition-transform duration-200 ${openIndex === idx ? "rotate-180 text-zinc-700" : "text-zinc-400"}`}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                id={`faq-panel-${idx}`}
                className={`px-5 pb-5 transition-all duration-200 ${openIndex === idx ? "pt-0 max-h-screen" : "pt-0 max-h-0 overflow-hidden"}`}
              >
                <p className="text-zinc-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;