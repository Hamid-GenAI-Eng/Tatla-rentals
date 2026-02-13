"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
// import Scene from "../3d/Scene"; // Temporarily disabled for HQ Image request

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden bg-background-dark">
      {/* High Quality Hero Image */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10" />
        {/* Using standard img tag for external URL as requested, or Next Image if domain configured. 
            Using standard img to avoid domain config errors for now. */}
        <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFMmUEBn-P9whpJfBY2tTnFt_QbtcojXKFCcJk0DYPHR6hlKirMmZBfdc306D6p6MocOT1FT36x5k_WR7hXqdvxlrTddom2WzfaUWsjz1FZNQ9W9KpszVdfsQ9y5f0jO4q6h3Ctp9c94fOEMyJv0KDMpXh9S2gG9c8IAgOkit8fJ_hNv5_rO6qzOMCqtGFfo13ZHZUQ18RPidJUswT59rKKTcPTGMdScUP5ixsSzhjyUGczW-HA2W7oKSaegKP9VHVUB9rRrGcGww"
            alt="Luxury white sedan on wet asphalt"
            className="w-full h-full object-cover grayscale-[20%] brightness-75 scale-105 animate-subtle-zoom" 
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full mb-6 backdrop-blur-md"
          >
            <BadgeCheck className="text-primary w-4 h-4" />
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
              Elite Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-bold text-white leading-tight mb-6"
          >
            Drive the{" "}
            <span className="silver-gradient italic block">Extraordinary.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-lg"
          >
            Experience the pinnacle of luxury car rentals. Curated fleet of the
            Pakistan&apos;s most prestigious vehicles, ready for the elite.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/fleet" className="bg-primary text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest flex items-center gap-3 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95">
              Explore Fleet
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="https://wa.me/923017672571?text=Hi,%20I%20would%20like%20to%20request%20a%20callback."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
            >
              Request a CallBack
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}
