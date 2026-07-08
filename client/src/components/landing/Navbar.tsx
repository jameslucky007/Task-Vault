"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import AOS from "aos";
import { Menu, X } from "lucide-react";
import "aos/dist/aos.css";
import Button from "../ui/Button";

const menu = [
  { title: "Home", href: "/" },
  { title: "Feature", href: "#features" },
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
      <nav className="relative flex w-full max-w-6xl items-center justify-between rounded-md border border-zinc-200 bg-white/95 px-4 py-2 shadow-md backdrop-blur-xl transition-all duration-300">
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
      <Button
  href="/auth/login"
  className="px-6 py-2 sm:py-3 text-sm"
>
  Log in
</Button>

  

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
          </div>
        )}
      </nav>
    </header>
  );
}
