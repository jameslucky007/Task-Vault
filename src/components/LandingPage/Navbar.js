"use client";
import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesGantt, X, TrendingUp, ChevronDown} from "lucide-react";
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
          ${
            scrolled
              ? "backdrop-blur-xl bg-white/25 border-gray-50 shadow-sm"
              : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex gap-2 items-center font-semibold text-gray-900"
        >
          <Image src="/logo.svg" alt="Task Vault logo" width={30} height={30} />
          <span className="tracking-wide text-lg flex gap-2">Task Vault</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-9 text-gray-800 font-medium">
          {/* Main Nav Links */}
          {["Home", "Support", "Log In"].map((item) => (
            <a key={item} href="#" className="relative group">
              <span className="cursor-pointer transition-colors duration-200 group-hover:text-gray-900">
                {item}
              </span>
              <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Dropdown */}
          <div className="relative group cursor-pointer">
            <span className="transition-colors duration-200 group-hover:text-gray-900 flex ">
              Useful Links <ChevronDown size={18} className="mt-1" />
            </span>

            <div
              className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 scale-95 
                    group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-20"
            >
              <ul className="py-2 text-sm text-gray-700">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Donate ❤️</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">About Us </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">Documentation</a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <a href="#">GitHub</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sign Up Button */}
          <button className="flex gap-3 px-3 py-1.5 text-l font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 transition">
            Sign up <TrendingUp />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg bg-white hover:bg-gray-200 text-gray-800 transition"
        >
          {menuOpen ? (
            <X className="text-3xl" />
          ) : (
            <ChartNoAxesGantt className="text-2xl" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white text-gray-900 flex flex-col items-center justify-center gap-8 z-40 transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {["Home", "Docs", "Support", "Contact", "Release notes"].map((item) => (
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
