import type { Metadata, Viewport } from 'next'
import { Inter, Hedvig_Letters_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { withBasePath } from '@/lib/base-path'
import { StructuredData } from '@/components/seo/structured-data'
import { cn } from '@/lib/utils'

const siteUrl = 'https://kayky.dev.br'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-body',
})

const hedvigLettersSerif = Hedvig_Letters_Serif({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-display',
})

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`

export const viewport: Viewport = {
  themeColor: '#440C38',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kayky Zioti | Kayky dev - Desenvolvedor Full-Stack Next.js e IA',
    template: '%s | Kayky Zioti',
  },
  description:
    'Kayky Zioti, Kayky dev, \u00e9 desenvolvedor full-stack especializado em Next.js, React, Node.js, TypeScript e automa\u00e7\u00e3o com IA para criar sistemas web r\u00e1pidos, escal\u00e1veis e orientados a resultado.',
  keywords: [
    'Kayky Zioti',
    'Kayky dev',
    'Kayky desenvolvedor',
    'desenvolvedor full-stack',
    'desenvolvedor Next.js',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'automa\u00e7\u00e3o com IA',
  ],
  authors: [{ name: 'Kayky Zioti', url: siteUrl }],
  creator: 'Kayky Zioti',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'profile',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Kayky Zioti | Kayky dev',
    title: 'Kayky Zioti | Desenvolvedor Full-Stack Next.js e Automa\u00e7\u00e3o com IA',
    description:
      'Portf\u00f3lio de Kayky Zioti, Kayky dev, desenvolvedor full-stack especializado em Next.js, React, Node.js, TypeScript e automa\u00e7\u00e3o com IA.',
    images: [
      {
        url: '/kaykyzioti.png',
        width: 1200,
        height: 1200,
        alt: 'Kayky Zioti, desenvolvedor full-stack especialista em Next.js e automa\u00e7\u00e3o com IA',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: withBasePath('/favicon.png'),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: withBasePath('/favicon.png'),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: withBasePath('/favicon.png'),
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
    <html
      lang="pt-BR"
      className={cn(inter.variable, hedvigLettersSerif.variable, 'bg-background scroll-smooth')}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
