import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import MobileBottomNav from "./components/layout/MobileBottomNav";
import ChatWidget from "./components/ui/ChatWidget";
import SmoothScroll from "./components/providers/SmoothScroll";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tatla Rent a Car",
    default: "Tatla Rent a Car | Premier Luxury Fleet",
  },
  description: "Experience the zenith of luxury mobility in Pakistan with Tatla Rent a Car. Exclusive fleet of Rolls Royce, Land Cruiser, and Audi vehicles.",
  metadataBase: new URL("https://tatla-rentals.pk"), // Placeholder URL
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-background-dark text-slate-200 selection:bg-primary selection:text-white overflow-x-hidden`}
      >
        <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
            <ChatWidget />
            <MobileBottomNav />
        </SmoothScroll>
      </body>
    </html>
  );
}
