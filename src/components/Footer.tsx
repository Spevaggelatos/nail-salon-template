"use client";

import { salonConfig } from "@/config/salon.config";
import { Heart } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#181114] text-[#D8CECC] pt-16 pb-24 sm:pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white p-0.5 overflow-hidden flex items-center justify-center shadow-xs">
                <img
                  src={salonConfig.business.logoUrl}
                  alt={`${salonConfig.business.name} Logo`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="font-serif-luxury text-3xl font-semibold text-white tracking-wide">
                {salonConfig.business.name}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 max-w-sm leading-relaxed">
              {salonConfig.business.subtitle}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={salonConfig.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#84233C] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={salonConfig.contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-stone-800 hover:bg-[#84233C] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Πλοήγηση
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Υπηρεσίες & Τιμές
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Γιατί Neta Nails
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Instagram Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Κριτικές Πελατών
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Ωράριο & Τοποθεσία
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Συχνές Ερωτήσεις
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold">
              Επικοινωνία
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-400">
              <p>📍 {salonConfig.contact.address.street} ({salonConfig.contact.address.area})</p>
              <p>🏙️ {salonConfig.contact.address.city} {salonConfig.contact.address.postalCode}</p>
              <p>📞 {salonConfig.contact.phone}</p>
              <p>📸 Instagram: {salonConfig.contact.socials.instagramHandle}</p>
              <p>✉️ {salonConfig.contact.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4 text-center sm:text-left">
          <p>
            © {salonConfig.business.name}. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <p className="flex items-center gap-1 justify-center">
            Σχεδιασμένο με <Heart className="w-3.5 h-3.5 text-[#84233C] fill-[#84233C]" /> για σύγχρονα beauty lounges.
          </p>
        </div>
      </div>
    </footer>
  );
}
