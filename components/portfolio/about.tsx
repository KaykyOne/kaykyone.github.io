"use client"

import { CheckCircle2, Code2, Rocket, Users, Zap } from "lucide-react"

const activateUsersNumber = 856

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack",
    description: "Front-end, back-end, banco de dados e DevOps",
  },
  {
    icon: Users,
    title: `+${activateUsersNumber} Usuários`,
    description: "Sistemas em produção ativos diariamente",
  },
  {
    icon: Rocket,
    title: "Fundador de startup",
    description: "Do zero ao cliente pagante",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "A otimização é prioridade em tudo",
  },
]

export function About() {
  return (
    <section id="sobre" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div className="section-heading">
          <span className="section-index">01.</span>
          <h2 className="text-2xl font-bold uppercase tracking-[-0.04em] sm:text-4xl">Sobre mim</h2>
          <div className="section-rule" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <p className="text-lg leading-8 text-muted-foreground">
              Sou <span className="font-medium text-foreground">Kayky Zioti</span>, desenvolvedor full-stack
              com foco em criar soluções web escaláveis, rápidas e com excelente UX/UI.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              Especialista em arquitetura moderna, otimização de performance e automação com IA.
              Combino desenvolvimento técnico sólido com visão de negócio.
            </p>
            <p className="text-lg leading-8 text-muted-foreground">
              <span className="font-medium text-primary">Meu diferencial:</span> consigo entender o que o cliente
              realmente precisa e transformar isso em produtos que geram resultados mensuráveis.
            </p>

            <div className="brutal-panel space-y-3 px-6 pb-6 pt-6">
              {[
                `Sistemas em produção com +${activateUsersNumber} usuários ativos`,
                "Experiência em startup, do zero ao cliente pagante",
                "Foco em performance e otimização",
                "Integração de IA em produtos web",
              ].map((fact, index) => (
                <div key={index} className="flex items-center gap-3 text-sm uppercase tracking-wider text-muted-foreground">
                  <CheckCircle2 className="shrink-0 text-primary" size={16} />
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="brutal-panel group p-6 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-primary"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center border border-border bg-background text-primary transition-colors group-hover:border-primary">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 font-(--font-display) text-lg font-semibold uppercase tracking-[-0.03em] text-foreground">
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
