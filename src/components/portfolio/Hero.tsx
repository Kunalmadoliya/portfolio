import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Twitter,
  Youtube,
} from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-12">
      <div className="absolute inset-0 -z-10 dotted-bg opacity-60" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* BENTO GRID */}
        <div className="grid grid-cols-12 auto-rows-[minmax(0,auto)] gap-4">
          {/* INTRO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-8 pixel-card p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 checker h-16 w-16 opacity-40" />

            <h1 className="mt-4 font-display text-[28px] leading-[1.15] sm:text-[40px] sm:leading-[1.1] md:text-[48px]">
              KUNAL <br />
              <span className="text-[color:var(--retro-red)]">MADOLIYA</span>
            </h1>
            <p className="mt-4 font-sans text-xl text-foreground/80 leading-snug max-w-lg">
              Aspiring full-stack developer &amp; fresher looking for an
              <span className="bg-[color:var(--retro-yellow)] px-1 mx-1 text-[color:var(--ink)] border-2 border-[color:var(--ink)] font-bold">
                internship
              </span>
              opportunity. Building small things, learning big things.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="/#projects"
                className="pixel-btn-accent inline-flex items-center gap-2 px-4 py-2.5 font-mono text-[11px] font-bold uppercase"
              >
                ▶ See Projects <ArrowRight size={14} />
              </a>
              <a
                href="/#contact"
                className="pixel-btn inline-flex items-center gap-2 px-4 py-2.5 font-mono text-[11px] font-bold uppercase"
              >
                ✉ Contact
              </a>
              <a
                href="/kunalmadoliya_resume.pdf"
                download
                className="inline-flex items-center gap-2 border-2 border-[color:var(--ink)] bg-[color:var(--paper)] px-4 py-2.5 font-mono text-[11px] font-bold uppercase shadow-[3px_3px_0_0_var(--ink)] transition-all hover:bg-[color:var(--retro-yellow)]"
              >
                <Download size={14} /> CV
              </a>
            </div>
          </motion.div>

          {/* AVATAR / TILE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 md:col-span-4 pixel-card p-4 relative overflow-hidden bg-[color:var(--retro-blue)]"
          >
            <div className="absolute inset-0 scanlines opacity-40" />
            <div className="relative aspect-square border-2 border-[color:var(--ink)] bg-[color:var(--retro-yellow)] grid place-items-center">
              {/* Responsive container keeping your floating bob animation */}
              <div className="w-full h-full p-4 pb-14 flex items-center justify-center animate-bob">
                <img
                  src="./portfolio.png"
                  alt="Kunal Madoliya Portfolio Avatar"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between border-2 border-[color:var(--ink)] bg-[color:var(--paper)] px-2 py-1 font-mono text-[9px] font-bold uppercase">
                <span>LVL 01</span>
                <span className="text-[color:var(--retro-red)]">FRESHER</span>
              </div>
            </div>
          </motion.div>

          {/* STATUS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-6 md:col-span-3 pixel-card-sm p-4"
          >
            <div className="font-mono text-[9px] font-bold uppercase text-muted-foreground">
              Location
            </div>
            <div className="mt-1 flex items-center gap-1.5 font-display text-[11px]">
              <MapPin size={12} /> India
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-6 md:col-span-3 pixel-card-sm p-4"
          >
            <div className="font-mono text-[9px] font-bold uppercase text-muted-foreground">
              Status
            </div>
            <div className="mt-1 flex items-center gap-1.5 font-display text-[11px] text-[color:var(--retro-green)]">
              <Sparkles size={12} /> Open to work
            </div>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-12 md:col-span-6 pixel-card-sm p-4 flex items-center justify-between gap-3"
          >
            <div className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
              Find me ▸
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                {
                  Icon: Github,
                  label: 'GH',
                  href: 'https://github.com/Kunalmadoliya?tab=repositories',
                },
                {
                  Icon: Linkedin,
                  label: 'LN',
                  href: 'https://www.linkedin.com/in/kunal-madoliya-0378133b4/',
                },
                {
                  Icon: Twitter,
                  label: 'X',
                  href: 'https://x.com/Kunalmadoliya',
                },
                {
                  Icon: Youtube,
                  label: 'YT',
                  href: 'https://www.youtube.com/@kunalmadoliya',
                },
                {
                  Icon: BookOpen,
                  label: 'BLOG',
                  href: 'https://dev.to/kunal_dev',
                },
                { Icon: Mail, label: 'EM', href: '#contact' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  className="grid h-9 w-9 place-items-center border-2 border-[color:var(--ink)] bg-[color:var(--paper)] shadow-[2px_2px_0_0_var(--ink)] transition-all hover:bg-[color:var(--retro-yellow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
