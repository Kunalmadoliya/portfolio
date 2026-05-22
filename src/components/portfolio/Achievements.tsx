import { Award, BadgeCheck, Medal, Trophy } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const ITEMS = [
  {
    Icon: Trophy,
    title: "Hackathon Winner",
    org: "TechCrunch Disrupt · 2024",
    description: "1st place out of 320 teams for an AI accessibility tool.",
  },
  {
    Icon: BadgeCheck,
    title: "AWS Solutions Architect",
    org: "Amazon Web Services · 2023",
    description: "Professional-level certification in cloud architecture.",
  },
  {
    Icon: Medal,
    title: "Open Source Top 100",
    org: "GitHub · 2023",
    description: "Recognized for top OSS contributions in the React ecosystem.",
  },
  {
    Icon: Award,
    title: "Speaker",
    org: "React Summit · 2022",
    description: "Talk on building accessible animation systems for the web.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Recognition"
          title={<>Achievements & <span className="gradient-text">certifications</span></>}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-60"
                  style={{ background: "var(--glow)" }}
                />
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary text-accent">
                  <it.Icon size={20} />
                </div>
                <h3 className="mt-5 font-semibold">{it.title}</h3>
                <div className="font-mono text-xs text-muted-foreground">{it.org}</div>
                <p className="mt-3 text-sm text-muted-foreground">{it.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
