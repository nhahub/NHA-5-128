import React, { useState, useEffect } from 'react';
import api from '../../helpers/api';
import ProductCard from '../../components/ProductCard';

const categories = [
  { id: 'all', name: { en: 'All' } },
  { id: 'Fast Food', name: { en: '🍔 Fast Food' } },
  { id: 'Appetizers', name: { en: '🍟 Appetizers' } },
  { id: 'Baked Goods', name: { en: '🥐 Baked Goods' } },
  { id: 'Desserts', name: { en: '🍰 Desserts' } },
  { id: 'Drinks', name: { en: '🥤 Drinks' } },
];

const reviewsToNumber = (r) => {
  const n = parseFloat(String(r).replace(/[^0-9.]/g, '')) || 0;
  return String(r).toUpperCase().includes('K') ? n * 1000 : n;
};

const MenuPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  useEffect(() => {
    api
      .get('/menu')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;

    let productNameEn = '';
    let productNameAr = '';

    if (typeof product.name === 'string') {
      productNameEn = product.name;
      productNameAr = product.name;
    } else {
      productNameEn = product.name?.en || '';
      productNameAr = product.name?.ar || '';
    }

    const matchesSearch =
      productNameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      productNameAr.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'least-popular')
      return reviewsToNumber(a.reviews) - reviewsToNumber(b.reviews);
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    return reviewsToNumber(b.reviews) - reviewsToNumber(a.reviews);
  });

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
  };

  const handleToggleFavorite = (product) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-[#F7F3E8] px-4">
        <p className="text-lg sm:text-xl font-bold text-[#E35922] animate-pulse text-center">
          Loading menu... ⏳
        </p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#F7F3E8] py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-x-clip"
      dir="ltr"
    >
      <div className="max-w-[1286px] mx-auto flex flex-col items-center">
        {/* العنوان والوصف */}
        <div className="w-full max-w-[846px] flex flex-col items-center gap-4 sm:gap-[24px] mb-7 sm:mb-10 text-center">
          <h1 className="font-playfair font-bold text-[28px] sm:text-[34px] lg:text-[38px] leading-[110%] lg:leading-[100%] text-[#1E1E1E]">
            Explore Our Menu
          </h1>

          <div className="w-[120px] sm:w-[163px] h-[4px] sm:h-[5px] bg-[#E35922] rounded-full"></div>

          <p className="font-dmsans font-bold text-[16px] sm:text-[20px] lg:text-[24px] leading-[135%] lg:leading-[130%] text-[#525252] px-2">
            Freshly prepared meals crafted with passion, delivered hot to your door.
          </p>
        </div>

      
        <div className="w-full h-[64px] sm:h-[82px] bg-white rounded-[16px] shadow-[0_4px_12px_0_rgba(0,0,0,0.25)] relative flex items-center px-3.5 sm:px-6 mb-6 sm:mb-9">
          <button
            onClick={() => setSearchQuery('')}
            className="text-gray-400 hover:text-gray-600 focus:outline-none mr-2 sm:mr-4 z-10 transition-colors shrink-0"
            type="button"
            aria-label="Clear search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Search for burgers, pizza, desserts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-none focus:outline-none text-left text-gray-800 placeholder-gray-400 font-dmsans text-[15px] sm:text-[20px] lg:text-[22px] leading-[100%] pr-[96px] sm:pr-36 lg:pr-40"
          />

          <button
            type="button"
            className="absolute right-2.5 sm:right-4 bg-[#E35922] hover:bg-[#cf4d1b] text-white w-[88px] sm:w-[120px] lg:w-[136px] h-[44px] sm:h-[54px] rounded-[12px] sm:rounded-[16px] font-dmsans text-[13px] sm:text-[15px] font-semibold flex items-center justify-center gap-1.5 sm:gap-2 transition-all z-10 shadow-sm"
          >
            <span>Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>

        {/* شريط الفلاتر (Categories) + زرار الترتيب (Sort) */}
        <div className="w-full max-w-[1286px] flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4 xl:gap-[76px] mb-7 sm:mb-8 py-2 xl:py-4">
          <div className="w-full xl:w-[1000px] flex items-center justify-start xl:justify-between gap-3 sm:gap-[20px] overflow-x-auto py-2 px-1 shrink-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`h-[48px] sm:h-[61px] ${
                  category.id === 'all'
                    ? 'min-w-[68px] sm:w-[86px] px-4 sm:px-0'
                    : 'px-4 sm:px-7'
                } rounded-[50px] text-[13px] sm:text-[15px] font-dmsans font-bold whitespace-nowrap flex items-center justify-center transition-all duration-200 shadow-[0_4px_12px_0_rgba(0,0,0,0.25)] shrink-0 ${
                  selectedCategory === category.id
                    ? 'bg-[#E35922] text-white'
                    : 'bg-white text-[#1E1E1E] hover:bg-gray-50'
                }`}
              >
                {category.name.en}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-[210px] h-[50px] sm:h-[61px] shrink-0 self-end xl:self-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full h-full appearance-none bg-[#E35922] text-white font-dmsans font-bold text-[14px] sm:text-[15px] pl-4 sm:pl-5 pr-10 rounded-[16px] cursor-pointer focus:outline-none shadow-[0_4px_12px_0_rgba(0,0,0,0.25)]"
            >
              <option value="popular">Sort by: Popular</option>
              <option value="least-popular">Sort by: Least Popular</option>
              <option value="rating">Sort by: Top Rated</option>
              <option value="price-low">Sort by: Price ↑</option>
              <option value="price-high">Sort by: Price ↓</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

       
        {sortedProducts.length > 0 ? (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8 sm:gap-x-7 sm:gap-y-11 lg:gap-x-[42px] lg:gap-y-[56px]">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-14 sm:py-20">
            <p className="text-gray-500 font-dmsans text-base sm:text-lg">
              Sorry, no items matched your search 😔
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-[#E35922] font-dmsans font-bold hover:underline"
            >
              Show all dishes again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;