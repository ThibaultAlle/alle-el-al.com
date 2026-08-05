import { Hero } from "@/components/sections/Hero";
import { ResearchAreas } from "@/components/sections/ResearchAreas";
import { News } from "@/components/sections/News";
import { Publications } from "@/components/sections/Publications";
import { Team } from "@/components/sections/Team";

export default function AlleLabHome() {
  return (
    <>
      <Hero />
      {/* Research Areas + Collaborations: black (default) */}
      <ResearchAreas />

      {/* News + Publications: alternate dark tone */}
      <div className="bg-section-alt">
        <News />
        <Publications />
      </div>

      {/* Team: black again */}
      <Team />
    </>
  );
}
