"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryItems, type GalleryItem } from "@/lib/gallery";
import { Eyebrow, Reveal } from "./ui";
import { ArrowUpRight, CloseIcon } from "./icons";

export default function FoodGallery() {
  const [open, setOpen] = useState<GalleryItem | null>(null);
  const idx = galleryItems.findIndex((g) => g.id === open?.id);
  const touchX = useRef<number | null>(null);

  // Lock background scroll while the lightbox is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const move = useCallback(
    (delta: number) => {
      if (idx === -1) return;
      const next = (idx + delta + galleryItems.length) % galleryItems.length;
      setOpen(galleryItems[next]);
    },
    [idx]
  );

  // Mobile swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null || idx === -1) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(delta) > 48) {
      move(delta < 0 ? 1 : -1);
    }
    touchX.current = null;
  };

  useEffect(() => {
    // Close on Escape + arrow-key navigation
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, move]);

  return (
    <section id="gallery" className="bg-cream px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow className="text-espresso/70">A feed you can taste</Eyebrow>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] text-espresso sm:text-7xl">
              EAT WITH
              <br />
              <span className="text-terracotta">YOUR EYES</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-espresso/60">
              Food, coffee, interiors and the people who make it a place. Tap any frame to view.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Masonry */}
      <div className="mx-auto mt-12 max-w-shell columns-2 gap-4 sm:gap-5 lg:columns-3 xl:columns-4 [&>*]:mb-4 sm:[&>*]:mb-5">
        {galleryItems.map((g, i) => (
          <Reveal key={g.id} delay={(i % 4) * 0.05} className="break-inside-avoid">
            <button
              onClick={() => setOpen(g)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-espresso/10"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  g.tall ? "aspect-[3/4]" : g.wide ? "aspect-[16/10]" : "aspect-square"
                }`}
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-[10px] font-semibold uppercase tracking-huge text-butter">
                  {g.category}
                </span>
                <p className="mt-1 text-sm font-medium text-cream-50">{g.caption}</p>
              </div>
              <div className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full bg-cream-50 text-espresso opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso/90 p-4 backdrop-blur-md sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-cream-50/15 text-cream-50 hover:bg-cream-50/25"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            <button
              onClick={() => move(-1)}
              aria-label="Previous"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/15 text-2xl text-cream-50 hover:bg-cream-50/25 sm:left-3 sm:h-12 sm:w-12 sm:text-3xl"
            >
              ‹
            </button>
            <button
              onClick={() => move(1)}
              aria-label="Next"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-cream-50/15 text-2xl text-cream-50 hover:bg-cream-50/25 sm:right-3 sm:h-12 sm:w-12 sm:text-3xl"
            >
              ›
            </button>

            <motion.figure
              key={open.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative max-h-full max-w-4xl"
            >
              <img
                src={open.src}
                alt={open.alt}
                className="max-h-[80svh] w-auto rounded-2xl object-contain shadow-card"
              />
              <figcaption className="mt-4 text-center">
                <span className="text-[11px] font-semibold uppercase tracking-huge text-butter">
                  {open.category}
                </span>
                <p className="mt-1 text-sm text-cream-50/80">{open.caption}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
