import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kunal Madoliya — Aspiring Full Stack Developer" },
      {
        name: "description",
        content:
          "Kunal Madoliya — fresher developer looking for an internship. Retro-style portfolio built with React, Tailwind, and Framer Motion.",
      },
      { property: "og:title", content: "Kunal Madoliya — Portfolio" },
      {
        property: "og:description",
        content: "Fresher developer · open to internships · React, Node, web stack.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
