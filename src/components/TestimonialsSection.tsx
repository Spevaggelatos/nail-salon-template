"use client";

import { salonConfig } from "@/config/salon.config";
import { Star, Quote, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";
import { FadeIn, StaggerGrid, StaggerItem } from "./MotionPrimitives";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#FDF7F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0F3] text-[#541223] text-xs font-semibold mb-3 border border-[#F2D8DE]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#6E8B79]" />
            <span>Επαληθευμένες Κριτικές • 4.9 / 5 Αστέρια (267+ Αξιολογήσεις)</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E1518]">
            Τι λένε για το Neta Nails
          </h2>
          <p className="text-sm sm:text-base text-[#6C565E] mt-3">
            Η εμπιστοσύνη των πελατών μας στην {salonConfig.business.name} αποτυπώνεται σε κάθε επίσκεψη με τη Νεκταρία και την Έλλη.
          </p>
        </FadeIn>

        {/* Verified Sub-ratings Strip */}
        <FadeIn delay={0.1} className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl border border-[#F2E5E8] p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="px-3.5 py-2 rounded-xl bg-[#84233C] text-white text-center">
                <div className="font-serif-luxury text-2xl font-bold leading-none">
                  {salonConfig.business.rating}
                </div>
                <div className="text-[10px] opacity-90 mt-0.5">από 5</div>
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-semibold text-[#1E1518] mt-0.5">
                  Βάσει {salonConfig.business.reviewCount}+ επαληθευμένων ραντεβού
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {salonConfig.ratingBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="px-3 py-1.5 rounded-full bg-[#FAF0F3] border border-[#F2D8DE] text-xs flex items-center gap-1.5"
                >
                  <span className="text-[#541223] font-medium">{item.label}</span>
                  <span className="font-bold text-[#84233C]">{item.score} ★</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Testimonials Grid */}
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {salonConfig.testimonials.map((t) => (
            <StaggerItem key={t.id}>
              <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-[#F2E5E8] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group hover:border-[#F2D8DE]">
                <Quote className="w-9 h-9 text-[#F4D8DF]/80 absolute top-5 right-5 pointer-events-none" />

                <div>
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#4B6555] bg-[#EAF0EC] px-2.5 py-0.5 rounded-full mb-3">
                    <CheckCircle2 className="w-3 h-3 text-[#6E8B79]" />
                    <span>{t.verifiedSource || "Verified Visit"}</span>
                  </div>

                  {/* Exact Stars out of 5 */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < t.rating
                            ? "fill-amber-400 text-amber-400"
                            : "fill-gray-100 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-sm text-[#4E413E] leading-relaxed italic mb-6">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                {/* Author info */}
                <div className="pt-4 border-t border-[#F2E5E8] flex items-end justify-between gap-2">
                  <div>
                    <h4 className="font-serif-luxury text-lg font-bold text-[#1E1518]">
                      {t.name}
                    </h4>
                    <span className="text-xs text-[#84233C] font-medium block">
                      {t.service}
                    </span>
                    {t.technician && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#6C565E] mt-0.5">
                        <Sparkles className="w-3 h-3 text-[#84233C]" />
                        Τεχνίτρια: {t.technician}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#6C565E] shrink-0">
                    {t.date}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>

        {/* Link to Treatwell profile */}
        <div className="mt-10 text-center">
          <a
            href={salonConfig.contact.socials.treatwell}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#84233C] hover:text-[#541223] transition-colors"
          >
            <span>Δείτε όλες τις 267+ αξιολογήσεις στο Treatwell</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
