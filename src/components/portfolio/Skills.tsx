import { Plus } from "lucide-react";
import { Reveal, SectionHeader } from "./Section";

const STACK = [
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Socket.io", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
];

const SLOTS = [...STACK, ...Array.from({ length: 2 }).map(() => ({ name: "", logo: "" }))];

export function Skills() {
  return (
    <section id="stack" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Stack"
          title={<>My <span className="text-[color:var(--retro-blue)]">power-ups</span></>}
          
        />

        <Reveal>
          <div className="pixel-card p-5 sm:p-7 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-8 bg-[color:var(--retro-blue)] border-b-2 border-[color:var(--ink)] flex items-center justify-between px-3">
              <span className="font-display text-[10px] text-white">INVENTORY</span>
              <span className="font-mono text-[10px] font-bold text-white">{SLOTS.length} SLOTS</span>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {SLOTS.map((slot, i) => (
                <div
                  key={i}
                  className="aspect-square border-2 border-[color:var(--ink)] bg-[color:var(--paper)] shadow-[2px_2px_0_0_var(--ink)] grid place-items-center relative group transition-all hover:bg-[color:var(--retro-yellow)] hover:-translate-y-0.5"
                >
                  {slot.logo ? (
                    <>
                    <img src={slot.logo} alt={slot.name} className="h-10 w-10 object-contain" />
                    <p className="text-foreground">{slot.name}</p>
                    </>
                  ) : (
                    <Plus size={20} className="text-foreground/30 group-hover:text-[color:var(--ink)]" />
                  )}
                  <span className="absolute -top-1 -left-1 border-2 border-[color:var(--ink)] bg-[color:var(--paper)] px-1 font-mono text-[8px] font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>


          </div>
        </Reveal>
      </div>
    </section>
  );
}
