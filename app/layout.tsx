import type { Metadata, Viewport } from 'next'
import { Inter, Inter_Tight, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'
import { withBasePath } from '@/lib/base-path'
import { StructuredData } from '@/components/seo/structured-data'
import { cn } from '@/lib/utils'
import { GoogleAnalyticsEvents } from '@/components/analytics/google-analytics-events'
import { business } from '@/lib/site'

const siteUrl = business.url

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-body',
})

const interTight = Inter_Tight({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-display',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-code',
})

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`

export const viewport: Viewport = {
  themeColor: '#440C38',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Empresa de desenvolvimento de software | Kayky Zioti',
    template: '%s | Kayky Zioti',
  },
  description:
    'Kayky Zioti: empresa de desenvolvimento de software, sistemas sob medida, sites e automação com IA. Contratação por CNPJ, com contrato e nota fiscal.',
  authors: [{ name: 'Kayky Zioti', url: siteUrl }],
  creator: 'Kayky Zioti',
  robots: { index: true, follow: true },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: business.name,
    title: 'Empresa de desenvolvimento de software | Kayky Zioti',
    description:
      'Sistemas sob medida, sites profissionais e automação com IA para empresas. Atendimento direto de Kayky Zioti, com contrato, nota fiscal e CNPJ.',
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
    icon: [{ url: withBasePath('/favicon.png'), type: 'image/png', sizes: '150x150' }],
    shortcut: withBasePath('/favicon.ico'),
    apple: withBasePath('/apple-icon.png'),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Empresa de desenvolvimento de software | Kayky Zioti',
    description: 'Sistemas sob medida, sites e automação com IA. Contratação por CNPJ, com contrato e nota fiscal.',
    images: ['/kaykyzioti.png'],
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
      className={cn(inter.variable, interTight.variable, geistMono.variable, 'bg-background scroll-smooth')}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <StructuredData />
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-75H4MJ88MJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-75H4MJ88MJ');`}
        </Script>
        <GoogleAnalyticsEvents />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
