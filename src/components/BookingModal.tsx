import React from 'react';
import { Logo } from './Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkIn: string;
  checkOut: string;
  guests: string;
  suiteType: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  checkIn,
  checkOut,
  guests,
  suiteType,
}) => {
  if (!isOpen) return null;

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
        return 4500;
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

  const durationStr = stayCalculation
    ? `\n• Duration: ${stayCalculation.nights} ${
        stayCalculation.nights === 1 ? 'Night' : 'Nights'
      }\n• Estimated Tariff: ₹${stayCalculation.total.toLocaleString(
        'en-IN'
      )} (@ ₹${stayCalculation.rate.toLocaleString('en-IN')}/night)`
    : '';

  const whatsappMessage = encodeURIComponent(
    `Hello Beyond Sands Retreat, I would like to check availability for:\n• Suite: ${suiteType}\n• Check-In: ${checkIn}\n• Check-Out: ${checkOut}${durationStr}\n• Guests: ${guests}\n\nPlease share confirmation and payment details.`
  );

  const emailSubject = encodeURIComponent(
    `Sanctuary Reservation Inquiry - ${suiteType} (${checkIn} to ${checkOut})`
  );
  const emailBody = encodeURIComponent(
    `Hello Beyond Sands Concierge,\n\nI would like to inquire about reserving a stay with the following details:\n\nSuite Type: ${suiteType}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}${durationStr}\nGuests: ${guests}\n\nPlease confirm availability and payment terms.\n\nThank you!`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 transition-opacity duration-300"
      id="booking-modal"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-lg w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl relative border border-[#e3e2e0]/40 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-5 sm:top-6 right-5 sm:right-6 text-[#404848] hover:text-[#1a1c1a] w-8 h-8 rounded-full bg-[#efeeeb] flex items-center justify-center transition-colors cursor-pointer"
          onClick={onClose}
          type="button"
          aria-label="Close booking modal"
        >
          <span className="material-symbols-outlined text-[18px]">close</span>
        </button>

        <Logo variant="horizontal" className="mb-4" />

        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#346364] animate-pulse"></span>
          <span className="font-label-caps text-xs text-[#755a26] uppercase tracking-widest font-semibold">
            Instant Concierge Desk
          </span>
        </div>

        <h3 className="font-headline-md text-xl sm:text-2xl text-[#1a1c1a] font-serif">
          Confirm Availability & Tariff
        </h3>
        <p className="mt-2 font-body-sm text-xs sm:text-sm text-[#404848]">
          Your stay preferences and calculated tariff breakdown have been prepared. Connect
          instantly with our Kelva retreat host:
        </p>

        {/* Selected Details Summary */}
        <div className="mt-4 sm:mt-6 p-4 rounded-xl bg-[#f4f3f1] space-y-2 text-xs sm:text-sm border border-[#e3e2e0]/40">
          <div className="flex justify-between">
            <span className="text-[#404848]">Selected Residence:</span>
            <span className="font-medium text-[#1a1c1a]">{suiteType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#404848]">Dates:</span>
            <span className="font-medium text-[#1a1c1a]">
              {checkIn || 'Not specified'} → {checkOut || 'Not specified'}
            </span>
          </div>

          {stayCalculation && (
            <div className="flex justify-between border-t border-[#e3e2e0]/40 pt-2">
              <span className="text-[#404848]">Calculated Duration:</span>
              <span className="font-semibold text-[#0f1c2e]">
                {stayCalculation.nights} {stayCalculation.nights === 1 ? 'Night' : 'Nights'}
              </span>
            </div>
          )}

          {stayCalculation && (
            <div className="flex justify-between bg-white p-2.5 rounded-lg border border-[#e3e2e0]/60">
              <div>
                <span className="text-xs text-[#755a26] font-label-caps uppercase block">
                  Estimated Total Tariff
                </span>
                <span className="text-[11px] text-[#707978]">
                  @ ₹{stayCalculation.rate.toLocaleString('en-IN')}/night
                </span>
              </div>
              <span className="font-headline-sm text-lg font-serif text-[#0f1c2e] font-bold self-center">
                ₹{stayCalculation.total.toLocaleString('en-IN')}
              </span>
            </div>
          )}

          <div className="flex justify-between">
            <span className="text-[#404848]">Guests:</span>
            <span className="font-medium text-[#1a1c1a]">{guests}</span>
          </div>
          <div className="flex justify-between border-t border-[#e3e2e0]/40 pt-2">
            <span className="text-[#404848]">Location:</span>
            <span className="font-medium text-[#1a1c1a]">
              Opposite Shitaladevi Temple, Kelva Beach
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#404848]">Cuisine:</span>
            <span className="font-medium text-[#1a1c1a]">
              Pure Vegetarian & Jain
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#404848]">Direct WhatsApp:</span>
            <span className="font-medium text-[#1a1c1a]">+91 99238 95055</span>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <a
            className="w-full py-3 sm:py-3.5 rounded-xl bg-[#346364] text-white font-label-caps text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 shadow-md hover:bg-[#4e7c7c] transition-colors font-medium text-center"
            href={`https://wa.me/919923895055?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Reserve via WhatsApp</span>
          </a>

          <a
            className="w-full py-3 sm:py-3.5 rounded-xl bg-[#efeeeb] text-[#1a1c1a] font-label-caps text-xs uppercase tracking-[0.18em] flex items-center justify-center gap-2 hover:bg-[#e9e8e5] transition-colors font-medium text-center"
            href={`mailto:beyondsandsresort@gmail.com?subject=${emailSubject}&body=${emailBody}`}
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            <span>Send Email Inquiry</span>
          </a>
        </div>

        <div className="mt-4 text-center">
          <button
            className="text-xs text-[#404848] hover:text-[#1a1c1a] underline font-label-caps tracking-wider uppercase cursor-pointer"
            onClick={onClose}
            type="button"
          >
            Return to Page
          </button>
        </div>
      </div>
    </div>
  );
};
