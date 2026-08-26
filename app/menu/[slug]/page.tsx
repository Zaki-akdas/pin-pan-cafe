import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { menuItems, getItemBySlug } from "@/lib/menu";
import ItemDetail from "@/components/menu/ItemDetail";
import Footer from "@/components/Footer";
import { FloatingWhatsApp, ReserveFloat, MobileBottomNav } from "@/components/FloatingActions";

export const dynamicParams = false;

export function generateStaticParams() {
  return menuItems.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = getItemBySlug(params.slug);
  if (!item) return {};
  return {
    title: `${item.name} — Pin & Pan Cafe`,
    description: item.description,
    openGraph: {
      title: `${item.name} — Pin & Pan Cafe`,
      description: item.description,
      images: [{ url: item.image }],
    },
  };
}

export default function MenuItemPage({ params }: { params: { slug: string } }) {
  const item = getItemBySlug(params.slug);
  if (!item) notFound();

  return (
    <>
      <main className="bg-cream px-5 pb-24 pt-28 sm:px-8 md:px-12 md:pt-32 lg:px-16">
        <div className="mx-auto max-w-shell">
          <span className="text-[11px] font-semibold uppercase tracking-huge text-espresso/50">
            Pin & Pan Cafe • Menu
          </span>
          <div className="mt-10">
            <ItemDetail item={item} />
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
