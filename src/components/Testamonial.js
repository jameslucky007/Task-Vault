"use client";
import React from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Riya Sharma",
    role: "Product Designer",
    message:
      "This tool has transformed the way I manage tasks across multiple workspaces. Smooth, fast and incredibly intuitive.",
    avatar: "/avatar1.jpg",
  },
  {
    name: "Arjun Mehta",
    role: "Frontend Developer",
    message:
      "Finally a clean workflow tool that feels modern. Everything just works—and works beautifully.",
    avatar: "/avatar2.jpg",
  },
  {
    name: "Maya Patel",
    role: "Startup Founder",
    message:
      "The automation features saved us countless hours. I can’t imagine running our daily operations without it.",
    avatar: "/avatar3.jpg",
  },
];

export default function Testamonial() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          What people are saying
        </h2>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="rounded-2xl border p-6 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.avatar}
                  className=" rounded-full object-cover border"
                  alt={t.name}
                  width={14}
                  height={14}
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                “{t.message}”
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
