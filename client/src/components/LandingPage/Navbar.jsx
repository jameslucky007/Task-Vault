"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* MENU CONFIG */
const MAIN_MENU = [
  { label: "About us", href: "/#about" },
  { label: "Products", href: "/#products" },
  { label: "Services", href: "/#services" },
  { label: "Our projects", href: "/#projects" },
  { label: "Contact us", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // Scroll blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ease-in-out ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50"
            : "backdrop-blur-md bg-black/20 border border-white/10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${
              scrolled
                ? "bg-white shadow-sm border border-zinc-100"
                : "bg-white/10 border border-white/20 backdrop-blur-md"
            }`}
          >
            <Image
              src={scrolled ? "/logo3.svg" : "/logo-3.svg"}
              alt="Task Vault logo"
              width={26}
              height={26}
              className="transition-transform duration-500 group-hover:rotate-6"
            />
          </div>
          <span
            className={`hidden sm:block text-base font-bold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-zinc-900" : "text-white"
            }`}
          >
            Task Vault
          </span>
        </Link>

        {/* Menu */}
        <div className="hidden lg:flex items-center gap-1 sm:gap-2">
          {MAIN_MENU.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80"
                  : "text-zinc-300 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/auth/signin"
            className={`hidden sm:inline-flex px-4 py-2 rounded-full transition-all duration-300 text-sm font-semibold ${
              scrolled
                ? "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80"
                : "text-zinc-300 hover:text-white hover:bg-white/10"
            }`}
          >
            Log in
          </Link>

          <Link
            href="/auth/signup"
            className={`group inline-flex items-center gap-3 pl-5 pr-1.5 py-1.5 rounded-full shadow-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              scrolled
                ? "bg-zinc-900 text-white hover:bg-black shadow-zinc-200/50"
                : "bg-white text-black hover:bg-zinc-100 shadow-black/20"
            }`}
          >
            <span>Sign up</span>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 ${
                scrolled ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <ArrowRight size={16} strokeWidth={2.5} />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

