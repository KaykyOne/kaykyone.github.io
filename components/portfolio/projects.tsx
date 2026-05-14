"use client"

import { ArrowUpRight, Github } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

const featuredProjects = [
  {
    title: "NovusCFC",
    description: "Um sistema de gestão completo para autoescolas. Gerencia alunos, instrutores, veículos, agendamentos e documentação. Interface moderna com dashboard analítico e relatórios automatizados.",
    tech: ["TypeScript", "Express.js", "Next.js", "React", "PostgreSQL"],
    status: "Em produção",
    image: "/novuscfc.png",
    featured: true,
  },
  {
    title: "Chatzinho",
    description: "Chatbot inteligente para atendimento ao cliente via WhatsApp. Responde dúvidas, fornece valores e serviços, classifica leads automaticamente e integra com CRM.",
    tech: ["TypeScript", "Express.js", "Next.js", "OpenAI API", "Supabase"],
    status: "Em produção",
    image: "/chatzinho.png",
    featured: true,
  },
]

const otherProjects = [
  {
    title: "LocalLoreAI",
    description: "Projeto de RPG em texto com IA local, treinada e 100% offline, inspirado no AI Dungeon. Focado em experimentação com modelos de linguagem locais.",
    tech: ["Python", "LLaMA"],
    link: "https://github.com/KaykyOne/LocalLoreAI",
  },
  {
    title: "Gestão de Cantores",
    description: "Sistema de gestão para contratação de cantores com API do Spotify. Busca artistas, visualiza álbuns e gerencia contratações para eventos.",
    tech: ["TypeScript", "Laravel", "PHP", "PostgreSQL", "Spotify API"],
    link: "https://github.com/KaykyOne/ProjetoApiSpotify",
  },
]

const deliveredSites = [
  {
    name: "NovusTech",
    link: "https://thenovustech.com.br/",
  },
  {
    name: "Legalize Obras",
    link: "https://legalizeobras.com.br/",
  },
  {
    name: "Autoescola Danda",
    link: "https://autoescoladanda.com.br",
  },
  {
    name: "Autoescola Ideal",
    link: "https://autoescolaidealjales.com.br",
  },
]

export function Projects() {
  return (
    <section id="projetos" className="bg-card/30 py-24 sm:py-32">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">04.</span>
          <h2 className="text-2xl font-medium uppercase tracking-[0.04em] sm:text-4xl">Principais Projetos</h2>
          <div className="section-rule" />
        </div>

        <div className="mb-24 space-y-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className="brutal-panel overflow-hidden">
                <img
                  src={withBasePath(project.image)}
                  alt={project.title}
                  className="relative aspect-video w-full object-cover transition-transform duration-150 hover:scale-[1.02]"
                />
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <p className="mb-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary">
                  Projeto em Destaque
                </p>
                <h3 className="mb-4 font-(--font-display) text-3xl font-medium uppercase tracking-[0.03em] sm:text-4xl">
                  {project.title}
                </h3>
                <div className="brutal-panel mb-4 p-6">
                  <p className="leading-7 text-muted-foreground">{project.description}</p>
                </div>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="brutal-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 border border-primary/45 px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-primary">
                    <span className="h-2 w-2 bg-primary" />
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="mb-12 text-center font-(--font-display) text-2xl font-medium uppercase tracking-[0.03em]">
            Outros projetos (parte acadêmica)
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-panel group p-6 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-primary"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center border border-border bg-background text-primary">
                    <Github size={20} />
                  </div>
                  <ArrowUpRight className="text-muted-foreground transition-colors group-hover:text-primary" size={18} />
                </div>
                <h4 className="mb-2 font-(--font-display) text-lg font-medium uppercase tracking-[0.03em] transition-colors group-hover:text-primary">
                  {project.title}
                </h4>
                <p className="mb-4 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="brutal-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h3 className="mb-8 text-center font-(--font-display) text-2xl font-medium uppercase tracking-[0.03em]">
            Sites entregues
          </h3>
          <div className="brutal-panel overflow-hidden">
            <div className="divide-y divide-border">
              {deliveredSites.map((site) => (
                <a
                  key={site.name}
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-card/50"
                >
                  <span className="font-(--font-display) text-lg font-medium uppercase tracking-[0.03em]">
                    {site.name}
                  </span>
                  <span className="break-all font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">
                    {site.link}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
