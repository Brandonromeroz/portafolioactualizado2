"use client"

import { motion } from "framer-motion"
import { ArrowUp, Heart } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">BR</span>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  Brandon Romero
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Desarrollador & Creator
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Creando experiencias digitales innovadoras y compartiendo conocimiento con la comunidad tech.
            </p>
          </motion.div>

          {/* Center - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Sobre mí", href: "#sobre-mi" },
                { label: "Experiencia", href: "#experiencia" },
                { label: "Colaboraciones", href: "#colaboraciones" },
                { label: "Proyectos", href: "#proyectos" },
                { label: "Contacto", href: "#contacto" }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-gray-900 dark:text-white">
              Contacto
            </h4>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                📧 brandon@example.com
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                📍 México
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                🎥 Somos Brandon y Rubén TV
              </p>
              <div className="flex items-center gap-2 pt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                  Disponible para proyectos
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>© {new Date().getFullYear()} Brandon Romero. Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>en México</span>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-300 dark:border-gray-600 rounded-full hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Volver arriba</span>
            </motion.button>

          </div>
        </motion.div>

      </div>
    </footer>
  )
}