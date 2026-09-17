"use client"

import { motion } from "framer-motion"
import { Youtube, ExternalLink } from "lucide-react"
import { YouTubeCounter } from "./youtube-counter"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/site"

const brands = [
  {
    name: "OPPO",
    description: "Smartphones innovadores con carga rápida y fotografía avanzada",
    logo: "/oppo.jpg",
    url: "https://www.oppo.com/mx/",
  },
  {
    name: "Xiaomi",
    description: "Dispositivos inteligentes, smartphones y ecosistema Mi",
    logo: "/xiaomi.jpg",
    url: "https://www.mi.com/mx/",
  },
  {
    name: "Samsung",
    description: "Electrónicos, smartphones Galaxy y tecnología premium",
    logo: "/samsung.jpg",
    url: "https://www.samsung.com/mx/",
  },
  {
    name: "Soundpeats",
    description: "Auriculares inalámbricos y accesorios de audio premium",
    logo: "/soundpeats.jpg",
    url: "https://www.soundpeats.com/",
  },
  {
    name: "OnePlus",
    description: "Smartphones flagship con rendimiento y diseño excepcional",
    logo: "/oneplus.jpg",
    url: "https://www.oneplus.com/mx/",
  },
]

export function CollaborationsSection() {
  return (
    <section id="colaboraciones" className="section-shell bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Marcas"
          title="Colaboraciones"
          description="Marcas tecnológicas con las que he trabajado creando contenido y reviews especializadas."
        />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="flex items-center gap-3 text-2xl font-semibold text-foreground sm:text-3xl">
                <Youtube className="h-7 w-7 shrink-0 text-red-600" />
                <span className="text-balance">{site.youtubeName}</span>
              </h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Canal de YouTube enfocado en tecnología, reviews de gadgets y tutoriales. Contenido de
                calidad que conecta con la comunidad tech.
              </p>
            </div>

            <YouTubeCounter />

            <div className="grid grid-cols-2 gap-3">
              <div className="surface-card p-5 text-center">
                <p className="font-display text-3xl font-semibold text-foreground">{site.stats.subscribers}</p>
                <p className="mt-1 text-sm text-muted-foreground">Seguidores totales</p>
              </div>
              <div className="surface-card p-5 text-center">
                <p className="font-display text-3xl font-semibold text-foreground">Alta</p>
                <p className="mt-1 text-sm text-muted-foreground">Interacción</p>
              </div>
            </div>

            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-600/20 transition-colors hover:bg-red-700 sm:w-auto"
            >
              <Youtube className="h-5 w-5" />
              Ver canal
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-semibold text-foreground">Marcas colaboradoras</h3>
            <div className="space-y-3">
              {brands.map((brand, index) => (
                <motion.a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group surface-card flex items-center gap-4 p-4 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-border bg-background">
                    <Image
                      src={brand.logo}
                      alt={`Logo de ${brand.name}`}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-foreground">{brand.name}</h4>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{brand.description}</p>
                  </div>
                  <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>
            <p className="pt-1 text-sm font-medium text-muted-foreground">¡Gracias por tu apoyo!</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
