import React, { useState, useEffect } from 'react';

interface StickyMobileBarProps {
  onOpenBooking: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 350px (past the initial hero top)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Mobile booking action bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0f1c2e]/95 backdrop-blur-xl border-t border-[#c0c8c8]/25 p-3 px-4 shadow-[0_-8px_24px_rgba(0,0,0,0.25)] transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-white tracking-tight">₹5,000</span>
            <span className="text-[10px] text-white/70 font-sans">/ night</span>
          </div>
          <span className="text-[10px] text-[#ffdea5] font-medium leading-none">
            ★ Includes Pool & Breakfast
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            type="button"
            className="px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-label-caps text-[10.5px] uppercase tracking-wider hover:bg-white/20 active:scale-95 transition-all font-medium cursor-pointer"
          >
            Check Dates
          </button>

          <a
            href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20check%20availability%20and%20rates%20for%20an%20upcoming%20stay"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-label-caps text-[11px] uppercase tracking-wider hover:bg-[#20ba59] active:scale-95 transition-all font-semibold flex items-center gap-1.5 shadow-md"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
