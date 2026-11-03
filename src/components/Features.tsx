"use client";

import { salonConfig } from "@/config/salon.config";
import { ShieldCheck, Sparkles, Award, HeartHandshake } from "lucide-react";

const iconMap = {
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles,
  Award: Award,
  HeartHandshake: HeartHandshake,
};

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-[#FBFCFA] via-[#F0F9FA]/60 to-[#FBFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#3B8E97] font-bold">
            Η Φιλοσοφία Μας
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#162021] mt-2">
            Γιατί να επιλέξετε το ELLO BEAUTY
          </h2>
          <p className="text-sm sm:text-base text-[#5E6D70] mt-3">
            Στο {salonConfig.business.name}, συνδυάζουμε κορυφαία τεχνογνωσία, επώνυμα υλικά και απόλυτη υγιεινή σε ένα ζεστό, χαλαρωτικό περιβάλλον.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {salonConfig.features.map((feat, index) => {
            const Icon = iconMap[feat.icon as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-[#E6F3F4] shadow-xs hover:shadow-md hover:border-[#BEE6EA] transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#DCF2F4] text-[#3B8E97] flex items-center justify-center mb-5 group-hover:bg-[#3B8E97] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#162021] mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5E6D70] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
