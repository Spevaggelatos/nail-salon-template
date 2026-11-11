"use client";

import { salonConfig } from "@/config/salon.config";
import { Sparkles } from "lucide-react";

interface AnnouncementBarProps {
  onOpenBooking: () => void;
}

export default function AnnouncementBar({ onOpenBooking }: AnnouncementBarProps) {
  if (!salonConfig.announcement.enabled) return null;

  return (
    <div className="bg-gradient-to-r from-[#541223] via-[#721B32] to-[#8E253F] text-white py-2 px-4 text-xs md:text-sm font-medium tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <Sparkles className="w-3.5 h-3.5 text-rose-200 animate-pulse hidden sm:inline" />
        <span>{salonConfig.announcement.text}</span>
        <button
          onClick={onOpenBooking}
          className="ml-2 underline font-semibold text-[#F5D8DF] hover:text-white transition-colors cursor-pointer"
        >
          {salonConfig.announcement.linkText} →
        </button>
      </div>
    </div>
  );
}
