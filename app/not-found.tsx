import Link from "next/link";
import { ArrowRight } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream px-5 py-20 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-huge text-terracotta">404</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold tracking-tight text-espresso sm:text-7xl">
        NOTHING BREWING HERE
      </h1>
      <p className="mt-4 max-w-md text-espresso/60">
        The page you're looking for isn't on the menu. Let's get you back to the good stuff.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-4 text-xs font-semibold uppercase tracking-wide text-cream-50 transition-transform hover:scale-[1.02]"
      >
        Back to home <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
}
