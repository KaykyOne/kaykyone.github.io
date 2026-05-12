"use client"

import { 
  Code2, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Sparkles,
  Palette,
  Terminal
} from "lucide-react"

const skillCategories = [
  {
    icon: Layout,
    title: "Frontend & UI",
    skills: ["React", "Next.js", "Astro", "TypeScript", "TailwindCSS", "Figma", "Responsive Design"],
    color: "from-purple-950/40 to-neutral-900/40",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "REST APIs", "WebSockets", "Authentication", "PHP/Laravel"],
    color: "from-purple-900/30 to-neutral-900/40",
  },
  {
    icon: Database,
    title: "Database & Data",
    skills: ["PostgreSQL", "MongoDB", "Prisma ORM", "Query Optimization", "Data Modeling"],
    color: "from-purple-800/25 to-neutral-900/35",
  },
  {
    icon: Terminal,
    title: "DevOps & Infra",
    skills: ["Docker", "Git & GitHub", "CI/CD", "Linux", "Performance Tuning"],
    color: "from-neutral-900/30 to-purple-900/30",
  },
  {
    icon: Sparkles,
    title: "IA & Automação",
    skills: ["OpenAI API", "Prompt Engineering", "Local LLMs", "Chatbots", "Automação"],
    color: "from-purple-900/30 to-purple-950/40",
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: ["UX/UI Design", "Figma", "User Research", "Wireframing", "Prototyping"],
    color: "from-neutral-900/35 to-purple-950/45",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Expertise Técnica</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Skills grid - Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card rounded-sm-sm border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm-sm bg-primary/10 text-primary">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-sm-sm border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
              "Docker", "TailwindCSS", "Figma", "OpenAI", "Git",
              "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", 
              "Docker", "TailwindCSS", "Figma", "OpenAI", "Git",
            ].map((tech, index) => (
              <span
                key={index}
                className="text-4xl sm:text-6xl font-bold text-muted-foreground/10 whitespace-nowrap"
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
