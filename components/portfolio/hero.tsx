"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { withBasePath } from "@/lib/base-path"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden border-b-2 border-foreground/20 pt-0">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[100svh] lg:hidden">
        <img
          src={withBasePath("/kaykyzioti.png")}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-[58%_top] grayscale"
        />
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/75 to-transparent" />
      </div>

      <div className="section-shell relative z-10 w-full">
        <div className="grid min-h-[100svh] items-end gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(560px,0.9fr)] lg:gap-10">
          <div className="z-30 flex max-w-5xl flex-col items-start justify-end pb-7 pt-[46svh] sm:pb-10 sm:pt-[48svh] lg:min-h-[90vh] lg:pb-14 lg:pt-0">
            <div className="mb-6 flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 sm:mb-10 sm:gap-5">
              <div className="flex justify-center items-center gap-3">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.7rem] sm:tracking-[0.22em]">
                  IA
                </span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <span className="size-1 flex bg-primary" />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.7rem] sm:tracking-[0.22em]">
                  Software
                </span>
              </div>
              <div className="flex justify-center items-center gap-3">
                <span className="size-1 flex bg-primary" />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.7rem] sm:tracking-[0.22em]">
                  Lead Generation
                </span>
              </div>
            </div>

            <h1 className="mb-6 max-w-4xl font-(--font-display) text-[2.85rem] font-semibold uppercase leading-[0.9] tracking-[0.02em] text-balance text-foreground sm:mb-8 sm:text-6xl md:text-[5.75rem]">
              <span className="mb-4 block max-w-2xl font-mono text-[0.78rem] font-normal leading-5 tracking-[0.14em] text-primary sm:mb-5 sm:text-[1.4rem] sm:leading-6 sm:tracking-[0.28em]">
                Kayky Zioti - <strong>Do Problema estrutural ao</strong>
              </span>
              Software Funcional.
            </h1>

            <p className="mb-8 max-w-2xl border-l border-border pl-4 text-sm leading-6 text-muted-foreground sm:mb-12 sm:pl-5 sm:text-lg sm:leading-8">
              Software, automação e inteligência aplicada para empresas que querem transformar operação em resultado.
            </p>

            <div className="mb-8 flex w-full flex-col items-stretch gap-3 sm:mb-12 sm:w-auto sm:flex-row sm:items-start">
              <Link
                href="#projetos"
                className="brutal-button min-h-12 w-full whitespace-normal border-primary bg-primary px-4 text-center leading-5 text-primary-foreground hover:border-accent hover:bg-accent hover:text-primary-foreground sm:w-auto sm:px-8"
              >
                Ver projetos
              </Link>
              <Link
                href="#contato"
                className="brutal-button min-h-12 w-full whitespace-normal border-2 border-foreground bg-transparent px-4 text-center leading-5 text-foreground hover:border-accent hover:bg-accent hover:text-accent-foreground sm:w-auto sm:px-8"
              >
                Entrar em contato
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/kaykyone"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button border-primary bg-primary h-12 w-12 p-0 text-primary-foreground hover:border-accent hover:bg-black"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com/in/kaykyzioti"
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button border-primary bg-primary h-12 w-12 p-0 text-primary-foreground hover:border-accent hover:bg-black"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="mailto:contato@kaykyzioti.dev"
                className="brutal-button border-primary bg-primary h-12 w-12 p-0 text-primary-foreground hover:border-accent hover:bg-black"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-end lg:self-stretch">
            <div className="relative flex h-[90vh] w-[min(48vw,780px)] max-w-none translate-x-[2vw] items-end justify-center overflow-visible ">
              <div className="pointer-events-none absolute bottom-[18%] left-1/2 z-0 h-[72vh] w-[72vh] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
              <img
                src={withBasePath("/kaykyzioti.png")}
                alt={"Kayky Zioti, desenvolvedor full-stack especialista em software, Next.js e automa\u00e7\u00e3o com IA"}
                className="relative z-10 h-full w-auto max-w-none origin-bottom scale-[1.10] object-contain object-bottom"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
