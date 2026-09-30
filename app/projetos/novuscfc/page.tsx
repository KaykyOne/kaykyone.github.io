import { Footer } from "@/components/portfolio/footer"
import { Header } from "@/components/portfolio/header"
import { ProjectCaseStudy } from "@/components/portfolio/project-case-study"

const title = "NovusCFC: desenvolvimento de sistema para autoescolas"
const description = "Conheça o projeto NovusCFC: desenvolvimento de um sistema web para organizar a gestão de autoescolas, centralizar informações e simplificar processos."
const url = "https://kayky.dev.br/projetos/novuscfc"
export const metadata = {
  title, description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "pt_BR", siteName: "Kayky Zioti", images: ["https://kayky.dev.br/novuscfc.png"] },
  twitter: { title, description, card: "summary_large_image", images: ["https://kayky.dev.br/novuscfc.png"] },
}

export default function NovusCfcPage() {
  return <><Header /><ProjectCaseStudy slug="novuscfc" /><Footer /></>
}
