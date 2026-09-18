import React from 'react';
import { motion } from 'motion/react';

interface RouteGuide {
  origin: string;
  distance: string;
  time: string;
  route: string;
  icon: string;
}

const ROUTES: RouteGuide[] = [
  {
    origin: 'From Borivali / Western Express Highway',
    distance: '75 km',
    time: '90–105 Mins',
    route: 'Western Express Highway → NH48 via Dahisar Toll → Turn left at Manor / Mastan Naka directly onto Palghar-Kelva Beach Road. Fast & smooth highway drive.',
    icon: 'directions_car',
  },
  {
    origin: 'From Bandra, BKC & South Mumbai',
    distance: '95 km',
    time: '2 hr 10 min',
    route: 'Direct via Coastal Road / WEH to NH48 → Smooth 4-lane expressway past Vasai & Virar to Manor exit.',
    icon: 'navigation',
  },
  {
    origin: 'From Thane & Navi Mumbai',
    distance: '82 km',
    time: '1 hr 50 min',
    route: 'Ghodbunder Road → Join NH48 at Fountain Hotel → Continue north past Manor to Palghar-Kelva coastal route.',
    icon: 'alt_route',
  },
  {
    origin: 'From Gujarat (Vapi / Surat)',
    distance: '90 km / 185 km',
    time: '1.5 hr / 3 hr',
    route: 'Direct South on NH48 → Exit right at Manor towards Palghar town and peaceful Kelva coastline.',
    icon: 'directions_car',
  },
  {
    origin: 'By Western Railway Train',
    distance: '4.5 km from station',
    time: '10 min local auto',
    route: 'Board Dahanu/Palghar local or express train from Borivali/Andheri. Alight at Kelve Road or Palghar station.',
    icon: 'train',
  },
];

export const ArrivalSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="arrival"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Location Details & Wayfinding */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
              The Journey
            </span>
            <h2 className="mt-2 font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1c1a] tracking-tight font-serif">
              Arrival at the Sanctuary
            </h2>
            <p className="mt-4 font-body-md text-sm sm:text-base text-[#404848] leading-relaxed">
              Secluded yet effortlessly reachable from Mumbai, Thane, and South Gujarat.
              Nestled right opposite the historic Shitaladevi Temple along Kelva’s peaceful coast.
            </p>

            {/* Address Banner */}
            <motion.div
              whileHover={{ y: -2 }}
              className="mt-6 p-4 rounded-2xl bg-[#f4f3f1] border border-[#e3e2e0]/60 flex items-start gap-4 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#346364] text-white flex items-center justify-center shrink-0 shadow-xs">
                <span className="material-symbols-outlined text-[20px]">
                  pin_drop
                </span>
              </div>
              <div>
                <h4 className="font-headline-sm text-sm sm:text-base text-[#1a1c1a] font-serif font-semibold">
                  Resort Coordinates & Address
                </h4>
                <p className="font-body-sm text-xs sm:text-sm text-[#404848] mt-0.5">
                  Opposite Shitladevi temple, Kelve Road, Kelve, Palghar 401404, Maharashtra, India
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs text-[#755a26] font-medium">
                  <span>GPS: 19.6200° N, 72.7300° E</span>
                  <span>•</span>
                  <span>Free On-Site Gated Parking</span>
                </div>
              </div>
            </motion.div>

            {/* Route Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08 },
                },
              }}
              className="mt-6 space-y-3"
            >
              {ROUTES.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
                  }}
                  whileHover={{ y: -2, borderColor: 'rgba(52, 99, 100, 0.4)' }}
                  className="p-4 rounded-xl bg-white border border-[#e3e2e0]/50 shadow-xs transition-colors flex items-start gap-3.5"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#efeeeb] text-[#346364] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">
                      {item.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="font-medium text-xs sm:text-sm text-[#1a1c1a]">
                        {item.origin}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#f4f3f1] text-[#755a26] font-label-caps text-[10px] uppercase font-semibold">
                        {item.distance} • {item.time}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#556060] leading-relaxed">
                      {item.route}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0f1c2e] text-white font-label-caps text-xs uppercase tracking-[0.14em] hover:bg-[#346364] transition-colors shadow-sm cursor-pointer"
              href="https://maps.google.com/?q=Beyond+Sands+Resort+Opposite+Shitladevi+temple+Kelve+Palghar+401404"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px]">map</span>
              <span>Open in Google Maps</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#efeeeb] text-[#1a1c1a] font-label-caps text-xs uppercase tracking-[0.14em] hover:bg-[#e3e2e0] transition-colors border border-[#e3e2e0]/60 cursor-pointer"
              href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20can%20you%20help%20arrange%20station%20pickup%20from%20Kelve%20Road%20station?"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#346364]">local_taxi</span>
              <span>Request Station Pickup</span>
            </motion.a>
          </div>
        </div>

        {/* Right: WhatsApp Concierge Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-[#f4f3f1] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between h-full border border-[#e3e2e0]/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#346364]/10 text-[#346364] font-label-caps text-[11px] uppercase tracking-wider font-semibold">
                  Direct Care
                </span>
                <span className="flex items-center gap-1.5 text-xs text-[#755a26] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#346364] animate-pulse"></span>
                  Concierge Desk Online
                </span>
              </div>
              <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c1a] font-serif">
                Direct Host Contact
              </h3>
              <p className="mt-3 font-body-sm text-xs sm:text-sm text-[#404848] leading-relaxed">
                Connect directly with our retreat hosts for personal route guidance,
                Pure-Vegetarian and Jain dining requests, room bookings, or private event planning.
              </p>

              <div className="mt-6 sm:mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#e3e2e0]/30 shadow-xs">
                <span className="font-label-caps text-xs text-[#404848] uppercase tracking-widest font-medium">
                  Direct Phone & WhatsApp
                </span>
                <p className="font-headline-sm text-lg sm:text-2xl text-[#1a1c1a] font-semibold mt-1 tracking-wider">
                  +91 99238 95055
                </p>
                <div className="mt-2 pt-2 border-t border-[#e3e2e0]/40 flex items-center justify-between text-xs text-[#404848]">
                  <span>Email: beyondsandsresort@gmail.com</span>
                </div>
              </div>

              <div className="mt-6 space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 text-[#404848] font-body-sm text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-[#346364] text-[18px]">
                    check_circle
                  </span>
                  <span>100% Pure Vegetarian & Jain Kitchen</span>
                </div>
                <div className="flex items-center gap-2 text-[#404848] font-body-sm text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-[#346364] text-[18px]">
                    check_circle
                  </span>
                  <span>Direct 5-Minute Walk to Kelva Beach</span>
                </div>
                <div className="flex items-center gap-2 text-[#404848] font-body-sm text-xs sm:text-sm">
                  <span className="material-symbols-outlined text-[#346364] text-[18px]">
                    check_circle
                  </span>
                  <span>Full Estate Buyouts for Family Gatherings</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e3e2e0]/30">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 sm:py-4 rounded-xl bg-[#346364] text-white font-label-caps text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-3 hover:bg-[#4e7c7c] transition-colors shadow-md text-center font-medium"
                href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20reserve%20a%20stay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  chat
                </span>
                <span>Connect on WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
