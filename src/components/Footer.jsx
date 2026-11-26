import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SavoraLogo from '../assets/icons/SavoraLogo.svg';
import FacebookIcon from '../assets/icons/f.svg';
import InstagramIcon from '../assets/icons/insta.svg';
import TwitterIcon from '../assets/icons/tw.svg';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleJoin = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-white mt-16 border-t border-savora-border/15">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12 pt-12 pb-8">
        {/* Main Footer Columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-16 pb-12">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="flex flex-col items-start gap-4 max-w-[290px]">
            <Link to="/" className="inline-flex items-center">
              <img
                src={SavoraLogo}
                alt="Savora Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="font-sans text-[15px] leading-relaxed text-savora-gray-text">
              Delivering gourmet flavors and fresh meals right to your doorstep with love and speed.
            </p>

            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center hover:scale-105 transition-transform"
              >
                <img src={FacebookIcon} alt="Facebook" className="w-full h-full object-contain" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center hover:scale-105 transition-transform"
              >
                <img src={InstagramIcon} alt="Instagram" className="w-full h-full object-contain" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="w-[50px] h-[50px] rounded-full overflow-hidden flex items-center justify-center hover:scale-105 transition-transform"
              >
                <img src={TwitterIcon} alt="X" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="flex flex-col gap-3.5">
            <h3 className="font-serif text-[20px] font-bold text-savora-black">
              Explore
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-[15px] text-savora-gray-text">
              <li>
                <Link to="/" className="hover:text-savora-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-savora-orange transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-savora-orange transition-colors">
                  Special Combos
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="hover:text-savora-orange transition-colors">
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="flex flex-col gap-3.5">
            <h3 className="font-serif text-[20px] font-bold text-savora-black">
              Support
            </h3>
            <ul className="flex flex-col gap-3 font-sans text-[15px] text-savora-gray-text">
              <li>
                <Link to="/contact" className="hover:text-savora-orange transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-savora-orange transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="hover:text-savora-orange transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="hover:text-savora-orange transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Join Savora */}
          <div className="flex flex-col gap-3 w-full lg:w-[368px]">
            <h3 className="font-serif text-[20px] font-bold text-savora-black">
              Join Savora
            </h3>
            <p className="font-sans text-[15px] text-savora-gray-text mb-1">
              Get 15% off your first order!
            </p>

            <form onSubmit={handleJoin} className="flex flex-col gap-3.5 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (subscribed) setSubscribed(false);
                }}
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                className="w-full h-[66px] px-5 rounded-[16px] bg-savora-card text-savora-black placeholder:text-savora-border font-sans text-[15px] outline-none focus:ring-2 focus:ring-savora-amber/50 transition-all"
              />

              <button
                type="submit"
                className="w-full h-[54px] rounded-[16px] bg-savora-orange hover:bg-savora-orange/90 text-white font-sans font-medium text-[16px] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Join</span>
                <ArrowRight size={18} strokeWidth={2} />
              </button>

              {subscribed && (
                <p className="text-sm font-medium text-savora-green">
                  Welcome to Savora! Your 15% discount is ready.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-savora-border/20 text-center">
          <p className="font-sans text-[14px] font-medium text-savora-black">
            © 2026 Savora Food Delivery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}