/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { AccommodationsSection } from './components/AccommodationsSection';
import { WeddingsSection } from './components/WeddingsSection';
import { GallerySection } from './components/GallerySection';
import { DestinationGuide } from './components/DestinationGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ArrivalSection } from './components/ArrivalSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DossierModal } from './components/DossierModal';

export default function App() {
  // Booking state
  const [checkIn, setCheckIn] = useState('2025-10-24');
  const [checkOut, setCheckOut] = useState('2025-10-27');
  const [guests, setGuests] = useState('2 Adults');
  const [suiteType, setSuiteType] = useState('All Accommodations');

  // Modal controls
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDossierModalOpen, setIsDossierModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleSelectSuiteForBooking = (suiteName: string) => {
    setSuiteType(suiteName);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a] font-sans selection:bg-[#ffdb9b] selection:text-[#795e2a]">
      {/* Fixed Navigation Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Page Content */}
      <main className="w-full pt-20 bg-[#faf9f6]">
        {/* Atmospheric Hero with Floating Booking Bar */}
        <Hero
          checkIn={checkIn}
          setCheckIn={setCheckIn}
          checkOut={checkOut}
          setCheckOut={setCheckOut}
          guests={guests}
          setGuests={setGuests}
          suiteType={suiteType}
          setSuiteType={setSuiteType}
          onCheckAvailability={handleOpenBooking}
        />

        {/* Section 1: Philosophy - "Quiet by Design" (Image-free architectural craft) */}
        <Philosophy />

        {/* Section 2: Accommodations & Suites with Interactive Filtering */}
        <AccommodationsSection
          onSelectSuiteForBooking={handleSelectSuiteForBooking}
        />

        {/* Section 3: Weddings & Celebrations */}
        <WeddingsSection onOpenDossier={() => setIsDossierModalOpen(true)} />

        {/* Section 4: Retreat Chronicles & Amenities (Image-free narrative) */}
        <GallerySection />

        {/* Section 5: The Spirit of Kelva (Destination Guide) */}
        <DestinationGuide />

        {/* Section 6: Word of Mouth (Guest Reviews & Social Proof) */}
        <ReviewsSection />

        {/* Section 7: Common Questions (Interactive FAQ Accordion) */}
        <FaqSection />

        {/* Section 8: Arrival & Concierge Desk (Google Maps & Driving Routes) */}
        <ArrivalSection />
      </main>

      {/* Persistent Floating WhatsApp Concierge Button */}
      {!isBookingModalOpen && (
        <a
          aria-label="Chat with Sanctuary Concierge on WhatsApp"
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex items-center justify-center w-12 h-12 sm:w-auto sm:h-auto sm:px-4 sm:py-3 rounded-full bg-[#0f1c2e] text-white shadow-[0_12px_32px_rgba(15,28,46,0.3)] hover:bg-[#346364] active:scale-95 transition-all duration-300 group"
          href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20inquire%20about%20a%20sanctuary%20stay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[#ffdea5] text-[22px] group-hover:rotate-12 transition-transform">
            chat
          </span>
          <span className="font-label-caps text-xs uppercase tracking-[0.16em] pr-1 hidden sm:inline-block ml-2">
            Concierge
          </span>
        </a>
      )}

      {/* Booking Modal with Calculated Pricing & WhatsApp integration */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        checkIn={checkIn}
        checkOut={checkOut}
        guests={guests}
        suiteType={suiteType}
      />

      {/* Dossier Modal */}
      <DossierModal
        isOpen={isDossierModalOpen}
        onClose={() => setIsDossierModalOpen(false)}
      />

      {/* Footer with Contact Details & Synchronized Links */}
      <Footer />
    </div>
  );
}
