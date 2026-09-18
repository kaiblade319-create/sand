import React from 'react';

interface ReasonsBentoProps {
  onExploreRooms?: () => void;
  onOpenBooking?: () => void;
}

export const ReasonsBento: React.FC<ReasonsBentoProps> = ({
  onExploreRooms,
  onOpenBooking,
}) => {
  return (
    <section
      className="py-14 sm:py-18 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="why-beyond-sands"
    >
      {/* Editorial Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4f3f1] border border-[#e3e2e0] mb-3">
          <span className="w-2 h-2 rounded-full bg-[#346364] animate-pulse"></span>
          <span className="font-label-caps text-xs text-[#755a26] tracking-[0.2em] uppercase font-semibold">
            Effortless Luxury Getaway
          </span>
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-4xl md:text-5xl text-[#1a1c1a] tracking-tight font-serif">
          The 4 Reasons You’ll Never Want to Leave
        </h2>
        <p className="mt-3 font-body-md text-sm sm:text-base text-[#404848] leading-relaxed max-w-2xl font-light">
          No 6-hour hill station traffic. No crowded commercial beaches. Just 90 minutes from Mumbai to your private coastal sanctuary.
        </p>
      </div>

      {/* 4 Core Reasons Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        {/* Bento 1: Swimming Pool & Cabanas (7 cols) */}
        <div className="md:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#e3e2e0]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#346364]/10 text-[#346364] font-label-caps text-[11px] tracking-wider uppercase font-semibold">
                Private Oasis
              </span>
              <span className="font-serif text-2xl text-[#755a26]/50">01</span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl lg:text-3xl text-[#1a1c1a] font-serif font-medium">
              Crystal-Clear Swimming Pool & Cabanas
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#404848] leading-relaxed max-w-xl">
              Immaculately maintained filtered pool with submerged tanning loungers, shaded teak daybeds, and warm evening illumination for sunset swims under coconut palms.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#556060]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#faf9f6] border border-[#e3e2e0]/40">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">pool</span>
                <span>Fresh Filtered Water</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#faf9f6] border border-[#e3e2e0]/40">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">deck</span>
                <span>Teakwood Daybeds</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#faf9f6] border border-[#e3e2e0]/40">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">wb_twilight</span>
                <span>Poolside Sundowners</span>
              </span>
            </div>
          </div>
          <div className="mt-6 aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-[#efeeeb] relative">
            <img
              src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury resort swimming pool with sun loungers"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 text-white text-xs font-label-caps tracking-widest uppercase">
              100% Private Pool Access for In-House Guests
            </div>
          </div>
        </div>

        {/* Bento 2: 200m Walk to Kelva Beach (5 cols) */}
        <div className="md:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#e3e2e0]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#ffdea5]/40 text-[#271900] font-label-caps text-[11px] tracking-wider uppercase font-semibold">
                Direct Beach Access
              </span>
              <span className="font-serif text-2xl text-[#755a26]/50">02</span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c1a] font-serif font-medium">
              200m Stroll to Pristine Kelva Shore
            </h3>
            <p className="mt-3 text-sm text-[#404848] leading-relaxed">
              Step out of your villa directly into a peaceful canopy trail of Suru pine and coconut trees that leads straight to the golden sand and gentle Arabian Sea waves.
            </p>
            <div className="mt-4 space-y-2 text-xs text-[#556060]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">check_circle</span>
                <span>No highway crossings or taxi rides needed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">check_circle</span>
                <span>Quiet, uncrowded stretch of sand</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">check_circle</span>
                <span>Spectacular evening golden hour sunsets</span>
              </div>
            </div>
          </div>
          <div className="mt-6 aspect-[16/10] rounded-xl overflow-hidden bg-[#efeeeb] relative">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
              alt="Tranquil Kelva Beach sunset with gentle waves"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white text-xs font-label-caps tracking-widest uppercase">
              2-Minute Shaded Walk to Water
            </div>
          </div>
        </div>

        {/* Bento 3: Coastal Food & Dedicated Jain Kitchen (5 cols) */}
        <div className="md:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#e3e2e0]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#346364]/10 text-[#346364] font-label-caps text-[11px] tracking-wider uppercase font-semibold">
                Culinary Haven
              </span>
              <span className="font-serif text-2xl text-[#755a26]/50">03</span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c1a] font-serif font-medium">
              Coastal Thalis & 100% Pure Veg / Jain Kitchen
            </h3>
            <p className="mt-3 text-sm text-[#404848] leading-relaxed">
              Indulge in authentic regional flavors cooked fresh. We maintain dedicated separate cookware for strict Jain and pure-vegetarian preparations, alongside coastal fresh catch specialties.
            </p>
            <div className="mt-4 space-y-2 text-xs text-[#556060]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">restaurant</span>
                <span>Authentic Solkadhi & Regional Thalis</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">eco</span>
                <span>Dedicated Pure Veg & Jain Preparation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">outdoor_grill</span>
                <span>Poolside evening barbecue on demand</span>
              </div>
            </div>
          </div>
          <div className="mt-6 aspect-[16/10] rounded-xl overflow-hidden bg-[#efeeeb] relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZAxuanRWujZaNlr7aAXrgTb2KwnsRkMjKR3Zw8IoeJVAyB9AbvSj-hMFutBw0FJZ3vlb1i7YSdiuPr2mbRdXcSxFnuIhtUIrpXzxx8ib5rNBvQNiMfvVpGTo0vLGH7XlWqpY1ygK-WXEsU6yibFltry7CRVBeQYcU-Le7DsZquys8EmS-MmqBmrr3bCBt7uF3pS7OWnSjhRJxwISNPPe90HqxdLlCEGiBzEocKZEKPOSFEK9_PQey"
              alt="Poolside candlelight dining table under palms"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 text-white text-xs font-label-caps tracking-widest uppercase">
              Fresh Cooked Coastal Delights
            </div>
          </div>
        </div>

        {/* Bento 4: 1+ Acre Coconut Palm Grove (7 cols) */}
        <div className="md:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#e3e2e0]/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="px-3 py-1 rounded-full bg-[#755a26]/10 text-[#755a26] font-label-caps text-[11px] tracking-wider uppercase font-semibold">
                Nature Sanctuary
              </span>
              <span className="font-serif text-2xl text-[#755a26]/50">04</span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl lg:text-3xl text-[#1a1c1a] font-serif font-medium">
              1+ Acre Coconut Palm Grove & Private Lawns
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#404848] leading-relaxed max-w-xl">
              Towering native coconut palms create a natural cooling microclimate that filters out heat. Enjoy lush manicured lawns for morning yoga, evening badminton, or unhurried chai under open skies.
            </p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-[#556060]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#faf9f6] border border-[#e3e2e0]/40">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">park</span>
                <span>Natural Sea Breeze Canopy</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#faf9f6] border border-[#e3e2e0]/40">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">pets</span>
                <span>Pet Friendly Grounds</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#faf9f6] border border-[#e3e2e0]/40">
                <span className="material-symbols-outlined text-[#346364] text-[16px]">wifi</span>
                <span>High-Speed WiFi for Workations</span>
              </span>
            </div>
          </div>
          <div className="mt-6 aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-[#efeeeb] relative">
            <img
              src="https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1200&auto=format&fit=crop"
              alt="Lush coconut palm grove with sunlight"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-4 text-white text-xs font-label-caps tracking-widest uppercase">
              Gated & Private 1-Acre Coastal Estate
            </div>
          </div>
        </div>
      </div>

      {/* Quick Trust Highlights Banner */}
      <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-[#0f1c2e] text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffdea5]"></span>
            <span>90 Mins from Borivali / WEH</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffdea5]"></span>
            <span>Tariffs from ₹5,000 / Night</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ffdea5]"></span>
            <span>Free On-Site Gated Parking</span>
          </div>
        </div>

        <a
          href="#accommodations-section"
          className="px-6 py-2.5 rounded-xl bg-white text-[#0f1c2e] font-label-caps text-xs tracking-wider uppercase hover:bg-[#e9e8e5] transition-all font-semibold whitespace-nowrap shadow-sm"
        >
          View Suites & Rates
        </a>
      </div>
    </section>
  );
};
