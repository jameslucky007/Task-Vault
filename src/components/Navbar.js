"use client";
import Image from "next/image";
import { ChartNoAxesGantt, X, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          flex items-center justify-between px-5 md:px-10 py-3
          ${scrolled
            ? "backdrop-blur-xl bg-white/30 border-gray-50 shadow-sm"
            : "bg-transparent"}
        `}
      >
        {/* Logo */}
        <a
          href="#"
          className="flex gap-2 items-center font-semibold text-gray-900"
        >
          <span className="tracking-wide text-lg flex gap-2">
            <Image src="/logo.svg" alt="icon" width={30} height={30} />
            Task Vault
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9 text-gray-800 font-medium">
          {["Home", "Docs", "Support",  "Log In"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group"
            >
              <span className="cursor-pointer transition-colors duration-200 group-hover:text-gray-900">
                {item}
              </span>
              {/* Smooth underline animation */}
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          ))}

          {/* Sign in / up Buttons */}
   

          <button className=" flex gap-3 px-3 py-1.5 text-l font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition">
            Sign up    <TrendingUp /></button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-white hover:bg-gray-200 text-gray-800 transition"
        >
          {menuOpen ? <X className="text-3xl" /> : <ChartNoAxesGantt className="text-2xl" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white text-gray-900 flex flex-col items-center justify-center gap-8 z-40 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {["Home", "Docs", "Support", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            onClick={toggleMenu}
            className="text-lg font-medium hover:text-gray-700 transition"
          >
            {item}
          </a>
        ))}

        <div className="mt-8">
          <button
            onClick={toggleMenu}
            className="px-5 py-2 mr-5 border border-gray-300 rounded-md text-gray-800 hover:bg-gray-200 transition"
          >
            Log in
          </button>
          <button
            onClick={toggleMenu}
            className="px-5 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition"
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
