"use client";

import Image from "next/image";
import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* MENU CONFIG */
const MAIN_MENU = [
  { label: "Home", href: "/#home" },
  { label: "Features", href: "/#features" },
  { label: "About", href: "/#about" },
  { label: "Support", href: "/support" },
  { label: "Donate", href: "/donate" },
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
    <nav
      data-aos="fade-down"
      className="fixed top-6 left-0 w-full z-50 flex justify-center px-4 pointer-events-none"
    >
      <div
        className={`pointer-events-auto w-full max-w-6xl rounded-3xl flex items-center justify-between gap-6 px-6 py-3 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/85 shadow-sm border border-zinc-200/60"
            : "backdrop-blur-xl bg-black/30 border border-white/10"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${scrolled ? "bg-zinc-100" : "bg-white/10"}`}>
            <Image src={scrolled ? "/logo.svg" : "/logo-2.svg"} alt="Task Vault logo" width={22} height={22} />
          </div>
          <span className={`text-sm font-semibold transition-colors ${scrolled ? "text-zinc-900" : "text-white"}`}>Task Vault</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {MAIN_MENU.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-3 py-1 rounded-md transition ${scrolled ? "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900" : "text-white/80 hover:bg-white/5 hover:text-white"}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/auth/signin" className={`hidden sm:inline-flex px-4 py-1.5 rounded-full transition text-sm font-medium ${scrolled ? "text-zinc-600 hover:bg-zinc-100" : "text-white/80 hover:bg-white/5"}`}>
            Log in
          </Link>

          <Link href="/auth/signup" className={`inline-flex items-center gap-2 px-5 py-2 rounded-full shadow-md text-sm font-semibold transition-all ${scrolled ? "bg-black text-white hover:bg-zinc-800" : "bg-white text-black hover:bg-gray-200"}`}>
            Sign up <TrendingUp size={14} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;