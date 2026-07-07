"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

type PageWrapperProps = {
  children: ReactNode;
};

export default function PageWrapper({ children }: PageWrapperProps) {
  const pathname = usePathname();
  const paddedRoutes = ["/commingsoon", "/about"];
  const needsPadding = paddedRoutes.some((route) => pathname.startsWith(route));
  return <main className={needsPadding ? "pt-30" : ""}>{children}</main>;
}
