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
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">03.</span>
          <h2 className="text-2xl font-medium uppercase tracking-[0.04em] sm:text-4xl">Competências técnicas</h2>
          <div className="section-rule" />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="brutal-panel group p-6 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-primary"
            >
              <div className="relative z-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center border border-border bg-background text-primary">
                    <category.icon size={18} />
                  </div>
                  <h3 className="font-(--font-display) text-lg font-medium uppercase tracking-[0.03em]">
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
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-y border-border py-6">
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "PostgreSQL",
              "Docker",
              "TailwindCSS",
              "Figma",
              "OpenAI",
              "Git",
            ].map((tech, index) => (
              <span
                key={index}
                className="font-(--font-display) text-3xl font-medium uppercase tracking-[0.05em] text-foreground/18 sm:text-5xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
