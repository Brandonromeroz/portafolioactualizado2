"use client"
import { motion } from "framer-motion"
import { Calendar, MapPin, Briefcase } from "lucide-react"

const experiences = [
  {
    company: "FYTTSA",
    role: "Programador Jr.",
    period: "Actualmente",
    description: "Frontend especializado en interfaces modernas y responsivas con tecnologías actuales.",
    technologies: ["React", "JavaScript", "CSS"],
    current: true,
    color: "from-blue-500 to-blue-600"
  },
  {
    company: "Grupo AB (SKYDELIVER)",
    role: "Desarrollador Web", 
    period: "2025",
    description: "Desarrollo de plataforma web para gestión de pedidos con drones y API en tiempo real.",
    technologies: ["React", "Node.js", "MongoDB"],
    current: false,
    color: "from-purple-500 to-purple-600"
  },
  {
    company: "AI KOI (Fundación)",
    role: "Desarrollador Web",
    period: "2024", 
    description: "Plataforma e-learning con módulos interactivos y pasarelas de pago automatizadas.",
    technologies: ["React", "TypeScript", "Next.js"],
    current: false,
    color: "from-green-500 to-green-600"
  },
  {
    company: "Somos Brandon y Rubén TV",
    role: "Creator de Contenido",
    period: "Actualmente",
    description: "Videos de tecnología en YouTube con +900 seguidores y alta interacción.",
    technologies: ["YouTube", "Content"],
    current: true,
    color: "from-red-500 to-red-600"
  },
  {
    company: "OPPO México",
    role: "Colaborador Oficial",
    period: "Actualmente",
    description: "Creador de contenido oficial con participación en eventos y campañas exclusivas.",
    technologies: ["Marketing", "Reviews"],
    current: true,
    color: "from-orange-500 to-orange-600"
  }
]

export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Experiencia Laboral
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mi trayectoria profesional abarca desarrollo web y creación de contenido tecnológico
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              
              {/* Experience Item */}
              <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg transition-all duration-300 bg-gray-50/50 dark:bg-neutral-900/50">
                
                {/* Left Side - Company & Period */}
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {exp.company}
                    </h3>
                    {exp.current && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs font-medium rounded-full">
                        Actual
                      </span>
                    )}
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="h-3 w-3 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                {/* Middle - Role & Description */}
                <div className="md:w-1/2 flex-grow">
                  <p className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {exp.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                
                {/* Right Side - Technologies */}
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="flex flex-wrap gap-1 justify-end">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded text-xs font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-12 mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Años</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">15+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Proyectos</p>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">900+</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Seguidores</p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}