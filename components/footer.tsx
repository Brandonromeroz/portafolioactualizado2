"use client"

import { ArrowUp, Download, Github, Linkedin, Mail, MapPin } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { featuredProjects, isAppStoreProject, navItems, site } from "@/lib/site"
import { useReducedMotion } from "framer-motion"

export function Footer() {
  const reduceMotion = useReducedMotion()
  const storeProjects = featuredProjects.filter(isAppStoreProject)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
  }

  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="font-semibold text-foreground">{site.name}</p>
                <p className="text-sm text-muted-foreground">{site.role}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{site.descriptionEs}</p>
            <a
              href={site.cvPath}
              download={site.cvDownloadName}
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Download className="h-4 w-4" aria-hidden />
              Descargar CV
            </a>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">Enlaces</h2>
            <ul className="space-y-2">
              {navItems.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-foreground">Contacto y apps</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                <span className="break-all">{site.email}</span>
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                {site.location}
              </p>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Github className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                GitHub
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                LinkedIn
              </a>
              {storeProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {project.title} · App Store
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.legalName}.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  )
}
