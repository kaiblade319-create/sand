import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Pillar {
  id: string;
  number: string;
  navTitle: string;
  navSubtitle: string;
  category: string;
  badge: string;
  headline: string;
  description: string;
  bullets: string[];
  image: string;
  ctaText: string;
  ctaLink: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'pool',
    number: '01',
    navTitle: 'FILTERED SWIMMING POOL',
    navSubtitle: 'Aquatic Solitude & Evening Twilight Swims',
    category: 'AQUATIC SANCTUARY',
    badge: '100% Filtered • Pure Seclusion',
    headline: 'Crystal-Clear Pool with Private Cabanas',
    description:
      'Immaculately maintained filtered pool with submerged tanning loungers, shaded teak daybeds, and warm evening illumination for sunset swims under coconut palms. Reserved exclusively for in-house residents.',
    bullets: [
      'Submerged tanning ledge & shallow relaxation zone',
      'Teakwood daybeds with fresh plush towels',
      'Poolside mocktails, tender coconut & sundowner tea',
      'Warm underwater night lighting for evening dips',
    ],
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Inquire About Poolside Rooms',
    ctaLink:
      'https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20know%20more%20about%20Poolside%20Rooms%20and%20Cabanas',
  },
  {
    id: 'beach',
    number: '02',
    navTitle: '200M KELVA BEACH WALK',
    navSubtitle: 'Direct Canopy Trail to Golden Sands',
    category: 'COASTAL PROXIMITY',
    badge: '2-Minute Walk • Zero Highway Crossings',
    headline: 'Whispering Suru Pines to the Arabian Shore',
    description:
      'Step out of your private villa directly into a peaceful canopy trail of Suru pine and coconut trees that leads straight to the wide golden sand and gentle Arabian Sea waves.',
    bullets: [
      'No vehicles or highway crossings required',
      'Uncrowded beach stretch ideal for peaceful morning walks',
      'Spectacular uninterrupted golden hour sunsets',
      'Fresh sea breeze filtered naturally through pine groves',
    ],
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Plan Beach Getaway on WhatsApp',
    ctaLink:
      'https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20am%20planning%20a%20beach%20trip%20to%20Kelva',
  },
  {
    id: 'dining',
    number: '03',
    navTitle: 'COASTAL THALIS & JAIN KITCHEN',
    navSubtitle: 'Fresh Surmai & Dedicated Pure Veg Vessels',
    category: 'GASTRONOMY',
    badge: 'Separate Cookware • Fresh Catch Daily',
    headline: 'Authentic Maharashtrian & Dedicated Jain Meals',
    description:
      'Indulge in authentic regional flavors cooked fresh to order. We maintain dedicated separate cookware for strict Jain and pure-vegetarian preparations, alongside coastal fresh catch specialties.',
    bullets: [
      'Crispy Surmai Rava fry, Pomfret curry & fresh Solkadhi',
      '100% strict Jain cooking without onion, garlic, or root veggies',
      'Traditional Pithla Bhakri with freshly ground thecha',
      'Live evening charcoal barbecue and poolside snacks',
    ],
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZAxuanRWujZaNlr7aAXrgTb2KwnsRkMjKR3Zw8IoeJVAyB9AbvSj-hMFutBw0FJZ3vlb1i7YSdiuPr2mbRdXcSxFnuIhtUIrpXzxx8ib5rNBvQNiMfvVpGTo0vLGH7XlWqpY1ygK-WXEsU6yibFltry7CRVBeQYcU-Le7DsZquys8EmS-MmqBmrr3bCBt7uF3pS7OWnSjhRJxwISNPPe90HqxdLlCEGiBzEocKZEKPOSFEK9_PQey',
    ctaText: 'Request Dining Menu via WhatsApp',
    ctaLink:
      'https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20please%20share%20your%20dining%20and%20thali%20menu',
  },
  {
    id: 'estate',
    number: '04',
    navTitle: '1-ACRE COCONUT GROVE & LAWNS',
    navSubtitle: 'Gated Private Grounds & Open Skies',
    category: 'ESTATE SERENITY',
    badge: '100% Private • Up to 50 Guests',
    headline: 'Expansive Manicured Lawns & Native Palms',
    description:
      'Towering native coconut palms create a natural cooling microclimate that filters out heat. Enjoy lush manicured lawns for morning yoga, evening badminton, or unhurried chai under open skies.',
    bullets: [
      'Over 100+ mature coconut and fruit-bearing trees',
      'Private manicured lawn for stargazing and celebrations',
      'Pet-friendly grounds with enclosed secure boundaries',
      'High-speed WiFi across the lawn for workations',
    ],
    image:
      'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1200&auto=format&fit=crop',
    ctaText: 'Inquire About Estate Buyout',
    ctaLink:
      'https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20am%20interested%20in%20a%20full%20estate%20buyout',
  },
];

export const PillarsSwitcher: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activePillar = PILLARS[activeIdx];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="signature-pillars"
    >
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4 border-b border-[#e3e2e0]/60 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
              The Coastal Architecture • Signature Experience
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#1a1c1a] font-serif uppercase tracking-tight">
            The 4 Sanctuary Pillars
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#556060] max-w-md font-light">
          Engineered for stillness, privacy, and authentic regional nourishment — every pillar is designed for effortless rejuvenation.
        </p>
      </div>

      {/* Main Two-Column Switcher Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: 4 Vertical Interactive Tabs */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {PILLARS.map((pillar, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.button
                key={pillar.id}
                onClick={() => setActiveIdx(idx)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group relative overflow-hidden ${
                  isActive
                    ? 'bg-white border-[#346364] shadow-md ring-1 ring-[#346364]/20'
                    : 'bg-[#faf9f6] border-[#e3e2e0]/70 hover:bg-white hover:border-[#346364]/40'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePillarTabGlow"
                    className="absolute inset-0 bg-gradient-to-r from-[#346364]/5 to-transparent pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}

                <div className="flex items-start gap-4 relative z-10">
                  {/* Number Badge */}
                  <span
                    className={`font-serif text-lg sm:text-xl font-bold transition-colors ${
                      isActive ? 'text-[#346364]' : 'text-[#755a26]/60 group-hover:text-[#755a26]'
                    }`}
                  >
                    {pillar.number}
                  </span>

                  <div>
                    <h3
                      className={`text-sm sm:text-base font-semibold tracking-wide uppercase transition-colors ${
                        isActive ? 'text-[#0f1c2e]' : 'text-[#404848] group-hover:text-[#1a1c1a]'
                      }`}
                    >
                      {pillar.navTitle}
                    </h3>
                    <p className="text-xs text-[#556060] mt-0.5 font-light">
                      {pillar.navSubtitle}
                    </p>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all relative z-10 ${
                    isActive
                      ? 'bg-[#346364] text-white rotate-0'
                      : 'bg-transparent text-[#755a26]/40 group-hover:translate-x-1'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Presentation Card with AnimatePresence */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#e3e2e0]/80 shadow-md min-h-[520px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* Card Meta Bar */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#e3e2e0]/50 mb-5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#0f1c2e] text-[#ffdea5] font-label-caps text-[10px] tracking-wider uppercase font-semibold">
                    PILLAR {activePillar.number}
                  </span>
                  <span className="text-xs font-semibold text-[#346364] uppercase tracking-wider font-label-caps">
                    {activePillar.category}
                  </span>
                </div>

                <span className="text-xs font-serif text-[#755a26] font-medium">
                  {activePillar.badge}
                </span>
              </div>

              {/* Large Image Preview with Counter Badge */}
              <div className="aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden bg-[#efeeeb] relative mb-6 shadow-sm group">
                <img
                  src={activePillar.image}
                  alt={activePillar.headline}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-3 left-4 text-white text-xs font-label-caps tracking-widest uppercase">
                  {activePillar.category}
                </div>

                <div className="absolute bottom-3 right-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-serif font-semibold">
                  {activePillar.number} / 04
                </div>
              </div>

              {/* Headline & Description */}
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c1a] font-serif font-semibold">
                {activePillar.headline}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#404848] leading-relaxed">
                {activePillar.description}
              </p>

              {/* Bullets */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activePillar.bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-2 text-xs text-[#556060]"
                  >
                    <span className="material-symbols-outlined text-[#346364] text-[16px] shrink-0">
                      check_circle
                    </span>
                    <span>{bullet}</span>
                  </motion.div>
                ))}
              </div>

              {/* Card Bottom Action Bar */}
              <div className="mt-7 pt-5 border-t border-[#e3e2e0]/60 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={activePillar.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#0f1c2e] hover:bg-[#346364] text-white font-label-caps text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
                >
                  <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">chat</span>
                  <span>{activePillar.ctaText}</span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#accommodations-section"
                  className="px-5 py-3 rounded-xl bg-[#f4f3f1] hover:bg-[#e3e2e0] text-[#1a1c1a] font-label-caps text-xs uppercase tracking-wider font-medium transition-colors text-center"
                >
                  View Room Tariffs
                </motion.a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};
