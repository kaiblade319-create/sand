/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValuesFourGrid } from './components/ValuesFourGrid';
import { SplitStatsShowcase } from './components/SplitStatsShowcase';
import { PillarsSwitcher } from './components/PillarsSwitcher';
import { HostConciergeSection } from './components/HostConciergeSection';
import { AccommodationsSection } from './components/AccommodationsSection';
import { DiningSection } from './components/DiningSection';
import { ResortBuyoutSection } from './components/ResortBuyoutSection';
import { WeddingsSection } from './components/WeddingsSection';
import { GallerySection } from './components/GallerySection';
import { DestinationGuide } from './components/DestinationGuide';
import { ArrivalSection } from './components/ArrivalSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { DossierModal } from './components/DossierModal';
import { AboutPage } from './components/AboutPage';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  // Page view state: 'home' | 'about'
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

  // Booking state
  const [checkIn, setCheckIn] = useState('2025-10-24');
  const [checkOut, setCheckOut] = useState('2025-10-27');
  const [guests, setGuests] = useState('2 Adults');
  const [suiteType, setSuiteType] = useState('All Accommodations');

  // Modal controls
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isDossierModalOpen, setIsDossierModalOpen] = useState(false);

  // Synchronize hash routing with view state
  useEffect(() => {
    const handleHashSync = () => {
      if (window.location.hash === '#about') {
        setCurrentView('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        window.location.hash === '' ||
        window.location.hash === '#' ||
        window.location.hash === '#home'
      ) {
        setCurrentView('home');
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
  };

  const handleSelectSuiteForBooking = (suiteName: string) => {
    setSuiteType(suiteName);
    setIsBookingModalOpen(true);
  };

  const handleNavigateToAbout = () => {
    setCurrentView('about');
    window.history.pushState(null, '', '#about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToHome = () => {
    setCurrentView('home');
    window.history.pushState(null, '', '#');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a] font-sans selection:bg-[#ffdb9b] selection:text-[#795e2a]">
      {/* Fixed Navigation Header */}
      <Header
        onOpenBooking={handleOpenBooking}
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToHome={handleNavigateToHome}
        currentView={currentView}
      />

      {/* Main Content Router */}
      {currentView === 'about' ? (
        <AboutPage
          onBackToHome={handleNavigateToHome}
          onOpenBooking={handleOpenBooking}
        />
      ) : (
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

          {/* Section 1: "WE VALUE" 4-Pillar Grid (Inspired by Reference Video 00:01) */}
          <ValuesFourGrid />

          {/* Section 2: Split Stats & Highlight Showcase (Inspired by Reference Video 00:02-00:03) */}
          <SplitStatsShowcase onOpenBooking={handleOpenBooking} />

          {/* Section 3: Interactive 4-Pillar Tabbed Switcher (Inspired by Reference Video 00:05-00:08) */}
          <PillarsSwitcher />

          {/* Section 4: Accommodations & Suites with Fast Filtering & Pricing */}
          <AccommodationsSection
            onSelectSuiteForBooking={handleSelectSuiteForBooking}
          />

          {/* Section 5: Coastal Dining, Fresh Catch & Pure Veg / Jain Kitchen */}
          <DiningSection />

          {/* Section 6: Entire 1-Acre Resort Buyout (Up to 50 Guests) */}
          <ResortBuyoutSection />

          {/* Section 7: Resident Host & Personal Hospitality Desk (Inspired by Reference Video 00:09-00:10) */}
          <HostConciergeSection />

          {/* Section 8: Photographic Moments of Life & Sanctuary Gallery */}
          <GallerySection />

          {/* Section 9: Weddings, Sangeet & Celebrations */}
          <WeddingsSection onOpenDossier={() => setIsDossierModalOpen(true)} />

          {/* Section 11: Arrival at Kelva Shore (90 Mins Drive from WEH / Borivali) */}
          <ArrivalSection />

          {/* Section 12: Word of Mouth (Verified Guest Reviews & Social Proof) */}
          <ReviewsSection />

          {/* Section 13: The Spirit of Kelva (Destination Guide) */}
          <DestinationGuide />

          {/* Section 14: Common Questions (Side-by-Side FAQ & Helpdesk - Inspired by Video 00:23-00:27) */}
          <FaqSection />
        </main>
      )}

      {/* Persistent Floating WhatsApp Concierge Button (Desktop & Tablet) */}
      {!isBookingModalOpen && (
        <a
          aria-label="Chat with Sanctuary Concierge on WhatsApp"
          className="hidden sm:flex fixed bottom-6 right-6 z-40 items-center justify-center px-4 py-3 rounded-full bg-[#0f1c2e] text-white shadow-[0_12px_32px_rgba(15,28,46,0.3)] hover:bg-[#346364] active:scale-95 transition-all duration-300 group"
          href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20inquire%20about%20a%20sanctuary%20stay"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[#ffdea5] text-[22px] group-hover:rotate-12 transition-transform">
            chat
          </span>
          <span className="font-label-caps text-xs uppercase tracking-[0.16em] pr-1 ml-2">
            Concierge
          </span>
        </a>
      )}

      {/* Sticky Mobile Booking & WhatsApp Bar (Mobile Only) */}
      {!isBookingModalOpen && (
        <StickyMobileBar onOpenBooking={handleOpenBooking} />
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
      <Footer
        onNavigateToAbout={handleNavigateToAbout}
        onNavigateToHome={handleNavigateToHome}
        currentView={currentView}
      />
    </div>
  );
}
