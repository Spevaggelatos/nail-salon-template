"use client";

import { salonConfig } from "@/config/salon.config";
import { Phone, Calendar } from "lucide-react";

interface MobileBookingBarProps {
  onOpenBooking: () => void;
}

export default function MobileBookingBar({ onOpenBooking }: MobileBookingBarProps) {
  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E6F3F4] p-3 sm:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <a
          href={`tel:${salonConfig.contact.phone.replace(/\s+/g, "")}`}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#DCF2F4] text-[#244B50] font-semibold text-xs border border-[#BEE6EA] active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#3B8E97]" />
          <span>Κλήση Τώρα</span>
        </a>

        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-gradient-to-r from-[#3B8E97] to-[#48A3AD] text-white font-semibold text-xs shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Ραντεβού</span>
        </button>
      </div>
    </aside>
  );
}
