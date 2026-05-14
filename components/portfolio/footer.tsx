"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="section-shell">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link
            href="/"
            className="font-mono text-sm uppercase tracking-[0.28em] text-foreground transition-colors hover:text-primary"
          >
            <span className="text-primary">{"["}</span>
            Kayky Zioti
            <span className="text-primary">{"]"}</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/kaykyone"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/kaykyzioti"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:kaykyzioti@gmail.com"
              className="border border-border p-2 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>

          <p className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted-foreground">
            Desenvolvido com <span className="text-primary">Next.js</span> e <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            © {new Date().getFullYear()} Kayky Zioti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
