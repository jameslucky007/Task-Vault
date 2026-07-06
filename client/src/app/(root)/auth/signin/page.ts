"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] relative overflow-hidden flex items-center justify-center px-4">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-zinc-200/50 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-zinc-200/40 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-zinc-200/50 rounded-full blur-[120px]" />
      </div>

      {/* Back */}
      <Link
        href="/"
        className="absolute top-5 left-5 z-20 flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition"
      >
        <ArrowLeft size={16} />
        Back
      </Link>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md bg-white border border-zinc-200/80 rounded-[28px] p-8 shadow-sm">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.svg"
            width={48}
            height={48}
            alt="Task Vault Logo"
            className="opacity-90"
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-zinc-950 tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-500">
            Sign in to continue to Task Vault
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="w-full h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-950 placeholder:text-zinc-400 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full h-12 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-950 placeholder:text-zinc-400 outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition"
          />

          {/* Main Button */}
          <button className="w-full h-12 rounded-xl bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 active:scale-[0.98] transition-all cursor-pointer shadow-sm">
            Sign In
          </button>

          {/* Secondary Button */}
          <Link
            href="/auth/signup"
            className="w-full h-12 rounded-xl border border-zinc-200 text-zinc-900 bg-zinc-50/50 flex items-center justify-center text-sm font-medium hover:bg-zinc-100/60 transition cursor-pointer"
          >
            Create Account
          </Link>

          <div className="flex items-center gap-3 py-1">
            <div className="h-px bg-zinc-200 flex-1" />
            <span className="text-xs text-zinc-400">or</span>
            <div className="h-px bg-zinc-200 flex-1" />
          </div>

          <button className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 text-zinc-900 text-sm font-medium hover:bg-zinc-100/60 transition cursor-pointer">
            Continue with Google
          </button>
        </div>

        <p className="text-[11px] text-zinc-400 text-center mt-8 leading-relaxed">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Page;