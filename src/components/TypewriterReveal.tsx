"use client";

import { motion } from "motion/react";

type Props = {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
};

export default function TypewriterReveal({
  text,
  className,
  stagger = 0.05,
  delay = 0,
}: Props) {
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      aria-label={text}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}
