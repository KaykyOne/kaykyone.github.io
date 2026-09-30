import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { business, services, whatsappHref } from '@/lib/site'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'
import { ServiceProjectExamples } from '@/components/portfolio/service-project-examples'
import { WhatsappFloatingButton } from '@/components/portfolio/whatsapp-floating-button'

export const dynamicParams = false

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }))
}

type PageProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()
  const url = `${business.url}/servicos/${slug}`
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: url },
    openGraph: { type: 'website', locale: 'pt_BR', siteName: business.name, url, title: `${service.title} | ${business.name}`, description: service.description, images: [`${business.url}/kaykyzioti.png`] },
    twitter: { card: 'summary_large_image', title: `${service.title} | ${business.name}`, description: service.description, images: [`${business.url}/kaykyzioti.png`] },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = services.find((item) => item.slug === slug)
  if (!service) notFound()
  const url = `${business.url}/servicos/${slug}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': `${url}#service`, name: service.title, description: service.description, url, serviceType: service.title, provider: { '@id': `${business.url}/#organization` } },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: business.url },
        { '@type': 'ListItem', position: 2, name: service.title, item: url },
      ] },
    ],
  }
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="bg-background text-foreground">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
        <section className="bg-hero pb-16 pt-32 text-hero-foreground sm:pb-24 sm:pt-40">
          <div className="section-shell">
            <Link href="/#servicos" className="mb-10 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white"><ArrowLeft size={16} aria-hidden="true" /> Todos os serviços</Link>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.12em] text-hero-accent">{business.name} · Desenvolvimento para empresas</p>
            <h1 className="mb-7 max-w-4xl text-4xl leading-tight tracking-tight sm:text-6xl lg:text-7xl">{service.title}</h1>
            <p className="mb-8 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">{service.summary}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={whatsappHref(`Olá, Kayky! Gostaria de um orçamento para ${service.shortTitle.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="brutal-button min-h-12 bg-white text-black">Pedir orçamento <ArrowUpRight size={18} aria-hidden="true" /></Link>
              <Link href="#exemplos" className="brutal-button min-h-12 border-white/40 text-white hover:bg-white/10">Ver trabalhos realizados</Link>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/75">Contrato e emissão de nota fiscal · CNPJ {business.cnpj}</p>
          </div>
        </section>

        <section id="visao-geral" className="py-16 sm:py-24">
          <div className="section-shell">
            <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:gap-16">
              <h2 className="max-w-xl text-3xl sm:text-5xl">Uma solução pensada para a sua operação</h2>
              <p className="text-lg leading-8 text-muted-foreground">{service.problem}</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {service.deliverables.map(([title, description]) => (
                <div key={title} className="brutal-panel p-7"><h3 className="mb-4 text-2xl">{title}</h3><p className="leading-7 text-muted-foreground">{description}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface py-16 sm:py-24">
          <div className="section-shell grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div><p className="mb-4 text-sm text-primary">Da demanda ao contrato</p><h2 className="text-3xl sm:text-5xl">Como começa a contratação</h2></div>
            <ol className="space-y-7">
              <li><h3 className="mb-2 text-xl">01. Entendimento do objetivo</h3><p className="leading-7 text-muted-foreground">Você apresenta a necessidade, a rotina da empresa e as ferramentas que já utiliza.</p></li>
              <li><h3 className="mb-2 text-xl">02. Escopo e proposta</h3><p className="leading-7 text-muted-foreground">Definimos entregas, prioridades, dependências, investimento e etapas do projeto.</p></li>
              <li><h3 className="mb-2 text-xl">03. Formalização</h3><p className="leading-7 text-muted-foreground">A contratação é realizada por pessoa jurídica, com contrato de prestação de serviços e emissão de nota fiscal.</p></li>
            </ol>
          </div>
        </section>

        <ServiceProjectExamples slug={service.slug} />

        <section className="py-16 sm:py-24"><div className="section-shell max-w-4xl">
          <h2 className="mb-6 text-3xl sm:text-5xl">Conheça {service.project}</h2>
          <p className="mb-7 text-lg leading-8 text-muted-foreground">{service.projectDescription}</p>
          <Link href={service.projectHref} className="inline-flex items-center gap-2 font-medium text-primary">Ver projeto <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <h2 id="duvidas" className="mb-8 mt-16 text-3xl sm:text-4xl">Dúvidas sobre o serviço</h2>
          <div className="space-y-3">{service.questions.map(([question, answer]) => (
            <details key={question} className="disclosure"><summary>{question}</summary><p className="px-4 pb-5 leading-7 text-muted-foreground">{answer}</p></details>
          ))}</div>
        </div></section>

        <section id="orcamento" className="scroll-mt-24 bg-hero py-16 text-hero-foreground sm:py-24"><div className="section-shell">
          <h2 className="mb-6 max-w-3xl text-3xl sm:text-5xl">Conte o que sua empresa precisa desenvolver</h2>
          <p className="mb-8 max-w-2xl text-lg leading-8 text-white/80">Fale diretamente com Kayky Zioti para avaliar sua demanda e solicitar uma proposta. Contrato, emissão de nota fiscal e CNPJ {business.cnpj}.</p>
          <Link href={whatsappHref(`Olá, Kayky! Gostaria de um orçamento para ${service.shortTitle.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer" className="brutal-button min-h-12 w-full bg-white text-black sm:w-auto">Pedir orçamento pelo WhatsApp <ArrowUpRight size={18} aria-hidden="true" /></Link>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">Envie seu objetivo, uma breve descrição do projeto e o prazo desejado para começarmos a conversa.</p>
          <Link href={`mailto:${business.email}`} className="mt-5 block w-fit text-sm text-white/80 underline underline-offset-4">Prefiro conversar por e-mail</Link>
        </div></section>

        <nav aria-label="Outros serviços" className="section-shell py-12"><p className="mb-4 text-sm text-muted-foreground">Outros serviços para sua empresa</p><div className="flex flex-wrap gap-x-8 gap-y-4">{services.filter((item) => item.slug !== slug).map((item) => <Link key={item.slug} href={`/servicos/${item.slug}`} className="text-primary underline underline-offset-4">{item.shortTitle}</Link>)}</div></nav>
      </main>
      <Footer />
      <WhatsappFloatingButton message={`Olá, Kayky! Gostaria de conversar sobre ${service.shortTitle.toLowerCase()}.`} />
    </>
  )
}
