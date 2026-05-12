"use client"

import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold">Entre em Contato</h2>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Estou sempre interessado em novos projetos e oportunidades. 
          Se você tem uma ideia ou quer apenas dizer olá, minha caixa de entrada está sempre aberta!
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <Link
            href="mailto:contato@kaykyzioti.dev"
            className="group p-6 bg-card rounded-sm-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-sm-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Mail size={24} />
            </div>
            <h3 className="font-medium mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">contato@kaykyzioti.dev</p>
          </Link>

          <Link
            href="https://linkedin.com/in/kaykyzioti"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-card rounded-sm-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-sm-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Linkedin size={24} />
            </div>
            <h3 className="font-medium mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">/in/kaykyzioti</p>
          </Link>

          <Link
            href="https://github.com/kaykyone"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-card rounded-sm-sm border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-sm-sm bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Github size={24} />
            </div>
            <h3 className="font-medium mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground">/kaykyone</p>
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="mailto:contato@kaykyzioti.dev"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-sm-sm hover:opacity-90 transition-all hover:scale-105 text-lg"
        >
          <MessageSquare size={20} />
          Vamos Conversar
          <ArrowUpRight size={20} />
        </Link>
      </div>
    </section>
  )
}
