

import { 
  History, 
  Leaf, 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  MessageCircle,
  ShieldCheck,
  Award, // For Integrity (Gavel replacement)
  PenTool, // For Precision (Architecture replacement)
  EyeOff, 
  Zap,
  Users,
  Trophy // For Years of Excellence
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Legacy",
  description: "Decades of defining the ultra-premium automotive landscape in Pakistan. Est. 1998.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-dark">
      
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background-dark/20 via-background-dark/60 to-background-dark z-10" />
          <img 
            className="w-full h-full object-cover brightness-50" 
            alt="Modern high-end luxury car showroom with polished floors and minimalist design" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFMmUEBn-P9whpJfBY2tTnFt_QbtcojXKFCcJk0DYPHR6hlKirMmZBfdc306D6p6MocOT1FT36x5k_WR7hXqdvxlrTddom2WzfaUWsjz1FZNQ9W9KpszVdfsQ9y5f0jO4q6h3Ctp9c94fOEMyJv0KDMpXh9S2gG9c8IAgOkit8fJ_hNv5_rO6qzOMCqtGFfo13ZHZUQ18RPidJUswT59rKKTcPTGMdScUP5ixsSzhjyUGczW-HA2W7oKSaegKP9VHVUB9rRrGcGww"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-1.5 rounded-full mb-8">
            <History className="text-primary w-4 h-4" />
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Est. 1998</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight mb-6">
            The Legacy of <br/><span className="bg-gradient-to-br from-slate-200 via-slate-400 to-slate-300 bg-clip-text text-transparent italic">Excellence.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Decades of defining the ultra-premium automotive landscape in Pakistan. We don&apos;t just provide cars; we deliver prestige.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2 border border-white/5 bg-white/5">
                <img 
                  className="w-full h-full object-cover rounded-xl" 
                  alt="Vintage photograph of a luxury car in front of a colonial Pakistani building" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIiUx6rpV_48peR4eXEQCfAh-DdbzmPdLqqknSY26basXiW0GiYZcTN8v5G5nHvTbCpXzc-3qjUacmsfjsVAbsq7T0EGuLK6B6Qw7XDM3-YB5ZkGtmbkQdnWs0FzEsWQdsnvB9fbGI9mgI4rtmjx76jCXH3gjnx_0oY8U2jLD-xPojKz8OMJ4rS-YydK9Fpvcv2CC1t0sYnp_VIHJVRMaVDtpdxdP2WZrDqXZ4Hz2FISL5mO21hJKreVV5QDa2T70j-c5qjl5c3KE"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 glass-card p-8 rounded-2xl hidden md:block border border-white/10 bg-black/80 backdrop-blur-xl">
                <p className="text-4xl font-bold text-primary mb-1">25+</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest">Years of Trust</p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Our Story</span>
                <h2 className="text-4xl font-bold text-white mb-6 italic">A Heritage of <span className="text-primary">Precision.</span></h2>
                <p className="text-slate-400 leading-relaxed font-light text-lg">
                  Founded in the heart of Pakistan, Tatla Rent a Car began with a singular vision: to bridge the gap between world-class luxury and local hospitality. What started as a modest fleet has evolved into a national benchmark for ultra-premium vehicle services.
                </p>
              </div>
              <p className="text-slate-500 leading-relaxed text-sm">
                Our journey is built on the foundations of absolute integrity and an obsessive attention to detail. Every vehicle in our fleet carries the Tatla seal of quality, ensuring that our clients experience nothing less than perfection on every kilometer driven.
              </p>
              <div className="flex gap-6">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl italic">Lahore</span>
                  <span className="text-slate-500 text-xs uppercase tracking-tighter">Origin City</span>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl italic">Nationwide</span>
                  <span className="text-slate-500 text-xs uppercase tracking-tighter">Current Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Visionaries */}
      <section className="py-24 bg-[#111116]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">The Visionaries</span>
            <h2 className="text-4xl font-bold text-white italic">Steering the <span className="bg-gradient-to-br from-slate-200 via-slate-400 to-slate-300 bg-clip-text text-transparent">Standard</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Founder */}
            <div className="glass-card rounded-2xl overflow-hidden group border border-white/5 bg-white/5">
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Professional portrait of male owner in black suit" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj51B7LloVO_k1oBuXMSVRWuqbxQQJAN4TRII-uUntRFaGaVjAW-p2AyosmQXWFA3XgG6ba2wsFFKHfSpbtPRVA_e6W2t5AQY14urLRmeKM6jbb1EvqUyUkzK3Eh-08bYk5AfitJyg67i0G1w94LNA5vxrYyJ3-4O5BbzSAM20EyMoYl2-R8gQrzmaj-dtgB5UsdgGl-PzDLMwQeeW15VuPx6Ynd59kWH-J2_KyuL3Trnb1h2lAiAvZ_UpW2qAnN2Zegm1DMGvXkQ"
                />
              </div>
              <div className="p-8 text-center border-t border-white/5">
                <h3 className="text-xl font-bold text-white mb-1">M. Hamza Tatla</h3>
                <p className="text-primary text-xs uppercase tracking-widest font-bold mb-4">Founder & CEO</p>
                <p className="text-slate-500 text-sm italic font-light">"Luxury is not a commodity, it is an experience meticulously crafted for the few."</p>
              </div>
            </div>
            {/* Managing Director */}
            <div className="glass-card rounded-2xl overflow-hidden group border border-white/5 bg-white/5">
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Professional portrait of executive partner" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA"
                />
              </div>
              <div className="p-8 text-center border-t border-white/5">
                <h3 className="text-xl font-bold text-white mb-1">Zubair A. Khan</h3>
                <p className="text-primary text-xs uppercase tracking-widest font-bold mb-4">Managing Director</p>
                <p className="text-slate-500 text-sm italic font-light">"Our operation is built on precision, ensuring our fleet remains the best in the region."</p>
              </div>
            </div>
            {/* Director of Concierge */}
            <div className="glass-card rounded-2xl overflow-hidden group border border-white/5 bg-white/5 lg:hidden xl:flex xl:flex-col">
              <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                {/* Note: Using same detailed image placeholder as requested, though reusing src if needed or placeholder */}
                <img 
                  className="w-full h-full object-cover" 
                  alt="Portrait of operations head" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj51B7LloVO_k1oBuXMSVRWuqbxQQJAN4TRII-uUntRFaGaVjAW-p2AyosmQXWFA3XgG6ba2wsFFKHfSpbtPRVA_e6W2t5AQY14urLRmeKM6jbb1EvqUyUkzK3Eh-08bYk5AfitJyg67i0G1w94LNA5vxrYyJ3-4O5BbzSAM20EyMoYl2-R8gQrzmaj-dtgB5UsdgGl-PzDLMwQeeW15VuPx6Ynd59kWH-J2_KyuL3Trnb1h2lAiAvZ_UpW2qAnN2Zegm1DMGvXkQ"
                />
              </div>
              <div className="p-8 text-center border-t border-white/5">
                <h3 className="text-xl font-bold text-white mb-1">Ayesha Tatla</h3>
                <p className="text-primary text-xs uppercase tracking-widest font-bold mb-4">Director of Concierge</p>
                <p className="text-slate-500 text-sm italic font-light">"Every client interaction is a signature of our family legacy."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Curation Process</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 italic">Philosophy of <span className="text-primary">Masterpieces.</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-3">
                  <span className="size-2 bg-primary rounded-full" />
                  Rigorous Selection
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We don't just buy cars; we select assets. Each vehicle undergoes a 120-point inspection before it joins our exclusive 'Masterpiece' collection.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-3">
                  <span className="size-2 bg-primary rounded-full" />
                  Bespoke Maintenance
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our in-house specialists treat every engine like a work of art, maintaining factory-fresh performance through specialized technical care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-white/10 bg-[#111116]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4 group">
              <div className="mx-auto size-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Zap className="text-slate-300 w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tighter">1.2M+</h3>
              <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Kilometers Driven</p>
            </div>
            <div className="space-y-4 group">
              <div className="mx-auto size-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Users className="text-slate-300 w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tighter">15,000+</h3>
              <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Happy Clients</p>
            </div>
            <div className="space-y-4 group">
              <div className="mx-auto size-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Trophy className="text-slate-300 w-10 h-10" />
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tighter">26</h3>
              <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 border border-white/5 rounded-3xl hover:border-primary/30 transition-colors bg-white/5">
              <Award className="text-primary w-12 h-12 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Integrity</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Our legacy is built on transparent pricing and honest interactions. No hidden clauses, just pure service.</p>
            </div>
            <div className="text-center p-8 border border-white/5 rounded-3xl hover:border-primary/30 transition-colors bg-white/5">
              <PenTool className="text-primary w-12 h-12 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Precision</h3>
              <p className="text-slate-500 text-sm leading-relaxed">From the timing of delivery to the polish on the dashboard, we operate with surgical precision.</p>
            </div>
            <div className="text-center p-8 border border-white/5 rounded-3xl hover:border-primary/30 transition-colors bg-white/5">
              <EyeOff className="text-primary w-12 h-12 mb-6 mx-auto" />
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">Discretion</h3>
              <p className="text-slate-500 text-sm leading-relaxed">Catering to the elite requires absolute privacy. Your journeys with us remain exclusively yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Concierge Map Section */}
      <section className="py-24 bg-[#111116] relative">
        {/* Map mesh pattern simulation */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)", 
          backgroundSize: "24px 24px" 
        }} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="glass-card rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-white/10 bg-white/5 backdrop-blur-3xl">
            <div className="p-12 md:p-16 space-y-8">
              <div>
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Headquarters</span>
                <h2 className="text-4xl font-bold text-white italic mb-6">Visit Our <span className="text-primary">Concierge.</span></h2>
                <p className="text-slate-400 font-light leading-relaxed mb-8">
                  Experience the fleet in person at our flagship showroom. Our consultants are ready to curate your next drive.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 w-6 h-6" />
                  <div>
                    <p className="text-white font-bold">Main Gulberg Boulevard</p>
                    <p className="text-slate-500 text-sm">Tatla Tower, Lahore, Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="text-primary mt-1 w-6 h-6" />
                  <div>
                    <p className="text-white font-bold">Showroom Hours</p>
                    <p className="text-slate-500 text-sm">Mon - Sat: 09:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
              <button className="bg-white text-black px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                Get Directions
              </button>
            </div>
            <div className="bg-slate-900 min-h-[400px] relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-40">
                <img 
                  className="w-full h-full object-cover" 
                  alt="Dark themed stylized map of Pakistan with pinpoint on Lahore" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFMmUEBn-P9whpJfBY2tTnFt_QbtcojXKFCcJk0DYPHR6hlKirMmZBfdc306D6p6MocOT1FT36x5k_WR7hXqdvxlrTddom2WzfaUWsjz1FZNQ9W9KpszVdfsQ9y5f0jO4q6h3Ctp9c94fOEMyJv0KDMpXh9S2gG9c8IAgOkit8fJ_hNv5_rO6qzOMCqtGFfo13ZHZUQ18RPidJUswT59rKKTcPTGMdScUP5ixsSzhjyUGczW-HA2W7oKSaegKP9VHVUB9rRrGcGww"
                />
              </div>
              <div className="relative z-10 text-center p-8">
                <div className="size-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse mx-auto mb-4 border border-primary/40">
                  <MapPin className="text-primary w-8 h-8" />
                </div>
                <p className="text-white font-bold uppercase tracking-widest text-xs">Flagship Location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
