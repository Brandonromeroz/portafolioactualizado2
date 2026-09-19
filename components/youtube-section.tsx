"use client"

import { ExternalLink, Youtube } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { YouTubeCounter } from "@/components/youtube-counter"
import { site } from "@/lib/site"

export function YouTubeSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="canal" className="section-shell bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="YouTube"
          title="También en YouTube"
          description="Ingeniería primero. El canal es un espacio extra para hablar de tecnología."
        />

        <motion.article
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="surface-card mx-auto max-w-2xl p-5 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <Youtube className="mt-0.5 h-7 w-7 shrink-0 text-red-600" aria-hidden />
            <div className="min-w-0">
              <h3 className="text-balance text-xl font-semibold text-foreground sm:text-2xl">{site.youtubeName}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{site.youtubeDescription}</p>
            </div>
          </div>

          <div className="mt-6">
            <YouTubeCounter />
          </div>

          <a
            href={site.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
          >
            Ver canal
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </motion.article>
      </div>
    </section>
  )
}
