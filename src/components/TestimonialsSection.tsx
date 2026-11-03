"use client";

import { salonConfig } from "@/config/salon.config";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F0F9FA]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCF2F4] text-[#244B50] text-xs font-semibold mb-3 border border-[#BEE6EA]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#3B8E97]" />
            <span>Google Reviews • 4.8 / 5 Αστέρια</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#162021]">
            Τι λένε οι πελάτισσές μας
          </h2>
          <p className="text-sm sm:text-base text-[#5E6D70] mt-3">
            Η ικανοποίηση, η καθαριότητα και το χαμόγελό σας είναι η καθημερινή μας δέσμευση.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-[#E6F3F4] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:border-[#BEE6EA]"
            >
              <Quote className="w-10 h-10 text-[#BEE6EA]/60 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-[#445254] leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-[#E6F3F4] flex items-center justify-between">
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#162021]">
                    {t.name}
                  </h4>
                  <span className="text-xs text-[#3B8E97] font-medium block">
                    {t.service}
                  </span>
                </div>
                <span className="text-[11px] text-[#5E6D70]">
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
