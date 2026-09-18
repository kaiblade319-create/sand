import React from 'react';
import { motion } from 'motion/react';

export const HostConciergeSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="host-concierge"
    >
      {/* Top Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
          Hospitality & Distinction • Resident Host Desk
        </span>
        <h2 className="mt-2 font-headline-lg text-2xl sm:text-4xl text-[#1a1c1a] font-serif uppercase tracking-tight">
          Guided by Personal Hospitality
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm text-[#556060] max-w-xl">
          At Beyond Sands, you are welcomed not as a room number, but as an honored guest by our resident family and dedicated estate staff.
        </p>
      </motion.div>

      {/* Main Two-Column Leadership / Host Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        {/* Left Column: Official Host ID Card */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#e3e2e0]/80 shadow-md flex flex-col justify-between"
        >
          <div>
            {/* Host Avatar Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0f1c2e] text-[#ffdea5] flex items-center justify-center font-serif text-xl font-bold border border-white/20 shadow-xs">
                BS
              </div>
              <div>
                <span className="font-label-caps text-[11px] text-[#755a26] uppercase tracking-wider font-semibold">
                  Resident Estate Host
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl text-[#1a1c1a] font-serif font-bold">
                  The Patil Family & Estate Team
                </h3>
                <p className="text-xs text-[#556060]">Resident Hospitality & Property Management</p>
              </div>
            </div>

            {/* Direct Contact Details */}
            <div className="space-y-3.5 py-5 border-y border-[#e3e2e0]/60 text-xs sm:text-sm text-[#404848]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f4f3f1] text-[#346364] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">phone</span>
                </div>
                <div>
                  <div className="text-[10px] text-[#755a26] uppercase font-label-caps tracking-wider font-semibold">
                    Direct Concierge Line
                  </div>
                  <a
                    href="tel:+919923895055"
                    className="font-medium text-[#0f1c2e] hover:text-[#346364] text-sm transition-colors"
                  >
                    +91 99238 95055
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f4f3f1] text-[#346364] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                </div>
                <div>
                  <div className="text-[10px] text-[#755a26] uppercase font-label-caps tracking-wider font-semibold">
                    Direct Email Inquiries
                  </div>
                  <a
                    href="mailto:beyondsandsresort@gmail.com"
                    className="font-medium text-[#0f1c2e] hover:text-[#346364] text-sm transition-colors"
                  >
                    beyondsandsresort@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#f4f3f1] text-[#346364] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                </div>
                <div>
                  <div className="text-[10px] text-[#755a26] uppercase font-label-caps tracking-wider font-semibold">
                    Estate Location
                  </div>
                  <span className="text-xs text-[#556060]">
                    Kelva Beach Road, Near Shitladevi Temple, Palghar West (PIN 401401)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands%20Host,%20I%20would%20like%20to%20connect%20with%20you%20regarding%20an%20upcoming%20stay"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#0f1c2e] hover:bg-[#346364] text-white font-label-caps text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">chat</span>
              <span>Speak Directly with Resident Host</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Host Philosophy & Estate Bento */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-7 bg-[#faf9f6] rounded-3xl p-6 sm:p-8 border border-[#e3e2e0]/80 shadow-xs flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-serif text-[#755a26] italic mb-3">
              <span className="material-symbols-outlined text-[18px] text-[#346364]">format_quote</span>
              <span>A note from our estate founders</span>
            </div>

            <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[#1a1c1a] leading-relaxed italic">
              "True coastal hospitality is not superficial opulence. It is having a warm glass of kokum Solkadhi waiting as the evening tide rolls in, your family's meals prepared with personal care in pure vessels, and zero outside strangers disturbing your stillness."
            </blockquote>

            {/* Inclusions Bento / Commitments with Staggered Fade Up */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                {
                  icon: 'verified',
                  title: 'Pure Kitchen Separation',
                  desc: 'Dedicated cookware and stoves for 100% strict Jain cooking.',
                },
                {
                  icon: 'schedule',
                  title: 'Flexible Arrival Care',
                  desc: 'Prioritized early check-ins when arriving by morning trains.',
                },
                {
                  icon: 'pets',
                  title: 'Pet-Welcoming Hosts',
                  desc: 'Bowls and open garden room access for your pets.',
                },
                {
                  icon: 'explore',
                  title: 'Curated Local Sightseeing',
                  desc: 'Insider guidance to Kelva Sea Fort, dams, and hidden trails.',
                },
              ].map((bento, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="p-3.5 rounded-xl bg-white border border-[#e3e2e0]/60 shadow-xs hover:border-[#346364]/40 hover:shadow-sm transition-all"
                >
                  <div className="flex items-center gap-2 font-semibold text-xs text-[#0f1c2e] uppercase font-label-caps">
                    <span className="material-symbols-outlined text-[#346364] text-[18px]">
                      {bento.icon}
                    </span>
                    <span>{bento.title}</span>
                  </div>
                  <p className="text-xs text-[#556060] mt-1">{bento.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#e3e2e0]/60 flex items-center justify-between text-xs text-[#755a26] font-label-caps uppercase tracking-wider">
            <span>Beyond Sands Beach Retreat</span>
            <span>Palghar West, Maharashtra</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
