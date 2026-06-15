"use client";
import Navbar from "./Navbar";
import PixelBlast from "../PixelBlast/PixelBlast";

export default function HeroSection() {
  return (

    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            <Navbar />

      <div
        className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-black via-gray-900 to-black"
        aria-hidden="true"
      />

      <div className="absolute inset-0 -z-10 pointer-events-none">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#ffffff"
          patternScale={4}
          patternDensity={0.85}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.4}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* <div aria-hidden="true" className="absolute inset-0 bg-[url('/HeroBg.jpg')] bg-cover bg-top opacity-30"></div> */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        {/* Version Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-black/50 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium shadow-sm">
            <span className="inline-flex items-center justify-center bg-white text-black rounded-full px-2 py-1 text-[10px] font-semibold">NEW</span>
            <span className="text-sm text-white/90">Just shipped v2.0</span>
          </div>
        </div>

        {/* Heading and Subtext */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-snug md:leading-tight max-w-3xl mx-auto px-2">
          A spectrum of colors
          that spark creativity
        </h1>
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 px-3">
          Beautifully designed components and a delightful experience for
          creatives and builders.
        </p>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
          <a
            href="#get-started"
            className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full shadow-md w-full sm:w-auto transition-all"
          >
            Get started
          </a>

          <a
            href="#learn-more"
            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white/90 font-medium px-6 py-3 rounded-full w-full sm:w-auto transition-all"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
