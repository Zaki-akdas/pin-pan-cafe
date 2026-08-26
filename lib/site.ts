// ============================================================
// PIN & PAN CAFE — GLOBAL SITE DATA
// ------------------------------------------------------------
// This is the single source of truth for verified business info.
// Everything the owner still needs to confirm is flagged with
// `verified: false` and surfaced in the UI as "— VERIFY".
// Replace placeholders once confirmed.
// ============================================================

export type VerifyFlag = { value: string; verified: boolean };

export const site = {
  name: "Pin & Pan Cafe",
  shortName: "PIN & PAN",
  tagline: "Café • Food • Experiences",
  category: "Café / Restaurant",

  // Verified with the brief
  locationArea: "Bawadiya Kalan",
  locationCity: "Bhopal",
  instagram: {
    handle: "@pinandpancafe",
    url: "https://instagram.com/pinandpancafe",
    followerCount: null as number | null, // never fabricated
    verified: true,
  },

  // NOT verified — shown as placeholders until supplied
  address: { value: "Bawadiya Kalan, Bhopal", verified: false },
  phone: { value: "+91 90000 00000", verified: false },
  whatsapp: {
    value: "+91 90000 00000", // displayed number
    number: "919000000000", // digits only, for wa.me links
    verified: false,
  },
  hours: { value: "Opening hours — to verify", verified: false },
  mapsUrl: "https://www.google.com/maps", // placeholder until address verified

  year: 2026,
} as const;

/** Whether a verification flag should render as "ready" or "verify" */
export function flagLabel(flag: VerifyFlag): string {
  return flag.verified ? flag.value : `${flag.value} — VERIFY`;
}

// ---------- WhatsApp deep links ----------
export function waLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp.number}?text=${text}`;
}

// Contextual messages
export const waMessages = {
  general: "Hello Pin & Pan Cafe, I would like to know more about the café.",
  menu: "Hello Pin & Pan Cafe, please share your latest menu.",
  reservation: "Hello Pin & Pan Cafe, I would like to reserve a table.",
  event: "Hello Pin & Pan Cafe, I would like to know about upcoming events.",
  item: (name: string) =>
    `Hello Pin & Pan Cafe, I'm interested in "${name}" from your menu. Could you share more details?`,
  eventItem: (name: string) =>
    `Hello Pin & Pan Cafe, I'd like to know more about "${name}".`,
  signature: (name: string) =>
    `Hello Pin & Pan Cafe, I'd love to try your signature "${name}". Is it available?`,
};
