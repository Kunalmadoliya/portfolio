import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/portfolio/Navbar'
import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Skills } from '@/components/portfolio/Skills'
import { Projects } from '@/components/portfolio/Projects'
import { Timeline } from '@/components/portfolio/Timeline'
import { Contact } from '@/components/portfolio/Contact'
import { Footer } from '@/components/portfolio/Footer'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title:
          'Kunal Madoliya | Full Stack Developer | React, Node.js, TypeScript',
      },
      {
        name: 'description',
        content:
          'Kunal Madoliya is an aspiring full-stack developer looking for internship opportunities. Skilled in React, Node.js, TypeScript, Tailwind CSS, and modern web development.',
      },
      {
        name: 'keywords',
        content:
          'Kunal Madoliya, Full Stack Developer, React Developer, Node.js, TypeScript, Portfolio, Web Developer, Internship',
      },

      // Open Graph
      {
        property: 'og:title',
        content: 'Kunal Madoliya | Full Stack Developer Portfolio',
      },
      {
        property: 'og:description',
        content:
          'Aspiring full-stack developer building modern web apps with React, Node.js, and TypeScript. Open to internship opportunities.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:url',
        content: 'https://kunalmadoliya.me',
      },

      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Kunal Madoliya | Full Stack Developer Portfolio',
      },
      {
        name: 'twitter:description',
        content:
          'Aspiring full-stack developer building modern web apps with React, Node.js, and TypeScript.',
      },
    ],

    links: [
      {
        rel: 'canonical',
        href: 'https://kunalmadoliya.me',
      },
    ],
  }),

  component: HomePage,
})

function HomePage() {
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
  )
}
