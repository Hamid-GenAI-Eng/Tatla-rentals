"use client";

import { Car, Share2, Globe, Camera, MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-background-dark pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 flex justify-center md:justify-start">
               <Logo className="w-48 h-16" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Defining the standard of luxury car rentals across the globe.
              Excellence, speed, and discretion.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tatlarentacar?igsh=MTR2Y2JoMG45OWhvMA=="
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-slate-300" />
              </a>
              <a
                href="https://www.tiktok.com/@tatlarentacar?_r=1&_t=ZS-93hTbNS4LgL"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <span className="text-slate-300 font-bold text-xs">TT</span>
              </a>
              <a
                href="https://www.facebook.com/share/14eQdYFBuwF/"
                target="_blank"
                rel="noopener noreferrer"
                className="size-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-5 h-5 text-slate-300" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">
              Fleet Gallery
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <Link href="/fleet/classic" className="hover:text-primary transition-colors">
                  Classic Series
                </Link>
              </li>
              <li>
                <Link href="/fleet/executive" className="hover:text-primary transition-colors">
                  Executive Class
                </Link>
              </li>
              <li>
                <Link href="/fleet/premium" className="hover:text-primary transition-colors">
                  Premium Luxury
                </Link>
              </li>
              <li>
                <Link href="/fleet/wedding" className="hover:text-primary transition-colors">
                  Wedding Events
                </Link>
              </li>
              <li>
                <Link href="/fleet/trips" className="hover:text-primary transition-colors">
                  Trips & Tours
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">
              Quick Links
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Tatla
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-primary transition-colors">
                  The Fleet
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-8">
              Headquarters
            </h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary w-5 h-5 flex-shrink-0" />
                <span>Opposite to Rescue 1122 Office Circular Road Narowal</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary w-5 h-5 flex-shrink-0" />
                <span>03017672571</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary w-5 h-5 flex-shrink-0" />
                <span>tatlarentacar@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            © 2026 Tatla Rent a Car. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-slate-600 uppercase tracking-widest">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <a href="https://aura-architects.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Created by Code Envision Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
