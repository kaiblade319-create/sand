import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const ResortBuyoutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yGlow = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const yImage = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full overflow-hidden"
      id="estate-buyout"
    >
      <div className="bg-[#0f1c2e] text-white rounded-3xl p-7 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl border border-[#c0c8c8]/20">
        {/* Subtle background glow with Parallax float */}
        <motion.div
          style={{ y: yGlow }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#346364]/25 rounded-full blur-3xl pointer-events-none will-change-transform"
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Description & Value Props */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#ffdea5]"></span>
              <span className="font-label-caps text-xs text-[#ffdea5] uppercase tracking-[0.2em] font-medium">
                100% Private Buyout • Up to 50 Guests
              </span>
            </div>

            <h2 className="font-headline-lg text-2xl sm:text-4xl lg:text-5xl text-white font-serif tracking-tight leading-tight">
              Book the Entire 1-Acre Coastal Estate for Your Private Group
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#f4f3f1]/90 leading-relaxed font-light">
              Celebrate milestone 40th & 50th birthdays, family reunions, intimate pre-wedding celebrations, or executive leadership retreats with zero outside guests. The entire pool, lush lawns, and dedicated staff are exclusively yours.
            </p>

            {/* Inclusions Bento Grid */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                {
                  icon: 'lock',
                  title: '100% Private Lockdown',
                  desc: 'Zero external day visitors or other hotel guests on the property.',
                },
                {
                  icon: 'pool',
                  title: 'Exclusive Pool Access',
                  desc: 'Private poolside sound system, late-night swims, and private cabanas.',
                },
                {
                  icon: 'room_service',
                  title: 'Dedicated Chef & Staff',
                  desc: 'Custom meal schedules, live barbecues, and personalized dining services.',
                },
                {
                  icon: 'celebration',
                  title: 'Custom Event Setup',
                  desc: 'Fairy-light illumination, lawn setups, music, and bonfire evenings.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3, backgroundColor: 'rgba(255,255,255,0.08)' }}
                  transition={{ duration: 0.2 }}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 transition-colors"
                >
                  <span className="material-symbols-outlined text-[#ffdea5] text-[20px] shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-white/70 mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20am%20interested%20in%20a%20Full%20Resort%20Buyout%20for%20a%20private%20group.%20Please%20share%20availability%20and%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#ffdea5] text-[#271900] font-label-caps text-xs uppercase tracking-[0.16em] hover:bg-white transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Inquire About Estate Buyout</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+919923895055"
                className="px-6 py-3.5 rounded-xl bg-white/10 text-white font-label-caps text-xs uppercase tracking-[0.16em] hover:bg-white/20 transition-colors font-medium flex items-center justify-center gap-2 border border-white/20 text-center"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call Estate Manager: +91 99238 95055</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Visual Preview with Parallax Drift */}
          <motion.div
            style={{ y: yImage }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 will-change-transform"
          >
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/5 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury resort estate lit up in the evening for private buyout"
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1c2e] via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0f1c2e]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between text-xs text-[#ffdea5] font-label-caps tracking-widest uppercase mb-1">
                  <span>Capacity</span>
                  <span>Accommodates 20–50 Guests</span>
                </div>
                <div className="text-xs text-white/80">
                  Includes all Suites, Family Rooms, Dorms, Lawns & Pool
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
