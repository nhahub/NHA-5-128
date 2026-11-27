import React from "react";
import Title from "../../components/Title";

const FAQ_ITEMS = [
  {
    id: "track-order",
    question: "How can I track my order?",
    answer:
      "Once your order is confirmed, you can follow live status updates until it reaches your door.",
  },
  {
    id: "modify-cancel",
    question: "Can I modify or cancel my order?",
    answer:
      "You can reach out to support right away before the kitchen starts preparing your meal.",
  },
  {
    id: "promo-codes",
    question: "Do you offer promo codes?",
    answer:
      "Yes! Check our Offers page for active discounts, bundles, and seasonal deals.",
  },
  {
    id: "delivery-time",
    question: "How fast is average delivery?",
    answer:
      "Most orders arrive hot and fresh within 25 to 35 minutes depending on your area.",
  },
];

export default function QuickAnswers() {
  return (
    <section className="w-full bg-white mt-30 px-4 sm:px-8 lg:px-30 pb-8 pt-0.5 sm:pb-30">
      <div className="max-w-[1500px] mx-auto">
        <div className="text-center mb-12">
          <Title title="Quick Answers to Common Questions" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 text-left">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F6E2C4] rounded-[12px] px-7 py-6 border border-savora-amber transition-transform duration-200 hover:-translate-y-0.5"
            >
              <h3 className="font-serif text-[20px] sm:text-[22px] font-bold text-[#1E1E1E] mb-2">
                {item.question}
              </h3>

              <p className="font-sans text-[16px] sm:text-[18px] text-[#3A3A3A] leading-relaxed max-w-[600px]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}