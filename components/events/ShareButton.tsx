"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { shareContent, waShare, copyText, type SharePayload } from "@/lib/share";
import { ShareIcon, WhatsAppIcon, LinkIcon, InstagramIcon } from "../icons";
import { site } from "@/lib/site";

export default function ShareButton({
  title,
  text,
  path,
}: {
  title: string;
  text: string;
  path: string;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState(path);
  const ref = useRef<HTMLDivElement>(null);

  // Build the absolute share URL only after mount so SSR and client
  // render the same markup (avoids a React hydration mismatch).
  useEffect(() => {
    setUrl(typeof window !== "undefined" ? `${window.location.origin}${path}` : path);
  }, [path]);

  const payload: SharePayload = { title, text, url };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const handleShare = async () => {
    await shareContent(payload);
    setOpen(false);
  };

  const handleCopy = async () => {
    await copyText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1200);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        aria-label="Share"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-50 text-espresso shadow-soft transition-transform hover:scale-105"
      >
        <ShareIcon className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 top-full z-30 mt-2 flex flex-col gap-1 rounded-2xl bg-cream-50 p-2 shadow-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={handleShare} className="flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium text-espresso hover:bg-espresso/5">
              <ShareIcon className="h-4 w-4" /> Share
            </button>
            <a
              href={waShare(text, url)}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium text-espresso hover:bg-espresso/5"
            >
              <WhatsAppIcon className="h-4 w-4 text-sage-600" /> WhatsApp
            </a>
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium text-espresso hover:bg-espresso/5"
            >
              <InstagramIcon className="h-4 w-4 text-terracotta" /> Instagram
            </a>
            <button onClick={handleCopy} className="flex items-center gap-2 rounded-xl px-3 py-2 text-left text-sm font-medium text-espresso hover:bg-espresso/5">
              <LinkIcon className="h-4 w-4" /> {copied ? "Copied!" : "Copy link"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
