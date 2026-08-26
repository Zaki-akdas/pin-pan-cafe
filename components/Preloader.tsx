"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

// Short, performance-friendly loading sequence:
// PIN > & PAN > CAFE, with a small filling "steam" bar like coffee being poured.
export default function Preloader() {
  const [phase, setPhase] = useState(0); // 0 P, 1 &, 2 CAFE
  const [done, setDone] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t1 = setTimeout(() => setPhase(1), 620);
    const t2 = setTimeout(() => setPhase(2), 1240);
    const t3 = setTimeout(() => setDone(true), 2600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso text-cream-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          aria-hidden
        >
          <div className="relative flex items-center gap-3 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={phase}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl"
              >
                {phase === 0 ? "PIN" : phase === 1 ? "& PAN" : "CAFE"}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* coffee-pour fill line */}
          <div className="mt-8 h-1 w-40 overflow-hidden rounded-full bg-cream-50/15">
            <motion.div
              className="h-full rounded-full bg-terracotta"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.4, ease: "easeInOut" }}
            />
          </div>
          <span className="mt-4 text-[10px] font-medium uppercase tracking-huge text-cream-50/50">
            Bawadiya Kalan • Bhopal
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
