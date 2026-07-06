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
      {/* Stats Section (Cleaned and made responsive) */}
      {/* <div className="relative z-20 w-full max-w-6xl mx-auto px-4 mt-24 md:mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-zinc-200/60 pt-12 pb-8">
          <div className="flex flex-col items-center text-center gap-1.5">
            <span className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tighter">300k</span>
            <span className="text-sm md:text-base text-zinc-500 font-medium">New users</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <span className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tighter">76M</span>
            <span className="text-sm md:text-base text-zinc-500 font-medium">Assets Secured</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <span className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tighter">10+</span>
            <span className="text-sm md:text-base text-zinc-500 font-medium">Years experience</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <span className="text-4xl md:text-5xl font-extrabold text-zinc-900 tracking-tighter">98%</span>
            <span className="text-sm md:text-base text-zinc-500 font-medium">Satisfaction</span>
          </div>
        </div>
      </div> 
      */}

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

              {/* Description (flex-grow pushes it to fill space, keeping cards equal height) */}
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