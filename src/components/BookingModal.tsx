"use client";

import { useState, useEffect } from "react";
import { salonConfig, ServiceItem } from "@/config/salon.config";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  MessageSquare,
  Check,
  Sparkles,
  Mail,
} from "lucide-react";
import { InstagramIcon } from "./SocialIcons";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: ServiceItem | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialService,
}: BookingModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService?.id || salonConfig.services[3].id
  );
  const [date, setDate] = useState<string>("2026-11-12");
  const [timeSlot, setTimeSlot] = useState<string>("11:00");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Sync if initialService changes
  useEffect(() => {
    if (initialService) {
      setSelectedServiceId(initialService.id);
    }
  }, [initialService]);

  useEffect(() => {
    try {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
      const dd = String(tomorrow.getDate()).padStart(2, "0");
      setDate(`${yyyy}-${mm}-${dd}`);
    } catch {
      // Fallback
    }
  }, []);

  if (!isOpen) return null;

  const currentService =
    salonConfig.services.find((s) => s.id === selectedServiceId) ||
    salonConfig.services[0];

  const timeSlots = [
    "10:00",
    "11:00",
    "12:00",
    "13:30",
    "15:00",
    "16:30",
    "18:00",
    "19:00",
  ];

  // Format email request for Neta Nails
  const handleEmailBooking = () => {
    if (!name || !phone) {
      alert("Παρακαλούμε συμπληρώστε το όνομα και το τηλέφωνό σας.");
      return;
    }

    const subject = encodeURIComponent(
      `Αίτημα Ραντεβού: ${currentService.name} - ${name}`
    );
    const body = encodeURIComponent(
      `Γεια σας Neta Nails,\n\nΘα ήθελα να κλείσω ραντεβού με τα εξής στοιχεία:\n\n` +
        `• Όνομα: ${name}\n` +
        `• Τηλέφωνο: ${phone}\n` +
        `• Υπηρεσία: ${currentService.name} (${currentService.price})\n` +
        `• Επιθυμητή Ημερομηνία: ${date}\n` +
        `• Επιθυμητή Ώρα: ${timeSlot}\n` +
        `• Σημειώσεις: ${notes || "Καμία"}\n\n` +
        `Ευχαριστώ πολύ!`
    );

    window.location.href = `mailto:${salonConfig.contact.email}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Παρακαλούμε συμπληρώστε το όνομα και το τηλέφωνό σας.");
      return;
    }
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#EFDDD8] overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#603C37] via-[#8C554C] to-[#A66D64] text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Κράτηση Ραντεβού • Χολαργός</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white p-0.5 overflow-hidden flex items-center justify-center">
              <img
                src={salonConfig.business.logoUrl}
                alt="Logo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
              {salonConfig.business.name}
            </h3>
          </div>
          <p className="text-xs text-[#F7EDEA] mt-1.5">
            Λ. Περικλέους 56, Χολαργός • Τηλ: {salonConfig.contact.phone}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {isSubmitted ? (
            /* Success confirmation screen */
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="font-serif-luxury text-2xl font-bold text-[#1C1514]">
                Το αίτημά σας καταχωρήθηκε!
              </h4>
              <p className="text-sm text-[#6B5C59] max-w-md mx-auto">
                Ευχαριστούμε,{" "}
                <span className="font-semibold text-[#1C1514]">{name}</span>!
                Λάβαμε το αίτημά σας για{" "}
                <span className="font-semibold text-[#A66D64]">
                  {currentService.name}
                </span>{" "}
                στις <span className="font-semibold text-[#1C1514]">{date}</span>{" "}
                και ώρα{" "}
                <span className="font-semibold text-[#1C1514]">{timeSlot}</span>.
              </p>
              <div className="bg-[#FBF6F5] p-4 rounded-2xl text-xs text-[#603C37] text-left max-w-md mx-auto border border-[#EFDDD8] space-y-1.5">
                <p className="font-semibold">📞 Επόμενο Βήμα:</p>
                <p>
                  Η ομάδα του <b>Neta Nails</b> θα επικοινωνήσει μαζί σας στο{" "}
                  <b>{phone}</b> για την επιβεβαίωση της ώρας σας.
                  Για άμεση εξυπηρέτηση καλέστε στο{" "}
                  <b>{salonConfig.contact.phone}</b>.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${salonConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="px-6 py-2.5 bg-[#F7EDEA] text-[#603C37] text-xs font-semibold rounded-full hover:bg-[#EFDDD8] transition-colors flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#A66D64]" />
                  <span>Κλήση: {salonConfig.contact.phone}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#A66D64] text-white text-xs font-semibold rounded-full hover:bg-[#8C554C] transition-colors cursor-pointer"
                >
                  Επιστροφή στη Σελίδα
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleDirectSubmit} className="space-y-4">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A66D64] mb-1.5">
                  1. Επιλογή Υπηρεσίας *
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#F3E9E6] focus:border-[#A66D64] focus:ring-1 focus:ring-[#A66D64] text-base sm:text-sm text-[#1C1514] bg-[#FDFBFB]"
                >
                  {salonConfig.services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} ({s.duration} - {s.price})
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-[#8C554C] mt-1 italic">
                  {currentService.description}
                </p>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A66D64] mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>2. Ημερομηνία *</span>
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-xl border border-[#F3E9E6] focus:border-[#A66D64] focus:ring-1 focus:ring-[#A66D64] text-base sm:text-sm text-[#1C1514] bg-[#FDFBFB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A66D64] mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>3. Επιθυμητή Ώρα *</span>
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#F3E9E6] focus:border-[#A66D64] focus:ring-1 focus:ring-[#A66D64] text-base sm:text-sm text-[#1C1514] bg-[#FDFBFB]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A66D64] mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>Ονοματεπώνυμο *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="π.χ. Μαρία Παπαδοπούλου"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#F3E9E6] focus:border-[#A66D64] focus:ring-1 focus:ring-[#A66D64] text-base sm:text-sm text-[#1C1514] bg-[#FDFBFB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#A66D64] mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Τηλέφωνο Επικοινωνίας *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="π.χ. 6981234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#F3E9E6] focus:border-[#A66D64] focus:ring-1 focus:ring-[#A66D64] text-base sm:text-sm text-[#1C1514] bg-[#FDFBFB]"
                  />
                </div>
              </div>

              {/* Notes / Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#A66D64] mb-1.5 flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Σημειώσεις (Προαιρετικό)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="π.χ. Επιθυμώ και αφαίρεση ημιμόνιμου ή nail art σχέδιο"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-[#F3E9E6] focus:border-[#A66D64] focus:ring-1 focus:ring-[#A66D64] text-base sm:text-sm text-[#1C1514] bg-[#FDFBFB] resize-none"
                />
              </div>

              {/* Submission Options */}
              <div className="pt-2 space-y-2.5">
                {/* 1. Primary Web Booking Request */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 bg-gradient-to-r from-[#A66D64] to-[#BF8379] hover:from-[#8C554C] hover:to-[#A66D64] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Αποστολή Αιτήματος Κράτησης</span>
                </button>

                {/* 2. Secondary Quick Channels: Call, Email, Instagram */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <a
                    href={`tel:${salonConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="py-2.5 px-3 bg-[#F7EDEA] hover:bg-[#EFDDD8] text-[#603C37] font-semibold text-[11px] rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A66D64]" />
                    <span>Κλήση</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleEmailBooking}
                    className="py-2.5 px-3 bg-[#FBF8F0] hover:bg-[#EDDBA6]/50 text-[#8A6823] font-semibold text-[11px] rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </button>

                  <a
                    href={salonConfig.contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 bg-stone-100 hover:bg-stone-200 text-[#1C1514] font-semibold text-[11px] rounded-xl transition-all flex items-center justify-center gap-1.5"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#A66D64]" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

              <p className="text-[10px] text-center text-[#6B5C59]">
                📍 Λ. Περικλέους 56, Χολαργός (Δευτέρα & Κυριακή Κλειστά)
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
