"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/ui/reveal"

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
    <section id="experiencia" className="bg-surface py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="section-index">Trajetória profissional</span>
          <h2 className="text-4xl sm:text-6xl">Experiência</h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[210px_1fr] md:gap-14 lg:grid-cols-[270px_1fr]">
          <div className="flex gap-2 overflow-x-auto rounded-full bg-muted p-1 md:flex-col md:overflow-x-visible md:rounded-3xl md:p-1.5">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={cn("tab-pill", activeTab === exp.id ? "tab-pill-active" : "tab-pill-idle")}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {activeExperience && (
            <div className="brutal-panel p-8 sm:p-10">
              <h3 className="mb-3 font-serif text-2xl leading-tight sm:text-3xl">
                {activeExperience.role} <br />
                <span className="text-primary">@ {activeExperience.company}</span>
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                {activeExperience.period}
              </p>
              <p className="mb-6 max-w-3xl leading-7 text-muted-foreground">
                {activeExperience.description}
              </p>
              <a
                href={activeExperience.link}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button btn-primary mb-7"
              >
                Visitar o site
                <ArrowUpRight size={16} />
              </a>
              <div className="flex flex-wrap gap-2">
                {activeExperience.skills.map((skill) => (
                  <span key={skill} className="brutal-tag text-primary">
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
