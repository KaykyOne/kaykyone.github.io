"use client"

import {
  Database,
  Layout,
  Server,
  Sparkles,
  Palette,
  Terminal,
} from "lucide-react"

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
    <section id="skills" className="py-28 sm:py-36">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">04.</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">Competências técnicas</h2>
          <div className="section-rule" />
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group border-t border-border/70 pt-5"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-card text-primary transition-colors duration-300 group-hover:text-accent">
                  <category.icon size={18} />
                </span>
                <h3 className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pl-14">
                {category.skills.map((skill) => (
                  <span key={skill} className="brutal-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 min-h-28 border-y border-border/45" />
      </div>
    </section>
  )
}
