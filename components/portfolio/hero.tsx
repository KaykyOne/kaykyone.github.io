"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { withBasePath } from "@/lib/base-path"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden border-b border-border pt-20">
      <div className="absolute inset-x-0 top-24 hidden h-px bg-border lg:block" />
      <div className="absolute bottom-16 left-6 right-6 h-px bg-border/60" />

      <div className="section-shell relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-2">
          <div className="max-w-5xl flex flex-col items-start justify-start">
            <div className="mb-8 inline-flex items-center gap-3 border border-border bg-card px-4 py-2 animate-fade-in">
              <span className="h-2 w-2 bg-primary" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                Disponível para novos projetos
              </span>
            </div>

            <p className="mb-4 font-mono text-[0.72rem] uppercase tracking-[0.32em] text-primary">
              Desenvolvedor Full-Stack / Sistemas, Produto, Execução
            </p>

            <h1 className="mb-6 max-w-4xl font-(--font-display) text-5xl font-medium uppercase leading-[0.92] tracking-[0.03em] text-balance text-foreground sm:text-7xl md:text-[5.8rem]">
              Kayky Zioti
            </h1>

            <p className="mb-10 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Transformo operações, serviços e ideias em sistemas web escaláveis, rápidos e claros.
              Arquitetura moderna, performance e automação com IA, sem excesso visual e sem interfaces genéricas.
            </p>

            <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row">
              <Link
                href="#projetos"
                className="brutal-button border-primary bg-primary px-8 text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              >
                Ver projetos
              </Link>
              <Link
                href="#contato"
                className="brutal-button px-8 text-foreground hover:border-primary hover:text-primary"
              >
                Entrar em contato
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/kaykyone"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button h-12 w-12 p-0 text-muted-foreground hover:border-primary hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com/in/kaykyzioti"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button h-12 w-12 p-0 text-muted-foreground hover:border-primary hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="mailto:contato@kaykyzioti.dev"
                className="brutal-button h-12 w-12 p-0 text-muted-foreground hover:border-primary hover:text-primary"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-between lg:self-stretch">
            <div className="relative w-full aspect-square">
              {/* Aura */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3/4 h-3/4 rounded-full bg-primary/20 blur-3xl" />
              </div>

              <img
                src={withBasePath("/kaykyzioti.png")}
                alt="Kayky Zioti"
                className="relative z-10 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background to-transparent pointer-events-none z-20 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
