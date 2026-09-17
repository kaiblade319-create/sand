import React from 'react';

export const Philosophy: React.FC = () => {
  return (
    <section
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="philosophy"
    >
      {/* Editorial Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
          The Retreat Philosophy
        </span>
        <h2 className="mt-3 font-headline-lg text-3xl sm:text-4xl md:text-5xl text-[#1a1c1a] tracking-tight font-serif">
          Quiet by Design
        </h2>
        <p className="mt-4 font-body-md text-base sm:text-lg text-[#404848] leading-relaxed font-light">
          Beyond Sands was conceived as an antidote to frantic coastal tourism. We
          cultivate deliberate unhurriedness, framing natural elements with
          architectural discipline so space feels truly restorative.
        </p>
      </div>

      {/* Center Manifesto Banner (Image-Free Typography & Architectural Geometry) */}
      <div className="mb-10 sm:mb-14 p-8 sm:p-12 rounded-3xl bg-[#0f1c2e] text-white relative overflow-hidden shadow-sm">
        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-[#ffdea5]">
            Our Coastal Ethos
          </span>
          <blockquote className="font-headline-md text-xl sm:text-2xl md:text-3xl font-serif text-[#faf9f6] leading-relaxed italic">
            "True coastal luxury is not excess noise or spectacle. It is silence,
            shelter under mature palms, and the unhurried arrival of the blue hour."
          </blockquote>
          <div className="pt-2 flex items-center justify-center gap-3 text-xs text-white/70 font-label-caps tracking-widest uppercase">
            <span>Kelva Beach</span>
            <span className="w-1 h-1 rounded-full bg-[#ffdea5]"></span>
            <span>Palghar Coast</span>
            <span className="w-1 h-1 rounded-full bg-[#ffdea5]"></span>
            <span>Est. 2024</span>
          </div>
        </div>
      </div>

      {/* 3 Sophisticated Architectural Pillars (No Fake Images, Pure Craft & Typography) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Pillar 01 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#e3e2e0]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif text-3xl text-[#755a26] font-light">
                01
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#f4f3f1] text-[#346364] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  park
                </span>
              </div>
            </div>

            <h3 className="font-headline-sm text-xl sm:text-2xl text-[#1a1c1a] font-serif">
              Verdant Canopy
            </h3>

            <p className="mt-3 font-body-sm text-sm sm:text-base text-[#404848] leading-relaxed">
              Sheltered beneath hundreds of mature indigenous coconut palms. The
              dense canopy filters direct tropical heat, generates natural
              micro-climate ventilation, and ensures continuous acoustic privacy.
            </p>

            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-[#556060]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Natural maritime sea breeze corridors</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Shaded organic garden walkways</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Indigenous flora & bird song sanctuary</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-[#e3e2e0]/40 flex items-center justify-between">
            <span className="font-label-caps text-xs text-[#755a26] uppercase tracking-widest font-semibold">
              Ecosystem
            </span>
            <span className="font-body-sm text-xs text-[#707978]">
              Natural Microclimate
            </span>
          </div>
        </div>

        {/* Pillar 02 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#e3e2e0]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif text-3xl text-[#755a26] font-light">
                02
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#f4f3f1] text-[#346364] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  domain
                </span>
              </div>
            </div>

            <h3 className="font-headline-sm text-xl sm:text-2xl text-[#1a1c1a] font-serif">
              Architectural Calm
            </h3>

            <p className="mt-3 font-body-sm text-sm sm:text-base text-[#404848] leading-relaxed">
              Clean sandstone textures, broad shaded verandahs, and unhurried
              proportions. Every guestroom is positioned to balance personal seclusion
              with open connectivity to natural daylight and starry evening skies.
            </p>

            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-[#556060]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Deep outdoor verandahs & private patios</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Spacious high-ceiling room layouts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Dedicated quiet & low-light evening zones</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-[#e3e2e0]/40 flex items-center justify-between">
            <span className="font-label-caps text-xs text-[#755a26] uppercase tracking-widest font-semibold">
              Design
            </span>
            <span className="font-body-sm text-xs text-[#707978]">
              Minimalist Spatial Form
            </span>
          </div>
        </div>

        {/* Pillar 03 */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-[#e3e2e0]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-serif text-3xl text-[#755a26] font-light">
                03
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#f4f3f1] text-[#346364] flex items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  spa
                </span>
              </div>
            </div>

            <h3 className="font-headline-sm text-xl sm:text-2xl text-[#1a1c1a] font-serif">
              Bespoke Hospitality
            </h3>

            <p className="mt-3 font-body-sm text-sm sm:text-base text-[#404848] leading-relaxed">
              Attentive without being intrusive. We curate pure vegetarian and Jain
              dining prepared with farm-fresh produce, and offer personalized 24/7
              concierge support for all your getaway needs.
            </p>

            <ul className="mt-5 space-y-2 text-xs sm:text-sm text-[#556060]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Authentic Pure Vegetarian & Jain cuisine</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Direct WhatsApp concierge desk</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                <span>Private buyout & family group packages</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-4 border-t border-[#e3e2e0]/40 flex items-center justify-between">
            <span className="font-label-caps text-xs text-[#755a26] uppercase tracking-widest font-semibold">
              Guest Care
            </span>
            <span className="font-body-sm text-xs text-[#707978]">
              Personalized Touch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
