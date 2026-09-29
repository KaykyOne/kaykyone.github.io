"use client"

import { Building2, CheckCircle2, Code2, Lightbulb, Rocket, Workflow, Zap } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal"

const highlights = [
  {
    icon: Code2,
    title: "Problema primeiro",
    description: "Processos, operação e negócio antes do código",
  },
  {
    icon: Rocket,
    title: "NovusCFC",
    description: "Produto criado a partir de vivência real com autoescolas",
  },
  {
    icon: Zap,
    title: "Execução técnica",
    description: "Software claro, funcional e orientado à operação",
  },
]

const proofPoints = [
  "Vivência direta em empresas familiares do setor de autoescolas",
  "Contato com atendimento, administração, gestão e organização de informações",
  "Identificação de oportunidades de digitalização sem depender de hipóteses abstratas",
  "Criação de soluções próprias a partir de problemas observados na prática",
]

const journey = [
  { icon: Building2, title: "Contato direto com negócios reais" },
  { icon: Workflow, title: "Processos manuais identificados" },
  { icon: Lightbulb, title: "Nascimento da NovusCFC" },
  { icon: Code2, title: "Construção de soluções web" },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="section-index">01.</span>
          <h2 className="text-4xl sm:text-6xl">Sobre mim</h2>
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)] lg:gap-28">
          <Reveal delay={0.1} className="max-w-3xl space-y-6">
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              Minha relação com tecnologia nasceu da prática: antes de desenvolver profissionalmente, vivi a rotina
              de autoescolas ligadas à minha família, de perto o suficiente pra ver que a maioria dos problemas de
              uma empresa não começa no código — começa na falta de processos claros.
            </p>
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              <span className="font-medium text-primary">Meu diferencial:</span> entender o problema primeiro e só
              depois construir software útil, claro e funcional.
            </p>

            <details className="disclosure mt-10">
              <summary>
                <span>{proofPoints[0]}</span>
              </summary>
              <div className="space-y-0 px-2 pb-2">
                {proofPoints.slice(1).map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 py-4 text-sm text-muted-foreground">
                    <CheckCircle2 className="shrink-0 text-primary" size={16} />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </details>
          </Reveal>

          <RevealGroup delay={0.15} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <RevealItem
                key={index}
                className={`brutal-panel group p-7 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-6 grid size-12 place-items-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 font-serif text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.2} className="mt-20 pt-4">
          <p className="mb-8 text-xs font-medium text-muted-foreground">Da vivência operacional ao software</p>
          <div className="grid gap-6 sm:grid-cols-4 sm:gap-4">
            {journey.map((step, index) => (
              <div key={step.title} className="relative flex items-center gap-3 sm:flex-col sm:items-start sm:gap-4">
                {index < journey.length - 1 && (
                  <span className="absolute left-[19px] top-10 hidden h-px w-full bg-border sm:block" />
                )}
                <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <step.icon size={18} />
                </span>
                <h4 className="font-serif text-base leading-tight text-foreground sm:text-lg">{step.title}</h4>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
