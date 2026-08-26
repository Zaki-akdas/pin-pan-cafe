import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { events, getEventBySlug } from "@/lib/events";
import EventDetail from "@/components/events/EventDetail";
import Footer from "@/components/Footer";
import { FloatingWhatsApp, ReserveFloat, MobileBottomNav } from "@/components/FloatingActions";

export const dynamicParams = false;

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const event = getEventBySlug(params.slug);
  if (!event) return {};
  return {
    title: `${event.title} — Pin & Pan Cafe Bhopal`,
    description: event.description,
    openGraph: {
      title: `${event.title} — Pin & Pan Cafe`,
      description: event.description,
      images: [{ url: event.image }],
    },
  };
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEventBySlug(params.slug);
  if (!event) notFound();

  return (
    <>
      <main className="bg-cream px-5 pb-24 pt-28 sm:px-8 md:px-12 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-shell">
          <span className="text-[11px] font-semibold uppercase tracking-huge text-espresso/50">
            Pin & Pan Cafe • Events
          </span>
          <div className="mt-8">
            <EventDetail event={event} />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ReserveFloat />
      <MobileBottomNav />
    </>
  );
}
