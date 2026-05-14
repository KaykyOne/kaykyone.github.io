"use client"

import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="section-index">05.</span>
          <h2 className="text-2xl font-bold uppercase tracking-[-0.04em] sm:text-4xl">Entre em contato</h2>
        </div>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          Estou sempre interessado em novos projetos e oportunidades. Se você tem uma ideia ou quer apenas dizer olá,
          minha caixa de entrada está sempre aberta!
        </p>

        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <Link
            href="mailto:kaykyzioti@gmail.com"
            className="brutal-panel group p-6 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-primary"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-border bg-background text-primary transition-colors group-hover:border-primary">
              <Mail size={24} />
            </div>
            <h3 className="mb-1 font-(--font-display) text-lg font-medium uppercase tracking-[-0.03em]">E-mail</h3>
            <p className="text-sm text-muted-foreground">kaykyzioti@gmail.com</p>
          </Link>

          <Link
            href="https://linkedin.com/in/kaykyzioti"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-panel group p-6 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-primary"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-border bg-background text-primary transition-colors group-hover:border-primary">
              <Linkedin size={24} />
            </div>
            <h3 className="mb-1 font-(--font-display) text-lg font-medium uppercase tracking-[-0.03em]">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">/in/kaykyzioti</p>
          </Link>

          <Link
            href="https://github.com/kaykyone"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-panel group p-6 transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-primary"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center border border-border bg-background text-primary transition-colors group-hover:border-primary">
              <Github size={24} />
            </div>
            <h3 className="mb-1 font-(--font-display) text-lg font-medium uppercase tracking-[-0.03em]">GitHub</h3>
            <p className="text-sm text-muted-foreground">/kaykyone</p>
          </Link>
        </div>

        <Link
          href="https://wa.me/5517997419297"
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-button border-primary bg-primary px-8 py-4 text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
        >
          <MessageSquare size={20} />
          Vamos conversar
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  )
}
