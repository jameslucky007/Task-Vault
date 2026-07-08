"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../ui/Button";

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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const generateBoxes = () => {
      // Calculate how many 62px columns and rows fit on the screen
      const cols = Math.floor(window.innerWidth / 62);
      const rows = Math.floor(window.innerHeight / 62);
      
      // Generate 15 random boxes
      return Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        col: Math.floor(Math.random() * cols),
        row: Math.floor(Math.random() * rows),
        delay: Math.random() * 8,
        duration: Math.random() * 2 + 1.5,
      }));
    };

    setBlinkingBoxes(generateBoxes());

    // Re-randomize the blinking boxes every 4 seconds
    const interval = setInterval(() => {
      setBlinkingBoxes(generateBoxes());
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative  flex flex-col items-center pt-32 pb-8 text-center overflow-hidden bg-zinc-100"
    >
      {/* Custom CSS for our smooth animations */}
      <style>{`
        @keyframes blinkBox {
          0%, 100% { opacity: 0; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes smoothBounce {
          0%, 100% { transform: translateY(-20%); }
          50% { transform: translateY(20%); }
        }
        .animate-smooth-bounce {
          animation: smoothBounce 2.5s ease-in-out infinite;
        }
      `}</style>

      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:62px_62px]" />
        
        {/* Randomly Blinking Grid Boxes */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {blinkingBoxes.map((box) => (
              <div
                key={box.id}
                className="absolute bg-zinc-900/5 transition-all rounded-sm"
                style={{
                  width: "61px", // Fits exactly inside the 62px grid cell (minus the 1px border)
                  height: "61px", // Fits exactly inside the 62px grid cell (minus the 1px border)
                  left: `${box.col * 62 + 1}px`, // +1px offset so it doesn't overlap the left grid line
                  top: `${box.row * 62 + 1}px`, // +1px offset so it doesn't overlap the top grid line
                  animation: `blinkBox ${box.duration}s ease-in-out infinite ${box.delay}s`,
                }}
              />
            ))}
          </div>
        )}
        
        {/* Subtle Bottom Fade to blend with next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-zinc-50 to-transparent pointer-events-none" />
      </div>

      <Navbar />

      <div className="relative z-20 w-full max-w-5xl px-4 sm:px-6 flex-1 flex flex-col items-center justify-center">
        
        {/* Availability Badge */}
        <div 
          className="mb-6 flex justify-center  md:mt-0"
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
          <Button href="/auth/register">
            Get Started
          </Button>

          {/* <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 font-medium px-8 py-3.5 sm:py-4 rounded-xl shadow-sm w-full sm:w-auto hover:bg-zinc-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
          >
             <span className="w-2 h-2 rounded-full bg-zinc-400 group-hover:bg-zinc-600 transition-colors duration-300" />
            View Pricing
          </a> */}
        </div>
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
      </div>  */}
      </div>
    </section>
  );
}