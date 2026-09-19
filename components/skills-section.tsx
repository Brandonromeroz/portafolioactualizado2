"use client"

import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { skillCategories } from "@/lib/site"

export function SkillsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="habilidades" className="section-shell bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Stack"
          title="Habilidades"
          description="Categorías que uso en el día a día. Frontend y mobile primero; datos y herramientas como apoyo."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.name}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
              className="surface-card p-5 sm:p-6"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
