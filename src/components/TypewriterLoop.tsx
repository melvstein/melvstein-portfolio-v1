"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Props = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
  cursorClassName?: string;
  loop?: boolean;
  hideCursorOnStop?: boolean;
};

export default function TypewriterLoop({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1500,
  className,
  cursorClassName,
  loop = true,
  hideCursorOnStop = false,
}: Props) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopped) return;

    const current = words[index % words.length];
    const isLastWord = index === words.length - 1;
    const done = !deleting && text === current;
    const cleared = deleting && text === "";

    if (done) {
      if (!loop && isLastWord) {
        const t = setTimeout(() => setStopped(true), pause);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (cleared) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 200);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () =>
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        ),
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause, loop, stopped]);

  const showCursor = !(stopped && hideCursorOnStop);

  return (
    <span className={className}>
      {text}
      {showCursor && (
        <motion.span
          aria-hidden
          className={
            cursorClassName ??
            "inline-block w-0.75 h-[1em] translate-y-0.5 bg-current ml-1 rounded-sm"
          }
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        />
      )}
    </span>
  );
}
