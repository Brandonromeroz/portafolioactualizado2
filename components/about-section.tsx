"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Download, MapPin, Youtube } from "lucide-react"
import { site, aboutParagraphs } from "@/lib/site"
import { SectionHeading } from "@/components/section-heading"

export function AboutSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="sobre-mi" className="section-shell bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Sobre mí"
          title="Web, móvil y producto"
          description="Un perfil concreto: ingeniería fullstack, apps en producción y software que se usa."
        />

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-xl">
              <Image
                src={site.photo}
                alt={`Retrato de ${site.name}`}
                width={480}
                height={600}
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.08 }}
            className="space-y-5"
          >
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-1 text-sm">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden />
                {site.location}
              </span>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Youtube className="h-3.5 w-3.5 shrink-0 text-red-500" aria-hidden />
                <span className="truncate">{site.youtubeName}</span>
              </a>
            </div>

            <a
              href={site.cvPath}
              download={site.cvDownloadName}
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Download className="h-4 w-4" aria-hidden />
              Descargar CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
