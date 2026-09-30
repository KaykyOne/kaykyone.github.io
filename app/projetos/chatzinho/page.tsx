import { Footer } from "@/components/portfolio/footer"
import { Header } from "@/components/portfolio/header"
import { ProjectCaseStudy } from "@/components/portfolio/project-case-study"

const title = "Chatzinho: chatbot com IA para WhatsApp e CRM"
const description = "Conheça o projeto Chatzinho: chatbot com inteligência artificial para atendimento via WhatsApp, classificação de contatos e integração com CRM."
const url = "https://kayky.dev.br/projetos/chatzinho"
export const metadata = {
  title, description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "website", locale: "pt_BR", siteName: "Kayky Zioti", images: ["https://kayky.dev.br/chatzinho.png"] },
  twitter: { title, description, card: "summary_large_image", images: ["https://kayky.dev.br/chatzinho.png"] },
}

export default function ChatzinhoPage() {
  return <><Header /><ProjectCaseStudy slug="chatzinho" /><Footer /></>
}
