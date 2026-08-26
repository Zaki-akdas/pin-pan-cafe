// ============================================================
// INSTAGRAM FEED — "STRAIGHT FROM OUR FEED"
// Placeholder grid using demo imagery. Replace `mediaUrl` with
// the actual post URLs, and `caption` with real post captions.
// We never fabricate follower/engagement stats.
// ============================================================

export interface InstaPost {
  id: string;
  image: string;
  caption: string;
  mediaUrl: string; // link to the actual Instagram post
}

export const instagramPosts: InstaPost[] = [
  { id: "i1", image: "/images/latte-art.jpg", caption: "Your daily pour, poured with love.", mediaUrl: "https://instagram.com/pinandpancafe" },
  { id: "i2", image: "/images/pizza-margherita.jpg", caption: "Wood-fired and wonderful.", mediaUrl: "https://instagram.com/pinandpancafe" },
  { id: "i3", image: "/images/friends.jpg", caption: "Weekends are for this.", mediaUrl: "https://instagram.com/pinandpancafe" },
  { id: "i4", image: "/images/dessert.jpg", caption: "Dessert first. Always.", mediaUrl: "https://instagram.com/pinandpancafe" },
  { id: "i5", image: "/images/event-lights.jpg", caption: "The lights come on. The vibe follows.", mediaUrl: "https://instagram.com/pinandpancafe" },
  { id: "i6", image: "/images/avocado-toast.jpg", caption: "Brunch, sorted.", mediaUrl: "https://instagram.com/pinandpancafe" },
  { id: "i7", image: "/images/burger.jpg", caption: "Smash patty energy.", mediaUrl: "https://instagram.com/pinandpancafe" },
  { id: "i8", image: "/images/pour-over.jpg", caption: "Slow brews, good moods.", mediaUrl: "https://instagram.com/pinandpancafe" },
  { id: "i9", image: "/images/chai.jpg", caption: "Chai o'clock.", mediaUrl: "https://instagram.com/pinandpancafe" },
];
