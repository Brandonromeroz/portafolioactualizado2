"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/site"

const experiences = [
  {
    company: "FYTTSA",
    role: "Programador Jr.",
    period: "Actualmente",
    description: "Frontend especializado en interfaces modernas y responsivas con tecnologías actuales.",
    technologies: ["React", "JavaScript", "CSS"],
    current: true,
  },
  {
    company: "Grupo AB (SKYDELIVER)",
    role: "Desarrollador Web",
    period: "2025",
    description: "Desarrollo de plataforma web para gestión de pedidos con drones y API en tiempo real.",
    technologies: ["React", "Node.js", "MongoDB"],
    current: false,
  },
  {
    company: "AI KOI (Fundación)",
    role: "Desarrollador Web",
    period: "2024",
    description: "Plataforma e-learning con módulos interactivos y pasarelas de pago automatizadas.",
    technologies: ["React", "TypeScript", "Next.js"],
    current: false,
  },
  {
    company: "Somos Brandon y Rubén TV",
    role: "Creador de Contenido",
    period: "Actualmente",
    description: "Videos de tecnología en YouTube con +900 seguidores y alta interacción.",
    technologies: ["YouTube", "Content"],
    current: true,
  },
  {
    company: "OPPO México",
    role: "Colaborador Oficial",
    period: "Actualmente",
    description: "Creador de contenido oficial con participación en eventos y campañas exclusivas.",
    technologies: ["Marketing", "Reviews"],
    current: true,
  },
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section-shell bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Experiencia laboral"
          description="Mi trayectoria profesional abarca desarrollo web y creación de contenido tecnológico."
        />

        <div className="relative space-y-4">
          <div className="absolute top-3 bottom-3 left-[1.15rem] hidden w-px bg-border md:block" />

          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="surface-card relative p-5 sm:p-6 md:pl-14"
            >
              <span className="absolute top-7 left-4 hidden h-3.5 w-3.5 rounded-full border-2 border-background bg-accent md:block" />

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
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:items-end">
                  <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 lg:justify-end">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-8">
          <div className="text-center">
            <p className="font-display text-2xl font-semibold text-accent">{site.stats.years}</p>
            <p className="mt-1 text-sm text-muted-foreground">Años</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl font-semibold text-accent">{site.stats.projects}</p>
            <p className="mt-1 text-sm text-muted-foreground">Proyectos</p>
          </div>
          <div className="text-center">
            <p className="font-display text-2xl font-semibold text-accent">{site.stats.subscribers}</p>
            <p className="mt-1 text-sm text-muted-foreground">Seguidores</p>
          </div>
        </div>
      </div>
    </section>
  )
}
