"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-150",
        isScrolled ? "border-b border-border bg-background" : "bg-transparent"
      )}
    >
      <div className="section-shell py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm uppercase tracking-[0.32em] text-foreground transition-colors hover:text-primary"
          >
            <span className="text-primary">{"["}</span>
            KZ
            <span className="text-primary">{"]"}</span>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contato"
              className="brutal-button border-primary bg-primary px-4 py-2 text-[0.72rem] text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
            >
              Vamos conversar
            </Link>
          </div>

          <button
            className="md:hidden border border-border p-2 text-foreground transition-colors hover:border-primary hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 border-b border-border bg-background md:hidden">
            <ul className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="#contato"
                  className="block border border-primary bg-primary px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Vamos conversar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
