"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
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

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;
    const DRAG_THRESHOLD = 5;

    const NO_DRAG_SELECTOR =
      'a, button, input, textarea, select, label, [role="button"], [data-no-drag], ' +
      'p, h1, h2, h3, h4, h5, h6, span, li, code, pre, em, strong, blockquote, ' +
      'figcaption, td, th, small, mark, sub, sup, q, cite, time, abbr, ' +
      'img, video, canvas, svg';

    const canDrag = (target: EventTarget | null) =>
      target instanceof Element && !target.closest(NO_DRAG_SELECTOR);

    const onPointerOver = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (el.classList.contains("is-dragging")) return;
      el.classList.toggle("can-drag", canDrag(e.target));
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (e.button !== 0) return;
      if (!canDrag(e.target)) return;

      isDown = true;
      moved = false;
      startX = e.clientX;
      startScroll = el.scrollLeft;
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) < DRAG_THRESHOLD) return;
      if (!moved) {
        moved = true;
        el.setPointerCapture(e.pointerId);
        el.classList.add("is-dragging");
      }
      el.scrollLeft = startScroll - dx;
    };

    const endDrag = (e: PointerEvent) => {
      if (!isDown) return;
      isDown = false;
      if (moved) {
        el.classList.remove("is-dragging");
        if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      }
    };

    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("pointerover", onPointerOver);
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("click", onClickCapture, true);
    window.addEventListener("scroll-home", scrollHome);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("pointerover", onPointerOver);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("scroll-home", scrollHome);
    };
  }, []);

  return (
    <div className="min-h-screen w-screen flex flex-col">
      <Navbar />
      <main
        ref={mainRef}
        className="flex h-screen w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [&.can-drag]:cursor-grab [&.is-dragging]:cursor-grabbing [&.is-dragging]:snap-none [&.is-dragging]:scroll-auto [&.is-dragging]:select-none scrollbar scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent hover:scrollbar-thumb-cyan-400"
      >
        <div data-drag-zone className="min-w-screen h-full shrink-0 snap-start">
          <AboutSection />
        </div>
        <div data-drag-zone className="min-w-screen h-full shrink-0 snap-start">
          <ProjectsSection />
        </div>
        <div data-drag-zone className="min-w-screen h-full shrink-0 snap-start">
          <SkillsSection />
        </div>
        <div data-drag-zone className="min-w-screen h-full shrink-0 snap-start">
          <ExperienceSection />
        </div>
        <div data-drag-zone className="min-w-screen h-full shrink-0 snap-start">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
