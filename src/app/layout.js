import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/Wrappers/smoothScroll/SmoothScrollProvider";
import Navbar from "@/components/LandingPage/Navbar";
import Footer from "@/components/LandingPage/Footer";
import PageWrapper from "@/components/Wrappers/pageWrapper/PageWrapper";

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

export const metadata = {
  title: "Task Vault",
  description: "Smart Todo Web APP",
  icons: { icon: "/logo-2.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />

        <SmoothScrollProvider>
          <PageWrapper>{children}</PageWrapper>
        </SmoothScrollProvider>

        <Footer />
      </body>
    </html>
  );
}
