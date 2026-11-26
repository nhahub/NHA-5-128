const fs = require("fs");


const data = {
  "Fast Food": [
    ["Classic Beef Burger", "Juicy beef patty, melted cheese & fresh veggies", 7.99],
    ["Smoky Pepperoni", "Extra mozzarella, crispy crust & rich pepperoni slices", 12.99],
    ["Crispy Chicken Burger", "Crunchy fried chicken, lettuce & garlic mayo", 6.99],
    ["Double Cheese Burger", "Two beef patties with double melted cheddar", 9.49],
    ["Margherita Pizza", "Fresh tomato sauce, mozzarella & basil leaves", 10.99],
    ["BBQ Chicken Pizza", "Smoky BBQ sauce, grilled chicken & red onions", 12.49],
    ["Chicken Shawarma Wrap", "Marinated chicken, pickles & creamy garlic sauce", 5.99],
    ["Beef Shawarma Plate", "Sliced beef shawarma with rice, salad & tahini", 8.99],
    ["Hot Dog Special", "Grilled sausage, mustard, ketchup & crispy onions", 4.99],
    ["Cheesy Fries", "Golden fries topped with melted cheddar sauce", 3.99],
    ["Chicken Nuggets", "Ten crispy golden nuggets with dipping sauce", 5.49],
    ["Fish & Chips", "Crispy battered fish with thick-cut fries", 9.99],
    ["Beef Tacos", "Three soft tacos with spiced beef & fresh salsa", 7.49],
    ["Club Sandwich", "Triple layer chicken, egg, lettuce & tomato", 6.49],
    ["Spicy Chicken Wings", "Eight hot wings glazed in chili honey sauce", 8.49],
    ["Mushroom Swiss Burger", "Beef patty with sautéed mushrooms & Swiss cheese", 9.99]
  ],
  "Appetizers": [
    ["Onion Rings", "Crispy battered onion rings with tangy dip", 3.49],
    ["Mozzarella Sticks", "Golden fried sticks served with tomato sauce", 4.99],
    ["Garlic Bread", "Toasted bread with garlic butter & herbs", 3.29],
    ["Caesar Salad", "Romaine lettuce, parmesan, croutons & Caesar dressing", 5.49],
    ["Hummus & Pita", "Creamy chickpea hummus with warm pita bread", 4.49],
    ["Stuffed Mushrooms", "Baked mushrooms filled with cheese & herbs", 5.99],
    ["Fried Calamari", "Lightly breaded squid rings with lemon aioli", 7.49],
    ["Chicken Soup", "Warm homemade soup with vegetables & noodles", 3.99],
    ["Tomato Bruschetta", "Toasted baguette topped with fresh tomato & basil", 4.29],
    ["Spring Rolls", "Crispy vegetable rolls with sweet chili sauce", 4.79],
    ["Falafel Bites", "Crunchy herb falafel with tahini dip", 3.99],
    ["Cream of Mushroom Soup", "Rich and velvety mushroom soup with croutons", 4.49],
    ["Jalapeño Poppers", "Cheese-filled jalapeños, breaded and fried", 5.29],
    ["Greek Salad", "Cucumber, tomato, olives & feta with olive oil", 5.99],
    ["Potato Wedges", "Seasoned baked potato wedges with sour cream", 3.79],
    ["Shrimp Cocktail", "Chilled shrimp served with tangy cocktail sauce", 8.49]
  ],
  "Baked Goods": [
    ["Butter Croissant", "Golden, fresh and flaky layers with powdered sugar", 4.99],
    ["Chocolate Croissant", "Flaky pastry filled with rich dark chocolate", 5.49],
    ["Cinnamon Roll", "Warm soft roll with cinnamon glaze", 3.99],
    ["Blueberry Muffin", "Moist muffin packed with fresh blueberries", 3.49],
    ["Chocolate Chip Cookie", "Chewy cookie with generous chocolate chunks", 2.49],
    ["Sourdough Loaf", "Rustic crusty loaf baked fresh every morning", 5.99],
    ["Almond Danish", "Buttery pastry topped with almonds & sweet cream", 4.79],
    ["Banana Bread", "Soft homemade banana bread with walnuts", 3.99],
    ["Cheese Pie", "Warm flaky pie filled with creamy white cheese", 3.49],
    ["Apple Turnover", "Crisp pastry stuffed with spiced cinnamon apples", 4.29],
    ["Baguette", "Classic French baguette with a crunchy crust", 2.99],
    ["Zaatar Manakish", "Fresh baked flatbread with olive oil & zaatar", 2.79],
    ["Pretzel Twist", "Soft salted pretzel with mustard dip", 3.29],
    ["Brioche Bun", "Light, buttery and slightly sweet brioche", 2.99],
    ["Lemon Scone", "Tender scone with lemon glaze & clotted cream", 3.79],
    ["Focaccia", "Olive oil focaccia with rosemary & sea salt", 4.49]
  ],
  "Desserts": [
    ["Chocolate Lava Cake", "Warm cake with a melting chocolate center", 6.49],
    ["New York Cheesecake", "Creamy cheesecake with strawberry sauce", 6.99],
    ["Tiramisu", "Italian dessert with coffee-soaked layers & mascarpone", 6.49],
    ["Om Ali", "Egyptian warm pudding with nuts, raisins & cream", 4.99],
    ["Basbousa", "Sweet semolina cake soaked in sugar syrup", 3.99],
    ["Kunafa with Cream", "Crispy kunafa filled with cream & sweet syrup", 5.99],
    ["Vanilla Ice Cream", "Three scoops of creamy vanilla ice cream", 3.99],
    ["Brownie Sundae", "Warm brownie with ice cream & chocolate sauce", 5.99],
    ["Red Velvet Cake", "Soft red velvet layers with cream cheese frosting", 5.99],
    ["Crème Brûlée", "Silky vanilla custard with caramelized sugar top", 6.49],
    ["Rice Pudding", "Creamy rice pudding with cinnamon", 3.49],
    ["Fruit Tart", "Buttery tart with custard & fresh seasonal fruits", 5.49],
    ["Waffles with Nutella", "Crispy waffles topped with Nutella & bananas", 6.49],
    ["Strawberry Pancakes", "Fluffy pancakes with fresh strawberries & syrup", 5.99],
    ["Panna Cotta", "Smooth vanilla cream with berry compote", 5.49],
    ["Churros", "Crispy cinnamon churros with chocolate dip", 4.49]
  ],
  "Drinks": [
    ["Fresh Orange Juice", "Squeezed fresh every day", 2.99],
    ["Iced Latte", "Smooth espresso with cold milk over ice", 3.49],
    ["Mango Smoothie", "Thick and creamy fresh mango smoothie", 3.99],
    ["Strawberry Milkshake", "Ice cream blended with fresh strawberries", 4.49],
    ["Chocolate Milkshake", "Rich chocolate blended with vanilla ice cream", 4.49],
    ["Lemon Mint", "Refreshing lemon juice blended with fresh mint", 2.99],
    ["Cappuccino", "Espresso with steamed milk & velvety foam", 3.29],
    ["Hot Chocolate", "Warm creamy chocolate topped with marshmallows", 3.49],
    ["Iced Tea Peach", "Cold black tea with sweet peach flavor", 2.79],
    ["Watermelon Juice", "Cold, fresh and naturally sweet watermelon juice", 3.29],
    ["Caramel Frappe", "Iced coffee blended with caramel & whipped cream", 4.29],
    ["Sparkling Water", "Chilled sparkling water with a lemon slice", 1.99],
    ["Green Smoothie", "Spinach, apple, banana & lime blended fresh", 3.99],
    ["Americano", "Bold espresso with hot water", 2.79],
    ["Karkadeh", "Traditional chilled hibiscus drink", 2.49],
    ["Coca-Cola", "Classic chilled soft drink", 1.49]
  ]
};

const badges = ["Best Seller", "Popular", "Fresh & Flaky", "Top Rated", "New", "Chef's Pick"];

const slug = (name) =>
  name
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const menu = [];
let id = 1;

for (const [category, items] of Object.entries(data)) {
  items.forEach(([name, description, price]) => {
    const s = slug(name);
    menu.push({
      id: id,
      name,
      description,
      image: `/images/${s}.jpg`,
      gallery: [
        `/images/${s}1.jpg`,
        `/images/${s}2.jpg`,
        `/images/${s}3.jpg`
      ],
      badge: badges[id % badges.length],
      rating: +(4.3 + ((id * 7) % 7) / 10).toFixed(1),
      reviews: `${(((id * 13) % 120) / 10 + 1).toFixed(1)}K+`,
      price,
      category
    });
    id++;
  });
}

fs.writeFileSync("menu.json", JSON.stringify(menu, null, 2));
console.log("Created " + menu.length + " products");