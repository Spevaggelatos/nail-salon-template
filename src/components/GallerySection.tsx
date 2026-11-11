"use client";

import { useState } from "react";
import { salonConfig } from "@/config/salon.config";
import { InstagramIcon } from "./SocialIcons";

export default function GallerySection() {
  const [filter, setFilter] = useState<string>("all");

  const filteredGallery =
    filter === "all"
      ? salonConfig.gallery
      : salonConfig.gallery.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FDFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#84233C] font-bold">
            Instagram Portfolio • {salonConfig.contact.socials.instagramHandle}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E1518] mt-2">
            Δείγματα από τις δουλειές μας
          </h2>
          <p className="text-sm sm:text-base text-[#6C565E] mt-3">
            Ανακαλύψτε τις τελευταίες τάσεις σε ημιμόνιμο, ενισχυμένο dipping, τεχνητά νύχια gel και lash lift στο Neta Nails.
          </p>
        </div>

        {/* Dynamic Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-[#84233C] text-white shadow-xs"
                : "bg-white text-[#541223] border border-[#F2D8DE] hover:bg-[#FAF0F3]"
            }`}
          >
            Όλα
          </button>
          {salonConfig.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === cat.id
                  ? "bg-[#84233C] text-white shadow-xs"
                  : "bg-white text-[#541223] border border-[#F2D8DE] hover:bg-[#FAF0F3]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid with real Instagram photos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden aspect-square shadow-xs hover:shadow-xl transition-all duration-500 bg-gray-100"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase tracking-widest text-[#F5D8DF] font-semibold">
                  {salonConfig.categories.find((c) => c.id === item.category)?.name || item.category}
                </span>
                <h4 className="font-serif-luxury text-lg sm:text-xl font-bold">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Follow CTA */}
        <div className="mt-12 text-center">
          <a
            href={salonConfig.contact.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border border-[#F2D8DE] text-[#541223] hover:bg-[#FAF0F3] text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md"
          >
            <InstagramIcon className="w-4 h-4 text-[#84233C]" />
            <span>
              Ακολουθήστε μας στο Instagram ({salonConfig.contact.socials.instagramHandle})
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
