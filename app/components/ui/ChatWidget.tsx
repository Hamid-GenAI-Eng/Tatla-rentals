"use client";

import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-[100] group">
      <div className="absolute -top-1 -right-1 size-5 bg-primary rounded-full border-2 border-midnight flex items-center justify-center z-10 animate-bounce">
        <span className="text-[10px] font-bold text-white">1</span>
      </div>
      <button className="bg-emerald-600 size-16 rounded-full shadow-2xl shadow-emerald-600/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-all relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
        <MessageCircle className="text-white w-8 h-8 relative z-10" />
      </button>
      {/* Tooltip */}
      <div className="absolute right-20 bottom-2 bg-midnight glass-card px-6 py-3 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        <p className="text-xs font-bold text-white uppercase tracking-widest">
          Chat to Book Now
        </p>
      </div>
    </div>
  );
}
