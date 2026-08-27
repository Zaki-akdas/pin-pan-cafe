"use client";

import { site, flagLabel, waLink, waMessages } from "@/lib/site";
import { Eyebrow, Reveal, Button } from "./ui";
import { LocationIcon, PhoneIcon, WhatsAppIcon, ArrowUpRight } from "./icons";

function StylizedMap() {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[32px] bg-[#e8ddc8] sm:aspect-[16/10]">
      {/* abstract map roads */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden>
        <path d="M0 300 C120 260 180 340 320 300 S520 240 600 300" stroke="#d8c9ad" strokeWidth="22" fill="none" />
        <path d="M0 140 C150 120 260 220 600 150" stroke="#d8c9ad" strokeWidth="26" fill="none" />
        <path d="M180 0 C200 150 160 300 260 400" stroke="#d8c9ad" strokeWidth="18" fill="none" />
        <path d="M420 0 C400 160 480 280 440 400" stroke="#d8c9ad" strokeWidth="14" fill="none" />
        <path d="M0 200 C160 180 320 260 600 220" stroke="#d8c9ad" strokeWidth="10" fill="none" />
        {/* blocks */}
        <rect x="40" y="30" width="90" height="70" rx="8" fill="#ddcfa9" />
        <rect x="250" y="40" width="120" height="80" rx="8" fill="#ddcfa9" />
        <rect x="470" y="60" width="100" height="90" rx="8" fill="#ddcfa9" />
        <rect x="60" y="220" width="110" height="80" rx="8" fill="#ddcfa9" />
        <rect x="470" y="230" width="110" height="90" rx="8" fill="#ddcfa9" />
        {/* green zones */}
        <ellipse cx="150" cy="150" rx="50" ry="36" fill="#bcc9a4" />
        <ellipse cx="520" cy="340" rx="70" ry="40" fill="#bcc9a4" />
      </svg>

      {/* Location marker */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex flex-col items-center">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-cream-50 shadow-float">
            <LocationIcon className="h-6 w-6" />
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-terracotta/40" />
          </span>
          <div className="mt-2 rounded-full bg-espresso px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-cream-50">
            Pin & Pan Cafe
          </div>
        </div>
      </div>

      {/* Label chips */}
      <span className="absolute bottom-3 left-3 rounded-full bg-cream-50/90 px-3 py-1 text-[11px] font-semibold text-espresso backdrop-blur">
        Bawadiya Kalan
      </span>
      <span className="absolute bottom-3 right-3 rounded-full bg-cream-50/90 px-3 py-1 text-[11px] font-semibold text-espresso backdrop-blur">
        Bhopal
      </span>
    </div>
  );
}

export default function Location() {
  const mapsSearch = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Pin & Pan Cafe Bawadiya Kalan Bhopal"
  )}`;

  return (
    <section id="location" className="bg-paper px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
      <div className="mx-auto max-w-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <Eyebrow className="text-espresso/70">Find us</Eyebrow>
            <h2 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] text-espresso sm:text-6xl">
              YOUR NEXT
              <br />
              <span className="text-terracotta">BAWADIYA KALAN</span> STOP
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-espresso/70">
              Discover Pin & Pan Cafe in Bawadiya Kalan, Bhopal. Grab a coffee pulled with care,
              order something worth the trip, and make it your regular spot.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream-50 p-4 ring-1 ring-espresso/10 sm:p-5">
                <p className="font-display text-2xl font-extrabold text-espresso sm:text-3xl">BAWADIYA</p>
                <p className="font-display text-2xl font-extrabold text-espresso/40 sm:text-3xl">KALAN</p>
              </div>
              <div className="rounded-2xl bg-cream-50 p-4 ring-1 ring-espresso/10 sm:p-5">
                <p className="font-display text-2xl font-extrabold text-espresso sm:text-3xl">BHOPAL</p>
                <p className="font-display text-2xl font-extrabold text-espresso/40 sm:text-3xl">MP</p>
              </div>
            </div>

            <div className="mt-6 space-y-2 text-sm text-espresso/70">
              <p className="flex items-center gap-2">
                <LocationIcon className="h-4 w-4 text-terracotta" />
                {flagLabel(site.address)}
              </p>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 text-terracotta" />
                {flagLabel(site.phone)}
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4 text-sage-600" />
                WhatsApp — {flagLabel(site.whatsapp)}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={mapsSearch} target="_blank" rel="noreferrer" size="lg">
                Get directions <ArrowUpRight className="h-4 w-4" />
              </Button>
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-espresso/25 px-7 py-4 text-xs font-semibold uppercase tracking-wide text-espresso transition-colors hover:bg-espresso hover:text-cream-50"
              >
                <WhatsAppIcon className="h-4 w-4" /> Message us
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <StylizedMap />
            <p className="mt-3 text-center text-xs text-espresso/40">
              Map is a placeholder — an exact map pin will drop in once the verified address is added.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
