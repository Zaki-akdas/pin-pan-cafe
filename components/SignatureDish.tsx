"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { menuItems } from "@/lib/menu";
import { waLink, waMessages } from "@/lib/site";
import { Eyebrow, Button, Reveal } from "./ui";
import { ArrowRight, WhatsAppIcon } from "./icons";

export default function SignatureDish() {
  const dish = menuItems.find((i) => i.signature) ?? menuItems[0];
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <section id="signature" className="bg-espresso px-5 py-20 text-cream-50 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div ref={ref} className="mx-auto max-w-shell">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <Reveal>
            <Eyebrow className="text-cream-50/60">The one to order</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] text-cream-50 sm:text-7xl">
              YOU HAVE TO
              <br />
              <span className="text-terracotta">TRY THIS</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="font-display text-6xl font-extrabold tracking-tight text-cream-50/[0.08] sm:text-8xl">
              SIGNATURE / 01
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mt-12 overflow-hidden rounded-[32px]">
            <motion.img
              style={{ scale: reduce ? 1 : scale }}
              src={dish.image}
              alt={dish.name}
              className="aspect-[4/3] w-full object-cover sm:aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/25 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-huge text-butter sm:text-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" /> Our signature dish
              </span>
              <h3 className="mt-3 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-cream-50 sm:text-5xl">
                {dish.name}
              </h3>
              <p className="mt-3 max-w-xl font-serif text-lg italic leading-relaxed text-cream-50/85 sm:text-xl">
                {dish.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href={`/menu/${dish.slug}`} variant="light" size="md">
                  View on menu <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <a
                  href={waLink(waMessages.signature(dish.name))}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream-50/25 px-7 py-3.5 text-xs font-semibold uppercase tracking-wide text-cream-50 transition-colors hover:bg-cream-50 hover:text-espresso"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Ask about it
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
