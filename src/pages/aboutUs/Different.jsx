import React from "react";
import Title from "../../components/Title";
import i1Icon from "../../assets/icons/i1.svg";
import i2Icon from "../../assets/icons/i2.svg";
import i3Icon from "../../assets/icons/i3.svg";

const DIFFERENT_ITEMS = [
  {
    title: "Fresh Ingredients Daily",
    description:
      "We source locally grown produce and premium cuts every morning—zero frozen shortcuts.",
    icon: i1Icon,
  },
  {
    title: "Lightning-Fast Delivery",
    description:
      "Our smart routing and thermal packaging keep your burgers crispy and pizzas piping hot.",
    icon: i2Icon,
  },
  {
    title: "Crafted by Culinary Pros",
    description:
      "Every recipe is tasted and perfected by experienced chefs who care about every bite.",
    icon: i3Icon,
  },
];

export default function Different() {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-30 text-center">
      <Title title="What Makes Us Different" />
      <p className="font-sans font-semibold text-[14px] sm:text-[18px] text-savora-gray-text mt-2 mb-10">
        Quality, speed, and flavor in every single order
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {DIFFERENT_ITEMS.map((item) => (
          <div
            key={item.title}
            className="bg-white rounded-2xl p-6 border border-savora-border/25 shadow-[0_6px_14px_rgba(30,30,30,0.16)] flex flex-col items-start transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="w-11 h-11 rounded-full overflow-hidden bg-transparent flex items-center justify-center mb-4 shrink-0">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="font-serif text-[18px] font-bold text-savora-black mb-2">
              {item.title}
            </h3>

            <p className="font-sans text-[13.5px] text-savora-gray-text leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}