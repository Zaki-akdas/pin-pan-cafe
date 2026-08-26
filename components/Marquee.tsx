const words = [
  "COFFEE",
  "BRUNCH",
  "WOOD-FIRED",
  "DESSERT",
  "MOCKTAILS",
  "EVENTS",
  "GOOD MOOD",
  "CONVERSATIONS",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {words.map((w) => (
        <span key={w} className="flex items-center whitespace-nowrap">
          <span className="px-8 font-display text-2xl font-bold uppercase tracking-[0.02em] text-espresso/85 sm:text-3xl">
            {w}
          </span>
          <span className="text-[9px] text-terracotta">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-espresso/8 bg-cream py-5 sm:py-6">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
      {/* edge fade so the strip feels softer, not a hard template band */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-cream to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-cream to-transparent" />
    </div>
  );
}
