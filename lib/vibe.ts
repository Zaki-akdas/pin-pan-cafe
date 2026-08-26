// ============================================================
// CAFÉ VIBE + EXPERIENCES — "YOUR KIND OF PLACE"
// Experience categories for the interactive card section.
// Presented as moods/occasions, NOT claims about dedicated
// facilities. Keep claims (music/events) only when confirmed.
// ============================================================

export interface VibeLabel {
  label: string;
}

export const vibeLabels: VibeLabel[] = [
  { label: "COFFEE" },
  { label: "CONVERSATIONS" },
  { label: "FOOD" },
  { label: "MUSIC" },
  { label: "MEMORIES" },
];

export interface Experience {
  id: string;
  title: string;
  line: string;
  description: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    id: "date-night",
    title: "DATE NIGHT",
    line: "Candlelit corners & slow conversations",
    description: "A quieter table, good lighting and plates made for two.",
    image: "/images/event-lights.jpg",
  },
  {
    id: "friends",
    title: "FRIENDS",
    line: "Big laughs & shared plates",
    description: "Something for everyone to dig into, and the rounds keep coming.",
    image: "/images/friends.jpg",
  },
  {
    id: "family",
    title: "FAMILY",
    line: "Comfort food, everyone's happy",
    description: "A warm, easy spot where the weekend crowd settles right in.",
    image: "/images/vibe-interior.jpg",
  },
  {
    id: "work-coffee",
    title: "WORK & COFFEE",
    line: "Laptops, lattes & flow",
    description: "A steady coffee refill and a corner that lets you focus.",
    image: "/images/pour-over.jpg",
  },
  {
    id: "celebration",
    title: "CELEBRATION",
    line: "Cakes, candles & cheers",
    description: "The table where the good news gets the good food.",
    image: "/images/dessert.jpg",
  },
  {
    id: "weekend",
    title: "WEEKEND",
    line: "Brunch to evening, all day",
    description: "Sundays live here — coffee in the morning, dinner by night.",
    image: "/images/cafe-table.jpg",
  },
];
