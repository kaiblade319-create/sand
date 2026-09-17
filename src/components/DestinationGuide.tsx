import React from 'react';
import { DESTINATION_SPOTS } from '../data';

export const DestinationGuide: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#f4f3f1]/50 w-full px-4 sm:px-6 lg:px-8" id="destination-guide">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-3xl">
            <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
              Around Kelva
            </span>
            <h2 className="mt-2 font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1c1a] tracking-tight font-serif">
              Tides, Forts & Sacred Groves
            </h2>
            <p className="mt-3 font-body-md text-sm sm:text-base text-[#404848] leading-relaxed">
              Kelva is an untouched coastal haven in Palghar, free from commercial
              noise. Here, heritage fortresses emerge from the sea at low tide and
              ancient shrines sit peacefully beneath casuarina trees.
            </p>
          </div>

          <a
            href={`https://wa.me/919923895055?text=${encodeURIComponent(
              "Hi Beyond Sands! I'd like to explore local attractions around Kelva during my stay. Can you help arrange transport or a guide?"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#e3e2e0] text-[#0f1c2e] hover:bg-[#0f1c2e] hover:text-white font-label-caps text-xs uppercase tracking-[0.14em] font-medium transition-all shadow-xs"
          >
            <span className="material-symbols-outlined text-[18px] text-[#346364]">chat</span>
            <span>Plan Local Itinerary</span>
          </a>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {DESTINATION_SPOTS.map((spot) => {
            const whatsappMessage = encodeURIComponent(
              `Hi Beyond Sands! I'd like to explore local attractions around Kelva (${spot.title}) during my stay. Can you help arrange transport or a guide?`
            );

            return (
              <div
                key={spot.id}
                className="bg-white p-6 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 border border-[#e3e2e0]/40 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#efeeeb] flex items-center justify-center text-[#346364] group-hover:bg-[#346364] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[24px]">
                        {spot.icon}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#f4f3f1] font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-wider font-semibold">
                      {spot.distance}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-lg sm:text-xl text-[#1a1c1a] font-serif">
                    {spot.title}
                  </h3>

                  <p className="mt-2.5 font-body-sm text-xs sm:text-sm text-[#404848] leading-relaxed">
                    {spot.description}
                  </p>
                </div>

                {/* Clickable Action: Arrange a Visit (Redirects to WhatsApp) */}
                <div className="mt-6 pt-4 border-t border-[#e3e2e0]/40">
                  <a
                    href={`https://wa.me/919923895055?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#faf9f6] hover:bg-[#0f1c2e] text-[#1a1c1a] hover:text-white border border-[#e3e2e0]/60 flex items-center justify-between font-label-caps text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 group/btn"
                    title={`Arrange a visit to ${spot.title}`}
                  >
                    <span>Arrange a Visit</span>
                    <span className="material-symbols-outlined text-[16px] text-[#346364] group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
