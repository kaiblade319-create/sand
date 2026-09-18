import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';

interface ExperienceHighlight {
  time: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
}

const DAILY_RHYTHM: ExperienceHighlight[] = [
  {
    time: '06:30 AM',
    title: 'Dawn Tide & Suru Forest Stroll',
    badge: 'Morning Stillness',
    description:
      'Step out into crisp maritime morning air. A shaded 5-minute pathway through whispering Suru pines brings you to Kelva’s wide, tranquil shores at low tide.',
    icon: 'wb_twilight',
  },
  {
    time: '09:00 AM',
    title: 'Coastal Verandah Breakfast',
    badge: 'Nourishment',
    description:
      'Enjoy freshly prepared, home-style pure-vegetarian & Jain breakfast specialties with hot masala chai, served amidst open garden breezes.',
    icon: 'bakery_dining',
  },
  {
    time: '02:00 PM',
    title: 'Poolside Solitude & Shaded Repose',
    badge: 'Afternoon Ease',
    description:
      'Escape midday heat in our shimmering retreat pool, or read quietly on your private verandah beneath the gentle rustle of coconut fronds.',
    icon: 'pool',
  },
  {
    time: '06:15 PM',
    title: 'The Blue Hour & Arabian Sunset',
    badge: 'Coastal Magic',
    description:
      'As evening arrives, the sky turns indigo and amber. Hear the rhythmic sea surf and distant chimes of the historic Shitladevi temple.',
    icon: 'flare',
  },
  {
    time: '08:30 PM',
    title: 'Starlit Courtyard Gatherings',
    badge: 'Night Serenity',
    description:
      'Evenings under starry Palghar skies. Unwind with loved ones over wholesome dinners, acoustic quiet, and warm coastal hospitality.',
    icon: 'nights_stay',
  },
];

const RESORT_PRIVILEGES = [
  {
    icon: 'water_drop',
    title: 'Shimmering Infinity Pool',
    desc: 'Clean, well-maintained pool with sun deck loungers and dedicated shallow zone.',
  },
  {
    icon: 'restaurant_menu',
    title: '100% Pure Veg & Jain Kitchen',
    desc: 'Freshly prepared coastal & Indian vegetarian cuisine with strict Jain options.',
  },
  {
    icon: 'nature_people',
    title: 'Private Beach Pathway',
    desc: 'Direct 5-minute walking access to pristine, uncrowded Kelva beachfront.',
  },
  {
    icon: 'celebration',
    title: 'Private Event Lawns',
    desc: 'Expansive open-air manicured grounds for intimate weddings, buyouts, and galas.',
  },
  {
    icon: 'local_parking',
    title: 'Secure On-Site Parking',
    desc: 'Gated, hassle-free private parking with round-the-clock resort attendant.',
  },
  {
    icon: 'electric_bolt',
    title: '24/7 Power Backup',
    desc: 'Heavy-duty silent generators ensuring uninterrupted AC and comfort throughout.',
  },
  {
    icon: 'wifi',
    title: 'Retreat High-Speed Wi-Fi',
    desc: 'Seamless wireless coverage for remote work or sharing your holiday memories.',
  },
  {
    icon: 'pets',
    title: 'Pet Friendly Grounds',
    desc: 'Thoughtfully welcoming spaces for your four-legged family members on prior notice.',
  },
];

type CategoryKey = 'all' | 'rooms' | 'dining' | 'amenities' | 'nature' | 'architecture';

interface CategoryTab {
  key: CategoryKey;
  label: string;
}

const CATEGORIES: CategoryTab[] = [
  { key: 'all', label: 'All' },
  { key: 'rooms', label: 'Rooms' },
  { key: 'dining', label: 'Dining & Purity' },
  { key: 'amenities', label: 'Pool & Amenities' },
  { key: 'nature', label: 'Nature & Shore' },
  { key: 'architecture', label: 'Architecture' },
];

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [showRhythmAndAmenities, setShowRhythmAndAmenities] = useState<boolean>(false);

  // Filtered gallery images
  const filteredItems: GalleryItem[] =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Close lightbox on Escape key, navigate with left/right keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') {
        setActiveLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const currentLightboxItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative"
      id="gallery"
    >
      <div id="moments-archive" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
        <div>
          <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
            Photographic Archive • Moments of Life
          </span>
          <h2 className="mt-2 font-headline-lg text-3xl sm:text-4xl text-[#1a1c1a] tracking-tight font-serif">
            Sanctuary Gallery
          </h2>
          <p className="mt-2 font-body-md text-sm sm:text-base text-[#404848] max-w-2xl leading-relaxed">
            Moments of life at Beyond Sands—a curated visual journey capturing coastal tranquility, pool hours, private suites, and authentic culinary care.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#efeeeb] border border-[#e3e2e0]/60 self-start md:self-auto">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            const count =
              cat.key === 'all'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category.toLowerCase() === cat.key).length;

            return (
              <button
                key={cat.key}
                onClick={() => {
                  setSelectedCategory(cat.key);
                  setActiveLightboxIndex(null);
                }}
                className={`px-3.5 py-2 rounded-xl font-label-caps text-xs uppercase tracking-[0.14em] transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#0f1c2e] text-white shadow-sm font-semibold'
                    : 'text-[#404848] hover:text-[#0f1c2e] hover:bg-white/60'
                }`}
                type="button"
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-white/20 text-[#ffdea5]' : 'bg-black/5 text-[#707978]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Photo Grid with Layout Animation */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              whileHover={{ y: -6 }}
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative h-72 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#efeeeb] border border-[#e3e2e0]/60 cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Gradient Overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0f1c2e] font-label-caps text-[10px] uppercase tracking-wider font-semibold shadow-xs">
                  {item.subtitle || item.category}
                </span>
              </div>

              {/* Top Right Expand Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <span className="material-symbols-outlined text-[18px]">fullscreen</span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-white transform transition-transform duration-300">
                <h3 className="font-headline-sm text-base sm:text-lg font-serif font-semibold text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-1 text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-label-caps uppercase tracking-wider text-[#ffdea5]">
                  <span>Click to view full photo</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {currentLightboxItem && activeLightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-white"
            onClick={() => setActiveLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Photo Lightbox"
          >
            {/* Top Bar: Title, Counter & Close */}
            <div
              className="flex items-center justify-between z-20 max-w-7xl mx-auto w-full pt-1 sm:pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/15 text-[#ffdea5] font-label-caps text-xs uppercase tracking-wider font-semibold">
                  {currentLightboxItem.subtitle || currentLightboxItem.category}
                </span>
                <span className="font-label-caps text-xs text-white/70">
                  Image {activeLightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close photo gallery"
              >
                <span className="material-symbols-outlined text-[24px]">close</span>
              </motion.button>
            </div>

            {/* Center Image Container with Prev/Next Navigation */}
            <div
              className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-3 sm:my-4 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
                aria-label="Previous image"
              >
                <span className="material-symbols-outlined text-[26px]">arrow_back</span>
              </motion.button>

              {/* Main Lightbox Image */}
              <motion.div
                key={currentLightboxItem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="max-h-[68vh] sm:max-h-[72vh] max-w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl"
              >
                <img
                  src={currentLightboxItem.image}
                  alt={currentLightboxItem.alt}
                  className="max-h-[68vh] sm:max-h-[72vh] max-w-full object-contain rounded-xl"
                />
              </motion.div>

              {/* Next Button */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer backdrop-blur-xs"
                aria-label="Next image"
              >
                <span className="material-symbols-outlined text-[26px]">arrow_forward</span>
              </motion.button>
            </div>

            {/* Bottom Bar: Title, Description & Thumbnails */}
            <div
              className="max-w-4xl mx-auto w-full text-center z-20 pb-2"
              onClick={(e) => e.stopPropagation()}
            >
              <h4 className="font-serif text-lg sm:text-xl font-medium text-white">
                {currentLightboxItem.title}
              </h4>
              {currentLightboxItem.description && (
                <p className="mt-1 text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
                  {currentLightboxItem.description}
                </p>
              )}

              {/* Thumbnail Strip */}
              <div className="mt-3 flex items-center justify-center gap-1.5 overflow-x-auto py-1 max-w-md mx-auto">
                {filteredItems.map((thumb, idx) => (
                  <button
                    key={thumb.id}
                    onClick={() => setActiveLightboxIndex(idx)}
                    className={`relative w-11 h-8 rounded-md overflow-hidden border transition-all cursor-pointer flex-shrink-0 ${
                      activeLightboxIndex === idx
                        ? 'border-[#ffdea5] scale-105 shadow-md ring-2 ring-[#ffdea5]/40'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                    aria-label={`Thumbnail ${idx + 1}`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Complementary Sanctuary Rhythm & Amenities Drawer */}
      <div className="mt-12 pt-8 border-t border-[#e3e2e0]/60">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[#faf9f6] border border-[#e3e2e0]/60"
        >
          <div>
            <span className="font-label-caps text-xs text-[#755a26] tracking-wider uppercase font-semibold">
              Retreat Chronicles & Privileges
            </span>
            <h4 className="font-headline-sm text-lg sm:text-xl font-serif text-[#1a1c1a] font-semibold mt-0.5">
              Daily Coastal Routine & Resort Amenities
            </h4>
            <p className="text-xs sm:text-sm text-[#556060] mt-1 max-w-xl">
              Discover our peaceful daily rhythm along the Kelva shore and the key privileges included
              with every stay.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowRhythmAndAmenities(!showRhythmAndAmenities)}
            className="px-4 py-2.5 rounded-xl bg-[#0f1c2e] hover:bg-[#346364] text-white font-label-caps text-xs uppercase tracking-[0.14em] font-medium transition-colors flex items-center justify-center gap-2 self-start sm:self-auto cursor-pointer"
          >
            <span>
              {showRhythmAndAmenities ? 'Hide Details' : 'Explore Routine & Amenities'}
            </span>
            <span className="material-symbols-outlined text-[18px]">
              {showRhythmAndAmenities ? 'expand_less' : 'expand_more'}
            </span>
          </motion.button>
        </motion.div>

        {/* Collapsible Routine & Amenities Content */}
        <AnimatePresence>
          {showRhythmAndAmenities && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-6 space-y-8 pt-2">
                {/* Daily Rhythm Timeline */}
                <div>
                  <div className="mb-4">
                    <span className="font-label-caps text-xs text-[#755a26] tracking-[0.2em] uppercase font-semibold">
                      A Day at Beyond Sands
                    </span>
                    <h5 className="font-serif text-lg text-[#1a1c1a] font-semibold">
                      Daily Coastal Rhythm
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {DAILY_RHYTHM.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl p-5 border border-[#e3e2e0]/60 shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="px-2.5 py-0.5 rounded-full bg-[#efeeeb] text-[#0f1c2e] font-label-caps text-[11px] font-semibold">
                              {item.time}
                            </span>
                            <span className="w-8 h-8 rounded-lg bg-[#f4f3f1] text-[#346364] flex items-center justify-center">
                              <span className="material-symbols-outlined text-[18px]">
                                {item.icon}
                              </span>
                            </span>
                          </div>
                          <span className="font-label-caps text-[10px] uppercase tracking-wider text-[#755a26] font-medium block">
                            {item.badge}
                          </span>
                          <h6 className="font-serif text-base text-[#1a1c1a] font-medium mt-0.5">
                            {item.title}
                          </h6>
                          <p className="mt-2 text-xs text-[#556060] leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Resort Amenities Grid */}
                <div>
                  <div className="mb-4">
                    <span className="font-label-caps text-xs text-[#755a26] tracking-[0.2em] uppercase font-semibold">
                      What’s Included
                    </span>
                    <h5 className="font-serif text-lg text-[#1a1c1a] font-semibold">
                      Resort Privileges & Amenities
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {RESORT_PRIVILEGES.map((item, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-2xl p-5 border border-[#e3e2e0]/60 shadow-xs flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-10 h-10 rounded-xl bg-[#efeeeb] text-[#346364] flex items-center justify-center mb-3">
                            <span className="material-symbols-outlined text-[22px]">
                              {item.icon}
                            </span>
                          </div>
                          <h6 className="font-serif text-sm font-semibold text-[#1a1c1a]">
                            {item.title}
                          </h6>
                          <p className="mt-1 text-xs text-[#556060] leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#e3e2e0]/30 flex items-center gap-1 text-[10.5px] font-label-caps uppercase text-[#755a26]">
                          <span className="material-symbols-outlined text-[13px]">check</span>
                          <span>Included</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
