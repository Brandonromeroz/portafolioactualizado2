"use client"

import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { TechIcon } from "@/components/tech-icon"
import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"

const techLabels: Record<string, string> = {
  nextjs: "Next.js",
  nodejs: "Node.js",
  mongodb: "MongoDB",
  tailwind: "Tailwind",
  maps: "Maps API",
  stripe: "Stripe",
  supabase: "Supabase",
}

const projects = [
  {
    id: 1,
    title: "ComeBarato MX",
    description:
      "Plataforma de delivery moderna con geolocalización en tiempo real, sistema de pagos integrado y panel administrativo completo. Construida con React y Node.js.",
    technologies: ["react", "nodejs", "mongodb", "stripe", "tailwind"],
    category: "E-commerce",
    status: "Completado",
    year: "2024",
    image: "/310shots_so.png",
    liveUrl: "https://comebaratomx.netlify.app/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "SKYDELIVER",
    description:
      "Sistema integral de gestión de delivery con tracking en tiempo real, optimización de rutas y analytics avanzados para restaurantes y empresas.",
    technologies: ["nextjs", "typescript", "mongodb", "tailwind", "maps"],
    category: "SaaS",
    status: "Completado",
    year: "2024",
    image: "/411shots_so.png",
    liveUrl: "https://skydeliver.netlify.app/",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Biblioteca Digital",
    description:
      "Plataforma educativa con sistema de préstamos digitales, catálogo interactivo y gestión de usuarios. Optimizada para instituciones educativas.",
    technologies: ["nextjs", "astro", "tailwind", "supabase"],
    category: "Educación",
    status: "Completado",
    year: "2023",
    image: "/912shots_so.png",
    liveUrl: "https://bibliotecaupt.netlify.app/",
    githubUrl: "https://github.com/Brandonromeroz/Biblioteca-Digital",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section-shell bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Trabajo"
          title="Proyectos"
          description="Algunos proyectos destacados en los que he trabajado, desde aplicaciones web hasta plataformas completas de e-commerce y SaaS."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card group flex h-full flex-col overflow-hidden hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  width={700}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{project.title}</h3>
                  <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {project.year}
                  </span>
                </div>
                <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-muted-foreground">{project.category}</span>
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">{project.status}</span>
                </div>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                <div className="mt-auto space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {tech !== "maps" && tech !== "stripe" && tech !== "supabase" ? (
                          <TechIcon tech={tech} className="h-3.5 w-3.5" />
                        ) : null}
                        {techLabels[tech] ?? tech.charAt(0).toUpperCase() + tech.slice(1)}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        <Github className="h-4 w-4" />
                        Código
                      </a>
                    ) : null}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Ver proyecto
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
