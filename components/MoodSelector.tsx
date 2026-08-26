"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { moods } from "@/lib/moods";
import { Eyebrow, Reveal } from "./ui";
import { ArrowRight } from "./icons";

export default function MoodSelector() {
  const [active, setActive] = useState(moods[0]);

  return (
    <section id="mood" className="bg-cream px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <Reveal>
          <Eyebrow className="text-espresso/70">Find your vibe</Eyebrow>
          <h2 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[0.97] tracking-[-0.02em] text-espresso sm:text-6xl lg:text-7xl">
            WHAT ARE YOU
            <br />
            IN THE <span className="font-serif italic font-normal text-terracotta">mood</span> FOR?
          </h2>
        </Reveal>

        <div className="relative mt-12 grid min-h-[420px] gap-6 md:grid-cols-[1fr_1.1fr] md:items-stretch lg:gap-10">
          {/* Category list */}
          <Reveal className="relative z-10">
            <div className="flex flex-col">
              {moods.map((m) => {
                const isActive = active.id === m.id;
                return (
                  <button
                    key={m.id}
                    onMouseEnter={() => setActive(m)}
                    onFocus={() => setActive(m)}
                    onClick={() => setActive(m)}
                    className={`group relative border-b border-espresso/10 py-4 text-left transition-all duration-500 ${
                      isActive ? "pl-5" : "pl-0"
                    }`}
                  >
                    <span
                      className={`absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-full bg-terracotta transition-all duration-500 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span
                      className={`font-display font-extrabold uppercase tracking-tight transition-all duration-500 ${
                        isActive
                          ? "text-3xl text-espresso sm:text-4xl"
                          : "text-2xl text-espresso/35 sm:text-3xl"
                      }`}
                    >
                      {m.label}
                    </span>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden text-sm text-espresso/60"
                        >
                          {m.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Hover image preview */}
          <Reveal
            delay={0.1}
            className="relative min-h-[300px] overflow-hidden rounded-[32px] bg-espresso sm:min-h-[380px] md:min-h-0"
          >
            <AnimatePresence mode="popLayout">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.label}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              <span className="font-display text-2xl font-extrabold uppercase tracking-tight text-cream-50 sm:text-3xl">
                {active.label}
              </span>
              <a
                href={`#menu`}
                className="group flex h-11 w-11 items-center justify-center rounded-full bg-cream-50 text-espresso transition-transform hover:scale-105"
                aria-label={`Explore ${active.label}`}
              >
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
