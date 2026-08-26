import { site, flagLabel, waLink, waMessages } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon, LocationIcon, PhoneIcon, ArrowUpRight } from "./icons";

const explore = [
  { label: "Home", href: "/#top" },
  { label: "Menu", href: "/#menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Events", href: "/#events" },
  { label: "Reservations", href: "/#reserve" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#160f0a] px-5 pb-28 pt-20 text-cream-50 sm:px-8 md:px-12 lg:px-16">
      {/* ghost wordmark */}
      <div aria-hidden className="pointer-events-none absolute -bottom-[0.1em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-extrabold leading-none tracking-tighter text-cream-50/[0.03] lg:text-[16vw]">
        PIN&nbsp;& PAN
      </div>

      <div className="relative mx-auto max-w-shell">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-cream-50 shadow-float">
                <span className="font-display text-sm font-extrabold leading-none">P&</span>
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">
                PIN <span className="text-terracotta">&</span> PAN
              </span>
            </div>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-huge text-cream-50/50">
              Café • Food • Experiences
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-50/55">
              An Instagram-worthy café in Bawadiya Kalan, Bhopal — for good food, good coffee and
              good company.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-huge text-cream-50/45">Explore</h3>
            <ul className="mt-5 space-y-3">
              {explore.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group inline-flex items-center gap-2 text-sm text-cream-50/70 transition-colors hover:text-cream-50">
                    {l.label}
                    <ArrowUpRight className="h-3.5 w-3.5 translate-y-0.5 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-huge text-cream-50/45">Social</h3>
            <div className="mt-5 space-y-3">
              <a href={site.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-cream-50/70 transition-colors hover:text-butter">
                <InstagramIcon className="h-4 w-4" /> {site.instagram.handle}
              </a>
              <a href={waLink(waMessages.general)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-cream-50/70 transition-colors hover:text-sage-300">
                <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-huge text-cream-50/45">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-cream-50/70">
              <li className="flex items-start gap-2">
                <LocationIcon className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                <span>Bawadiya Kalan, Bhopal</span>
              </li>
              <li className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-terracotta" />
                <span>{flagLabel(site.phone)}</span>
              </li>
              <li className="flex items-start gap-2">
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-sage-400" />
                <span>WhatsApp — {flagLabel(site.whatsapp)}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream-50/40">© {site.year} Pin & Pan Cafe. All Rights Reserved.</p>
          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-xs font-medium text-cream-50/50 transition-colors hover:text-cream-50"
          >
            Back to top
            <ArrowUpRight className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
