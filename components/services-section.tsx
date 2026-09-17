"use client"

import { motion } from "framer-motion"
import { Code, Video, Handshake, ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const services = [
  {
    number: "01",
    title: "Desarrollo Web Profesional",
    description:
      "Desarrollo de plataformas web modernas y escalables. Desde sistemas de gestión hasta aplicaciones innovadoras como plataformas de drones y e-learning.",
    icon: Code,
    features: [
      "Plataformas web escalables",
      "Sistemas de tiempo real",
      "APIs para comunicación",
      "Integración con bases de datos",
    ],
  },
  {
    number: "02",
    title: "Creación de Contenido Tech",
    description:
      "Producción de contenido tecnológico para YouTube y redes sociales. Reviews de gadgets, tutoriales y contenido educativo para la comunidad hispana.",
    icon: Video,
    features: [
      "Videos técnicos profesionales",
      "Reviews detallados de productos",
      "Contenido educativo",
      "Estrategias de crecimiento",
    ],
  },
  {
    number: "03",
    title: "Colaboraciones Empresariales",
    description:
      "Partnerships estratégicos con marcas tecnológicas. Creación de contenido promocional y participación en eventos de lanzamiento.",
    icon: Handshake,
    features: [
      "Contenido promocional",
      "Participación en eventos",
      "Reviews exclusivos",
      "Campañas de marketing",
    ],
  },
]

function scrollToContact() {
  const element = document.getElementById("contacto")
  if (element) {
    const offsetPosition = element.offsetTop - 80
    window.scrollTo({ top: offsetPosition, behavior: "smooth" })
  }
}

export function ServicesSection() {
  return (
    <section id="servicios" className="section-shell bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Qué hago"
          title="Servicios"
          description="Soluciones integrales en desarrollo web y creación de contenido tecnológico."
        />

        <div className="space-y-5">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="surface-card p-6 sm:p-8 lg:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
                <div className="flex gap-4 sm:gap-6">
                  <div className="flex shrink-0 flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground sm:h-14 sm:w-14">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                    </div>
                    <span className="font-display text-lg font-semibold text-muted-foreground/70">
                      {service.number}
                    </span>
                  </div>
                  <div className="min-w-0 space-y-3">
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{service.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 font-semibold text-foreground">Incluye:</h4>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    Saber más
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            ¿Necesitas algo específico? Hablemos sobre tu proyecto.
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-colors hover:bg-primary/90"
          >
            Iniciar proyecto
          </button>
        </div>
      </div>
    </section>
  )
}
