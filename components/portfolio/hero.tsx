"use client"

import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { withBasePath } from "@/lib/base-path"

const kicker = ["IA", "Software", "Lead Generation"]

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-b-3xl bg-hero pb-16 pt-28 text-hero-foreground sm:pb-24 sm:pt-32 lg:flex lg:items-center lg:pb-0 min-h-screen">
      <div className="section-shell relative z-10 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="flex max-w-2xl flex-col items-start">
            <div className="mb-6 flex flex-wrap items-center gap-2 sm:mb-8">
              {kicker.map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85"
                >
                  {label}
                </span>
              ))}
            </div>

            <h1 className="mb-6 max-w-xl text-[2.6rem] leading-[1.05] tracking-[-0.03em] text-balance sm:mb-8 sm:text-6xl lg:text-[4rem]">
              Do problema estrutural ao{" "}
              <span className="text-hero-accent">software</span> funcional.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-8 text-white/75 sm:mb-12 sm:text-lg">
              <span className="font-medium text-white">Kayky Zioti</span> — software, automação e inteligência
              aplicada para empresas que querem transformar operação em resultado.
            </p>

            <div className="mb-8 flex w-full flex-col items-stretch gap-3 sm:mb-12 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="#projetos"
                className="brutal-button justify-between bg-white py-1 pl-5 pr-1 text-primary hover:bg-white/90"
              >
                Ver projetos
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
              <Link
                href="#contato"
                className="brutal-button border-white/25 bg-transparent px-6 py-3 text-white hover:bg-white/10"
              >
                Entrar em contato
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="https://github.com/kaykyone"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
                aria-label="GitHub"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://linkedin.com/in/kaykyzioti"
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="mailto:kaykyzioti@gmail.com"
                className="grid size-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white transition-colors duration-300 hover:bg-white/20"
                aria-label="E-mail"
              >
                <Mail size={18} />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[min(48vw,780px)] lg:block">
        <div className="absolute bottom-[12%] left-1/2 h-[70%] w-[70%] -translate-x-1/2 rounded-full bg-secondary/25 blur-[100px]" />
        <Image
          src={withBasePath("/kaykyzioti.png")}
          alt="Kayky Zioti, desenvolvedor full-stack especialista em software, Next.js e automação com IA"
          fill
          priority
          sizes="48vw"
          className="object-contain object-bottom"
        />

        <div className="absolute left-0 top-16 z-20 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-card">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
            <Sparkles size={16} />
          </span>
          <div className="leading-tight">
            <p className="font-serif text-lg text-primary">+856</p>
            <p className="text-[0.7rem] text-black">usuários em produção</p>
          </div>
        </div>
      </div>
    </section>
  )
}
