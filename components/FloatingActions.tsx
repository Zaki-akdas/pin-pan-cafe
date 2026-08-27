"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { waLink, waMessages } from "@/lib/site";
import { WhatsAppIcon, ArrowRight } from "./icons";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink(waMessages.general)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-5 z-40 hidden items-center gap-2 rounded-full bg-sage-500 py-3.5 pl-3.5 pr-5 text-espresso shadow-lift transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-float md:flex"
    >
      <WhatsAppIcon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
      <span className="text-xs font-bold uppercase tracking-wide">WhatsApp</span>
    </a>
  );
}

export function ReserveFloat() {
  return (
    <a
      href="#reserve"
      aria-label="Reserve a table"
      className="group fixed bottom-6 z-40 hidden items-center gap-2 rounded-full bg-terracotta py-3.5 pl-5 pr-4 text-cream-50 shadow-lift transition-all duration-300 ease-out-soft hover:-translate-y-0.5 hover:shadow-float md:left-5 md:flex"
    >
      <span className="text-xs font-bold uppercase tracking-wide">Reserve</span>
      <ArrowRight className="-scale-x-100 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
    </a>
  );
}

const tabs = [
  { label: "Menu", href: "/#menu" },
  { label: "Reserve", href: "/#reserve" },
];

export function MobileBottomNav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.nav
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[repeat(3,minmax(0,1fr))] gap-1.5 border-t border-espresso/10 bg-cream-50/95 px-2 py-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_-20px_rgba(43,22,12,0.4)] backdrop-blur-xl sm:gap-2 sm:px-3 sm:py-3 md:hidden"
        >
          <a href={tabs[0].href} className="flex min-w-0 items-center justify-center overflow-hidden rounded-xl bg-espresso/5 px-2 py-2.5 text-[11px] font-bold uppercase tracking-wide text-espresso sm:text-xs">
            <span className="truncate">{tabs[0].label}</span>
          </a>
          <a href={tabs[1].href} className="flex min-w-0 items-center justify-center overflow-hidden rounded-xl bg-terracotta px-2 py-2.5 text-[11px] font-bold uppercase tracking-wide text-cream-50 shadow-soft sm:text-xs">
            <span className="truncate">{tabs[1].label}</span>
          </a>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 items-center justify-center gap-1 overflow-hidden rounded-xl bg-sage-500/15 px-2 py-2.5 text-[11px] font-bold uppercase tracking-wide text-sage-700 sm:gap-1.5 sm:text-xs"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0" />
            <span className="truncate max-[360px]:hidden">WhatsApp</span>
            <span className="hidden truncate max-[360px]:inline">WA</span>
          </a>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
