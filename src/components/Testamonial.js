"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    name: "Isabella Rodriguez",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/prof.jpg",
  },
  {
    text: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    name: "Gabrielle Williams",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/prof.jpg",
  },
  {
    text: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    name: "Samantha Johnson",
    role: "CEO and Co-founder of ABC Company",
    avatar: "/prof.jpg",
  },
  {
    text: "From concept to execution, their creativity knows no bounds - a game-changer for our brand’s success.",
    name: "Daniel Reed",
    role: "Creative Director",
    avatar: "/prof.jpg",
  },
  {
    text: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    name: "Michael Tran",
    role: "Marketing Lead",
    avatar: "/prof.jpg",
  },
  {
    text: "Their team’s artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    name: "Emily Carter",
    role: "Brand Strategist",
    avatar: "/prof.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full bg-gray-200 py-20 overflow-hidden">
      <h2 className="text-4xl font-semibold text-center mb-16">
        Words of praise from others <br /> about our presence.
      </h2>

      {/* ROW 1 — Left to Right */}
      <div className="group overflow-hidden w-full mb-10">
        <div className="flex gap-6 animate-scroll-right group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white w-[360px] shrink-0 rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-500 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A3.17 3.17 0 0 0 4 9.17v4.66A3.17 3.17 0 0 0 7.17 17H9v-5.83H6.83V9.17A.83.83 0 0 1 7.66 8.34H9V6Zm9 0A3.17 3.17 0 0 0 13 9.17v4.66A3.17 3.17 0 0 0 16.17 17H18v-5.83h-2.17V9.17a.83.83 0 0 1 .83-.83H18V6Z" />
              </svg>

              <p className="text-gray-700 mb-6 leading-relaxed">{t.text}</p>

              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  width={40}
                  height={40}
                  alt={t.name}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROW 2 — Right to Left */}
      <div className="group overflow-hidden w-full">
        <div className="flex gap-6 animate-scroll-left group-hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="bg-white w-[360px] shrink-0 rounded-2xl p-6 shadow-sm border border-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-500 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 6A3.17 3.17 0 0 0 4 9.17v4.66A3.17 3.17 0 0 0 7.17 17H9v-5.83H6.83V9.17A.83.83 0 0 1 7.66 8.34H9V6Zm9 0A3.17 3.17 0 0 0 13 9.17v4.66A3.17 3.17 0 0 0 16.17 17H18v-5.83h-2.17V9.17a.83.83 0 0 1 .83-.83H18V6Z" />
              </svg>

              <p className="text-gray-700 mb-6 leading-relaxed">{t.text}</p>

              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar}
                  width={50}
                  height={50}
                  alt={t.name}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
