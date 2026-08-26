import Hero from "@/components/Hero";
import MoodSelector from "@/components/MoodSelector";
import Marquee from "@/components/Marquee";
import MenuExplorer from "@/components/menu/MenuExplorer";
import SignatureDish from "@/components/SignatureDish";
import FoodGallery from "@/components/FoodGallery";
import InstagramFeed from "@/components/InstagramFeed";
import CafeVibe from "@/components/CafeVibe";
import CafeStory from "@/components/CafeStory";
import Experiences from "@/components/Experiences";
import Events from "@/components/events/Events";
import ReservationForm from "@/components/reservation/ReservationForm";
import Location from "@/components/Location";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import {
  FloatingWhatsApp,
  ReserveFloat,
  MobileBottomNav,
} from "@/components/FloatingActions";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <MoodSelector />
        <Marquee />
        <MenuExplorer />
        <SignatureDish />
        <FoodGallery />
        <InstagramFeed />
        <CafeVibe />
        <CafeStory />
        <Experiences />
        <Events />
        <ReservationForm />
        <Location />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ReserveFloat />
      <MobileBottomNav />
    </>
  );
}
