"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Armchair, Gauge, X, Check, Calendar, MapPin, Fuel, Settings, User } from "lucide-react";
import { Vehicle } from "@/app/types/vehicle";

const categories = ["All Vehicles", "SUVs", "Executive"];

export default function Fleet({ initialVehicles = [] }: { initialVehicles?: Vehicle[] }) {
  const [fleet, setFleet] = useState<Vehicle[]>(initialVehicles);
  const [filter, setFilter] = useState("All Vehicles");
  const filteredFleet =
    filter === "All Vehicles"
      ? fleet
      : fleet.filter((item) => item.category && (item.category === filter || (filter === "SUVs" && item.category === "suv") || (filter === "Executive" && item.category === "executive")));
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (initialVehicles.length === 0) {
        fetch('/api/vehicles')
            .then(res => res.json())
            .then(data => {
                // Filter only Featured ones for Home Page (Land Cruiser, Fortuner, Civic)
                // For now, simplify by just taking the first 3 or specific IDs if we want to mimic "Curated"
                // Using specific IDs to maintain the "Curated" look
                const curatedIds = ["land-cruiser-zx", "fortuner-legender", "civic-rs"];
                const featured = data.filter((v: Vehicle) => v.id && curatedIds.includes(v.id));
                setFleet(featured.length > 0 ? featured : data.slice(0, 3)); 
            })
            .catch(err => console.error(err));
    } else {
        // If passed from server, also filter for curated list
        const curatedIds = ["land-cruiser-zx", "fortuner-legender", "civic-rs"];
        const featured = initialVehicles.filter((v: Vehicle) => v.id && curatedIds.includes(v.id));
         setFleet(featured.length > 0 ? featured : initialVehicles.slice(0, 3));
    }
  }, [initialVehicles]);

  const openModal = (vehicle: Vehicle) => {
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
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
              The Selection
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white italic">
              Curated <span className="text-primary">Masterpieces</span>
            </h2>
          </div>
          <div className="flex gap-4 p-1 glass-card rounded-full overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase transition-all whitespace-nowrap ${
                  filter === cat
                    ? "bg-primary text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-6 md:gap-8 pb-8 md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
        >
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((car) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={car.id}
                className="glass-card rounded-xl overflow-hidden group border-transparent hover:border-primary/20 transition-all min-w-[85vw] md:min-w-0 snap-center flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {car.badge && (
                    <div
                      className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest bg-primary text-white`}
                    >
                      {car.badge}
                    </div>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                      
                      <h3 className="text-xl font-bold text-white mb-1">
                        {car.name}
                      </h3>
                      <p className="text-slate-500 text-xs uppercase tracking-widest">{car.category}</p>
                   
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
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
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
                      {/* Thumbnails if multiple images (Logic ready for when user adds videos/more photos) */}
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
    </section>
  );
}
