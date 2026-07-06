"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { withBasePath } from "@/lib/base-path"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent" />

      <div className="section-shell relative z-10">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(560px,0.9fr)] lg:gap-10">
          <div className="flex max-w-5xl flex-col items-start z-30 justify-start">
            <div className="mb-10 inline-flex items-center gap-5">
              <div className="flex justify-center items-center gap-3">
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  IA
                </span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <span className="size-1 flex bg-primary" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Software
                </span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <span className="size-1 flex bg-primary" />
                <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Lead Generation
                </span>
              </div>
            </div>

            <h1 className="mb-8 max-w-4xl font-(--font-display) text-6xl font-semibold uppercase leading-[0.86] tracking-[0.02em] text-balance text-foreground sm:text-6xl md:text-[5.75rem]">
              <span className="mb-5 block max-w-2xl font-mono text-[1.4rem] font-normal leading-6 tracking-[0.28em] text-primary">
                Kayky Zioti - Desenvolvedor Full-Stack
              </span>
              Software Funcional.
            </h1>

            <p className="mb-12 max-w-2xl border-l border-border pl-5 text-base leading-8 text-muted-foreground sm:text-lg">
              Software, automação e inteligência aplicada para empresas que querem transformar operação em resultado.
            </p>

            <div className="mb-12 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start">
              <Link
                href="#projetos"
                className="brutal-button border-primary bg-primary px-8 text-primary-foreground hover:border-accent hover:bg-accent hover:text-primary-foreground"
              >
                Ver projetos
              </Link>
              <Link
                href="#contato"
                className="brutal-button px-8 text-foreground hover:border-primary hover:text-primary-foreground"
              >
                Entrar em contato
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/kaykyone"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button h-12 w-12 p-0 text-muted-foreground hover:border-primary hover:text-primary-foreground"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com/in/kaykyzioti"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button h-12 w-12 p-0 text-muted-foreground hover:border-primary hover:text-primary-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="mailto:contato@kaykyzioti.dev"
                className="brutal-button h-12 w-12 p-0 text-muted-foreground hover:border-primary hover:text-primary-foreground"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-end lg:self-stretch">
            <div className="relative flex h-[80vh] w-[min(48vw,780px)] max-w-none translate-x-[2vw] items-end justify-center overflow-visible">
              <div className="pointer-events-none absolute bottom-[18%] left-1/2 z-0 h-[72vh] w-[72vh] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
              <img
                src={withBasePath("/kaykyzioti.png")}
                alt={"Kayky Zioti, desenvolvedor full-stack especialista em software, Next.js e automa\u00e7\u00e3o com IA"}
                className="relative z-10 h-full w-auto max-w-none origin-bottom scale-[1.10] object-contain object-bottom"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-background via-background/88 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
