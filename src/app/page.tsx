"use client";

import { useState } from "react";
import { ServiceItem } from "@/config/salon.config";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServicesMenu from "@/components/ServicesMenu";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import MobileBookingBar from "@/components/MobileBookingBar";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBFB] text-[#1C1514]">
      {/* Top Announcement Bar */}
      <AnnouncementBar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Header / Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Why Choose Us / Trust Badges */}
        <Features />

        {/* Interactive Services & Price Menu */}
        <ServicesMenu onSelectService={(service) => handleOpenBooking(service)} />

        {/* Lookbook / Gallery Portfolio */}
        <GallerySection />

        {/* Customer Testimonials / Social Proof */}
        <TestimonialsSection />

        {/* Location, Working Hours & Map */}
        <LocationSection />

        {/* FAQ Accordion */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Sticky Mobile Bar (Call & Book) */}
      <MobileBookingBar onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />
    </div>
  );
}
