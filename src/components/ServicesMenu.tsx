"use client";

import { useState } from "react";
import { salonConfig, ServiceItem } from "@/config/salon.config";
import { Clock, Sparkles, CheckCircle2, Calendar } from "lucide-react";

interface ServicesMenuProps {
  onSelectService: (service: ServiceItem) => void;
}

export default function ServicesMenu({ onSelectService }: ServicesMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices =
    activeCategory === "all"
      ? salonConfig.services
      : salonConfig.services.filter((s) => s.categoryId === activeCategory);

  return (
    <section id="services" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#3B8E97] font-bold">
            Τιμοκατάλογος ELLO BEAUTY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#162021] mt-2">
            Επιλέξτε την υπηρεσία σας
          </h2>
          <p className="text-sm sm:text-base text-[#5E6D70] mt-3">
            Απόλυτη διαφάνεια στις τιμές, κορυφαία επώνυμα υλικά (Neonail & Schrammek) και άψογη εξυπηρέτηση.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#3B8E97] text-white shadow-sm"
                : "bg-[#F0F9FA] text-[#244B50] hover:bg-[#DCF2F4]"
            }`}
          >
            Όλες οι Υπηρεσίες ({salonConfig.services.length})
          </button>
          
          {salonConfig.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#3B8E97] text-white shadow-sm"
                : "bg-[#F0F9FA] text-[#244B50] hover:bg-[#DCF2F4]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group ${
                service.popular
                  ? "bg-gradient-to-b from-[#F0F9FA] to-white border-[#BEE6EA] shadow-xs hover:shadow-md"
                  : "bg-white border-[#E6F3F4] hover:border-[#BEE6EA] hover:shadow-xs"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#3B8E97] to-[#48A3AD] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Popular</span>
                </div>
              )}

              <div>
                {/* Title & Duration */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#162021] group-hover:text-[#3B8E97] transition-colors">
                    {service.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#3B8E97] font-medium mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Διάρκεια: {service.duration}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#5E6D70] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Price & Booking Button */}
              <div className="pt-4 border-t border-[#E6F3F4] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#3B8E97] font-medium block">
                    Τιμή
                  </span>
                  <span className="font-serif-luxury text-2xl font-bold text-[#244B50]">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="px-4 py-2 bg-[#DCF2F4] hover:bg-[#3B8E97] text-[#244B50] hover:text-white text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Κράτηση</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notice below services */}
        <div className="mt-12 text-center text-xs text-[#3B8E97] flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#3B8E97]" />
          <span>Στις τιμές περιλαμβάνεται ΦΠΑ. Δεν υπάρχουν κρυφές χρεώσεις.</span>
        </div>

      </div>
    </section>
  );
}
