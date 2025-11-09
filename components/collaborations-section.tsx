"use client"
import { motion } from "framer-motion"
import { Youtube, ExternalLink } from "lucide-react"
import { YouTubeCounter } from "./youtube-counter"
import Image from "next/image"

const brands = [
  {
    name: "OPPO",
    description: "Smartphones innovadores con carga rápida y fotografía avanzada",
    logo: "/oppo.jpg",
    textColor: "text-green-600 dark:text-green-400",
    url: "https://www.oppo.com/mx/"
  },
  {
    name: "Xiaomi",
    description: "Dispositivos inteligentes, smartphones y ecosistema Mi",
    logo: "/xiaomi.jpg",
    textColor: "text-orange-600 dark:text-orange-400",
    url: "https://www.mi.com/mx/"
  },
  {
    name: "Samsung",
    description: "Electrónicos, smartphones Galaxy y tecnología premium",
    logo: "/samsung.jpg",
    textColor: "text-blue-600 dark:text-blue-400",
    url: "https://www.samsung.com/mx/"
  },
  {
    name: "Soundpeats",
    description: "Auriculares inalámbricos y accesorios de audio premium",
    logo: "/soundpeats.jpg",
    textColor: "text-purple-600 dark:text-purple-400",
    url: "https://www.soundpeatsaudio.com/"
  },
  {
    name: "OnePlus",
    description: "Smartphones flagship con rendimiento y diseño excepcional",
    logo: "/oneplus.jpg",
    textColor: "text-red-600 dark:text-red-400",
    url: "https://www.oneplus.com/mx/"
  }
]

export function CollaborationsSection() {
  return (
    <section id="colaboraciones" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6 tracking-tight">
            C o l a b o r a c i o n e s
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Marcas tecnológicas con las que he trabajado creando contenido y reviews especializadas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - YouTube Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3 justify-center lg:justify-start">
                <Youtube className="w-8 h-8 text-red-600" />
                Somos Brandon y Rubén TV
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Canal de YouTube enfocado en tecnología, reviews de gadgets y tutoriales. 
                Contenido de calidad que conecta con la comunidad tech.
              </p>
            </div>

            {/* YouTube Counter */}
            <div className="max-w-md mx-auto lg:mx-0">
              <YouTubeCounter />
            </div>

            {/* Channel Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  +900
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Seguidores totales
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Alta
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  Interacción
                </div>
              </motion.div>
            </div>

            <motion.a
              href="https://www.youtube.com/@BrandonYRubenTV"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full lg:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl cursor-pointer"
            >
              <Youtube className="w-5 h-5" />
              <span>Ver Canal</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Right - Brand Collaborations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center lg:text-left">
              Marcas Colaboradoras
            </h3>

            <div className="space-y-6">
              {brands.map((brand, index) => (
                <motion.a
                  key={brand.name}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-6 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 group cursor-pointer"
                >
                  {/* Brand Logo */}
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg border border-gray-200 dark:border-gray-600">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className={`font-bold text-xl ${brand.textColor} group-hover:scale-105 transition-transform duration-300`}>
                      {brand.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-1">
                      {brand.description}
                    </p>
                  </div>

                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors opacity-0 group-hover:opacity-100" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center lg:text-left pt-4"
            >
              <p className="text-gray-600 dark:text-gray-400 font-medium">
{/*                 ¡Gracias por tu apoyo! 🙌
 */}              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}