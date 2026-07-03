"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: "novustech",
    company: "NovusTech",
    role: "Desenvolvedor / Fundador",
    period: "2024 - Presente",
    description: "Lidero o desenvolvimento de soluções web criadas a partir de problemas reais de negócio. A NovusCFC nasceu da vivência direta com a rotina de autoescolas familiares e evoluiu para uma solução voltada a organizar processos, reduzir trabalho manual e facilitar a gestão do setor.",
    skills: ["React", "Node.js", "TypeScript", ".NET", "PostgreSQL", "Docker", "UX/UI", "Figma"],
    link: "https://thenovustech.com.br/",
  },
  {
    id: "enterscience",
    company: "EnterScience",
    role: "Desenvolvimento de Software Full-Stack",
    period: "2026 - Presente",
    description: "Atuo no desenvolvimento de soluções web, contribuindo para projetos de pesquisa e inovação. Participo de etapas de análise, implementação e testes, aplicando uma visão prática de produto, processos e entrega técnica.",
    skills: ["Laravel", "PHP", "Next", "Tailwind CSS", "TypeScript", "PostgreSQL", "Git"],
    link: "https://enterscience.com.br",
  },
  {
    id: "danda",
    company: "Autoescola Danda",
    role: "Estratégia comercial e digitalização",
    period: "2025 - 2026",
    description: "Atuação próxima à rotina comercial e operacional de uma autoescola familiar, com contato direto com atendimento, captação, organização de informações e oportunidades de melhoria em processos. Essa vivência fortaleceu minha capacidade de entender o negócio antes de propor soluções digitais.",
    skills: ["Meta Ads", "Google Ads", "UX/UI", "Figma", "Instagram Ads"],
    link: "https://autoescoladanda.com.br",
  },
  {
    id: "ideal",
    company: "Autoescola Ideal",
    role: "Gestão administrativa e operação",
    period: "2023 - 2026",
    description: "Atuação na rotina administrativa e operacional de uma autoescola familiar, acompanhando organização interna, atendimento, gestão de informações e suporte aos processos do dia a dia. Essa experiência serviu como base para identificar oportunidades de digitalização no setor.",
    skills: ["Python", "JavaScript", "UX/UI", "Excel"],
    link: "https://autoescolaidealjales.com.br",
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].id)
  const activeExperience = experiences.find((exp) => exp.id === activeTab)

  return (
    <section id="experiencia" className="border-y border-border bg-card/35 py-28 sm:py-36">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">03.</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">Experiência</h2>
          <div className="section-rule" />
        </div>

        <div className="grid gap-8 md:grid-cols-[210px_1fr] md:gap-14 lg:grid-cols-[270px_1fr]">
          <div className="flex overflow-x-auto border border-border bg-background/40 md:flex-col md:overflow-x-visible">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={cn(
                  "relative whitespace-nowrap border-r border-border px-4 py-4 text-left font-mono text-[0.72rem] uppercase tracking-[0.18em] transition-all duration-300 md:border-b md:border-r-0",
                  "hover:bg-muted hover:text-primary",
                  activeTab === exp.id ? "bg-card text-primary" : "text-muted-foreground"
                )}
              >
                {activeTab === exp.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-primary md:bottom-auto md:top-0 md:right-auto md:h-full md:w-px" />
                )}
                {exp.company}
              </button>
            ))}
          </div>

          {activeExperience && (
            <div className="brutal-panel px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
              <h3 className="mb-3 font-(--font-display) text-2xl font-semibold uppercase leading-tight tracking-[0.02em] sm:text-3xl">
                {activeExperience.role} <br />
                <span className="text-primary">@ {activeExperience.company}</span>
              </h3>
              <p className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground">
                {activeExperience.period}
              </p>
              <p className="mb-6 max-w-3xl leading-7 text-muted-foreground">
                {activeExperience.description}
              </p>
              <a
                href={activeExperience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button mb-7 border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent hover:text-primary-foreground"
              >
                Visitar o site
                <span className="ml-2">↗</span>
              </a>
              <div className="flex flex-wrap gap-2">
                {activeExperience.skills.map((skill) => (
                  <span key={skill} className="brutal-tag border-primary/35 text-primary">
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
