"use client";

import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { LightRays } from "../ui/light-rays";
import LINK from "@/lib/link";
import Link from "next/link";
import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="section-container">
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
          
          <h1 className="flex flex-col items-center lg:items-start font-heading text-[45px] font-bold tracking-tight leading-[1.1]">
            <p className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-4 text-3xl md:text-4xl">
              <span>{ "Hi, I'm" }</span>
              <span className="text-primary uppercase">{ "Melvin Justine" }</span>
            </p>
            <TypingAnimation
              className="block w-full text-4xl md:text-6xl text-center lg:text-left bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent glow-shadow tracking-tighter leading-[2.5]"
              words={[
                "<FullStackDeveloper/>",
              ]}
              loop={false}
            />
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
            <Link href="#projects" className="w-full md:w-auto group relative px-4 md:px-8 py-4 rounded-xl font-heading font-medium tracking-wide skin-bg-gradient text-primary-foreground shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Explore Work
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full md:w-auto h-auto px-4 md:px-8 py-4 rounded-xl font-heading font-medium tracking-wide bg-primary/10 border-secondary/20 text-foreground hover:bg-white/10 hover:text-white backdrop-blur-md transition-all duration-300"
            >
              <Link href="#contact">
                Get in touch
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full md:w-auto h-auto px-4 md:px-8 py-4 rounded-xl font-heading font-medium tracking-wide bg-primary/10 border-secondary/20 text-foreground hover:bg-white/10 hover:text-white backdrop-blur-md transition-all duration-300"
            >
              <Link href={LINK.RESUME} target="_blank" rel="noopener noreferrer" download>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative lg:col-span-5 w-full h-64 md:h-96 flex items-center justify-center">
          <NeonGradientCard
            className="relative flex items-center justify-center"
            neonColors = {{
              firstColor: "var(--primary)",
              secondColor: "var(--secondary)",
            }}
          >
            {/* rgba(59, 130, 246, 1) */}
            <LightRays color="rgba(0, 0, 255, 0.5)" />
            <FlickeringGrid
              className="absolute inset-0 z-0 mask-[radial-gradient(350px_circle_at_center,white,transparent)] md:mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
              squareSize={4}
              gridGap={6}
              color="#60A5FA"
              maxOpacity={0.5}
              flickerChance={0.1}
            />
            <ScrollVelocityContainer className="absolute inset-0 font-heading flex flex-col justify-center -skew-y-6 text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-20 z-0 text-foreground/60">
              <ScrollVelocityRow baseVelocity={5} direction={1}>
                Full-Stack Developer&nbsp;
              </ScrollVelocityRow>
              <ScrollVelocityRow baseVelocity={5} direction={-1} className="">
                Full-Stack Developer&nbsp;
              </ScrollVelocityRow>
            </ScrollVelocityContainer>
            <Image 
              src="/images/melvstein_cross_arm.png"
              alt="Melvin Justine"
              className="absolute inset-0 w-full h-full object-cover -scale-x-100 grayscale-25"
              height={500}
              width={500}
            />
          </NeonGradientCard>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;