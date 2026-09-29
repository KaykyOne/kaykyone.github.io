"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { ScrollProgress } from "@/components/ui/scroll-progress"


const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 64)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const overHero = !isScrolled

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        overHero ? "bg-transparent" : "border-b border-border bg-background/85 backdrop-blur-md"
      )}
    >
      <ScrollProgress />
      <div className="section-shell py-4">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className={cn(
              "font-serif text-base transition-colors duration-300",
              overHero ? "text-white/90 hover:text-white" : "text-foreground hover:text-primary"
            )}
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
                  className={cn(
                    "text-[0.8125rem] font-normal transition-colors duration-300",
                    overHero ? "text-white/75 hover:text-white" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <AnimatedThemeToggler
              variant="square"
              className={cn(
                "flex size-10 items-center justify-center rounded-full transition-colors duration-300 [&_svg]:h-4 [&_svg]:w-4",
                overHero
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              )}
            />
            <Link
              href="https://wa.me/5517997419297"
              target="_blank"
              rel="noopener noreferrer"
              className="brutal-button bg-[#25D366] px-4 py-2 text-background"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 32 32"
                className="h-5 w-5"
                fill="currentColor"
              >
                <path d="M16.04 3C9.02 3 3.32 8.7 3.32 15.72c0 2.25.59 4.43 1.7 6.36L3.2 28.78l6.86-1.8a12.64 12.64 0 0 0 5.98 1.52h.01c7.02 0 12.72-5.7 12.72-12.72C28.77 8.7 23.06 3 16.04 3Zm.01 23.35h-.01c-1.9 0-3.76-.51-5.39-1.47l-.39-.23-4.07 1.07 1.09-3.97-.26-.41a10.5 10.5 0 0 1-1.6-5.62c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.12 7.52c0 5.86-4.77 10.62-10.65 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
              </svg>
              Vamos conversar
            </Link>
          </div>

          <button
            className={cn(
              "rounded-full p-2 transition-colors duration-300 md:hidden",
              overHero ? "bg-white/10 text-white" : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="absolute inset-x-4 top-full mt-3 rounded-3xl border border-border bg-background p-2 md:hidden">
            <ul className="flex flex-col gap-1 p-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-4 py-3 text-[0.95rem] text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <AnimatedThemeToggler
                  variant="square"
                  className="mb-3 flex h-11 w-full items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground [&_svg]:h-4 [&_svg]:w-4"
                />
                <Link
                  href="https://wa.me/5517997419297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-button bg-[#25D366] px-4 py-4 text-background w-full"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 32 32"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M16.04 3C9.02 3 3.32 8.7 3.32 15.72c0 2.25.59 4.43 1.7 6.36L3.2 28.78l6.86-1.8a12.64 12.64 0 0 0 5.98 1.52h.01c7.02 0 12.72-5.7 12.72-12.72C28.77 8.7 23.06 3 16.04 3Zm.01 23.35h-.01c-1.9 0-3.76-.51-5.39-1.47l-.39-.23-4.07 1.07 1.09-3.97-.26-.41a10.5 10.5 0 0 1-1.6-5.62c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.12 7.52c0 5.86-4.77 10.62-10.65 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
                  </svg>
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
