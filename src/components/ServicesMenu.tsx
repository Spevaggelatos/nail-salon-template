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
          <span className="text-xs uppercase tracking-widest text-[#A66D64] font-bold">
            Τιμοκατάλογος Υπηρεσιών Neta Nails
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1514] mt-2">
            Επιλέξτε την περιποίησή σας
          </h2>
          <p className="text-sm sm:text-base text-[#6B5C59] mt-3">
            Απόλυτη διαφάνεια στις τιμές, premium υλικά και εξειδικευμένη φροντίδα για τα άκρα και το βλέμμα σας.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#A66D64] text-white shadow-sm"
                : "bg-[#F7EDEA] text-[#603C37] hover:bg-[#EFDDD8]"
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
                  ? "bg-[#A66D64] text-white shadow-sm"
                  : "bg-[#F7EDEA] text-[#603C37] hover:bg-[#EFDDD8]"
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
                  ? "bg-gradient-to-b from-[#FBF6F5] to-white border-[#EFDDD8] shadow-xs hover:shadow-md"
                  : "bg-white border-[#F3E9E6] hover:border-[#EFDDD8] hover:shadow-xs"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#A66D64] to-[#BF8379] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Popular</span>
                </div>
              )}

              <div>
                {/* Title & Duration */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1C1514] group-hover:text-[#A66D64] transition-colors">
                    {service.name}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[#8C554C] font-medium mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#A66D64]" />
                  <span>Διάρκεια: {service.duration}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#6B5C59] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Price & Booking Button */}
              <div className="pt-4 border-t border-[#F3E9E6] flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C554C] font-medium block">
                    Τιμή
                  </span>
                  <span className="font-serif-luxury text-2xl font-bold text-[#603C37]">
                    {service.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(service)}
                  className="px-4 py-2 bg-[#F7EDEA] hover:bg-[#A66D64] text-[#603C37] hover:text-white text-xs font-semibold rounded-full transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Κράτηση</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notice below services */}
        <div className="mt-12 text-center text-xs text-[#8C554C] flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#A66D64]" />
          <span>Στις τιμές περιλαμβάνεται ΦΠΑ 24%. Χωρίς κρυφές χρεώσεις.</span>
        </div>

      </div>
    </section>
  );
}
