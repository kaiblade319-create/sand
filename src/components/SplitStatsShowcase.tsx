import React from 'react';
import { motion } from 'motion/react';

interface SplitStatsShowcaseProps {
  onOpenBooking?: () => void;
}

export const SplitStatsShowcase: React.FC<SplitStatsShowcaseProps> = ({ onOpenBooking }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="stats-showcase"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Framed Visual (Terracotta / Deep Navy Border) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-6"
        >
          <div className="relative p-3 sm:p-4 rounded-3xl bg-[#755a26]/10 border border-[#755a26]/20 shadow-md">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                alt="Beyond Sands Beach Retreat at twilight with illuminated pool"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Float Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0f1c2e]/90 text-white font-label-caps text-[10px] tracking-wider uppercase backdrop-blur-sm border border-white/20 shadow-sm">
                Kelva Coastline • 19°42'N, 72°43'E
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[#ffdea5] text-[11px] font-label-caps tracking-widest uppercase block mb-1">
                  Private Coastal Estate
                </span>
                <p className="text-sm font-serif text-white/95">
                  Lush coconut canopies, evening maritime breeze, and poolside tranquility.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: High-Impact Typography & Big Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col justify-center"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#755a26]"></span>
            <span className="font-label-caps text-xs text-[#755a26] tracking-[0.22em] uppercase font-semibold">
              Palghar District's Premier Coastal Sanctuary
            </span>
          </div>

          <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-5xl text-[#1a1c1a] font-serif uppercase tracking-tight leading-[1.12]">
            Mumbai’s Closest Private Beach Retreat
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#404848] leading-relaxed font-light">
            Skip the agonizing 6-hour highway jams to Alibaug or Lonavala. Beyond Sands offers an unhurried, private coastal haven just 90 minutes from Borivali along the smooth Western Express Highway and NH48 corridor.
          </p>

          {/* Scannable Big Stats Grid with Staggered Fade Up */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6 border-y border-[#e3e2e0]/70"
          >
            {[
              { num: '90', unit: 'm', label: 'Drive from WEH / Borivali' },
              { num: '200', unit: 'm', label: 'Walk to Kelva Beach' },
              { num: '100', unit: '%', label: 'Private Gated Estate' },
              { num: '4.8', unit: '★', label: 'Guest Satisfaction' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45 } },
                }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="p-2 rounded-xl hover:bg-[#f4f3f1]/60 transition-colors"
              >
                <div className="font-serif text-3xl sm:text-4xl text-[#0f1c2e] font-bold tracking-tight">
                  {stat.num}
                  <span className="text-[#755a26] text-2xl sm:text-3xl font-light">{stat.unit}</span>
                </div>
                <div className="font-label-caps text-[10px] sm:text-[11px] text-[#556060] uppercase tracking-wider mt-1 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBooking}
              type="button"
              className="px-6 py-3.5 rounded-xl bg-[#0f1c2e] text-white hover:bg-[#346364] font-label-caps text-xs uppercase tracking-wider font-semibold transition-colors shadow-md text-center cursor-pointer"
            >
              Check Availability & Rates
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20know%20more%20about%20weekend%20stay%20availability"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] font-label-caps text-xs uppercase tracking-wider font-semibold transition-colors shadow-md flex items-center justify-center gap-2 text-center"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp Concierge</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
