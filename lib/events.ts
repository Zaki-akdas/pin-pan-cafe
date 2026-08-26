// ============================================================
// EVENTS — "WHAT'S HAPPENING AT PIN & PAN"
// If no confirmed events, set `isEmpty: true` to render the
// "UPCOMING EVENTS — COMING SOON" state. Events are DEMO until
// the café provides an actual schedule.
// ============================================================

export interface CafeEvent {
  slug: string;
  title: string;
  type: string; // Live Music, DJ Night, Open Mic, etc.
  date: string; // human readable — confirm actual date
  time: string;
  description: string;
  image: string;
  tags?: string[];
}

export const eventsEmpty = false; // flip to `true` if no confirmed events

export const events: CafeEvent[] = [
  {
    slug: "live-acoustic-saturday",
    title: "Live Acoustic Saturday",
    type: "Live Music",
    date: "Saturday Evening",
    time: "7:00 PM Onwards",
    description:
      "An intimate evening of live acoustic sets, warm lights and slow conversations. Unwind with friends over food and music.",
    image: "/images/event-lights.jpg",
    tags: ["Live Music", "Evening"],
  },
  {
    slug: "open-mic-night",
    title: "Open Mic Night",
    type: "Open Mic",
    date: "Thursday Night",
    time: "8:00 PM Onwards",
    description:
      "Poetry, stand-up, music and everything in between. Sign up and take the stage — or just cheer from your table.",
    image: "/images/event-2.jpg",
    tags: ["Open Mic", "Community"],
  },
  {
    slug: "weekend-special-dinner",
    title: "Weekend Special Dinner",
    type: "Special Dinner",
    date: "Sunday",
    time: "6:00 PM Onwards",
    description:
      "A curated weekend dinner spread. The kind of meal that turns a simple Sunday into a memory.",
    image: "/images/fine-dining.jpg",
    tags: ["Special Dinner", "Weekend"],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}
