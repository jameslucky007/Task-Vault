import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGlobeAsia,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Support", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const socialLinks = [
    {
      icon: <FaYoutube size={22} />,
      href: "https://youtube.com",
      label: "YouTube",
    },
    {
      icon: <FaXTwitter size={22} />,
      href: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaInstagram size={22} />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FaLinkedin size={22} />,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaGlobeAsia size={22} />,
      href: "https://luckya.vercel.app/",
      label: "Website",
    },
  ];

  return (
    <footer className="w-full bg-black pt-6 md:pt-10 px-4 sm:px-6 md:px-8 text-white">
      <div className="max-w-7xl mx-auto bg-[#0a0a0a] rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 text-center border border-white/5 shadow-2xl">
        
        {/* Logo & Brand */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-6 md:mb-8">
          <Image
            src="/logo-2.svg"
            width={40}
            height={40}
            alt="Task Vault Logo"
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-wide">
            Task Vault
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 md:mb-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm sm:text-base text-gray-400 hover:text-white transition-all duration-300 ease-in-out"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 sm:gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Strip */}
      <div className="max-w-6xl mx-auto mt-2 text-center py-6 px-4">
        <hr className="mb-4 border-white/10" />
        <p className="text-gray-500 text-xs sm:text-sm md:text-base tracking-wide">
          Copyright {new Date().getFullYear()} © Task Vault
        </p>
      </div>
    </footer>
  );
};

export default Footer;