"use client"

import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import Link from "next/link"

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

export function Projects() {
  return (
    <section id="projetos" className="py-24 sm:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Principais Projetos</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        {/* Featured projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Project image placeholder */}
               <img src={project.image} alt={project.title} className="relative aspect-video rounded-sm-sm overflow-hidden from-primary/20 via-card to-card hover:scale-105 transition-all duration-300 hover:shadow-lg shadow-primary/10" />

              {/* Project info */}
              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <p className="text-primary font-mono text-sm mb-2">Projeto em Destaque</p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">{project.title}</h3>
                <div className="p-6 bg-card rounded-sm-sm border border-border mb-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-sm font-mono text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/15 text-primary rounded-sm-sm text-sm font-medium">
                    <span className="w-2 h-2 bg-primary rounded-sm-sm" />
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-12">Outros Projetos (Parte Acadêmica)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-card rounded-sm-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm-sm bg-primary/10 text-primary">
                    <Github size={20} />
                  </div>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
