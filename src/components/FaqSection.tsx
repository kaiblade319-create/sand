import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

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
      'Yes, 100%. Beyond Sands operates an exclusive Pure Vegetarian kitchen. We take immense care to provide authentic Jain preparations (cooked without root vegetables, onion, or garlic in separate dedicated vessels) upon prior request. Fresh seafood catch (Surmai, Pomfret) is also prepared with zero cross-contamination upon prior order.',
  },
  {
    id: 'beach-distance',
    category: 'Location & Beach',
    question: 'How far is Kelva Beach from the retreat on foot?',
    answer:
      'The pristine Kelva Beach shore is just a leisurely 2 to 3-minute shaded walk (~200 meters) through serene Suru pine and coconut groves. You do not need vehicles or highway crossings to reach the sea.',
  },
  {
    id: 'checkin-checkout',
    category: 'Timings & Policies',
    question: 'What are the check-in and check-out timings?',
    answer:
      'Standard Check-In time is 1:00 PM and Check-Out is 11:00 AM. Early check-in or late check-out requests are gladly accommodated free of charge depending on room availability on your date of arrival.',
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
    question: 'What is the best way to reach the retreat from Mumbai or Thane?',
    answer:
      'By Road: It is a 90 to 105-minute smooth drive (~75 km from Borivali / 80 km from Thane) via the Western Express Highway / NH48, exiting at Manor towards Palghar-Kelva. By Train: Western Railway locals or express trains to Kelve Road or Palghar station (10 mins by auto to our gates).',
  },
  {
    id: 'estate-buyout',
    category: 'Private Buyouts',
    question: 'Can we book the entire property for private family functions or weddings?',
    answer:
      'Absolutely. We offer full 1-acre estate buyouts with exclusive access to all suites, lawns, pool, and dedicated kitchen staff for groups of 20 to 50 guests with zero outside day visitors.',
  },
  {
    id: 'pool-timings',
    category: 'Pool Oasis',
    question: 'What are the swimming pool timings and attire rules?',
    answer:
      'The filtered swimming pool is open from 7:00 AM to 9:30 PM daily. Appropriate swimwear or synthetic attire is required. Children must be accompanied by adults.',
  },
];

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('food-veg-jain');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
      id="faqs"
    >
      {/* Side-by-Side Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Heading + Have a Unique Query Helpdesk Banner */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#755a26]"></span>
              <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
                Guidance & Policies
              </span>
            </div>
            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-[#1a1c1a] font-serif uppercase tracking-tight leading-tight">
              Questions, Answered.
            </h2>
            <p className="mt-3 font-body-md text-xs sm:text-sm text-[#404848] leading-relaxed font-light">
              Essential information regarding reservations, dining preferences, beach proximity, driving routes, and resort policies.
            </p>
          </div>

          {/* Helpdesk Card */}
          <motion.div
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="mt-8 sm:mt-10 p-6 sm:p-7 rounded-3xl bg-[#0f1c2e] text-white border border-white/10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#346364]/30 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#ffdea5] text-[10px] font-label-caps tracking-widest uppercase font-semibold mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffdea5] animate-pulse"></span>
                Dedicated Resident Helpdesk
              </div>

              <h3 className="font-headline-sm text-lg sm:text-xl font-serif text-white font-semibold">
                Have a Unique Query Not Covered Here?
              </h3>

              <p className="text-xs text-white/80 mt-2 leading-relaxed">
                Our resident hosts and front concierge desk at Kelva Beach are ready to assist with group bookings, dietary requests, or special arrangements.
              </p>

              <div className="mt-5 pt-4 border-t border-white/15 space-y-2 text-xs">
                <div className="flex items-center gap-2.5 text-white/90">
                  <span className="material-symbols-outlined text-[#ffdea5] text-[18px]">call</span>
                  <a href="tel:+919923895055" className="hover:text-[#ffdea5] font-semibold text-sm transition-colors">
                    +91 99238 95055
                  </a>
                </div>

                <div className="flex items-center gap-2.5 text-white/70 text-[11px]">
                  <span className="material-symbols-outlined text-[#ffdea5] text-[16px]">schedule</span>
                  <span>Mon – Sun: 7:00 AM – 11:00 PM</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch gap-2.5">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20have%20a%20specific%20question%20regarding%20a%20stay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-label-caps text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 text-center shadow-md"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Ask Concierge on WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Accordion List */}
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
          className="lg:col-span-7 space-y-3.5"
        >
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className="bg-white rounded-2xl border border-[#e3e2e0]/80 overflow-hidden shadow-xs hover:border-[#346364]/40 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                  type="button"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#f4f3f1] text-[#755a26] font-label-caps text-[10px] uppercase tracking-wider font-semibold w-fit">
                      {faq.category}
                    </span>
                    <span className="font-headline-sm text-sm sm:text-base font-serif text-[#1a1c1a] font-medium pt-1">
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

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#404848] leading-relaxed border-t border-[#e3e2e0]/40 mt-1">
                        <p className="pt-3.5 font-light">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};
