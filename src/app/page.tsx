import ChooseUs from "@/components/ChooseUs";
import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebiners from "@/components/UpcomingWebiners";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedSection />
        <ChooseUs />
        <TestimonialCards />
        <UpcomingWebiners />
      </main>
    </>
  );
}
