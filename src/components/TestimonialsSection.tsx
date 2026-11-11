"use client";

import { salonConfig } from "@/config/salon.config";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#FDF7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0F3] text-[#541223] text-xs font-semibold mb-3 border border-[#F2D8DE]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8B79]" />
            <span>Κριτικές Πελατών • 4.9 / 5 Αστέρια (267+ Reviews)</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E1518]">
            Τι λένε για το Neta Nails
          </h2>
          <p className="text-sm sm:text-base text-[#6C565E] mt-3">
            Η ικανοποίηση, η ποιότητα και η διάρκεια στα νύχια σας είναι η προτεραιότητά μας.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {salonConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-8 border border-[#F2E5E8] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group hover:border-[#F2D8DE]"
            >
              <Quote className="w-10 h-10 text-[#F4D8DF]/80 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm text-[#4E413E] leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-4 border-t border-[#F2E5E8] flex items-center justify-between">
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#1E1518]">
                    {t.name}
                  </h4>
                  <span className="text-xs text-[#84233C] font-medium block">
                    {t.service}
                  </span>
                </div>
                <span className="text-[11px] text-[#6C565E]">
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
