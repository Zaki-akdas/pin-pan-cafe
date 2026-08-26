import type { Metadata } from "next";
import Events from "@/components/events/Events";
import Footer from "@/components/Footer";
import { FloatingWhatsApp, ReserveFloat, MobileBottomNav } from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Events — Pin & Pan Cafe Bhopal",
  description:
    "See what's happening at Pin & Pan Cafe — live music, open mics, special dinners and weekend events in Bawadiya Kalan, Bhopal.",
};

export default function EventsPage() {
  return (
    <>
      <main className="pt-20">
        <Events />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ReserveFloat />
      <MobileBottomNav />
    </>
  );
}
