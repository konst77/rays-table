import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import { BottomNavbar } from "./components/bottom-nav"
import { MobileNav } from "./components/mobile-nav";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ray's Table",
  description: "Ray's table provides a variety of recipes for you to enjoy in a simple and elegant way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} antialiased mb-16 md:mb-0`}
      >
        <BottomNavbar />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
