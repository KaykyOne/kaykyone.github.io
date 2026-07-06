"use client"

import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-28 sm:py-36">
      <div className="section-shell text-center">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="section-index">06.</span>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.02em] sm:text-5xl">Entre em contato</h2>
        </div>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
          Estou sempre interessado em novos projetos e oportunidades. Se você tem uma ideia ou quer apenas dizer olá,
          minha caixa de entrada está sempre aberta!
        </p>

        <Link
          href="https://wa.me/5517997419297"
          target="_blank"
          rel="noopener noreferrer"
          className="brutal-button bg-primary px-8 py-4 text-primary-foreground hover:bg-accent hover:text-accent-foreground"
        >
          <MessageSquare size={20} />
          Vamos conversar
          <ArrowUpRight size={20} />
        </Link>

        <details className="disclosure mx-auto mt-12 max-w-5xl text-left">
          <summary>
            <span>Entre em contato</span>
          </summary>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link
              href="mailto:kaykyzioti@gmail.com"
              className="group bg-card p-6 transition-[background-color] duration-300 hover:bg-muted"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-background text-primary transition-colors duration-300 group-hover:text-accent">
                <Mail size={24} />
              </div>
              <h3 className="mb-1 font-(--font-display) text-lg font-semibold uppercase tracking-[0.02em]">E-mail</h3>
              <p className="text-sm text-muted-foreground">kaykyzioti@gmail.com</p>
            </Link>

            <Link
              href="https://linkedin.com/in/kaykyzioti"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-6 transition-[background-color] duration-300 hover:bg-muted"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-background text-primary transition-colors duration-300 group-hover:text-accent">
                <Linkedin size={24} />
              </div>
              <h3 className="mb-1 font-(--font-display) text-lg font-semibold uppercase tracking-[0.02em]">LinkedIn</h3>
              <p className="text-sm text-muted-foreground">/in/kaykyzioti</p>
            </Link>

            <Link
              href="https://github.com/kaykyone"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card p-6 transition-[background-color] duration-300 hover:bg-muted"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-background text-primary transition-colors duration-300 group-hover:text-accent">
                <Github size={24} />
              </div>
              <h3 className="mb-1 font-(--font-display) text-lg font-semibold uppercase tracking-[0.02em]">GitHub</h3>
              <p className="text-sm text-muted-foreground">/kaykyone</p>
            </Link>
          </div>
        </details>
      </div>
    </section>
  )
}
