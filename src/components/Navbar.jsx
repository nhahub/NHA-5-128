import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import SavoraLogo from '../assets/icons/SavoraLogo.svg';

export default function Navbar({ cartCount = 0, onOpenSignIn }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Offers', path: '/offers' },
    { name: 'About Us', path: '/aboutUs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full pt-7 px-4">
      <nav className="max-w-[1200px] mx-auto h-[88px] bg-white rounded-full shadow-[0_12px_25px_0_rgba(0,0,0,0.16)] px-8 md:px-11 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center shrink-0">
          <img
            src={SavoraLogo}
            alt="Savora Logo"
            className="h-11 md:h-12 w-auto object-contain block -translate-y-[4px]"
          />
        </Link>

        {/* Desktop Links - Centered */}
        <ul className="hidden md:flex items-center justify-center gap-8 lg:gap-10 font-sans text-[17px] font-medium">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-savora-orange font-semibold transition-colors'
                    : 'text-savora-gray-text hover:text-savora-orange transition-colors'
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Actions: Search, Cart, Sign In */}
        <div className="flex items-center gap-5 md:gap-6 shrink-0">
          <button
            type="button"
            aria-label="Search"
            className="flex items-center justify-center text-savora-black hover:text-savora-orange transition-colors cursor-pointer"
          >
            <Search size={25} strokeWidth={2} />
          </button>

          <Link
            to="/cart"
            aria-label="Shopping Cart"
            className="relative flex items-center justify-center text-savora-black hover:text-savora-orange transition-colors"
          >
            <ShoppingCart size={25} strokeWidth={2} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2.5 bg-savora-red text-white text-[11px] font-bold min-w-[19px] h-[19px] px-1 rounded-full flex items-center justify-center leading-none">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={onOpenSignIn}
            className="hidden sm:inline-flex items-center justify-center bg-savora-orange hover:bg-savora-orange/90 text-white font-sans font-medium text-[15px] px-6 py-2.5 rounded-full transition-all cursor-pointer"
          >
            Sign In
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-savora-black p-1"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[100px] left-0 right-0 bg-white rounded-3xl shadow-xl p-6 flex flex-col gap-4 md:hidden z-50">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'text-savora-orange font-semibold text-lg'
                    : 'text-savora-gray-text font-medium text-lg'
                }
              >
                {link.name}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onOpenSignIn) onOpenSignIn();
              }}
              className="bg-savora-orange text-white font-medium py-3 rounded-full text-center mt-2"
            >
              Sign In
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}