"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { business } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-surface py-12">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link
            href="/"
            className="font-serif text-base text-foreground transition-colors duration-300 hover:text-primary"
          >
            <span className="text-primary">{"["}</span>
            Kayky Zioti
            <span className="text-primary">{"]"}</span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="https://github.com/kaykyone"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://linkedin.com/in/kaykyzioti"
              target="_blank"
              rel="noopener noreferrer"
              className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href="mailto:kaykyzioti@gmail.com"
              className="grid size-10 place-items-center rounded-full bg-muted text-muted-foreground transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              aria-label="Email"
            >
              <Mail size={18} />
            </Link>
          </div>

          <p className="text-xs text-muted-foreground">
            Desenvolvido com <span className="text-primary">Next.js</span> e <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="mb-3 text-sm text-muted-foreground">
            {business.name} · Desenvolvimento de software · CNPJ {business.cnpj}
          </p>
          <p className="mb-4 text-xs text-muted-foreground">Contratação como pessoa jurídica, com contrato e emissão de nota fiscal.</p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kayky Zioti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
