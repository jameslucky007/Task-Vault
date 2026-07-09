import React from "react";

const features = [
  {
    icon: "★",
    label: "TRACK",
    title: "Anything and everything.",
    desc: "Simple by design. Habits. Goals. Moods. Side projects. If it matters to you, it belongs here. One tap marks the day as done.",
  },
  {
    icon: "●",
    label: "VISUALIZE",
    title: "Patterns emerge.",
    desc: "Consistency builds naturally. Over time, your effort turns into something you can actually see and understand.",
  },
  {
    icon: "■",
    label: "FOCUS",
    title: "Always Stay consistent .",
    desc: "Remove noise. Focus on what matters. Build habits without overcomplicating your workflow.",
  },
  {
    icon: "▲",
    label: "PRIVATE",
    title: "Private by default.",
    desc: "Your data stays yours. Clean exports and simple control without unnecessary complexity.",
  },
];

const Work = () => {
  return (
    <>
      {/* Features Section */}
      <div className="w-full bg-white py-16 md:py-24 px-4 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col h-full p-8 rounded-[2rem] bg-zinc-50/50 border border-zinc-100 hover:border-zinc-200 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/20 hover:-translate-y-1.5 transition-all duration-500 ease-out group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 mb-6 rounded-2xl bg-white border border-zinc-100 shadow-sm text-zinc-900 flex items-center justify-center text-xl font-bold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
                {item.icon}
              </div>
              {/* Label */}
              <p className="text-[11px] tracking-[0.25em] uppercase text-zinc-400 font-bold mb-3">
                {item.label}
              </p>
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug text-zinc-900 mb-3">
                {item.title}
              </h3>
              {/* Description */}
              <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-medium flex-grow">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
