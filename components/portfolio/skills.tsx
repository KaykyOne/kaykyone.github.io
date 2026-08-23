"use client"

import {
  Database,
  Layout,
  Server,
  Sparkles,
  Palette,
  Terminal,
} from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal"

const skillCategories = [
  {
    icon: Layout,
    title: "Front-end e UI",
    skills: ["React", "Next.js", "Astro", "TypeScript", "TailwindCSS", "Figma", "Responsive Design"],
  },
  {
    icon: Server,
    title: "Back-end e APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Authentication", "PHP/Laravel"],
  },
  {
    icon: Database,
    title: "Banco de dados e dados",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Query Optimization", "Data Modeling"],
  },
  {
    icon: Terminal,
    title: "DevOps e infraestrutura",
    skills: ["Docker", "Git & GitHub", "CI/CD", "Linux", "Performance Tuning"],
  },
  {
    icon: Sparkles,
    title: "IA e automação",
    skills: ["OpenAI API", "Prompt Engineering", "Local LLMs", "Chatbots", "Automação"],
  },
  {
    icon: Palette,
    title: "Design e UX",
    skills: ["UX/UI Design", "Figma", "User Research", "Wireframing", "Prototyping"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="section-index">03.</span>
          <h2 className="text-3xl sm:text-5xl">Competências técnicas</h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <RevealItem
              key={index}
              className="brutal-panel group p-6"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <category.icon size={18} />
                </span>
                <h3 className="font-serif text-lg tracking-[-0.02em] text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="brutal-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
