import type { Metadata } from "next";
import MenuExplorer from "@/components/menu/MenuExplorer";
import Footer from "@/components/Footer";
import { FloatingWhatsApp, ReserveFloat, MobileBottomNav } from "@/components/FloatingActions";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Menu — Pin & Pan Cafe Bhopal",
  description:
    "Explore the interactive menu at Pin & Pan Cafe, Bawadiya Kalan, Bhopal — coffee, brunch, pizza, pasta, burgers, desserts and specials.",
};

export default function MenuPage() {
  return (
    <>
      <main className="bg-paper">
        <div className="bg-espresso px-5 pb-14 pt-32 text-cream-50 sm:px-8 md:px-12 lg:px-16">
          <div className="mx-auto max-w-shell">
            <Eyebrow className="text-cream-50/60">The digital menu</Eyebrow>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] sm:text-7xl">
              EAT WELL,
              <br />
              <span className="text-terracotta">ORDER BETTER.</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-cream-50/70">
              Browse by category, tap any dish for details, and send an enquiry straight to our
              WhatsApp. Prices are placeholders until the official menu lands.
            </p>
          </div>
        </div>
        <MenuExplorer />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ReserveFloat />
      <MobileBottomNav />
    </>
  );
}
