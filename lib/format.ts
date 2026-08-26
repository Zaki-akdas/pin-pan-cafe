// Small formatting / data helpers shared across components

export function formatPrice(price: number | null): string {
  if (price === null) return "—";
  return `₹${price.toLocaleString("en-IN")}`;
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
