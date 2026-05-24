"use client";

import type { WheelEvent } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import Image from "next/image";

const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
  if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
    event.preventDefault();
    event.currentTarget.scrollBy({
      left: event.deltaY,
      behavior: "auto",
    });
  }
};

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col font-sans">
      <Navbar />
      <main onWheel={handleWheel} className="flex h-screen w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory">
        <div className="min-w-screen h-full shrink-0 snap-start">
          <HeroSection />
        </div>
        <div className="min-w-screen h-full shrink-0 snap-start">
          <HeroSection />
        </div>
        <div className="min-w-screen h-full shrink-0 snap-start flex items-center justify-center px-8">
          <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-[0_0_50px_rgba(15,23,42,0.25)] backdrop-blur-xl">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-slate-100">
              Horizontal scroll is active
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Use your mouse wheel, trackpad, or touch gesture to scroll horizontally across the panels.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-base font-medium sm:flex-row sm:justify-center">
              <a
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={16}
                  height={16}
                />
                Deploy Now
              </a>
              <a
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-39.5"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
