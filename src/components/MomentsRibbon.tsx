import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface MomentPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

const MOMENTS: MomentPhoto[] = [
  {
    id: 'm1',
    title: 'Twilight Pool Glow & Cabana Lounging',
    category: 'Pool Oasis',
    imageUrl:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm2',
    title: 'Authentic Coastal Surmai Rava Fry & Solkadhi',
    category: 'Dining',
    imageUrl:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm3',
    title: 'Whispering Suru Pine Pathway to the Shore',
    category: 'Beach Trail',
    imageUrl:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm4',
    title: 'Sunset over 1-Acre Coconut Palm Groves',
    category: 'Nature',
    imageUrl:
      'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm5',
    title: '100% Strict Jain & Pure Veg Thali Comfort',
    category: 'Purity',
    imageUrl:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm6',
    title: 'Poolside Sundowners & Charcoal Barbecue',
    category: 'Evenings',
    imageUrl:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
  },
];

export const MomentsRibbon: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<MomentPhoto | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="moments-archive"
    >
      {/* Top Banner & Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#755a26]"></span>
            <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
              Photographic Archive • Daily Rhythms
            </span>
          </div>
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#1a1c1a] font-serif uppercase tracking-tight">
            Moments of Life at Beyond Sands
          </h2>
        </div>

        {/* View Full Archive Button */}
        <motion.a
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          href="#gallery"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f1c2e] hover:bg-[#346364] text-white font-label-caps text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs"
        >
          <span className="material-symbols-outlined text-[16px] text-[#ffdea5]">collections</span>
          <span>Full Photographic Archive</span>
        </motion.a>
      </div>

      {/* Ribbon Photo Strip / Showcase with Staggered Motion */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {MOMENTS.map((item) => (
          <motion.div
            key={item.id}
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            onClick={() => setSelectedPhoto(item)}
            className="group relative rounded-2xl overflow-hidden bg-[#efeeeb] aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-[#e3e2e0]/70"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity"></div>

            {/* Category Pill */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white font-label-caps text-[10px] tracking-wider uppercase font-semibold">
              {item.category}
            </div>

            {/* Bottom Caption & View Icon */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
              <h3 className="text-white font-serif text-sm sm:text-base font-medium leading-snug drop-shadow-xs">
                {item.title}
              </h3>
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shrink-0 group-hover:bg-[#ffdea5] group-hover:text-[#0f1c2e] transition-colors">
                <span className="material-symbols-outlined text-[16px]">visibility</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            key="moments-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-[#0f1c2e] rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                type="button"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>

              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[#ffdea5] font-label-caps text-xs uppercase tracking-widest">
                    {selectedPhoto.category}
                  </span>
                  <h3 className="text-white font-serif text-lg sm:text-xl font-medium mt-0.5">
                    {selectedPhoto.title}
                  </h3>
                </div>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20inquire%20about%20a%20stay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#ffdea5] text-[#0f1c2e] font-label-caps text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors shrink-0"
                >
                  Inquire Stay
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};
