import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TechnologiesLoop } from "@/components/technologies-loop"
import { ExperienceSection } from "@/components/experience-section"
import { CollaborationsSection } from "@/components/collaborations-section"
import { ProjectsSection } from "@/components/projects-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <TechnologiesLoop />
      <ExperienceSection />
      <CollaborationsSection />
      <ProjectsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  )
}
