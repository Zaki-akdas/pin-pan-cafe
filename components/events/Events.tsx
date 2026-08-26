"use client";

import { motion } from "framer-motion";
import { events, eventsEmpty, type CafeEvent } from "@/lib/events";
import { waLink, waMessages } from "@/lib/site";
import { Eyebrow, Reveal, Button } from "../ui";
import { ArrowRight, WhatsAppIcon } from "../icons";
import ShareButton from "./ShareButton";

function EventCard({ event, index }: { event: CafeEvent; index: number }) {
  const detailUrl = `/events/${event.slug}`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-cream-50 shadow-soft ring-1 ring-espresso/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-cream-50/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-espresso backdrop-blur">
          {event.type}
        </span>
        {/* Stretched link to the event detail page (big tap target) */}
        <a href={detailUrl} aria-label={`View ${event.title}`} className="absolute inset-0 z-[1]" />
        {/* Share — sibling above the overlay (not nested in the link) */}
        <div className="absolute right-4 top-4 z-[2]">
          <ShareButton title={event.title} text={`${event.title} at Pin & Pan Cafe — `} path={detailUrl} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wide text-terracotta">
          <span>{event.date}</span>
          <span className="h-1 w-1 rounded-full bg-espresso/30" />
          <span>{event.time}</span>
        </div>
        <h3 className="mt-2 font-display text-xl font-bold leading-tight text-espresso">
          <a href={detailUrl} className="transition-colors hover:text-terracotta">{event.title}</a>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-espresso/60">{event.description}</p>
        <div className="mt-auto flex items-center justify-between pt-5">
          <a
            href={detailUrl}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-espresso/60 transition-colors hover:text-terracotta"
          >
            View event <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={waLink(waMessages.eventItem(event.title))}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-sage-600 transition-colors hover:text-sage-700"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" /> Reserve
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  return (
    <section id="events" className="bg-cream px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow className="text-espresso/70">The calendar</Eyebrow>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-espresso sm:text-7xl">
              WHAT'S HAPPENING
              <br />
              AT <span className="text-terracotta">PIN & PAN</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href={waLink(waMessages.event)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-espresso/70 transition-colors hover:text-sage-600"
            >
              <WhatsAppIcon className="h-4 w-4" /> Ask about upcoming events
            </a>
          </Reveal>
        </div>

        {eventsEmpty ? (
          <Reveal delay={0.1}>
            <div className="mt-12 flex min-h-[320px] flex-col items-center justify-center rounded-[32px] border border-dashed border-espresso/15 bg-cream-50 p-10 text-center">
              <span className="font-display text-2xl font-bold text-espresso">
                UPCOMING EVENTS — COMING SOON
              </span>
              <p className="mt-2 max-w-md text-sm text-espresso/60">
                We're planning some good ones. Follow {`@pinandpancafe`} or message us to be the
                first to know.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((e, i) => (
              <EventCard key={e.slug} event={e} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
