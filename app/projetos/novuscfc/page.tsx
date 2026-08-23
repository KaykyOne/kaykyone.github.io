import { Footer } from "@/components/portfolio/footer"
import { Header } from "@/components/portfolio/header"
import { ProjectCaseStudy } from "@/components/portfolio/project-case-study"

export const metadata = { title: "NovusCFC" }

export default function NovusCfcPage() {
  return <><Header /><ProjectCaseStudy slug="novuscfc" /><Footer /></>
}
