"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: "novustech",
    company: "NovusTech",
    role: "Desenvolvedor / Founder",
    period: "2024 - Presente",
    description: "Lidero o desenvolvimento de soluções web da concepção à entrega. Um exemplo é o NovusCFC, sistema de gestão para autoescolas que otimizou processos e melhorou a experiência do usuário.",
    skills: ["React", "Node.js", "TypeScript", ".NET", "PostgreSQL", "Docker", "UX/UI", "Figma"],
    link: "https://thenovustech.com.br/",
  },
  {
    id: "enterscience",
    company: "EnterScience",
    role: "Estagiário de Desenvolvimento de Software Full-Stack",
    period: "2026 - Presente",
    description: "Atuo no desenvolvimento de soluções web, contribuindo para projetos de pesquisa e inovação. Participo de todas as fases do ciclo de desenvolvimento, desde a análise de requisitos até a implementação e testes, utilizando tecnologias modernas para entregar resultados eficientes.",
    skills: ["Laravel", "PHP", "Next", "Tailwind CSS", "Typescript", "PostgreSQL", "Git"],
    link: "https://enterscience.com.br",
  },
  {
    id: "danda",
    company: "Autoescola Danda",
    role: "Social Media & Lead Generation Strategist",
    period: "2025 - 2026",
    description: "Lidero a estratégia de social media e geração de leads, criando campanhas em Facebook, Instagram e LinkedIn para aumentar visibilidade e captação. Acompanho métricas e otimizo ações para sustentar o crescimento da empresa.",
    skills: ["Meta Ads", "Google Ads", "UX/UI", "Figma", "Instagram Ads"],
    link: "https://autoescoladanda.com.br",
  },
  {
    id: "ideal",
    company: "Autoescola Ideal",
    role: "Gerente Administrativo",
    period: "2023 - 2026",
    description: "Liderei equipe e operação administrativa, otimizando processos internos e implantando sistemas de gestão que elevaram organização e produtividade. Criei estratégias para melhorar a experiência e satisfação dos alunos.",
    skills: ["Python", "Javascript", "UX/UI", "Excel"],
    link: "https://autoescolaidealjales.com.br",
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].id)
  const activeExperience = experiences.find((exp) => exp.id === activeTab)

  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Experiência</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] gap-6 md:gap-12">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={cn(
                  "px-4 py-3 text-left text-sm font-medium whitespace-nowrap transition-all relative",
                  "hover:bg-primary/5 hover:text-primary",
                  activeTab === exp.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground"
                )}
              >
                {activeTab === exp.id && (
                  <span className="absolute left-0 top-0 bottom-0 w-0.5 md:w-0.5 bg-primary" />
                )}
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeExperience && (
            <div className="py-2">
              <h3 className="text-xl font-semibold mb-1">
                {activeExperience.role}{" "}
                <span className="text-primary">@ {activeExperience.company}</span>
              </h3>
              <p className="text-sm text-muted-foreground font-mono mb-6">
                {activeExperience.period}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {activeExperience.description}
              </p>
              <a href={activeExperience.link} target="_blank" rel="noopener noreferrer" className="text-white  px-4 py-2 border border-primary rounded-sm-sm font-medium hover:bg-primary/90 transition-all mb-6 inline-block">
                Visitar Site
                <span className="ml-2">↗</span>
              </a>
              <div className="flex flex-wrap gap-2">
                {activeExperience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-sm-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
