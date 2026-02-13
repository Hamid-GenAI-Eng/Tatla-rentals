"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, UserCheck, Crown } from "lucide-react";
import { MouseEvent } from "react";

const services = [
  {
    icon: Crown,
    title: "White Glove Delivery",
    desc: "Your chosen vehicle delivered to your doorstep, airport, or hotel at any hour.",
  },
  {
    icon: ShieldCheck,
    title: "Assured Quality",
    desc: "Every vehicle is thoroughly checked, serviced, and cleaned to ensure reliability, comfort, and peace of mind throughout your journey.",
  },
  {
    icon: UserCheck,
    title: "24/7 Concierge",
    desc: "Specialized assistant available for you to handle route planning and bookings.",
  },
];

function TiltCard({ service }: { service: (typeof services)[0] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springConfig = { stiffness: 100, damping: 10 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass-card p-8 rounded-xl relative group cursor-pointer"
    >
      <div
        className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
      />
      
      <div style={{ transform: "translateZ(30px)" }}>
        <div className="size-14 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <service.icon className="text-slate-300 group-hover:text-primary transition-colors w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-glow transition-all">
          {service.title}
        </h3>
        <p className="text-slate-500 font-light leading-relaxed text-sm">
          {service.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="py-24 relative bg-midnight">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
          {services.map((s, i) => (
            <TiltCard key={i} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
