"use client";

import { 
  Sparkles, 
  Briefcase, 
  Diamond, 
  Heart, 
  Map, 
  ArrowRight, 
  Armchair, 
  Settings, 
  Fan, 
  Mountain, 
  Shield, 
  Snowflake, 
  Tv, 
  Wifi, 
  Usb,
  X,
  Rotate3d,
  CheckCircle,
  Car
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FleetClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  // Modal States
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const openDetails = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setShowDetailsModal(true);
  };

  return (
    <main className="min-h-screen bg-background-dark pt-24 pb-24">
      {/* Secondary Navigation */}
      <div className="bg-midnight/80 backdrop-blur-md border-b border-white/5 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
            {[
              { id: "classic", icon: Sparkles, label: "Classic" },
              { id: "executive", icon: Briefcase, label: "Executive" },
              { id: "premium", icon: Diamond, label: "Premium" },
              { id: "wedding", icon: Heart, label: "Wedding Fleets" },
              { id: "trips", icon: Map, label: "Trips" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 font-medium text-xs uppercase tracking-widest whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? "text-primary font-bold"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <cat.icon className="w-4 h-4" /> {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 space-y-20">
        
        {/* Executive Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 italic">
                Executive <span className="text-primary">Excellence</span>
              </h2>
              <p className="text-slate-500 text-sm">
                Sophisticated comfort for business and city transit.
              </p>
            </div>
            <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glass-card group rounded-xl overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFMmUEBn-P9whpJfBY2tTnFt_QbtcojXKFCcJk0DYPHR6hlKirMmZBfdc306D6p6MocOT1FT36x5k_WR7hXqdvxlrTddom2WzfaUWsjz1FZNQ9W9KpszVdfsQ9y5f0jO4q6h3Ctp9c94fOEMyJv0KDMpXh9S2gG9c8IAgOkit8fJ_hNv5_rO6qzOMCqtGFfo13ZHZUQ18RPidJUswT59rKKTcPTGMdScUP5ixsSzhjyUGczW-HA2W7oKSaegKP9VHVUB9rRrGcGww"
                  alt="Toyota Corolla"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Toyota Corolla (All Models)
                </h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Armchair className="text-primary w-4 h-4" /> 5 Seats
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Settings className="text-primary w-4 h-4" /> Automatic
                  </div>
                </div>
                <button 
                  onClick={() => openDetails({ name: 'Toyota Corolla', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFMmUEBn-P9whpJfBY2tTnFt_QbtcojXKFCcJk0DYPHR6hlKirMmZBfdc306D6p6MocOT1FT36x5k_WR7hXqdvxlrTddom2WzfaUWsjz1FZNQ9W9KpszVdfsQ9y5f0jO4q6h3Ctp9c94fOEMyJv0KDMpXh9S2gG9c8IAgOkit8fJ_hNv5_rO6qzOMCqtGFfo13ZHZUQ18RPidJUswT59rKKTcPTGMdScUP5ixsSzhjyUGczW-HA2W7oKSaegKP9VHVUB9rRrGcGww' })}
                  className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                >
                  Details & Specs
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="glass-card group rounded-xl overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIiUx6rpV_48peR4eXEQCfAh-DdbzmPdLqqknSY26basXiW0GiYZcTN8v5G5nHvTbCpXzc-3qjUacmsfjsVAbsq7T0EGuLK6B6Qw7XDM3-YB5ZkGtmbkQdnWs0FzEsWQdsnvB9fbGI9mgI4rtmjx76jCXH3gjnx_0oY8U2jLD-xPojKz8OMJ4rS-YydK9Fpvcv2CC1t0sYnp_VIHJVRMaVDtpdxdP2WZrDqXZ4Hz2FISL5mO21hJKreVV5QDa2T70j-c5qjl5c3KE"
                  alt="Honda Civic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Honda Civic (All Models)
                </h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Armchair className="text-primary w-4 h-4" /> 5 Seats
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Settings className="text-primary w-4 h-4" /> CVT
                  </div>
                </div>
                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                  Details & Specs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Elite SUVs Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 italic">
                Elite <span className="text-primary">SUVs</span>
              </h2>
              <p className="text-slate-500 text-sm">
                Power, prestige, and unparalleled presence.
              </p>
            </div>
            <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Featured SUV */}
            <div className="glass-card group rounded-xl overflow-hidden border-primary/20 bg-primary/5">
              <div className="aspect-video relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA"
                  alt="Land Cruiser ZX V8"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Land Cruiser ZX V8
                </h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Armchair className="text-primary w-4 h-4" /> 7 Seats
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Fan className="text-primary w-4 h-4" /> Climate Control
                  </div>
                </div>
                <button 
                  onClick={() => openDetails({ 
                    name: 'Land Cruiser ZX V8', 
                    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA'
                  })}
                  className="w-full py-3 bg-primary text-white rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                  View Details & Specs
                </button>
              </div>
            </div>

            {/* SUV 2 */}
            <div className="glass-card group rounded-xl overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA"
                  alt="Toyota Fortuner"
                  className="w-full h-full object-cover grayscale brightness-50"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Toyota Fortuner
                </h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Armchair className="text-primary w-4 h-4" /> 7 Seats
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Mountain className="text-primary w-4 h-4" /> 4x4
                  </div>
                </div>
                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                  Details & Specs
                </button>
              </div>
            </div>

             {/* SUV 3 */}
             <div className="glass-card group rounded-xl overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA"
                  alt="Land Cruiser Prado"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Land Cruiser Prado
                </h3>
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Armchair className="text-primary w-4 h-4" /> 7 Seats
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 uppercase tracking-widest">
                    <Shield className="text-primary w-4 h-4" /> Armored Opt.
                  </div>
                </div>
                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">
                  Details & Specs
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Utility Section */}
        <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 italic">
                Utility & <span className="text-primary">Logistics</span>
              </h2>
              <p className="text-slate-500 text-sm">
                Reliable solutions for transport and cargo.
              </p>
            </div>
            <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="glass-card group rounded-xl overflow-hidden">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Suzuki Cary / Every</h3>
                    <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest">Compact Logistics</p>
                    <button className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Request Quote</button>
                </div>
            </div>
            <div className="glass-card group rounded-xl overflow-hidden">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Changan Every</h3>
                    <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest">Versatile Hauler</p>
                    <button className="w-full py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Request Quote</button>
                </div>
            </div>
          </div>
        </section>

         {/* Group Travel Section */}
         <section>
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2 italic">
                Group <span className="text-primary">Travel</span>
              </h2>
              <p className="text-slate-500 text-sm">
                Luxurious large-capacity transportation.
              </p>
            </div>
            <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Coaster 1 */}
             <div className="glass-card group rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 aspect-video bg-slate-900 overflow-hidden">
                     <img alt="Coaster" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA"/>
                </div>
                <div className="p-8 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Toyota Coaster</h3>
                    <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest">29 Seater Luxury</p>
                    <div className="flex gap-4 mb-6">
                        <Snowflake className="text-primary w-5 h-5" />
                        <Tv className="text-primary w-5 h-5" />
                        <Wifi className="text-primary w-5 h-5" />
                    </div>
                    <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Details</button>
                </div>
             </div>

             {/* Coaster 2 */}
             <div className="glass-card group rounded-xl overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 aspect-video bg-slate-900 overflow-hidden">
                     <img alt="Coaster" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA"/>
                </div>
                <div className="p-8 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">AC Coaster</h3>
                    <p className="text-slate-500 text-xs mb-6 uppercase tracking-widest">Premium Group Transit</p>
                    <div className="flex gap-4 mb-6">
                        <Snowflake className="text-primary w-5 h-5" />
                        <Armchair className="text-primary w-5 h-5" />
                        <Usb className="text-primary w-5 h-5" />
                    </div>
                    <button className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all">Details</button>
                </div>
             </div>
          </div>
        </section>

      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {showDetailsModal && selectedVehicle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
               initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
               className="absolute inset-0 bg-black/85 backdrop-blur-md" 
               onClick={() => setShowDetailsModal(false)}
            />
            <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl glass-card rounded-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] bg-[#111]"
            >
              <button 
                  onClick={() => setShowDetailsModal(false)}
                  className="absolute top-6 right-6 z-10 size-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-primary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="w-full md:w-3/5 bg-black relative">
                <img src={selectedVehicle.image} alt="Vehicle Config" className="w-full h-full object-cover" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
                  <button className="px-6 py-2 bg-primary text-white text-[10px] font-bold uppercase rounded-full">Gallery</button>
                  <button className="px-6 py-2 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase rounded-full flex items-center gap-2">
                    <Rotate3d className="w-4 h-4" /> Interior View
                  </button>
                </div>
              </div>
              <div className="w-full md:w-2/5 p-10 overflow-y-auto">
                <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase mb-2 block">Premium Selection</span>
                <h2 className="text-3xl font-bold text-white mb-8">{selectedVehicle.name}</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                      <Shield className="text-primary w-4 h-4" /> Safety Features
                    </h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li className="flex items-center gap-2"><div className="size-1 bg-primary rounded-full" /> Pre-Collision System</li>
                      <li className="flex items-center gap-2"><div className="size-1 bg-primary rounded-full" /> 10 Airbags System</li>
                      <li className="flex items-center gap-2"><div className="size-1 bg-primary rounded-full" /> Blind Spot Monitor</li>
                    </ul>
                  </div>
                   <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 border-b border-white/10 pb-2 flex items-center gap-2">
                      <Armchair className="text-primary w-4 h-4" /> Comfort Features
                    </h4>
                    <ul className="space-y-2 text-slate-400 text-sm">
                      <li className="flex items-center gap-2"><div className="size-1 bg-primary rounded-full" /> 4-Zone Climate Control</li>
                      <li className="flex items-center gap-2"><div className="size-1 bg-primary rounded-full" /> Rear Seat Entertainment</li>
                      <li className="flex items-center gap-2"><div className="size-1 bg-primary rounded-full" /> Ventilated Seats</li>
                    </ul>
                  </div>
                </div>
                <button className="w-full mt-12 py-4 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-xl shadow-primary/20">
                    Book This Vehicle
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
