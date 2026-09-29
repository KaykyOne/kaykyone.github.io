"use client"

import { ArrowUpRight, Boxes, GraduationCap, Link2 } from "lucide-react"
import Image from "next/image"
import { withBasePath } from "@/lib/base-path"
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal"

const featuredProjects = [
  {
    title: "NovusCFC",
    description: "Software criado a partir da vivência real com a rotina de autoescolas familiares. Organiza processos, reduz trabalho manual e transforma demandas operacionais em uma solução digital simples e escalável.",
    tech: ["TypeScript", "Express.js", "Next.js", "React", "PostgreSQL"],
    status: "Em produção",
    image: "/novuscfc.png",
    caseStudyHref: "/projetos/novuscfc",
    featured: true,
  },
  {
    title: "Chatzinho",
    description: "Chatbot inteligente para atendimento ao cliente via WhatsApp. Responde dúvidas, fornece valores e serviços, classifica leads automaticamente e integra com CRM.",
    tech: ["TypeScript", "Express.js", "Next.js", "OpenAI API", "Supabase"],
    status: "Em produção",
    image: "/chatzinho.png",
    caseStudyHref: "/projetos/chatzinho",
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
  {
    name: "Baruch Marketplace",
    link: "https://baruchmarketplace.com/",
  },
  {
    name: "Chá de Bebê do Teodoro",
    link: "https://chadoteodoro.github.io/",
  },
  {
    name: "Blog Loco por Vino",
    link: "https://www.locoporvino.com/",
  },
  {
    name: "Bethel Elevadores",
    link: "https://www.bethelelevadores.com.br/",
  },
]

const stats = [
  { value: featuredProjects.length, label: "Em destaque" },
  { value: otherProjects.length, label: "Acadêmicos" },
  { value: deliveredSites.length, label: "Sites entregues" },
]

export function Projects() {
  return (
    <section id="projetos" className="bg-surface py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="section-index">04.</span>
          <h2 className="text-4xl sm:text-6xl">Principais Projetos</h2>
        </Reveal>

        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl leading-7 text-muted-foreground">
            Uma seleção do que já construí: de produtos em produção resolvendo problemas reais de negócio a
            experimentos pessoais e sites entregues para clientes.
          </p>
          <div className="flex gap-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <RevealGroup className="mb-20 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <RevealItem
              key={project.title}
              className="group"
            >
              <a href={project.caseStudyHref} className="brutal-panel flex h-full flex-col overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <div className="relative aspect-[4/3] overflow-hidden bg-primary/10">
                {project.image ? (
                  <Image
                    src={withBasePath(project.image)}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full place-items-center text-primary">
                    <Boxes size={40} />
                  </div>
                )}
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-background/95 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  <span className="size-2 rounded-full bg-secondary" />
                  {project.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Projeto em destaque
                </p>
                <h3 className="mb-2 font-serif text-2xl">{project.title}</h3>
                <p className="mb-5 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="brutal-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Ver estudo do projeto <ArrowUpRight size={16} />
                </span>
              </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="pt-2">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary">
              <GraduationCap size={18} />
            </span>
            <h3 className="font-serif text-2xl text-foreground">Projetos acadêmicos</h3>
          </div>
          <RevealGroup className="grid gap-6 pb-4 sm:grid-cols-2">
            {otherProjects.map((project, index) => (
              <RevealItem key={index} className="h-full">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-panel group flex h-full flex-col p-6"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="grid size-10 place-items-center rounded-full bg-muted text-primary">
                      <Boxes size={20} />
                    </div>
                    <ArrowUpRight className="text-muted-foreground transition-colors group-hover:text-primary" size={18} />
                  </div>
                  <h4 className="mb-2 font-serif text-lg transition-colors group-hover:text-primary">
                    {project.title}
                  </h4>
                  <p className="mb-4 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="brutal-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <div className="mt-16 pt-2">
          <div className="mb-8 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary">
              <Link2 size={18} />
            </span>
            <h3 className="font-serif text-2xl text-foreground">Outros projetos entregues</h3>
          </div>
          <RevealGroup className="grid gap-3 pb-4 sm:grid-cols-2">
            {deliveredSites.map((site) => (
              <RevealItem key={site.name}>
                <a
                  href={site.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-panel group flex items-center justify-between gap-4 p-5 transition-colors duration-300 hover:bg-muted"
                >
                  <span className="font-serif text-lg">
                    {site.name}
                  </span>
                  <ArrowUpRight className="shrink-0 text-muted-foreground transition-colors group-hover:text-primary" size={18} />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
