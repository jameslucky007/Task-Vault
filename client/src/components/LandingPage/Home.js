"use client";
import Navbar from "./Navbar";
import Particles from '../Background/Particles';

export default function HeroSection() {
  return (

    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <Navbar />

      <div
        className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-black via-zinc-950 to-black"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <Particles
          particleColors={["#a5b4fc", "#ffffff", "#e2e8f0"]}
          particleCount={400}
          particleSpread={20}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      {/* Radial Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/5 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-violet-600/3 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="relative z-10 w-full max-w-5xl px-6">
        {/* Version Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-black/60 border border-white/10 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm">
            <span className="inline-flex items-center justify-center bg-indigo-500 text-white rounded-full px-2 py-1 text-[10px] font-semibold">NEW</span>
            <span className="text-sm text-white/90">Just shipped v2.0</span>
          </div>
        </div>

        {/* Heading and Subtext */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-snug md:leading-tight max-w-3xl mx-auto px-2 tracking-tight">
          Track your habits.
          <br />
          Master your consistency.
        </h1>
        <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 px-3 leading-relaxed">
          Smart tasks and habit tracking designed for builders. 
          Visualize your progress, lock in consistency, and build routines that stick.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full shadow-md w-full sm:w-auto hover:bg-gray-200 transition-all"
          >
            Get started
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/10 font-medium px-6 py-3 rounded-full w-full sm:w-auto hover:bg-white/20 transition-all"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
