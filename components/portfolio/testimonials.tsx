"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal"

const freelancerProfile = "https://www.99freelas.com.br/user/kayky-zioti"

const reviews = [
  {
    project: "POC e integração com MikroTik",
    quote: "Ja foi feito mais de três projetos e sempre entrega com muita qualidade, sempre no prazo! Super recomendo, nota 10!",
    period: "set. 2026 - set. 2026",
    link: freelancerProfile,
  },
  {
    project: "Identidade visual, presença digital, melhorias no site e Google Ads",
    quote: "Um profissional excelente super recomendo, sempre no prazo já fechamos muitos trabalhos e sempre executa de forma muito boa.",
    period: "set. 2026 - set. 2026",
    link: freelancerProfile,
  },
  {
    project: "Melhoria do layout de marketplace",
    quote: "Bom",
    period: "set. 2026 - set. 2026",
    link: freelancerProfile,
  },
  {
    project: "Portfólio profissional para empresa de manutenção predial",
    quote: "Um trabalho bem feito, fiquei muito satisfeito com o que foi apresentado. Recomendo e trabalharia novamente. 10/10",
    period: "set. 2026 - set. 2026",
    link: freelancerProfile,
  },
  {
    project: "SEO, Google e campanhas para geração de clientes",
    quote: "Já contratei o Kayk outras vezes e, mais uma vez, o trabalho foi excelente! É um profissional muito competente, comprometido e que realmente entende do que faz. A comunicação é ótima, cumpre os prazos e entrega um trabalho de muita qualidade. Recomendo de olhos fechados e certamente voltarei a contratar novamente!",
    period: "ago. 2026 - set. 2026",
    link: freelancerProfile,
  },
  {
    project: "Programador para conectar a Binance ao Chart Trading (arrastar stop e ganho)",
    quote: "Excelente profissional! Muito comprometido, atencioso e responsável. Entregou o trabalho conforme combinado e demonstrou muita qualidade e profissionalismo. Recomendo!",
    period: "set. 2026 - set. 2026",
    link: freelancerProfile,
  },
  {
    project: "Melhoria de estrutura e visibilidade de marketplace",
    quote: "Bom",
    period: "set. 2026 - set. 2026",
    link: freelancerProfile,
  },
  {
    project: "Automação para encaminhar fotos do WhatsApp entre grupos",
    quote: "Kayky é fantástico, extremamente competente e principalmente agil e entende as necessidades exatas do seu cliente, proporcionando sempre um solução sob medida para todas as demandas.",
    period: "ago. 2026 - set. 2026",
    link: freelancerProfile,
  },
  {
    project: "Criação de ícones para ERP e PDV offline",
    quote: "Recomendo a todos da plataforma",
    period: "ago. 2026 - ago. 2026",
    link: freelancerProfile,
  },
  {
    project: "Criação de planilha Excel interativa com painel e relatório por período",
    quote: "Profissional excepcional! Estou muito satisfeita com o resultado do projeto. Desde o início, demonstrou muita paciência, atenção e comprometimento para entender exatamente o que eu precisava, inclusive fazendo os ajustes necessários até chegar ao resultado esperado. O trabalho ficou excelente, muito organizado, funcional e superou minhas expectativas. É um profissional que realmente se preocupa em entregar um trabalho de qualidade e atender bem o cliente. Com certeza voltarei a trabalhar com ele",
    period: "ago. 2026 - ago. 2026",
    link: freelancerProfile,
  },
  {
    project: "Baruch Marketplace - melhoria de estrutura",
    quote: "BOM!",
    period: "ago. 2026 - ago. 2026",
    link: freelancerProfile,
  },
  {
    project: "Finalizar marketplace de automóveis com anúncios pagos",
    quote: "Atencioso, prestativo e boa comunicação.",
    period: "Cancelado",
    link: freelancerProfile,
  },
  {
    project: "Site de comércio internacional para card games e produtos 3D",
    quote: "Muito profissional, atende todas as demandas em prazo e com qualidade",
    period: "ago. 2026 - ago. 2026",
    link: "https://www.99freelas.com.br/project/site-de-comercio-internacional-para-card-games-e-produtos-3d-774664",
  },
  {
    project: "Baruch Marketplace Ajustes",
    quote: "Muito bom",
    period: "ago. 2026 - ago. 2026",
    link: "https://www.99freelas.com.br/project/baruch-marketplace-ajustes-776563",
  },
  {
    project: "Plataforma web de jogos educacionais adaptativa para DI leve",
    quote: "Muito profissional.",
    period: "ago. 2026 - ago. 2026",
    link: "https://www.99freelas.com.br/project/plataforma-web-de-jogos-educacionais-adaptativa-para-di-leve-773243",
  },
  {
    project: "Chatbot para WhatsApp e Telegram com comandos de voz e texto",
    quote: "Super dedicado, atencioso e entrega no prazo certo, recomendo! Valeu.",
    period: "jul. 2026 - ago. 2026",
    link: "https://www.99freelas.com.br/project/chatbot-para-whatsapp-e-telegram-com-comandos-de-voz-e-texto-kayky-z-771969",
  },
  {
    project: "Transformar convite de chá de bebê em convite digital interativo",
    quote: "Um camarada muito atencioso e muito bom no que faz.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/transformar-convite-de-cha-de-bebe-em-convite-digital-interativo-771307",
  },
  {
    project: "Corrigir função de cálculo em calculadora financeira (Python)",
    quote: "O Kayky entregou o projeto com perfeição. Consertou a função da calculadora financeira em Python muito rápido e o código rodou de primeira, sem nenhum erro. Ótimo freelancer, muito prestativo, ágil e competente. Recomendo a todos.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/corrigir-funcao-de-calculo-em-calculadora-financeira-python-771707",
  },
  {
    project: "Apresentação comercial para mentoria (PowerPoint ou Canva)",
    quote: "Muito atencioso, entregou muito rápido o projeto e com uma qualidade excelente! Super indico!",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/apresentacao-comercial-para-mentoria-powerpoint-ou-canva-770556",
  },
  {
    project: "Edição e revisão ABNT para artigo de 43 páginas",
    quote: "Trabalho eficiente e muito preciso. Contrataria novamente.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/edicao-e-revisao-abnt-para-artigo-de-43-paginas-768103",
  },
  {
    project: "Migração de site institucional de Weebly para Substack",
    quote: "Profissional raro de se encontrar. Rápido, competente e direto.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/migracao-de-site-institucional-de-weebly-para-substack-766596",
  },
  {
    project: "Assistência para upgrade de PC",
    quote: "Atencioso, deu instruções sobre todo o processo e fora do horário comercial.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/assistencia-para-upgrade-de-pc-766143",
  },
  {
    project: "Vetorizar logotipo para impressão em outdoor",
    quote: "Recomendo.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/vetorizar-logotipo-para-impressao-em-outdoor-765631",
  },
  {
    project: "Identidade visual e embalagem para suplemento dermatológico canino",
    quote: "Muito prestativo e rápido! Ótimo resultado, recomendo muito.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/identidade-visual-e-embalagem-para-suplemento-dermatologico-canino-kayky-z-764851",
  },
  {
    project: "Atualizar site institucional",
    quote: "Fez a modernização do meu site e ficou perfeito, recomendo 100%.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/atualizar-site-institucional-764456",
  },
  {
    project: "Site para autoescola com foco em geração de leads",
    quote: "Kayky realmente sabe como pensar grande — não é qualquer um que planeja um site que não só seja bonito, mas que também funcione como uma máquina de geração de leads. A atenção dele a cada detalhe, desde copy persuasivo até integração com CRM e WhatsApp, mostra que ele não está apenas construindo um site, está construindo resultados reais para a autoescola. Profissionalismo e visão estratégica juntos.",
    period: "jul. 2026 - jul. 2026",
    link: "https://www.99freelas.com.br/project/site-para-autoescola-com-foco-em-geracao-de-leads-734752",
  },
]

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const updateEdges = () => {
      setAtStart(track.scrollLeft <= 4)
      setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 4)
    }

    updateEdges()
    track.addEventListener("scroll", updateEdges, { passive: true })
    window.addEventListener("resize", updateEdges)
    return () => {
      track.removeEventListener("scroll", updateEdges)
      window.removeEventListener("resize", updateEdges)
    }
  }, [])

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current
    const card = track?.firstElementChild as HTMLElement | null
    if (!track || !card) return
    const gap = parseFloat(getComputedStyle(track).columnGap || "16")
    const distance = (card.getBoundingClientRect().width + gap) * direction
    track.scrollBy({ left: distance, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }

  return (
    <section id="avaliacoes" className="py-24 sm:py-32">
      <div className="section-shell">
        <Reveal className="section-heading">
          <span className="section-index">Experiência de quem contratou</span>
          <h2 className="text-4xl sm:text-6xl">Avaliações de clientes</h2>
        </Reveal>

        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl leading-7 text-muted-foreground">
            Avaliações reais de clientes que contrataram via{" "}
            <a
              href="https://www.99freelas.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-2 hover:text-secondary"
            >
              99Freelas
            </a>
            .
          </p>
          <div className="flex items-center justify-between gap-6 sm:justify-end">
            <div className="flex items-center gap-3">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div>
                <p className="font-serif text-2xl leading-none text-primary">5.0</p>
                <p className="text-xs text-muted-foreground">{reviews.length} avaliações</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={atStart}
                aria-label="Avaliação anterior"
                className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={atEnd}
                aria-label="Próxima avaliação"
                className="grid size-11 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-30"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <RevealGroup
          ref={trackRef}
          role="region"
          aria-label="Avaliações de clientes; deslize para ver mais"
          tabIndex={0}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0"
        >
          {reviews.map((review) => (
            <RevealItem key={review.project} className="w-[300px] shrink-0 snap-start sm:w-[340px]">
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-panel group flex h-full flex-col p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <ArrowUpRight
                    className="text-muted-foreground transition-colors group-hover:text-primary"
                    size={16}
                  />
                </div>

                <p className="mb-5 line-clamp-6 flex-1 text-sm leading-6 text-foreground">
                  "{review.quote}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="mb-1 line-clamp-1 font-serif text-sm text-foreground">{review.project}</p>
                  <p className="text-xs text-muted-foreground">{review.period}</p>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
