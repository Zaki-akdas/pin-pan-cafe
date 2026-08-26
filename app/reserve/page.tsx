import type { Metadata } from "next";
import ReservationForm from "@/components/reservation/ReservationForm";
import Footer from "@/components/Footer";
import { FloatingWhatsApp, MobileBottomNav } from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Reserve a Table — Pin & Pan Cafe Bhopal",
  description:
    "Save your table at Pin & Pan Cafe, Bawadiya Kalan, Bhopal. Request a reservation and we'll confirm availability by phone.",
};

export default function ReservePage() {
  return (
    <>
      <main className="pt-14">
        <ReservationForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </>
  );
}
