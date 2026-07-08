"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

interface AuthLoginProps {
  onSwitch: () => void;
}

export default function AuthLogin({ onSwitch }: AuthLoginProps) {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    console.log("Login:", form);

    router.push("/dashboard");
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#fafafa]">

      <div className="w-full max-w-md">

        {/* Logo */}

       <div className="flex justify-center mb-6">
  <Image
    src="/logo.svg"
    alt="Task Vault Logo"
    width={80}
    height={80}
    priority
  />
</div>

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
            Welcome Back
          </h1>

          <p className="mt-3 text-zinc-500">
            Sign in to continue to
            <span className="font-semibold text-zinc-900">
              {" "}Gridtick
            </span>
          </p>

        </div>

        {/* Social */}

        <div className="grid grid-cols-3 gap-3 mt-10">

          <button
            type="button"
            className="h-12 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <FaGoogle size={18} />
            <span className="text-sm font-medium">
              Google
            </span>
          </button>

          <button
            type="button"
            className="h-12 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <FaApple size={18} />
            <span className="text-sm font-medium">
              Apple
            </span>
          </button>

          <button
            type="button"
            className="h-12 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 transition flex items-center justify-center gap-2 shadow-sm"
          >
            <FaMicrosoft size={18} />
            <span className="text-sm font-medium">
              Microsoft
            </span>
          </button>

        </div>

        {/* Divider */}

        <div className="flex items-center gap-4 my-4">

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
                placeholder="Enter your password"
                className="w-full h-12 rounded-xl border border-zinc-300 px-4 pr-12 outline-none focus:ring-2 focus:ring-black focus:border-transparent transition"
                required
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-800"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>
                    {/* Remember Me & Forgot Password */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-2 text-sm text-zinc-600 cursor-pointer">

              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
                className="w-4 h-4 rounded border-zinc-300 accent-black"
              />

              Remember me

            </label>

            <Link
              href="/forgot-password"
              className="text-sm font-medium text-zinc-800 hover:underline"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}

          <button
            type="submit"
            className="w-full h-12 rounded-xl bg-zinc-950 text-white font-semibold transition-all duration-300 hover:bg-zinc-800 active:scale-[0.98] shadow-lg shadow-zinc-900/20"
          >
            Sign In
          </button>

        </form>

        {/* Footer */}

        <div className="mt-5 text-center">

          <p className="text-zinc-500">

            Dont have an account?

            <button
              type="button"
              onClick={onSwitch}
              className="ml-2 font-semibold text-zinc-900 hover:underline"
            >
              Create Account
            </button>

          </p>

        </div>

        {/* Terms */}

        <p className="mt-1 text-center text-xs leading-6 text-zinc-400">

          By continuing, you agree to our{" "}

          <Link
            href="/terms"
            className="underline hover:text-zinc-700"
          >
            Terms of Service
          </Link>

          {" "}and{" "}

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