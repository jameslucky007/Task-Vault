"use client";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }) {
  const pathname = usePathname();

  const paddedRoutes = [
    "/commingsoon",
    "/about",
  
  ];

  const needsPadding = paddedRoutes.some((route) => pathname.startsWith(route));

  return <main className={needsPadding ? "pt-30" : ""}>{children}</main>;
}
