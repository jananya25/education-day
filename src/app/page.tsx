import { HeroSection } from "@/components/HeroSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { EventCard } from "@/components/EventCard";
import FooterSection from "@/components/FooterSection";
import { MovingCards } from "@/components/MovingCards";
import FAQS from '@/components/ui/FAQS'
export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <ScheduleSection/>
      <EventCard/>
      <MovingCards/>
      <FAQS/>
      <FooterSection/>
    </main>
  );
}
