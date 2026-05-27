const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <AvailableForNewProjects />
    </section>
  );
}

export default ProjectsSection;

const AvailableForNewProjects = () => {
  return (
    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
      <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs text-blue-400 font-medium tracking-wide w-fit backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Available for New Projects</span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
          Hi, {"I'm"} <br />
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent glow-shadow">
            Melvin Justine
          </span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-light">
          I build high-performance web applications featuring immersive 3D graphics, fluid motion design, and stunning glassmorphism interfaces.
        </p>
        
        <div className="flex flex-wrap gap-4 pt-4">
          <a href="#projects" className="group relative px-8 py-4 rounded-xl font-heading font-medium tracking-wide skin-bg-gradient text-slate-950 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2">
            Explore Work
            <i data-lucide="arrow-right" className="w-4 h-4 transition-transform group-hover:translate-x-1"></i>
          </a>
          <a href="#contact" className="px-8 py-4 rounded-xl font-heading font-medium tracking-wide bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}