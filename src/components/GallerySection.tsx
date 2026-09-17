import React, { useState } from 'react';

interface ExperienceHighlight {
  time: string;
  title: string;
  badge: string;
  description: string;
  icon: string;
}

const DAILY_RHYTHM: ExperienceHighlight[] = [
  {
    time: '06:30 AM',
    title: 'Dawn Tide & Suru Forest Stroll',
    badge: 'Morning Stillness',
    description:
      'Step out into crisp maritime morning air. A shaded 5-minute pathway through whispering Suru pines brings you to Kelva’s wide, tranquil shores at low tide.',
    icon: 'wb_twilight',
  },
  {
    time: '09:00 AM',
    title: 'Coastal Verandah Breakfast',
    badge: 'Nourishment',
    description:
      'Enjoy freshly prepared, home-style pure-vegetarian & Jain breakfast specialties with hot masala chai, served amidst open garden breezes.',
    icon: 'bakery_dining',
  },
  {
    time: '02:00 PM',
    title: 'Poolside Solitude & Shaded Repose',
    badge: 'Afternoon Ease',
    description:
      'Escape midday heat in our shimmering retreat pool, or read quietly on your private verandah beneath the gentle rustle of coconut fronds.',
    icon: 'pool',
  },
  {
    time: '06:15 PM',
    title: 'The Blue Hour & Arabian Sunset',
    badge: 'Coastal Magic',
    description:
      'As evening arrives, the sky turns indigo and amber. Hear the rhythmic sea surf and distant chimes of the historic Shitladevi temple.',
    icon: 'flare',
  },
  {
    time: '08:30 PM',
    title: 'Starlit Courtyard Gatherings',
    badge: 'Night Serenity',
    description:
      'Evenings under starry Palghar skies. Unwind with loved ones over wholesome dinners, acoustic quiet, and warm coastal hospitality.',
    icon: 'nights_stay',
  },
];

const RESORT_PRIVILEGES = [
  {
    icon: 'water_drop',
    title: 'Shimmering Infinity Pool',
    desc: 'Clean, well-maintained pool with sun deck loungers and dedicated shallow zone.',
  },
  {
    icon: 'restaurant_menu',
    title: '100% Pure Veg & Jain Kitchen',
    desc: 'Freshly prepared coastal & Indian vegetarian cuisine with strict Jain options.',
  },
  {
    icon: 'nature_people',
    title: 'Private Beach Pathway',
    desc: 'Direct 5-minute walking access to pristine, uncrowded Kelva beachfront.',
  },
  {
    icon: 'celebration',
    title: 'Private Event Lawns',
    desc: 'Expansive open-air manicured grounds for intimate weddings, buyouts, and galas.',
  },
  {
    icon: 'local_parking',
    title: 'Secure On-Site Parking',
    desc: 'Gated, hassle-free private parking with round-the-clock resort attendant.',
  },
  {
    icon: 'electric_bolt',
    title: '24/7 Power Backup',
    desc: 'Heavy-duty silent generators ensuring uninterrupted AC and comfort throughout.',
  },
  {
    icon: 'wifi',
    title: 'Retreat High-Speed Wi-Fi',
    desc: 'Seamless wireless coverage for remote work or sharing your holiday memories.',
  },
  {
    icon: 'pets',
    title: 'Pet Friendly Grounds',
    desc: 'Thoughtfully welcoming spaces for your four-legged family members on prior notice.',
  },
];

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'rhythm' | 'privileges'>('rhythm');

  return (
    <section
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="gallery"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
            Retreat Chronicles
          </span>
          <h2 className="mt-2 font-headline-lg text-3xl sm:text-4xl text-[#1a1c1a] tracking-tight font-serif">
            Life at Beyond Sands
          </h2>
          <p className="mt-2 font-body-md text-sm sm:text-base text-[#404848] max-w-xl leading-relaxed">
            Authentic moments, leisurely coastal rhythms, and essential privileges
            curated for peace and rejuvenation along the Kelva shore.
          </p>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#e3e2e0]/60 backdrop-blur-sm self-start md:self-auto">
          <button
            onClick={() => setActiveTab('rhythm')}
            className={`px-4 py-2 rounded-xl font-label-caps text-xs uppercase tracking-[0.12em] transition-all cursor-pointer ${
              activeTab === 'rhythm'
                ? 'bg-[#0f1c2e] text-white shadow-sm font-medium'
                : 'text-[#404848] hover:text-[#1a1c1a]'
            }`}
            type="button"
          >
            Daily Coastal Rhythm
          </button>
          <button
            onClick={() => setActiveTab('privileges')}
            className={`px-4 py-2 rounded-xl font-label-caps text-xs uppercase tracking-[0.12em] transition-all cursor-pointer ${
              activeTab === 'privileges'
                ? 'bg-[#0f1c2e] text-white shadow-sm font-medium'
                : 'text-[#404848] hover:text-[#1a1c1a]'
            }`}
            type="button"
          >
            Resort Amenities
          </button>
        </div>
      </div>

      {/* Tab 1: Daily Coastal Rhythm Timeline (No Stock Photos, Pure Narrative Craft) */}
      {activeTab === 'rhythm' && (
        <div className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {DAILY_RHYTHM.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#e3e2e0]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#efeeeb] text-[#0f1c2e] font-label-caps text-xs tracking-wider font-semibold">
                      {item.time}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-[#f4f3f1] group-hover:bg-[#346364]/10 text-[#346364] flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-[22px]">
                        {item.icon}
                      </span>
                    </span>
                  </div>

                  <span className="font-label-caps text-[11px] uppercase tracking-[0.16em] text-[#755a26] font-medium block">
                    {item.badge}
                  </span>

                  <h3 className="font-headline-sm text-lg sm:text-xl text-[#1a1c1a] font-serif mt-1">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-body-sm text-sm text-[#404848] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#e3e2e0]/30 flex items-center gap-2 text-xs text-[#707978]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Kelva Sanctuary Routine</span>
                </div>
              </div>
            ))}

            {/* Final Highlight Card */}
            <div className="bg-[#0f1c2e] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div>
                <span className="px-3 py-1 rounded-full bg-white/15 text-[#ffdea5] font-label-caps text-xs tracking-wider font-medium inline-block mb-4">
                  Stay Experience
                </span>
                <h3 className="font-headline-sm text-xl sm:text-2xl font-serif text-white">
                  Your Rhythm, Your Pace
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  No strict itineraries or wake-up calls. Sleep in, take mid-afternoon
                  plunges, or walk on the sand whenever the tide calls to you.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20know%20more%20about%20the%20retreat%20experience"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-[#ffdea5] text-[#271900] font-label-caps text-xs uppercase tracking-[0.14em] font-semibold hover:bg-white transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <span>Chat with Concierge</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Resort Privileges & Facilities Grid */}
      {activeTab === 'privileges' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {RESORT_PRIVILEGES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#e3e2e0]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-[#efeeeb] text-[#346364] flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[26px]">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-base sm:text-lg font-serif text-[#1a1c1a]">
                {item.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#404848] leading-relaxed flex-1">
                {item.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-[#e3e2e0]/30 flex items-center gap-1.5 text-[11px] font-label-caps uppercase tracking-wider text-[#755a26]">
                <span className="material-symbols-outlined text-[14px]">check</span>
                <span>Included with stay</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
