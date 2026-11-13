"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { salonConfig, ServiceItem } from "@/config/salon.config";
import { Clock, Sparkles, CheckCircle2, Calendar } from "lucide-react";
import { FadeIn } from "./MotionPrimitives";

interface ServicesMenuProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesMenu({ onSelectService }: ServicesMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? salonConfig.services
      : salonConfig.services.filter((s) => s.categoryId === activeCategory);

  const tabs = [
    { id: "all", label: `Όλες οι Υπηρεσίες (${salonConfig.services.length})` },
    ...salonConfig.categories.map((cat) => ({ id: cat.id, label: cat.name })),
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#84233C] font-bold">
            Τιμοκατάλογος Υπηρεσιών Neta Nails
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E1518] mt-2">
            Επιλέξτε την περιποίησή σας
          </h2>
          <p className="text-sm sm:text-base text-[#6C565E] mt-3">
            Απόλυτη διαφάνεια στις τιμές, premium υλικά και εξειδικευμένη φροντίδα για τα άκρα και το βλέμμα σας.
          </p>
        </FadeIn>

        {/* Featured Service Spotlight Banner with nails1.jpg */}
        <FadeIn delay={0.1}>
          <div className="mb-12 bg-gradient-to-r from-[#FAF0F3] via-white to-[#FAF0F3] rounded-3xl p-6 sm:p-7 border border-[#F2D8DE] shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="w-full md:w-52 h-44 md:h-44 rounded-2xl overflow-hidden shrink-0 shadow-sm border-2 border-white">
              <img
                src="/images/netanails/nails1.jpg"
                alt="Neta Nails Signature Manicure & Vinylux Polishes"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#84233C]/10 text-[#84233C] text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Signature Collection • Επώνυμα Βερνίκια CND & Aloha</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1E1518]">
                Εξειδίκευση σε Μανικιούρ, Dipping & Nail Art
              </h3>
              <p className="text-xs sm:text-sm text-[#6C565E] max-w-xl">
                Επιλέξτε ανάμεσα σε δεκάδες pastel, nude και bold αποχρώσεις επώνυμων βερνικιών υψηλής αντοχής με άψογη εφαρμογή και φροντίδα επωνυχίων.
              </p>
            </div>
            <div className="shrink-0">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => onSelectService(salonConfig.services[3])}
                className="px-6 py-3 bg-[#84233C] hover:bg-[#6F1A30] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-md transition-colors cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Κράτηση</span>
              </motion.button>
            </div>
          </div>
        </FadeIn>

        {/* Category Filter Tabs with Sliding Highlight */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "bg-[#FAF0F3] text-[#541223] hover:bg-[#F5D8DF]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="serviceCategoryPill"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 bg-[#84233C] rounded-full shadow-xs -z-0"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Services Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: 8 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  service.popular
                    ? "bg-gradient-to-b from-[#FDF8F9] to-white border-[#F2D8DE] shadow-xs hover:shadow-lg"
                    : "bg-white border-[#F2E5E8] hover:border-[#F2D8DE] hover:shadow-md"
                }`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#84233C] to-[#A33F59] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Popular</span>
                  </div>
                )}

                <div>
                  {/* Title & Duration */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif-luxury text-xl font-bold text-[#1E1518] group-hover:text-[#84233C] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#84233C] font-medium mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#84233C]" />
                    <span>Διάρκεια: {service.duration}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#6C565E] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Price & Booking Button */}
                <div className="pt-4 border-t border-[#F2E5E8] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#84233C] font-medium block">
                      Τιμή
                    </span>
                    <span className="font-serif-luxury text-2xl font-bold text-[#541223]">
                      {service.price}
                    </span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onSelectService(service)}
                    className="px-4 py-2 bg-[#FAF0F3] hover:bg-[#84233C] text-[#541223] hover:text-white text-xs font-semibold rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Κράτηση</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Notice below services */}
        <div className="mt-12 text-center text-xs text-[#4B6555] flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#6E8B79]" />
          <span>Στις τιμές περιλαμβάνεται ΦΠΑ 24%. Χωρίς κρυφές χρεώσεις.</span>
        </div>

      </div>
    </section>
  );
}
