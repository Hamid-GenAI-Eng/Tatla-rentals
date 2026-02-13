"use client";

import { 
  Sparkles, Briefcase, Diamond, Heart, Map, ArrowRight, 
  Armchair, Settings, Fan, Mountain, Shield, Snowflake, 
  Tv, Wifi, Usb, X, Rotate3d, CheckCircle, Car, Calendar, 
  Gauge, User, Fuel
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Vehicle } from "@/app/types/vehicle";

export default function FleetClient({ initialVehicles = [] }: { initialVehicles?: Vehicle[] }) {
  const [allVehicles, setAllVehicles] = useState<Vehicle[]>(initialVehicles);
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // If no initial data (client-side nav), fetch it
    if (initialVehicles.length === 0) {
        fetch('/api/vehicles')
            .then(res => res.json())
            .then(data => setAllVehicles(data))
            .catch(err => console.error(err));
    }
  }, [initialVehicles]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedVehicle) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
       document.body.style.overflow = "unset";
       document.documentElement.style.overflow = "unset";
    };
  }, [selectedVehicle]);

  const filteredVehicles = activeCategory === "all" 
    ? allVehicles 
    : allVehicles.filter(v => v.category === activeCategory || (activeCategory === "wedding" && v.category === "suv")); // Show SUVs in wedding too

  const openModal = (vehicle: typeof allVehicles[0]) => {
     setSelectedVehicle(vehicle);
     setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  const handleWhatsAppBooking = () => {
     if(!selectedVehicle) return;
     const message = `I am interested in booking the *${selectedVehicle.name}*. \n\nPlease provide availability and rates.`;
     const url = `https://wa.me/923017672571?text=${encodeURIComponent(message)}`;
     window.open(url, '_blank');
  };

  return (
    <main className="min-h-screen bg-background-dark pt-24 pb-24">
      {/* Secondary Navigation */}
      <div className="bg-midnight/80 backdrop-blur-md border-b border-white/5 sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
            {[
              { id: "all", icon: Car, label: "View All" },
              { id: "classic", icon: Sparkles, label: "Classic & Utility" },
              { id: "executive", icon: Briefcase, label: "Executive" },
              { id: "suv", icon: Diamond, label: "SUVs & Luxury" }, // remapped ID to match data
              { id: "wedding", icon: Heart, label: "Wedding" },
              { id: "trips", icon: Map, label: "Trips & Tours" },
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

      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="flex justify-between items-end mb-8">
             <div>
               <h2 className="text-3xl font-bold text-white mb-2 italic">
                 {activeCategory === "all" ? "Complete" : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} <span className="text-primary">Collection</span>
               </h2>
               <p className="text-slate-500 text-sm">
                 Explore our premium range of vehicles for every occasion.
               </p>
             </div>
        </div>

        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            <AnimatePresence mode="popLayout">
                {filteredVehicles.map((car) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        key={car.id}
                        className="glass-card rounded-xl overflow-hidden group border-transparent hover:border-primary/20 transition-all flex flex-col"
                    >
                        <div className="aspect-[16/10] overflow-hidden relative">
                             <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                             {car.badge && (
                                <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                    {car.badge}
                                </div>
                             )}
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                             <div className="mb-4">
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {car.name}
                                </h3>
                                <p className="text-slate-500 text-xs uppercase tracking-widest">{car.subtitle}</p>
                             </div>
                             
                             <div className="mt-auto">
                                <button 
                                    onClick={() => openModal(car)}
                                    className="w-full py-4 border border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all"
                                >
                                    View Details & Contact
                                </button>
                             </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
      </div>

      {/* Vehicle Details Modal */}
      {mounted && createPortal(
        <AnimatePresence>
          {selectedVehicle && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="relative w-full max-w-5xl bg-[#111] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
               >
                  {/* Close Button */}
                  <button 
                      onClick={closeModal}
                      className="absolute top-4 right-4 z-20 bg-black/50 text-white p-2 rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                      <X className="w-5 h-5" />
                  </button>

                  {/* Left: Gallery */}
                  <div className="w-full md:w-1/2 bg-black relative flex flex-col">
                      <div className="flex-grow relative">
                           <img 
                              src={selectedVehicle.gallery[activeImageIndex]} 
                              alt={selectedVehicle.name} 
                              className="w-full h-full object-cover"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                           <div className="absolute bottom-6 left-6">
                              <h2 className="text-3xl font-bold text-white mb-1">{selectedVehicle.name}</h2>
                               <p className="text-primary text-xs font-bold uppercase tracking-widest">{selectedVehicle.subtitle}</p>
                           </div>
                      </div>
                      <div className="p-4 grid grid-cols-4 gap-2 bg-[#0a0a0c]">
                          {selectedVehicle.gallery.map((img, idx) => (
                               <button 
                                  key={idx}
                                  onClick={() => setActiveImageIndex(idx)}
                                  className={`aspect-video rounded overflow-hidden border-2 ${activeImageIndex === idx ? "border-primary" : "border-transparent opacity-50 hover:opacity-100"}`}
                               >
                                  <img src={img} alt="" className="w-full h-full object-cover" />
                               </button>
                          ))}
                      </div>
                  </div>

                  {/* Right: Details */}
                  <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto custom-scrollbar">
                      
                      {/* Overview */}
                      <div className="mb-10">
                          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                               Overview
                          </h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              {selectedVehicle.overview}
                          </p>
                      </div>

                      {/* Key Info Grid */}
                      <div className="mb-10">
                          <h3 className="text-lg font-bold text-white mb-6 border-b border-white/10 pb-2">
                              Key Information
                          </h3>
                          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
                               <div className="space-y-1">
                                  <span className="text-[10px] uppercase text-slate-500 tracking-widest block">Model Year</span>
                                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                                      <Calendar className="w-4 h-4 text-primary" /> {selectedVehicle.specs.year}
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <span className="text-[10px] uppercase text-slate-500 tracking-widest block">Seating</span>
                                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                                      <User className="w-4 h-4 text-primary" /> {selectedVehicle.specs.seats}
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <span className="text-[10px] uppercase text-slate-500 tracking-widest block">Engine</span>
                                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                                      <Gauge className="w-4 h-4 text-primary" /> {selectedVehicle.specs.engine}
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <span className="text-[10px] uppercase text-slate-500 tracking-widest block">Fuel Type</span>
                                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                                      <Fuel className="w-4 h-4 text-primary" /> {selectedVehicle.specs.fuel}
                                  </div>
                               </div>
                               <div className="space-y-1">
                                  <span className="text-[10px] uppercase text-slate-500 tracking-widest block">Transmission</span>
                                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                                      <Settings className="w-4 h-4 text-primary" /> {selectedVehicle.specs.transmission}
                                  </div>
                               </div>
                          </div>
                      </div>

                      {/* Rental Details */}
                      <div className="mb-10 bg-white/5 rounded-xl p-6 border border-white/5">
                          <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                              Rental Conditions
                          </h3>
                          <ul className="space-y-3">
                               <li className="flex justify-between text-sm">
                                   <span className="text-slate-400">Min. Duration</span>
                                   <span className="text-white font-medium">{selectedVehicle.rental.minDuration}</span>
                               </li>
                               <li className="flex justify-between text-sm">
                                   <span className="text-slate-400">Availability</span>
                                   <span className="text-white font-medium text-right">{selectedVehicle.rental.availability}</span>
                               </li>
                          </ul>
                      </div>

                      {/* CTA */}
                      <button 
                          onClick={handleWhatsAppBooking}
                          className="w-full py-4 bg-primary text-white rounded-lg font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl shadow-primary/20"
                      >
                          Request Booking
                      </button>
                      <p className="text-center text-xs text-slate-500 mt-4">
                          *Rates provided upon request via WhatsApp
                      </p>

                  </div>
               </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </main>
  );
}
