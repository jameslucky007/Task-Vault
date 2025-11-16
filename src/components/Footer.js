import React from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white">YourBrand</h2>
            <p className="text-gray-600 mt-2 max-w-xs">
              Building clean and powerful tools for modern workflows.
            </p>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-white">
            <div>
              <p className="font-semibold text-white mb-3">Product</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Features</li>
                <li className="hover:text-white cursor-pointer">Pricing</li>
                <li className="hover:text-white cursor-pointer">Docs</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white mb-3">Company</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-white mb-3">Support</p>
              <ul className="space-y-2">
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Feedback</li>
                <li className="hover:text-white cursor-pointer">Status</li>
              </ul>
            </div>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            <a className="footer-icon">
              <Twitter size={22} />
            </a>
            <a className="footer-icon">
              <Github size={22} />
            </a>
            <a className="footer-icon">
              <Linkedin size={22} />
            </a>
            <a className="footer-icon">
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t mt-12 pt-6 text-center text-gray-600">
          © {new Date().getFullYear()} YourBrand — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
