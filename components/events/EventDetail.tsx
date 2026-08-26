"use client";

import type { CafeEvent } from "@/lib/events";
import { waLink, waMessages } from "@/lib/site";
import { ArrowRight, WhatsAppIcon } from "../icons";
import ShareButton from "./ShareButton";

export default function EventDetail({ event }: { event: CafeEvent }) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-[32px]">
        <img src={event.image} alt={event.title} className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-cream-50/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-espresso backdrop-blur">
          {event.type}
        </span>
        <div className="absolute right-5 top-5">
          <ShareButton title={event.title} text={`${event.title} at Pin & Pan Cafe — `} path={`/events/${event.slug}`} />
        </div>
      </div>

      <div className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold uppercase tracking-wide text-terracotta">
          <span className="rounded-full bg-terracotta/10 px-3 py-1">{event.date}</span>
          <span className="rounded-full bg-terracotta/10 px-3 py-1">{event.time}</span>
        </div>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-espresso sm:text-6xl">
          {event.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-espresso/70">{event.description}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#reserve"
            className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-espresso px-6 py-4 text-xs font-semibold uppercase tracking-wide text-cream-50 transition-all hover:bg-espresso-800"
          >
            Reserve your spot <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={waLink(waMessages.eventItem(event.title))}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-espresso/20 px-6 py-4 text-xs font-semibold uppercase tracking-wide text-espresso transition-colors hover:bg-sage-500/10"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp us
          </a>
        </div>

        <a
          href="/#events"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-espresso/50 hover:text-terracotta"
        >
          ← Back to events
        </a>
      </div>
    </div>
  );
}
