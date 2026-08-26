"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, waMessages, waLink } from "@/lib/site";
import { InstagramIcon, WhatsAppIcon, CloseIcon, MenuIcon, ArrowUpRight } from "./icons";
import { cn } from "@/lib/cn";

const links = [
  { label: "Menu", href: "/#menu" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Events", href: "/#events" },
  { label: "Reserve", href: "/#reserve" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 ease-out-soft sm:px-5",
            "mt-3 w-[calc(100%-2rem)] max-w-shell glass shadow-glass",
            scrolled && "shadow-lift"
          )}
        >
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2.5" aria-label="Pin & Pan Cafe home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso text-cream-50 transition-transform duration-500 hover:rotate-6">
              <span className="font-display text-[13px] font-extrabold leading-none tracking-tight">P&</span>
            </span>
            <span className="font-display text-[15px] font-extrabold tracking-tight text-espresso sm:text-base">
              PIN <span className="text-terracotta">&</span> PAN
            </span>
          </a>

          {/* Center links (desktop) */}
          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-espresso/70 transition-colors hover:bg-espresso/[0.05] hover:text-espresso"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right socials (desktop) */}
          <div className="hidden items-center gap-1.5 lg:flex">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full text-espresso/70 transition-all hover:-translate-y-0.5 hover:bg-espresso hover:text-cream-50"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={waLink(waMessages.general)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full text-espresso/70 transition-all hover:-translate-y-0.5 hover:bg-sage-500 hover:text-cream-50"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#reserve"
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-espresso px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-cream-50 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-espresso-800"
            >
              Reserve
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso text-cream-50 lg:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-espresso text-cream-50"
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between px-5 py-5 sm:px-8">
              <span className="font-display text-lg font-extrabold">
                PIN <span className="text-terracotta">&</span> PAN
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/20 text-cream-50"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col items-center justify-center gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07 }}
                  className="group flex items-center gap-3 font-display text-4xl font-extrabold uppercase tracking-tight text-cream-50/90 sm:text-6xl"
                >
                  {l.label}
                  <ArrowUpRight className="h-6 w-6 text-terracotta opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>
              ))}
            </nav>

            <div className="grid grid-cols-2 gap-3 px-5 pb-8 sm:px-8">
              <a
                href={waLink(waMessages.general)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-sage-500 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-espresso"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-cream-50/20 px-4 py-4 text-xs font-semibold uppercase tracking-wide text-cream-50"
              >
                <InstagramIcon className="h-4 w-4" /> {site.instagram.handle}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
