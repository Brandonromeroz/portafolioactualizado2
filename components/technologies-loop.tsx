"use client"
import { motion } from "framer-motion"
import { TechIcon } from "./tech-icon"

const technologies = [
  "react",
  "nextjs", 
  "typescript",
  "tailwind",
  "nodejs",
  "mongodb",
  "figma",
  "git",
  "docker",
  "firebase",
  "html",
  "css",
  "javascript",
  "astro"
]

export function TechnologiesLoop() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Tecnologías que utilizo
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Herramientas y tecnologías modernas para crear experiencias digitales excepcionales
          </p>
        </motion.div>

        {/* Infinite Loop */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              className="flex gap-4 sm:gap-6 pr-4 sm:pr-6"
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <div
                  key={`${tech}-${index}`}
                  className="flex-shrink-0"
                >
                  <TechIcon 
                    tech={tech} 
                    showLabel={true}
                    className="w-6 h-6"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-8 sm:w-12 md:w-20 h-full bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-8 sm:w-12 md:w-20 h-full bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}