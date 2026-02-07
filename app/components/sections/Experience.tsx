"use client";

import { Quote } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-24 relative overflow-hidden bg-background-dark">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Quote className="text-primary w-16 h-16 mx-auto mb-8 opacity-80" />
        <blockquote className="text-3xl md:text-5xl font-light text-white italic leading-tight mb-8">
          &quot;Tatla Rent a Car isn&apos;t just about moving from A to B. It&apos;s about
          how you feel when you arrive. Pure excellence in every detail.&quot;
        </blockquote>
        <cite className="text-slate-400 uppercase tracking-[0.4em] text-sm not-italic">
          — Alexander J. Sterling, Member since 2021
        </cite>
      </div>
    </section>
  );
}
