"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MAIN_MENU = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/#products" },
  { label: "About", href: "/#services" },
  { label: "Support", href: "/#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-4 sm:top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none">
      <div
        className={`pointer-events-auto w-full max-w-5xl rounded-full flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50"
            : "backdrop-blur-md bg-black/20 border border-white/10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-105`}
          >
            <Image
              src="/logo3.svg"
              alt="Task Vault Logo"
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
        <div className="hidden lg:flex items-center gap-2">
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

        {/* Button */}
        <div className="flex items-center gap-3">
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
}