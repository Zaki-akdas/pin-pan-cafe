// ============================================================
// FOOD GALLERY — "EAT WITH YOUR EYES"
// Demo imagery used as placeholders until real photos are added.
// `tall` / `wide` control masonry sizing.
// ============================================================

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tall?: boolean;
  wide?: boolean;
  category: string;
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", src: "/images/signature-dish.jpg", alt: "Signature dish plated beautifully", caption: "The signature, done right", category: "Food", wide: true },
  { id: "g2", src: "/images/latte-art.jpg", alt: "Latte art in a ceramic cup", caption: "Hand-poured, always", category: "Coffee" },
  { id: "g3", src: "/images/vibe-interior-2.jpg", alt: "Warm cafe interior", caption: "The evening light", category: "Interior", tall: true },
  { id: "g4", src: "/images/dessert-2.jpg", alt: "Layered celebration cake", caption: "Sweet, layered moments", category: "Desserts" },
  { id: "g5", src: "/images/friends.jpg", alt: "Friends enjoying coffee together", caption: "Good company", category: "People", wide: true },
  { id: "g6", src: "/images/pizza-margherita.jpg", alt: "Wood-fired pizza", caption: "Straight from the oven", category: "Food" },
  { id: "g7", src: "/images/pour-over.jpg", alt: "Pour over coffee brewing", caption: "Slow brewed", category: "Coffee", tall: true },
  { id: "g8", src: "/images/event-lights.jpg", alt: "Ambient cafe lights in the evening", caption: "Nights at Pin & Pan", category: "Ambience", wide: true },
  { id: "g9", src: "/images/avocado-toast.jpg", alt: "Avocado toast brunch", caption: "Brunch, any day", category: "Food" },
  { id: "g10", src: "/images/drinks.jpg", alt: "Colorful iced drinks", caption: "Colour for your table", category: "Drinks" },
  { id: "g11", src: "/images/pasta.jpg", alt: "Creamy pasta dish", caption: "Pasta, the slow way", category: "Food" },
  { id: "g12", src: "/images/burger.jpg", alt: "Gourmet smash burger", caption: "Smash it", category: "Food" },
];
