"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesGantt,
  X,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* MENU CONFIG */
const MAIN_MENU = [
  { label: "Home", href: "/" },
  { label: "Support", href: "/support" },
];

const USEFUL_LINKS = [
  { label: "Donate ❤️", href: "/donate" },
  { label: "About Us", href: "/about" },
  { label: "Documentation", href: "/docs" },
  { label: "GitHub", href: "https://github.com/jameslucky007/Task-Vault", external: true },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ AOS INIT
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

  // Close dropdown on outside click
  useEffect(() => {
    const close = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLinksOpen(false);
      }
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <>
      <nav
        data-aos="fade-down"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        flex items-center justify-between px-5 md:px-10 py-3
        ${
          scrolled
            ? "backdrop-blur-xl bg-white/25 shadow-sm"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center font-semibold">
          <Image src="/logo.svg" alt="Task Vault logo" width={30} height={30} />
          <span className="text-lg">Task Vault</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-9 font-medium">
          {MAIN_MENU.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}

          {/* Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLinksOpen((p) => !p);
              }}
              className="flex items-center gap-1"
            >
              Useful Links
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  linksOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {linksOpen && (
              <div
                data-aos="zoom-in"
                className="absolute top-full left-0 mt-2 w-44 bg-white rounded-md shadow-lg"
              >
                <ul className="py-2 text-sm">
                  {USEFUL_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target={item.external ? "_blank" : "_self"}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-3">
            <Link
              href="/login"
              className="px-4 py-1.5 border rounded-md"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="flex items-center gap-2 px-4 py-1.5 bg-gray-800 text-white rounded-md"
            >
              Sign up <TrendingUp size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
