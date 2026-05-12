"use client"

import { CheckCircle2, Code2, Rocket, Users, Zap } from "lucide-react"

const activateUsersNumber = 856

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack",
    description: "Frontend, Backend, Database, DevOps",
  },
  {
    icon: Users,
    title: `+${activateUsersNumber} Usuários`,
    description: "Sistemas em produção ativos diariamente",
  },
  {
    icon: Rocket,
    title: "Startup Founder",
    description: "Do zero ao cliente pagante",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização é prioridade em tudo",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Sobre mim</h2>
          <div className="h-px bg-border flex-1 max-w-xs" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Text content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou <span className="text-foreground font-medium">Kayky Zioti</span>, desenvolvedor full-stack 
              com foco em criar soluções web escaláveis, rápidas e com excelente UX/UI.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Especialista em arquitetura moderna, otimização de performance e automação com IA. 
              Combino desenvolvimento técnico sólido com visão de negócio.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="text-primary font-medium">Meu diferencial:</span> Consigo entender o que o cliente 
              realmente precisa e transformar isso em produtos que geram resultados mensuráveis.
            </p>

            {/* Quick facts */}
            <div className="pt-6 space-y-3">
              {[
                `Sistemas em produção com +${activateUsersNumber} usuários ativos`,
                "Experiência em startup do zero ao cliente pagante",
                "Foco em performance e otimização",
                "Integração de IA em produtos web",
              ].map((fact, index) => (
                <div key={index} className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="text-primary shrink-0" size={18} />
                  <span>{fact}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-sm-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-sm-sm bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
