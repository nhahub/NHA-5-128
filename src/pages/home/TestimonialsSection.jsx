import React from "react";
import { Star } from "lucide-react";
import Title from "../../components/Title";
import customer1Img from "../../assets/images/C1.png";
import customer2Img from "../../assets/images/C2.png";
import customer3Img from "../../assets/images/C3.png";

const TESTIMONIALS = [
  {
    name: "Sara Ahmed",
    image: customer1Img,
    quote:
      "The croissant combo with coffee is a game changer. Super fresh ingredients!",
  },
  {
    name: "Karim Mohamed",
    image: customer2Img,
    quote:
      "Fast delivery and amazing packaging. Savora is my new go-to for lunch breaks.",
  },
  {
    name: "Ali Fathy",
    image: customer3Img,
    quote:
      "The pepperoni pizza crust is amazing, and it arrived piping hot!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full px-30 py-14">
      <div className="mb-12">
        <Title title="What Our Customers Say" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.name}
            className="bg-savora-orange text-white rounded-[36px] px-7 py-7 flex items-center gap-5 shadow-[0_4px_4px_rgba(30,30,30,0.12)] transition-transform duration-200 hover:-translate-y-1"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 rounded-full object-cover shrink-0 border-2 border-white/40"
            />

            <div className="flex flex-col items-start text-left min-w-0">
              <h3 className="font-serif text-[24px] font-bold text-white! leading-snug mb-1">
                {item.name}
              </h3>

              <div
                className="flex items-center gap-0.5 text-savora-amber mb-2.5"
                aria-label="5 out of 5 stars"
              >
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>

              <p className="font-sans text-[16px] text-white/95 leading-[1.45]">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;