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
    title: "Stay consistent.",
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
    <div className="w-full bg-white py-16 md:py-24 px-6 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item, index) => (
          <div key={index} className="flex flex-col gap-4 p-6 rounded-2xl bg-zinc-50/50 border border-zinc-100 hover:border-zinc-200 hover:bg-zinc-50 hover:-translate-y-1 transition-all duration-300 group shadow-sm">

            {/* Icon */}
            <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Label */}
            <p className="text-xs tracking-[0.2em] text-zinc-400 font-semibold">
              {item.label}
            </p>

            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold leading-snug text-zinc-900">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-500 text-sm md:text-base leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Work;