import { AboutHero } from "@/components/about/about-hero";
import { MissionVision } from "@/components/about/mission-vision";
import { Timeline } from "@/components/about/timeline";
import { TeamSection } from "@/components/about/team-section";

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutHero />
      <MissionVision />
      <Timeline />
      <TeamSection />
    </div>
  );
}