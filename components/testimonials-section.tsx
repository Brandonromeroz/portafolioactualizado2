"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"

const testimonials = [
  {
    quote:
      "Brandon desarrolló una plataforma innovadora para la gestión de entregas con drones. Su capacidad para implementar sistemas de tiempo real y comunicación con dispositivos es impresionante.",
    author: "Equipo SKYDELIVER",
    company: "Grupo AB",
  },
  {
    quote:
      "Nos ayudó a crear una plataforma e-learning completa con módulos interactivos y pasarelas de pago. Su enfoque en la experiencia del usuario es excepcional.",
    author: "Fundación AI KOI",
    company: "Proyecto Educativo",
  },
  {
    quote:
      "Como colaborador oficial de OPPO, Brandon produce contenido técnico de alta calidad que genera excelente engagement. Su profesionalismo en eventos es destacable.",
    author: "Equipo Marketing",
    company: "OPPO México",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="section-shell bg-muted/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Clientes"
          title="Testimonios"
          description="Lo que dicen quienes han trabajado conmigo y confían en mi trabajo."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card flex h-full flex-col p-6 sm:p-7"
            >
              <p className="flex-1 text-base leading-relaxed text-foreground/90">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <cite className="not-italic">
                  <span className="block font-semibold text-foreground">{testimonial.author}</span>
                  <span className="mt-0.5 block text-sm text-muted-foreground">{testimonial.company}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
