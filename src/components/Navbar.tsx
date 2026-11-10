"use client";

import { useState, useEffect } from "react";
import { salonConfig } from "@/config/salon.config";
import { Phone, Calendar, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Υπηρεσίες & Τιμές", href: "#services" },
    { label: "Γιατί Neta Nails", href: "#features" },
    { label: "Lookbook", href: "#gallery" },
    { label: "Κριτικές", href: "#testimonials" },
    { label: "Ωράριο & Τοποθεσία", href: "#location" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#F3E9E6]"
          : "bg-[#FDFBFB]/90 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#EFDDD8] shadow-xs flex items-center justify-center p-0.5 overflow-hidden group-hover:border-[#A66D64] transition-colors">
              <img
                src={salonConfig.business.logoUrl}
                alt={`${salonConfig.business.name} Logo`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-semibold tracking-wide text-[#603C37] group-hover:text-[#A66D64] transition-colors leading-tight">
                {salonConfig.business.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#8C554C] font-semibold -mt-0.5">
                {salonConfig.business.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#5C4F4C] hover:text-[#A66D64] transition-colors tracking-wide relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#A66D64] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Call & Book Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${salonConfig.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#603C37] hover:bg-[#F7EDEA] rounded-full transition-all border border-[#EFDDD8]"
            >
              <Phone className="w-3.5 h-3.5 text-[#A66D64]" />
              <span>{salonConfig.contact.phone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#A66D64] via-[#BF8379] to-[#A66D64] hover:from-[#8C554C] hover:to-[#A66D64] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Κλείσε Ραντεβού</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3 py-1.5 bg-[#A66D64] text-white text-[11px] font-semibold rounded-full shadow-xs"
            >
              Ραντεβού
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#603C37] hover:bg-[#F7EDEA] rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-[#F3E9E6] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-medium text-[#5C4F4C] hover:text-[#A66D64] border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${salonConfig.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#603C37] bg-[#F7EDEA] border border-[#EFDDD8] rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#A66D64]" />
              <span>Κάλεσε: {salonConfig.contact.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#A66D64] text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Κλείσε Online Ραντεβού</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
