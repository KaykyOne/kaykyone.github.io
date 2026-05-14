"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    id: "novustech",
    company: "NovusTech",
    role: "Desenvolvedor / Fundador",
    period: "2024 - Presente",
    description: "Lidero o desenvolvimento de soluções web, da concepção à entrega. Um exemplo é o NovusCFC, sistema de gestão para autoescolas que otimizou processos e melhorou a experiência do usuário.",
    skills: ["React", "Node.js", "TypeScript", ".NET", "PostgreSQL", "Docker", "UX/UI", "Figma"],
    link: "https://thenovustech.com.br/",
  },
  {
    id: "enterscience",
    company: "EnterScience",
    role: "Estagiário de Desenvolvimento de Software Full-Stack",
    period: "2026 - Presente",
    description: "Atuo no desenvolvimento de soluções web, contribuindo para projetos de pesquisa e inovação. Participo de todas as fases do ciclo de desenvolvimento, desde a análise de requisitos até a implementação e os testes, utilizando tecnologias modernas para entregar resultados eficientes.",
    skills: ["Laravel", "PHP", "Next", "Tailwind CSS", "TypeScript", "PostgreSQL", "Git"],
    link: "https://enterscience.com.br",
  },
  {
    id: "danda",
    company: "Autoescola Danda",
    role: "Estratégia de mídias sociais e geração de leads",
    period: "2025 - 2026",
    description: "Lidero a estratégia de mídias sociais e geração de leads, criando campanhas no Facebook, Instagram e LinkedIn para aumentar a visibilidade e a captação. Acompanho métricas e otimizo ações para sustentar o crescimento da empresa.",
    skills: ["Meta Ads", "Google Ads", "UX/UI", "Figma", "Instagram Ads"],
    link: "https://autoescoladanda.com.br",
  },
  {
    id: "ideal",
    company: "Autoescola Ideal",
    role: "Gerente Administrativo",
    period: "2023 - 2026",
    description: "Liderei a equipe e a operação administrativa, otimizando processos internos e implantando sistemas de gestão que elevaram a organização e a produtividade. Criei estratégias para melhorar a experiência e a satisfação dos alunos.",
    skills: ["Python", "JavaScript", "UX/UI", "Excel"],
    link: "https://autoescolaidealjales.com.br",
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(experiences[0].id)
  const activeExperience = experiences.find((exp) => exp.id === activeTab)

  return (
    <section id="experiencia" className="bg-card/30 py-24 sm:py-32">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">02.</span>
          <h2 className="text-2xl font-medium uppercase tracking-[0.04em] sm:text-4xl">Experiência</h2>
          <div className="section-rule" />
        </div>

        <div className="grid gap-6 md:grid-cols-[200px_1fr] md:gap-12 lg:grid-cols-[250px_1fr]">
          <div className="flex overflow-x-auto border-b border-border md:flex-col md:overflow-x-visible md:border-b-0 md:border-l">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={cn(
                  "relative whitespace-nowrap px-4 py-3 text-left font-mono text-[0.72rem] uppercase tracking-[0.18em] transition-all",
                  "hover:text-primary",
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
            <div className="brutal-panel px-7 py-8">
              <h3 className="mb-2 font-(--font-display) text-2xl font-medium uppercase tracking-[0.03em]">
                {activeExperience.role} <span className="text-primary">@ {activeExperience.company}</span>
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
                className="brutal-button mb-6 border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              >
                Visitar o site
                <span className="ml-2">↗</span>
              </a>
              <div className="flex flex-wrap gap-2">
                {activeExperience.skills.map((skill) => (
                  <span key={skill} className="brutal-tag border-primary/40 text-primary">
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
