import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/site'

export function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 bg-surface py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-primary">Serviços para empresas</p>
          <h2 className="mb-6 text-4xl sm:text-6xl">O que sua empresa precisa desenvolver?</h2>
          <p className="text-lg leading-8 text-muted-foreground">Desenvolvimento de software, criação de sites, automação com inteligência artificial e design para sua presença digital. Atendimento direto, contratação por CNPJ, contrato e nota fiscal.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Link key={service.slug} href={`/servicos/${service.slug}`} className="brutal-panel group flex h-full flex-col p-7 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              <span className="mb-10 font-mono text-sm text-primary">0{index + 1}</span>
              <h3 className="mb-4 text-2xl sm:text-3xl">{service.shortTitle}</h3>
              <p className="mb-8 flex-1 text-base leading-7 text-muted-foreground">{service.summary}</p>
              <span className="flex items-center justify-between gap-3 text-sm font-medium text-primary">Conhecer o serviço <ArrowUpRight aria-hidden="true" size={20} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
