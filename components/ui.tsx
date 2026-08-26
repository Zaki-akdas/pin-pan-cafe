"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

// ---------- Scroll reveal wrapper ----------
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ---------- Staggered container ----------
export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ---------- Eyebrow label ----------
export function Eyebrow({
  children,
  className,
  center = false,
}: {
  children: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-huge",
        className
      )}
    >
      <span className={cn("h-px w-8 bg-terracotta/60", center && "order-first")} aria-hidden />
      {children}
      {center && <span className="h-px w-8 bg-terracotta/60" aria-hidden />}
    </span>
  );
}

// ---------- Buttons ----------
type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "solid" | "outline" | "light" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  target?: string;
  rel?: string;
  "aria-label"?: string;
};

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      href,
      className,
      variant = "solid",
      size = "md",
      onClick,
      target,
      rel,
      ...rest
    },
    ref
  ) => {
    const base =
      "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-out-soft will-change-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream";
    const sizes = {
      sm: "px-5 py-2.5 text-[11px]",
      md: "px-7 py-3.5 text-xs",
      lg: "px-8 py-4 text-[13px]",
    };
    const variants = {
      solid:
        "bg-espresso text-cream-50 shadow-soft hover:shadow-lift hover:bg-espresso-800",
      light:
        "bg-cream-50 text-espresso border border-espresso/10 shadow-soft hover:bg-white hover:shadow-lift",
      outline:
        "border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream-50",
      ghost: "text-espresso hover:bg-espresso/[0.04]",
    };
    return (
      <a
        ref={ref}
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={rest["aria-label"]}
        className={cn(base, sizes[size], variants[variant], className)}
      >
        {children}
      </a>
    );
  }
);
Button.displayName = "Button";

// ---------- Section shell ----------
export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden px-5 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16", className)}
    >
      <div className="mx-auto w-full max-w-shell">{children}</div>
    </section>
  );
}
