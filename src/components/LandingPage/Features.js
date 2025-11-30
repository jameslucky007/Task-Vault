"use client";
import React, { useEffect, useRef } from "react";

const items = [
  "Custom Menus",
  "Multi-window support",
  "Trays",
  "Deep Linking",
  "Downloads",
  "Auto Updates",
  "Offline Support",
];

export default function Features() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let lastScroll = window.scrollY;
    let isVisible = false;

    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    const handleScroll = () => {
      if (!isVisible || !trackRef.current) return;

      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll ? 1 : -1;
      lastScroll = currentScroll;

      const currentX = parseFloat(trackRef.current.dataset.x || "0");
      const nextX = currentX + direction * 1;

      trackRef.current.style.transform = `translateX(${nextX}px)`;
      trackRef.current.dataset.x = nextX;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="w-full py-5 bg-white">
      <div className="max-w-8xl mx-auto px-6">
        <div
          ref={containerRef}
          className="relative overflow-hidden rounded-2xl border bg-white py-6 px-4 shadow-sm"
        >
          <div
            ref={trackRef}
            data-x="0"
            className="flex items-center gap-10 whitespace-nowrap text-xl font-semibold text-gray-900"
          >
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-6">
                <span className="text-3xl leading-none">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
