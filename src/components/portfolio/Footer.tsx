import { Youtube, BookOpen } from "lucide-react";

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
        <div className="flex items-center gap-3">
          <a
            href="https://www.youtube.com/@kunalmadoliya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="grid h-7 w-7 place-items-center border-2 border-[color:var(--ink)] bg-[color:var(--paper)] shadow-[2px_2px_0_0_var(--ink)] transition-all hover:bg-[color:var(--retro-red)] hover:text-white active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <Youtube size={13} />
          </a>
          <a
            href="https://dev.to/kunal_dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog"
            className="grid h-7 w-7 place-items-center border-2 border-[color:var(--ink)] bg-[color:var(--paper)] shadow-[2px_2px_0_0_var(--ink)] transition-all hover:bg-[color:var(--retro-blue)] hover:text-white active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
          >
            <BookOpen size={13} />
          </a>
          <span>Built with ♥ KUNAL MADOLIYA</span>
        </div>
      </div>
    </footer>
  );
}
