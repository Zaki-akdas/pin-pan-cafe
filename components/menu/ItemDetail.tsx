"use client";

import { useState } from "react";
import type { MenuItem } from "@/lib/menu";
import { formatPrice } from "@/lib/format";
import { waLink, waMessages } from "@/lib/site";
import { CheckIcon, WhatsAppIcon, ArrowRight, SpicyIcon, StarIcon } from "../icons";

export default function ItemDetail({ item }: { item: MenuItem }) {
  const [added, setAdded] = useState(false);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div className="relative overflow-hidden rounded-[32px]">
        <img src={item.image} alt={item.name} className="aspect-[4/3] w-full object-cover" />
        {item.bestseller && (
          <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-butter px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-espresso">
            <StarIcon className="h-3 w-3" /> Bestseller
          </span>
        )}
        {item.spicy && (
          <span className="absolute left-4 top-14 inline-flex items-center gap-1 rounded-full bg-tomato px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-cream-50">
            <SpicyIcon className="h-3 w-3" /> Spicy
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <span className="text-[11px] font-semibold uppercase tracking-huge text-terracotta">
          {item.category}
        </span>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-espresso sm:text-5xl">
          {item.name}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-espresso/70">{item.description}</p>

        {item.ingredients && (
          <div className="mt-6">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-espresso/50">Ingredients</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {item.ingredients.map((ing) => (
                <span key={ing} className="rounded-full bg-espresso/5 px-3 py-1 text-xs text-espresso/70">
                  {ing}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 flex items-end justify-between border-t border-espresso/10 pt-6">
          <div>
            <span className="text-[11px] uppercase tracking-wide text-espresso/40">Price</span>
            <p className="font-display text-4xl font-extrabold text-terracotta">{formatPrice(item.price)}</p>
          </div>
          <p className="max-w-[40%] text-right text-xs text-espresso/40">
            Confirm pricing & availability on WhatsApp.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => setAdded(true)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-full px-6 py-4 text-xs font-semibold uppercase tracking-wide transition-all ${
              added ? "bg-sage-500 text-espresso" : "bg-espresso text-cream-50 hover:bg-espresso-800"
            }`}
          >
            {added ? (
              <><CheckIcon className="h-4 w-4" /> Added to enquiry</>
            ) : (
              <>Add to enquiry <ArrowRight className="h-4 w-4" /></>
            )}
          </button>
          <a
            href={waLink(waMessages.item(item.name))}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-espresso/20 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-espresso transition-colors hover:bg-sage-500/10"
          >
            <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
          </a>
        </div>

        <a
          href="/#menu"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-espresso/50 hover:text-terracotta"
        >
          ← Back to the full menu
        </a>
      </div>
    </div>
  );
}
