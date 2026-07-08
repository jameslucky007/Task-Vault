"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const disableLenis =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/auth");

  useEffect(() => {
    if (disableLenis) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 2,
      lerp: 0.1,
    });

    return () => {
      lenis.destroy();
    };
  }, [disableLenis]);

  return <>{children}</>;
}