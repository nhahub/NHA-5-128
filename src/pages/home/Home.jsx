import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import CategoryTabs from "./CategoryTabs";
import PromoBanner from "./PromoBanner";
import WhyChooseUs from "./WhyChooseUs";
import TestimonialsSection from "./TestimonialsSection";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/menu");
  };

  const handleOrderNow = () => {
    navigate("/offers");
  };

  const handleAddToCart = (item) => {
    // اربطيها بدالة السلة أو الـ Redux/Context لو جاهزة
    console.log("Added to cart:", item);
  };

  return (
    <div className="min-h-screen text-[#2D2420]">
      <HeroSection />

     
        <CategoryTabs
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />
       

      <PromoBanner onOrderNow={handleOrderNow} />
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  );
};

export default Home;