"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]'
      );
      setHovering(isInteractive);
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const leave = () => setPos({ x: -100, y: -100 });

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  const ringSize = hovering ? 56 : 36;
  const dotSize = clicking ? 4 : 6;

  return (
    <>
      <div
        className="pointer-events-none fixed left-0 top-0 z-9999 rounded-full border border-blue-400/70 backdrop-blur-[1px] transition-[width,height,transform,background-color] duration-200 ease-out"
        style={{
          width: ringSize,
          height: ringSize,
          transform: `translate3d(${pos.x - ringSize / 2}px, ${pos.y - ringSize / 2}px, 0)`,
          backgroundColor: hovering ? "rgba(59,130,246,0.15)" : "transparent",
        }}
      />
      <div
        className="pointer-events-none fixed left-0 top-0 z-9999 rounded-full bg-cyan-400 transition-[width,height] duration-150 ease-out"
        style={{
          width: dotSize,
          height: dotSize,
          transform: `translate3d(${pos.x - dotSize / 2}px, ${pos.y - dotSize / 2}px, 0)`,
        }}
      />
    </>
  );
}
