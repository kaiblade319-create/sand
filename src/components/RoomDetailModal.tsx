import React, { useState, useEffect } from 'react';
import { Accommodation } from '../types';

interface RoomDetailModalProps {
  room: Accommodation | null;
  isOpen: boolean;
  onClose: () => void;
  onQuickInquiry: (roomName: string) => void;
  onSelectRoom?: (room: Accommodation) => void;
  allRooms?: Accommodation[];
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  isOpen,
  onClose,
  onQuickInquiry,
  onSelectRoom,
  allRooms = [],
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightboxExpanded, setIsLightboxExpanded] = useState<boolean>(false);

  // Reset active image on room switch
  useEffect(() => {
    setActiveImageIndex(0);
    setIsLightboxExpanded(false);
  }, [room?.id]);

  if (!isOpen || !room) return null;

  // Gallery images (fallback to room.image replicated if galleryImages not provided)
  const gallery: string[] =
    room.galleryImages && room.galleryImages.length > 0
      ? room.galleryImages
      : [
          room.image,
          'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
        ];

  const totalImages = gallery.length;

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  // Other rooms to discover
  const otherRooms = allRooms
    .filter((r) => r.id !== room.id)
    .slice(0, 2);

  // Default about paragraphs if not present
  const aboutParagraphs = room.aboutParagraphs || [
    `Immerse yourself in the tranquility of nature in our ${room.title}. Designed with natural textures and a modern coastal palette, this spacious sanctuary opens directly into our carefully curated palm gardens. Wake up to the gentle rustling of palm leaves and enjoy your morning tea or coffee in a private outdoor setting.`,
    'Our spaces are constructed using localized eco-friendly materials and detailed craftsmanship. Large windows let in plenty of natural daylight, while blackout drapes ensure a restful night. High-fidelity fixtures and customized premium bedding invite you to slow down and embrace coastal time.',
  ];

  // Room features list
  const featuresList = room.features || [
    'Private Verandah',
    'Garden View',
    'Work Desk',
    'King Bed',
    'Rain Shower',
    'Direct Garden Access',
  ];

  // Amenities list
  const amenitiesList = room.allAmenities || [
    'Free WiFi',
    'Breakfast',
    'AC',
    'Private Parking',
    'Room Service',
    'Tea/Coffee Maker',
  ];

  const roomWhatsappMessage = encodeURIComponent(
    `Hello Beyond Sands Retreat, I would like to book the ${room.title} (${room.price}/night). Please share available dates and confirmation.`
  );

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 transition-opacity duration-300"
        id="room-detail-modal"
        onClick={onClose}
      >
        <div
          className="bg-white max-w-4xl w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative border border-[#e3e2e0]/60 max-h-[94vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar / Breadcrumb Navigation */}
          <div className="px-4 sm:px-8 py-3.5 sm:py-4 bg-[#faf9f6] border-b border-[#e3e2e0]/60 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 text-xs">
              <button
                onClick={onClose}
                type="button"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white hover:bg-[#efeeeb] text-[#755a26] hover:text-[#0f1c2e] font-label-caps uppercase tracking-[0.14em] font-medium border border-[#e3e2e0]/60 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  arrow_back
                </span>
                <span>Back to Rooms</span>
              </button>
              <span className="text-[#e3e2e0] hidden xs:inline">/</span>
              <span className="text-[#707978] hidden xs:inline font-sans truncate max-w-[200px] sm:max-w-xs">
                Rooms / {room.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white hover:bg-[#efeeeb] text-[#1a1c1a] border border-[#e3e2e0]/60 flex items-center justify-center transition-colors cursor-pointer"
              type="button"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto px-4 sm:px-8 py-6 space-y-8 sm:space-y-10">
            {/* 1. Room Header Info */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-[#efeeeb] text-[#346364] font-label-caps text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                  Coastal Sanctuary
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#ffdea5] text-[#271900] font-label-caps text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold">
                  {room.discount}
                </span>
                {room.unitsAvailable && (
                  <span className="text-xs text-[#755a26] font-medium">
                    • {room.unitsAvailable}
                  </span>
                )}
              </div>
              <h2 className="font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1c1a] font-serif font-semibold tracking-tight">
                {room.title}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#404848] leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* 2. Main Gallery & 8 Thumbnails */}
            <div>
              {/* Main Image Frame */}
              <div className="relative h-64 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden bg-[#efeeeb] group shadow-sm border border-[#e3e2e0]/40">
                <img
                  src={gallery[activeImageIndex]}
                  alt={`${room.title} view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                {/* Top Badge: Image index and Expand */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-label-caps text-[11px] uppercase tracking-wider font-medium">
                      {room.title} view {activeImageIndex + 1}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md text-[#1a1c1a] font-label-caps text-[11px] uppercase tracking-wider font-semibold">
                      Image {activeImageIndex + 1} of {totalImages}
                    </span>
                  </div>

                  <button
                    onClick={() => setIsLightboxExpanded(true)}
                    type="button"
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 hover:bg-white text-[#1a1c1a] font-label-caps text-[11px] uppercase tracking-wider font-medium shadow-md transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      fullscreen
                    </span>
                    <span className="hidden xs:inline">Click to expand</span>
                  </button>
                </div>

                {/* Left / Right Carousel Controls */}
                <button
                  onClick={handlePrevImage}
                  type="button"
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1a1c1a] shadow-md flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_left
                  </span>
                </button>
                <button
                  onClick={handleNextImage}
                  type="button"
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-[#1a1c1a] shadow-md flex items-center justify-center transition-transform active:scale-95 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    chevron_right
                  </span>
                </button>
              </div>

              {/* Interactive Thumbnails */}
              <div
                className={`mt-3.5 grid gap-2 ${
                  totalImages === 5
                    ? 'grid-cols-5'
                    : totalImages === 6
                    ? 'grid-cols-3 sm:grid-cols-6'
                    : 'grid-cols-4 sm:grid-cols-8'
                }`}
              >
                {gallery.map((imgUrl, idx) => {
                  const isActive = activeImageIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      type="button"
                      aria-label={`${room.title} thumbnail ${idx + 1}`}
                      className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        isActive
                          ? 'border-[#346364] scale-98 shadow-sm ring-2 ring-[#346364]/20'
                          : 'border-transparent opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${room.title} thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0.5 right-1 bg-black/60 text-white text-[9px] font-label-caps px-1 rounded">
                        {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Specs Bar: Area, Guests, Beds, Optional Units */}
            <div
              className={`grid gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#faf9f6] border border-[#e3e2e0]/60 ${
                room.unitsAvailable
                  ? 'grid-cols-2 sm:grid-cols-4'
                  : 'grid-cols-3'
              }`}
            >
              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-[0.16em]">
                  Area
                </span>
                <span className="mt-1 font-headline-sm text-base sm:text-lg font-serif text-[#1a1c1a] font-semibold">
                  {room.size}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-[0.16em]">
                  Guests
                </span>
                <span className="mt-1 font-headline-sm text-base sm:text-lg font-serif text-[#1a1c1a] font-semibold">
                  {room.capacity}
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-[0.16em]">
                  Beds
                </span>
                <span className="mt-1 font-headline-sm text-base sm:text-lg font-serif text-[#1a1c1a] font-semibold">
                  {room.bed}
                </span>
              </div>

              {room.unitsAvailable && (
                <div className="flex flex-col">
                  <span className="font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-[0.16em]">
                    Number of Units
                  </span>
                  <span className="mt-1 font-headline-sm text-base sm:text-lg font-serif text-[#346364] font-semibold">
                    {room.unitsAvailable}
                  </span>
                </div>
              )}
            </div>

            {/* 4. Pricing & Direct CTAs */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#f4f3f1] border border-[#e3e2e0]/60 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div>
                <span className="font-label-caps text-xs text-[#755a26] uppercase tracking-wider font-semibold">
                  Pricing
                </span>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="font-headline-lg text-3xl sm:text-4xl font-serif text-[#1a1c1a] font-bold">
                    {room.price}
                  </span>
                  <span className="text-lg text-[#707978] line-through">
                    {room.originalPrice}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ffdea5] text-[#271900] font-label-caps text-xs font-semibold">
                    {room.discount}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-[#556060]">
                  * Rates are exclusive of applicable taxes. Buffet breakfast is included.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`https://wa.me/919923895055?text=${roomWhatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-[#346364] hover:bg-[#4e7c7c] text-white font-label-caps text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 font-medium shadow-sm transition-colors text-center"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Book Room via WhatsApp</span>
                </a>

                <a
                  href="tel:+919923895055"
                  className="px-4 py-3 rounded-xl bg-white hover:bg-[#efeeeb] text-[#1a1c1a] font-label-caps text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 font-medium border border-[#e3e2e0]/60 transition-colors text-center"
                >
                  <span className="material-symbols-outlined text-[18px] text-[#346364]">call</span>
                  <span>Call to Inquire</span>
                </a>
              </div>
            </div>

            {/* 5. About the Space */}
            <div>
              <span className="font-label-caps text-xs text-[#755a26] tracking-[0.2em] uppercase font-semibold block mb-2">
                About the Space
              </span>
              <div className="space-y-4 text-xs sm:text-sm text-[#404848] leading-relaxed font-sans">
                {aboutParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* 6. Room Features & Included Amenities */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-[#e3e2e0]/40">
              {/* Room Features */}
              <div>
                <h4 className="font-label-caps text-xs uppercase tracking-[0.18em] text-[#755a26] font-semibold mb-3">
                  Room Features
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {featuresList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#faf9f6] text-[#1a1c1a] text-xs border border-[#e3e2e0]/40"
                    >
                      <span className="material-symbols-outlined text-[#346364] text-[16px]">
                        check_circle
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Amenities */}
              <div>
                <h4 className="font-label-caps text-xs uppercase tracking-[0.18em] text-[#755a26] font-semibold mb-3">
                  Included Amenities
                </h4>
                <div className="grid grid-cols-2 gap-2.5">
                  {amenitiesList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-[#faf9f6] text-[#1a1c1a] text-xs border border-[#e3e2e0]/40"
                    >
                      <span className="material-symbols-outlined text-[#346364] text-[16px]">
                        verified
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 7. Flexible Pricing & Stay Packages */}
            <div className="pt-6 border-t border-[#e3e2e0]/50">
              <div className="mb-6">
                <span className="font-label-caps text-xs text-[#755a26] tracking-[0.2em] uppercase font-semibold">
                  Flexible Pricing
                </span>
                <h3 className="font-headline-md text-xl sm:text-2xl font-serif text-[#1a1c1a] font-semibold mt-1">
                  Stay Packages
                </h3>
                <div className="mt-2 text-xs text-[#556060] space-y-1">
                  <p>* Children aged 4–10 years will be charged half the rate.</p>
                  <p>Rates include applicable taxes. Check-in 12:00 PM · Check-out 11:00 AM</p>
                </div>
              </div>

              {/* Package Cards */}
              <div
                className={`grid gap-5 ${
                  (room.packages?.length || 3) === 2
                    ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                    : 'grid-cols-1 md:grid-cols-3'
                }`}
              >
                {(room.packages && room.packages.length > 0
                  ? room.packages
                  : [
                      {
                        id: 'classic',
                        name: 'CLASSIC',
                        badge: 'Accommodation',
                        subtitle: 'No Food Included',
                        pricePerNight: room.price,
                        priceUnit: '/ Night',
                        roomRateNote: `${room.title} ${room.price}`,
                        extraBedNote: 'Extra Bed ₹500 (up to 4 people)',
                        checkIn: '12:00 PM',
                        checkOut: '11:00 AM',
                        ctaText: 'Book Now',
                      },
                      {
                        id: 'groups',
                        name: 'GROUPS',
                        badge: 'Per Person Package',
                        subtitle: '4 Person Minimum',
                        pricePerNight: '₹2,800',
                        priceUnit: '/ Per Person',
                        roomRateNote: `${room.title} ₹2,800 / person`,
                        mealsIncluded: ['Lunch', 'Hi-Tea', 'Dinner', 'Breakfast'],
                        inclusionsNote: '* Includes Resort & Pool Access',
                        checkIn: '12:00 PM',
                        checkOut: '11:00 AM',
                        ctaText: 'Enquire Now',
                      },
                      {
                        id: 'couple',
                        name: 'COUPLE',
                        badge: 'Couple Package',
                        subtitle: 'For 2 Persons',
                        pricePerNight: '₹7,000',
                        priceUnit: '/ Night',
                        roomRateNote: `${room.title} ₹7,000`,
                        mealsIncluded: ['Lunch', 'Hi-Tea', 'Dinner', 'Breakfast'],
                        inclusionsNote: '* Includes Resort & Pool Access',
                        checkIn: '12:00 PM',
                        checkOut: '11:00 AM',
                        ctaText: 'Book Now',
                      },
                    ]
                ).map((pkg) => {
                  const isGroups = pkg.id === 'groups';
                  return (
                    <div
                      key={pkg.id}
                      className={`bg-[#faf9f6] rounded-2xl p-5 border flex flex-col justify-between transition-colors ${
                        isGroups
                          ? 'border-[#346364]/40 relative shadow-xs'
                          : 'border-[#e3e2e0]/60 hover:border-[#346364]/40'
                      }`}
                    >
                      {isGroups && (
                        <div className="absolute -top-2.5 right-4 bg-[#346364] text-white px-2.5 py-0.5 rounded-full font-label-caps text-[9.5px] uppercase tracking-wider font-semibold">
                          Popular for Groups
                        </div>
                      )}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-label-caps text-xs tracking-wider uppercase font-bold text-[#0f1c2e]">
                            {pkg.name}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full bg-white font-label-caps text-[10px] uppercase font-semibold border ${
                              isGroups
                                ? 'text-[#346364] border-[#346364]/20'
                                : 'text-[#755a26] border-[#e3e2e0]/40'
                            }`}
                          >
                            {pkg.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#707978]">{pkg.subtitle}</p>

                        <div className="mt-4 pb-4 border-b border-[#e3e2e0]/40">
                          <span className="font-label-caps text-[10px] text-[#707978] uppercase">
                            Price Per Night
                          </span>
                          <div className="flex items-baseline gap-1 mt-0.5">
                            <span className="text-2xl font-serif font-bold text-[#1a1c1a]">
                              {pkg.pricePerNight}
                            </span>
                            <span className="text-xs text-[#707978]">{pkg.priceUnit}</span>
                          </div>
                        </div>

                        <div className="mt-4 space-y-2 text-xs text-[#404848]">
                          <div className="flex justify-between">
                            <span>{room.title}</span>
                            <span className="font-medium text-[#1a1c1a]">
                              {pkg.roomRateNote.replace(`${room.title} `, '') || pkg.pricePerNight}
                            </span>
                          </div>

                          {pkg.extraBedNote && (
                            <div className="flex justify-between text-[#707978]">
                              <span>Extra Bed</span>
                              <span>{pkg.extraBedNote.replace('Extra Bed ', '')}</span>
                            </div>
                          )}

                          {pkg.mealsIncluded && pkg.mealsIncluded.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {pkg.mealsIncluded.map((meal, idx) => (
                                <span
                                  key={idx}
                                  className={`px-2 py-0.5 rounded bg-white text-[10.5px] font-medium border border-[#e3e2e0]/40 ${
                                    isGroups ? 'text-[#346364]' : 'text-[#755a26]'
                                  }`}
                                >
                                  ✓ {meal}
                                </span>
                              ))}
                            </div>
                          )}

                          {pkg.inclusionsNote && (
                            <p className="text-[11px] text-[#755a26] font-medium pt-1">
                              {pkg.inclusionsNote}
                            </p>
                          )}

                          <div className="pt-2 border-t border-[#e3e2e0]/30 flex justify-between text-[11px]">
                            <span>Check-In: {pkg.checkIn}</span>
                            <span>Check-Out: {pkg.checkOut}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-3 border-t border-[#e3e2e0]/40">
                        <a
                          href={`https://wa.me/919923895055?text=${encodeURIComponent(
                            `Hello Beyond Sands, I would like to ${
                              pkg.ctaText === 'Book Now' ? 'book' : 'inquire about'
                            } the ${pkg.name} package for ${room.title} (${pkg.pricePerNight}${
                              pkg.priceUnit.includes('Person') ? '/person' : '/night'
                            }).`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-2.5 rounded-xl text-white font-label-caps text-xs uppercase tracking-[0.14em] flex items-center justify-center gap-1.5 transition-colors text-center font-medium ${
                            isGroups
                              ? 'bg-[#346364] hover:bg-[#4e7c7c]'
                              : 'bg-[#0f1c2e] hover:bg-[#346364]'
                          }`}
                        >
                          <span>{pkg.ctaText}</span>
                          <span className="material-symbols-outlined text-[16px]">
                            arrow_forward
                          </span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 8. Explore Other Rooms */}
            <div className="pt-8 border-t border-[#e3e2e0]/60">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
                <div>
                  <span className="font-label-caps text-xs text-[#755a26] tracking-[0.2em] uppercase font-semibold">
                    Explore Other Rooms
                  </span>
                  <p className="font-headline-sm text-lg sm:text-xl font-serif text-[#1a1c1a] font-semibold mt-1">
                    Discover other unique spaces at Beyond Sands Resort.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  type="button"
                  className="text-xs text-[#346364] hover:text-[#0f1c2e] font-label-caps uppercase tracking-wider underline cursor-pointer self-start sm:self-auto"
                >
                  View All Rooms
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherRooms.map((other) => (
                  <div
                    key={other.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#faf9f6] border border-[#e3e2e0]/60 flex flex-col justify-between hover:border-[#346364]/40 transition-colors"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h5 className="font-headline-sm text-base sm:text-lg font-serif text-[#1a1c1a] font-semibold">
                            {other.title}
                          </h5>
                          <span className="text-xs text-[#707978]">
                            Up to {other.capacity.replace('Up to ', '')}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-base font-semibold text-[#1a1c1a]">
                            {other.price}
                          </span>
                          <span className="text-xs text-[#707978] line-through block">
                            {other.originalPrice}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-[#404848] leading-relaxed line-clamp-2">
                        {other.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#e3e2e0]/40 flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (onSelectRoom) {
                            onSelectRoom(other);
                          }
                        }}
                        type="button"
                        className="flex-1 py-2 rounded-xl bg-white hover:bg-[#efeeeb] text-[#0f1c2e] font-label-caps text-[11px] uppercase tracking-wider border border-[#e3e2e0]/60 transition-colors cursor-pointer text-center font-medium"
                      >
                        View Room Details
                      </button>

                      <a
                        href={`https://wa.me/919923895055?text=${encodeURIComponent(
                          `Hello Beyond Sands, I would like to inquire about ${other.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-[#346364] hover:bg-[#4e7c7c] text-white font-label-caps text-[11px] uppercase tracking-wider transition-colors cursor-pointer font-medium"
                      >
                        Inquire
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Sticky Bottom Bar */}
          <div className="px-4 sm:px-8 py-3.5 bg-[#faf9f6] border-t border-[#e3e2e0]/60 flex items-center justify-between shrink-0 text-xs">
            <span className="text-[#707978] hidden sm:inline">
              Beyond Sands Beach Retreat • Kelva Beach, Palghar
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={onClose}
                type="button"
                className="px-4 py-2 rounded-xl text-[#556060] hover:text-[#1a1c1a] font-label-caps uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onQuickInquiry(room.title);
                }}
                type="button"
                className="px-5 py-2 rounded-xl bg-[#0f1c2e] text-white font-label-caps uppercase tracking-wider hover:bg-[#346364] transition-colors cursor-pointer"
              >
                Quick Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Triggered by "Click to expand") */}
      {isLightboxExpanded && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-between p-4 sm:p-6"
          onClick={() => setIsLightboxExpanded(false)}
        >
          <div className="w-full flex items-center justify-between text-white text-xs max-w-5xl">
            <span className="font-label-caps uppercase tracking-widest">
              {room.title} • Image {activeImageIndex + 1} of {totalImages}
            </span>
            <button
              onClick={() => setIsLightboxExpanded(false)}
              type="button"
              className="px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
              <span>Close</span>
            </button>
          </div>

          <div
            className="max-w-5xl max-h-[80vh] w-full flex items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery[activeImageIndex]}
              alt={`${room.title} enlarged view ${activeImageIndex + 1}`}
              className="max-h-[78vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>

          {/* Bottom thumbnails strip inside lightbox */}
          <div
            className="flex items-center gap-2 overflow-x-auto max-w-3xl py-2 px-4 bg-black/50 backdrop-blur-md rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                type="button"
                className={`w-12 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx ? 'border-white scale-105' : 'border-transparent opacity-60'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
