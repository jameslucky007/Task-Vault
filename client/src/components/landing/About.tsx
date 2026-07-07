import React from "react";
import Image from "next/image";

import { Zap } from "lucide-react";
// Using React Icons for Social Media
import { FaXTwitter, FaGithub, FaLinkedin, FaYoutube, FaGlobe, FaInstagram } from "react-icons/fa6";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-white px-4 font-sans flex flex-col items-center"
    >
      {/* Top Header Section */}
      <div className="mb-10 flex flex-col items-center justify-center space-y-3 text-center">
        <div className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
          <span className="h-1 w-1 rounded-full bg-zinc-800"></span>
          <span>About Me</span>
        </div>
        <h2 className="text-3xl font-medium tracking-tight text-zinc-900 sm:text-4xl">
          Why I built this
        </h2>
      </div>

      {/* Main Dark Card Container */}
      <main className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] bg-[#111111] p-3 sm:p-4 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          {/* Left Side: Image Container */}
          <div className="relative aspect-square w-full md:w-[35%] overflow-hidden rounded-[1.5rem] bg-zinc-900 shrink-0">
            <Image
              src="/prof.jpg"
              alt="Lucky"
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-[55%] pr-4 md:pr-8 py-4 md:py-6">
            {/* Logo/Brand Indicator */}
            <div className="mb-4 flex items-center gap-2 text-white/90">
              <Zap className="h-4 w-4 fill-white text-white" />
              <span className="text-sm font-bold tracking-wider uppercase">
                Lucky
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-medium tracking-tight text-white sm:text-2xl">
              Solving the consistency problem
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-zinc-400">
              <p>
                I kept running into the same problem—I couldn’t stay focused on
                one thing. I’d start something, lose consistency, and waste days
                without real progress.
              </p>
              <p>
                The bigger issue was this: I had no clear way to track my habits
                daily or actually{" "}
                <strong className="font-semibold text-white">
                  see my consistency
                </strong>
                . Everything felt abstract, and that made it easy to quit.
              </p>
              <p>
                Visual progress changed everything. When consistency becomes
                visible, missing a day creates an actual gap. Staying consistent
                becomes easier, and momentum becomes real.
              </p>
            </div>

            {/* Social Media Icons Container */}
            <div className="mt-8 flex items-center gap-6 pt-6 border-t border-white/10">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaXTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
                  <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
                  <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
                  <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaGlobe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Slider Gradient Dots */}
      <div className="mt-8 flex items-center justify-center gap-1.5 mb-8">
        <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
        <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
        {/* Active Gradient Bar */}
        <div className="h-1.5 w-6 rounded-full bg-gradient-to-r from-indigo-300 via-purple-300 to-orange-300" />
        <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
        <div className="h-1.5 w-1.5 rounded-full bg-zinc-200" />
      </div>

      {/* Bottom Explore Button */}
      {/* <button className="mt-6 rounded-full bg-[#111111] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-black hover:shadow-lg hover:shadow-black/20">
        Explore all Products
      </button> */}
    </section>
  );
};

export default About;