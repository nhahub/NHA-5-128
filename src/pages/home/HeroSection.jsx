import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Star, Zap } from 'lucide-react';
import heroFoodImg from '../../assets/images/hero-food.png';
import customer1Img from '../../assets/images/C1.png';
import customer2Img from '../../assets/images/C2.png';
import customer3Img from '../../assets/images/C3.png';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      navigate('/menu');
      return;
    }
    navigate(`/menu?search=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <section className="w-full pt-6 pb-16 md:pt-10 md:pb-24 px-4 md:px-8 overflow-x-clip">
      <style>{`
        @keyframes savoraHeroPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.025);
          }
        }
        @keyframes savoraBadgeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-hero-food-pulse {
          animation: savoraHeroPulse 6s ease-in-out infinite;
          will-change: transform;
        }
        .animate-badge-float-slow {
          animation: savoraBadgeFloat 4.5s ease-in-out infinite;
          will-change: transform;
        }
        .animate-badge-float-delayed {
          animation: savoraBadgeFloat 5.2s ease-in-out 1.2s infinite;
          will-change: transform;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-1">
        
        {/* Left Column */}
        <div className="lg:col-span-6 flex flex-col items-start lg:pr-2">
          
          {/* Top Badge */}
          <div className="inline-flex items-center mt-10 gap-2 bg-savora-amber/20 px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-savora-amber"></span>
            <span className="font-sans text-[18px] font-medium text-savora-amber leading-none">
              Craving Something Delicious?
            </span>
          </div>

          {/* Main Headline - Larger */}
          <h1 className="font-serif text-[48px] sm:text-[60px] lg:text-[84px] font-bold leading-[1.08] text-savora-black mb-5">
            Feel The <span className="text-savora-orange">Taste</span>
            <br />
            Order <span className="text-savora-orange">&amp;</span> Savor
          </h1>

          {/* Subtitle - Larger */}
          <p className="font-sans text-[18px] sm:text-[20px] leading-[1.65] text-savora-gray-text max-w-[490px] mb-7">
            Skip the wait, savor the flavor. Get mouth-watering meals from your favorite restaurants delivered straight to your doorstep in minutes.
          </p>

          {/* Search Pill Bar */}
          <form
            onSubmit={handleSearch}
            className="w-full max-w-[495px] h-[66px] bg-white rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.06)] pl-6 pr-2.5 flex items-center justify-between gap-3 mb-7"
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Enter your delivery address"
              aria-label="Search meals or restaurants"
              className="w-full bg-transparent text-savora-black placeholder:text-savora-border font-sans text-[18px] outline-none"
            />
            <button
              type="submit"
              className="h-[48px] px-6 rounded-full bg-savora-orange hover:bg-savora-orange/90 text-white font-sans font-medium text-[15px] inline-flex items-center gap-2 shrink-0 transition-all cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </button>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Link
              to="/menu"
              className="h-[52px] px-8 rounded-full bg-savora-orange hover:bg-savora-orange/90 text-white font-sans font-medium text-[15px] inline-flex items-center justify-center shadow-[0_10px_22px_rgba(227,89,34,0.25)] transition-all"
            >
              Order Now
            </Link>

            <button
              type="button"
              onClick={() => {
                const section = document.getElementById('how-it-works');
                if (section) section.scrollIntoView({ behavior: 'smooth' });
              }}
              className="h-[52px] px-7 rounded-full bg-white hover:bg-savora-amber/10 text-savora-orange border border-savora-orange font-sans font-medium text-[15px] inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Play size={15} className="fill-savora-orange text-savora-orange" />
              <span>Watch Video</span>
            </button>
          </div>

          {/* Happy Customers Proof */}
          <div className="flex items-center gap-3.5">
            <div className="flex -space-x-2.5">
              <img
                src={customer1Img}
                alt="Happy customer 1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src={customer2Img}
                alt="Happy customer 2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
              <img
                src={customer3Img}
                alt="Happy customer 3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            </div>

            <p className="font-sans text-[18px] text-savora-black">
              <span className="font-bold">12K+</span>{' '}
              <span className="text-savora-gray-text">Happy Customers</span>
            </p>

            <div className="flex items-center gap-0.5 text-savora-amber">
              <Star size={16} className="fill-savora-amber text-savora-amber" />
              <Star size={16} className="fill-savora-amber text-savora-amber" />
              <Star size={16} className="fill-savora-amber text-savora-amber" />
              <Star size={16} className="fill-savora-amber text-savora-amber" />
              <Star size={16} className="fill-savora-amber text-savora-amber" />
            </div>
          </div>
        </div>

        {/* Right Column: Hero Food Image + Translucent Floating Badges */}
        <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[680px] lg:scale-105 origin-right">
            <img
              src={heroFoodImg}
              alt="Delicious Pizza, Burger, Pastries and Drinks"
              className="w-full h-auto object-contain select-none animate-hero-food-pulse"
            />

            {/* Floating Rating Badge (Top above Pizza) */}
            <div className="bg-white/85 backdrop-blur-md rounded-[22px] shadow-[0_14px_30px_rgba(0,0,0,0.07)] px-5 py-3.5 flex flex-col items-center justify-center min-w-[114px] border border-white/60 absolute top-9 right-[62%] sm:top-10 sm:right-[66%] animate-badge-float-slow">
              <div className="flex items-center gap-1.5">
                <Star size={17} className="fill-savora-amber text-savora-amber" />
                <span className="font-sans text-[18px] font-bold text-savora-black">
                  4.8
                </span>
              </div>
              <span className="font-sans text-[16px] text-savora-gray-text mt-0.5">
                Rating
              </span>
            </div>

            {/* Floating Fast Delivery Badge (Bottom Right) */}
            <div className="bg-white/85 backdrop-blur-md rounded-[22px] shadow-[0_14px_30px_rgba(0,0,0,0.07)] px-6 py-4 flex flex-col items-center justify-center min-w-[144px] border border-white/60 absolute bottom-2 right-1 sm:bottom-5 sm:right-2 animate-badge-float-delayed">
              <div className="flex items-center gap-1.5 mb-1">
                <Zap size={16} className="fill-savora-amber text-savora-amber" />
                <span className="font-sans text-[13px] font-medium text-savora-gray-text">
                  Fast Delivery
                </span>
              </div>
              <span className="font-sans text-[21px] font-bold text-savora-black leading-tight">
                20-30
              </span>
              <span className="font-sans text-[13px] text-savora-gray-text mt-0.5">
                Mins
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}