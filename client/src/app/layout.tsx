import { Poppins, Roboto, Geist } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "../components/wrappers/SmoothScrollProvider";
import PageWrapper from "../components/wrappers/PageWrapper";
import { cn } from "../utils/cn";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<html suppressHydrationWarning={true} lang="en" className={cn("font-sans", geist.variable)}>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <PageWrapper>{children}</PageWrapper>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
