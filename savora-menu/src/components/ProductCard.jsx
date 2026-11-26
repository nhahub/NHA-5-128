import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAddToCart, onToggleFavorite }) {
  const name =
    typeof product.name === 'string' ? product.name : product.name?.en || '';

  const description =
    typeof product.description === 'string'
      ? product.description
      : product.description?.en || '';

  const badgeText = product.badge || product.tag;

  return (
    <Link
      to={`/product/${product.id}`}
      className="relative block w-full max-w-[290px] h-[340px] sm:h-[380px] rounded-[36px] sm:rounded-[50px] overflow-hidden shadow-md group mx-auto select-none"
    >
     
      <img
        src={product.image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

     
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b1206]/95 via-[#2b1206]/50 to-transparent" />

     
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] backdrop-blur-sm"
        style={{
          maskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 40%, transparent 100%)',
        }}
      />

     
      <div className="absolute top-[18px] sm:top-[28px] left-[16px] sm:left-[20px] right-[16px] sm:right-[20px] flex items-center justify-between z-10">
        {badgeText ? (
          <span className="bg-[#C20000] text-white font-playfair font-bold text-xs sm:text-sm px-2.5 sm:px-3 py-1 rounded-full">
            {badgeText}
          </span>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (onToggleFavorite) onToggleFavorite(product);
          }}
          aria-label="Favorite"
          className="text-white text-2xl sm:text-3xl leading-none hover:scale-110 transition-transform"
        >
          {product.isFavorite ? '♥' : '♡'}
        </button>
      </div>

     
      <div className="absolute bottom-[18px] sm:bottom-[28px] left-[16px] sm:left-[20px] right-[16px] sm:right-[20px] text-white z-10">
        <h3 className="font-playfair font-bold text-[21px] sm:text-[26px] leading-tight line-clamp-1">
          {name}
        </h3>

        <p className="font-dmsans text-[13px] sm:text-[15px] leading-snug mt-1 line-clamp-2 text-gray-100">
          {description}
        </p>

        <p className="font-dmsans text-[13px] sm:text-[15px] mt-1.5 sm:mt-2">
          ⭐ {product.rating} ({product.reviews})
        </p>

        <div className="flex items-center justify-between mt-1.5 sm:mt-1">
          <span className="font-dmsans font-bold text-[22px] sm:text-[28px]">
            ${Number(product.price).toFixed(2)}
          </span>

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (onAddToCart) {
                onAddToCart(product);
              } else {
                console.log('added', name);
              }
            }}
            aria-label="Add item"
            className="bg-[#E35922] hover:bg-[#cf4d1b] active:scale-95 w-[44px] h-[44px] sm:w-[54px] sm:h-[54px] rounded-full text-2xl sm:text-4xl leading-none flex items-center justify-center transition-all shadow-md"
          >
            +
          </button>
        </div>
      </div>
    </Link>
  );
}