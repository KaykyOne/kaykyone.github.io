import { Footer } from "@/components/portfolio/footer"
import { Header } from "@/components/portfolio/header"
import { ProjectCaseStudy } from "@/components/portfolio/project-case-study"

export const metadata = { title: "Chatzinho" }

export default function ChatzinhoPage() {
  return <><Header /><ProjectCaseStudy slug="chatzinho" /><Footer /></>
}
