"use client";

import { motion } from "framer-motion";
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

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 marble-surface">
      {/* Soft Rose Burgundy & Alabaster Glow Background */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.65, 0.85, 0.65] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[480px] bg-gradient-to-tr from-[#F4D8DF]/65 via-[#FAF0F3]/90 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: LUXURY_EASE }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Rating & Top Rated Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <a
                href="#testimonials"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF0F3] border border-[#F2D8DE] text-xs font-semibold text-[#541223] hover:border-[#D38CA0] transition-colors"
              >
                <div className="flex items-center text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span>
                  {salonConfig.business.rating} / 5 Αστέρια ({salonConfig.business.reviewCount}+ αξιολογήσεις)
                </span>
              </a>

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EAF0EC] border border-[#B5C7BC] text-xs font-semibold text-[#4B6555]">
                <Award className="w-3.5 h-3.5 text-[#6E8B79]" />
                <span>Top Rated Nail Studio Χολαργός</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#1E1518] leading-[1.15]">
              Η τέχνη της περιποίησης στα άκρα σας,{" "}
              <span className="italic text-[#84233C] relative inline-block">
                στον Χολαργό.
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.45, ease: LUXURY_EASE }}
                  className="absolute left-0 -bottom-2 w-full h-2 text-[#D38CA0]/70 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 5 Q 50 12 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#6C565E] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {salonConfig.business.subtitle}
            </p>

            {/* Location Quick Pill */}
            <a
              href="#location"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#541223] font-medium bg-white px-4 py-2 rounded-2xl border border-[#F2D8DE] shadow-xs hover:border-[#84233C]/40 transition-colors"
            >
              <MapPin className="w-4 h-4 text-[#84233C] shrink-0" />
              <span>
                <strong>{salonConfig.contact.address.street}</strong> • {salonConfig.contact.address.area}
              </span>
            </a>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#84233C] via-[#A33A53] to-[#84233C] btn-luxury-shimmer text-white font-medium text-sm tracking-wider uppercase rounded-full shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Κλείσε Ραντεβού Online</span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#services"
                className="w-full sm:w-auto px-7 py-4 bg-white hover:bg-[#FAF0F3] text-[#541223] border border-[#F2D8DE] font-medium text-sm tracking-wider uppercase rounded-full transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Τιμοκατάλογος Υπηρεσιών</span>
                <ArrowDown className="w-4 h-4 text-[#84233C]" />
              </motion.a>
            </div>

            {/* Micro badges below CTA */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#6C565E]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#6E8B79]" />
                <span>100% Αποστείρωση Εργαλείων</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#84233C]" />
                <span>Εξειδίκευση σε Dipping & Nail Art</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image Showcase with Real Instagram Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: LUXURY_EASE }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F4D8DF] via-[#FAF0F3] to-[#EAF0EC] rounded-3xl blur-lg opacity-75 -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] bg-gray-100">
                <img
                  src="/images/netanails/nails3.jpg"
                  alt="Neta Nails Cholargos Signature Manicure"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Glass Badge 1: Top Right */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-4 glass-panel px-3.5 py-2 rounded-2xl shadow-md border border-white/70 text-xs font-semibold text-[#541223] flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#84233C] animate-ping" />
                  <span>Λ. Περικλέους 56, Χολαργός</span>
                </motion.div>

                {/* Floating Glass Badge 2: Bottom Card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45, ease: LUXURY_EASE }}
                  className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-2xl shadow-lg border border-white/80"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-[#84233C] font-semibold">
                        Νεκταρία & Έλλη • 5.0 ★ Team
                      </p>
                      <h4 className="font-serif-luxury text-lg font-bold text-[#1E1518]">
                        Dipping, Gel & Pedicure
                      </h4>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      onClick={onOpenBooking}
                      className="px-4 py-2 bg-[#84233C] text-white text-xs font-semibold rounded-full hover:bg-[#6F1A30] transition-colors cursor-pointer shrink-0 shadow-xs"
                    >
                      Κράτηση
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: LUXURY_EASE }}
          className="mt-16 pt-10 border-t border-[#F2E5E8] grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {salonConfig.stats.map((stat, i) => (
            <div key={i} className="p-3 rounded-2xl hover:bg-white/60 transition-colors">
              <div className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#84233C]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#6C565E] mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
