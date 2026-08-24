"use client"

import { ArrowUpRight, Github, Linkedin, Mail, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Reveal } from "@/components/ui/reveal"

export function Contact() {
  return (
    <section id="contato" className="py-16 sm:py-24">
      <div className="section-shell">
        <Reveal className="rounded-3xl bg-hero px-6 py-16 text-center text-hero-foreground sm:px-12 sm:py-20">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="inline-flex items-center rounded-md bg-white/10 px-3 py-1 text-xs font-medium text-white">
              07.
            </span>
            <h2 className="text-3xl text-white sm:text-5xl">Entre em contato</h2>
          </div>

          <p className="mx-auto mb-12 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Estou sempre interessado em novos projetos e oportunidades. Se você tem uma ideia ou quer apenas dizer
            olá, minha caixa de entrada está sempre aberta!
          </p>

          <Link
            href="https://wa.me/5517997419297"
            target="_blank"
            rel="noopener noreferrer"
            className="brutal-button bg-[#25D366] px-8 py-4 text-background"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 32 32"
              className="h-8 w-8 sm:h-9 sm:w-9"
              fill="currentColor"
            >
              <path d="M16.04 3C9.02 3 3.32 8.7 3.32 15.72c0 2.25.59 4.43 1.7 6.36L3.2 28.78l6.86-1.8a12.64 12.64 0 0 0 5.98 1.52h.01c7.02 0 12.72-5.7 12.72-12.72C28.77 8.7 23.06 3 16.04 3Zm.01 23.35h-.01c-1.9 0-3.76-.51-5.39-1.47l-.39-.23-4.07 1.07 1.09-3.97-.26-.41a10.5 10.5 0 0 1-1.6-5.62c0-5.86 4.77-10.63 10.64-10.63 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.12 7.52c0 5.86-4.77 10.62-10.65 10.62Zm5.83-7.96c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.71.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.89-1.78-2.21-.19-.32-.02-.49.14-.65.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66s1.15 3.09 1.31 3.3c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.24 1.47.21 2.02.13.62-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z" />
            </svg>
            Vamos conversar
            <ArrowUpRight size={20} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
