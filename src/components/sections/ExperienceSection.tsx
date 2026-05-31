"use client";

import { useEffect, useRef, useState } from "react";
import { experiences } from "@/data/Experience";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ProgressiveBlur } from "../ui/progressive-blur";
import { TimelineMotion } from "@/components/ui/timeline-motion";
import { HyperText } from "../ui/hyper-text";

const ExperienceSection = () => {
  const scrollRootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const root = scrollRootRef.current;

    if (!root) return;

    const viewport = root.querySelector<HTMLDivElement>(
      '[data-slot="scroll-area-viewport"]'
    );

    if (!viewport) return;

    viewportRef.current = viewport;

    const handle = () => {
      const { scrollTop, scrollHeight, clientHeight } = viewport;
      setAtBottom(scrollTop + clientHeight >= scrollHeight - 4);
    };

    handle();
    viewport.addEventListener("scroll", handle, { passive: true });

    return () => viewport.removeEventListener("scroll", handle);
  }, []);

  return (
    <section id="experience" className="section-container">
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-center relative z-10">
        <div className="text-center">
          <HyperText className="text-xs font-heading font-bold text-primary tracking-widest uppercase mb-2">
            My Journey
          </HyperText>
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            Experience Timeline
          </h2>
        </div>

        <div className="md:col-span-2 relative h-150">
          <ScrollArea ref={scrollRootRef} className="relative h-150 overflow-hidden">
            <TimelineMotion data={experiences} scrollContainerRef={viewportRef} />
            <div
              className={`pointer-events-none transition-opacity duration-300 ${
                atBottom ? "opacity-0" : "opacity-100"
              }`}
            >
              <ProgressiveBlur position="bottom" height="40%" />
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;