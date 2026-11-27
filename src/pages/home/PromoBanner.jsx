import React from "react";
import bannerImg from "../../assets/images/banner.png";

const PromoBanner = ({ onOrderNow }) => {
  return (
    <section className="w-full px-30 mt-30">
      <div className="relative w-full min-h-[250px] bg-[#F0D9B5] rounded-[36px] px-10 py-6 flex items-center justify-center gap-20 shadow-[0_14px_28px_rgba(30,30,30,0.08)] overflow-visible">
        <div className="flex flex-col items-start text-left z-10 shrink-0">
          <span className="text-[20px] font-sans font-bold tracking-[0.14em] uppercase text-savora-orange mb-2">
            EXCLUSIVE OFFER
          </span>

          <h2 className="font-serif text-[46px] font-bold leading-[1.1] text-savora-black mb-2.5">
            Up to <span className="text-savora-black">30% OFF</span>
          </h2>

          <p className="font-sans text-[18px] font-medium text-savora-gray-text mb-5">
            On selected combos
          </p>

          <button
            type="button"
            onClick={onOrderNow}
            className="h-[44px] px-7 rounded-full bg-savora-orange hover:opacity-95 text-white font-sans text-[20px] font-semibold transition-all duration-200 active:scale-[0.98] cursor-pointer shadow-xs"
          >
            Order Now
          </button>
        </div>

        {/* Center Food Image */}
        <div className="flex items-center justify-center shrink-0">
          <img
            src={bannerImg}
            alt="Exclusive Savora Combo Offer"
            className="h-[270px] sm:h-[295px] w-auto object-contain select-none scale-110 transition-transform duration-300"
          />
        </div>

        {/* Right Discount Badge */}
        <div className="w-[160px] h-[160px] rounded-full bg-savora-orange text-savora-black flex flex-col items-center justify-center text-center shrink-0">
          <span className="font-serif text-[48px] font-bold leading-none">
            30%
          </span>
          <span className="font-serif text-[28px] font-bold leading-tight mt-4">
            OFF
          </span>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;