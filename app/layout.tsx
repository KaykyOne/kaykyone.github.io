import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { withBasePath } from '@/lib/base-path'

export const metadata: Metadata = {
  title: 'Kayky Zioti | Desenvolvedor Full-Stack e Designer',
  description: 'Desenvolvedor full-stack com foco em criar soluções web escaláveis, rápidas e com excelente UX/UI. Especialista em arquitetura moderna, otimização de performance e automação com IA.',
  keywords: ['desenvolvedor', 'full-stack', 'react', 'next.js', 'typescript', 'design', 'ux/ui'],
  authors: [{ name: 'Kayky Zioti' }],
  creator: 'Kayky Zioti',
  icons: {
    icon: [
      {
        url: withBasePath('/icon-light-32x32.png'),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: withBasePath('/icon-dark-32x32.png'),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: withBasePath('/icon.svg'),
        type: 'image/svg+xml',
      },
    ],
    apple: withBasePath('/apple-icon.png'),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
