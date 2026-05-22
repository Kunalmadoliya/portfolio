import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const NAV = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#stack", label: "STACK" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#journey", label: "JOURNEY" },
  { href: "#contact", label: "CONTACT" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-[4px] origin-left bg-[color:var(--retro-red)]"
      />
      <header
        className="fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl items-center justify-between gap-3 pixel-card-sm px-3 py-2 sm:px-4"
      >
        <a href="#home" className="flex items-center gap-2 font-mono text-xs font-bold">
          <span className="grid h-7 w-7 place-items-center border-2 border-[color:var(--ink)] bg-[color:var(--retro-red)] text-white text-[10px] font-display">
            KM
          </span>
          <span className="font-display text-[11px] tracking-tight sm:text-[12px]">
            kunalmadoliya
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-sm px-2.5 py-1 font-mono text-[11px] font-bold uppercase text-foreground/80 transition-colors hover:bg-[color:var(--retro-yellow)] hover:text-[color:var(--ink)]"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggle}
            className="grid h-8 w-8 place-items-center border-2 border-[color:var(--ink)] bg-[color:var(--paper)] shadow-[2px_2px_0_0_var(--ink)] transition-all hover:bg-[color:var(--retro-yellow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <a
            href="#contact"
            className="hidden pixel-btn px-3 py-1.5 font-mono text-[10px] font-bold uppercase md:inline-flex"
          >
            ▶ Hire Me
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-8 w-8 place-items-center border-2 border-[color:var(--ink)] bg-[color:var(--paper)] shadow-[2px_2px_0_0_var(--ink)] md:hidden"
          >
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </header>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-3 top-20 z-40 pixel-card p-3 md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-2 font-mono text-xs font-bold uppercase hover:bg-[color:var(--retro-yellow)]"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
