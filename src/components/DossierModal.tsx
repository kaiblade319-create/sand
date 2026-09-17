import React from 'react';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-2xl w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-[#e3e2e0]/40 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 sm:top-6 right-5 sm:right-6 text-[#404848] hover:text-[#1a1c1a] w-8 h-8 rounded-full bg-[#efeeeb] flex items-center justify-center transition-colors cursor-pointer"
          onClick={onClose}
          type="button"
          aria-label="Close dossier modal"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <span className="font-label-caps text-xs text-[#755a26] uppercase tracking-widest font-semibold">
          Curated Events • 2025/2026 Season
        </span>
        <h3 className="font-headline-md text-2xl text-[#1a1c1a] font-serif mt-1">
          Wedding & Celebration Dossier
        </h3>
        <p className="mt-2 font-body-sm text-sm text-[#404848] leading-relaxed">
          Comprehensive guide to full estate buyouts, beachfront mandap setups,
          sattvic pure-veg banquets, and acoustic privacy at Beyond Sands.
        </p>

        <div className="mt-6 space-y-4 text-sm text-[#404848]">
          <div className="p-4 rounded-xl bg-[#f4f3f1] border border-[#e3e2e0]/40">
            <h4 className="font-headline-sm text-base text-[#1a1c1a] font-serif mb-1">
              1. Exclusive 20-Key Sovereign Buyout
            </h4>
            <p className="text-xs sm:text-sm text-[#404848]">
              All 20 suites, plunge pool, shaded coconut grove lawns, and dining
              verandahs reserved exclusively for your family and guests (up to 80
              resident guests / 200 event attendees).
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f4f3f1] border border-[#e3e2e0]/40">
            <h4 className="font-headline-sm text-base text-[#1a1c1a] font-serif mb-1">
              2. Pure Vegetarian & Jain Gastronomy
            </h4>
            <p className="text-xs sm:text-sm text-[#404848]">
              Dedicated separate vegetarian kitchens catering multi-course
              wedding banquets, sunset tea ceremonies, midnight dessert lounges,
              and customized Jain culinary protocols.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#f4f3f1] border border-[#e3e2e0]/40">
            <h4 className="font-headline-sm text-base text-[#1a1c1a] font-serif mb-1">
              3. Tides & Sunset Timing
            </h4>
            <p className="text-xs sm:text-sm text-[#404848]">
              Our on-site curator calculates the astronomical blue hour and tide
              charts for Kelva Beach to coordinate unforgettable pheras and
              cocktail receptions with open ocean backdrops.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <a
            href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20please%20send%20me%20the%20complete%20Wedding%20Dossier%20and%20Date%20Tariff"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 py-3 rounded-xl bg-[#0f1c2e] text-white font-label-caps text-xs uppercase tracking-[0.16em] flex items-center justify-center gap-2 hover:bg-[#346364] transition-colors text-center font-medium"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Receive PDF via WhatsApp</span>
          </a>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#efeeeb] text-[#1a1c1a] font-label-caps text-xs uppercase tracking-[0.16em] hover:bg-[#e9e8e5] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
