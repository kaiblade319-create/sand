import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

interface WeddingsSectionProps {
  onOpenDossier: () => void;
}

export const WeddingsSection: React.FC<WeddingsSectionProps> = ({
  onOpenDossier,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yWeddingBg = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scaleWeddingBg = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#0f1c2e] text-white overflow-hidden"
      id="weddings"
    >
      {/* Background Image with Smooth Parallax Float */}
      <motion.div
        style={{ y: yWeddingBg, scale: scaleWeddingBg }}
        className="absolute -inset-x-0 -top-20 -bottom-20 w-full h-[130%] opacity-30 bg-cover bg-center pointer-events-none will-change-transform"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDVPS_XtV4I-QDIWAUEWt0Zpo02YZwLD0RYtxAPO-dkHe-8zo5y8uQgG2KhzRqB7DAWqHYi5DtVYBKtFzp6rog71kxifNONnu5HXZo55ROV0qPh_oP1P3v1755_waAFU063_DFJ5Qrp7R7TpMGlEt-Vq6K4dkOeWUJG4POxSijCyBBZo5DUyUX2dtZUlQXPFubwYDcXDjs0IF1Va_xnkkulyU9nodA1ZSF1YVr6lQ4mlyIoDBiQjoGY')`,
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c2e] via-[#0f1c2e]/95 lg:via-[#0f1c2e]/90 to-[#0f1c2e]/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <span className="font-label-caps text-xs text-[#ffdea5] tracking-[0.24em] uppercase font-semibold">
              Weddings & Celebrations
            </span>
            <h2 className="mt-3 font-display-lg text-2xl sm:text-4xl lg:text-5xl tracking-tight leading-tight font-serif text-white">
              Say “I Do” by the Sea
            </h2>
            <p className="mt-4 font-body-lg text-sm sm:text-base lg:text-lg text-[#e3e2e0] max-w-2xl font-light leading-relaxed">
              Exchange vows where the Arabian tide murmurs against candlelit
              sandstone pavilions. Beyond Sands offers full property buyouts,
              hosting intimate nuptials, milestone anniversaries, and discreet
              family gatherings in complete seclusion.
            </p>

            {/* 4 Curated Offerings */}
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10"
            >
              {[
                {
                  icon: 'wb_twilight',
                  title: 'Beachfront Lawn Ceremonies',
                  desc: 'Open ocean horizon backdrops set against soft coastal sands.',
                },
                {
                  icon: 'restaurant_menu',
                  title: 'Artisanal Pure-Veg & Jain Banquets',
                  desc: 'Exquisite multi-course sattvic and regional Maharashtrian delicacies.',
                },
                {
                  icon: 'key',
                  title: 'Secluded 20-Key Buyout',
                  desc: 'Exclusive sovereignty over all rooms, pool, and grounds for up to 80 guests.',
                },
                {
                  icon: 'design_services',
                  title: 'Bespoke Event Curator',
                  desc: 'Dedicated styling, lighting masters, and sound designers on-call.',
                },
              ].map((offering, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-colors"
                >
                  <span className="material-symbols-outlined text-[#ffdea5] text-[24px] shrink-0">
                    {offering.icon}
                  </span>
                  <div>
                    <h4 className="font-label-md text-sm uppercase tracking-wider text-white font-medium">
                      {offering.title}
                    </h4>
                    <p className="mt-1 font-body-sm text-xs sm:text-sm text-[#dbdad7]">
                      {offering.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8 sm:mt-10">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3.5 rounded-lg bg-[#ffdea5] text-[#271900] font-label-caps text-[11px] sm:text-xs uppercase tracking-[0.18em] font-semibold hover:bg-[#e5c283] transition-colors shadow-lg text-center"
                href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20inquire%20about%20a%20wedding%20or%20celebration%20buyout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Plan Your Celebration
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenDossier}
                className="px-6 sm:px-8 py-3.5 rounded-lg bg-transparent text-white font-label-caps text-[11px] sm:text-xs uppercase tracking-[0.18em] hover:bg-white/10 transition-colors border border-white/20 text-center cursor-pointer"
                type="button"
              >
                Download Wedding Dossier
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visual Stat Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6 w-full"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-label-caps text-xs text-[#ffdea5] uppercase tracking-widest">
                  Sanctuary Capacity
                </span>
                <span className="font-headline-sm text-xl sm:text-2xl text-white font-serif">
                  200 Guests
                </span>
              </div>
              <p className="font-body-sm text-xs sm:text-sm text-[#e3e2e0] leading-relaxed">
                From intimate vow renewals of 20 close companions to expansive
                coastal soirees with private beachfront access.
              </p>
              <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-2 gap-4">
                <div>
                  <span className="font-headline-md text-3xl text-white font-serif">
                    20
                  </span>
                  <p className="font-body-sm text-xs sm:text-sm text-[#dbdad7]">
                    Suites & Verandahs
                  </p>
                </div>
                <div>
                  <span className="font-headline-md text-3xl text-white font-serif">
                    100m
                  </span>
                  <p className="font-body-sm text-xs sm:text-sm text-[#dbdad7]">
                    Direct Tide Access
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
