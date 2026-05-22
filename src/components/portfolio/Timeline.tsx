import { GraduationCap, Sparkles, Wrench } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const ITEMS = [
  {
    Icon: GraduationCap,
    period: "2023 — Now",
    title: "B.Tech, Computer Science",
    org: "University",
    description: "Currently pursuing. CGPA & coursework focused on webdev.",
    color: "var(--retro-blue)",
  },
  {
    Icon: Wrench,
    period: "2026",
    title: "Web Dev",
    org: "Chaicode",
    description: "Learned React, Node, and the modern from Chaicode.",
    color: "var(--retro-red)",
  },
  {
    Icon: Sparkles,
    period: "2025",
    title: "Looking for first internship",
    org: "← that's where you come in",
    description: "Ready to join a team, contribute, and learn from real engineers.",
    color: "var(--retro-green)",
  },
];

export function Timeline() {
  return (
    <section id="journey" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Journey"
          title={<>The <span className="text-[color:var(--retro-blue)]">level map</span></>}
          description="Where I've been, where I'm headed."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08}>
              <div className="pixel-card p-5 h-full relative">
                <div className="flex items-center justify-between">
                  <div
                    className="grid h-10 w-10 place-items-center border-2 border-[color:var(--ink)] text-white"
                    style={{ background: it.color }}
                  >
                    <it.Icon size={16} />
                  </div>
                  <span className="font-mono text-[10px] font-bold uppercase border-2 border-[color:var(--ink)] bg-[color:var(--paper)] px-1.5 py-0.5">
                    {it.period}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[13px]">{it.title}</h3>
                <div className="font-mono text-[11px] text-muted-foreground font-bold">{it.org}</div>
                <p className="mt-3 text-base text-foreground/75 leading-snug">{it.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
