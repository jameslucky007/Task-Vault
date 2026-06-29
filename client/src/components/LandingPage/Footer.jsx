import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link for better navigation
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGlobeAsia,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { div } from "framer-motion/client";

const Footer = () => {
  // Pages links and navigation
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Support", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  // Social media links with icons
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
    <>
      {/* Footer */}
      <footer className="w-full bg-black pt-5 px-4 md:px-5 text-white">
        <div className="max-w-7xl mx-auto bg-[#0f0f0f] rounded-3xl p-8 md:p-10 text-center border border-white/10">
          {/* Logo & Brand */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <Image
              src="/logo-2.svg"
              width={40}
              height={40}
              alt="Task Vault Logo"
            />
            <h2 className="text-2xl font-semibold text-white">Task Vault</h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-transform hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Strip */}
        <div className="max-w-6xl mx-auto mt-2 text-center py-6">
          <hr className="mb-4 border-white/10" />
          <p className="text-gray-400 text-sm md:text-base">
            Copyright {new Date().getFullYear()} © Task Vault
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
