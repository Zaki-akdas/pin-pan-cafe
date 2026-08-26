"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { vibeLabels } from "@/lib/vibe";
import { Eyebrow, Reveal } from "./ui";

export default function CafeVibe() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="bg-cream px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div ref={ref} className="mx-auto max-w-shell">
        <Reveal>
          <Eyebrow className="text-espresso/70">More than food</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] text-espresso sm:text-7xl">
            COME FOR THE FOOD.
            <br />
            <span className="text-terracotta">STAY FOR THE VIBE.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Large editorial image */}
          <Reveal className="relative overflow-hidden rounded-[32px]">
            <motion.img
              style={{ y: reduce ? 0 : y1 }}
              src="/images/vibe-interior.jpg"
              alt="Warm seating and soft lighting inside Pin & Pan Cafe"
              className="h-[70vw] w-full scale-110 object-cover sm:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-huge text-butter">The space</span>
                <p className="mt-1 font-display text-2xl font-bold text-cream-50">Warm light, good corners</p>
              </div>
              <span className="font-display text-5xl font-extrabold text-cream-50/20">01</span>
            </div>
          </Reveal>

          {/* Supporting image + copy */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.1} className="relative overflow-hidden rounded-[32px]">
              <img
                src="/images/cafe-table.jpg"
                alt="A table set with coffee and food at Pin & Pan Cafe"
                loading="lazy"
                className="h-[40vw] w-full object-cover sm:h-[280px]"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <p className="font-display text-xl font-bold text-cream-50">Made for sharing</p>
                <span className="font-display text-4xl font-extrabold text-cream-50/20">02</span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-lg text-lg leading-relaxed text-espresso/75">
                We built Pin & Pan to be somewhere you want to stay. Coffee that takes its time,
                food worth photographing, seats you don't want to leave, and light that does the
                talking.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Vibe labels */}
        <div className="mt-14 flex flex-wrap gap-3">
          {vibeLabels.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.06}>
              <span className="inline-flex items-center gap-2 rounded-full border border-espresso/15 bg-cream-50 px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-espresso/80">
                <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
                {v.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
