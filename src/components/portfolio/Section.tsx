import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="mb-3 inline-flex items-center gap-2 border-2 border-[color:var(--ink)] bg-[color:var(--retro-yellow)] px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-[color:var(--ink)] shadow-[2px_2px_0_0_var(--ink)]">
        ★ {eyebrow}
      </div>
      <h2 className="font-display text-[22px] leading-tight sm:text-[28px] md:text-[32px]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-lg text-foreground/75">{description}</p>
      )}
    </motion.div>
  );
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
