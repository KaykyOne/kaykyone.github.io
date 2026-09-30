'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { business, services, whatsappHref } from '@/lib/site'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import { ScrollProgress } from '@/components/ui/scroll-progress'

const homeNavigation = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Avaliações', href: '/#avaliacoes' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
]
const serviceNavigation = [
  { label: 'Todos os serviços', href: '/#servicos' },
  { label: 'O serviço', href: '#visao-geral' },
  { label: 'Exemplos', href: '#exemplos' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#orcamento' },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const service = services.find((item) => pathname === `/servicos/${item.slug}`)
  const navItems = service ? serviceNavigation : homeNavigation
  const contactHref = whatsappHref(service ? `Olá, Kayky! Gostaria de conversar sobre ${service.shortTitle.toLowerCase()}.` : undefined)
  const overHero = !isScrolled

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 64)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onOutsideClick = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsMobileMenuOpen(false)
    }
    const breakpoint = window.matchMedia('(min-width: 1024px)')
    const onResize = () => { if (breakpoint.matches) setIsMobileMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onOutsideClick)
    breakpoint.addEventListener('change', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onOutsideClick)
      breakpoint.removeEventListener('change', onResize)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <a href="#conteudo" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-foreground px-5 py-3 text-background focus:translate-y-0">Pular para o conteúdo</a>
      <header ref={headerRef} className={cn('fixed inset-x-0 top-0 z-50 transition-colors duration-200', overHero ? 'bg-hero/95 text-white' : 'border-b border-border bg-background/95 text-foreground', 'backdrop-blur-md')}>
        <ScrollProgress />
        <div className="section-shell py-3">
          <nav aria-label="Navegação principal" className="flex items-center justify-between gap-4">
            <Link href="/#conteudo" aria-label="Kayky Zioti — início" onClick={() => setIsMobileMenuOpen(false)} className="flex min-h-11 shrink-0 items-center gap-3 font-medium">
              <span className={cn('grid size-10 place-items-center rounded-full border text-sm', overHero ? 'border-white/25 text-white' : 'border-border text-primary')}>KZ</span>
              <span className="text-sm sm:text-base">{business.name}</span>
            </Link>
            <ul className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => <li key={item.href}><Link href={item.href} className={cn('inline-flex min-h-11 items-center text-sm transition-colors', overHero ? 'text-white/85 hover:text-white' : 'text-muted-foreground hover:text-primary')}>{item.label}</Link></li>)}
            </ul>
            <div className="flex items-center gap-2">
              <AnimatedThemeToggler aria-label="Alternar tema claro e escuro" variant="square" className={cn('hidden size-11 items-center justify-center rounded-full lg:flex [&_svg]:size-4', overHero ? 'bg-white/10 text-white' : 'bg-muted text-foreground')} />
              <Link href={contactHref} target="_blank" rel="noopener noreferrer" className="brutal-button hidden min-h-11 bg-[#25D366] text-[#0d0d0d] sm:inline-flex">Pedir orçamento <ArrowUpRight size={16} aria-hidden="true" /></Link>
              <button ref={toggleRef} type="button" aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isMobileMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMobileMenuOpen((open) => !open)} className={cn('grid size-11 place-items-center rounded-full lg:hidden', overHero ? 'bg-white/10 text-white' : 'bg-muted text-foreground')}>
                {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
              </button>
            </div>
          </nav>
          {isMobileMenuOpen && (
            <div ref={menuRef} id="mobile-navigation" className="absolute inset-x-4 top-full mt-2 max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-border bg-background p-4 text-foreground shadow-float lg:hidden">
              <ul className="space-y-1">{navItems.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="flex min-h-12 items-center rounded-xl px-4 text-base hover:bg-muted">{item.label}</Link></li>)}</ul>
              <div className="mt-4 border-t border-border pt-4">
                <Link href={contactHref} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="brutal-button min-h-12 w-full bg-[#25D366] text-[#0d0d0d]">Pedir orçamento pelo WhatsApp <ArrowUpRight size={17} aria-hidden="true" /></Link>
                <div className="mt-4 flex items-center justify-between px-2"><span className="text-sm text-muted-foreground">Tema do site</span><AnimatedThemeToggler aria-label="Alternar tema claro e escuro" variant="square" className="grid size-11 place-items-center rounded-full bg-muted text-foreground [&_svg]:size-5" /></div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
