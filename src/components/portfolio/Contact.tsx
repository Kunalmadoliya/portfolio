import { useState } from "react";
import { ArrowRight, BookOpen, Github, Linkedin, Mail, MapPin, Twitter, Youtube } from "lucide-react";
import { z } from "zod";
import { Reveal, SectionHeader } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function Contact() {
  const [status, setStatus] = useState<null | "ok" | string>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      setStatus(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setStatus("ok");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title={<>Press <span className="text-[color:var(--retro-red)]">START</span> to talk</>}
          description="Internships, freelance gigs, or just to say hi — my inbox is open."
        />

        <div className="grid  gap-4">
          <Reveal className="col-span-12 lg:col-span-5">
            <div className="pixel-card p-6 h-full flex flex-col justify-between">
              <div>
                <div className="font-mono text-[10px] font-bold uppercase text-muted-foreground">
                  ▸ Email
                </div>
                <a
                  href="mailto: madoliyakunal2005@gmail.com"
                  className="mt-2 block font-display text-[16px] sm:text-[18px] hover:text-[color:var(--retro-red)] break-all"
                >
                  madoliyakunal2005
                </a>
                <div className="mt-5 space-y-2 text-base text-foreground/80">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} /> India · Remote OK
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} /> Usually reply within 24h
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2">
                {[
                  { Icon: Github, href: "https://github.com/Kunalmadoliya?tab=repositories" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/kunal-madoliya-0378133b4/" },
                  { Icon: Twitter, href: "https://x.com/Kunalmadoliya" },
                  { Icon: Youtube, href: "https://www.youtube.com/@kunalmadoliya" },
                  { Icon: BookOpen, href: "https://dev.to/kunal_dev" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center border-2 border-[color:var(--ink)] bg-[color:var(--paper)] shadow-[2px_2px_0_0_var(--ink)] transition-all hover:bg-[color:var(--retro-yellow)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* <Reveal delay={0.1} className="col-span-12 lg:col-span-7">
            <form onSubmit={onSubmit} className="pixel-card p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block font-mono text-[10px] font-bold uppercase text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="What's up?"
                  className="w-full resize-none border-2 border-[color:var(--ink)] bg-[color:var(--paper)] px-3 py-2 text-lg font-sans outline-none transition-all placeholder:text-muted-foreground/60 focus:shadow-[3px_3px_0_0_var(--ink)] focus:-translate-x-[1px] focus:-translate-y-[1px]"
                />
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 flex-wrap">
                <div className="text-base">
                  {status === "ok" && (
                    <span className="text-[color:var(--retro-green)] font-bold">★ Sent! Talk soon.</span>
                  )}
                  {status && status !== "ok" && (
                    <span className="text-[color:var(--retro-red)] font-bold">{status}</span>
                  )}
                </div>
                <button
                  type="submit"
                  className="pixel-btn-accent inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] font-bold uppercase"
                >
                  ▶ Send <ArrowRight size={14} />
                </button>
              </div>
            </form>
          </Reveal> */}
        </div>
      </div>
    </section>
  );
}

// function Field({
//   label,
//   name,
//   type = "text",
//   placeholder,
// }: {
//   label: string;
//   name: string;
//   type?: string;
//   placeholder?: string;
// }) {
//   return (
//     <div>
//       <label className="mb-1.5 block font-mono text-[10px] font-bold uppercase text-muted-foreground">
//         {label}
//       </label>
//       <input
//         name={name}
//         type={type}
//         maxLength={255}
//         placeholder={placeholder}
//         className="w-full border-2 border-[color:var(--ink)] bg-[color:var(--paper)] px-3 py-2 text-lg font-sans outline-none transition-all placeholder:text-muted-foreground/60 focus:shadow-[3px_3px_0_0_var(--ink)] focus:-translate-x-[1px] focus:-translate-y-[1px]"
//       />
//     </div>
//   );
// }
