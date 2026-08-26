"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { experiences } from "@/lib/vibe";
import { Eyebrow, Reveal } from "./ui";

export default function Experiences() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const active = experiences.find((e) => e.id === activeId) ?? experiences[0];

  return (
    <section id="experiences" className="bg-paper px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <Reveal className="text-center">
          <Eyebrow center className="justify-center text-espresso/70">Every crowd is welcome</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] text-espresso sm:text-7xl">
            YOUR KIND OF <span className="text-terracotta">PLACE</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-12 min-h-[380px] overflow-hidden rounded-[32px] sm:min-h-[520px]">
            {/* Background image crossfade */}
            <AnimatePresence mode="popLayout">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.title}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-espresso/10" />

            {/* Active description */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-xl"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-huge text-butter">
                    {active.line}
                  </span>
                  <h3 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-cream-50 sm:text-5xl">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-sm text-cream-50/80 sm:text-base">{active.description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        {/* Experience chips */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {experiences.map((e) => {
            const isActive = e.id === activeId;
            return (
              <button
                key={e.id}
                onClick={() => setActiveId(e.id)}
                className={`flex flex-col gap-1 rounded-2xl p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "bg-espresso text-cream-50 shadow-card"
                    : "bg-espresso/5 text-espresso hover:bg-espresso/10"
                }`}
              >
                <span className="font-display text-sm font-bold uppercase tracking-wide">{e.title}</span>
                <span className={`text-xs ${isActive ? "text-cream-50/60" : "text-espresso/50"}`}>
                  {e.line}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
