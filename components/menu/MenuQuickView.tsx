"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { MenuItem } from "@/lib/menu";
import { formatPrice } from "@/lib/format";
import { waLink, waMessages } from "@/lib/site";
import { CloseIcon, WhatsAppIcon, CheckIcon, SpicyIcon, StarIcon, ArrowRight } from "../icons";

function DietTag({ diet }: { diet: MenuItem["diet"] }) {
  const map = {
    veg: { label: "Vegetarian", color: "bg-sage-100 text-sage-700" },
    vegan: { label: "Vegan", color: "bg-sage-100 text-sage-700" },
    nonveg: { label: "Non-vegetarian", color: "bg-tomato/10 text-tomato" },
  };
  const d = map[diet ?? "veg"];
  return <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${d.color}`}>{d.label}</span>;
}

export default function MenuQuickView({
  item,
  onClose,
}: {
  item: MenuItem | null;
  onClose: () => void;
}) {
  const [added, setAdded] = useState(false);

  useEffect(() => {
    setAdded(false);
    document.body.style.overflow = item ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  const enquireLink = () =>
    waLink(
      added
        ? `Hello Pin & Pan Cafe, I'd like to enquire about "${item?.name}".`
        : waMessages.item(item?.name ?? "")
    );

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-espresso/60 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ y: "8%", opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "8%", opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92svh] w-full max-w-4xl overflow-hidden rounded-t-[28px] bg-cream-50 shadow-card sm:rounded-[32px]"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-espresso/70 text-cream-50 backdrop-blur-sm transition-colors hover:bg-espresso"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <div className="grid w-full overflow-y-auto sm:grid-cols-2">
              {/* Image */}
              <div className="relative min-h-[220px] sm:min-h-full">
                <img src={item.image} alt={item.name} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute left-4 top-4 flex max-w-[calc(100%-4rem)] flex-wrap gap-1.5">
                  {item.bestseller && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-butter px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-espresso">
                      <StarIcon className="h-3 w-3" /> Bestseller
                    </span>
                  )}
                  {item.spicy && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-tomato px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-cream-50">
                      <SpicyIcon className="h-3 w-3" /> Spicy
                    </span>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col p-6 sm:p-8">
                <span className="text-[11px] font-semibold uppercase tracking-huge text-terracotta">
                  {item.category}
                </span>
                <h3 className="mt-2 font-display text-3xl font-extrabold leading-tight tracking-tight text-espresso sm:text-4xl">
                  {item.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-espresso/70">{item.description}</p>

                {item.ingredients && item.ingredients.length > 0 && (
                  <div className="mt-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-espresso/50">
                      Ingredients
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.ingredients.map((ing) => (
                        <span key={ing} className="rounded-full bg-espresso/5 px-3 py-1 text-xs text-espresso/70">
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {item.diet && (
                  <div className="mt-4">
                    <DietTag diet={item.diet} />
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between border-t border-espresso/10 pt-5">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-espresso/40">Price</p>
                    <p className="font-display text-3xl font-extrabold text-terracotta">{formatPrice(item.price)}</p>
                  </div>
                  <p className="max-w-[40%] text-right text-xs text-espresso/40">
                    Confirm pricing & availability on WhatsApp.
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-2.5">
                  <button
                    onClick={() => setAdded(true)}
                    className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-xs font-semibold uppercase tracking-wide transition-all ${
                      added
                        ? "bg-sage-500 text-espresso"
                        : "bg-espresso text-cream-50 hover:bg-espresso-800"
                    }`}
                  >
                    {added ? (
                      <>
                        <CheckIcon className="h-4 w-4" /> Added to enquiry
                      </>
                    ) : (
                      <>
                        Add to enquiry <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <a
                    href={enquireLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border border-espresso/20 px-6 py-3.5 text-xs font-semibold uppercase tracking-wide text-espresso transition-colors hover:bg-sage-500/10"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
