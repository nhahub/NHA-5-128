import React from "react";
import { Link } from "react-router-dom";

export default function HungryBanner() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-30">
      <div className="relative rounded-[20px] bg-[#F2DFC2] px-6 sm:px-10 py-9 sm:py-10 overflow-hidden shadow-[0_6px_16px_rgba(30,30,30,0.14)] text-center">
        {/* Top-left organic orange wave + dashed accent */}
        <svg
          aria-hidden="true"
          viewBox="0 0 380 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none select-none absolute top-0 left-0 w-[230px] sm:w-[320px] h-[120px] sm:h-[160px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0H295C245 24 212 72 156 76C106 80 74 52 38 96C20 118 9 138 0 154V0Z"
            fill="#E35922"
          />
          <path
            d="M326 0C272 34 234 90 170 95C114 99 78 68 38 118C18 144 7 168 0 186"
            stroke="#E35922"
            strokeWidth="2.4"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>

        {/* Bottom-right organic orange wave + dashed accent */}
        <svg
          aria-hidden="true"
          viewBox="0 0 380 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none select-none absolute bottom-0 right-0 w-[230px] sm:w-[320px] h-[120px] sm:h-[160px]"
          preserveAspectRatio="none"
        >
          <path
            d="M85 190C135 166 168 118 224 114C274 110 306 138 342 94C360 72 371 52 380 36V190H85Z"
            fill="#E35922"
          />
          <path
            d="M54 190C108 156 146 100 210 95C266 91 302 122 342 72C362 46 373 22 380 4"
            stroke="#E35922"
            strokeWidth="2.4"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-[32px] sm:text-[38px] font-bold text-[#1E1E1E] leading-tight mb-2">
            Hungry Already?
          </h2>

          <p className="font-sans text-[16px] sm:text-[18px] text-savora-gray-text/80 max-w-[480px] mb-6">
            Explore our menu or grab an exclusive promo code on your first order
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <Link
              to="/menu"
              className="h-[42px] px-6 rounded-[8px] bg-[#E35922] hover:opacity-95 text-white font-sans text-[16px] font-medium inline-flex items-center justify-center shadow-[0_3px_8px_rgba(227,89,34,0.22)] transition-all duration-200 active:scale-[0.98]"
            >
              Explore Menu
            </Link>

            <Link
              to="/offers"
              className="h-[42px] px-6 rounded-[8px] bg-transparent hover:bg-[#E35922]/8 text-[#E35922] border border-[#E35922] font-sans text-[16px] font-medium inline-flex items-center justify-center transition-all duration-200 active:scale-[0.98]"
            >
              View Offers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}