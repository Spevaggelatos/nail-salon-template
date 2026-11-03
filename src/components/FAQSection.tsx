"use client";

import { useState } from "react";
import { salonConfig } from "@/config/salon.config";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DCF2F4] text-[#244B50] text-xs font-semibold mb-3 border border-[#BEE6EA]">
            <HelpCircle className="w-3.5 h-3.5 text-[#3B8E97]" />
            <span>Συχνές Απορίες</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#162021]">
            Συχνές Ερωτήσεις
          </h2>
          <p className="text-sm text-[#5E6D70] mt-2">
            Όλα όσα θέλετε να γνωρίζετε πριν από την επίσκεψή σας στο ELLO BEAUTY.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {salonConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E6F3F4] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-[#FBFCFA] hover:bg-[#F0F9FA] transition-colors cursor-pointer"
                >
                  <span className="font-serif-luxury text-lg sm:text-xl font-bold text-[#162021]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3B8E97] transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 bg-[#FBFCFA] text-sm text-[#5E6D70] leading-relaxed border-t border-[#E6F3F4]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
