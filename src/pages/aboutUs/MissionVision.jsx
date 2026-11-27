import React from "react";

export default function MissionVision() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-30 mt-30">
      <div className="relative rounded-[20px] bg-[#F2DFC2] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 overflow-hidden shadow-[0_6px_16px_rgba(30,30,30,0.14)]">
        {/* Bottom-left organic orange wave + dashed accent */}
        <svg
          aria-hidden="true"
          viewBox="0 0 360 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none select-none absolute bottom-0 left-0 w-[230px] sm:w-[300px] h-[115px] sm:h-[150px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0 76C48 72 78 122 128 134C178 146 210 116 258 145C282 160 298 171 312 180H0V76Z"
            fill="#E35922"
          />
          <path
            d="M0 55C54 51 86 105 138 117C190 129 224 98 274 129C304 148 324 165 342 180"
            stroke="#E35922"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>

        {/* Top-right organic orange wave + dashed accent */}
        <svg
          aria-hidden="true"
          viewBox="0 0 420 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer-events-none select-none absolute top-0 right-0 w-[260px] sm:w-[360px] h-[115px] sm:h-[150px]"
          preserveAspectRatio="none"
        >
          <path
            d="M178 0C205 42 246 86 296 80C342 74 368 24 420 46V0H178Z"
            fill="#E35922"
          />
          <path
            d="M150 0C180 54 228 106 286 99C338 93 368 42 420 68"
            stroke="#E35922"
            strokeWidth="2.5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
        </svg>

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Our Mission */}
          <div className="md:pl-10 lg:pl-14 text-left">
            <h3 className="font-serif text-[20px] sm:text-[22px] font-bold tracking-[0.02em] uppercase text-[#1E1E1E] mb-2">
              OUR MISSION
            </h3>
            <p className="font-sans text-[13.5px] sm:text-[14px] font-medium text-[#2A2A2A]/90 leading-[1.55] max-w-[360px]">
              To make fresh, chef-crafted comfort food accessible, affordable,
              and effortlessly delivered to every table.
            </p>
          </div>

          {/* Center Vertical Divider */}
          <div
            aria-hidden="true"
            className="hidden md:block w-[2px] h-30 bg-[#E35922]/75 mx-auto"
          />

          {/* Our Vision */}
          <div className="md:pl-4 lg:pl-6 text-left">
            <h3 className="font-serif text-[20px] sm:text-[22px] font-bold tracking-[0.02em] uppercase text-[#1E1E1E] mb-2">
              OUR VISION
            </h3>
            <p className="font-sans text-[13.5px] sm:text-[14px] font-medium text-[#2A2A2A]/90 leading-[1.55] max-w-[370px]">
              To become the most trusted food delivery experience where quality,
              speed, and hospitality meet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}