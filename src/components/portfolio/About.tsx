import { Reveal, SectionHeader } from './Section'
import { Code2, Coffee, Gamepad2, Heart } from 'lucide-react'

const STATS = [
  { Icon: Code2, value: '20+', label: 'Mini projects' },
  { Icon: Gamepad2, value: '10+', label: 'Tech tried' },
  { Icon: Heart, value: '100%', label: 'Curiosity' },
  { Icon: Coffee, value: '∞', label: 'Cups of   Coffee' },
]

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About"
          title={
            <>
              A fresher who actually{' '}
              <span className="text-[color:var(--retro-red)]">
                loves the craft
              </span>
            </>
          }
          description="Still leveling up. Big dreams, small commits, one bug at a time."
        />

        <div className="grid grid-cols-12 gap-4">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="pixel-card p-6 sm:p-7 h-full">
              <h3 className="font-display text-[14px] sm:text-[16px]">
                {'> WHO_AM_I.txt'}
              </h3>
              <div className="mt-4 space-y-3 text-lg leading-relaxed text-foreground/85">
                <p>
                  Hey! I'm <strong>Kunal</strong> — a student & aspiring
                  full-stack developer. I'm a{' '}
                  <span className="bg-[color:var(--retro-yellow)] border-2 border-[color:var(--ink)] px-1 font-bold">
                    fresher
                  </span>
                  , so I don't have years of work experience yet — but I do have
                  a stack of side projects, hackathons, and weekends spent
                  breaking things.
                </p>
                <p>
                  I'm hunting for my first <strong>internship</strong> where I
                  can contribute, learn from real engineers, and ship features
                  that real people actually use.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-2 gap-3 h-full">
              {STATS.map(({ Icon, value, label }, i) => {
                const colors = [
                  'var(--retro-red)',
                  'var(--retro-blue)',
                  'var(--retro-green)',
                  'var(--retro-yellow)',
                ]
                return (
                  <div
                    key={label}
                    className="pixel-card-sm p-4 relative overflow-hidden"
                  >
                    <div
                      className="absolute -right-3 -top-3 h-10 w-10 border-2 border-[color:var(--ink)]"
                      style={{ background: colors[i] }}
                    />
                    <Icon size={18} className="relative" />
                    <div className="mt-2 font-display text-[18px]">{value}</div>
                    <div className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                      {label}
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
