"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { YouTubeCounter } from "@/components/youtube-counter"

export function YouTubeSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="youtube" className="section-shell overflow-x-clip bg-muted/30">
      <div className="mx-auto w-full min-w-0 max-w-6xl">
        <SectionHeading
          eyebrow="YouTube"
          title="También en YouTube"
          description="Creador de contenido tech en YouTube (@BrandonYRubenTV), de enero de 2020 a la fecha."
        />

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
        >
          <YouTubeCounter />
        </motion.div>
      </div>
    </section>
  )
}
