"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.5,
      lerp: 0.1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}