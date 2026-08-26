"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { MenuCategory, MenuItem } from "@/lib/menu";
import { menuCategories, menuItems } from "@/lib/menu";
import { formatPrice } from "@/lib/format";
import { Eyebrow, Reveal } from "../ui";
import { ArrowRight, SpicyIcon, CloseIcon, WhatsAppIcon, CheckIcon, StarIcon } from "../icons";
import MenuQuickView from "./MenuQuickView";
import { waLink, waMessages, site } from "@/lib/site";

function VegBadge({ diet }: { diet: MenuItem["diet"] }) {
  const isVeg = diet === "veg" || diet === "vegan";
  return (
    <span
      className={`inline-flex h-4 w-4 items-center justify-center rounded ` +
        `${
          isVeg
            ? "border-[1.5px] border-sage-600 text-sage-700"
            : "border-[1.5px] border-tomato text-tomato"
        }`}
      title={diet}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isVeg ? "bg-sage-600" : "bg-tomato"
        }`}
      />
    </span>
  );
}

function ItemCard({ item, onOpen, index }: { item: MenuItem; onOpen: (i: MenuItem) => void; index: number }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(item)}
      className="group flex flex-col overflow-hidden rounded-3xl bg-cream-50 text-left ring-1 ring-espresso/[0.06] shadow-soft transition-all duration-500 ease-out-soft hover:-translate-y-1.5 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {item.bestseller && (
            <span className="inline-flex items-center gap-1 rounded-full bg-cream-50/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-espresso shadow-sm backdrop-blur">
              <StarIcon className="h-3 w-3 text-terracotta" /> Bestseller
            </span>
          )}
          {item.spicy && (
            <span className="inline-flex items-center gap-1 rounded-full bg-tomato px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-cream-50">
              <SpicyIcon className="h-3 w-3" /> Spicy
            </span>
          )}
        </div>

        <div className="absolute right-3 top-3">
          <VegBadge diet={item.diet} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-espresso">{item.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-espresso/55">{item.description}</p>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="font-display text-xl font-extrabold text-terracotta">
            {formatPrice(item.price)}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-espresso/45 transition-colors group-hover:text-terracotta">
            View
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}

export default function MenuExplorer() {
  const [active, setActive] = useState<MenuCategory>("ALL");
  const [selected, setSelected] = useState<MenuItem | null>(null);

  const filtered = useMemo(
    () =>
      active === "ALL"
        ? menuItems
        : menuItems.filter((i) => i.category === active || i.category === "SPECIALS"),
    [active]
  );

  return (
    <section id="menu" className="bg-paper px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow className="text-espresso/70">Order from the screen</Eyebrow>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] text-espresso sm:text-7xl">
              THE MENU
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={waLink(waMessages.menu)}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-espresso/70 transition-colors hover:text-sage-600"
            >
              <WhatsAppIcon className="h-4 w-4" /> Get the full menu on WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Category tabs (segmented) */}
        <Reveal delay={0.15}>
          <div className="no-scrollbar -mx-5 mt-10 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:px-0">
            {menuCategories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`shrink-0 rounded-full border px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide transition-all duration-300 ${
                    isActive
                      ? "border-espresso bg-espresso text-cream-50 shadow-soft"
                      : "border-espresso/12 bg-transparent text-espresso/55 hover:border-espresso/30 hover:text-espresso"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <ItemCard key={item.slug} item={item} index={i} onOpen={setSelected} />
            ))}
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-xs uppercase tracking-wide text-espresso/40">
            Prices shown are placeholders — request the latest menu for confirmed pricing.
          </p>
        </Reveal>
      </div>

      <MenuQuickView item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
