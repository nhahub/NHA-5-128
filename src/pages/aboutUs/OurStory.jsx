import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

import pastaImg from "../../assets/images/Pasta.png";
import potatoImg from "../../assets/images/potato.png";
import burgerImg from "../../assets/images/burger.png";
import chef2Img from "../../assets/images/chef2.png";

const STATS = [
  { value: "50K+", label: "Happy Customers", hasStar: false },
  { value: "25 Mins", label: "Average Delivery", hasStar: false },
  { value: "4.9", label: "Customer Rating", hasStar: true },
];

export default function OurStory() {
  const leftColRef = useRef(null);
  const badgeRef = useRef(null);
  const [gridHeight, setGridHeight] = useState(null);

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 1024 || !leftColRef.current || !badgeRef.current) {
        setGridHeight(null);
        return;
      }
      const leftRect = leftColRef.current.getBoundingClientRect();
      const badgeRect = badgeRef.current.getBoundingClientRect();
      const exactHeight = Math.round(leftRect.bottom - badgeRect.top);
      if (exactHeight > 0) {
        setGridHeight(exactHeight);
      }
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    if (leftColRef.current) observer.observe(leftColRef.current);
    if (badgeRef.current) observer.observe(badgeRef.current);
    window.addEventListener("resize", updateHeight);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Copy & Stats */}
        <div ref={leftColRef} className="lg:col-span-6 flex flex-col items-start text-left">
          <div
            ref={badgeRef}
            className="inline-flex items-center mt-10 gap-2 bg-savora-amber/20 px-3.5 py-1.5 rounded-full mb-5 transition-transform duration-300 hover:scale-[1.03]"
          >
            <span className="w-2 h-2 rounded-full bg-savora-amber"></span>
            <span className="font-sans text-[18px] font-medium text-savora-amber leading-none">
              Our Story
            </span>
          </div>

          <h1 className="font-serif text-[40px] sm:text-[52px] font-bold leading-[1.12] text-savora-black mb-5">
            Bringing Restaurant-
            <span className="text-savora-orange">Quality</span> Flavors Straight to
            Your Door
          </h1>

          <p className="font-sans font-semibold text-[16px] sm:text-[16px] text-savora-gray-text/80 leading-[1.65] max-w-[520px] mb-7">
            At Savora, we believe great food shouldn&apos;t require waiting in
            line. Founded with a passion for fresh ingredients and fast
            delivery, we connect food lovers with handcrafted meals prepared
            fresh upon every order.
          </p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-[520px]">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl px-3.5 py-4.5 border border-savora-border/25 shadow-[0_4px_12px_rgba(30,30,30,0.1)] hover:shadow-[0_10px_22px_rgba(30,30,30,0.14)] hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-center"
              >
                <div className="flex items-center gap-1.5 font-sans text-[24px] sm:text-[28px] font-bold text-savora-gray-text leading-tight">
                  <span>{stat.value}</span>
                  {stat.hasStar && (
                    <Star
                      size={19}
                      className="fill-yellow-400 text-yellow-400 shrink-0"
                    />
                  )}
                </div>
                <span className="font-sans text-[15px] text-savora-gray-text/80 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right 2x2 Photo Grid cropped cleanly to match stats bottom */}
        <div
          style={gridHeight ? { height: `${gridHeight}px` } : undefined}
          className="lg:col-span-6 lg:mt-10 grid grid-cols-2 gap-4 overflow-hidden"
        >
          {/* Left Column: tall pasta + cropped burger */}
          <div className="flex flex-col gap-4 h-full min-h-0">
            <div className="group basis-[58%] min-h-0 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(30,30,30,0.08)] hover:shadow-[0_10px_22px_rgba(30,30,30,0.14)] transition-shadow duration-300">
              <img
                src={pastaImg}
                alt="Fresh pasta dish"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="group basis-[42%] min-h-0 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(30,30,30,0.08)] hover:shadow-[0_10px_22px_rgba(30,30,30,0.14)] transition-shadow duration-300">
              <img
                src={burgerImg}
                alt="Gourmet burger"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: shorter fries + cropped chef2 */}
          <div className="flex flex-col gap-4 h-full min-h-0">
            <div className="group basis-[34%] min-h-0 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(30,30,30,0.08)] hover:shadow-[0_10px_22px_rgba(30,30,30,0.14)] transition-shadow duration-300">
              <img
                src={potatoImg}
                alt="Crispy golden fries"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div className="group basis-[66%] min-h-0 rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(30,30,30,0.08)] hover:shadow-[0_10px_22px_rgba(30,30,30,0.14)] transition-shadow duration-300">
              <img
                src={chef2Img}
                alt="Savora chef seasoning dish"
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}