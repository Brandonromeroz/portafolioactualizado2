"use client"

import { motion } from "framer-motion"
import { TechIcon } from "./tech-icon"
import { YouTubeCounter } from "./youtube-counter"
import { SectionHeading } from "@/components/section-heading"

const technologies = [
  "react",
  "nextjs",
  "typescript",
  "javascript",
  "nodejs",
  "mongodb",
  "tailwind",
  "figma",
  "astro",
  "git",
  "docker",
]

const experience = [
  {
    company: "SKYDELIVER",
    role: "Desarrollador Full-Stack",
    period: "2024 — Presente",
    description:
      "Desarrollo de plataforma de delivery con React, Node.js y MongoDB. Implementación de sistema de pagos y geolocalización.",
    logo: "🚀",
  },
  {
    company: "AI KOI",
    role: "Desarrollador Frontend",
    period: "2023 — 2024",
    description:
      "Desarrollo de interfaces de IA conversacional con React y TypeScript. Integración de APIs de machine learning.",
    logo: "🤖",
  },
  {
    company: "OPPO México",
    role: "Desarrollador Web",
    period: "2023 — 2024",
    description:
      "Desarrollo de landing pages y campañas digitales para productos móviles. Optimización SEO y performance.",
    logo: "📱",
  },
]

const designProcess = [
  {
    number: "01",
    title: "Análisis",
    description: "Comprendo los requisitos del proyecto y defino objetivos claros para crear la mejor solución.",
  },
  {
    number: "02",
    title: "Diseño",
    description: "Creo wireframes y prototipos funcionales enfocados en la experiencia del usuario.",
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Implemento el diseño con código limpio, optimizado y siguiendo las mejores prácticas.",
  },
  {
    number: "04",
    title: "Optimización",
    description: "Pruebo, optimizo el rendimiento y aseguro la compatibilidad en todos los dispositivos.",
  },
]

export function SkillsSection() {
  return (
    <section className="section-shell bg-background">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Un desarrollador creativo y diseñador digital"
          description="Colaboro con marcas globalmente para diseñar sitios web impactantes y enfocados en la misión que generen resultados y alcancen objetivos de negocio."
        />

        <div className="mb-16 flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <TechIcon
              key={tech}
              tech={tech}
              className="h-10 w-10 rounded-xl border border-border bg-muted/50 p-2"
            />
          ))}
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">Experiencia</h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="surface-card flex gap-5 p-5"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-muted text-2xl">
                  {exp.logo}
                </div>
                <div className="min-w-0">
                  <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mb-1 font-medium text-muted-foreground">@{exp.company}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-semibold text-foreground">Mi proceso de diseño</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {designProcess.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <span className="text-sm font-bold text-accent">{step.number}</span>
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-foreground">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-md">
          <h3 className="mb-6 text-center text-2xl font-semibold text-foreground">Creando contenido</h3>
          <YouTubeCounter />
        </div>
      </div>
    </section>
  )
}
