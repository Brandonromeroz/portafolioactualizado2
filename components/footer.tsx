"use client"

import { ArrowUp, Mail, MapPin, Youtube } from "lucide-react"
import { BrandMark } from "@/components/brand-mark"
import { site } from "@/lib/site"

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Colaboraciones", href: "#colaboraciones" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="font-semibold text-foreground">{site.shortName}</p>
                <p className="text-sm text-muted-foreground">{site.role}</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Creando experiencias digitales innovadoras y compartiendo conocimiento con la comunidad
              tech.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contacto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href={`mailto:${site.email}`} className="flex items-start gap-2 hover:text-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="break-all">{site.email}</span>
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {site.location}
              </p>
              <a
                href={site.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-foreground"
              >
                <Youtube className="mt-0.5 h-4 w-4 shrink-0" />
                {site.youtubeName}
              </a>
              <p className="flex items-center gap-2 pt-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  Disponible para proyectos
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.name}.
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowUp className="h-4 w-4" />
            Volver arriba
          </button>
        </div>
      </div>
    </footer>
  )
}
