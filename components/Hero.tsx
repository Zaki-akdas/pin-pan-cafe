"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { Button } from "./ui";
import { InstagramIcon, ArrowRight, ArrowUpRight } from "./icons";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // If the user prefers reduced motion, the preloader is skipped instantly,
  // so reveal the hero content immediately instead of waiting for the intro.
  const intro = reduce ? 0 : 2.7;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-26%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const darkFade = useTransform(scrollYProgress, [0.4, 1], [0, 1]);

  return (
    <div ref={ref} id="top" className="relative overflow-hidden">
      <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso text-cream-50">
        {/* Background image with cinematic zoom */}
        <motion.div
          style={{ scale: reduce ? 1 : imageScale, y: reduce ? 0 : imageY }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero.jpg"
            alt="Inside Pin & Pan Cafe with warm lighting and city view"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/10 to-transparent" />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-espresso/40 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : contentOpacity }}
          className="relative z-10 mx-auto w-full max-w-shell px-5 pb-24 pt-40 sm:px-8 md:px-12 md:pb-28 lg:px-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: intro, duration: 0.8 }}
            className="mb-7 inline-flex items-center gap-2.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-terracotta" />
            <span className="text-[10px] font-semibold uppercase tracking-huge text-cream-50/85 sm:text-[11px]">
              Bawadiya Kalan <span className="text-cream-50/40">•</span> Bhopal
            </span>
          </motion.div>

          <h1 className="max-w-6xl font-display text-[clamp(2.7rem,13vw,5.2rem)] font-extrabold leading-[0.94] tracking-[-0.02em] sm:text-[9.5vw] lg:text-[7.2vw]">
            {["GOOD FOOD.", "GOOD MOOD."].map((line, i) => (
              <motion.span
                key={line}
                className="block"
                initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: intro + 0.1 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            ))}
            <motion.span
              className="block text-gradient-cream"
              initial={{ opacity: 0, y: "60%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: intro + 0.34, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              PIN <span className="text-terracotta">&</span> PAN.
            </motion.span>
          </h1>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: intro + 0.45, duration: 0.8 }}
              className="max-w-md text-base leading-relaxed text-cream-50/80 sm:text-lg"
            >
              A café experience designed for great food, conversations,
              celebrations and memorable moments.
            </motion.p>

            <motion.div
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: intro + 0.55, duration: 0.8 }}
            >
              <Button href="#menu" variant="light" size="lg" className="w-full justify-center sm:w-auto whitespace-nowrap">
                Explore Menu <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button href="#reserve" variant="outline" size="lg" className="w-full justify-center whitespace-nowrap border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-espresso sm:w-auto">
                Reserve a Table
              </Button>
            </motion.div>
          </div>

          <motion.a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: intro + 0.7, duration: 0.8 }}
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-cream-50/70 transition-colors hover:text-butter"
          >
            <InstagramIcon className="h-4 w-4" /> {site.instagram.handle}
            <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity }}
          className="absolute bottom-6 right-6 z-10 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-huge text-cream-50/60">
            <span className="[writing-mode:vertical-rl]">scroll</span>
            <span className="h-10 w-px animate-pulse bg-cream-50/40" />
          </div>
        </motion.div>
      </section>

      {/* Dark-to-cream masked reveal transition */}
      <motion.div style={{ opacity: darkFade }} className="pointer-events-none absolute inset-0 z-[5]">
        <div className="absolute inset-0 bg-cream" />
      </motion.div>
      <div className="absolute -bottom-24 left-1/2 z-10 h-48 w-[120%] -translate-x-1/2 rounded-[50%] bg-cream" />
    </div>
  );
}
