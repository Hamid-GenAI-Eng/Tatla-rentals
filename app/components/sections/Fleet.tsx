"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Armchair, Gauge } from "lucide-react";

// Placeholder images from the provided HTML/request
const fleet = [
  {
    id: 1,
    name: "Mercedes G63 AMG",
    desc: "V8 Biturbo | Black Matte Edition",
    price: "$850",
    seats: 5,
    speed: "240 KM/H",
    category: "SUVs",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA",
    badge: "Available",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    name: "Porsche 911 GT3",
    desc: "Turbocharged | Alpine White",
    price: "$1,200",
    seats: 2,
    speed: "312 KM/H",
    category: "Sports",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBj51B7LloVO_k1oBuXMSVRWuqbxQQJAN4TRII-uUntRFaGaVjAW-p2AyosmQXWFA3XgG6ba2wsFFKHfSpbtPRVA_e6W2t5AQY14urLRmeKM6jbb1EvqUyUkzK3Eh-08bYk5AfitJyg67i0G1w94LNA5vxrYyJ3-4O5BbzSAM20EyMoYl2-R8gQrzmaj-dtgB5UsdgGl-PzDLMwQeeW15VuPx6Ynd59kWH-J2_KyuL3Trnb1h2lAiAvZ_UpW2qAnN2Zegm1DMGvXkQ",
    badge: null,
  },
  {
    id: 3,
    name: "Rolls-Royce Ghost",
    desc: "V12 Engine | Silver Frost",
    price: "$2,500",
    seats: 4,
    speed: "250 KM/H",
    category: "Executive",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIiUx6rpV_48peR4eXEQCfAh-DdbzmPdLqqknSY26basXiW0GiYZcTN8v5G5nHvTbCpXzc-3qjUacmsfjsVAbsq7T0EGuLK6B6Qw7XDM3-YB5ZkGtmbkQdnWs0FzEsWQdsnvB9fbGI9mgI4rtmjx76jCXH3gjnx_0oY8U2jLD-xPojKz8OMJ4rS-YydK9Fpvcv2CC1t0sYnp_VIHJVRMaVDtpdxdP2WZrDqXZ4Hz2FISL5mO21hJKreVV5QDa2T70j-c5qjl5c3KE",
    badge: "VIP Only",
    badgeColor: "bg-yellow-500 text-black",
  },
];

const categories = ["All Vehicles", "Sports", "SUVs", "Executive"];

export default function Fleet() {
  const [filter, setFilter] = useState("All Vehicles");

  const filteredFleet =
    filter === "All Vehicles"
      ? fleet
      : fleet.filter((item) => item.category === filter);

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
                className="glass-card rounded-xl overflow-hidden group border-transparent hover:border-primary/20 transition-all min-w-[85vw] md:min-w-0 snap-center"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {car.badge && (
                    <div
                      className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest ${
                        car.badgeColor || "bg-primary text-white"
                      }`}
                    >
                      {car.badge}
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {car.name}
                      </h3>
                      <p className="text-slate-500 text-sm">{car.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-500 uppercase block tracking-tighter">
                        Per Day
                      </span>
                      <span className="text-xl font-bold text-white">
                        {car.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4 mb-8">
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase tracking-widest">
                      <Armchair className="w-4 h-4 text-primary" /> {car.seats} Seats
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-slate-400 uppercase tracking-widest">
                      <Gauge className="w-4 h-4 text-primary" /> {car.speed}
                    </div>
                  </div>
                  <button className="w-full py-4 border border-white/10 rounded-full text-xs font-bold uppercase tracking-[0.2em] group-hover:bg-white group-hover:text-black transition-all">
                    Reservation Details
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
