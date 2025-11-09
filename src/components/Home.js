'use client';
import { Download, Book, Laptop, Code2, Hand } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-grain flex flex-col items-center justify-center text-center px-6 py-20 sm:py-28 md:top-2 top-20">
      {/* Make content above bg */}
      <div className="relative z-10">

        {/* 🔸 Top Badge */}
        <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-sm">
          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
          v0.21.1: Find-in-page bug fixes →
        </div>

        {/* 🔹 Feature Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-gray-600 text-sm font-medium">
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

        {/* 🧱 Heading + Subtext */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight max-w-3xl mx-auto">
          Web app to desktop app in minutes
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Take your web app codebase and transform it into a cross-platform desktop app with native functionality.
        </p>

        {/* ⚙️ Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all">
            <Download className="w-4 h-4" />
            Download now
          </button>

          <button className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-lg transition-all">
            <Book className="w-4 h-4" />
            Read Docs
          </button>
        </div>
      </div>
    </section>
  );
}
