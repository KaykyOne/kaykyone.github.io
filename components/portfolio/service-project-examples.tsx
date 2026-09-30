import { ArrowUpRight } from 'lucide-react'
import { serviceProjects } from '@/lib/service-projects'

export function ServiceProjectExamples({ slug }: { slug: string }) {
  const projects = serviceProjects[slug] || []
  if (!projects.length) return null

  return (
    <section id="exemplos" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-primary">Experiência em projetos reais</p>
          <h2 className="mb-5 text-3xl sm:text-5xl">Exemplos de trabalhos realizados</h2>
          <p className="text-lg leading-8 text-muted-foreground">Uma seleção de projetos contratados pelo 99Freelas. Conheça o tipo de solução e os recursos envolvidos em cada trabalho.</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.url} className="brutal-panel flex flex-col p-6 sm:p-8">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-primary">{project.category}</p>
              <h3 className="mb-4 text-2xl leading-tight sm:text-3xl">{project.title}</h3>
              <p className="mb-7 flex-1 leading-7 text-muted-foreground">{project.description}</p>
              <p className="mb-3 text-xs font-medium text-muted-foreground">Tecnologias e recursos</p>
              <ul aria-label={`Tecnologias e recursos: ${project.title}`} className="mb-8 flex flex-wrap gap-2">
                {project.technologies.map((technology) => <li key={technology} className="brutal-tag text-xs">{technology}</li>)}
              </ul>
              {project.suggestedStack && (
                <details className="mb-6 border-t border-border pt-4">
                  <summary className="min-h-11 cursor-pointer text-sm text-muted-foreground">Tecnologias para projetos semelhantes</summary>
                  <ul aria-label={`Stack sugerida: ${project.title}`} className="mt-3 flex flex-wrap gap-2">
                    {project.suggestedStack.map((technology) => <li key={technology} className="brutal-tag bg-primary/10 text-xs text-primary">{technology}</li>)}
                  </ul>
                </details>
              )}
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                Ver projeto no 99Freelas <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
