"use client"
import { motion } from "framer-motion"
import { TechIcon } from "./tech-icon"
import { YouTubeCounter } from "./youtube-counter"

const technologies = [
  "react", "nextjs", "typescript", "javascript", "nodejs", "mongodb", 
  "tailwind", "figma", "astro", "git", "docker"
]

const experience = [
  {
    company: "SKYDELIVER",
    role: "Desarrollador Full-Stack",
    period: "2024 — Presente",
    description: "Desarrollo de plataforma de delivery con React, Node.js y MongoDB. Implementación de sistema de pagos y geolocalización.",
    logo: "🚀"
  },
  {
    company: "AI KOI",
    role: "Desarrollador Frontend",
    period: "2023 — 2024", 
    description: "Desarrollo de interfaces de IA conversacional con React y TypeScript. Integración de APIs de machine learning.",
    logo: "🤖"
  },
  {
    company: "OPPO México",
    role: "Desarrollador Web",
    period: "2023 — 2024",
    description: "Desarrollo de landing pages y campañas digitales para productos móviles. Optimización SEO y performance.",
    logo: "📱"
  }
]

const designProcess = [
  {
    number: "01",
    title: "Análisis",
    description: "Comprendo los requisitos del proyecto y defino objetivos claros para crear la mejor solución."
  },
  {
    number: "02", 
    title: "Diseño",
    description: "Creo wireframes y prototipos funcionales enfocados en la experiencia del usuario."
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Implemento el diseño con código limpio, optimizado y siguiendo las mejores prácticas."
  },
  {
    number: "04",
    title: "Optimización",
    description: "Pruebo, optimizo la performance y aseguro la compatibilidad en todos los dispositivos."
  }
]

export function SkillsSection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="container mx-auto max-w-4xl">
        
        {/* Hero About */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-sans text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            Un desarrollador creativo
            <br />
            <span className="text-gray-600 dark:text-gray-400">&amp; diseñador digital</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Colaboro con marcas globalmente para diseñar sitios web impactantes y enfocados en la misión 
            que generen resultados y alcancen objetivos de negocio.
          </p>
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100 
              }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="relative"
            >
              <TechIcon 
                tech={tech} 
                className="w-12 h-12 p-2 bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-wider text-center">
            E x p e r i e n c i a
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            He trabajado con algunos de los líderes más innovadores de la industria para ayudar a construir sus productos de primera clase.
          </p>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 p-6 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-2xl">
                    {exp.logo}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                    @{exp.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-wider text-center">
            M i  P r o c e s o  d e  D i s e ñ o
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Un enfoque estructurado para crear experiencias digitales excepcionales que conecten con los usuarios.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {designProcess.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* YouTube Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 tracking-wider">
            C r e a n d o  C o n t e n i d o
          </h2>
          <div className="max-w-md mx-auto">
            <YouTubeCounter />
          </div>
        </motion.div>

      </div>
    </section>
  )
}