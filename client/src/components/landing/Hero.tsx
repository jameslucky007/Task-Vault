"use client";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center pt-32 pb-20 text-center overflow-hidden bg-zinc-50"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:80px_80px]"
          style={{
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)"
          }}
        />
      </div>

      <Navbar />

      <div className="relative z-20 w-full max-w-5xl px-6 flex-1 flex flex-col items-center justify-center">
        {/* Availability Badge */}
        <div className="mb-6 flex justify-center mt-12 md:mt-0">
          <div className="inline-flex items-center gap-2 bg-white border border-zinc-200 text-zinc-600 px-4 py-1.5 rounded-full text-xs font-medium shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            only 4 slots available
          </div>
        </div>

        {/* Floating Avatars (Absolute Positioned) */}
        <div className="absolute top-[5%] lg:top-[15%] left-[5%] lg:left-[10%] bg-white p-1 rounded-xl shadow-md border border-zinc-100 hidden sm:block">
          <div className="w-12 h-12 rounded-lg bg-zinc-100 overflow-hidden">
            <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute top-[5%] lg:top-[15%] right-[5%] lg:right-[10%] bg-white p-1 rounded-xl shadow-md border border-zinc-100 hidden sm:block">
          <div className="w-12 h-12 rounded-lg bg-zinc-100 overflow-hidden">
            <img src="https://i.pravatar.cc/150?img=12" alt="Avatar" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute bottom-[20%] lg:bottom-[30%] left-[2%] lg:left-[15%] bg-white p-1 rounded-xl shadow-md border border-zinc-100 hidden sm:block">
          <div className="w-12 h-12 rounded-lg bg-black overflow-hidden flex items-center justify-center">
            <img src="https://i.pravatar.cc/150?img=33" alt="Avatar" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
        <div className="absolute bottom-[20%] lg:bottom-[30%] right-[2%] lg:right-[15%] bg-white p-1 rounded-xl shadow-md border border-zinc-100 hidden sm:block">
          <div className="w-12 h-12 rounded-lg bg-black overflow-hidden flex items-center justify-center">
            <img src="https://i.pravatar.cc/150?img=14" alt="Avatar" className="w-full h-full object-cover grayscale" />
          </div>
        </div>
        <div className="absolute bottom-[5%] lg:bottom-[10%] left-1/2 -translate-x-1/2 bg-white p-1.5 rounded-xl shadow-lg border border-zinc-100 hidden sm:block">
          <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center bg-gradient-to-br from-amber-600 to-amber-800">
             <div className="w-8 h-8 rounded-full bg-white/20 blur-sm"></div>
          </div>
        </div>

        {/* Heading and Subtext */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 mb-6 leading-[1.05] max-w-4xl mx-auto tracking-tight mt-10">
          We Design simple and <br className="hidden sm:block" />
          high converting websites
        </h1>
        
        <p className="text-zinc-500 text-base sm:text-lg max-w-xl mx-auto mb-10 font-medium">
          we turn your ideas into high-impact digital experiences.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-30">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-zinc-900/20 w-full sm:w-auto hover:bg-zinc-800 transition-all border border-zinc-800"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
            Book a call
          </a>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 font-medium px-6 py-3 rounded-xl shadow-sm w-full sm:w-auto hover:bg-zinc-50 transition-all"
          >
             <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            View Pricing
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-zinc-200/60 pt-10">
          <div className="flex flex-col items-center text-center gap-1">
            <span className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">300k</span>
            <span className="text-xs md:text-sm text-zinc-500 font-medium">New users</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <span className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">76M</span>
            <span className="text-xs md:text-sm text-zinc-500 font-medium">Assets Secured</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <span className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">10+</span>
            <span className="text-xs md:text-sm text-zinc-500 font-medium">Years of experience</span>
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <span className="text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight">98%</span>
            <span className="text-xs md:text-sm text-zinc-500 font-medium">customer satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}
