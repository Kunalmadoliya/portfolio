export function Footer() {
  return (
    <footer className="border-t-2 border-[color:var(--ink)] py-6 mt-10 bg-[color:var(--paper)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-[11px] font-bold uppercase text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center border-2 border-[color:var(--ink)] bg-[color:var(--retro-red)] text-white text-[9px] font-display">
            KM
          </span>
          © {new Date().getFullYear()} Kunal Madoliya
        </div>
        <div>Built with ♥ · React · Tailwind · Framer Motion</div>
      </div>
    </footer>
  );
}
