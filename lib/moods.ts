// ============================================================
// "WHAT ARE YOU IN THE MOOD FOR?" — DEMO / EDITABLE
// Left-click categories that switch a background image on hover.
// ============================================================

export interface Mood {
  id: string;
  label: string;
  description: string;
  image: string;
  category: string; // which menu category this mood links to
}

export const moods: Mood[] = [
  {
    id: "coffee",
    label: "COFFEE",
    description: "Slow-brewed, hand-poured and always dialled in.",
    image: "/images/latte-art.jpg",
    category: "COFFEE",
  },
  {
    id: "brunch",
    label: "BRUNCH",
    description: "Sourdough, poached eggs and long, lazy mornings.",
    image: "/images/avocado-toast.jpg",
    category: "STARTERS",
  },
  {
    id: "quick-bites",
    label: "QUICK BITES",
    description: "Crispy, shareable and made for the table.",
    image: "/images/fries.jpg",
    category: "STARTERS",
  },
  {
    id: "dessert",
    label: "DESSERT",
    description: "Rich, layered and made to be photographed.",
    image: "/images/dessert.jpg",
    category: "DESSERTS",
  },
  {
    id: "dinner",
    label: "DINNER",
    description: "Wood-fired, composed and full of flavour.",
    image: "/images/pizza-margherita.jpg",
    category: "MAINS",
  },
  {
    id: "drinks",
    label: "DRINKS",
    description: "Chai, mocktails and everything in between.",
    image: "/images/drinks.jpg",
    category: "BEVERAGES",
  },
  {
    id: "hangout",
    label: "HANGOUT",
    description: "Good conversations, music and the right light.",
    image: "/images/friends.jpg",
    category: "ALL",
  },
];
