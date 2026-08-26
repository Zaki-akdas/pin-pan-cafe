"use client";

import { reviews, reviewsAvailable } from "@/lib/reviews";
import { site } from "@/lib/site";
import { Eyebrow, Reveal } from "./ui";
import { StarIcon, InstagramIcon } from "./icons";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-butter">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={`h-4 w-4 ${i < n ? "text-butter" : "text-espresso/15"}`} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-cream px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <Reveal className="text-center">
          <Eyebrow center className="justify-center text-espresso/70">The word on the street</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] text-espresso sm:text-7xl">
            GOOD FOOD. <span className="text-terracotta">GOOD WORDS.</span>
          </h2>
        </Reveal>

        {reviewsAvailable && reviews.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name + i} delay={i * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl bg-cream-50 p-7 shadow-soft ring-1 ring-espresso/5">
                  <Stars n={r.rating} />
                  <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-espresso">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-6 font-display font-bold text-espresso">
                    — {r.name}
                    {r.source && <span className="font-sans text-xs font-medium text-espresso/50"> via {r.source}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="mt-12 flex min-h-[240px] flex-col items-center justify-center rounded-[32px] border border-dashed border-espresso/15 bg-cream-50 p-10 text-center">
              <Stars n={5} />
              <p className="mt-3 font-display text-xl font-bold text-espresso">
                CUSTOMER REVIEWS — ADD VERIFIED REVIEWS
              </p>
              <p className="mt-2 max-w-lg text-sm text-espresso/60">
                We link real, verified guest feedback here once it's available. For now, see what
                we're sharing on Instagram.
              </p>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-xs font-semibold uppercase tracking-wide text-cream-50 transition-transform hover:scale-[1.02]"
              >
                <InstagramIcon className="h-4 w-4" /> {site.instagram.handle}
              </a>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
