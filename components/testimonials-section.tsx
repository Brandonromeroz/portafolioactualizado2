"use client"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Brandon desarrolló una plataforma innovadora para la gestión de entregas con drones. Su capacidad para implementar sistemas de tiempo real y comunicación con dispositivos es impresionante.",
    author: "Equipo SKYDELIVER",
    company: "Grupo AB"
  },
  {
    quote: "Nos ayudó a crear una plataforma e-learning completa con módulos interactivos y pasarelas de pago. Su enfoque en la experiencia del usuario es excepcional.",
    author: "Fundación AI KOI",
    company: "Proyecto Educativo"
  },
  {
    quote: "Como colaborador oficial de OPPO, Brandon produce contenido técnico de alta calidad que genera excelente engagement. Su profesionalismo en eventos es destacable.",
    author: "Equipo Marketing",
    company: "OPPO México"
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 tracking-tight">
            T e s t i m o n i o s
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Lo que dicen quienes han trabajado conmigo y confían en mi trabajo.
          </p>
        </motion.div>

        {/* Testimonials List */}
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Quote */}
              <motion.blockquote
                whileHover={{ scale: 1.01 }}
                className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-light italic mb-6 pl-8 border-l-4 border-blue-500 dark:border-blue-400"
              >
                "{testimonial.quote}"
              </motion.blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pl-8">
                <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Divider - except for last item */}
              {index < testimonials.length - 1 && (
                <div className="mt-12 flex justify-center">
                  <div className="w-24 h-px bg-gray-300 dark:bg-gray-600"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}