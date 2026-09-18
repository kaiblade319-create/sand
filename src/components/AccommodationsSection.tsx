import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACCOMMODATIONS } from '../data';
import { Accommodation } from '../types';
import { RoomDetailModal } from './RoomDetailModal';

interface AccommodationsSectionProps {
  onSelectSuiteForBooking: (suiteName: string) => void;
}

export const AccommodationsSection: React.FC<AccommodationsSectionProps> = ({
  onSelectSuiteForBooking,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'garden' | 'pool' | 'couples' | 'family'>('all');
  const [selectedRoomForDetail, setSelectedRoomForDetail] = useState<Accommodation | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const filteredAccommodations = ACCOMMODATIONS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleOpenDetail = (room: Accommodation) => {
    setSelectedRoomForDetail(room);
    setIsDetailModalOpen(true);
  };

  const getAmenityIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('wifi')) return 'wifi';
    if (lower.includes('breakfast')) return 'restaurant';
    if (lower.includes('ac')) return 'ac_unit';
    if (lower.includes('parking')) return 'local_parking';
    if (lower.includes('room service')) return 'room_service';
    if (lower.includes('pool')) return 'pool';
    if (lower.includes('romantic')) return 'favorite';
    if (lower.includes('bed')) return 'bed';
    return 'check_circle';
  };

  const getHighlightIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('verandah') || lower.includes('patio') || lower.includes('balcony')) return 'deck';
    if (lower.includes('view')) return 'visibility';
    if (lower.includes('desk')) return 'desk';
    if (lower.includes('bed')) return 'king_bed';
    if (lower.includes('pool')) return 'pool';
    if (lower.includes('romantic')) return 'favorite';
    if (lower.includes('family')) return 'family_restroom';
    if (lower.includes('seating')) return 'chair';
    return 'star';
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 sm:py-20 lg:py-24 bg-[#f4f3f1]/60 w-full px-4 sm:px-6 lg:px-8"
      id="accommodations-section"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Heading */}
        <div className="mb-10 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
                Sanctuary Stays
              </span>
              <h2 className="mt-2 font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1c1a] tracking-tight font-serif">
                Rooms & Accommodation
              </h2>
              <p className="mt-2 font-body-md text-sm sm:text-base text-[#404848] max-w-2xl leading-relaxed">
                Explore our coastal spaces designed for comfort, luxury, and connection with nature.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#e3e2e0]/60 backdrop-blur-sm self-start lg:self-auto overflow-x-auto max-w-full">
              {[
                { key: 'all', label: `All Rooms (${ACCOMMODATIONS.length})` },
                { key: 'garden', label: 'Garden View' },
                { key: 'pool', label: 'Pool View' },
                { key: 'couples', label: 'Couple Room' },
                { key: 'family', label: 'Family & Dorms' },
              ].map((tab) => (
                <motion.button
                  key={tab.key}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`px-4 py-2 rounded-xl font-label-caps text-[11px] sm:text-xs tracking-[0.12em] uppercase transition-colors whitespace-nowrap cursor-pointer ${
                    activeFilter === tab.key
                      ? 'bg-[#0f1c2e] text-white shadow-sm font-medium'
                      : 'text-[#404848] hover:text-[#1a1c1a]'
                  }`}
                  onClick={() => setActiveFilter(tab.key as any)}
                  type="button"
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Accommodation Cards Grid with layout transition */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredAccommodations.map((room) => (
              <motion.div
                key={room.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#e3e2e0]/40 flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#efeeeb]">
                  <img
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    alt={room.alt}
                    src={room.image}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-[#346364] text-white font-label-caps text-[11px] uppercase tracking-wider font-semibold shadow-sm">
                      {room.discount}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#1a1c1a] font-label-caps text-[11px] uppercase tracking-wider font-medium shadow-sm">
                      {room.capacity}
                    </span>
                  </div>

                  {/* Bottom Image Overlay text */}
                  <div className="absolute bottom-3 left-4 text-white drop-shadow-sm pointer-events-none">
                    <span className="font-label-caps text-[10px] tracking-widest uppercase opacity-90">
                      {room.size} • {room.bed}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Pricing */}
                    <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#e3e2e0]/40">
                      <div>
                        <h3 className="font-headline-sm text-lg sm:text-xl text-[#1a1c1a] font-serif font-medium">
                          {room.title}
                        </h3>
                        <p className="text-xs text-[#707978] mt-0.5 font-sans">
                          {room.rateSubtitle}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-lg sm:text-xl font-semibold text-[#1a1c1a]">
                          {room.price}
                        </div>
                        <div className="text-xs text-[#707978] line-through">
                          {room.originalPrice}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-3 font-body-sm text-xs sm:text-sm text-[#404848] leading-relaxed line-clamp-2">
                      {room.description}
                    </p>

                    {/* Room Highlights */}
                    <div className="mt-4">
                      <span className="font-label-caps text-[11px] uppercase tracking-[0.14em] text-[#755a26] font-semibold block mb-2">
                        Room Highlights
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        {room.highlights.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 text-xs text-[#404848] bg-[#faf9f6] px-2.5 py-1.5 rounded-md border border-[#e3e2e0]/30"
                          >
                            <span className="material-symbols-outlined text-[#346364] text-[15px]">
                              {getHighlightIcon(item)}
                            </span>
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Included Amenities */}
                    <div className="mt-4 pt-3 border-t border-[#e3e2e0]/30">
                      <span className="font-label-caps text-[11px] uppercase tracking-[0.14em] text-[#755a26] font-semibold block mb-2">
                        Included Amenities
                      </span>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {room.amenities.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#efeeeb] text-[#404848] text-[11px]"
                          >
                            <span className="material-symbols-outlined text-[#346364] text-[13px]">
                              {getAmenityIcon(item)}
                            </span>
                            <span>{item}</span>
                          </span>
                        ))}
                        <button
                          onClick={() => handleOpenDetail(room)}
                          type="button"
                          className="inline-flex items-center px-2 py-1 rounded bg-[#ffdea5]/50 hover:bg-[#ffdea5] text-[#271900] text-[11px] font-medium transition-colors cursor-pointer"
                        >
                          +{room.moreAmenitiesCount} More
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-5 mt-5 border-t border-[#e3e2e0]/40 grid grid-cols-2 gap-2.5">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOpenDetail(room)}
                      type="button"
                      className="w-full py-2.5 rounded-xl border border-[#0f1c2e]/20 text-[#0f1c2e] font-label-caps text-[11px] sm:text-xs uppercase tracking-[0.14em] hover:bg-[#efeeeb] transition-colors font-medium flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>View More</span>
                      <span className="material-symbols-outlined text-[14px]">info</span>
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onSelectSuiteForBooking(room.title)}
                      type="button"
                      className="w-full py-2.5 rounded-xl bg-[#0f1c2e] text-white font-label-caps text-[11px] sm:text-xs uppercase tracking-[0.14em] hover:bg-[#346364] transition-colors shadow-sm font-medium flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Quick Inquiry</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Need Help Choosing Section */}
        <motion.div
          whileHover={{ y: -3, transition: { duration: 0.25 } }}
          className="mt-12 sm:mt-16 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e3e2e0]/40 shadow-sm"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-label-caps text-xs text-[#755a26] uppercase tracking-[0.2em] font-semibold">
                Personal Concierge Assistance
              </span>
              <h3 className="mt-1 font-headline-md text-xl sm:text-2xl text-[#1a1c1a] font-serif">
                Need Help Choosing?
              </h3>
              <p className="mt-2 font-body-md text-sm sm:text-base text-[#404848] leading-relaxed">
                Our team is here to help you find the perfect accommodation for your coastal getaway.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20can%20you%20help%20me%20choose%20the%20best%20room?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-[#346364] text-white font-label-caps text-xs uppercase tracking-[0.16em] hover:bg-[#4e7c7c] transition-colors shadow-sm flex items-center justify-center gap-2 font-medium text-center"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Chat with Our Team</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+919923895055"
                className="px-6 py-3 rounded-xl bg-[#efeeeb] text-[#1a1c1a] font-label-caps text-xs uppercase tracking-[0.16em] hover:bg-[#e9e8e5] transition-colors flex items-center justify-center gap-2 font-medium text-center border border-[#e3e2e0]/40"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call +91 99238 95055</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Room Detail Lightbox / Modal */}
      <RoomDetailModal
        room={selectedRoomForDetail}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        onQuickInquiry={(roomName) => {
          setIsDetailModalOpen(false);
          onSelectSuiteForBooking(roomName);
        }}
        onSelectRoom={(room) => setSelectedRoomForDetail(room)}
        allRooms={ACCOMMODATIONS}
      />
    </motion.section>
  );
};
