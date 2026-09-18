import React, { useState } from 'react';
import { motion } from 'motion/react';
import { NAV_LINKS } from '../data';
import { Logo } from './Logo';

interface FooterProps {
  onNavigateToAbout?: () => void;
  onNavigateToHome?: () => void;
  currentView?: 'home' | 'about';
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToAbout,
  onNavigateToHome,
  currentView = 'home',
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, href: string, label: string) => {
    if (label === 'Our Story' || href === '#about') {
      e.preventDefault();
      if (onNavigateToAbout) {
        onNavigateToAbout();
      }
      return;
    }

    if (label === 'Home' || href === '#') {
      e.preventDefault();
      if (onNavigateToHome) {
        onNavigateToHome();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView === 'about' && onNavigateToHome) {
      e.preventDefault();
      onNavigateToHome();
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full bg-[#0b1523] text-white pt-16 sm:pt-20 pb-12 border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Branding & Insignia Header (Exact pattern from video 00:29) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-white/10 gap-6">
          <div className="flex items-center gap-4">
            <button
              onClick={(e) => handleLinkClick(e, '#', 'Home')}
              className="text-left cursor-pointer hover:opacity-90 transition-opacity"
              type="button"
              aria-label="Beyond Sands Home"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 text-[#ffdea5]">
                  <span className="material-symbols-outlined text-[24px]">waves</span>
                </div>
                <div>
                  <span className="font-serif text-xl sm:text-2xl text-white tracking-wider uppercase font-medium block">
                    BEYOND SANDS
                  </span>
                  <span className="text-[10px] text-[#ffdea5] uppercase font-label-caps tracking-[0.24em] block">
                    Beach Retreat • Kelva Shore
                  </span>
                </div>
              </div>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/70 font-label-caps uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span>Direct Booking Available</span>
            </span>
            <span>•</span>
            <span>19°42'N, 72°43'E</span>
            <span>•</span>
            <span>Palghar West, MH</span>
          </div>
        </div>

        {/* Multi-Column Grid (Exact layout from video 00:29) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 py-12 border-b border-white/10">
          {/* Col 1: About & Contact (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="font-label-caps text-xs uppercase tracking-[0.2em] text-[#ffdea5] font-semibold">
              Boutique Coastal Sanctuary
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
              Where whispering palms meet the blue hour. A secluded 1-acre coastal retreat offering private pool cabanas, dedicated pure veg & Jain culinary care, and pristine beach serenity just 90 minutes from Mumbai.
            </p>

            <div className="space-y-2 mt-2 text-xs text-white/90">
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">call</span>
                <span>Concierge: </span>
                <a href="tel:+919923895055" className="text-white hover:text-[#ffdea5] font-medium underline">
                  +91 99238 95055
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">chat</span>
                <span>WhatsApp: </span>
                <a
                  href="https://wa.me/919923895055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#ffdea5] font-medium underline"
                >
                  Instant Messaging Desk
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">mail</span>
                <a href="mailto:beyondsandsresort@gmail.com" className="text-white hover:text-[#ffdea5] font-medium underline">
                  beyondsandsresort@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Accommodations & Rates (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <h4 className="font-label-caps text-xs uppercase tracking-[0.2em] text-[#ffdea5] font-semibold mb-1">
              Accommodations
            </h4>
            <a href="#accommodations-section" className="text-xs text-white/80 hover:text-white transition-colors">
              Garden View Suites
            </a>
            <a href="#accommodations-section" className="text-xs text-white/80 hover:text-white transition-colors">
              Poolside Luxury Rooms
            </a>
            <a href="#accommodations-section" className="text-xs text-white/80 hover:text-white transition-colors">
              Family Courtyard Villa
            </a>
            <a href="#accommodations-section" className="text-xs text-white/80 hover:text-white transition-colors">
              Executive Deluxe
            </a>
            <a href="#estate-buyout" className="text-xs text-white/80 hover:text-[#ffdea5] font-semibold transition-colors">
              Full 1-Acre Buyout
            </a>
          </div>

          {/* Col 3: Experiences & Dining (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <h4 className="font-label-caps text-xs uppercase tracking-[0.2em] text-[#ffdea5] font-semibold mb-1">
              Experiences & Dining
            </h4>
            <a href="#signature-pillars" className="text-xs text-white/80 hover:text-white transition-colors">
              Filtered Swimming Pool & Daybeds
            </a>
            <a href="#dining" className="text-xs text-white/80 hover:text-white transition-colors">
              Fresh Catch Seafood & Surmai Fry
            </a>
            <a href="#dining" className="text-xs text-white/80 hover:text-white transition-colors">
              100% Strict Jain & Pure Veg Meals
            </a>
            <a href="#signature-pillars" className="text-xs text-white/80 hover:text-white transition-colors">
              200m Shaded Beach Trail
            </a>
            <a href="#weddings" className="text-xs text-white/80 hover:text-white transition-colors">
              Intimate Weddings & Sundowners
            </a>
          </div>

          {/* Col 4: Arrival & Booking (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-label-caps text-xs uppercase tracking-[0.2em] text-[#ffdea5] font-semibold mb-1">
              Wayfinding & Transit
            </h4>
            <p className="text-xs text-white/80 leading-relaxed">
              90–105 Mins from Borivali via NH48. 10 mins from Kelve Road Western Railway Station.
            </p>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.google.com/?q=Beyond+Sands+Kelva"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-caps text-[11px] uppercase tracking-wider transition-colors border border-white/15 w-fit cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-[#ffdea5]">near_me</span>
              <span>Open Google Maps</span>
            </motion.a>

            {/* Newsletter / Exclusive Deals Form */}
            <form onSubmit={handleSubscribe} className="mt-2">
              <span className="text-[11px] text-white/70 block mb-1.5 font-label-caps uppercase tracking-wider">
                Special Weekend Rates
              </span>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="px-3 py-1.5 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-hidden focus:border-[#ffdea5] flex-1"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-[#ffdea5] text-[#0f1c2e] text-xs font-semibold hover:bg-white transition-colors cursor-pointer"
                >
                  Join
                </motion.button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-[#25D366] mt-1 block">
                  Thank you! We’ll share secret seasonal offers.
                </span>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright & Accreditation (Exact pattern from video 00:29) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Beyond Sands Beach Retreat. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px] font-label-caps uppercase tracking-wider">
            <a href="#faqs" className="hover:text-white transition-colors">
              Stay Policies
            </a>
            <span>•</span>
            <a href="#faqs" className="hover:text-white transition-colors">
              Pet Guidelines
            </a>
            <span>•</span>
            <a href="#arrival" className="hover:text-white transition-colors">
              Contact Concierge
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
