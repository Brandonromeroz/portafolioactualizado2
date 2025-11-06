"use client"
import { motion } from "framer-motion"
import { TechIcon } from "./tech-icon"
import { MapPin, Calendar, Heart, Youtube } from "lucide-react"

const technologies = [
  "html", "css", "javascript", "typescript", "react", "nextjs", 
  "nodejs", "mongodb", "tailwind", "figma", "git", "docker", "firebase", "astro"
]

const stats = [
  { number: "3+", label: "Años de experiencia", icon: "💼" },
  { number: "15+", label: "Proyectos completados", icon: "🚀" },
  { number: "970+", label: "Suscriptores en YouTube", icon: "🎥" }
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
      <div className="container mx-auto max-w-6xl">
        
        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Tecnologías que utilizo
          </h3>
          
          {/* Technologies Grid */}
          <div className="flex flex-wrap justify-center gap-4">
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
              >
                <TechIcon 
                  tech={tech} 
                  showLabel={true}
                  className="w-5 h-5"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}