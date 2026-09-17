"use client"

import * as React from "react"
import { Mail, Linkedin, Github, Youtube, Send, MessageCircle, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"
import { site } from "@/lib/site"

const socialLinks = [
  { icon: Github, href: site.github, label: "GitHub" },
  { icon: Linkedin, href: site.linkedin, label: "LinkedIn" },
  { icon: Youtube, href: site.youtube, label: "YouTube" },
  { icon: Mail, href: `mailto:${site.email}`, label: "Email" },
]

export function ContactSection() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = React.useState(false)

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
          title="Creemos algo juntos"
          description="¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad."
        />

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="surface-card p-6 sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <MessageCircle className="h-5 w-5 text-accent" />
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">Envíame un mensaje</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-foreground">
                  Nombre completo
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
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              {submitted ? (
                <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-4 w-4" />
                  Se abrió tu cliente de correo. Si no ves nada, escríbeme a {site.email}.
                </p>
              ) : null}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Send className="h-5 w-5" />
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground sm:text-3xl">Conectemos</h3>
              <p className="leading-relaxed text-muted-foreground">
                Estoy siempre abierto a discutir nuevos proyectos, oportunidades creativas o simplemente
                charlar sobre tecnología y desarrollo.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="surface-card flex items-center gap-4 p-4 hover:shadow-md"
              >
                <Mail className="h-6 w-6 shrink-0 text-red-500" />
                <span>
                  <span className="block font-semibold text-foreground">Email</span>
                  <span className="break-all text-sm text-muted-foreground">{site.email}</span>
                </span>
              </a>

              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="surface-card flex items-center gap-4 p-4 hover:shadow-md"
              >
                <MessageCircle className="h-6 w-6 shrink-0 text-emerald-500" />
                <span>
                  <span className="block font-semibold text-foreground">WhatsApp</span>
                  <span className="text-sm text-muted-foreground">{site.phoneDisplay}</span>
                </span>
              </a>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold text-foreground">Sígueme en redes</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="surface-card flex h-12 w-12 items-center justify-center text-muted-foreground hover:text-foreground"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-accent/10 p-5">
              <div className="mb-1 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <p className="font-semibold text-foreground">Respuesta rápida</p>
              </div>
              <p className="text-sm text-muted-foreground">Normalmente respondo en menos de 24 horas.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
