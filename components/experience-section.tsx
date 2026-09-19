"use client"

import { Calendar } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/site"

export function ExperienceSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="experiencia" className="section-shell bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Experiencia"
          title="Dónde trabajo ahora"
          description="Rol actual como Software Engineer. El foco es frontend y mobile, no un perfil de backend o full stack senior."
        />

        <div className="relative space-y-4">
          <div className="absolute top-3 bottom-3 left-[1.15rem] hidden w-px bg-border md:block" aria-hidden />

          {experience.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
              className="surface-card relative p-5 sm:p-6 md:pl-14"
            >
              <span
                className="absolute top-7 left-4 hidden h-3.5 w-3.5 rounded-full border-2 border-background bg-accent md:block"
                aria-hidden
              />

              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                    {exp.current ? (
                      <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-300">
                        Actual
                      </span>
                    ) : null}
                  </div>
                  <p className="font-medium text-accent">{exp.role}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.team}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                </div>

                <div className="flex flex-col gap-3 lg:items-end">
                  <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" aria-hidden />
                    <span>{exp.period}</span>
                  </div>
                  <ul className="flex flex-wrap gap-1.5 lg:justify-end" aria-label="Tecnologías del rol">
                    {exp.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
