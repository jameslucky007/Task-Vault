"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import { BlinkingBox } from "@/types/hero";
import "aos/dist/aos.css";
import Link from "next/link";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [blinkingBoxes, setBlinkingBoxes] = useState<{
    id: number;
    col: number;
    row: number;
    delay: number;
    duration: number;
  }[]>([]);

  useEffect(() => {
    // 1. Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    // 2. Hydration safeguard & Grid Box Logic
    setMounted(true);

    // Rows And Columns Calculation for Blinking Boxes 
    const generateBoxes = () => {
      const cols = Math.floor(window.innerWidth / 62);
      const rows = Math.floor(window.innerHeight / 62);
      return Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        col: Math.floor(Math.random() * cols),
        row: Math.floor(Math.random() * rows),
        delay: Math.random() * 8,
        duration: Math.random() * 2 + 1.5,
      }));
    };
    setBlinkingBoxes(generateBoxes());

    // Random Blinking Boxes 
    const interval = setInterval(() => {
      setBlinkingBoxes(generateBoxes());
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center pt-32 pb-8 text-center overflow-hidden bg-zinc-100"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:62px_62px]" />
        
        {/* Randomly Blinking Grid Boxes (Hydration Safe) */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {blinkingBoxes.map((box) => (
              <div
                key={box.id}
                className="absolute bg-zinc-200 transition-all rounded-sm"
                style={{
                  width: "61px", 
                  height: "61px",
                  left: `${box.col * 62 + 1}px`, 
                  top: `${box.row * 62 + 1}px`, 
                  animation: `blinkBox ${box.duration}s ease-in-out infinite ${box.delay}s`,
                }}
              />
            ))}
          </div>
        )}
        
        {/* Bottom Fade Design */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-20 w-full max-w-5xl px-4 sm:px-6 flex-1 flex flex-col items-center justify-center">
        
        {/* Availability Badge */}
        <div 
          className="mb-6 flex justify-center md:mt-0"
          data-aos="fade-down"
        >
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-md border border-zinc-200/80 text-zinc-700 px-5 py-2 sm:px-8 sm:py-2 rounded-full text-sm sm:text-base font-semibold shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default">
            {/* Bigger, smoothly bouncing dot with a subtle glow */}
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-blue-500 animate-smooth-bounce shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
            Version 0.0.1 
          </div>
        </div>

        {/* Heading and Subtext */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] max-w-4xl mx-auto tracking-tight mt-6 sm:mt-10 text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-500"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We Design simple and <br className="hidden sm:block" />
          high converting websites
        </h1>
        
        <p 
          className="text-zinc-500 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-10 sm:mb-12 font-medium px-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We turn your ideas into high-impact digital experiences that drive real results.
        </p>
        
        {/* Buttons */}
        <div 
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 w-full sm:w-auto relative z-30 px-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
            href="#Pricing"
            className="group inline-flex items-center justify-center gap-2 bg-zinc-900 text-white font-medium px-8 py-3.5 sm:py-4 shadow-lg shadow-zinc-900/20 w-full sm:w-auto hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/30 transition-all duration-300 border border-zinc-800"
          >
            <span className="w-2 h-2 rounded-full bg-white/80 group-hover:animate-ping" />
            Get Started
          </Link>

          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 font-medium px-8 py-3.5 sm:py-4 rounded-md shadow-sm w-full sm:w-auto hover:bg-zinc-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 transition-colors duration-300" />
            Documentation
          </a>
        </div>
      </div>
    </section>
  );
}