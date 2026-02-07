"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show only on mobile/tablet (or small screens)
    // The requirement says "place the WahtsApp icon in Mobile view just above the bottom nav"
    // So we can hide it on large screens if desired, or keep it global.
    // Let's keep it global but positioned specifically for mobile.
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/923017672571"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-24 right-6 md:bottom-10 md:right-10 flex items-center justify-center size-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform animate-bounce-slow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
    </a>
  );
}
