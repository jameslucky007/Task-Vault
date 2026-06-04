"use client";
import { Navbar } from "@heroui/react";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Support Ticket Data:", form);
  };

  const cubes = [
    { l: "20%", t: "15%", s: "35px", d: "0s", dur: "4s" },
    { l: "65%", t: "10%", s: "50px", d: "1.5s", dur: "5s" },
    { l: "40%", t: "45%", s: "55px", d: "0.5s", dur: "4.5s" },
    { l: "75%", t: "55%", s: "30px", d: "2s", dur: "3.5s" },
    { l: "25%", t: "65%", s: "40px", d: "1s", dur: "6s" },
    { l: "50%", t: "25%", s: "25px", d: "3s", dur: "4s" },
    { l: "50%", t: "85%", s: "35px", d: "3s", dur: "7s" },

  ];

  return (
   
    <div className="min-h-screen bg-white text-white flex items-center justify-center p-6 ">
        <Navbar />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        .cube-float { animation: float infinite ease-in-out; }
      `}</style>

      {/* Main Container - Reduced height from 650px to 580px */}
      <div className="w-full max-w-4xl h-[520px] rounded-[32px] overflow-hidden flex shadow-2xl border border-white/5 mt-25">
        
        {/* LEFT SIDE: BRANDING & CUBES */}
        <div className="w-[35%] bg-black relative flex items-center justify-center overflow-hidden border-r border-white/10">

          <div className="relative w-full h-full">
            {cubes.map((cube, i) => (
              <div
                key={i}
                className="cube-float absolute bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                style={{
                  left: cube.l,
                  top: cube.t,
                  width: cube.s,
                  height: cube.s,
                  animationDelay: cube.d,
                  animationDuration: cube.dur,
                  borderRadius: '6px'
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: COMPACT FORM */}
        <div className="w-[65%] bg-[#0d0d0d] p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8 tracking-tight">Support</h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-6">
              {/* Name */}
              <div className="group">
                <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-gray-800 group-hover:border-gray-600 focus:border-white outline-none py-1.5 transition-all text-sm placeholder:text-gray-700"
                  required
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-800 group-hover:border-gray-600 focus:border-white outline-none py-1.5 transition-all text-sm placeholder:text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="group">
              <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="w-full bg-transparent border-b border-gray-800 group-hover:border-gray-600 focus:border-white outline-none py-1.5 transition-all text-sm placeholder:text-gray-700"
                required
              />
            </div>

            {/* Message */}
            <div className="group">
              <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-1">Your Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                rows={3}
                className="w-full bg-transparent border-b border-gray-800 group-hover:border-gray-600 focus:border-white outline-none py-1.5 transition-all text-sm resize-none placeholder:text-gray-700"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-2.5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95 shadow-lg"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;