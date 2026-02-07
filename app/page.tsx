"use client";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import Fleet from "./components/sections/Fleet";
import Experience from "./components/sections/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-dark">
      <Hero />
      <Services />
      <Fleet />
      <Experience />
    </main>
  );
}
