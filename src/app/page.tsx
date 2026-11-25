import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { GallerySection } from "@/components/sections/GallerySection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { CompetitionsSection } from "@/components/sections/CompetitionsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-festival">
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <GallerySection />
      <ScheduleSection />
      <CompetitionsSection />
      <Footer />
    </main>
  );
}
