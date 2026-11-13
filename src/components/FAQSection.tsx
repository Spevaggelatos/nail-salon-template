"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { salonConfig } from "@/config/salon.config";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FadeIn } from "./MotionPrimitives";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FAF0F3] text-[#541223] text-xs font-semibold mb-3 border border-[#F2D8DE]">
            <HelpCircle className="w-3.5 h-3.5 text-[#84233C]" />
            <span>Συχνές Απορίες</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E1518]">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-sm text-[#6C565E] mt-2">
            Όλα όσα θέλετε να γνωρίζετε πριν από την επίσκεψή σας στο Neta Nails.
          </p>
        </FadeIn>

        {/* Accordion */}
        <div className="space-y-4">
          {salonConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn
                key={index}
                delay={index * 0.06}
                className="border border-[#F2E5E8] rounded-2xl overflow-hidden transition-colors duration-200 hover:border-[#F2D8DE]"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-[#FDFBFB] hover:bg-[#FDF7F8] transition-colors cursor-pointer"
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-bold text-[#1E1518]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#84233C] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden bg-[#FDFBFB]"
                    >
                      <div className="p-5 sm:p-6 pt-3 text-sm text-[#6C565E] leading-relaxed border-t border-[#F2E5E8]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
