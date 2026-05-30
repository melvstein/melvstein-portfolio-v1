"use client";

import { motion } from "motion/react";
import { Briefcase, Code2, Coffee, Rocket } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "8+" },
  /* { icon: Code2, label: "Projects Built", value: "40+" },
  { icon: Rocket, label: "APIs Shipped", value: "100+" }, */
  { icon: Coffee, label: "Cups of Coffee", value: "∞" },
];

const highlights = [
  {
    title: "Backend-first mindset",
    body: "I design systems with clean architecture, well-modeled data, and APIs that are pleasant to consume.",
  },
  {
    title: "Full-stack delivery",
    body: "From schema to UI animation, I ship complete features end-to-end across the stack.",
  },
  {
    title: "Performance & DX",
    body: "I care about cold-start times, query plans, and the developer experience of the codebases I touch.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-7xl mx-auto w-full relative z-10 md:pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-heading font-bold text-blue-500 tracking-widest uppercase mb-2">
              About Me
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Developer, builder, lifelong learner
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm md:text-base font-light">
            A full-stack developer focused on backend systems, REST APIs, and
            polished user experiences — with a side of 3D web experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-xl">
              <Image
                src="/images/melvstein_profile.png"
                alt="Melvin Justine"
                fill
                className="object-cover grayscale-25 -scale-x-100"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4 text-slate-400 text-md md:text-lg leading-relaxed font-light"
            >
              <p>
                I&apos;m{" "}
                <span className="text-primary font-medium">Melvin Justine</span>,
                a Software Developer based in the Philippines with experience
                building and maintaining production-grade systems in the{" "}
                <span className="text-secondary font-medium">iGaming</span> and{" "}
                <span className="text-secondary font-medium">fintech</span>{" "}
                space. My work includes legacy system modernization,{" "}
                <span className="text-secondary font-medium">
                  seamless wallet API systems
                </span>
                ,{" "}
                <span className="text-secondary font-medium">
                  iGaming API integrations
                </span>
                ,{" "}
                <span className="text-secondary font-medium">
                  payment API integrations
                </span>
                , RESTful services, and full-stack web applications.
              </p>
              <p>
                My core stack includes{" "}
                <span className="text-secondary font-medium">Spring Boot</span>,{" "}
                <span className="text-secondary font-medium">Laravel</span>, and{" "}
                <span className="text-secondary font-medium">Next.js</span>,
                with a strong focus on scalable backend architecture, system
                reliability, and clean API design. I&apos;m experienced in
                integrating third-party services and building systems that
                support high-transaction, real-time environments.
              </p>
              <p>
                I also work with modern frontend technologies and have
                experience building interactive web experiences using{" "}
                <span className="text-secondary font-medium">
                  React Three Fiber
                </span>
                .
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: "easeOut" }}
                  className="rounded-xl border border-primary/10 bg-primary/5 backdrop-blur-xl p-4 space-y-1.5 hover:border-blue-500/30 transition-colors"
                >
                  <p className="font-heading text-sm font-semibold text-foreground">
                    {h.title}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {h.body}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.35, delay: i * 0.06, ease: "backOut" }}
                    className="rounded-xl border border-primary/10 bg-primary/5 backdrop-blur-xl p-4 flex flex-col items-start gap-2 hover:border-blue-500/30 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-blue-400" />
                    <p className="font-heading text-2xl font-bold text-foreground">
                      {s.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-widest text-slate-500 font-heading font-semibold">
                      {s.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
