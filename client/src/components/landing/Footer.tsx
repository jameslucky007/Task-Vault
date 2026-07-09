import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Conact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  return (
    <footer className="w-full bg-black pt-16 pb-4 px-4 sm:px-6 md:px-4 text-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-transparent blur-3xl -z-10 rounded-full" />
        {/* Main Footer Card */}
        <div className="bg-[#0A0A0B] rounded-4xl border border-white/5 p-8 md:p-6 shadow-2xl flex flex-col items-center">
          
          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
            {/* White Circle Background */}
            <div className="flex items-center justify-center w-16 h-16  bg-white/90  rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-5 transition-all duration-300 hover:scale-105 active:scale-95 active:rotate-2">
              <Image
                src="/logo.svg"
                width={32}
                height={32}
                alt="Task Vault Logo"
                className="w-12 h-12"
              />
            </div>
            
            <h2 className="text-2xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              Grid Tick
            </h2>
            <p className="text-zinc-500 text-sm sm:text-base text-center max-w-sm">
              Master your focus. Simplify your workflow.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-400 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 px-4 md:px-8 gap-4">
          <p className="text-zinc-500 text-xs sm:text-sm tracking-wide">
            © {new Date().getFullYear()} Task Vault. All rights reserved.
          </p>
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-500">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;