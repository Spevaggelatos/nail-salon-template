"use client";

import { salonConfig } from "@/config/salon.config";
import { MapPin, Clock, Phone, Navigation, Mail } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

export default function LocationSection() {
  return (
    <section id="location" className="py-16 sm:py-24 bg-[#FBF6F5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#A66D64] font-bold">
            Επισκεφθείτε Μας στον Χολαργό
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1C1514] mt-2">
            Τοποθεσία & Ωράριο Λειτουργίας
          </h2>
          <p className="text-sm sm:text-base text-[#6B5C59] mt-3">
            Σας περιμένουμε στη Λεωφόρο Περικλέους 56 στον Χολαργό σε έναν φωτεινό και άνετο χώρο με εύκολη πρόσβαση.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card: Left (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#F3E9E6] shadow-xs flex flex-col justify-between space-y-6">
            {/* Address */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A66D64]">
                <MapPin className="w-4 h-4" />
                <span>Διεύθυνση</span>
              </div>
              <div>
                <p className="font-serif-luxury text-2xl font-bold text-[#1C1514]">
                  {salonConfig.contact.address.street}
                </p>
                <p className="text-sm text-[#6B5C59] mt-0.5">
                  {salonConfig.contact.address.area}
                </p>
                <p className="text-xs text-[#8C554C] font-medium mt-0.5">
                  {salonConfig.contact.address.city}, Τ.Κ. {salonConfig.contact.address.postalCode}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <a
                  href={salonConfig.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#F7EDEA] hover:bg-[#EFDDD8] text-[#603C37] rounded-full text-xs font-semibold transition-colors border border-[#EFDDD8]"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#A66D64]" />
                  <span>Οδηγίες στο Google Maps</span>
                </a>
              </div>
            </div>

            {/* Hours Table */}
            <div className="space-y-3 pt-4 border-t border-[#F3E9E6]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#A66D64]">
                <Clock className="w-4 h-4" />
                <span>Ωράριο Λειτουργίας</span>
              </div>
              <div className="space-y-2 text-sm">
                {salonConfig.openingHours.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-1 border-b border-gray-50 text-xs sm:text-sm"
                  >
                    <span className="font-medium text-[#1C1514]">{h.days}</span>
                    <span
                      className={`font-semibold ${
                        h.hours === "Κλειστά" ? "text-rose-500" : "text-[#603C37]"
                      }`}
                    >
                      {h.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Channels */}
            <div className="pt-4 border-t border-[#F3E9E6] space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#6B5C59]">
                <Mail className="w-3.5 h-3.5 text-[#A66D64]" />
                <span>{salonConfig.contact.email}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${salonConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#A66D64] hover:bg-[#8C554C] text-white rounded-2xl text-xs font-semibold transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>{salonConfig.contact.phone}</span>
                </a>

                <a
                  href={salonConfig.contact.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-[#EFDDD8] hover:bg-[#F7EDEA] text-[#603C37] rounded-2xl text-xs font-semibold transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4 text-[#A66D64]" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Embed: Right (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#F3E9E6] shadow-xs min-h-[380px] lg:min-h-full relative bg-gray-100">
            <iframe
              src={salonConfig.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Neta Nails Cholargos Location Map"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
