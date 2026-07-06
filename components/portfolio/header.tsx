"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { ScrollProgress } from "@/components/ui/scroll-progress"


const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Trajetória", href: "#trajetoria" },
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
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md"
          : "bg-background/90 backdrop-blur-sm"
      )}
    >
      <ScrollProgress />
      <div className="section-shell py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-sm uppercase tracking-[0.32em] text-foreground transition-colors duration-300 hover:text-primary"
          >
            <span className="text-primary">{"["}</span>
            KZ
            <span className="text-primary">{"]"}</span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <AnimatedThemeToggler
              variant="square"
              className="flex h-10 w-10 items-center justify-center bg-muted text-muted-foreground transition-colors duration-300 hover:bg-foreground hover:text-background [&_svg]:h-4 [&_svg]:w-4"
            />
            <Link
              href="#contato"
              className="brutal-button bg-muted px-4 py-2 text-[0.68rem] text-foreground hover:bg-foreground hover:text-background"
            >
              Vamos conversar
            </Link>
          </div>

          <button
            className="bg-muted p-2 text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-background/98 md:hidden">
            <ul className="flex flex-col gap-1 p-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-4 font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <AnimatedThemeToggler
                  variant="square"
                  className="mb-4 flex h-11 w-full items-center justify-center bg-muted text-muted-foreground transition-colors hover:bg-foreground hover:text-background [&_svg]:h-4 [&_svg]:w-4"
                />
                <Link
                  href="#contato"
                  className="block bg-foreground px-4 py-3 text-center font-mono text-xs uppercase tracking-[0.2em] text-background"
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
