import React, { useState } from 'react';
import { NAV_LINKS } from '../data';
import { Logo } from './Logo';

interface HeaderProps {
  onOpenBooking: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToHome?: () => void;
  currentView?: 'home' | 'about';
}

export const Header: React.FC<HeaderProps> = ({
  onOpenBooking,
  onNavigateToAbout,
  onNavigateToHome,
  currentView = 'home',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent, href: string, label: string) => {
    if (label === 'Our Story' || href === '#about') {
      e.preventDefault();
      closeMobileMenu();
      if (onNavigateToAbout) {
        onNavigateToAbout();
      }
      return;
    }

    if (label === 'Home' || href === '#') {
      e.preventDefault();
      closeMobileMenu();
      if (onNavigateToHome) {
        onNavigateToHome();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView === 'about' && onNavigateToHome) {
      e.preventDefault();
      closeMobileMenu();
      onNavigateToHome();
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    closeMobileMenu();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#faf9f6]/90 backdrop-blur-md border-b border-[#e3e2e0]/40 shadow-[0_1px_6px_rgba(15,28,46,0.03)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Brand logo */}
        <button
          onClick={(e) => handleLinkClick(e, '#', 'Home')}
          className="flex items-center text-left group cursor-pointer hover:opacity-95 transition-opacity"
          data-path="home"
          type="button"
          aria-label="Beyond Sands Home"
        >
          <Logo variant="horizontal" />
        </button>

        {/* Desktop Nav Links (Synchronized with Quick Links) */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.filter((item) => item.href !== '#').map((link) => {
            const isStoryActive = link.label === 'Our Story' && currentView === 'about';
            return (
              <a
                key={link.label}
                className={`font-label-caps text-xs uppercase transition-colors duration-200 py-1 tracking-[0.14em] cursor-pointer ${
                  isStoryActive
                    ? 'text-[#755a26] font-semibold border-b border-[#755a26]'
                    : 'text-[#404848] hover:text-[#0f1c2e]'
                }`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.label)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Actions & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-4 md:px-5 py-2.5 rounded-lg bg-[#0f1c2e] text-[#faf9f6] font-label-caps text-[11px] uppercase tracking-[0.18em] hover:bg-[#346364] transition-all duration-300 shadow-sm cursor-pointer"
          >
            Reserve Your Stay
          </button>
          <button
            aria-label="Toggle navigation menu"
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#1a1c1a] hover:bg-[#efeeeb] transition-colors focus:outline-none cursor-pointer"
            onClick={toggleMobileMenu}
            type="button"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Menu Drawer (100% Matched with Quick Links) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#ffffff]/98 backdrop-blur-xl border-b border-[#e3e2e0]/50 px-4 sm:px-6 py-6 transition-all duration-300 shadow-lg">
          <div className="flex flex-col gap-2 max-w-lg mx-auto">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                className="font-label-caps text-sm uppercase text-[#1a1c1a] tracking-[0.16em] py-2.5 border-b border-[#e3e2e0]/40 hover:text-[#346364] transition-colors cursor-pointer"
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.label)}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-3">
              <button
                onClick={() => {
                  closeMobileMenu();
                  onOpenBooking();
                }}
                className="w-full py-3 text-center rounded-lg bg-[#0f1c2e] text-[#faf9f6] font-label-caps text-xs uppercase tracking-[0.18em] hover:bg-[#346364] transition-colors cursor-pointer"
              >
                Reserve Your Stay
              </button>
              <a
                className="w-full py-3 text-center rounded-lg bg-[#efeeeb] text-[#1a1c1a] font-label-caps text-xs uppercase tracking-[0.18em] hover:bg-[#e9e8e5] transition-colors"
                href="tel:+919923895055"
              >
                Call +91 99238 95055
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
