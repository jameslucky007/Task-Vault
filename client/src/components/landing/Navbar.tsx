"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const menu = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Feature",
    href: "#",
  },
  {
    title: "Support",
    href: "#",
  },
  {
    title: "Donate ❤️",
    href: "#",
  },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 20,
    });
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-aos="fade-down"
      className="fixed top-5 left-0 z-50 flex w-full justify-center px-4 sm:px-6"
    >
      <nav className="relative flex w-full max-w-6xl items-center justify-between rounded-sm border border-zinc-200 bg-white/90 px-3 shadow-md backdrop-blur-xl transition-all duration-300">
        
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="group flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 active:rotate-2"
        >
          <Image
            src="/logo.svg"
            alt="Logo"
            width={70}
            height={70}
            priority
            className="transition-all duration-500 group-hover:rotate-6 group-active:scale-95"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative flex h-[50px] items-center justify-center border-l border-zinc-100 px-8 text-[15px] font-medium text-zinc-700 transition-all duration-300 first:border-l-0 hover:bg-zinc-50 hover:text-black active:scale-95
                after:absolute after:bottom-4 after:left-6 after:right-6 after:origin-center after:scale-x-0 after:rounded-full after:bg-black after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right Section (Sign In + Mobile Toggle) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Sign In Button (Hidden on extra small screens to save space) */}
          <Link
            href="/contact"
            className="group hidden sm:flex items-center gap-3 rounded-sm bg-zinc-900 px-6 py-3 text-white
              shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-2xl active:scale-95 active:rotate-1"
          >
            <span className="h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-150" />
            <span className="text-sm font-medium">Sign In</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-zinc-200 bg-zinc-50 text-zinc-700 transition-all hover:bg-zinc-100 active:scale-95 lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              // Close Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              // Hamburger Menu Icon
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-[calc(100%+0.5rem)] flex w-full flex-col overflow-hidden rounded-sm border border-zinc-200 bg-white/95 p-3 shadow-xl backdrop-blur-xl lg:hidden">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center rounded-sm px-4 py-3 text-[15px] font-medium text-zinc-700 transition-colors hover:bg-zinc-50 hover:text-black active:bg-zinc-100"
              >
                {item.title}
              </Link>
            ))}
            
            {/* Sign In Button for Extra Small Screens */}
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="group mt-2 flex items-center justify-center gap-3 rounded-sm bg-zinc-900 px-6 py-3 text-white shadow-lg transition-all active:scale-95 sm:hidden"
            >
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="text-sm font-medium">Sign In</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}