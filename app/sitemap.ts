import type { MetadataRoute } from 'next'
import { business, services } from '@/lib/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: business.url },
    ...services.map(({ slug }) => ({ url: `${business.url}/servicos/${slug}` })),
    { url: `${business.url}/projetos/novuscfc` },
    { url: `${business.url}/projetos/chatzinho` },
  ]
}
