import { ArrowUpRight, Github } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const PROJECTS = [
  {
    title: "SSO",
    tag: "Main",
    description: "My main project — a single sign-on authentication system built from scratch.",
    tech: ["React", "Node.js", "Redis", "Express", "PostgreSQL"],
    color: "var(--retro-red)",
     span: "md:col-span-5",
    demo: "https://sso-production-d29b.up.railway.app",
    code: "https://github.com/Kunalmadoliya/sso",
  },
  {
    title: "FTHEFORM",
    tag: "Side",
    description: "A form project I built to level up my frontend and validation skills.",
    tech: ["TypeScript", "React", "Tailwind"],
    color: "var(--retro-blue)",
    span: "md:col-span-5",
    demo: "https://ftheform.kunalmadoliya.me",
    code: "https://github.com/Kunalmadoliya/ftheform",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects"
          title={<>Stuff I've <span className="text-[color:var(--retro-green)]">built so far</span></>}
          description="Small builds, but every one taught me something."
        />

        <div className="grid grid-cols-1 gap-4 auto-rows-fr">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05} className={`col-span-1 ${p.span}`}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  return (
    <article className="group pixel-card p-5 h-full flex flex-col relative overflow-hidden transition-transform hover:-translate-y-1 hover:translate-x-[-2px] hover:shadow-[8px_8px_0_0_var(--ink)]">
      <div
        className="absolute top-0 right-0 h-6 px-2 border-l-2 border-b-2 border-[color:var(--ink)] flex items-center font-mono text-[9px] font-bold uppercase"
        style={{ background: project.color, color: "#fff" }}
      >
        {project.tag}
      </div>

      <div
        className="h-24 sm:h-28 mb-4 border-2 border-[color:var(--ink)] relative overflow-hidden checker"
        style={{ background: `color-mix(in oklab, ${project.color} 35%, var(--paper))` }}
      >
        <div className="absolute inset-2 border-2 border-[color:var(--ink)] bg-[color:var(--paper)] p-2 font-mono text-[9px]">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 bg-[color:var(--ink)]" />
            <span className="h-1.5 w-1.5 bg-[color:var(--ink)]" />
            <span className="h-1.5 w-1.5 bg-[color:var(--ink)]" />
          </div>
          <div className="mt-1.5 space-y-0.5">
            <div className="h-1 w-3/4 bg-[color:var(--ink)]/30" />
            <div className="h-1 w-1/2 bg-[color:var(--ink)]/30" />
          </div>
        </div>
      </div>

      <h3 className="font-display text-[14px]">{project.title}</h3>
      <p className="mt-2 text-base text-foreground/75 leading-snug flex-1">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span key={t} className="pixel-chip px-2 py-0.5 font-mono text-[10px] font-bold">
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <a href={project.demo} className="pixel-btn inline-flex items-center gap-1 px-3 py-1.5 font-mono text-[10px] font-bold uppercase">
          Demo <ArrowUpRight size={11} />
        </a>
        <a href={project.code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 border-2 border-[color:var(--ink)] bg-[color:var(--paper)] px-3 py-1.5 font-mono text-[10px] font-bold uppercase shadow-[2px_2px_0_0_var(--ink)] hover:bg-[color:var(--retro-yellow)]">
          <Github size={11} /> Code
        </a>
      </div>
    </article>
  );
}
