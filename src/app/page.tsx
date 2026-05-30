"use client";

import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import AboutSection from "@/components/sections/AboutSection";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col scroll-smooth">
      <FlickeringGrid
        className="fixed inset-0 z-0 mask-[radial-gradient(350px_circle_at_center,white,transparent)] md:mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <HomeSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

