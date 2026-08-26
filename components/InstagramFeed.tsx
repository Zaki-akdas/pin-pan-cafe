"use client";

import { instagramPosts } from "@/lib/instagram";
import { site } from "@/lib/site";
import { Eyebrow, Reveal, Button } from "./ui";
import { InstagramIcon, ArrowUpRight } from "./icons";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="bg-espresso px-5 py-20 text-cream-50 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <Eyebrow className="text-cream-50/60">From the café, live</Eyebrow>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] sm:text-7xl">
              STRAIGHT FROM
              <br />
              <span className="text-butter">OUR FEED</span>
            </h2>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cream-50/70">
              <InstagramIcon className="h-4 w-4 text-butter" /> {site.instagram.handle}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Button
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              variant="light"
              size="lg"
            >
              Follow the vibe <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>

        {/* Grid — swipeable horizontal on mobile */}
        <div className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {instagramPosts.map((post, i) => (
            <a
              key={post.id}
              href={post.mediaUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square w-[72vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl ring-1 ring-cream-50/10 sm:w-full sm:max-w-none"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-110"
              />
              {/* corner icon */}
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-cream-50/90 text-espresso opacity-0 shadow-sm backdrop-blur transition-all duration-300 group-hover:opacity-100">
                <InstagramIcon className="h-4 w-4" />
              </span>
              {/* hover caption bar */}
              <div className="absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-espresso/85 to-transparent px-4 pb-4 pt-12 opacity-0 transition-all duration-400 ease-out-soft group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-medium text-cream-50">{post.caption}</p>
                <span className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-butter">
                  View on Instagram <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
              {/* Persistent tap cue for touch devices (no hover) */}
              <span className="absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-espresso/75 to-transparent px-3 pb-2.5 pt-8 text-[11px] font-semibold text-cream-50/90 opacity-100 transition-opacity duration-300 group-hover:opacity-0 md:hidden">
                <InstagramIcon className="h-3.5 w-3.5 text-butter" /> Open on Instagram
              </span>
            </a>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-xs text-cream-50/40">
            {site.instagram.handle} • Tag us to be featured
          </p>
        </Reveal>
      </div>
    </section>
  );
}
