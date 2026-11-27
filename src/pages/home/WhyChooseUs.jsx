import React from "react";
import Title from "../../components/Title";
import deliveryImg from "../../assets/images/delivery.png";
import ingredientsImg from "../../assets/images/Ingredients.png";
import chefImg from "../../assets/images/Chef.png";

const FEATURES = [
  {
    title: "Superfast Delivery",
    description: "Hot & fresh to your door within 30 minutes.",
    image: deliveryImg,
  },
  {
    title: "Fresh Ingredients",
    description: "Daily organic sourcing and strict quality checks.",
    image: ingredientsImg,
  },
  {
    title: "Expert Chefs",
    description: "Crafted with passion by expert culinary pros.",
    image: chefImg,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full px-30 mt-30 text-center">
      <div className="mb-12">
        <Title title="Why Choose Savora" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {FEATURES.map((feat) => (
          <div key={feat.title} className="flex flex-col items-center">
            <div className="w-60 h-60 sm:w-65 sm:h-65 rounded-full bg-[#F0D9B5] flex items-center justify-center p-4 mb-6 shadow-xs transition-transform duration-300 hover:scale-[1.03]">
              <img
                src={feat.image}
                alt={feat.title}
                className="w-full h-full object-contain select-none"
              />
            </div>
            <h3 className="font-serif text-[32px] font-bold text-savora-black mb-2">
              {feat.title}
            </h3>
            <p className="font-sans text-[22px] text-savora-gray-text max-w-[260px] leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;