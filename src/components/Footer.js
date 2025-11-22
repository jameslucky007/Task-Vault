import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Footer = () => {
  return (
    <>
      <section className="w-full flex justify-center py-20 px-4">
        <div className="relative w-full max-w-7xl rounded-[32px] overflow-hidden p-16 text-center bg-gray-600">
          {/* Mesh Gradient Layers */}
          <div className="absolute inset-0">
            {/* Soft glow 1 */}
            <div className="absolute w-[600px] h-[600px] rounded-full bg-gray-800 opacity-20 blur-[120px] animate-mesh-1"></div>

            {/* Soft glow 2 */}
            <div className="absolute w-[500px] h-[500px] rounded-full bg-gray-100 opacity-10 blur-[150px] animate-mesh-2"></div>

            {/* Soft glow 3 */}
            <div className="absolute w-[700px] h-[700px] rounded-full bg-[#1e74ff] opacity-10 blur-[150px] animate-mesh-3"></div>
          </div>

          {/* MAIN CONTENT */}
          <div className="relative z-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para transformar o seu negócio?
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Agende uma avaliação gratuita e descubra como a Azimute pode
              ajudar a sua empresa.
            </p>

            <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-medium shadow hover:shadow-md transition">
              Agende já uma avaliação gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black pt-5 px-5 text-white">
        {/* TOP FOOTER BLOCK */}
        <div className="max-w-9xl  mx-auto bg-[#0f0f0f] rounded-3xl p-10 text-center border border-white/10">
          <div className="flex justify-center items-center gap-3 mb-10  ">
            <Image src="/logo-2.svg" width={40} height={40} alt="Brand Logo" />

            <h2 className="text-2xl font-semibold text-white">Task Vault</h2>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-10 text-gray-300 text-sm font-medium mb-10">
            <a className="hover:text-white transition">Homepage</a>
            <a className="hover:text-white transition">Products</a>
            <a className="hover:text-white transition">Services</a>
            <a className="hover:text-white transition">About Us</a>
            <a className="hover:text-white transition">Contact Us</a>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-4 text-gray-300">
            <FaFacebook size={22} className="hover:text-white transition" />
            <RxCross2 size={22} className="hover:text-white transition" />
            <FaInstagram size={22} className="hover:text-white transition" />
            <FaLinkedin size={22} className="hover:text-white transition" />
          </div>
        </div>

        {/* Bottom Footer Strip */}
        <div className="max-w-6xl mx-auto mt-2 text-center py-6">
          <hr className="mb-4 border-white/10" />
          <p className="text-gray-400 text-l">Copyright 2025©Task Vault</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
