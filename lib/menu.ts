// ============================================================
// MENU DATA — DEMO / EDITABLE
// ------------------------------------------------------------
// Categories, items, prices and descriptions below are DEMO
// placeholders. Replace with the café's official menu once
// supplied. Price `null` renders as "—" (price on request).
// ============================================================

export type MenuCategory =
  | "ALL"
  | "COFFEE"
  | "BEVERAGES"
  | "STARTERS"
  | "MAINS"
  | "PIZZA"
  | "PASTA"
  | "BURGERS"
  | "DESSERTS"
  | "SPECIALS";

export type Diet = "veg" | "nonveg" | "vegan";

export interface MenuItem {
  slug: string;
  name: string;
  category: MenuCategory;
  description: string;
  price: number | null;
  diet?: Diet;
  bestseller?: boolean;
  spicy?: boolean;
  ingredients?: string[];
  image: string;
  signature?: boolean;
  tags?: string[];
}

export const menuCategories: MenuCategory[] = [
  "ALL",
  "COFFEE",
  "BEVERAGES",
  "STARTERS",
  "MAINS",
  "PIZZA",
  "PASTA",
  "BURGERS",
  "DESSERTS",
  "SPECIALS",
];

export const menuItems: MenuItem[] = [
  // ---------- COFFEE ----------
  {
    slug: "signature-latte",
    name: "The Pin & Pan Latte",
    category: "COFFEE",
    description:
      "Our house pour — single-origin espresso under velvet-soft steamed milk, finished with hand-poured art.",
    price: null,
    diet: "veg",
    bestseller: true,
    image: "/images/latte-art.jpg",
    ingredients: ["Single-origin espresso", "Steamed milk", "House blend"],
    tags: ["Signature", "Hand-poured"],
  },
  {
    slug: "cortado",
    name: "Cortado",
    category: "COFFEE",
    description:
      "A balanced ratio of rich espresso and warm milk — small, strong and silky.",
    price: null,
    diet: "veg",
    image: "/images/latte-2.jpg",
  },
  {
    slug: "pour-over",
    name: "Pour Over Brew",
    category: "COFFEE",
    description:
      "Slow-brewed single origin, dialled in for a clean, bright and aromatic cup.",
    price: null,
    diet: "vegan",
    image: "/images/pour-over.jpg",
    ingredients: ["Fresh ground single origin"],
    tags: ["Slow brew"],
  },
  {
    slug: "masala-bean",
    name: "Espresso Roast",
    category: "COFFEE",
    description:
      "A classic double shot pulled from our dark-roasted signature beans.",
    price: null,
    diet: "vegan",
    image: "/images/beans.jpg",
  },

  // ---------- BEVERAGES ----------
  {
    slug: "masala-chai",
    name: "Kadak Masala Chai",
    category: "BEVERAGES",
    description:
      "Slow-brewed Indian chai with crushed cardamom, ginger and cinnamon — served piping hot.",
    price: null,
    diet: "veg",
    bestseller: true,
    spicy: true,
    image: "/images/chai.jpg",
    ingredients: ["Assam tea", "Milk", "Cardamom", "Ginger", "Cinnamon"],
  },
  {
    slug: "iced-spritz",
    name: "Fruit Iced Spritz",
    category: "BEVERAGES",
    description:
      "A vibrant chilled mocktail — muddled seasonal fruit, citrus and sparkling soda over ice.",
    price: null,
    diet: "vegan",
    image: "/images/drinks.jpg",
    ingredients: ["Seasonal fruit", "Citrus", "Sparkling water"],
    tags: ["Refreshing"],
  },
  {
    slug: "holiday-chai",
    name: "Spiced Chai Latte",
    category: "BEVERAGES",
    description:
      "Our masala chai topped with a silky foam and a sprinkle of warming spice.",
    price: null,
    diet: "veg",
    spicy: true,
    image: "/images/chai.jpg",
  },

  // ---------- STARTERS ----------
  {
    slug: "loaded-fries",
    name: "Loaded Crispy Fries",
    category: "STARTERS",
    description:
      "Golden, double-cooked fries with a spicy dip and a generous finish of herbs and cheese.",
    price: null,
    diet: "veg",
    spicy: true,
    bestseller: true,
    image: "/images/fries.jpg",
    tags: ["Sharing"],
  },
  {
    slug: "avocado-toast",
    name: "Smashed Avocado Toast",
    category: "STARTERS",
    description:
      "Creamy smashed avocado on sourdough, topped with a soft poached egg and fresh greens.",
    price: null,
    diet: "veg",
    image: "/images/avocado-toast.jpg",
    ingredients: ["Sourdough", "Avocado", "Poached egg"],
    tags: ["Brunch"],
  },

  // ---------- MAINS ----------
  {
    slug: "signature-plate",
    name: "Chef's Signature Platter",
    category: "SPECIALS",
    description:
      "The dish that defines Pin & Pan — a beautifully composed plate crafted from our finest seasonal ingredients.",
    price: null,
    diet: "nonveg",
    bestseller: true,
    signature: true,
    image: "/images/signature-dish.jpg",
    ingredients: ["Seasonal proteins", "House glaze", "Fresh garnish"],
  },

  // ---------- PIZZA ----------
  {
    slug: "margherita",
    name: "Wood-Fired Margherita",
    category: "PIZZA",
    description:
      "Leopard-spotted sourdough base, San Marzano-style tomato, buffalo mozzarella and fresh basil.",
    price: null,
    diet: "veg",
    bestseller: true,
    image: "/images/pizza-margherita.jpg",
    ingredients: ["Sourdough", "Tomato", "Mozzarella", "Basil"],
  },
  {
    slug: "mushroom-truffle",
    name: "Mushroom Truffle Pizza",
    category: "PIZZA",
    description:
      "Roasted wild mushrooms, creamy mozzarella and a whisper of truffle on a blistered crust.",
    price: null,
    diet: "veg",
    image: "/images/pizza-truffle.jpg",
    ingredients: ["Wild mushrooms", "Mozzarella", "Truffle"],
    tags: ["Chef's pick"],
  },

  // ---------- PASTA ----------
  {
    slug: "creamy-alfredo",
    name: "Creamy Alfredo",
    category: "PASTA",
    description:
      "Silky tagliatelle folded through a rich parmesan cream sauce, finished tableside with cracked pepper.",
    price: null,
    diet: "veg",
    image: "/images/pasta.jpg",
    ingredients: ["Tagliatelle", "Parmesan cream", "Black pepper"],
    tags: ["Comfort"],
  },

  // ---------- BURGERS ----------
  {
    slug: "classic-smash",
    name: "The Pan Smash Burger",
    category: "BURGERS",
    description:
      "Double-smashed patty, melty cheese, house sauce and pickles in a toasted brioche bun.",
    price: null,
    diet: "nonveg",
    bestseller: true,
    image: "/images/burger.jpg",
    ingredients: ["Beef smash patty", "Cheddar", "House sauce", "Brioche bun"],
  },
  {
    slug: "veggie-burger",
    name: "Garden Veggie Burger",
    category: "BURGERS",
    description:
      "A hearty house-made veggie patty with fresh crunch and a tangy herb aioli.",
    price: null,
    diet: "veg",
    image: "/images/burger-2.jpg",
    ingredients: ["Veggie patty", "Herb aioli", "Fresh greens"],
  },

  // ---------- DESSERTS ----------
  {
    slug: "chocolate-indulgence",
    name: "Chocolate Indulgence",
    category: "DESSERTS",
    description:
      "Layers of rich chocolate cake with a silky mousse, berry coulis and a mint finish.",
    price: null,
    diet: "veg",
    bestseller: true,
    image: "/images/dessert.jpg",
    ingredients: ["Chocolate cake", "Mousse", "Berry coulis"],
  },
  {
    slug: "layered-cake",
    name: "Signature Layered Cake",
    category: "DESSERTS",
    description:
      "A house-baked celebration cake — moist layers, light cream and seasonal garnish.",
    price: null,
    diet: "veg",
    image: "/images/dessert-2.jpg",
    ingredients: ["Sponge", "Fresh cream", "Garnish"],
  },
];

// Helpers
export function getItemBySlug(slug: string) {
  return menuItems.find((i) => i.slug === slug);
}
export function getCategoriesForItem(cat: MenuCategory) {
  return menuCategories.filter((c) => c === cat || c === "ALL" || c === "SPECIALS");
}
