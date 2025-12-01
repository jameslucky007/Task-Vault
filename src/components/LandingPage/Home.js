"use client";
import { Download, Book, Laptop, Code2, Hand } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/HeroBg.jpg')] bg-cover bg-top opacity-35"></div>
      <div className="relative z-10 w-full max-w-5xl px-6">
        {/* Version Bar */}
        <a href="#" className=" cursor-pointer flex flex-wrap items-center justify-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-6 shadow-sm w-fit mx-auto hover:-translate-y-1 transition">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" />
          v0.21.1: Find-in-page bug fixes →
        </a>

        {/* Feature information Text*/}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 mb-8 sm:mb-10 text-gray-600 text-xs sm:text-sm md:text-base font-medium">
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-gray-500" />
            <span>Code optional</span>
          </div>
          <div className="flex items-center gap-2">
            <Hand className="w-4 h-4 text-gray-500" />
            <span>Drag & drop builder</span>
          </div>
          <div className="flex items-center gap-2">
            <Laptop className="w-4 h-4 text-gray-500" />
            <span>Windows, Mac, Linux</span>
          </div>
        </div>
        {/* Heading and Subtext */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-snug m:leading-tight max-w-3xl mx-auto px-2">
          Web app to desktop app in minutes{" "}
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 px-3">
          Take your web app codebase and transform it into a cross-platform
          desktop app with native functionality.{" "}
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <button className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-800 text-white     font-semibold px-6 py-3 rounded-lg shadow-md w-full sm:w-auto transition-all">
            <Download className="w-4 h-4" /> Download now{" "}
          </button>

          <button className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400    hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-lg w-full sm:w-auto transition-all">
            <Book className="w-4 h-4" /> Read Docs{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
