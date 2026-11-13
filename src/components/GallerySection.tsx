"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { salonConfig, GalleryItem } from "@/config/salon.config";
import { InstagramIcon } from "./SocialIcons";
import { FadeIn } from "./MotionPrimitives";

export default function GallerySection() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredGallery =
    filter === "all"
      ? salonConfig.gallery
      : salonConfig.gallery.filter((item) => item.category === filter);

  const filterTabs = [
    { id: "all", label: "Όλα" },
    ...salonConfig.categories.map((cat) => ({ id: cat.id, label: cat.name })),
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FDFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#84233C] font-bold">
            Instagram Portfolio • {salonConfig.contact.socials.instagramHandle}
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1E1518] mt-2">
            Δείγματα από τις δουλειές μας
          </h2>
          <p className="text-sm sm:text-base text-[#6C565E] mt-3">
            Ανακαλύψτε τις τελευταίες τάσεις σε ημιμόνιμο, ενισχυμένο dipping, τεχνητά νύχια gel και lash lift στο Neta Nails.
          </p>
        </FadeIn>

        {/* Dynamic Filter buttons with smooth active pill */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {filterTabs.map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? "text-white"
                    : "bg-white text-[#541223] border border-[#F2D8DE] hover:bg-[#FAF0F3]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="galleryFilterPill"
                    transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    className="absolute inset-0 bg-[#84233C] rounded-full shadow-xs"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid with real photos & interactive lightbox */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.button
                layout
                type="button"
                key={item.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative rounded-3xl overflow-hidden aspect-square shadow-xs hover:shadow-xl transition-shadow duration-500 bg-gray-100 text-left cursor-pointer"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-xs text-[#541223] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <Expand className="w-3.5 h-3.5" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#F5D8DF] font-semibold">
                    {salonConfig.categories.find((c) => c.id === item.category)?.name || item.category}
                  </span>
                  <h4 className="font-serif-luxury text-lg sm:text-xl font-bold">
                    {item.title}
                  </h4>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram Follow CTA */}
        <div className="mt-12 text-center">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href={salonConfig.contact.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white border border-[#F2D8DE] text-[#541223] hover:bg-[#FAF0F3] text-xs sm:text-sm font-semibold transition-colors shadow-xs hover:shadow-md"
          >
            <InstagramIcon className="w-4 h-4 text-[#84233C]" />
            <span>
              Ακολουθήστε μας στο Instagram ({salonConfig.contact.socials.instagramHandle})
            </span>
          </motion.a>
        </div>
      </div>

      {/* Interactive Lightbox Preview */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#F2D8DE]"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                aria-label="Κλείσιμο προεπισκόπησης"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="aspect-square sm:aspect-[4/3] bg-gray-100">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-5 sm:p-6 flex items-center justify-between gap-4 bg-white">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#84233C] font-semibold">
                    {salonConfig.categories.find((c) => c.id === selectedPhoto.category)?.name ||
                      selectedPhoto.category}
                  </span>
                  <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1518]">
                    {selectedPhoto.title}
                  </h4>
                </div>
                <a
                  href="#services"
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 bg-[#84233C] hover:bg-[#6F1A30] text-white text-xs font-semibold rounded-full transition-colors shrink-0"
                >
                  Δείτε Υπηρεσίες
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
