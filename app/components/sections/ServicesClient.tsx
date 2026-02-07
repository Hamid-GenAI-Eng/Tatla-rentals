"use client";

import { 
  CheckCircle, 
  Snowflake, 
  Sun, 
  Shield, 
  Coffee, 
  Wifi, 
  Crown, 
  ChevronRight,
  Fuel,
  Headset,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ServicesClient() {
  const [climate, setClimate] = useState<"ice" | "warm">("ice");

  return (
    <main className="min-h-screen bg-background-dark pt-24 pb-24">
      
      {/* Hero Section */}
      <div className="mb-20 text-center px-6">
        <h1 className="text-white text-6xl font-bold tracking-tighter mb-4">
          TATLA <span className="italic font-light text-slate-200">BESPOKE</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto uppercase tracking-[0.3em] font-light">
          Crafting the zenith of luxury mobility
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Services Grid */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Daily Rentals",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHakjuR09q5J3FbNPC-DcxTFCvSlzlVGezBvxIPm5l4SLLHkmP4V2LdYwc9FSDT2pgXYb1zB0tW3g2D2WrwX7qTph3HVct8ABqKBekVYzQAsaGtN5_KSRROQrpzKv8b8m7WxiY-Fpl89K2Rw00oNzJnzPBmGbhr29uyhIGqQqImeUxu8m3iQRFcN_G6pTTO_ZuoHJfE7eHqY2-c9OvR4tSk2sPSF4Ph-jlmQJSeI4Kimvu9OpVFkjsx8dROp5B_EslcII-ZRD4AU",
                benefits: ["200km daily allowance", "Complimentary delivery", "24/7 Concierge access"]
              },
              {
                title: "Chauffeur Driven",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCP2ILVKggHz6-ke6BAORO3EtI5kT3SJJdybgLBA6VNpzTBN--APYidL0jMaCDV66E7_zbKqswffSSkkIw3te04IUAdrj26rNIMsWuQdMhooiYTH5V1T0T5AduFYyVDy0vPo-aZdJLlV5Z9yHI3QL4gGjhTEghrYvU_ljy95VFAZnaI2fUEZuqxT3Mjp1F3cAl-7oWvvtADRAvJ9rW0EY7qI91x5F2cQRiiEVjDULG1SQ6pj87Cfzhm_xo_GyNXJMK0llt3yO6-JH0",
                benefits: ["Multilingual experts", "Discretion guaranteed", "Route optimization"]
              },
              {
                title: "Airport VIP",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJYPbMKvmajgn00H9cMOAVq7FWKi-FgKq347qXCUgMoJGoM_RT0GTSfsgqWOzNrXWKj_25BuQDbNctDE_jJz4f_fLlu366sNmFeFiJIeopTTofRO5_z6bRZL3t1dF8FLf_hnhntpTaUaRqCHjVzlLMEQuK9ydyCq7G0obW39jFhXHGVud4lVGySkA1oF1KX-u8Q1qOO7MJAqFCrkP7JFYAlB2i_K2gf1rQOzAetBm4IAjoone0TBdEnB9l2ho-gG19XlqXdDTCKnc",
                benefits: ["Meet & Greet service", "Luggage handling", "Real-time flight tracking"]
              },
              {
                title: "Gala & Weddings",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuRUBOiOVYaKi89Ns7kdpzNFMpUF_XjZOYWiKIhjahfL-vkgDrG0c3rt2zZ4kYgpYt5NU6WiyoPayjJu3VGZqzjqbcFRzw4sJYHx2WG08hMUo7KUiT66YNOKhXYgHpaqBFp0k1vdVWHEsXBvUtH_7q72jgqVOBGPr64s-zwPSxQqObHhuVsPJJvmE4O-BrgWEgd0j66WT34-tjbVTAR4uk81e5OMLyQ1XKsbeYLhLOximPfHcp6WSN_uk8Ju8a867io-Lk23PDbj8",
                benefits: ["Floral arrangements", "Red carpet entry", "Multi-car convoys"]
              }
            ].map((service, index) => (
              <div key={index} className="glass-card group relative overflow-hidden rounded-xl aspect-[3/4] bg-[#111] border-white/5">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `url('${service.image}')` }} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end glass-card m-3 rounded-lg border-white/5 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <div className="space-y-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {service.benefits.map((benefit, i) => (
                      <p key={i} className="text-slate-300 text-sm flex items-center gap-2">
                        <CheckCircle className="text-primary w-3 h-3" /> {benefit}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Engine */}
        <section className="mb-24">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">BUILD YOUR JOURNEY</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2 space-y-8">
              
              {/* Executive Climate Toggle */}
              <div className="glass-card p-8 rounded-xl border-white/5 bg-[#0a0a0c]/50">
                <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">EXECUTIVE CLIMATE</h3>
                    <p className="text-slate-400 text-xs tracking-wider uppercase">Set your cabin atmosphere</p>
                  </div>
                  <div className="flex p-1 bg-[#050505] border border-white/10 rounded-lg">
                    <button 
                      onClick={() => setClimate("ice")}
                      className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all ${
                        climate === "ice" 
                        ? "bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.2)]" 
                        : "text-white/40 hover:text-cyan-400"
                      }`}
                    >
                      <Snowflake className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">Ice Blue</span>
                    </button>
                    <button 
                      onClick={() => setClimate("warm")}
                      className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all ${
                        climate === "warm" 
                        ? "bg-orange-500/10 text-orange-500 border border-orange-500/30 shadow-[0_0_20px_rgba(249,115,22,0.2)]" 
                        : "text-white/40 hover:text-orange-500"
                      }`}
                    >
                      <Sun className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-widest">Warm Orange</span>
                    </button>
                  </div>
                </div>

                {/* Climate Visualizer */}
                <div className={`relative w-full h-64 rounded-lg overflow-hidden border transition-colors duration-500 ${
                  climate === "ice" ? "border-cyan-400/20" : "border-orange-500/20"
                }`}>
                  <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvhY8Uajie-EgkaL_f2Xv6lXaGwX5p_ISlSfBvrIWuMuPUdj8HkmeWvHUmQuk2Nd87Id2gBhQZutDwq5B2WevDV4G4L49MHHUeL5OytiWoyJc4wXHEILtKscr3VmcLxGNUFZZJhz-Jm-eTRKMsYQnF0-q_eDCYeKovQeLglv4PYkYhBLoD4I79UEATJZV8KXqXF-XBNCx20SKQOg3sWBYVbI-10EaIUcULU5i7cI4Us4opv2uyxKen-o8quriotA05ed1vbDHhIiM')" }}
                  />
                  <div className={`absolute inset-0 mix-blend-overlay transition-colors duration-500 ${
                    climate === "ice" ? "bg-cyan-400/10" : "bg-orange-500/10"
                  }`} />
                  <div className={`absolute inset-0 transition-all duration-500 ${
                    climate === "ice" 
                    ? "shadow-[inset_0_0_100px_rgba(34,211,238,0.2)]" 
                    : "shadow-[inset_0_0_100px_rgba(249,115,22,0.2)]"
                  }`} />
                </div>
              </div>

              {/* Add-on Selectors */}
              <div className="glass-card p-8 rounded-xl border-white/5 bg-[#0a0a0c]/50">
                <h3 className="text-xl font-bold mb-6 tracking-wide text-white">BESPOKE ADD-ONS</h3>
                <div className="flex flex-wrap gap-4">
                  {[
                    { icon: Shield, label: "VIP PROTECTION", active: true },
                    { icon: Coffee, label: "REFRESHMENT PACK", active: false },
                    { icon: Wifi, label: "HIGH-SPEED WI-FI", active: false },
                    { icon: Crown, label: "CONCIERGE PLUS", active: false }
                  ].map((addon, i) => (
                     <div key={i} className={`flex items-center gap-3 px-5 py-3 rounded-lg border cursor-pointer transition-all ${
                       addon.active 
                       ? "border-primary bg-primary/10 text-white" 
                       : "border-white/10 glass-card text-slate-400 hover:border-white/30"
                     }`}>
                      <addon.icon className={addon.active ? "text-primary" : "text-slate-400"} size={18} />
                      <span className="text-sm font-bold">{addon.label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Price Card */}
            <div className="glass-card p-10 rounded-xl sticky top-28 border border-primary/20 bg-[#0a0a14]">
              <h3 className="text-slate-400 text-xs tracking-[0.3em] font-bold uppercase mb-4">Estimated Total</h3>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-primary text-5xl font-black tracking-tighter text-glow">$1,250</span>
                <span className="text-slate-400 text-sm">/ DAY</span>
              </div>
              <ul className="space-y-4 mb-10 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Rolls Royce Ghost</span>
                  <span className="text-white font-bold">$950</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">VIP Protection</span>
                  <span className="text-white font-bold">$250</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Bespoke Climate</span>
                  <span className="text-cyan-400 font-bold">INCLUDED</span>
                </li>
              </ul>
              <button className="w-full bg-primary hover:bg-red-700 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 group">
                SECURE THIS PRICE
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-white/40 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">
                 <img alt="WhatsApp" className="w-4 h-4 opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvPd8h76GhY54DlSt3vZQL8HNY7fVwSfbEeONFNRme-AcIlwJI0YXMdrTcFigZuYMn_HkAbrgIafISYIPu1ctKX48kOV2cVgsNNN5iZqYfdIktkvWtHv4mhZ-uMvKVpPQklnXnQ1iDy8ACkD3aPTSfYE3wTZURCRN-Hl_d3hBPiGAjBsrCHZBgaTWK0Lv6Y5qsk1tvjsxhJROEHiuiOKeKbIR46p4S6jyq7KnoH6_RF9vnoqZtCghqssKRCmCxfoXjwX4wsGT9LlA"/>
                Instant Booking via WhatsApp
              </div>
            </div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-2 text-white">NO HIDDEN FEES</h2>
            <p className="text-slate-400 tracking-widest uppercase text-sm">Our transparency is as clear as our glass</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "All-Inclusive Insurance", desc: "Zero deductible options and full liability coverage come standard with every bespoke rental agreement." },
              { icon: Fuel, title: "Fuel Transparency", desc: "No surcharge fueling. Pay exactly what the pump says, or opt for our pre-paid fuel packages at market rate." },
              { icon: Headset, title: "24/7 Global Support", desc: "Direct line to your personal concierge, ensuring seamless mobility no matter the hour or location." }
            ].map((item, i) => (
              <div key={i} className="text-center p-8 glass-card rounded-xl border-white/5">
                <div className="mb-6 inline-flex p-4 rounded-full bg-white/5 border border-white/10">
                  <item.icon className="text-slate-400 w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold mb-3 uppercase tracking-wider text-white">{item.title}</h4>
                <p className="text-slate-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="rounded-2xl overflow-hidden relative p-16 text-center border border-white/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30" 
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCTpuZ6KGIE4KyDbN7tFjLRTX0xJ3IGwOhcVBs-OGciFOBGJGtEzYMrP8B-V6edjxVeCrzly4xrSB7jww9EySCGAW4MAjR1SnJveLevwBkj7IH4rzqcHPb398TNtPsOjt3zbVLFTmKeFruH7RaqxZcbeDmiZyAG6k163J_F3ruaGWtL_OEIREaeObIIVH1v7ALClT1z1MDiG4MRE71ohwCOjkkhQe4T0Uz5Es8xUN_7DJTSFYxPxt3HFMRHkWrFBZ-Y3tYF2gX2F_4')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background-dark to-background-dark"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6 text-white text-glow">READY TO ELEVATE YOUR JOURNEY?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
              Join the elite Tatla circle today and experience the pinnacle of automotive craftsmanship and service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-red-700 text-white px-10 py-4 rounded font-bold uppercase tracking-widest transition-all shadow-lg shadow-primary/30">
                Request a Quote
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-10 py-4 rounded font-bold uppercase tracking-widest border border-white/10 transition-all">
                View Full Fleet
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
