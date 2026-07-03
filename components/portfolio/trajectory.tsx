"use client"

import { Building2, Code2, Lightbulb, Workflow } from "lucide-react"

const trajectory = [
  {
    icon: Building2,
    title: "Contato direto com negócios reais",
    description: "Atuação em empresas familiares do setor de autoescolas, acompanhando processos administrativos, atendimento, organização interna e desafios da operação.",
  },
  {
    icon: Workflow,
    title: "Processos manuais e oportunidades de melhoria",
    description: "A rotina operacional revelou gargalos que poderiam ser reduzidos com tecnologia, automação e melhor organização das informações.",
  },
  {
    icon: Lightbulb,
    title: "Nascimento da NovusCFC",
    description: "A partir dessa experiência, desenvolvi uma solução voltada para digitalizar processos e facilitar a gestão de autoescolas.",
  },
  {
    icon: Code2,
    title: "Construção de soluções web",
    description: "Hoje aplico essa visão em aplicações web, automações, integrações e sistemas que resolvem problemas reais de negócio.",
  },
]

export function Trajectory() {
  return (
    <section id="trajetoria" className="py-28 sm:py-36">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">02.</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">Trajetória</h2>
          <div className="section-rule" />
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
          <div>
            <p className="max-w-md font-(--font-display) text-3xl font-semibold uppercase leading-tight tracking-[0.02em] text-foreground sm:text-4xl">
              Da vivência operacional à construção de software para resolver problemas reais.
            </p>
          </div>

          <div className="divide-y divide-border/70 border-y border-border/70">
            {trajectory.map((item, index) => (
              <div key={item.title} className="grid gap-5 py-7 sm:grid-cols-[64px_minmax(0,1fr)]">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-primary">
                    0{index + 1}
                  </span>
                  <item.icon className="text-primary sm:hidden" size={20} />
                </div>
                <div>
                  <div className="mb-3 hidden h-10 w-10 items-center justify-center bg-card text-primary sm:flex">
                    <item.icon size={20} />
                  </div>
                  <h3 className="mb-3 font-(--font-display) text-xl font-semibold uppercase tracking-[0.02em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="max-w-2xl leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
