"use client";

import { AsciiArt } from "@/components/ui/ascii-art";

export function AsciiArtBinarMelvstein() {
  return (
    <AsciiArt
      src="/assets/images/melvstein_profile.jpg"
      resolution={80}
      charset="binary"
      color="#3b82f6"
      inverted
      animationStyle="matrix"
      animateOnView={false}
      className="mx-auto aspect-square w-full max-w-lg bg-neutral-950"
    />
  );
}
