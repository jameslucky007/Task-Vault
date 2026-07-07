"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Menu, X } from "lucide-react";
import "aos/dist/aos.css";

const menu = [
  { title: "Home", href: "/" },
  { title: "Feature", href: "#features" },
  { title: "Contact Us", href: "/contact" },
  { title: "Help", href: "/help" },
  { title: "Support ❤️", href: "/support" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 20,
    });
  }, []);

  // Close mobile menu on navigation
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-aos="fade-down"
      className="fixed top-2 sm:top-5 left-0 z-100 flex w-full justify-center px-4 sm:px-6"
    >
      <nav className="relative flex w-full max-w-6xl items-center justify-between rounded-xl border border-zinc-200 bg-white/95 px-4 py-2 shadow-md backdrop-blur-xl transition-all duration-300">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="group flex h-12 w-auto items-center justify-center gap-3 rounded-xl px-2 transition-transform duration-300 hover:scale-105 active:scale-95"
          aria-label="Home"
        >
          <Image
            src="/logo.svg"
            alt="Brand Logo"
            width={48}
            height={48}
            priority
            className="transition-transform duration-500 group-hover:rotate-6"
          />
          <span className="text-xl font-bold text-zinc-900">Grid Tick</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          {menu.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`relative flex h-12.5 items-center justify-center px-8 text-[15px] font-medium text-zinc-700 transition-colors duration-300 hover:text-black active:scale-95 ${
                index !== 0 ? "border-l border-zinc-100" : ""
              } after:absolute after:bottom-2 after:left-6 after:right-6 after:origin-center after:scale-x-0 after:rounded-full after:border-b-2 after:border-black after:transition-transform after:duration-300 hover:after:scale-x-100`}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Sign In & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/signup"
            className="group hidden sm:flex items-center gap-3 rounded-lg bg-zinc-900 px-5 py-2.5 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:shadow-lg active:scale-95"
          >
            <span className="h-2 w-2 rounded-full bg-white transition-transform duration-300 group-hover:scale-150" />
            <span className="text-sm font-medium">Sign up</span>
          </Link>

          {/* Mobile Menu Toggle Button (Hamberger Menu) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-900 transition-colors hover:bg-zinc-200 active:scale-95 lg:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-[110%] z-110 flex w-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white p-3 shadow-2xl lg:hidden">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={handleLinkClick}
                className="flex items-center rounded-lg px-4 py-3 text-[16px] font-semibold text-zinc-800 transition-colors hover:bg-zinc-100 hover:text-black active:bg-zinc-200"
              >
                {item.title}
              </Link>
            ))}

            {/* Mobile Sign In Button (Visible only on extra small screens) */}
            <Link
              href="/signup"
              onClick={handleLinkClick}
              className="group mt-3 flex items-center justify-center gap-3 rounded-lg bg-zinc-900 px-6 py-3.5 text-white shadow-md transition-all active:scale-95 sm:hidden"
            >
              <span className="h-2 w-2 rounded-full bg-white" />
              <span className="text-base font-medium">Sign Up</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
