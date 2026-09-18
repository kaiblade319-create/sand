import React from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem';
  className?: string;
  theme?: 'dark' | 'light';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  theme = 'dark',
  showSubtitle = true,
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? '#faf9f6' : '#132b45';
  const subColor = isLight ? '#f4f3f1' : '#132b45';
  const dividerColor = isLight ? 'rgba(255,255,255,0.4)' : '#132b45';
  const birdColor = isLight ? '#ffdea5' : '#132b45';

  if (variant === 'emblem') {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`w-auto shrink-0 ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Beyond Sands Emblem"
      >
        <defs>
          <linearGradient id="emblemGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cf9f65" />
            <stop offset="50%" stopColor="#be8e56" />
            <stop offset="100%" stopColor="#a87a42" />
          </linearGradient>
        </defs>
        {/* Monogram Interlocking Spiral */}
        <g transform="translate(45, 52) scale(0.68)">
          <path
            d="M -18, -48 C 8, -50 24, -38 24, -20 C 24, -5 12, 8 -6, 18 C -22, 26 -32, 40 -32, 56 C -32, 78 -12, 94 12, 94 C 34, 94 52, 78 52, 54 C 52, 32 34, 18 10, 18 C -8, 18 -22, 32 -22, 50 C -22, 64 -10, 74 4, 74 C 16, 74 26, 64 26, 52 C 26, 42 18, 36 8, 36"
            fill="none"
            stroke="url(#emblemGoldGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M -16, -44 C -26, -44 -34, -32 -34, -18 C -34, -4 -22, 8 -4, 16 C 12, 24 22, 34 26, 48"
            fill="none"
            stroke="url(#emblemGoldGrad)"
            strokeWidth="5.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>
        {/* Seagulls in flight */}
        <g fill={birdColor}>
          <path d="M 68 28 C 73 22 79 20 86 22 C 81 26 79 31 77 35 C 73 32 70 30 68 28 Z" />
          <path d="M 77 34 C 81 35 86 34 90 32 C 85 38 81 40 76 41 C 77 38 77 36 77 34 Z" />
          <path d="M 80 32 C 84 27 89 25 94 27 C 90 31 88 35 86 39 C 83 36 81 34 80 32 Z" />
          <path d="M 86 38 C 89 40 94 39 98 37 C 93 43 89 45 84 46 C 85 43 86 41 86 38 Z" />
        </g>
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <svg
          viewBox="0 0 320 200"
          className="w-full max-w-[260px] h-auto"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="stackedGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cf9f65" />
              <stop offset="50%" stopColor="#be8e56" />
              <stop offset="100%" stopColor="#a87a42" />
            </linearGradient>
          </defs>

          {/* Central Monogram */}
          <g transform="translate(155, 54) scale(0.72)">
            <path
              d="M -18, -48 C 8, -50 24, -38 24, -20 C 24, -5 12, 8 -6, 18 C -22, 26 -32, 40 -32, 56 C -32, 78 -12, 94 12, 94 C 34, 94 52, 78 52, 54 C 52, 32 34, 18 10, 18 C -8, 18 -22, 32 -22, 50 C -22, 64 -10, 74 4, 74 C 16, 74 26, 64 26, 52 C 26, 42 18, 36 8, 36"
              fill="none"
              stroke="url(#stackedGoldGrad)"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M -16, -44 C -26, -44 -34, -32 -34, -18 C -34, -4 -22, 8 -4, 16 C 12, 24 22, 34 26, 48"
              fill="none"
              stroke="url(#stackedGoldGrad)"
              strokeWidth="5.5"
              strokeLinecap="round"
              opacity="0.9"
            />
          </g>

          {/* Coastal Seagulls */}
          <g fill={birdColor}>
            <path d="M 226 62 C 231 55 238 52 246 54 C 242 59 239 64 236 69 C 232 66 229 64 226 62 Z" />
            <path d="M 236 68 C 240 69 245 68 249 65 C 244 71 240 73 235 74 C 236 71 236 70 236 68 Z" />
            <path d="M 248 66 C 253 60 260 57 268 60 C 264 65 261 70 259 76 C 255 72 252 69 248 66 Z" />
            <path d="M 259 74 C 263 76 268 75 273 72 C 268 79 263 81 257 82 C 258 78 259 76 259 74 Z" />
          </g>

          {/* Title: BEYOND SANDS */}
          <text
            x="160"
            y="136"
            textAnchor="middle"
            fill={textColor}
            fontFamily="'Bodoni Moda', 'Playfair Display', Didot, 'Cinzel', Georgia, serif"
            fontSize="25"
            fontWeight="600"
            letterSpacing="4"
          >
            BEYOND SANDS
          </text>

          {/* Horizontal Accent Line */}
          <line
            x1="32"
            y1="148"
            x2="288"
            y2="148"
            stroke={dividerColor}
            strokeWidth="1.4"
            strokeLinecap="round"
          />

          {/* Subtitle: HOTELS & RESORTS */}
          {showSubtitle && (
            <text
              x="160"
              y="166"
              textAnchor="middle"
              fill={subColor}
              fontFamily="'Bodoni Moda', 'Playfair Display', Didot, Georgia, serif"
              fontSize="10"
              fontWeight="500"
              letterSpacing="6.5"
            >
              HOTELS &amp; RESORTS
            </text>
          )}
        </svg>
      </div>
    );
  }

  // Default: Horizontal Header Lockup
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Emblem SVG with Monogram & Seagulls */}
      <svg
        viewBox="0 0 100 100"
        className="w-10 h-10 sm:w-11 sm:h-11 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="headerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#cf9f65" />
            <stop offset="50%" stopColor="#be8e56" />
            <stop offset="100%" stopColor="#a87a42" />
          </linearGradient>
        </defs>

        {/* Monogram Spiral */}
        <g transform="translate(45, 52) scale(0.66)">
          <path
            d="M -18, -48 C 8, -50 24, -38 24, -20 C 24, -5 12, 8 -6, 18 C -22, 26 -32, 40 -32, 56 C -32, 78 -12, 94 12, 94 C 34, 94 52, 78 52, 54 C 52, 32 34, 18 10, 18 C -8, 18 -22, 32 -22, 50 C -22, 64 -10, 74 4, 74 C 16, 74 26, 64 26, 52 C 26, 42 18, 36 8, 36"
            fill="none"
            stroke="url(#headerGoldGrad)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M -16, -44 C -26, -44 -34, -32 -34, -18 C -34, -4 -22, 8 -4, 16 C 12, 24 22, 34 26, 48"
            fill="none"
            stroke="url(#headerGoldGrad)"
            strokeWidth="5.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </g>

        {/* Seagulls */}
        <g fill={birdColor}>
          <path d="M 68 28 C 73 22 79 20 86 22 C 81 26 79 31 77 35 C 73 32 70 30 68 28 Z" />
          <path d="M 77 34 C 81 35 86 34 90 32 C 85 38 81 40 76 41 C 77 38 77 36 77 34 Z" />
          <path d="M 80 32 C 84 27 89 25 94 27 C 90 31 88 35 86 39 C 83 36 81 34 80 32 Z" />
          <path d="M 86 38 C 89 40 94 39 98 37 C 93 43 89 45 84 46 C 85 43 86 41 86 38 Z" />
        </g>
      </svg>

      {/* Typography Lockup */}
      <div className="flex flex-col text-left">
        <span
          className="font-headline-sm text-base sm:text-lg tracking-[0.15em] uppercase font-semibold leading-tight font-serif"
          style={{ color: textColor }}
        >
          BEYOND SANDS
        </span>
        <div className="w-full h-[1.2px] my-0.5" style={{ backgroundColor: dividerColor }} />
        <span
          className="font-serif text-[8px] sm:text-[9px] tracking-[0.32em] uppercase font-medium leading-none"
          style={{ color: subColor }}
        >
          HOTELS &amp; RESORTS
        </span>
      </div>
    </div>
  );
};
