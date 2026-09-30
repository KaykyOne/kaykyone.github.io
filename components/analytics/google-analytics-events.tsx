'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void
}

function sendEvent(name: string, parameters: Record<string, string | number>) {
  ;(window as AnalyticsWindow).gtag?.('event', name, parameters)
}

export function GoogleAnalyticsEvents() {
  const pathname = usePathname()

  useEffect(() => {
    const reached = new Set<number>()
    let frame = 0

    const measureScroll = () => {
      frame = 0
      if (window.scrollY <= 0) return

      const pageHeight = document.documentElement.scrollHeight
      const depth = Math.min(100, Math.round(((window.scrollY + window.innerHeight) / pageHeight) * 100))

      // Use a separate event name from GA4's automatic 90% "scroll" event.
      for (const threshold of [25, 50, 75, 90]) {
        if (depth >= threshold && !reached.has(threshold)) {
          reached.add(threshold)
          sendEvent('scroll_depth', { percent_scrolled: threshold })
        }
      }
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(measureScroll)
    }

    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return

      const element = event.target.closest<HTMLAnchorElement | HTMLButtonElement>('a, button')
      if (!element) return

      const section = element.closest<HTMLElement>('section[id]')?.id || 'navigation'
      const label = (element.getAttribute('aria-label') || element.textContent || '')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 100)

      if (element instanceof HTMLAnchorElement) {
        const href = element.getAttribute('href')
        if (!href) return

        if (href.startsWith('mailto:') || href.startsWith('tel:') || element.hostname === 'wa.me') {
          sendEvent('contact_click', {
            contact_method: href.startsWith('mailto:') ? 'email' : href.startsWith('tel:') ? 'phone' : 'whatsapp',
            section,
          })
          return
        }

        // Outbound links and downloads are covered by GA4 Enhanced Measurement.
        if (element.origin !== window.location.origin || element.hasAttribute('download')) return

        sendEvent('site_interaction', {
          interaction_type: 'internal_link',
          interaction_label: label || 'link',
          section,
          destination: element.pathname + element.hash,
        })
        return
      }

      sendEvent('site_interaction', {
        interaction_type: 'button',
        interaction_label: label || 'button',
        section,
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onClick)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [pathname])

  return null
}
