import React from "react";

export default function ContactHero() {
  return (
    <section className="w-full bg-[#F2DFC2] px-4 sm:px-8 lg:px-30 py-12 sm:py-14 text-center">
      <div className="max-w-[680px] mx-auto flex flex-col items-center">
        <span className="inline-block bg-white text-[#E35922] font-sans text-[14px] sm:text-[16px] font-extrabold tracking-[0.12em] uppercase px-4 py-1 rounded-full mb-4">
          GET IN TOUCH
        </span>

        <h1 className="font-serif text-[34px] sm:text-[46px] font-bold text-[#1E1E1E] leading-[1.15] mb-3">
          We&apos;d <span className="text-[#E35922]">Love</span> to Hear From You
        </h1>

        <p className="font-sans text-[16px] font-semibold sm:text-[18px] text-savora-gray-text/80 leading-relaxed max-w-[540px]">
          Have a question about an order, catering, partnerships, or feedback?
          Send us a message and our team will get back to you promptly.
        </p>
      </div>
    </section>
  );
}