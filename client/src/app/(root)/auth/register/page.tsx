"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";

interface AuthSignupProps {
  onSwitch: () => void;
}

export default function AuthSignup({ onSwitch }: AuthSignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(form);

    // router.push("/dashboard")
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#fafafa]">

      <div className="w-full max-w-md">

        {/* Logo */}

        <div className="flex justify-center mb-6">

          <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            G
          </div>

        </div>

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Create Account
          </h1>

          <p className="mt-3 text-zinc-500">
            Join
            <span className="font-semibold text-zinc-900">
              {" "}Gridtick
            </span>
            {" "}and start organizing your work.
          </p>

        </div>

        {/* Social */}

        <div className="grid grid-cols-3 gap-3 mt-10">

          <button
            className="h-12 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <FaGoogle size={18} />
            <span className="text-sm font-medium">
              Google
            </span>
          </button>

          <button
            className="h-12 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <FaApple size={18} />
            <span className="text-sm font-medium">
              Apple
            </span>
          </button>

          <button
            className="h-12 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <FaMicrosoft size={18} />
            <span className="text-sm font-medium">
              Microsoft
            </span>
          </button>

        </div>

        {/* Divider */}

        <div className="flex items-center gap-4 my-8">

          <div className="flex-1 h-px bg-zinc-200" />

          <span className="text-sm text-zinc-400">
            OR
          </span>

          <div className="flex-1 h-px bg-zinc-200" />

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Full Name */}

          <div>

            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full h-12 rounded-xl border border-zinc-300 px-4 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
              required
            />

          </div>

          {/* Email */}

          <div>

            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className="w-full h-12 rounded-xl border border-zinc-300 px-4 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
              required
            />

          </div>
                    {/* Password */}

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full h-12 rounded-xl border border-zinc-300 px-4 pr-12 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-900"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Confirm Password */}

          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full h-12 rounded-xl border border-zinc-300 px-4 pr-12 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-900"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Submit */}

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-zinc-950 text-white font-semibold hover:bg-zinc-800 transition-all duration-300 shadow-lg shadow-zinc-900/20"
          >
            Create Account
          </button>

        </form>

        {/* Switch */}

        <div className="mt-8 text-center">

          <p className="text-zinc-500">
            Already have an account?

            <button
              type="button"
              onClick={onSwitch}
              className="ml-2 font-semibold text-zinc-900 hover:underline"
            >
              Sign In
            </button>

          </p>

        </div>

        {/* Terms */}

        <p className="mt-10 text-center text-xs leading-6 text-zinc-400">
          By creating an account, you agree to our{" "}
          <Link
            href="/terms"
            className="underline hover:text-zinc-700"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline hover:text-zinc-700"
          >
            Privacy Policy
          </Link>
          .
        </p>

      </div>

    </div>
  );
}