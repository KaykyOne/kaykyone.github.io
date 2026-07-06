import Script from "next/script"

const siteUrl = "https://kayky.dev.br"

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile`,
  url: siteUrl,
  name: "Kayky Zioti - Desenvolvedor Full-Stack",
  description:
    "Portf\u00f3lio de Kayky Zioti, Kayky dev, desenvolvedor full-stack especializado em Next.js, React, Node.js, TypeScript e automa\u00e7\u00e3o com IA.",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Kayky Zioti",
    alternateName: ["Kayky dev", "Kayky desenvolvedor", "Kayky Zioti"],
    jobTitle: "Desenvolvedor Full-Stack",
    url: siteUrl,
    image: `${siteUrl}/kaykyzioti.png`,
    knowsAbout: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Automa\u00e7\u00e3o com IA",
      "Desenvolvimento Full-Stack",
    ],
    sameAs: [
      "https://github.com/kaykyone",
      "https://linkedin.com/in/kaykyzioti",
    ],
  },
}

export function StructuredData() {
  return (
    <Script
      id="kayky-profile-json-ld"
      type="application/ld+json"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
      }}
    />
  )
}
