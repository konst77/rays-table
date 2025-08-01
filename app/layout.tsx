import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { BottomNavbar } from "./components/bottom-nav"
import { MobileNav } from "./components/mobile-nav";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
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
      <head>
        <link rel="icon" href="/icon"  />
      </head>
      <body
        className={`${instrumentSerif.className} ${instrumentSans.variable} antialiased mb-16 md:mb-0`}
      >
        {/* pre-launch
        <BottomNavbar />
        <MobileNav /> 
        */}
        {children}
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
