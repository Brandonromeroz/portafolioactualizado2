"use client"

import { ExternalLink, MonitorSmartphone } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { PhoneMockupRow } from "@/components/phone-mockup"
import { featuredProjects } from "@/lib/site"

export function ProjectsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="proyectos" className="section-shell bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Proyectos"
          title="Apps en el App Store y un SaaS en curso"
          description="Los protagonistas son productos móviles publicados con el equipo de Black Sheep Labs. Los mockups están listos para capturas reales — no hay pantallas inventadas."
        />

        <div className="space-y-10 lg:space-y-16">
          {featuredProjects.map((project, index) => {
            const isMobile = project.kind === "mobile"

            return (
              <motion.article
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
                className="surface-card overflow-hidden p-6 sm:p-8 lg:p-10"
              >
                <div
                  className={
                    isMobile
                      ? "grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12"
                      : "grid items-center gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
                  }
                >
                  <div className={isMobile ? "order-2 lg:order-none" : "order-2"}>
                    {isMobile ? (
                      <PhoneMockupRow
                        title={project.title}
                        slots={project.mockupSlots}
                        screenshots={project.screenshots}
                      />
                    ) : (
                      <div
                        className="flex min-h-[16rem] flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-500/60 bg-zinc-900/40 px-6 text-center"
                        role="img"
                        aria-label={`Espacio de mockup web para ${project.title}`}
                      >
                        <MonitorSmartphone className="mb-3 h-8 w-8 text-muted-foreground" aria-hidden />
                        <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                          Mockup web
                        </p>
                        <p className="mt-2 max-w-xs text-sm text-muted-foreground">{project.mockupSlots[0]}</p>
                      </div>
                    )}
                  </div>

                  <div className="order-1 min-w-0 lg:order-none">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-700 uppercase dark:text-emerald-300">
                        {project.badge}
                      </span>
                      <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                    </div>

                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.description}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80">{project.attribution}</p>

                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`Tecnologías de ${project.title}`}>
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {project.storeUrl ? (
                      <a
                        href={project.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden />
                        {project.storeLabel}
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
