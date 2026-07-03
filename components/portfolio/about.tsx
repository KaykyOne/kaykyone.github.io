"use client"

import { CheckCircle2, Code2, Rocket, Users, Zap } from "lucide-react"

const activateUsersNumber = 856

const highlights = [
  {
    icon: Code2,
    title: "Problema primeiro",
    description: "Processos, operação e negócio antes do código",
  },
  {
    icon: Users,
    title: `+${activateUsersNumber} Usuários`,
    description: "Sistemas em produção ativos diariamente",
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

export function About() {
  return (
    <section id="sobre" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">01.</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">Sobre mim</h2>
          <div className="section-rule" />
        </div>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(300px,0.92fr)] lg:gap-28">
          <div className="max-w-3xl space-y-7">
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              Minha relação com tecnologia nasceu da prática. Antes de atuar profissionalmente como desenvolvedor,
              trabalhei diretamente na rotina de autoescolas ligadas à minha família, acompanhando processos
              administrativos, atendimento, organização interna e desafios operacionais.
            </p>
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              Essa vivência me mostrou que muitos problemas de uma empresa não começam no código, mas na falta de
              processos claros, sistemas adequados e ferramentas que realmente acompanhem a rotina do negócio.
            </p>
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              <span className="font-medium text-primary">Meu diferencial:</span> entender o problema primeiro e só
              depois construir software útil, claro e funcional.
            </p>

            <details className="disclosure mt-12">
              <summary>
                <span>{proofPoints[0]}</span>
              </summary>
              <div className="space-y-0 border-t border-border/70 pb-2">
                {proofPoints.slice(1).map((fact, index) => (
                  <div key={index} className="flex items-center gap-3 border-b border-border/70 py-4 text-sm uppercase tracking-wider text-muted-foreground last:border-b-0">
                    <CheckCircle2 className="shrink-0 text-primary" size={16} />
                    <span>{fact}</span>
                  </div>
                ))}
              </div>
            </details>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border/70 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`group bg-card/90 p-7 transition-[background-color,color] duration-300 hover:bg-muted ${
                  index === 0 ? "sm:col-span-2 lg:min-h-56" : ""
                }`}
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary">
                  <item.icon size={24} />
                </div>
                <h3 className={`mb-3 font-(--font-display) font-semibold uppercase tracking-[0.02em] text-foreground ${
                  index === 0 ? "text-3xl sm:text-4xl" : "text-xl"
                }`}>
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
