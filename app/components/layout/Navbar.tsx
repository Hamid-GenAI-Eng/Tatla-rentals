"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Car, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ... (keep useEffect) ...

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled ? "glass-nav py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-40 h-14 transition-transform group-hover:scale-105" animated={true} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {[
              { label: "Home", href: "/" },
              { label: "The Fleet", href: "/fleet" },
              { label: "Services", href: "/services" },
              { label: "About Us", href: "/about" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors text-slate-400 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
            {/* Actions */}
          <div className="flex items-center gap-4">
            <a href="tel:+923001234567" className="bg-primary text-white text-sm font-bold uppercase tracking-widest px-8 py-2.5 rounded-full shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all">
              Call Now
            </a>
            
          </div>
        </div>
      </nav>
    </>
  );
}
