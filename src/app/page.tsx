"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    const handleWheel = (e: globalThis.WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      if (el.scrollWidth <= el.clientWidth) return;

      e.preventDefault();
      el.scrollBy({ left: e.deltaY });
    };

    const scrollHome = () => {
      el.scrollTo({ left: 0, behavior: "smooth" });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll-home", scrollHome);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll-home", scrollHome);
    };
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Navbar />
      <main
        ref={mainRef}
        className="flex h-screen w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth scrollbar scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent hover:scrollbar-thumb-cyan-400"
      >
        <div className="min-w-screen h-full shrink-0 snap-start">
          <HeroSection />
        </div>
        <div className="min-w-screen h-full shrink-0 snap-start">
          <ProjectsSection />
        </div>
        <div className="min-w-screen h-full shrink-0 snap-start">
          <SkillsSection />
        </div>
        <div className="min-w-screen h-full shrink-0 snap-start">
          <ExperienceSection />
        </div>
        <div className="min-w-screen h-full shrink-0 snap-start">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
