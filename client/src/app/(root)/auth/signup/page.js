"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Signup Data:", form);
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
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden flex items-center justify-center p-6">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-zinc-200/50 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-zinc-200/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-zinc-200/50 rounded-full blur-[120px]" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(3deg);
          }
        }

        .cube-float {
          animation: float infinite ease-in-out;
        }
      `}</style>

      {/* Back */}
      <Link
        href="/"
        className="absolute top-5 left-5 z-20 flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition"
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      <div className="w-full max-w-4xl h-[520px] rounded-[32px] overflow-hidden flex shadow-lg border border-zinc-200 bg-white relative z-10">
        {/* LEFT SIDE */}
        <div className="w-[35%] bg-zinc-950 relative flex items-center justify-center overflow-hidden border-r border-zinc-900">
          <div className="relative w-full h-full">
            {cubes.map((cube, i) => (
              <div
                key={i}
                className="cube-float absolute bg-white/10 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                style={{
                  left: cube.l,
                  top: cube.t,
                  width: cube.s,
                  height: cube.s,
                  animationDelay: cube.d,
                  animationDuration: cube.dur,
                  borderRadius: "8px",
                }}
              />
            ))}
          </div>

          <div className="absolute z-10 text-center px-6">
            <div className="flex justify-center mb-4">
              <Image
                src="/logo-2.svg"
                width={40}
                height={40}
                alt="Task Vault Logo"
                className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              />
            </div>
            <h2 className="text-3xl font-bold mb-2 text-white tracking-tight">Welcome</h2>
            <p className="text-zinc-400 text-sm">
              Create your account and get started.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[65%] bg-white p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-8 tracking-tight text-zinc-950">
            Create Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name + Email */}
            <div className="grid grid-cols-2 gap-6">
              <div className="group">
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-zinc-200 text-zinc-950 group-hover:border-zinc-300 focus:border-zinc-900 outline-none py-1.5 transition-all text-sm placeholder:text-zinc-300"
                  required
                />
              </div>

              <div className="group">
                <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-zinc-200 text-zinc-950 group-hover:border-zinc-300 focus:border-zinc-900 outline-none py-1.5 transition-all text-sm placeholder:text-zinc-300"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="group">
              <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full bg-transparent border-b border-zinc-200 text-zinc-950 group-hover:border-zinc-300 focus:border-zinc-900 outline-none py-1.5 transition-all text-sm placeholder:text-zinc-300"
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="group">
              <label className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full bg-transparent border-b border-zinc-200 text-zinc-950 group-hover:border-zinc-300 focus:border-zinc-900 outline-none py-1.5 transition-all text-sm placeholder:text-zinc-300"
                required
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-2.5 bg-zinc-950 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-zinc-800 transition-all active:scale-95 shadow-md cursor-pointer"
              >
                Sign Up
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center pt-2">
              <p className="text-zinc-500 text-sm">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-zinc-900 font-semibold hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;