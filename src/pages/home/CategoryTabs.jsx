import React from "react";
import Title from "../../components/Title";

const CATEGORIES = [
  { id: "All", label: "All", emoji: "" },
  { id: "Fast Food", label: "Fast Food", emoji: "🍔" },
  { id: "Appetizers", label: "Appetizers", emoji: "🍟" },
  { id: "Baked Goods", label: "Baked Goods", emoji: "🥐" },
  { id: "Desserts", label: "Desserts", emoji: "🍰" },
  { id: "Drinks", label: "Drinks", emoji: "🍹" },
];

const CategoryTabs = ({ activeCategory, onSelectCategory }) => {
  return (
    <div className="py-0 px-30">
      <Title title="Browse by Category" />

      <div className="mt-12 flex items-center justify-center gap-[30px] w-full">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelectCategory(cat.id)}
              className={`h-[58px] px-5 rounded-[50px] text-[18px] font-sans font-bold flex items-center justify-center gap-3 cursor-pointer border whitespace-nowrap transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-savora-orange/40 ${
                isActive
                  ? "bg-savora-orange text-white border-savora-orange shadow-[0_6px_16px_rgba(227,89,34,0.28)]"
                  : "bg-white text-savora-gray-text border-savora-border/40 hover:border-savora-orange hover:text-savora-black hover:-translate-y-0.5 hover:shadow-xs"
              }`}
            >
              {cat.emoji && (
                <span className="transition-transform duration-200 group-hover:scale-110">
                  {cat.emoji}
                </span>
              )}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;