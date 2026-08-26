// ============================================================
// REVIEWS — "GOOD FOOD. GOOD WORDS."
// Set `reviewsAvailable = false` to show the
// "CUSTOMER REVIEWS — ADD VERIFIED REVIEWS" state.
// Only add real, verified testimonials when available.
// ============================================================

export interface Review {
  name: string;
  rating: number;
  text: string;
  source?: string;
}

export const reviewsAvailable = false; // flip to true when verified reviews exist

export const reviews: Review[] = [
  // Add verified reviews here when available:
  // {
  //   name: "Aarav",
  //   rating: 5,
  //   text: "Great coffee and the perfect spot for a weekend catch-up.",
  // },
];
