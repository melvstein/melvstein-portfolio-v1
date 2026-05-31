"use client";

import { Marquee } from "../ui/marquee";
import { cn } from "@/lib/utils";
import Skills from "@/data/Skills";
import { HyperText } from "../ui/hyper-text";

const categoryAccents: Record<keyof typeof Skills, { title: string; glow: string; label: string; border: string }> = {
  backend: {
    title: "Backend",
    glow: "from-primary/20 to-transparent",
    label: "text-primary",
    border: "hover:border-primary/30",
  },
  frontend: {
    title: "Frontend",
    glow: "from-secondary/20 to-transparent",
    label: "text-secondary",
    border: "hover:border-secondary/30",
  },
  database: {
    title: "Database",
    glow: "from-accent/20 to-transparent",
    label: "text-accent",
    border: "hover:border-accent/30",
  },
  devops: {
    title: "DevOps",
    glow: "from-yellow-500/20 to-transparent",
    label: "text-yellow-500",
    border: "hover:border-yellow-500/30",
  },
  aiTools: {
    title: "AI Tools",
    glow: "from-green-500/20 to-transparent",
    label: "text-green-500",
    border: "hover:border-green-500/30",
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <div className="max-w-7xl mx-auto w-full relative z-10 md:pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <HyperText className="text-xs font-heading font-bold text-blue-500 tracking-widest uppercase mb-2">Toolkit</HyperText>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Skills &amp; Stack</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base font-light">
            The languages, frameworks, and platforms I reach for when shipping production work.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {(Object.entries(Skills) as [keyof typeof Skills, typeof Skills[keyof typeof Skills]][]).map(
            ([category, items], idx) => {
              const accent = categoryAccents[category];
              const skillItems = Object.values(items);
              return (
                <div
                  key={category}
                  className={cn(
                    "group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-md overflow-hidden transition-all duration-500",
                    accent.border
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-linear-to-br opacity-60 pointer-events-none",
                      accent.glow
                    )}
                  />
                  <div className="relative p-4 md:p-6 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <h3
                        className={cn(
                          "text-xs font-heading font-bold tracking-widest uppercase",
                          accent.label
                        )}
                      >
                        {accent.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        {skillItems.length} items
                      </span>
                    </div>
                    <Marquee
                      pauseOnHover
                      reverse={idx % 2 === 1}
                      className="[--duration:25s]"
                    >
                      {skillItems.map((item) => {
                        const Icon = item.icon;
                        const iconClass = "";

                        return (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center gap-2 w-24 h-24 shrink-0 rounded-lg border border-primary/10 bg-foreground/10 hover:bg-primary/70 hover:border-secondary/20 transition-colors"
                          >
                            <Icon className={cn("w-8 h-8", iconClass)} />
                            <span className="text-[10px] font-mono text-foreground text-center px-1 truncate max-w-full">
                              {item.name}
                            </span>
                          </div>
                        );
                      })}
                    </Marquee>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;