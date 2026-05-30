
"use client";

import { Safari } from "@/components/ui/safari";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLinkIcon } from "lucide-react";
import { Icons } from "../Icons";
import Link from "next/link";
import { Lens } from "../ui/lens";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

type Project = {
  name: string;
  description: string;
  href: string;
  github?: string;
  videoSrc: string;
  techStack: string[];
  accent: "blue" | "purple" | "pink" | "emerald";
  frontendOnly?: boolean;
  backendPrivate?: boolean;
};

const Data: Project[] = [
  {
    name: "3D Solar System",
    description: "An interactive 3D solar system simulation built with React Three Fiber, featuring custom shaders, realistic orbital mechanics, and responsive design. The backend, built with Springboot and PostgreSQL, provides REST APIs for dynamic content management and user interactions.",
    href: "https://r3f-solar-system-ten.vercel.app/",
    github: "https://github.com/melvstein/r3f-solar-system",
    videoSrc: "/videos/solar-system.mov",
    techStack: ["Springboot", "PostgreSQL", "REST APIs", "Vite", "Reactjs", "React Three Fiber", "Tailwind CSS", "Framer Motion"],
    accent: "blue",
    backendPrivate: true,
  },
  {
    name: "MJ Store",
    description: "An e-commerce platform built with Next.js and Tailwind CSS, featuring a responsive design, dynamic product pages, and seamless checkout experience. The backend, built with Springboot and MongoDB, provides REST APIs for product management and order processing.",
    href: "https://mj-store-eight.vercel.app/",
    github: "https://github.com/melvstein/mj-store",
    videoSrc: "/videos/mj-store.mov",
    techStack: ["Springboot", "REST APIs", "MongoDB", "Next.js", "Tailwind CSS"],
    accent: "blue",
    backendPrivate: true,
  },
  {
    name: "Aela's First Bday Invitation",
    description: "A personalized birthday invitation website built with Next.js and Tailwind CSS, featuring interactive elements, responsive design, and a memorable user experience.",
    href: "https://aela-first-bday-invitation.vercel.app/",
    github: "https://github.com/melvstein/aela-first-bday-invitation",
    videoSrc: "/videos/aela-first-bday-invitation.mov",
    techStack: ["Next.js", "Tailwind CSS"],
    accent: "blue",
  },
  {
    name: "Alice in One-derland",
    description: "A whimsical 3D web experience built with React Three Fiber, book style layout, and interactive animations.",
    href: "https://alice-in-1derland.vercel.app/",
    github: "https://github.com/melvstein/alice-in-1derland",
    videoSrc: "/videos/alice-in-1derland.mov",
    techStack: ["Vite", "Reactjs", "React Three Fiber", "Tailwind CSS", "Framer Motion"],
    accent: "blue",
  },
];

const accentStyles: Record<Project["accent"], {
  border: string;
  shadow: string;
  gradient: string;
  button: string;
  title: string;
}> = {
  blue: {
    border: "hover:border-blue-500/30",
    shadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
    gradient: "from-indigo-950/80 to-slate-900",
    button: "bg-blue-500",
    title: "group-hover:text-blue-400",
  },
  purple: {
    border: "hover:border-purple-500/30",
    shadow: "hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    gradient: "from-purple-950/80 to-slate-900",
    button: "bg-purple-500",
    title: "group-hover:text-purple-400",
  },
  pink: {
    border: "hover:border-pink-500/30",
    shadow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]",
    gradient: "from-pink-950/80 to-slate-900",
    button: "bg-pink-500",
    title: "group-hover:text-pink-400",
  },
  emerald: {
    border: "hover:border-emerald-500/30",
    shadow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
    gradient: "from-emerald-950/80 to-slate-900",
    button: "bg-emerald-500",
    title: "group-hover:text-emerald-400",
  },
};

const techStackStyles: Record<string, string> = {
  "Vite": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Reactjs": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "React Three Fiber": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Tailwind CSS": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Framer Motion": "bg-purple-500/10 text-purple-400 border-purple-500/20",
  "Next.js": "bg-slate-500/10 text-slate-500 dark:text-slate-300 border-slate-500/20",
  "Springboot": "bg-green-500/10 text-green-400 border-green-500/20",
  "REST APIs": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "MongoDB": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "PostgreSQL": "bg-sky-500/10 text-sky-400 border-sky-500/20",
};

const defaultTechStyle = "bg-white/10 text-slate-300 border-white/20";

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto w-full relative z-10 md:pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-heading font-bold text-blue-500 tracking-widest uppercase mb-2">Featured Work</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Selected Projects</h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-base font-light">
            A handpicked collection of applications pushing the boundaries of interactive design, responsive layouts, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Data.map((project) => {
            const accent = accentStyles[project.accent];

            return (
              <div
                key={project.name}
                className={`group relative flex flex-col backdrop-blur-xl bg-foreground/5 border border-primary/10 rounded-md overflow-hidden transition-all duration-500 ${accent.border} ${accent.shadow}`}
              >
                <Card className="relative w-full h-full flex flex-col shadow-none border-0 bg-transparent rounded-none">
                  <CardHeader>
                    <Lens
                      zoomFactor={2}
                      lensSize={150}
                      isStatic={false}
                      ariaLabel="Zoom Area"
                    >
                      <Safari
                        url={project.href}
                        videoSrc={project.videoSrc}
                        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                    </Lens>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardTitle className={`font-heading text-2xl font-bold transition-colors ${accent.title}`}>
                      {project.name}
                    </CardTitle>
                    <CardDescription>
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap pt-4 gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[10px] font-heading font-semibold uppercase tracking-wider px-2.5 py-1 border rounded-full ${techStackStyles[tech] ?? defaultTechStyle}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="space-x-4">
                    <Link href={project.href} target="_blank" className={`p-3 rounded-full ${accent.button} text-foreground hover:scale-110 transition-transform`}>
                      <ExternalLinkIcon className="w-5 h-5" />
                    </Link>
                    {project.github && (
                      project.backendPrivate ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link href={project.github} target="_blank" className="p-3 rounded-full bg-foreground/10 border border-primary/25 text-foreground hover:scale-110 transition-transform">
                                <Icons.github className="w-5 h-5" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>Frontend only — backend is private</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <Link href={project.github} target="_blank" className="p-3 rounded-full bg-foreground/10 border border-primary/25 text-foreground hover:scale-110 transition-transform">
                          <Icons.github className="w-5 h-5" />
                        </Link>
                      )
                    )}
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const ProjectsSection1 = () => {
  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto w-full relative z-10 md:pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-heading font-bold text-blue-500 tracking-widest uppercase mb-2">Featured Work</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">Selected Projects</h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-base font-light">
            A handpicked collection of applications pushing the boundaries of interactive design, responsive layouts, and performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Data.map((project) => {
            const accent = accentStyles[project.accent];
            return (
              <div
                key={project.name}
                className={`group relative backdrop-blur-xl bg-foreground/5 border border-primary/10 rounded-md overflow-hidden transition-all duration-500 ${accent.border} ${accent.shadow}`}
              >
                <div className="aspect-video w-full overflow-hidden bg-foreground relative">
                  <div className={`absolute inset-0 bg-linear-to-tr ${accent.gradient} flex items-center justify-center p-8`}>
                    <div className="relative w-full h-full overflow-hidden flex flex-col shadow-2xl">
                      <div className="flex-1 flex flex-col justify-center items-center text-center">
                        <Safari
                          url={project.href}
                          videoSrc={project.videoSrc}
                          className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                        />
                        <p className="absolute text-xs text-slate-500 font-mono">
                          {project.href}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link href={project.href} target="_blank" className={`p-3 rounded-full ${accent.button} text-slate-950 hover:scale-110 transition-transform`}>
                      <ExternalLinkIcon className="w-5 h-5" />
                    </Link>
                    {project.github && (
                      project.backendPrivate ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Link href={project.github} target="_blank" className="p-3 rounded-full bg-white/10 border border-primary/25 text-white hover:scale-110 transition-transform">
                                <Icons.github className="w-5 h-5" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>Frontend only — backend is private</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <Link href={project.github} target="_blank" className="p-3 rounded-full bg-white/10 border border-primary/25 text-white hover:scale-110 transition-transform">
                          <Icons.github className="w-5 h-5" />
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10px] font-heading font-semibold uppercase tracking-wider px-2.5 py-1 border rounded-full ${techStackStyles[tech] ?? defaultTechStyle}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className={`font-heading text-2xl font-bold transition-colors ${accent.title}`}>
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;