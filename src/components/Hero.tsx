"use client";

import { salonConfig } from "@/config/salon.config";
import {
  Calendar,
  ArrowDown,
  Sparkles,
  ShieldCheck,
  MapPin,
  Star,
  Award,
} from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Soft Turquoise / Cyan & Warm Light Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-gradient-to-tr from-[#BEE6EA]/45 via-[#F0F9FA]/70 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Award & Google Rating Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F9FA] border border-[#BEE6EA] text-xs font-semibold text-[#244B50]">
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span>
                  {salonConfig.business.rating} / 5 στο Google (
                  {salonConfig.business.reviewCount}+ κριτικές)
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FBF8F0] border border-[#EDDBA6] text-xs font-semibold text-[#8A6823]">
                <Award className="w-3.5 h-3.5 text-[#C9A44C]" />
                <span>{salonConfig.business.award}</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#162021] leading-[1.15]">
              Ο απόλυτος προορισμός{" "}
              <span className="italic text-[#3B8E97] relative inline-block">
                ομορφιάς & άκρων
                <svg
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#91DBE0]/80 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 12 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              στον Χολαργό.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5E6D70] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {salonConfig.business.subtitle}
            </p>

            {/* Location Quick Pill */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#244B50] font-medium bg-white px-4 py-2 rounded-2xl border border-[#BEE6EA] shadow-xs">
              <MapPin className="w-4 h-4 text-[#3B8E97] shrink-0" />
              <span>
                <strong>{salonConfig.contact.address.street}</strong> •{" "}
                {salonConfig.contact.address.area}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#3B8E97] via-[#48A3AD] to-[#3B8E97] hover:from-[#2D5E64] hover:to-[#3B8E97] text-white font-medium text-sm tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Κλείσε Ραντεβού</span>
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#F0F9FA] text-[#244B50] border border-[#BEE6EA] font-medium text-sm tracking-wider uppercase rounded-full transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Τιμοκατάλογος ELLO</span>
                <ArrowDown className="w-4 h-4 text-[#3B8E97]" />
              </a>
            </div>

            {/* Micro badges below CTA */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#5E6D70]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3B8E97]" />
                <span>100% Αποστείρωση Εργαλείων</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#3B8E97]" />
                <span>Neonail & Schrammek Cosmetics</span>
              </div>
            </div>
          </div>

          {/* Right Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#BEE6EA] via-[#91DBE0]/40 to-[#F0F9FA] rounded-3xl blur-lg opacity-70 -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80"
                  alt="ELLO BEAUTY Cholargos Nail & Aesthetics Studio"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Glass Badge 1: Top Right */}
                <div className="absolute top-4 right-4 glass-panel px-3.5 py-2 rounded-2xl shadow-md border border-white/70 text-xs font-semibold text-[#244B50] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#3B8E97] animate-ping" />
                  <span>Δίπλα στο Μετρό Χολαργός</span>
                </div>

                {/* Floating Glass Badge 2: Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-2xl shadow-lg border border-white/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#3B8E97] font-semibold">
                        Most Popular @ellonails_beauty
                      </p>
                      <h4 className="font-serif-luxury text-lg font-bold text-[#162021]">
                        Ημιμόνιμο, Gel & Lash Lift
                      </h4>
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="px-3.5 py-1.5 bg-[#3B8E97] text-white text-xs font-semibold rounded-full hover:bg-[#2D5E64] transition-colors cursor-pointer"
                    >
                      Κράτηση
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-16 pt-10 border-t border-[#E6F3F4] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {salonConfig.stats.map((stat, i) => (
            <div key={i} className="p-3">
              <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#3B8E97]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#5E6D70] mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
