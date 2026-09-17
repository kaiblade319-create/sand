import React from 'react';

interface HeroProps {
  checkIn: string;
  setCheckIn: (val: string) => void;
  checkOut: string;
  setCheckOut: (val: string) => void;
  guests: string;
  setGuests: (val: string) => void;
  suiteType: string;
  setSuiteType: (val: string) => void;
  onCheckAvailability: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  checkIn,
  setCheckIn,
  checkOut,
  setCheckOut,
  guests,
  setGuests,
  suiteType,
  setSuiteType,
  onCheckAvailability,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability();
  };

  // Real-time Night & Tariff Calculator
  const getRoomRate = (name: string): number => {
    switch (name) {
      case 'Couple Room':
        return 4500;
      case 'Garden View Room':
        return 5000;
      case 'Pool View Room':
        return 5000;
      case 'Garden View Family Room':
        return 6000;
      case 'Family Dorm':
        return 6500;
      default:
        return 4500; // Starting base tariff
    }
  };

  const calculateStay = () => {
    if (!checkIn || !checkOut) return null;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (nights <= 0) return null;

    const rate = getRoomRate(suiteType);
    const total = nights * rate;
    return { nights, rate, total };
  };

  const stayCalculation = calculateStay();

  return (
    <section
      className="relative w-full min-h-[90vh] sm:min-h-[880px] lg:min-h-[920px] flex flex-col justify-between -mt-20 pt-24 sm:pt-32 pb-10 sm:pb-16 px-3.5 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDdlLe7PrikZ66oGkJb3gjQ8AcOdTr6B04zeXQ1M-wPHwwz_F-ivIKMfGq6-q3dlmfHPsWUVHJ3h-tH4loayKuu4zjfHM7jrV0OY-tgi4ENLO5_f6u4HU8ITLrCxyVh_22zQcMzFDi4FKVsOIcPOWPyvCvsVsOl_TP88CF19TmWi9x-gkOzIXdwwTTJfv3mfqgkW9IwXwQNTyDK4hKccQqzc-tX_l0S-vI3Yaho5ug2aN81HAls7Xx3')`,
      }}
    >
      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c2e]/85 via-[#0f1c2e]/45 to-[#0f1c2e]/90 pointer-events-none"></div>
      <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/60 pointer-events-none"></div>

      {/* Top coordinates bar (Clean, compact on mobile) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 pt-2 sm:pt-6">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-[#c0c8c8]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ffdea5]"></span>
          <span className="font-label-caps text-[10px] sm:text-xs tracking-[0.18em] sm:tracking-[0.24em] uppercase text-white font-medium">
            Coastal Serenity at Kelva Shore
          </span>
        </div>
        <div className="flex items-center gap-2.5 sm:gap-6 font-label-caps text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.2em] text-white/80">
          <span>19°42'N</span>
          <span className="w-1 h-1 rounded-full bg-white/40"></span>
          <span>72°43'E</span>
          <span className="w-1 h-1 rounded-full bg-white/40"></span>
          <span>Palghar West</span>
        </div>
      </div>

      {/* Center Hero Typography */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto text-center py-6 sm:py-12 px-1">
        <h1 className="font-display-lg text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight max-w-4xl mx-auto leading-[1.18] sm:leading-[1.08] drop-shadow-sm font-serif">
          Where palms meet the blue hour, peace awaits.
        </h1>
        <p className="mt-3 sm:mt-6 font-body-lg text-xs sm:text-base md:text-lg text-[#f4f3f1]/90 max-w-2xl mx-auto font-light leading-relaxed">
          An architecturally silent coastal retreat nestled amidst whispering
          coconut groves and the rhythmic, restorative tides of the Arabian Sea.
        </p>
        <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 max-w-md sm:max-w-none mx-auto">
          <a
            className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg bg-white text-[#0f1c2e] font-label-caps text-[10.5px] sm:text-xs tracking-[0.16em] uppercase hover:bg-[#e9e8e5] transition-all duration-300 shadow-md text-center font-semibold"
            href="#accommodations-section"
          >
            Explore Suites & Residences
          </a>
          <a
            className="w-full sm:w-auto px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg bg-white/15 backdrop-blur-md text-white font-label-caps text-[10.5px] sm:text-xs tracking-[0.16em] uppercase hover:bg-white/25 transition-all duration-300 text-center border border-white/20 font-medium"
            href="#weddings"
          >
            Private Property Buyouts
          </a>
        </div>
      </div>

      {/* Floating Booking Bar (Optimized for Mobile Screens) */}
      <div className="relative z-20 w-full max-w-6xl mx-auto pb-4 sm:pb-0" id="booking-bar">
        <div className="bg-[#faf9f6]/95 backdrop-blur-xl rounded-2xl p-3.5 sm:p-5 lg:p-6 shadow-[0_24px_48px_-12px_rgba(15,28,46,0.18)] border border-[#e3e2e0]/40">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 mb-3 border-b border-[#e3e2e0]/40">
            <div className="flex items-center gap-1.5 text-[#755a26] font-label-caps text-[10px] sm:text-xs tracking-wider uppercase font-semibold">
              <span className="material-symbols-outlined text-[15px] text-[#346364]">
                verified_user
              </span>
              <span>Direct Tariff Guarantee</span>
            </div>
            {stayCalculation ? (
              <div className="inline-flex items-center justify-between sm:justify-start gap-2 px-3 py-1 rounded-xl bg-[#0f1c2e] text-white text-[10.5px] sm:text-xs font-label-caps shadow-xs">
                <span className="text-[#ffdea5] font-semibold">
                  {stayCalculation.nights} {stayCalculation.nights === 1 ? 'Night' : 'Nights'}
                </span>
                <span className="text-white/40">•</span>
                <span>Est: ₹{stayCalculation.total.toLocaleString('en-IN')}</span>
                <span className="text-white/60 text-[10px]">
                  (@ ₹{stayCalculation.rate.toLocaleString('en-IN')}/nt)
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#404848]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#346364] animate-pulse"></span>
                <span>Instant WhatsApp Confirmation</span>
              </div>
            )}
          </div>

          <form
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-3.5 items-end"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-xl bg-white hover:bg-[#f4f3f1] transition-colors border border-[#e3e2e0]/40">
              <label className="font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-[0.16em]">
                Check-In
              </label>
              <div className="flex items-center gap-2 text-[#1a1c1a]">
                <span className="material-symbols-outlined text-[#346364] text-[18px]">
                  calendar_today
                </span>
                <input
                  className="bg-transparent font-body-sm text-xs sm:text-sm text-[#1a1c1a] focus:outline-none w-full cursor-pointer"
                  id="checkin-input"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-xl bg-white hover:bg-[#f4f3f1] transition-colors border border-[#e3e2e0]/40">
              <label className="font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-[0.16em]">
                Check-Out
              </label>
              <div className="flex items-center gap-2 text-[#1a1c1a]">
                <span className="material-symbols-outlined text-[#346364] text-[18px]">
                  event
                </span>
                <input
                  className="bg-transparent font-body-sm text-xs sm:text-sm text-[#1a1c1a] focus:outline-none w-full cursor-pointer"
                  id="checkout-input"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-xl bg-white hover:bg-[#f4f3f1] transition-colors border border-[#e3e2e0]/40">
              <label className="font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-[0.16em]">
                Guests
              </label>
              <div className="flex items-center gap-2 text-[#1a1c1a]">
                <span className="material-symbols-outlined text-[#346364] text-[18px]">
                  group
                </span>
                <select
                  className="bg-transparent font-body-sm text-xs sm:text-sm text-[#1a1c1a] focus:outline-none w-full cursor-pointer"
                  id="guests-input"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                >
                  <option value="2 Adults">2 Adults, 0 Children</option>
                  <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                  <option value="4 Adults, 2 Suites">4 Adults (2 Suites)</option>
                  <option value="Full Buyout (20-80 Guests)">
                    Full Estate Buyout (Up to 80 Guests)
                  </option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1 p-2.5 sm:p-3 rounded-xl bg-white hover:bg-[#f4f3f1] transition-colors border border-[#e3e2e0]/40">
              <label className="font-label-caps text-[10px] sm:text-[11px] text-[#755a26] uppercase tracking-[0.16em]">
                Residence Type
              </label>
              <div className="flex items-center gap-2 text-[#1a1c1a]">
                <span className="material-symbols-outlined text-[#346364] text-[18px]">
                  bed
                </span>
                <select
                  className="bg-transparent font-body-sm text-xs sm:text-sm text-[#1a1c1a] focus:outline-none w-full cursor-pointer truncate"
                  id="suite-input"
                  value={suiteType}
                  onChange={(e) => setSuiteType(e.target.value)}
                >
                  <option value="All Accommodations">All Rooms & Accommodations</option>
                  <option value="Garden View Room">
                    Garden View Room (380 sq ft)
                  </option>
                  <option value="Pool View Room">
                    Pool View Room (400 sq ft)
                  </option>
                  <option value="Couple Room">
                    Couple Room (350 sq ft)
                  </option>
                  <option value="Family Dorm">
                    Family Dorm (650 sq ft)
                  </option>
                  <option value="Garden View Family Room">
                    Garden View Family Room (480 sq ft)
                  </option>
                </select>
              </div>
            </div>

            <button
              className="sm:col-span-2 lg:col-span-1 h-full min-h-[46px] sm:min-h-[50px] rounded-xl bg-[#0f1c2e] text-white font-label-caps text-[11px] sm:text-xs uppercase tracking-[0.16em] px-4 py-3 hover:bg-[#346364] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              type="submit"
            >
              <span>Check Availability</span>
              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </button>
          </form>

          <div className="mt-2.5 text-center">
            <p className="text-[11px] sm:text-xs text-[#556060]">
              Direct Inquiry via Concierge & Instant WhatsApp Confirmation •{' '}
              <a
                className="text-[#346364] underline hover:text-[#0f1c2e]"
                href="tel:+919923895055"
              >
                +91 99238 95055
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
