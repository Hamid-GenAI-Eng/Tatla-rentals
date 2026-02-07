"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Armchair, Settings, Fan, Mountain, Shield, Snowflake, Tv, Wifi, Usb, CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Data Configuration
const CATEGORY_DATA: Record<string, any> = {
  classic: {
    title: "Classic Series",
    subtitle: "Timeless Elegance",
    description: "Reliable, comfortable, and always in style. Perfect for daily commutes and city travel.",
    color: "from-blue-500 to-cyan-400",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFMmUEBn-P9whpJfBY2tTnFt_QbtcojXKFCcJk0DYPHR6hlKirMmZBfdc306D6p6MocOT1FT36x5k_WR7hXqdvxlrTddom2WzfaUWsjz1FZNQ9W9KpszVdfsQ9y5f0jO4q6h3Ctp9c94fOEMyJv0KDMpXh9S2gG9c8IAgOkit8fJ_hNv5_rO6qzOMCqtGFfo13ZHZUQ18RPidJUswT59rKKTcPTGMdScUP5ixsSzhjyUGczW-HA2W7oKSaegKP9VHVUB9rRrGcGww",
    vehicles: [
      {
        name: "Toyota Corolla",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFMmUEBn-P9whpJfBY2tTnFt_QbtcojXKFCcJk0DYPHR6hlKirMmZBfdc306D6p6MocOT1FT36x5k_WR7hXqdvxlrTddom2WzfaUWsjz1FZNQ9W9KpszVdfsQ9y5f0jO4q6h3Ctp9c94fOEMyJv0KDMpXh9S2gG9c8IAgOkit8fJ_hNv5_rO6qzOMCqtGFfo13ZHZUQ18RPidJUswT59rKKTcPTGMdScUP5ixsSzhjyUGczW-HA2W7oKSaegKP9VHVUB9rRrGcGww",
        specs: ["5 Seats", "Automatic", "Daily Use"],
        features: ["Reliable", "Fuel Efficient", "Comfortable"]
      },
      {
        name: "Honda Civic",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIiUx6rpV_48peR4eXEQCfAh-DdbzmPdLqqknSY26basXiW0GiYZcTN8v5G5nHvTbCpXzc-3qjUacmsfjsVAbsq7T0EGuLK6B6Qw7XDM3-YB5ZkGtmbkQdnWs0FzEsWQdsnvB9fbGI9mgI4rtmjx76jCXH3gjnx_0oY8U2jLD-xPojKz8OMJ4rS-YydK9Fpvcv2CC1t0sYnp_VIHJVRMaVDtpdxdP2WZrDqXZ4Hz2FISL5mO21hJKreVV5QDa2T70j-c5qjl5c3KE",
        specs: ["5 Seats", "CVT", "Executive"],
        features: ["Modern Design", "Sunroof", "Smart Entry"]
      }
    ]
  },
  executive: {
    title: "Executive Class",
    subtitle: "Business First",
    description: "Make a statement with our premium executive fleet. Designed for leaders.",
    color: "from-slate-200 to-slate-400",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIiUx6rpV_48peR4eXEQCfAh-DdbzmPdLqqknSY26basXiW0GiYZcTN8v5G5nHvTbCpXzc-3qjUacmsfjsVAbsq7T0EGuLK6B6Qw7XDM3-YB5ZkGtmbkQdnWs0FzEsWQdsnvB9fbGI9mgI4rtmjx76jCXH3gjnx_0oY8U2jLD-xPojKz8OMJ4rS-YydK9Fpvcv2CC1t0sYnp_VIHJVRMaVDtpdxdP2WZrDqXZ4Hz2FISL5mO21hJKreVV5QDa2T70j-c5qjl5c3KE",
    vehicles: [
      {
         name: "Honda Civic Oriel",
         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIiUx6rpV_48peR4eXEQCfAh-DdbzmPdLqqknSY26basXiW0GiYZcTN8v5G5nHvTbCpXzc-3qjUacmsfjsVAbsq7T0EGuLK6B6Qw7XDM3-YB5ZkGtmbkQdnWs0FzEsWQdsnvB9fbGI9mgI4rtmjx76jCXH3gjnx_0oY8U2jLD-xPojKz8OMJ4rS-YydK9Fpvcv2CC1t0sYnp_VIHJVRMaVDtpdxdP2WZrDqXZ4Hz2FISL5mO21hJKreVV5QDa2T70j-c5qjl5c3KE",
         specs: ["5 Seats", "Leather", "Climate"],
         features: ["Heated Seats", "Cruise Control", "Premium Audio"]
      },
      {
         name: "Toyota Fortuner",
         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA",
         specs: ["7 Seats", "4x4", "Power"],
         features: ["Off-road Capable", "Spacious", "Robust"]
      }
    ]
  },
  premium: {
    title: "Premium Luxury",
    subtitle: "The Zenith of Mobility",
    description: "Experience the extraordinary. Our flagship collection for those who demand the best.",
    color: "from-amber-300 to-yellow-500",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA",
    vehicles: [
      {
        name: "Land Cruiser ZX",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA",
        specs: ["V8 Power", "VIP", "Armored Opt"],
        features: ["Massage Seats", "Privacy Glass", "Satellite Phone"]
      },
      {
         name: "Land Cruiser Prado",
         image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA",
         specs: ["7 Seats", "Luxury", "Comfort"],
         features: ["Sunroof", "Climate Control", "Leather Interior"]
      }
    ]
  },
  wedding: {
    title: "Wedding Events",
    subtitle: "Your Special Day",
    description: "Make your grand entrance unforgettable with our bespoke wedding fleet.",
    color: "from-rose-300 to-pink-500",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuRUBOiOVYaKi89Ns7kdpzNFMpUF_XjZOYWiKIhjahfL-vkgDrG0c3rt2zZ4kYgpYt5NU6WiyoPayjJu3VGZqzjqbcFRzw4sJYHx2WG08hMUo7KUiT66YNOKhXYgHpaqBFp0k1vdVWHEsXBvUtH_7q72jgqVOBGPr64s-zwPSxQqObHhuVsPJJvmE4O-BrgWEgd0j66WT34-tjbVTAR4uk81e5OMLyQ1XKsbeYLhLOximPfHcp6WSN_uk8Ju8a867io-Lk23PDbj8",
    vehicles: [
       {
        name: "Luxury Limousine",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuRUBOiOVYaKi89Ns7kdpzNFMpUF_XjZOYWiKIhjahfL-vkgDrG0c3rt2zZ4kYgpYt5NU6WiyoPayjJu3VGZqzjqbcFRzw4sJYHx2WG08hMUo7KUiT66YNOKhXYgHpaqBFp0k1vdVWHEsXBvUtH_7q72jgqVOBGPr64s-zwPSxQqObHhuVsPJJvmE4O-BrgWEgd0j66WT34-tjbVTAR4uk81e5OMLyQ1XKsbeYLhLOximPfHcp6WSN_uk8Ju8a867io-Lk23PDbj8",
        specs: ["Chauffeur", "Decorated", "Red Carpet"],
        features: ["Floral Arrangements", "Champagne Service", "Photography"]
      }
    ]
  },
  trips: {
    title: "Trips & Tours",
    subtitle: "Journey Together",
    description: "Spacious, safe, and comfortable options for group travel and tourism.",
    color: "from-emerald-400 to-green-600",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA",
    vehicles: [
       {
        name: "Toyota Coaster",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA",
        specs: ["29 Seats", "WiFi", "AC"],
        features: ["Reclining Seats", "PA System", "Luggage Space"]
      },
       {
        name: "Grand Cabin",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsJ3LaigJ_3c2D7c0dXMdw3LxtBeBh5vOiz8p8BTdj4YAcL0JQuehyuE-xz8Zr2_M9OC5CfI1A_KEc3yvoq_Pw3spYXuuIwdsKG3QJzcuWpb2iXcjU-Zqzz8XkjNNKbsWgG3HRCeb6Mpi10nslW2cy0A5MBnGuTRGAfzay8a0NXan46EBbUsc3O_PVld9QMckPW0_f2Ib2bItnn_10nbs9tfNAThU9uhNBjPNwGm37RMkOPrcz8B_HrlNe6MZ-e3q0wi45f7qpmaA",
        specs: ["13 Seats", "Luxury", "High Roof"],
        features: ["Spacious", "Individual AC", "Comfort"]
      }
    ]
  }
};

export default function FleetCategoryClient({ category }: { category: string }) {
  const data = CATEGORY_DATA[category];

  if (!data) {
    notFound();
    return null;
  }

  return (
    <main className="min-h-screen bg-background-dark">
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover grayscale-[30%] brightness-50" />
           <div className={`absolute inset-0 bg-gradient-to-b ${data.color} opacity-20 mix-blend-overlay`} />
           <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-6">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className={`inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-bold uppercase tracking-[0.3em] mb-4 text-white`}>
               {data.subtitle}
             </span>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-glow">{data.title}</h1>
             <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">{data.description}</p>
           </motion.div>
        </div>
      </section>

      {/* Navigation Back */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-b border-white/5">
        <Link href="/fleet" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-widest font-bold">
           <ArrowLeft className="w-4 h-4" /> Back to Full Fleet
        </Link>
      </div>

      {/* Vehicle Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.vehicles.map((vehicle: any, index: number) => (
             <motion.div 
               key={index}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="glass-card rounded-2xl overflow-hidden group bg-[#0a0a0c] border-white/5"
             >
                <div className="aspect-[16/9] relative overflow-hidden">
                   <img 
                     src={vehicle.image} 
                     alt={vehicle.name} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   
                   <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                      <div className="flex gap-3">
                         {vehicle.specs.map((spec: string, i: number) => (
                           <span key={i} className="text-[10px] font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md text-white px-3 py-1 rounded-full">
                             {spec}
                           </span>
                         ))}
                      </div>
                   </div>
                </div>
                
                <div className="p-8">
                   <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                     <CheckCircle className="w-4 h-4 text-primary" /> Key Features
                   </h4>
                   <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                      {vehicle.features.map((feature: string, i: number) => (
                         <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                            <div className={`size-1.5 rounded-full bg-gradient-to-r ${data.color}`} />
                            {feature}
                         </div>
                      ))}
                   </div>
                   <button className="w-full py-4 text-sm font-bold uppercase tracking-widest rounded-lg bg-white/5 hover:bg-white hover:text-black border border-white/10 transition-all">
                      View Details & Pricing
                   </button>
                </div>
             </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
