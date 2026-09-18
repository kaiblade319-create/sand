import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -4, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll back to top of page"
          className="fixed bottom-24 sm:bottom-6 right-5 sm:right-44 z-40 flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-[#0f1c2e]/90 text-white backdrop-blur-md border border-[#ffdea5]/30 shadow-[0_8px_24px_rgba(15,28,46,0.25)] hover:bg-[#346364] hover:border-[#ffdea5]/60 transition-colors cursor-pointer group"
        >
          <span className="material-symbols-outlined text-[18px] text-[#ffdea5] group-hover:-translate-y-0.5 transition-transform duration-200">
            arrow_upward
          </span>
          <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] font-medium text-white/90 pr-0.5">
            Top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
