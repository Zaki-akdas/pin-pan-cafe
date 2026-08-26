import type { Metadata, Viewport } from "next";
import { DM_Sans, Sora, DM_Serif_Display } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover", // enables env(safe-area-inset-*) for notched devices
  themeColor: "#2b160c",
};

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pinandpancafe.in"),
  title: {
    default: "Pin & Pan Cafe Bhopal | Café & Restaurant in Bawadiya Kalan",
    template: "%s | Pin & Pan Cafe Bhopal",
  },
  description:
    "Discover Pin & Pan Cafe in Bawadiya Kalan, Bhopal. Explore the menu, food gallery, upcoming events and reserve your table. Follow @pinandpancafe for the latest updates.",
  keywords: [
    "Pin and Pan Cafe Bhopal",
    "Pin & Pan Cafe",
    "Cafe Bawadiya Kalan",
    "Cafe in Bhopal",
    "Restaurant Bawadiya Kalan",
    "Best cafes Bhopal",
    "Food cafe Bhopal",
    "Cafe near Bawadiya Kalan",
    "Restaurants Bhopal",
    "Cafe events Bhopal",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://pinandpancafe.in",
    title: "Pin & Pan Cafe Bhopal | Café & Restaurant in Bawadiya Kalan",
    description:
      "A café experience designed for great food, conversations and celebrations. Explore the menu, gallery and events, then reserve your table.",
    siteName: site.name,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 800,
        alt: "Pin & Pan Cafe, Bawadiya Kalan Bhopal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pin & Pan Cafe Bhopal | Café & Restaurant in Bawadiya Kalan",
    description:
      "Explore the menu, food gallery, upcoming events and reserve your table at Pin & Pan Cafe, Bawadiya Kalan, Bhopal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  image: "https://pinandpancafe.in/images/hero.jpg",
  description:
    "A café and restaurant in Bawadiya Kalan, Bhopal offering coffee, brunch, wood-fired food, desserts and events.",
  servesCuisine: ["Café", "Coffee", "Bakery", "Continental"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bawadiya Kalan",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  url: "https://pinandpancafe.in",
  sameAs: [site.instagram.url],
  priceRange: "₹₹",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable} ${dmSerif.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain font-sans antialiased">
        <Preloader />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
