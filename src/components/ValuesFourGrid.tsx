import React from 'react';
import { motion } from 'motion/react';

interface ValueCard {
  number: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  actionText: string;
  actionHref: string;
}

const VALUES: ValueCard[] = [
  {
    number: '01',
    tag: 'Seclusion',
    title: 'Absolute Privacy',
    description: 'Zero commercial beach crowds. A gated 1-acre coastal sanctuary reserved strictly for in-house residents.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop',
    actionText: 'Explore Estate',
    actionHref: '#estate-buyout',
  },
  {
    number: '02',
    tag: 'Culinary Purity',
    title: 'Fresh Catch & Pure Veg',
    description: 'Dedicated separate kitchens for 100% strict Jain cooking alongside fresh daily catch coastal Surmai and Pomfret.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
    actionText: 'View Dining',
    actionHref: '#dining',
  },
  {
    number: '03',
    tag: 'Accessibility',
    title: '90 Mins From Mumbai',
    description: 'Located directly off NH48 at Manor. Escape Friday evening traffic with a smooth, stress-free coastal drive.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    actionText: 'Driving Routes',
    actionHref: '#arrival',
  },
  {
    number: '04',
    tag: 'Unhurried Calm',
    title: 'The Blue Hour & Sea',
    description: 'Towering coconut palms, sea-breeze microclimate, and the soothing sound of the Arabian Sea just 200m away.',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800&auto=format&fit=crop',
    actionText: 'View Suites',
    actionHref: '#accommodations-section',
  },
];

export const ValuesFourGrid: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="core-values"
    >
      {/* Editorial Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f3f1] border border-[#e3e2e0] mb-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#755a26]"></span>
          <span className="font-label-caps text-[11px] text-[#755a26] tracking-[0.2em] uppercase font-semibold">
            Our Hospitality Core
          </span>
        </div>
        <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#1a1c1a] tracking-tight font-serif uppercase">
          We Value
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-[#404848] max-w-lg">
          The four pillars that define every moment of your stay at Beyond Sands.
        </p>
      </motion.div>

      {/* 4 Numbered Cards Grid with Staggered Entrance */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
      >
        {VALUES.map((item) => (
          <motion.div
            key={item.number}
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="bg-white rounded-2xl overflow-hidden border border-[#e3e2e0]/70 shadow-xs hover:shadow-lg hover:border-[#346364]/40 transition-all duration-300 flex flex-col group cursor-pointer"
          >
            {/* Image Preview with Number Tag */}
            <div className="aspect-[4/3] overflow-hidden bg-[#efeeeb] relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Number Badge (01, 02, etc.) */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#0f1c2e]/85 backdrop-blur-sm text-[#ffdea5] font-serif font-bold text-sm tracking-wider border border-white/10 shadow-xs">
                {item.number}
              </div>

              {/* Tag Pill */}
              <div className="absolute bottom-3 left-3 text-[10px] font-label-caps tracking-widest uppercase text-white/90 font-medium">
                {item.tag}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-headline-sm text-base sm:text-lg text-[#1a1c1a] font-serif font-semibold group-hover:text-[#346364] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-[#556060] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-5 pt-3 border-t border-[#e3e2e0]/50">
                <a
                  href={item.actionHref}
                  className="w-full py-2 px-3 rounded-lg bg-[#f4f3f1] group-hover:bg-[#0f1c2e] text-[#1a1c1a] group-hover:text-white font-label-caps text-[11px] uppercase tracking-wider font-semibold transition-all duration-200 flex items-center justify-center gap-1.5 text-center"
                >
                  <span>{item.actionText}</span>
                  <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};
