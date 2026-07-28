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
  { title: "Help", href: "/help" },
  { title: "Price", href: "#Price" },
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

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      data-aos="fade-down"
      className="fixed left-0 top-2 z-50 flex w-full justify-center px-2 sm:top-4 sm:px-4 md:top-5 md:px-6"
    >
      <nav
        className="
          relative
          flex
          w-full
          max-w-6xl
          items-center
          justify-between
          rounded-md
          border
          border-zinc-200
          bg-white/95
          px-2
          py-2
          shadow-md
          backdrop-blur-xl
          transition-all
          duration-300
          sm:px-4
          md:px-6
        "
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="
            group
            flex
            h-10
            min-w-0
            flex-shrink-0
            items-center
            justify-center
            gap-2
            rounded-xl
            px-1
            transition-transform
            duration-300
            hover:scale-105
            active:scale-95
            sm:h-12
            sm:gap-3
            sm:px-2
          "
          aria-label="Grid Tick Home"
        >
          <Image
            src="/logo.svg"
            alt="Grid Tick Logo"
            width={48}
            height={48}
            priority
            className="
              h-auto
              w-8
              flex-shrink-0
              transition-transform
              duration-500
              group-hover:rotate-6
              sm:w-10
              md:w-12
            "
          />

          <span
            className="
              hidden
              whitespace-nowrap
              text-base
              font-bold
              text-zinc-900
              min-[400px]:inline
              sm:text-xl
            "
          >
            Grid Tick
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center md:flex">
          {menu.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`
                relative
                flex
                h-11
                items-center
                justify-center
                px-4
                text-sm
                font-medium
                text-zinc-700
                transition-colors
                duration-300
                hover:text-black
                active:scale-95

                after:absolute
                after:bottom-2
                after:left-6
                after:right-6
                after:origin-center
                after:scale-x-0
                after:rounded-full
                after:border-b-2
                after:border-black
                after:transition-transform
                after:duration-300

                hover:after:scale-x-100

                lg:h-12
                lg:px-8
                lg:text-[15px]

                ${
                  index !== 0
                    ? "border-l border-zinc-100"
                    : ""
                }
              `}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="ml-auto flex flex-shrink-0 items-center gap-1.5 sm:gap-3 md:ml-0">
          {/* Sign In Button */}
          <Link
            href="/auth/login"
            onClick={handleLinkClick}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-1.5
              whitespace-nowrap
              rounded-sm
              border
              border-zinc-800
              bg-zinc-900
              px-3
              py-2
              text-xs
              font-medium
              text-white
              shadow-lg
              shadow-zinc-900/20
              transition-all
              duration-300

              hover:-translate-y-1
              hover:bg-zinc-800
              hover:shadow-xl
              hover:shadow-zinc-900/30

              sm:gap-2
              sm:px-5
              sm:py-2.5
              sm:text-sm

              md:py-3
            "
          >
            <span
              className="
                hidden
                h-1.5
                w-1.5
                rounded-full
                bg-white/80
                group-hover:animate-ping
                sm:inline-block
              "
            />

            <span className="hidden min-[400px]:inline">
              Sign In
            </span>

            <span className="min-[400px]:hidden">
              Login
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() =>
              setIsMobileMenuOpen((prev) => !prev)
            }
            className="
              flex
              h-9
              w-9
              flex-shrink-0
              items-center
              justify-center
              rounded-lg
              transition-colors
              hover:bg-zinc-100
              active:bg-zinc-200
              md:hidden
            "
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X
                size={20}
                strokeWidth={2.5}
                className="text-zinc-900"
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={2.5}
                className="text-zinc-900"
              />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            className="
              absolute
              left-2
              right-2
              top-[calc(100%+8px)]
              z-40
              flex
              max-h-[calc(100dvh-100px)]
              flex-col
              overflow-y-auto
              rounded-xl
              border
              border-zinc-200
              bg-white
              shadow-2xl
              sm:left-4
              sm:right-4
              md:hidden
            "
          >
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={handleLinkClick}
                className="
                  flex
                  items-center
                  border-b
                  border-zinc-100
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-zinc-800
                  transition-colors
                  last:border-b-0
                  hover:bg-zinc-100
                  hover:text-black
                  active:bg-zinc-200
                  sm:text-base
                "
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