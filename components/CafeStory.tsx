"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Eyebrow, Reveal } from "./ui";

export default function CafeStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="bg-espresso px-5 py-20 text-cream-50 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div ref={ref} className="mx-auto max-w-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow className="text-cream-50/60">Our story</Eyebrow>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl">
              THE PIN
              <br />
              <span className="text-terracotta">& PAN</span> STORY
            </h2>
            <p className="mt-8 max-w-md font-serif text-2xl italic leading-snug text-cream-50/90 sm:text-3xl">
              “A place where good food, coffee, conversations and memorable moments come
              together.”
            </p>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream-50/65">
              We built Pin & Pan as a neighbourhood café you'd want to return to — where the
              coffee is worth lingering over, and the room makes you want to stay a little
              longer.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[32px]">
              <motion.img
                style={{ y: reduce ? 0 : y }}
                src="/images/spread.jpg"
                alt="A table spread at Pin & Pan Cafe with coffee and food"
                className="aspect-[4/5] w-full scale-[1.03] object-cover sm:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
