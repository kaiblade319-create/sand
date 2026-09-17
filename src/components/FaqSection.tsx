import React, { useState } from 'react';

interface FaqItem {
  id: string;
  question: string;
  category: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    id: 'food-veg-jain',
    category: 'Dining & Kitchen',
    question: 'Is the food strictly Pure Vegetarian and Jain friendly?',
    answer:
      'Yes, 100%. Beyond Sands operates an exclusive Pure Vegetarian kitchen. We take immense care to provide authentic Jain preparations (cooked without root vegetables, onion, or garlic in separate vessels) upon prior request. Regional Maharashtrian, Gujarati, and North Indian home-style favorites are freshly prepared daily.',
  },
  {
    id: 'beach-distance',
    category: 'Location & Beach',
    question: 'How far is Kelva Beach from the retreat on foot?',
    answer:
      'The pristine Kelva Beach shore is just a leisurely 5-minute shaded walk (~350 meters) through serene Suru pine and coconut groves. You do not need vehicles to reach the sea.',
  },
  {
    id: 'checkin-checkout',
    category: 'Timings & Policies',
    question: 'What are the check-in and check-out timings?',
    answer:
      'Standard Check-In time is 1:00 PM and Check-Out is 11:00 AM. Early check-in or late check-out requests are gladly accommodated depending on room availability on your date of arrival.',
  },
  {
    id: 'pets-allowed',
    category: 'Pet Policy',
    question: 'Are pets allowed at the property?',
    answer:
      'Yes, we are a pet-friendly retreat! We welcome well-behaved pets with open arms. Please inform our concierge at the time of booking so we can arrange suitable garden-level rooms and prepare water bowls for your companion.',
  },
  {
    id: 'travel-routes',
    category: 'Wayfinding',
    question: 'What is the best way to reach the retreat from Mumbai, Thane, or Surat?',
    answer:
      'By Road: It is an easy 2 to 2.5-hour drive (~75 km from Borivali / 80 km from Thane) via the Mumbai-Ahmedabad NH48 turning at Manor towards Palghar/Kelva. By Train: Take Western Railway trains to Kelve Road Station or Palghar Station. Our retreat is only 10-15 minutes by auto or private sanctuary cab from Kelve Road.',
  },
  {
    id: 'estate-buyout',
    category: 'Events & Buyouts',
    question: 'Can we book the entire property for private family functions or weddings?',
    answer:
      'Absolutely. We offer full estate buyouts with private access to all suites, lawns, pool, and dedicated kitchen staff for groups of 20 to 80 guests. Customized wedding decor, sundowner cocktail/mocktail setups, and bonfire arrangements are handled seamlessly by our events team.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('food-veg-jain');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full" id="faqs">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
            Common Questions
          </span>
          <h2 className="mt-2 font-headline-lg text-2xl sm:text-3xl md:text-4xl text-[#1a1c1a] tracking-tight font-serif">
            Everything You Need to Know
          </h2>
          <p className="mt-2 font-body-md text-sm sm:text-base text-[#404848]">
            Clear answers regarding dining, beach access, arrival routes, and stay policies.
          </p>
        </div>

        <a
          href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20have%20a%20question%20regarding%20a%20stay"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#efeeeb] text-[#0f1c2e] hover:bg-[#0f1c2e] hover:text-white font-label-caps text-xs uppercase tracking-[0.14em] font-medium transition-all shadow-xs"
        >
          <span className="material-symbols-outlined text-[18px] text-[#346364]">help</span>
          <span>Ask Custom Question</span>
        </a>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div
              key={faq.id}
              className="bg-white rounded-2xl border border-[#e3e2e0]/60 overflow-hidden shadow-xs hover:border-[#346364]/30 transition-colors"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                type="button"
                aria-expanded={isOpen}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#f4f3f1] text-[#755a26] font-label-caps text-[10px] uppercase tracking-wider font-semibold w-fit">
                    {faq.category}
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg font-serif text-[#1a1c1a]">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-8 h-8 rounded-full bg-[#f4f3f1] text-[#346364] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#346364] text-white' : ''
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    expand_more
                  </span>
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-[#404848] leading-relaxed border-t border-[#e3e2e0]/30 mt-1">
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
