"use client"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { TechIcon } from "@/components/tech-icon"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "ComeBarato MX",
    description: "Plataforma de delivery moderna con geolocalización en tiempo real, sistema de pagos integrado y panel administrativo completo. Construida con React y Node.js.",
    technologies: ["react", "nodejs", "mongodb", "stripe", "tailwind"],
    category: "E-commerce",
    status: "Completado",
    year: "2024",
    color: "from-blue-500 to-cyan-500",
    image: "/310shots_so.png",
    liveUrl: "https://comebaratomx.netlify.app/",
    githubUrl: "" // No tiene GitHub según tu código
  },
  {
    id: 2,
    title: "SKYDELIVER",
    description: "Sistema integral de gestión de delivery con tracking en tiempo real, optimización de rutas y analytics avanzados para restaurantes y empresas.",
    technologies: ["nextjs", "typescript", "mongodb", "tailwind", "maps"],
    category: "SaaS",
    status: "Completado",
    year: "2024",
    color: "from-purple-500 to-pink-500",
    image: "/411shots_so.png",
    liveUrl: "https://skydeliver.netlify.app/",
    githubUrl: "" // No tiene GitHub según tu código
  },
  {
    id: 3,
    title: "Biblioteca Digital",
    description: "Plataforma educativa con sistema de préstamos digitales, catálogo interactivo y gestión de usuarios. Optimizada para instituciones educativas.",
    technologies: ["nextjs", "astro", "tailwind", "supabase"],
    category: "Educación",
    status: "Completado",
    year: "2023",
    color: "from-green-500 to-emerald-500",
    image: "/912shots_so.png",
    liveUrl: "https://bibliotecaupt.netlify.app/",
    githubUrl: "https://github.com/Brandonromeroz/Biblioteca-Digital.git"
  }
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        
        {/* Projects Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 tracking-tight">
            P r o y e c t o s
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Algunos proyectos destacados en los que he trabajado, desde aplicaciones web 
            hasta plataformas completas de e-commerce y SaaS.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 h-full hover:bg-white dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white`}>
                        {project.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-gray-600 dark:text-gray-400">{project.category}</span>
                      <span className="w-2 h-2 bg-green-500 rounded-full" title={project.status}></span>
                      <span className="text-green-600 dark:text-green-400 font-medium">{project.status}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        title="Ver código en GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        title="Ver proyecto en vivo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Image */}
                <div className="w-full h-48 sm:h-56 lg:h-64 rounded-lg mb-6 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    width={700}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200"
                    >
                      {tech !== "maps" && tech !== "stripe" && tech !== "supabase" && (
                        <TechIcon tech={tech} className="w-4 h-4" />
                      )}
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {tech === "nextjs" ? "Next.js" :
                         tech === "nodejs" ? "Node.js" :
                         tech === "mongodb" ? "MongoDB" :
                         tech === "tailwind" ? "Tailwind" :
                         tech === "maps" ? "Maps API" :
                         tech === "stripe" ? "Stripe" :
                         tech === "supabase" ? "Supabase" :
                         tech.charAt(0).toUpperCase() + tech.slice(1)}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}