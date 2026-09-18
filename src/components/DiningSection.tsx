import React from 'react';
import { motion } from 'motion/react';

export const DiningSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="dining"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
          Coastal Gastronomy
        </span>
        <h2 className="mt-2 font-headline-lg text-2xl sm:text-4xl md:text-5xl text-[#1a1c1a] tracking-tight font-serif">
          Coastal Flavors, Fresh Catch & Pure Veg / Jain Delights
        </h2>
        <p className="mt-3 font-body-md text-sm sm:text-base text-[#404848] leading-relaxed max-w-2xl font-light">
          From fiery coastal Surmai thalis and refreshing pink Solkadhi to 100% strict Jain preparations made in dedicated vessels — every meal is cooked fresh to your family's exact taste.
        </p>
      </motion.div>

      {/* Culinary Highlights Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
      >
        {/* Card 1: Fresh Coastal Catch & Thalis */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e3e2e0]/60 shadow-sm hover:shadow-xl transition-shadow flex flex-col group"
        >
          <div className="aspect-[16/10] overflow-hidden bg-[#efeeeb] relative">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
              alt="Freshly prepared coastal seafood and thali delicacies"
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0f1c2e] text-white font-label-caps text-[10px] tracking-wider uppercase font-semibold">
              Fresh Daily Catch
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-headline-sm text-lg sm:text-xl text-[#1a1c1a] font-serif font-medium">
                Authentic Coastal Thalis & Seafood
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#404848] leading-relaxed">
                Crispy Surmai Rava Fry, tender Pomfret curries, Prawns Sukka, and chilled Solkadhi made with pure coconut milk and fresh kokum.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[#556060]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Sourced directly from local Kelva coastal fishermen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Traditional hand-ground spices & coconut gravies</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Steamed Indrayani rice & hot coastal chapati</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e3e2e0]/40 flex items-center justify-between text-xs text-[#755a26] font-semibold font-label-caps uppercase">
              <span>Seafood Specialties</span>
              <span>Upon Prior Request</span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: 100% Dedicated Pure Veg & Jain Kitchen */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e3e2e0]/60 shadow-sm hover:shadow-xl transition-shadow flex flex-col group"
        >
          <div className="aspect-[16/10] overflow-hidden bg-[#efeeeb] relative">
            <img
              src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop"
              alt="Rich vegetarian thali with paneer and dal"
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#346364] text-white font-label-caps text-[10px] tracking-wider uppercase font-semibold">
              Strictly Separate Kitchen
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-headline-sm text-lg sm:text-xl text-[#1a1c1a] font-serif font-medium">
                100% Pure Veg & Jain Comfort Food
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#404848] leading-relaxed">
                Prepared with dedicated separate utensils and pure ingredients. Strict Jain options cooked without onion, garlic, or root vegetables.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[#556060]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Traditional Maharashtrian Pithla Bhakri & Thecha</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Authentic Gujarati and Marwari home-style dishes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Fresh seasonal sweets & hot Ukadiche Modak</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e3e2e0]/40 flex items-center justify-between text-xs text-[#755a26] font-semibold font-label-caps uppercase">
              <span>Pure Veg & Jain Friendly</span>
              <span>Zero Cross-Contamination</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Poolside Sundowners & Barbecue */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-[#e3e2e0]/60 shadow-sm hover:shadow-xl transition-shadow flex flex-col group"
        >
          <div className="aspect-[16/10] overflow-hidden bg-[#efeeeb] relative">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop"
              alt="Poolside barbecue skewers and evening dining"
              className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#755a26] text-white font-label-caps text-[10px] tracking-wider uppercase font-semibold">
              Evening Ambience
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-headline-sm text-lg sm:text-xl text-[#1a1c1a] font-serif font-medium">
                Poolside Sundowners & Live Barbecue
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#404848] leading-relaxed">
                As the sun sets over the palm grove, relax by the illuminated pool with fresh grilled skewers, tenders coconuts, and music under fairy lights.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-[#556060]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Live charcoal barbecue (Veg Paneer & Seafood options)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Fresh coconut water picked straight from our palm trees</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Evening cutting chai & hot pakodas by the water</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[#e3e2e0]/40 flex items-center justify-between text-xs text-[#755a26] font-semibold font-label-caps uppercase">
              <span>Sundowner Sessions</span>
              <span>5:30 PM Onwards</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Dining Concierge WhatsApp CTA */}
      <motion.div
        whileHover={{ y: -3, transition: { duration: 0.25 } }}
        className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f4f3f1] border border-[#e3e2e0]/70 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0f1c2e] text-[#ffdea5] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[24px]">restaurant_menu</span>
          </div>
          <div>
            <h4 className="font-headline-sm text-base sm:text-lg text-[#1a1c1a] font-serif font-semibold">
              Special Food Preferences or Group Dining?
            </h4>
            <p className="text-xs sm:text-sm text-[#556060] mt-0.5">
              Let our head chef know your meal preferences (Jain, Swaminarayan, Fresh Catch, or Birthday Cakes) prior to arrival.
            </p>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20can%20you%20share%20the%20dining%20menu%20and%20meal%20options?"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-[#0f1c2e] text-white font-label-caps text-xs uppercase tracking-wider hover:bg-[#346364] transition-colors flex items-center gap-2 font-medium shrink-0 shadow-sm"
        >
          <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">chat</span>
          <span>Request Menu on WhatsApp</span>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};
