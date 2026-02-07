"use client";

import { Home, Car, Shield, Info } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Car, label: "Fleet", href: "/fleet" },
  { icon: Shield, label: "Services", href: "/services" },
  { icon: Info, label: "About", href: "/about" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
      <div className="glass-nav bg-background-dark/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex justify-between items-center rounded-t-2xl shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? "text-primary" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <item.icon
                className={`w-6 h-6 ${isActive ? "fill-primary/20" : ""}`}
              />
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
