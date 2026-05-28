"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import { Terminal } from "../ui/terminal";
import { cn } from "@/lib/utils";
import { NoiseTexture } from "../ui/noise-texture";
import Skills from "@/data/Skills";

const skillsOutput = Object.entries(Skills).flatMap(([category, items]) => [
  category.charAt(0).toUpperCase() + category.slice(1),
  ...Object.values(items).map((item) => `- ${item.name}`),
]);

const orbitProps: Record<
  keyof typeof Skills,
  React.ComponentProps<typeof OrbitingCircles>
> = {
  backend: { iconSize: 40 },
  frontend: { iconSize: 30, radius: 100, reverse: true, speed: 2 },
  database: { iconSize: 20, radius: 50, speed: 2 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative flex items-center justify-center w-full h-full">
          <Terminal
            username="melvstein"
            commands={[
              "sudo show fullname",
              "sudo show role",
              "sudo show skills",
            ]}
            outputs={{
              0: [
                "Melvin Justine L. Bayogo",
              ],
              1: [
                  "Full-Stack Developer",
                ],
              2: skillsOutput,
            }}
            typingSpeed={45}
            delayBetweenCommands={1000}
            enableSound={false}
          />
        </div>
        <div className="relative flex items-center justify-center w-full h-full">
          {(Object.entries(Skills) as [keyof typeof Skills, typeof Skills[keyof typeof Skills]][]).map(([category, items]) => (
            <OrbitingCircles key={category} {...orbitProps[category]}>
              {Object.values(items).map((item) => {
                const Icon = item.icon;
                let className = "";
            
                switch (item.name) {
                  case Skills.frontend.nextjs.name:
                    className = "dark:fill-white";
                    break;
                  case Skills.frontend.threejs.name:
                    className = "dark:fill-white";
                    break;
                }
                
                return <Icon key={item.name} className={className} />;
              })}
            </OrbitingCircles>
          ))}
        </div>
      </div>

      <NoiseTexture
        className={cn(
          "absolute inset-0",
          "mask-[radial-gradient(420px_circle_at_center,white,transparent)]"
        )}
      />
    </section>
  );
}

export default SkillsSection;