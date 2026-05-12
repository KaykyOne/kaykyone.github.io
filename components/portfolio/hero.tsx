"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_var(--border)_1px,_transparent_1px),_linear-gradient(to_bottom,_var(--border)_1px,_transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-sm-sm bg-card border border-border mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-sm-sm bg-primary/70 opacity-75"></span>
            <span className="relative inline-flex rounded-sm-sm h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">Disponível para novos projetos</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance">
          <span className="text-muted-foreground">Olá, sou</span>{" "}
          <span className="text-foreground">Kayky Zioti</span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4">
          <span className="text-primary font-mono">{"{"}</span>
          {" "}Desenvolvedor Full-Stack{" "}
          <span className="text-primary font-mono">{"}"}</span>
        </p>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed text-pretty">
          Transformo ideias em soluções web escaláveis, rápidas e com excelente UX/UI. 
          Especialista em arquitetura moderna, performance e automação com IA.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#projetos"
            className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-sm-sm hover:opacity-90 transition-all hover:scale-105"
          >
            Ver Projetos
          </Link>
          <Link
            href="#contato"
            className="px-8 py-3 bg-card border border-border text-foreground font-medium rounded-sm-sm hover:bg-secondary transition-all hover:scale-105"
          >
            Entrar em Contato
          </Link>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <Link
            href="https://github.com/kaykyone"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-foreground hover:bg-card rounded-sm-sm transition-all"
            aria-label="GitHub"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/kaykyzioti"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-muted-foreground hover:text-foreground hover:bg-card rounded-sm-sm transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:contato@kaykyzioti.dev"
            className="p-3 text-muted-foreground hover:text-foreground hover:bg-card rounded-sm-sm transition-all"
            aria-label="Email"
          >
            <Mail size={24} />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </Link>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-sm-sm blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-primary/5 rounded-sm-sm blur-3xl" />
    </section>
  )
}
