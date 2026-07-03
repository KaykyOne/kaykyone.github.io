"use client"

import { ArrowUpRight, Boxes, Github } from "lucide-react"
import { AnimatedList } from "@/components/ui/animated-list"

const featuredProjects = [
  {
    title: "NovusCFC",
    description: "Software criado a partir da vivência real com a rotina de autoescolas familiares. O projeto nasceu para organizar processos, reduzir trabalho manual e transformar demandas operacionais em uma solução digital mais simples, prática e escalável.",
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
    <section id="projetos" className="border-y border-border bg-card/35 py-28 sm:py-36">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">05.</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">Principais Projetos</h2>
          <div className="section-rule" />
        </div>

        <div className="mb-20 divide-y divide-border/70 border-y border-border/70">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="grid gap-6 py-8 lg:grid-cols-[72px_minmax(0,1fr)] lg:gap-8"
            >
              <div className="flex h-14 w-14 items-center justify-center bg-background text-primary">
                <Boxes size={28} />
              </div>

              <div>
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.22em] text-primary">
                      Projeto em Destaque
                    </p>
                    <h3 className="font-(--font-display) text-3xl font-semibold uppercase leading-none tracking-[0.02em] sm:text-4xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-primary">
                    <span className="h-2 w-2 bg-primary" />
                    {project.status}
                  </span>
                </div>

                <div className="border-t border-border/70 pt-5">
                  <p className="mb-6 max-w-2xl leading-7 text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="brutal-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border/70 pt-7">
          <h3 className="mb-8 font-(--font-display) text-2xl font-semibold uppercase tracking-[0.02em] text-foreground">
              Projetos acadêmicos
          </h3>
          <div className="grid gap-4 pb-10 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-t border-border/70 py-6 transition-colors duration-300 hover:border-primary"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center bg-card text-primary">
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

        <div className="mt-12 border-t border-border/70 pt-7">
          <h3 className="mb-8 font-(--font-display) text-2xl font-semibold uppercase tracking-[0.02em] text-foreground">
              Outros Projetos entregues
          </h3>
          <div className="divide-y divide-border/70 pb-4">
            <AnimatedList>
              {deliveredSites.map((site) => (
                <a
                  key={site.name}
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 py-5 transition-colors duration-300 hover:text-primary sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <span className="font-(--font-display) text-lg font-medium uppercase tracking-[0.03em]">
                    {site.name}
                  </span>
                  <span className="break-all font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">
                    {site.link}
                  </span>
                </a>
              ))}
            </AnimatedList>
          </div>
        </div>
      </div>
    </section>
  )
}
