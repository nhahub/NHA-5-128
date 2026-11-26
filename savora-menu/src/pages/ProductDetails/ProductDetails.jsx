import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../../helpers/api';
import ProductCard from '../../components/ProductCard';

const DEFAULT_OPTIONS = {
  sizes: [{ id: 'regular', label: 'Regular', extraPrice: 0 }],
  toppings: [],
  details: {
    ingredientsTitle: 'Fresh Quality Ingredients',
    ingredientsText:
      'Prepared fresh daily with carefully selected ingredients and authentic flavors.',
    nutrition: [
      { label: 'Calories', value: '420 kcal' },
      { label: 'Protein', value: '18g' },
      { label: 'Carbs', value: '36g' },
      { label: 'Fat', value: '21g' },
    ],
    reviewsSummary: '4.8 out of 5 based on verified customer orders.',
    sampleReviews: [
      { author: 'Omar H.', comment: 'Super fresh and arrived hot!' },
      { author: 'Salma M.', comment: 'Great portion size and rich flavor.' },
    ],
  },
};

const OPTIONS_BY_CATEGORY = {
  'Fast Food': {
    sizes: [
      { id: 'regular', label: 'Regular', extraPrice: 0 },
      { id: 'double', label: 'Double (+$2.50)', extraPrice: 2.5 },
      { id: 'combo', label: 'Combo Meal (+$4.00)', extraPrice: 4.0 },
    ],
    toppings: [
      { id: 'cheese', label: 'Extra Cheddar Cheese (+$1.00)', price: 1.0 },
      { id: 'bacon', label: 'Crispy Beef Bacon (+$1.50)', price: 1.5 },
      { id: 'onions', label: 'Caramelized Onions (+$0.75)', price: 0.75 },
    ],
    details: {
      ingredientsTitle: 'Pure Quality Ingredients',
      ingredientsText:
        'Crafted fresh daily using 100% premium local beef, authentic aged cheddar cheese, hand-sliced crispy beef bacon, and organic crisp vegetables, all embraced by our signature toasted artisan brioche bun. No artificial additives or preservatives.',
      nutrition: [
        { label: 'Calories', value: '640 kcal' },
        { label: 'Protein', value: '32g' },
        { label: 'Carbs', value: '44g' },
        { label: 'Fat', value: '36g' },
      ],
      reviewsSummary: '4.9 average rating from burger & pizza lovers.',
      sampleReviews: [
        { author: 'Karim A.', comment: 'Juicy patty and toasted bun every single time.' },
        { author: 'Nour E.', comment: 'Combo meal is totally worth it!' },
      ],
    },
  },
  'Appetizers': {
    sizes: [
      { id: 'regular', label: 'Regular', extraPrice: 0 },
      { id: 'large', label: 'Large (+$2.00)', extraPrice: 2.0 },
    ],
    toppings: [
      { id: 'dip', label: 'Extra Dipping Sauce (+$0.75)', price: 0.75 },
      { id: 'cheese', label: 'Melted Cheese (+$1.00)', price: 1.0 },
    ],
    details: {
      ingredientsTitle: 'Crisp & Fresh Starters',
      ingredientsText:
        'Made to order using crisp seasonal produce, house-made sauces, and golden fried or baked finishes for the ideal opening bite.',
      nutrition: [
        { label: 'Calories', value: '380 kcal' },
        { label: 'Protein', value: '12g' },
        { label: 'Carbs', value: '34g' },
        { label: 'Fat', value: '20g' },
      ],
      reviewsSummary: '4.7 average rating for starters & sides.',
      sampleReviews: [
        { author: 'Youssef T.', comment: 'Crispy outside and warm inside.' },
        { author: 'Mona R.', comment: 'Pairs great with any main dish.' },
      ],
    },
  },
  'Baked Goods': {
    sizes: [
      { id: 'single', label: 'Single', extraPrice: 0 },
      { id: 'box-3', label: 'Box of 3 (+$5.50)', extraPrice: 5.5 },
      { id: 'box-6', label: 'Box of 6 (+$10.00)', extraPrice: 10.0 },
    ],
    toppings: [
      { id: 'chocolate', label: 'Chocolate Drizzle (+$1.00)', price: 1.0 },
      { id: 'nuts', label: 'Roasted Nuts (+$1.25)', price: 1.25 },
    ],
    details: {
      ingredientsTitle: 'Oven-Fresh Bakery Craft',
      ingredientsText:
        'Baked every morning using cultured butter, unbleached flour, and slow fermentation for delicate layers and rich aroma.',
      nutrition: [
        { label: 'Calories', value: '310 kcal' },
        { label: 'Protein', value: '7g' },
        { label: 'Carbs', value: '38g' },
        { label: 'Fat', value: '15g' },
      ],
      reviewsSummary: '4.8 average rating for morning pastries.',
      sampleReviews: [
        { author: 'Heba S.', comment: 'So flaky and buttery, tastes fresh from the oven.' },
        { author: 'Tariq Z.', comment: 'Box of 6 is great for sharing.' },
      ],
    },
  },
  'Desserts': {
    sizes: [
      { id: 'regular', label: 'Regular', extraPrice: 0 },
      { id: 'large', label: 'Large (+$2.50)', extraPrice: 2.5 },
    ],
    toppings: [
      { id: 'ice-cream', label: 'Vanilla Ice Cream Scoop (+$1.50)', price: 1.5 },
      { id: 'caramel', label: 'Caramel / Chocolate Sauce (+$0.75)', price: 0.75 },
    ],
    details: {
      ingredientsTitle: 'Sweet Indulgence Ingredients',
      ingredientsText:
        'Crafted with rich cocoa, real cream, and balanced sweetness to finish your meal on a memorable note.',
      nutrition: [
        { label: 'Calories', value: '490 kcal' },
        { label: 'Protein', value: '8g' },
        { label: 'Carbs', value: '58g' },
        { label: 'Fat', value: '24g' },
      ],
      reviewsSummary: '4.9 average rating for desserts.',
      sampleReviews: [
        { author: 'Laila K.', comment: 'Rich chocolate flavor without being overly sweet.' },
        { author: 'Adham N.', comment: 'Adding ice cream makes it even better.' },
      ],
    },
  },
  'Drinks': {
    sizes: [
      { id: 'small', label: 'Small', extraPrice: 0 },
      { id: 'medium', label: 'Medium (+$1.00)', extraPrice: 1.0 },
      { id: 'large', label: 'Large (+$1.75)', extraPrice: 1.75 },
    ],
    toppings: [
      { id: 'ice', label: 'Extra Ice (+$0.25)', price: 0.25 },
      { id: 'cream', label: 'Whipped Cream (+$0.75)', price: 0.75 },
    ],
    details: {
      ingredientsTitle: 'Refreshing & Chilled Selection',
      ingredientsText:
        'Prepared with fresh fruits, roasted beans, or chilled infusions served ice-cold for instant refreshment.',
      nutrition: [
        { label: 'Calories', value: '180 kcal' },
        { label: 'Protein', value: '4g' },
        { label: 'Carbs', value: '28g' },
        { label: 'Fat', value: '5g' },
      ],
      reviewsSummary: '4.8 average rating for beverages.',
      sampleReviews: [
        { author: 'Rana G.', comment: 'Super refreshing and well-balanced.' },
        { author: 'Mostafa W.', comment: 'Large size is ideal for hot days.' },
      ],
    },
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [mainImage, setMainImage] = useState('');

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [specialRequest, setSpecialRequest] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('ingredients');

  useEffect(() => {
    setProduct(null);
    api.get(`/menu/${id}`).then((res) => {
      const item = res.data;
      setProduct(item);
      setMainImage(item.image);

      const catOptions =
        item.sizes?.length
          ? { sizes: item.sizes, toppings: item.toppings || [] }
          : OPTIONS_BY_CATEGORY[item.category] || DEFAULT_OPTIONS;

      setSelectedSize(catOptions.sizes[0]?.id || '');
      setSelectedToppings([]);
      setSpecialRequest('');
      setQuantity(1);
      setActiveTab('ingredients');

      api.get('/menu').then((allRes) => {
        const allItems = Array.isArray(allRes.data) ? allRes.data : [];
        const sameCategory = allItems.filter(
          (p) => p.id !== item.id && p.category === item.category
        );
        const others = allItems.filter(
          (p) => p.id !== item.id && p.category !== item.category
        );
        setRelatedProducts([...sameCategory, ...others].slice(0, 4));
      });
    });
  }, [id]);

  if (!product) return <p className="text-center py-20">Loading...</p>;

  const name =
    typeof product.name === 'string' ? product.name : product.name?.en || '';
  const description =
    typeof product.description === 'string'
      ? product.description
      : product.description?.en || '';

  const images = (product.gallery || [])
    .filter((img) => img !== product.image)
    .slice(0, 3);

  const currentConfig = OPTIONS_BY_CATEGORY[product.category] || DEFAULT_OPTIONS;
  const sizes = product.sizes?.length ? product.sizes : currentConfig.sizes;
  const toppings = product.toppings?.length
    ? product.toppings
    : currentConfig.toppings;
  const detailsData = currentConfig.details;

  const toggleTopping = (toppingId) => {
    setSelectedToppings((prev) =>
      prev.includes(toppingId)
        ? prev.filter((item) => item !== toppingId)
        : [...prev, toppingId]
    );
  };

  const basePrice = Number(product.price) || 0;
  const sizeObj = sizes.find((s) => s.id === selectedSize) || sizes[0];
  const sizeExtra = sizeObj ? Number(sizeObj.extraPrice) || 0 : 0;

  const toppingsTotal = selectedToppings.reduce((sum, tId) => {
    const found = toppings.find((t) => t.id === tId);
    return sum + (found ? Number(found.price) || 0 : 0);
  }, 0);

  const unitPrice = basePrice + sizeExtra + toppingsTotal;
  const totalPrice = (unitPrice * quantity).toFixed(2);

  const handleAddToCart = (customProduct = null) => {
    if (customProduct) {
      console.log('Added related item to cart:', customProduct);
      return;
    }

    const cartItem = {
      productId: product.id,
      name,
      size: sizeObj?.label || '',
      toppings: selectedToppings,
      specialRequest,
      quantity,
      unitPrice,
      totalPrice: Number(totalPrice),
    };
    console.log('Added to cart:', cartItem);
  };

  return (
    <div className="min-h-screen bg-[#F7F3E8] py-8 sm:py-10 px-4 sm:px-6 lg:px-8" dir="ltr">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-block text-[#1E1E1E] hover:text-[#E35922] font-dmsans font-medium transition-colors"
        >
          ← Back to Menu
        </Link>

       
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 mt-6 items-start">
          
          <div className="w-full md:w-1/2">
            <img
              src={mainImage}
              alt={name}
              className="w-full h-[320px] sm:h-[430px] object-cover rounded-[24px] shadow-md"
            />

            <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setMainImage(img)}
                  className={`h-[85px] sm:h-[115px] rounded-[18px] overflow-hidden border-2 transition-all ${
                    mainImage === img
                      ? 'border-[#E35922] scale-[1.02]'
                      : 'border-transparent opacity-85 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          
          <div className="w-full md:w-1/2 flex flex-col text-left">
            <h1 className="font-playfair font-bold text-[28px] sm:text-[36px] text-[#1E1E1E] leading-tight">
              {name}
            </h1>

            <p className="font-dmsans text-[#525252] mt-2 text-[14px] sm:text-[15px] leading-relaxed">
              {description}
            </p>

            <p className="font-dmsans font-bold text-[#E35922] text-[24px] sm:text-[26px] mt-3">
              ${basePrice.toFixed(2)}
            </p>

           
            {sizes.length > 0 && (
              <div className="mt-6">
                <h2 className="font-dmsans font-bold text-[15px] text-[#1E1E1E] mb-3">
                  Choose Size
                </h2>

                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => {
                    const isActive = selectedSize === size.id;
                    return (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setSelectedSize(size.id)}
                        className={`px-4 py-2 rounded-[10px] font-dmsans text-[13px] font-semibold transition-all ${
                          isActive
                            ? 'bg-[#E35922] text-white shadow-sm'
                            : 'bg-[#EFECE4] text-[#1E1E1E] hover:bg-[#e5e0d5]'
                        }`}
                      >
                        {size.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

           
            {toppings.length > 0 && (
              <div className="mt-6">
                <h2 className="font-dmsans font-bold text-[15px] text-[#1E1E1E] mb-3">
                  Extra Toppings (Optional)
                </h2>

                <div className="flex flex-col gap-2.5">
                  {toppings.map((topping) => {
                    const isChecked = selectedToppings.includes(topping.id);
                    return (
                      <label
                        key={topping.id}
                        className="flex items-center gap-3 cursor-pointer select-none font-dmsans text-[14px] text-[#333333]"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleTopping(topping.id)}
                          className="w-4 h-4 accent-[#E35922] rounded cursor-pointer"
                        />
                        <span>{topping.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            
            <div className="mt-6">
              <textarea
                rows={3}
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                placeholder="Any special requests? (e.g., no pickles, sauce on the side)..."
                className="w-full bg-white border border-[#E5E0D5] rounded-[14px] p-3.5 font-dmsans text-[13px] text-[#1E1E1E] placeholder-gray-400 focus:outline-none focus:border-[#E35922] resize-none"
              />
            </div>

           
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-6">
              <div className="flex items-center justify-between bg-[#EFECE4] rounded-[12px] h-[48px] px-3 w-full sm:w-[115px] shrink-0">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                  className="text-[#1E1E1E] font-bold text-lg w-7 h-7 flex items-center justify-center hover:text-[#E35922]"
                >
                  −
                </button>
                <span className="font-dmsans font-bold text-[15px] text-[#1E1E1E]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-[#1E1E1E] font-bold text-lg w-7 h-7 flex items-center justify-center hover:text-[#E35922]"
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleAddToCart()}
                className="flex-1 h-[48px] bg-[#E35922] hover:bg-[#cf4d1b] active:scale-[0.99] text-white font-dmsans font-bold text-[14px] rounded-[12px] transition-all shadow-sm"
              >
                Add to Cart - ${totalPrice}
              </button>
            </div>
          </div>
        </div>

       
        <div className="mt-12 sm:mt-14">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-5">
            {[
              { id: 'ingredients', label: 'Ingredients' },
              { id: 'nutrition', label: 'Nutrition' },
              { id: 'reviews', label: 'Reviews' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2.5 sm:py-3 rounded-[10px] font-dmsans font-semibold text-[13px] sm:text-[15px] transition-all ${
                    isActive
                      ? 'bg-[#EFE2CE] text-[#1E1E1E] shadow-xs'
                      : 'bg-transparent text-[#525252] hover:bg-[#EFECE4]/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="bg-white rounded-[16px] p-5 sm:p-8 shadow-xs border border-[#EFECE4] text-left">
            {activeTab === 'ingredients' && (
              <div>
                <h3 className="font-playfair font-bold text-[20px] sm:text-[24px] text-[#1E1E1E] mb-2">
                  {detailsData.ingredientsTitle}
                </h3>
                <p className="font-dmsans text-[14px] sm:text-[15px] text-[#525252] leading-relaxed">
                  {detailsData.ingredientsText}
                </p>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3 className="font-playfair font-bold text-[20px] sm:text-[24px] text-[#1E1E1E] mb-4">
                  Nutrition Facts
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {detailsData.nutrition.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F7F3E8] rounded-[12px] p-3.5 text-center"
                    >
                      <p className="font-dmsans text-xs text-[#525252]">
                        {item.label}
                      </p>
                      <p className="font-dmsans font-bold text-base sm:text-lg text-[#1E1E1E] mt-1">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h3 className="font-playfair font-bold text-[20px] sm:text-[24px] text-[#1E1E1E] mb-2">
                  Customer Reviews
                </h3>
                <p className="font-dmsans text-sm text-[#525252] mb-4">
                  {detailsData.reviewsSummary}
                </p>
                <div className="flex flex-col gap-3">
                  {detailsData.sampleReviews.map((rev, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F7F3E8] rounded-[12px] p-3.5 font-dmsans"
                    >
                      <p className="font-bold text-sm text-[#1E1E1E]">
                        {rev.author}
                      </p>
                      <p className="text-xs sm:text-sm text-[#525252] mt-1">
                        “{rev.comment}”
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        
        {relatedProducts.length > 0 && (
          <div className="mt-14 sm:mt-16">
            <h2 className="font-playfair font-bold text-[26px] sm:text-[32px] text-[#1E1E1E] text-center mb-8 sm:mb-10">
              You May Also Love
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
              {relatedProducts.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}