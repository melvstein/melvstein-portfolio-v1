"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { Experience } from "@/data/Experience";
import { MapPinned } from "lucide-react";

const accentMap = {
  blue: {
    dot: "border-primary",
    inner: "bg-primary",
    company: "text-primary",
    hover: "hover:border-primary/20 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-shadow duration-300",
    chip: "border-primary/20 text-primary",
    line: "from-primary via-primary/20",
  },
  cyan: {
    dot: "border-secondary",
    inner: "bg-secondary",
    company: "text-secondary",
    hover: "hover:border-secondary/20 hover:shadow-[0_0_40px_rgba(0,255,255,0.15)] transition-shadow duration-300",
    chip: "border-secondary/20 text-secondary",
    line: "from-secondary via-secondary/20",
  },
  purple: {
    dot: "border-accent",
    inner: "bg-accent",
    company: "text-accent",
    hover: "hover:border-accent/20 hover:shadow-[0_0_40px_rgba(128,0,128,0.15)] transition-shadow duration-300",
    chip: "border-accent/20 text-accent",
    line: "from-accent via-accent/20",
  },
} as const;

export interface TimelineMotionProps {
  data: Experience[];
  /** Scroll container ref (e.g. ScrollArea viewport). Defaults to window. */
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
}

export const TimelineMotion = ({
  data,
  scrollContainerRef,
}: TimelineMotionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setHeight(trackRef.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    container: scrollContainerRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <div ref={ref} className="relative ml-4 md:ml-32 py-4">
      <div
        ref={trackRef}
        className="relative border-l border-primary/20 space-y-16"
      >
        <motion.div
          style={{ height: lineHeight, opacity: lineOpacity }}
          className="absolute -left-px top-0 w-0.5 bg-linear-to-b from-primary via-primary/20 to-accent/20 rounded-full"
        />

        {data.map((exp, i) => {
          const a = accentMap[exp.accent];
          return (
            <motion.div
              key={`${exp.company}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="relative pl-8 md:pl-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08 + 0.1,
                  ease: "backOut",
                }}
                className={`absolute -left-2.25 top-1.5 w-4.5 h-4.5 bg-slate-950 border-2 rounded-full flex items-center justify-center ${a.dot}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${a.inner}`} />
              </motion.div>

              <div className="md:absolute md:-left-32 md:top-1.5 md:w-28 text-left md:text-right tracking-tighter font-heading text-sm font-semibold text-muted-foreground">
                {exp.date}
              </div>

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`backdrop-blur-xl bg-primary/5 border border-primary/10 dark:border-white/10 p-6 md:p-8 rounded-2xl space-y-3 transition-colors ${a.hover}`}
              >
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                  {exp.role} <span className="text-xs font-medium uppercase"> · {exp.employmentType}</span>
                </h3>
                <p className={`text-sm font-medium ${a.company}`}>
                  {exp.company} <span className="text-xs font-medium uppercase text-foreground"> · {exp.locationType}</span>
                  <span className="text-xs font-medium uppercase text-foreground flex items-center gap-1">
                    <MapPinned className="w-3 h-3" /> {exp.location}
                  </span>
                </p>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-widest text-foreground mb-2 font-heading font-semibold">
                    Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {exp.experiences.map((item, ei) => (
                      <motion.li
                        key={ei}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 0.25,
                          delay: i * 0.08 + 0.15 + ei * 0.04,
                        }}
                        className="relative pl-4 text-sm text-muted-foreground leading-relaxed font-light"
                      >
                        <span
                          className={`absolute left-0 top-2 w-1.5 h-1.5 rounded-full ${a.inner}`}
                        />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-widest text-foreground mb-2 font-heading font-semibold">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t, ti) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{
                          duration: 0.25,
                          delay: i * 0.08 + 0.2 + ti * 0.03,
                        }}
                        className={`px-2.5 py-1 rounded-full text-xs bg-white/5 border ${a.chip}`}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
