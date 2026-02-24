import { MenuItem } from "@/context/StoreContext";

import foodDonerFries from "@/assets/food-doner-fries.jpg";
import foodShawaya from "@/assets/food-shawaya.jpg";
import foodShawarmaPlatter from "@/assets/food-shawarma-platter.jpg";
import foodTurkishWrap from "@/assets/food-turkish-wrap.jpg";
import foodTurkishDoner from "@/assets/food-turkish-doner.jpg";
import foodPouchShawarma from "@/assets/food-pouch-shawarma.jpg";
import foodShawarma from "@/assets/food-shawarma.jpg";
import foodBeverages from "@/assets/food-beverages.jpg";
import foodDessert from "@/assets/food-dessert.jpg";
import foodAddons from "@/assets/food-addons.jpg";

export const menuItems: MenuItem[] = [
  // Doner Fries
  {
    id: "1",
    name: "Doner Fries – Chicken",
    description: "Crispy fries loaded with seasoned chicken doner, drizzled with signature sauces",
    price: 650,
    category: "Doner Fries",
    image: foodDonerFries,
  },
  {
    id: "2",
    name: "Doner Fries – Beef",
    description: "Crispy fries topped with juicy beef doner and our special sauce blend",
    price: 750,
    category: "Doner Fries",
    image: foodDonerFries,
  },
  // Dubai Shawaya
  {
    id: "3",
    name: "Half Shawaya",
    description: "Half portion of our signature Dubai-style rotisserie chicken, marinated and grilled",
    price: 950,
    category: "Dubai Shawaya",
    image: foodShawaya,
  },
  {
    id: "4",
    name: "Full Shawaya",
    description: "Full Dubai-style rotisserie chicken, perfectly marinated and slow-grilled",
    price: 1700,
    category: "Dubai Shawaya",
    image: foodShawaya,
  },
  {
    id: "5",
    name: "Shawaya + Rice",
    description: "Half shawaya served with a generous portion of flavored rice",
    price: 1200,
    category: "Dubai Shawaya",
    image: foodShawaya,
  },
  // Shawarma Platter
  {
    id: "6",
    name: "Shawarma Platter – Simple",
    description: "Generous shawarma platter with sliced meat, pickles, garlic sauce, and flatbread",
    price: 850,
    category: "Shawarma Platter",
    image: foodShawarmaPlatter,
  },
  {
    id: "7",
    name: "Shawarma Platter – With Cheese",
    description: "Our signature shawarma platter topped with melted cheese and sauces",
    price: 950,
    category: "Shawarma Platter",
    image: foodShawarmaPlatter,
  },
  // Turkish Wraps
  {
    id: "8",
    name: "Turkish Wrap – Chicken",
    description: "Grilled chicken wrapped in warm Turkish flatbread with fresh veggies and sauce",
    price: 550,
    category: "Turkish Wraps",
    image: foodTurkishWrap,
  },
  {
    id: "9",
    name: "Turkish Wrap – Beef",
    description: "Tender beef wrapped in Turkish flatbread with fresh vegetables and garlic sauce",
    price: 650,
    category: "Turkish Wraps",
    image: foodTurkishWrap,
  },
  // Turkish Doner
  {
    id: "10",
    name: "Turkish Doner – Chicken",
    description: "Classic Turkish doner sandwich with seasoned chicken, veggies, and sauce",
    price: 500,
    category: "Turkish Doner",
    image: foodTurkishDoner,
  },
  {
    id: "11",
    name: "Turkish Doner – Beef",
    description: "Authentic Turkish doner with juicy beef, fresh toppings, and signature sauce",
    price: 600,
    category: "Turkish Doner",
    image: foodTurkishDoner,
  },
  // Pouch Shawarma
  {
    id: "12",
    name: "Pouch Shawarma – Chicken",
    description: "Chicken shawarma wrapped in a crispy pouch with garlic sauce and pickles",
    price: 450,
    category: "Pouch Shawarma",
    image: foodPouchShawarma,
  },
  {
    id: "13",
    name: "Pouch Shawarma – Beef",
    description: "Beef shawarma in a crispy pouch with our special sauce blend",
    price: 550,
    category: "Pouch Shawarma",
    image: foodPouchShawarma,
  },
  // Shawarma
  {
    id: "14",
    name: "Shawarma – Chicken",
    description: "Classic chicken shawarma wrap with garlic sauce, pickles, and fresh veggies",
    price: 400,
    category: "Shawarma",
    image: foodShawarma,
  },
  {
    id: "15",
    name: "Shawarma – Beef",
    description: "Premium beef shawarma wrap with signature sauces and fresh toppings",
    price: 500,
    category: "Shawarma",
    image: foodShawarma,
  },
  // Beverages
  {
    id: "16",
    name: "Water",
    description: "Mineral water bottle",
    price: 100,
    category: "Beverages",
    image: foodBeverages,
  },
  {
    id: "17",
    name: "Soft Drink",
    description: "Chilled carbonated soft drink",
    price: 150,
    category: "Beverages",
    image: foodBeverages,
  },
  {
    id: "18",
    name: "Blueberry Mojito",
    description: "Refreshing blueberry flavored mojito with crushed ice",
    price: 350,
    category: "Beverages",
    image: foodBeverages,
  },
  {
    id: "19",
    name: "Strawberry Mojito",
    description: "Sweet strawberry mojito with fresh mint and crushed ice",
    price: 350,
    category: "Beverages",
    image: foodBeverages,
  },
  {
    id: "20",
    name: "Green Apple Mojito",
    description: "Tangy green apple mojito with a refreshing twist",
    price: 350,
    category: "Beverages",
    image: foodBeverages,
  },
  {
    id: "21",
    name: "Peach Mojito",
    description: "Smooth peach flavored mojito, perfectly chilled",
    price: 350,
    category: "Beverages",
    image: foodBeverages,
  },
  {
    id: "22",
    name: "Lemon Mojito",
    description: "Classic lemon mojito with fresh mint leaves and ice",
    price: 350,
    category: "Beverages",
    image: foodBeverages,
  },
  // Jushhpk Desserts
  {
    id: "23",
    name: "Lotus Can",
    description: "Layered lotus biscoff cream dessert in a can, topped with crushed biscuits",
    price: 450,
    category: "Jushhpk Desserts",
    image: foodDessert,
  },
  {
    id: "24",
    name: "Red Velvet Can",
    description: "Rich red velvet cream dessert layered in a can with cream cheese frosting",
    price: 450,
    category: "Jushhpk Desserts",
    image: foodDessert,
  },
  {
    id: "25",
    name: "Nutella Can",
    description: "Indulgent Nutella cream dessert in a can with hazelnut crumble",
    price: 450,
    category: "Jushhpk Desserts",
    image: foodDessert,
  },
  // Add-ons
  {
    id: "26",
    name: "Extra Cheese",
    description: "Add a generous portion of melted cheese to any item",
    price: 150,
    category: "Add-ons",
    image: foodAddons,
  },
  {
    id: "27",
    name: "Dip",
    description: "Choice of garlic, chili, or signature dipping sauce",
    price: 100,
    category: "Add-ons",
    image: foodAddons,
  },
  {
    id: "28",
    name: "Tortilla Bread",
    description: "Warm soft tortilla bread on the side",
    price: 100,
    category: "Add-ons",
    image: foodAddons,
  },
  {
    id: "29",
    name: "Pita Bread",
    description: "Fresh baked pita bread, warm and fluffy",
    price: 100,
    category: "Add-ons",
    image: foodAddons,
  },
  {
    id: "30",
    name: "Plain Fries",
    description: "Golden crispy plain french fries",
    price: 250,
    category: "Add-ons",
    image: foodAddons,
  },
];

export const categories = [
  "All",
  "Doner Fries",
  "Dubai Shawaya",
  "Shawarma Platter",
  "Turkish Wraps",
  "Turkish Doner",
  "Pouch Shawarma",
  "Shawarma",
  "Beverages",
  "Jushhpk Desserts",
  "Add-ons",
];
