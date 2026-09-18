import React from 'react';
import { motion } from 'motion/react';
import { Logo } from './Logo';

interface AboutPageProps {
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

const VALUES = [
  {
    title: 'Heartful Hospitality',
    desc: 'Every guest is welcomed as family, with personalized service that anticipates your needs.',
    icon: 'volunteer_activism',
    tag: 'Care',
  },
  {
    title: 'Coastal Conservation',
    desc: 'We protect and preserve our natural surroundings through sustainable practices and local partnerships.',
    icon: 'park',
    tag: 'Ecosystem',
  },
  {
    title: 'Community Connection',
    desc: 'Supporting local artisans, suppliers, and experiences that celebrate authentic coastal culture.',
    icon: 'diversity_3',
    tag: 'Community',
  },
  {
    title: 'Quiet Excellence',
    desc: 'Understated luxury that speaks through thoughtful details and genuine care.',
    icon: 'spa',
    tag: 'Philosophy',
  },
];

const TEAM = [
  {
    initials: 'PS',
    name: 'Priya Sharma',
    role: 'Founder & Host',
    bio: 'A former city dweller who found peace by the coast and created Beyond Sands to share this tranquility.',
    accent: 'bg-[#346364] text-[#ffdea5]',
  },
  {
    initials: 'RP',
    name: 'Raj Patel',
    role: 'Head of Experiences',
    bio: 'Local expert who curates authentic coastal adventures and cultural connections.',
    accent: 'bg-[#0f1c2e] text-[#faf9f6]',
  },
  {
    initials: 'MS',
    name: 'Maya Singh',
    role: 'Sustainability Manager',
    bio: 'Environmental advocate ensuring our operations protect the coastal ecosystem.',
    accent: 'bg-[#755a26] text-[#ffdea5]',
  },
];

const METRICS = [
  {
    value: '4.8/5',
    label: 'Guest Rating',
    sub: 'Based on verified reviews',
  },
  {
    value: '150+',
    label: 'Happy Families',
    sub: 'Welcomed since inception',
  },
  {
    value: '3',
    label: 'Years of Service',
    sub: 'Crafting coastal memories',
  },
  {
    value: '95%',
    label: 'Return Guests',
    sub: 'Cherished repeat stays',
  },
];

export const AboutPage: React.FC<AboutPageProps> = ({
  onBackToHome,
  onOpenBooking,
}) => {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#1a1c1a] pt-24 pb-20 sm:pb-28">
      {/* Top Breadcrumb & Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#e3e2e0]/60">
          <motion.button
            whileHover={{ x: -3 }}
            onClick={onBackToHome}
            type="button"
            className="inline-flex items-center gap-2 text-xs font-label-caps uppercase tracking-[0.16em] text-[#0f1c2e] hover:text-[#346364] transition-colors py-1.5 px-3 rounded-lg hover:bg-[#efeeeb] cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Back to Home</span>
          </motion.button>

          <div className="flex items-center gap-2 text-xs font-label-caps text-[#707978]">
            <button
              onClick={onBackToHome}
              type="button"
              className="hover:text-[#1a1c1a] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#755a26] font-medium">Our Story</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
        {/* 1. Header / Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <Logo variant="emblem" className="w-12 h-12 mb-3" />
          <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
            The Sanctuary Roots
          </span>
          <h1 className="mt-3 font-headline-lg text-4xl sm:text-5xl lg:text-6xl text-[#1a1c1a] tracking-tight font-serif font-normal">
            Our Story
          </h1>
          <p className="mt-4 font-body-md text-lg sm:text-xl text-[#404848] leading-relaxed font-light">
            Born from a love for coastal serenity and authentic hospitality, Beyond Sands is
            more than a resort—it's a sanctuary.
          </p>
        </motion.div>

        {/* 2. Where it all began & Founder Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[1.5px] bg-[#755a26]"></span>
              <span className="font-label-caps text-xs text-[#755a26] tracking-[0.2em] uppercase font-semibold">
                Where it all began
              </span>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#1a1c1a] leading-snug">
              Beyond Sands was born from a simple revelation: the transformative power of
              coastal tranquility.
            </p>

            <p className="font-body-md text-sm sm:text-base text-[#404848] leading-relaxed">
              Our founder, Priya, discovered this stretch of paradise during a much-needed
              break from city life, and knew others needed to experience this same peace.
            </p>

            <p className="font-body-md text-sm sm:text-base text-[#404848] leading-relaxed">
              What started as a single villa has grown into a thoughtfully curated collection of
              spaces, each designed to honor the natural beauty of our coastal setting while
              providing modern comfort and genuine hospitality.
            </p>

            <p className="font-body-md text-sm sm:text-base text-[#404848] leading-relaxed">
              We believe luxury isn't about excess—it's about the perfect sunset view, the sound
              of palm fronds in the evening breeze, and the warmth of authentic human
              connection.
            </p>
          </div>

          {/* Decorative Manifesto Banner */}
          <div className="lg:col-span-5">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-3xl bg-[#0f1c2e] text-white shadow-xl flex flex-col justify-between h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-40 h-40 rounded-full bg-[#346364]/20 blur-2xl pointer-events-none" />

              <div>
                <Logo variant="stacked" theme="light" className="mb-6" />
                <span className="font-label-caps text-xs uppercase tracking-[0.22em] text-[#ffdea5] font-semibold block text-center">
                  Founder's Reflection
                </span>
                <blockquote className="mt-4 font-serif text-xl sm:text-2xl text-[#faf9f6] italic leading-relaxed text-center">
                  "Luxury isn't about excess—it's about the perfect sunset view, the sound of
                  palm fronds in the evening breeze, and authentic human connection."
                </blockquote>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-label-caps text-xs uppercase tracking-widest text-[#ffdea5] block">
                    Made with love
                  </span>
                  <span className="font-serif text-sm text-white/90">for coastal souls</span>
                </div>
                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#ffdea5]">
                  <span className="material-symbols-outlined text-[20px]">favorite</span>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 3. What We Stand For */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="space-y-8 sm:space-y-10"
        >
          <div>
            <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
              Our Core Principles
            </span>
            <h2 className="mt-2 font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#1a1c1a] tracking-tight font-serif">
              What We Stand For
            </h2>
            <p className="mt-2 font-body-md text-sm sm:text-base text-[#404848] max-w-2xl leading-relaxed">
              Our values guide every decision, from the local ingredients in your breakfast to
              the eco-friendly amenities in your room.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#e3e2e0]/60 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-11 h-11 rounded-xl bg-[#efeeeb] text-[#346364] flex items-center justify-center group-hover:bg-[#346364] group-hover:text-[#ffdea5] transition-colors">
                      <span className="material-symbols-outlined text-[22px]">
                        {val.icon}
                      </span>
                    </span>
                    <span className="font-label-caps text-[10px] uppercase tracking-wider text-[#755a26] font-medium px-2 py-0.5 rounded-full bg-[#efeeeb]">
                      {val.tag}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-lg font-serif text-[#1a1c1a]">
                    {val.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#404848] leading-relaxed">
                    {val.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#e3e2e0]/30 flex items-center gap-1.5 text-[11px] font-label-caps uppercase text-[#755a26]">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  <span>Sanctuary Commitment</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 4. Meet Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="space-y-8 sm:space-y-10"
        >
          <div>
            <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
              The People Behind Your Stay
            </span>
            <h2 className="mt-2 font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-[#1a1c1a] tracking-tight font-serif">
              Meet Our Team
            </h2>
            <p className="mt-2 font-body-md text-sm sm:text-base text-[#404848] max-w-2xl leading-relaxed">
              The passionate people who make Beyond Sands feel like home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TEAM.map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-7 border border-[#e3e2e0]/60 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Monogram Badge */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-2xl ${member.accent} flex items-center justify-center font-serif text-lg sm:text-xl font-bold tracking-wider shadow-sm`}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-headline-sm text-lg sm:text-xl font-serif text-[#1a1c1a]">
                        {member.name}
                      </h3>
                      <span className="font-label-caps text-xs uppercase tracking-wider text-[#755a26] font-medium block mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-[#404848] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e3e2e0]/40 flex items-center gap-2 text-xs text-[#707978]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#346364]"></span>
                  <span>Kelva Sanctuary Team</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 5. Our Journey So Far */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e3e2e0]/60 shadow-xs"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-label-caps text-xs text-[#755a26] tracking-[0.24em] uppercase font-semibold">
              Milestones & Trust
            </span>
            <h2 className="mt-2 font-headline-lg text-2xl sm:text-3xl text-[#1a1c1a] font-serif font-semibold">
              Our Journey So Far
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#e3e2e0]/60">
            {METRICS.map((metric, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="pt-4 sm:pt-0 sm:px-4"
              >
                <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0f1c2e] font-light tracking-tight block">
                  {metric.value}
                </span>
                <span className="font-headline-sm text-sm sm:text-base font-serif text-[#1a1c1a] font-semibold mt-1 block">
                  {metric.label}
                </span>
                <span className="text-xs text-[#707978] mt-0.5 block">{metric.sub}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 6. Become Part of Our Story (CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#0f1c2e] text-white text-center relative overflow-hidden shadow-xl"
        >
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="font-label-caps text-xs uppercase tracking-[0.25em] text-[#ffdea5] font-semibold">
              Your Coastal Escape
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-serif text-white">
              Become Part of Our Story
            </h2>
            <p className="font-body-md text-sm sm:text-base text-white/80 leading-relaxed max-w-xl mx-auto">
              Join the families, couples, and solo travelers who've found their coastal sanctuary
              with us.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenBooking}
                type="button"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#ffdea5] text-[#271900] font-label-caps text-xs uppercase tracking-[0.16em] font-semibold hover:bg-white transition-all shadow-sm cursor-pointer"
              >
                Book Your Stay
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/919923895055?text=Hello%20Beyond%20Sands,%20I%20would%20like%20to%20know%20more%20about%20your%20story%20and%20reserve%20a%20stay"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-label-caps text-xs uppercase tracking-[0.16em] font-medium border border-white/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                <span>Get in Touch</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
