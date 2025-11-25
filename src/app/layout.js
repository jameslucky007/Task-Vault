import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/Wrappers/SmoothScrollProvider";

// Fonts Variables
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
});

// Meta data
export const metadata = {
  title: "Task Vault",
  description: "Smart Todo Web APP",
  icons: { icon: "/logo-2.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
