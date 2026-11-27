import React from "react";
import Title from "../../components/Title";
import w1Img from "../../assets/images/w1.png";
import w2Img from "../../assets/images/w2.png";
import w3Img from "../../assets/images/w3.png";

const STEPS = [
  {
    id: "step-1",
    title: "Choose Your Craving",
    description:
      "Browse our curated menu of burgers, pizzas, desserts, and combos",
    image: w1Img,
  },
  {
    id: "step-2",
    title: "Freshly Prepared",
    description:
      "Our kitchen starts cooking your meal the moment you place your order",
    image: w2Img,
  },
  {
    id: "step-3",
    title: "Delivered Hot",
    description:
      "Track your rider in real time and enjoy your meal right at your doorstep",
    image: w3Img,
  },
];

function ArchUpArrow({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 54C64 10 148 10 198 48"
        stroke="#E35922"
        strokeWidth="3"
        strokeDasharray="8 8"
        strokeLinecap="round"
      />
      <path
        d="M191 39L202 51L186 53"
        fill="#E35922"
      />
    </svg>
  );
}

function ArchDownArrow({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 76"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 22C64 66 148 66 198 28"
        stroke="#E35922"
        strokeWidth="3"
        strokeDasharray="8 8"
        strokeLinecap="round"
      />
      <path
        d="M186 23L202 25L191 37"
        fill="#E35922"
      />
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-30 text-center">
      <Title title="How It Works" />

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-start mt-12">
        {/* Arrow 1 -> 2: curved upward */}
        <ArchUpArrow className="hidden md:block pointer-events-none select-none absolute top-9 left-[22.5%] w-[21%] h-16 z-10" />

        {/* Arrow 2 -> 3: curved downward */}
        <ArchDownArrow className="hidden md:block pointer-events-none select-none absolute top-11 right-[22.5%] w-[21%] h-16 z-10" />

        {STEPS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 mb-5 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain select-none"
              />
            </div>

            <h3 className="font-serif text-[28px] font-bold text-savora-black mb-2">
              {item.title}
            </h3>

            <p className="font-sans text-[20px] text-savora-gray-text max-w-[260px] leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}