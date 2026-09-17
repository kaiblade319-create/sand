import React, { useState } from 'react';
import { NAV_LINKS } from '../data';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#f4f3f1] shadow-[0_-1px_12px_rgba(15,28,46,0.02)] pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 border-t border-[#e3e2e0]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-[#e3e2e0]/40">
          {/* Brand & Mission Col */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start gap-2 sm:gap-3">
            <span className="font-headline-sm text-lg sm:text-xl tracking-[0.18em] uppercase text-[#0f1c2e] font-serif">
              BEYOND SANDS RESORT
            </span>
            <span className="font-label-caps text-xs uppercase tracking-[0.2em] text-[#755a26] font-medium">
              A Coastal Sanctuary in Kelva
            </span>
            <p className="font-body-sm text-xs sm:text-sm text-[#404848] max-w-sm mt-1 leading-relaxed">
              Where palms meet the blue hour. Your coastal sanctuary for tranquil escapes and authentic experiences.
            </p>

            {/* Direct Contact Highlights */}
            <div className="mt-3 space-y-1.5 text-xs sm:text-sm text-[#404848]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#346364] text-[18px]">chat</span>
                <span>WhatsApp Us: </span>
                <a
                  href="https://wa.me/919923895055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0f1c2e] hover:text-[#346364] underline"
                >
                  +91 99238 95055
                </a>
              </div>

              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#346364] text-[18px]">mail</span>
                <a
                  href="mailto:beyondsandsresort@gmail.com"
                  className="font-medium text-[#0f1c2e] hover:text-[#346364] underline"
                >
                  beyondsandsresort@gmail.com
                </a>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs text-[#1a1c1a] border border-[#e3e2e0]/60 shadow-xs">
                <span>🌟</span>
                <span className="font-medium">4.8/5 Guest Rating</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs text-[#1a1c1a] border border-[#e3e2e0]/60 shadow-xs">
                <span>🔒</span>
                <span className="font-medium">Secure Booking</span>
              </span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            <h4 className="font-label-caps text-xs uppercase tracking-[0.2em] text-[#1a1c1a] font-semibold mb-2">
              Quick Links
            </h4>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className="font-body-sm text-xs sm:text-sm text-[#404848] hover:text-[#1a1c1a] transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Policies Col */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            <h4 className="font-label-caps text-xs uppercase tracking-[0.2em] text-[#1a1c1a] font-semibold mb-2">
              Policies
            </h4>
            <a
              className="font-body-sm text-xs sm:text-sm text-[#404848] hover:text-[#1a1c1a] transition-colors"
              href="#philosophy"
            >
              Privacy Policy
            </a>
            <a
              className="font-body-sm text-xs sm:text-sm text-[#404848] hover:text-[#1a1c1a] transition-colors"
              href="#philosophy"
            >
              Terms & Conditions
            </a>
            <a
              className="font-body-sm text-xs sm:text-sm text-[#404848] hover:text-[#1a1c1a] transition-colors"
              href="#philosophy"
            >
              Cancellation Policy
            </a>
            <a
              className="font-body-sm text-xs sm:text-sm text-[#404848] hover:text-[#1a1c1a] transition-colors"
              href="#philosophy"
            >
              House Rules
            </a>
          </div>

          {/* Find Us & Social */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col gap-2">
            <h4 className="font-label-caps text-xs uppercase tracking-[0.2em] text-[#1a1c1a] font-semibold mb-2">
              Find Us
            </h4>
            <p className="font-body-sm text-xs sm:text-sm text-[#404848] leading-relaxed">
              Opposite Shitladevi temple Kelve Road<br />
              Kelve, Palghar 401404
            </p>

            {/* Follow Our Journey */}
            <div className="mt-3">
              <span className="font-label-caps text-xs uppercase tracking-[0.16em] text-[#755a26] font-semibold block mb-2">
                Follow Our Journey
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#404848] hover:text-[#0f1c2e] hover:bg-[#efeeeb] transition-colors border border-[#e3e2e0]/40"
                >
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#404848] hover:text-[#0f1c2e] hover:bg-[#efeeeb] transition-colors border border-[#e3e2e0]/40"
                >
                  <span className="text-xs font-bold">FB</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#404848] hover:text-[#0f1c2e] hover:bg-[#efeeeb] transition-colors border border-[#e3e2e0]/40"
                >
                  <span className="text-xs font-bold">YT</span>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <p className="text-xs text-[#707978] mb-1.5">
                Subscribe for private retreat updates & seasonal offers:
              </p>
              {subscribed ? (
                <div className="p-2.5 bg-[#346364]/10 text-[#346364] rounded-lg text-xs font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>Thank you for subscribing!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    className="w-full bg-white text-[#1a1c1a] font-body-sm text-xs px-3 py-2 rounded-lg focus:outline-none placeholder:text-[#707978] border border-[#e3e2e0]/40"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    aria-label="Subscribe"
                    className="bg-[#0f1c2e] text-white px-3.5 py-2 rounded-lg font-label-caps text-xs uppercase hover:bg-[#346364] transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-body-sm text-xs sm:text-sm text-[#404848]">
            © 2026 Beyond Sands Resort. All rights reserved.
          </p>

          <div className="text-xs text-[#404848] flex items-center gap-1">
            <span>Made with</span>
            <span className="text-rose-500">❤️</span>
            <span>for coastal souls</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              className="font-label-caps text-xs uppercase tracking-[0.1em] text-[#404848] hover:text-[#1a1c1a] transition-colors"
              href="#philosophy"
            >
              Privacy
            </a>
            <a
              className="font-label-caps text-xs uppercase tracking-[0.1em] text-[#404848] hover:text-[#1a1c1a] transition-colors"
              href="#arrival"
            >
              Location & Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
