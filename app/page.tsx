import { Header } from "@/components/portfolio/header"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Projects } from "@/components/portfolio/projects"
import { Testimonials } from "@/components/portfolio/testimonials"
import { ClientsMap } from "@/components/portfolio/clients-map-loader"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { WhatsappFloatingButton } from "@/components/portfolio/whatsapp-floating-button"
import { Services } from "@/components/portfolio/services"


export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="min-h-screen bg-background text-foreground">
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <About />
      <Experience />
      <Skills />
      <ClientsMap />
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </>
  )
}
