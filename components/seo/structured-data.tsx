import { business } from '@/lib/site'

const organizationId = `${business.url}/#organization`
const personId = `${business.url}/#person`

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: business.name,
      url: business.url,
      logo: `${business.url}/favicon.png`,
      description: 'Empresa de desenvolvimento de software, sistemas web, sites, automação com inteligência artificial, design e mídia digital, com contrato e emissão de nota fiscal.',
      taxID: business.cnpj,
      address: { '@type': 'PostalAddress', addressCountry: 'BR' },
      email: business.email,
      telephone: business.telephone,
      founder: { '@id': personId },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: business.telephone,
        email: business.email,
        url: business.whatsapp,
        availableLanguage: 'pt-BR',
      },
    },
    {
      '@type': 'Person',
      '@id': personId,
      name: business.name,
      alternateName: 'Kayky dev',
      jobTitle: 'Desenvolvedor full-stack e fundador',
      url: business.url,
      image: `${business.url}/kaykyzioti.png`,
      worksFor: { '@id': organizationId },
      knowsAbout: ['Desenvolvimento de software', 'Next.js', 'React', 'Laravel', 'Node.js', 'TypeScript', 'Automação com IA', 'Design', 'Mídia digital'],
      sameAs: ['https://github.com/kaykyone', 'https://linkedin.com/in/kaykyzioti'],
    },
    {
      '@type': 'WebSite',
      '@id': `${business.url}/#website`,
      name: business.name,
      alternateName: 'Kayky dev',
      url: business.url,
      inLanguage: 'pt-BR',
      publisher: { '@id': organizationId },
    },
  ],
}

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}
