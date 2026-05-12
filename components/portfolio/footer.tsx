"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight hover:text-primary transition-colors"
          >
            <span className="text-primary">{"<"}</span>
            Kayky Zioti
            <span className="text-primary">{" />"}</span>
          </Link>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/kaykyone"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/kaykyzioti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:contato@kaykyzioti.dev"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            Desenvolvido com{" "}
            <span className="text-primary">Next.js</span> & {" "}
            <span className="text-primary">TailwindCSS</span>
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Kayky Zioti. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
