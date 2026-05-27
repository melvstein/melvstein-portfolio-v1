"use client";

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { AuroraText } from "@/components/ui/aurora-text"
import { DiaTextReveal } from "@/components/ui/dia-text-reveal"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { AsciiArtBinarMelvstein } from "../aceternity/AsciiArtBinaryMelvstein";

const AboutSection = () => {
  return (
    <section id="about" className="section-container pt-28 lg:pt-0">
      <FlickeringGrid
        className="absolute inset-0 z-0 mask-[radial-gradient(350px_circle_at_center,white,transparent)] md:mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start justify-center space-y-6 text-left">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-secondary/20 px-3.5 py-1.5 rounded-full text-xs text-blue-400 font-medium tracking-wide w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span>Available for New Projects</span>
          </div>
          
          <h1 className="flex flex-col items-center lg:items-start font-heading text-[45px] md:text-7xl font-bold tracking-tight leading-[1.1]">
            <DiaTextReveal
              text="Hi, I'm"
              colors={["var(--primary)", "var(--secondary)", "var(--accent)"]}
            />
            <AuroraText
              colors={["var(--primary)", "var(--secondary)", "var(--accent)"]}
            >
              <TypingAnimation
                  words={[
                    "Full-Stack Dev",
                    "Melvin Justine",
                  ]}
                  loop={false}
              />
            </AuroraText>
          </h1>
          
          <p className="text-slate-400 text-md md:text-xl max-w-xl leading-relaxed font-light">
            I build&nbsp;
            <TypingAnimation
              className="text-secondary font-medium font-heading"
              words={[
                "robust REST APIs",
                "scalable backend systems",
                "full-stack web apps",
                "3D web experiences on the side",
              ]}
              typeSpeed={50}
              loop
            />
          </p>
          
          <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2 md:gap-4 pt-4">
            <a href="#projects" className="group relative px-4 md:px-8 py-4 rounded-xl font-heading font-medium tracking-wide skin-bg-gradient text-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
              <AnimatedShinyText className="text-slate-950!">Explore Work</AnimatedShinyText>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-auto px-4 md:px-8 py-4 rounded-xl font-heading font-medium tracking-wide bg-primary/10 border-secondary/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-md transition-all duration-300"
            >
              <a href="#contact">
                <AnimatedShinyText>Get in touch</AnimatedShinyText>
              </a>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5 relative w-full h-64 md:h-96">
          <AsciiArtBinarMelvstein />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;