"use client"
import { motion } from "framer-motion"
import { ArrowRight, Download, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          
          <div className="space-y-6">
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight tracking-tight">
              ¿Listo para crear algo
              <br />
              <span className="text-blue-600 dark:text-blue-400">extraordinario?</span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transformemos tu idea en una experiencia digital que impacte. 
              Hablemos sobre tu próximo proyecto.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100 flex items-center gap-3 shadow-xl hover:shadow-2xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Trabajemos juntos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/Cv BrandonRomeroZ.pdf"
              download="CV_Brandon_Romero_Zavala.pdf"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-full font-semibold transition-all duration-300 hover:border-gray-900 dark:hover:border-white flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span>Descargar CV</span>
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                2+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Años de experiencia
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                10+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Proyectos completados
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                900+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                Suscriptores YouTube
              </div>
            </div>
          </motion.div>

          {/* Available Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-500 rounded-full"
            />
            <span className="text-green-700 dark:text-green-300 font-semibold">
              Disponible para nuevos proyectos
            </span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}