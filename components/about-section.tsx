"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Youtube } from "lucide-react"
import { site } from "@/lib/site"
import { SectionHeading } from "@/components/section-heading"

const stats = [
  { number: site.stats.years, label: "Años de experiencia" },
  { number: site.stats.projects, label: "Proyectos completados" },
  { number: site.stats.subscribers, label: "Suscriptores en YouTube" },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Ingeniero de software y creador de contenido"
          description="Combino desarrollo web moderno con comunicación clara para construir productos útiles y compartir lo que aprendo."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-xl">
              <Image
                src={site.photo}
                alt={site.name}
                width={480}
                height={600}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Soy {site.name}, {site.role.toLowerCase()}. Trabajo con React, Next.js y Node.js para
              crear plataformas web escalables, y produzco contenido tecnológico en {site.youtubeName}.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Me interesa el detalle de producto: interfaces claras, sistemas en tiempo real y
              experiencias que se sientan rápidas tanto en escritorio como en móvil.
            </p>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {site.location}
              </span>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-foreground transition-colors hover:border-accent/40"
              >
                <Youtube className="h-3.5 w-3.5 text-red-500" />
                {site.youtubeName}
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="surface-card px-4 py-5 text-center">
                  <p className="font-display text-2xl font-semibold text-foreground">{stat.number}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
