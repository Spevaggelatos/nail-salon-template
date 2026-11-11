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
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-[#FDFBFB] via-[#FDF7F8] to-[#FDFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#84233C] font-bold">
            Η Εμπειρία Neta Nails
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E1518] mt-2">
            Γιατί οι γυναίκες επιλέγουν το Neta Nails
          </h2>
          <p className="text-sm sm:text-base text-[#6C565E] mt-3">
            Στο {salonConfig.business.name}, συνδυάζουμε κορυφαία υλικά, ταχύτητα και απόλυτη υγιεινή σε έναν ζεστό, μοντέρνο χώρο στον Χολαργό.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {salonConfig.features.map((feat, index) => {
            const Icon = iconMap[feat.icon as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-7 border border-[#F2E5E8] shadow-xs hover:shadow-md hover:border-[#F2D8DE] transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF0F3] text-[#84233C] flex items-center justify-center mb-5 group-hover:bg-[#84233C] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#1E1518] mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6C565E] leading-relaxed">
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
