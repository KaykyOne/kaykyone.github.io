import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2, CircleDotDashed, Layers3, Workflow } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

type ProjectSlug = "novuscfc" | "chatzinho"

const projects = {
  novuscfc: {
    eyebrow: "Estudo de projeto · 01",
    name: "NovusCFC",
    category: "Sistema de gestão para autoescolas",
    image: "/novuscfc.png",
    introduction:
      "Uma operação que já conhecia a rotina do setor por dentro ganhou uma camada digital feita para acompanhar o ritmo do balcão, da secretaria e da gestão.",
    context:
      "Em uma rotina cheia de documentos, prazos, mensagens e informações espalhadas, tarefas simples passavam por muitas mãos antes de chegar a uma resposta. O ponto de partida foi organizar o caminho da informação — sem tornar a operação mais difícil do que ela já era.",
    challenge:
      "Criar uma experiência clara para pessoas com papéis diferentes, preservando agilidade no atendimento e dando à gestão uma visão mais confiável do dia a dia.",
    solution:
      "O conceito da plataforma reúne cadastros, acompanhamento de etapas e avisos operacionais em uma interface direta. Em vez de mais uma planilha, a equipe passa a trabalhar a partir de uma fonte comum de informação.",
    outcome: "Menos troca de contexto, mais clareza para decidir o próximo passo e uma operação preparada para crescer sem multiplicar controles paralelos.",
    stack: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "React"],
    principles: ["Fluxos pensados para a rotina real", "Informação centralizada", "Interface simples antes de interface cheia"],
  },
  chatzinho: {
    eyebrow: "Estudo de projeto · 02",
    name: "Chatzinho",
    category: "Atendimento inteligente via WhatsApp",
    image: "/chatzinho.png",
    introduction:
      "Um primeiro atendimento que não deixa uma boa oportunidade esperando — e que entrega ao time o contexto certo para continuar a conversa.",
    context:
      "Para muitos negócios, o WhatsApp é a porta de entrada. O problema surge quando cada resposta depende de alguém disponível, a conversa se perde entre mensagens e os contatos com maior intenção não recebem prioridade.",
    challenge:
      "Desenhar uma automação que seja útil sem parecer uma barreira: responder o básico com clareza, entender o interesse da pessoa e saber o momento de passar a conversa adiante.",
    solution:
      "O conceito combina respostas guiadas, uma base de informações do negócio e classificação de intenção. Assim, perguntas recorrentes recebem retorno imediato e cada novo contato chega ao CRM com contexto para a equipe comercial.",
    outcome: "Atendimento inicial mais consistente, menos esforço repetitivo e uma transição mais organizada entre automação e conversa humana.",
    stack: ["Next.js", "TypeScript", "OpenAI API", "Supabase", "WhatsApp"],
    principles: ["Tom de voz configurável", "Automação com saída humana", "Contexto antes da conversão"],
  },
} satisfies Record<ProjectSlug, {
  eyebrow: string
  name: string
  category: string
  image: string
  introduction: string
  context: string
  challenge: string
  solution: string
  outcome: string
  stack: string[]
  principles: string[]
}>

export function ProjectCaseStudy({ slug }: { slug: ProjectSlug }) {
  const project = projects[slug]

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative overflow-hidden bg-hero pb-16 pt-28 text-hero-foreground sm:pb-24 sm:pt-36">
        <div className="absolute -right-32 top-20 size-[34rem] rounded-full bg-secondary/20 blur-[130px]" />
        <div className="section-shell relative z-10">
          <Link href="/#projetos" className="mb-12 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white">
            <ArrowLeft size={16} />
            Voltar aos projetos
          </Link>
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
            <div className="max-w-3xl">
              <p className="mb-5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-secondary">{project.eyebrow}</p>
              <h1 className="mb-6 text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">{project.name}</h1>
              <p className="mb-8 max-w-xl text-xl leading-8 text-white/75 sm:text-2xl">{project.category}</p>
              <p className="max-w-2xl leading-8 text-white/70">{project.introduction}</p>
            </div>
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-3xl bg-white/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-3 shadow-2xl">
                <img src={withBasePath(project.image)} alt={`Interface do projeto ${project.name}`} className="aspect-[4/3] w-full rounded-xl object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-4 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-primary">O ponto de partida</p>
            <h2 className="text-3xl sm:text-4xl">Um problema que merecia um sistema à altura.</h2>
          </aside>
          <div className="space-y-9 text-lg leading-8 text-muted-foreground">
            <p>{project.context}</p>
            <div className="border-l-2 border-secondary pl-6 text-foreground sm:text-xl">{project.challenge}</div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-12 flex max-w-2xl flex-col gap-5">
            <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-primary">A resposta</p>
            <h2 className="text-4xl sm:text-6xl">Menos fricção. Mais contexto.</h2>
            <p className="text-lg leading-8 text-muted-foreground">{project.solution}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {project.principles.map((principle, index) => (
              <article key={principle} className="brutal-panel p-7">
                <span className="mb-9 grid size-11 place-items-center rounded-full bg-primary/10 text-primary">
                  {index === 0 ? <Workflow size={20} /> : index === 1 ? <Layers3 size={20} /> : <CircleDotDashed size={20} />}
                </span>
                <p className="font-serif text-xl">{principle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-12">
            <p className="mb-7 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white/65">Direção do projeto</p>
            <p className="font-serif text-3xl leading-tight sm:text-5xl">“{project.outcome}”</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-primary">Tecnologias</p>
            <div className="mb-10 flex flex-wrap gap-2">
              {project.stack.map((item) => <span key={item} className="brutal-tag text-primary">{item}</span>)}
            </div>
            <Link href="/#contato" className="brutal-button btn-primary w-fit">
              Conversar sobre um projeto
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12">
        <div className="section-shell flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">Quer ver o próximo projeto?</p>
          <Link href={slug === "novuscfc" ? "/projetos/chatzinho" : "/projetos/novuscfc"} className="inline-flex items-center gap-2 font-medium text-primary hover:text-secondary">
            {slug === "novuscfc" ? "Conhecer Chatzinho" : "Conhecer NovusCFC"}
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}
