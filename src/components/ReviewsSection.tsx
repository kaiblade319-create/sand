import React from 'react';

interface Review {
  id: string;
  author: string;
  location: string;
  stayType: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  highlight: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    author: 'Rohan & Priya Mehta',
    location: 'Borivali, Mumbai',
    stayType: 'Couple Getaway • 2 Nights',
    rating: 5,
    date: 'February 2026',
    title: 'Total acoustic peace and pristine pool privacy',
    comment:
      'We wanted a quick weekend escape without the loud crowds of Alibaug or Lonavala. Beyond Sands was an eye-opener. The towering coconut groves keep the air naturally cool, the beach is a peaceful 5-minute stroll, and the poolside evening silence was just what we needed. Highly recommend the couple suite!',
    highlight: 'Acoustic Silence & Poolside Comfort',
  },
  {
    id: '2',
    author: 'Sunil Shah & Family',
    location: 'Thane West',
    stayType: 'Family Vacation • 3 Generations',
    rating: 5,
    date: 'January 2026',
    title: 'Outstanding Pure Vegetarian & Jain food arrangements',
    comment:
      'Traveling with elderly parents requires strict Jain food. The kitchen team here prepared separate, genuinely delicious Jain meals without onion or garlic for all 3 days. My parents were so relaxed. The family dorm and garden rooms were spotless, and the staff is extraordinarily courteous.',
    highlight: '100% Authentic Jain Dining',
  },
  {
    id: '3',
    author: 'Dr. Sameer Kulkarni',
    location: 'Dadar, Mumbai',
    stayType: 'Weekend Gathering • 12 Guests',
    rating: 5,
    date: 'March 2026',
    title: 'Easy drive from Mumbai, felt like a private haven',
    comment:
      'Only 2 hours from Dahisar toll plaza. We booked 3 suites for our college friends reunion. Enjoyed the starlit lawn at night, walked to the Kelva Sea Fort at low tide in the morning, and had endless hot masala chai. We will definitely make this an annual retreat.',
    highlight: 'Convenient Drive & Starlit Lawns',
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full bg-[#f4f3f1]/30 rounded-3xl" id="reviews">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div>
          <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
            Word of Mouth
          </span>
          <h2 className="mt-2 font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1c1a] tracking-tight font-serif">
            Guest Experiences
          </h2>
          <p className="mt-2 font-body-md text-sm sm:text-base text-[#404848] max-w-xl">
            Real stories from travelers, couples, and multi-generational families who found respite in our coconut grove sanctuary.
          </p>
        </div>

        {/* Aggregate Ratings Card */}
        <div className="bg-white px-6 py-4 rounded-2xl border border-[#e3e2e0]/60 shadow-xs flex items-center gap-5 shrink-0">
          <div className="text-center">
            <span className="font-serif text-3xl sm:text-4xl text-[#1a1c1a] font-bold block">
              4.8
            </span>
            <div className="flex text-[#755a26] text-xs mt-0.5 justify-center">
              {'★'.repeat(5)}
            </div>
          </div>
          <div className="h-10 w-px bg-[#e3e2e0]"></div>
          <div className="text-xs text-[#404848] space-y-1">
            <div className="flex items-center gap-1.5 font-medium text-[#1a1c1a]">
              <span className="material-symbols-outlined text-[16px] text-[#346364]">
                verified
              </span>
              <span>100+ Verified Stays</span>
            </div>
            <p className="text-[#707978]">Kelva Beach, Palghar</p>
          </div>
        </div>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review) => (
          <div
            key={review.id}
            className="bg-white p-6 sm:p-7 rounded-2xl border border-[#e3e2e0]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Rating stars & badge */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex text-[#755a26] text-sm tracking-widest">
                  {'★'.repeat(review.rating)}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#efeeeb] text-[#346364] font-label-caps text-[10px] uppercase tracking-wider font-semibold">
                  Verified Stay
                </span>
              </div>

              <span className="font-label-caps text-[11px] uppercase tracking-wider text-[#755a26] font-semibold block mb-1">
                {review.highlight}
              </span>

              <h3 className="font-headline-sm text-base sm:text-lg font-serif text-[#1a1c1a] font-medium leading-snug">
                "{review.title}"
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#404848] leading-relaxed">
                {review.comment}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#e3e2e0]/40 flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-[#1a1c1a]">{review.author}</p>
                <p className="text-[#707978] text-[11px]">{review.location} • {review.stayType}</p>
              </div>
              <span className="text-[#707978] text-[11px]">{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
