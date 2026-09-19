"use client"

import * as React from "react"
import { Mail, Linkedin, Github, Send, MessageCircle, CheckCircle2, Download } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { featuredProjects, isAppStoreProject, site } from "@/lib/site"

const socialLinks = [
  { icon: Github, href: site.github, label: "GitHub" },
  { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
]

export function ContactSection() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = React.useState(false)
  const reduceMotion = useReducedMotion()
  const storeProjects = featuredProjects.filter(isAppStoreProject)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Mensaje de ${formState.name}`
    const body = `Nombre: ${formState.name}\nEmail: ${formState.email}\n\nMensaje:\n${formState.message}`
    const mailtoLink = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
    setSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmitted(false)
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const fieldClass =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-transparent focus:ring-2 focus:ring-ring focus:outline-none"

  return (
    <section id="contacto" className="section-shell bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contacto"
          title="Hablemos"
          description="Para trabajo, código o las apps del App Store: GitHub, LinkedIn, correo o el CV."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.45 }}
            className="surface-card p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-accent" aria-hidden />
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Escribir</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className={fieldClass}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className={fieldClass}
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-foreground">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`${fieldClass} resize-none`}
                  placeholder="En qué puedo ayudarte"
                  required
                />
              </div>

              {submitted ? (
                <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400" role="status">
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  Se abrió tu cliente de correo. Si no ves nada, escríbeme a {site.email}.
                </p>
              ) : null}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Send className="h-5 w-5" aria-hidden />
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : 0.08 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground sm:text-3xl">Enlaces</h3>
              <p className="leading-relaxed text-muted-foreground">
                CV, código y las fichas públicas de las apps en las que participé con el equipo.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="surface-card flex items-center gap-4 p-4 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-6 w-6 shrink-0 text-red-500" aria-hidden />
                <span>
                  <span className="block font-semibold text-foreground">Email</span>
                  <span className="break-all text-sm text-muted-foreground">{site.email}</span>
                </span>
              </a>

              <a
                href={site.cvPath}
                download={site.cvDownloadName}
                className="surface-card flex items-center gap-4 p-4 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Download className="h-6 w-6 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="block font-semibold text-foreground">CV</span>
                  <span className="text-sm text-muted-foreground">{site.cvDownloadName}</span>
                </span>
              </a>

              {storeProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card flex items-center gap-4 p-4 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <ExternalStoreIcon />
                  <span>
                    <span className="block font-semibold text-foreground">{project.title}</span>
                    <span className="text-sm text-muted-foreground">View on App Store</span>
                  </span>
                </a>
              ))}
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-foreground">Perfiles</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="surface-card flex h-12 w-12 items-center justify-center text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExternalStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-foreground" aria-hidden>
      <path
        fill="currentColor"
        d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
      />
    </svg>
  )
}
