"use client";

import { site, waLink, waMessages } from "@/lib/site";
import { Reveal } from "./ui";
import { ArrowRight, WhatsAppIcon, InstagramIcon, ArrowUpRight } from "./icons";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso px-5 py-28 text-cream-50 sm:px-8 sm:py-36 md:px-12 lg:px-16">
      <img
        src="/images/event-lights.jpg"
        alt="Warm lights at Pin & Pan Cafe in the evening"
        className="absolute inset-0 h-full w-full object-cover opacity-35"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-espresso/80 to-espresso" />

      <div className="relative mx-auto max-w-shell text-center">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-huge text-butter">Bawadiya Kalan • Bhopal</p>
          <h2 className="mx-auto mt-5 max-w-4xl font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.02em] sm:text-8xl">
            SEE YOU AT
            <br />
            <span className="text-terracotta">PIN & PAN?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md font-serif text-2xl italic text-cream-50/85 sm:text-3xl">
            Good food is better when shared.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#reserve"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream-50 shadow-float transition-all hover:-translate-y-0.5 hover:bg-tomato"
            >
              Reserve a table <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream-50 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-espresso transition-all hover:-translate-y-0.5"
            >
              Explore menu <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-colors hover:bg-sage-500 hover:text-espresso"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-50/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-cream-50 transition-colors hover:bg-cream-50 hover:text-espresso"
            >
              <InstagramIcon className="h-4 w-4" /> Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
