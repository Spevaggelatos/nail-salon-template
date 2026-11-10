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
    <section id="features" className="py-16 sm:py-20 bg-gradient-to-b from-[#FDFBFB] via-[#FBF6F5]/80 to-[#FDFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#A66D64] font-bold">
            Η Εμπειρία Neta Nails
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1514] mt-2">
            Γιατί οι γυναίκες επιλέγουν το Neta Nails
          </h2>
          <p className="text-sm sm:text-base text-[#6B5C59] mt-3">
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
                className="bg-white rounded-3xl p-7 border border-[#F3E9E6] shadow-xs hover:shadow-md hover:border-[#EFDDD8] transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#F7EDEA] text-[#A66D64] flex items-center justify-center mb-5 group-hover:bg-[#A66D64] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif-luxury text-xl font-bold text-[#1C1514] mb-2.5">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B5C59] leading-relaxed">
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
