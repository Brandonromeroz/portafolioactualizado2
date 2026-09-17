"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, MessageCircle } from "lucide-react"
import { site } from "@/lib/site"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-muted/40 px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-5">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              ¿Listo para crear algo <span className="text-accent">extraordinario?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Transformemos tu idea en una experiencia digital que impacte. Hablemos sobre tu próximo
              proyecto.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              Trabajemos juntos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.cvPath}
              download={site.cvDownloadName}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-8 py-3.5 font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Download className="h-5 w-5" />
              Descargar CV
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 border-t border-border pt-12 sm:grid-cols-3">
            <div>
              <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {site.stats.years}
              </p>
              <p className="mt-1 font-medium text-muted-foreground">Años de experiencia</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {site.stats.projects}
              </p>
              <p className="mt-1 font-medium text-muted-foreground">Proyectos completados</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
                {site.stats.subscribers}
              </p>
              <p className="mt-1 font-medium text-muted-foreground">Suscriptores YouTube</p>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="font-semibold text-emerald-700 dark:text-emerald-300">
              Disponible para nuevos proyectos
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
