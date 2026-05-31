"use client";

import { TypingAnimation } from "@/components/ui/typing-animation"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { ScrollVelocityContainer, ScrollVelocityRow } from "@/components/ui/scroll-based-velocity";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { LightRays } from "../ui/light-rays";
import Image from "next/image";
import App from "@/data/App";

const CoverPhotoSection = () => {
  return (
    <section id="cover-photo" className="section-container">
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
          <h1 className="flex flex-col items-center lg:items-start font-heading text-[45px] font-bold tracking-tight leading-[1.1]">
            <p className="flex flex-col md:flex-row items-center md:items-start gap-0 md:gap-4 text-3xl md:text-4xl">
              <span>{ "Hi, I'm" }</span>
              <span className="text-primary uppercase">{ App.author }</span>
            </p>
            <TypingAnimation
              className="block w-full text-4xl md:text-6xl text-center lg:text-left bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent glow-shadow tracking-tighter leading-[2.5]"
              words={[
                App.clipTextTitle,
              ]}
              loop={false}
            />
          </h1>

          <p className="text-muted-foreground text-md md:text-xl max-w-xl leading-relaxed font-light">
            I build&nbsp;
            <TypingAnimation
              className="text-secondary font-medium font-heading"
              words={[
                "full-stack web apps",
              ]}
              typeSpeed={50}
              loop={false}
            />
          </p>
        </div>
        <div className="relative lg:col-span-5 w-full aspect-3/2 flex items-center justify-center">
          <NeonGradientCard
            className="relative flex items-center justify-center"
            neonColors={{
              firstColor: "var(--primary)",
              secondColor: "var(--secondary)",
            }}
          >
            <LightRays color="rgba(0, 0, 255, 0.5)" />
            <FlickeringGrid
              className="absolute inset-0 z-0 mask-[radial-gradient(350px_circle_at_center,white,transparent)] md:mask-[radial-gradient(450px_circle_at_center,white,transparent)] rounded-2xl"
              squareSize={4}
              gridGap={6}
              color="#60A5FA"
              maxOpacity={0.5}
              flickerChance={0.1}
            />
            <ScrollVelocityContainer className="absolute inset-0 font-heading flex flex-col justify-center -skew-y-6 text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-20 z-0 text-foreground/60">
              <ScrollVelocityRow baseVelocity={5} direction={1}>
                {App.scrollVelocityTitle}&nbsp;
              </ScrollVelocityRow>
              <ScrollVelocityRow baseVelocity={5} direction={-1}>
                {App.scrollVelocityTitle}&nbsp;
              </ScrollVelocityRow>
            </ScrollVelocityContainer>
            <Image
              src="/images/melvstein_cross_arm.png"
              alt={App.author}
              className="absolute inset-0 w-full h-full object-cover -scale-x-100 grayscale-25 rounded-2xl"
              height={500}
              width={500}
            />
          </NeonGradientCard>
        </div>
      </div>
    </section>
  );
}

export default CoverPhotoSection;
