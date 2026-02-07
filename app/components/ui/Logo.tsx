"use client";

import { motion } from "framer-motion";

export default function Logo({ className = "", animated = false }: { className?: string, animated?: boolean }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        width="180" 
        height="60" 
        viewBox="0 0 300 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Speedometer Arc */}
        <motion.path 
          d="M 20 80 A 130 130 0 0 1 280 80" 
          stroke="url(#silver-gradient)" 
          strokeWidth="4" 
          strokeLinecap="round"
          initial={animated ? { pathLength: 0, opacity: 0 } : { pathLength: 1, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Speedometer Ticks - Decorative */}
        <path d="M 40 75 L 50 65" stroke="#ec1313" strokeWidth="3" />
        <path d="M 260 75 L 250 65" stroke="#ec1313" strokeWidth="3" />
        
        {/* TATLA Text */}
        <text 
          x="150" 
          y="65" 
          textAnchor="middle" 
          fontFamily="'Space Grotesk', sans-serif" 
          fontWeight="900" 
          fontSize="68" 
          fill="#ec1313"
          style={{ 
            filter: "drop-shadow(0px 0px 10px rgba(236, 19, 19, 0.3))",
            fontStyle: "italic",
            letterSpacing: "0.05em"
          }}
        >
          TATLA
        </text>
        
        {/* RENT A CAR Text */}
        <text 
          x="150" 
          y="90" 
          textAnchor="middle" 
          fontFamily="'Space Grotesk', sans-serif" 
          fontWeight="600" 
          fontSize="18" 
          fill="white"
          style={{ letterSpacing: "0.4em" }}
        >
          RENT A CAR
        </text>

        {/* Gradients */}
        <defs>
          <linearGradient id="silver-gradient" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#333" />
            <stop offset="20%" stopColor="#ccc" />
            <stop offset="50%" stopColor="#fff" />
            <stop offset="80%" stopColor="#ccc" />
            <stop offset="100%" stopColor="#333" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
