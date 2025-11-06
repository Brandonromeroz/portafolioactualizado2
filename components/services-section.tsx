"use client"
import { motion } from "framer-motion"
import { Code, Video, Handshake, ArrowRight } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Desarrollo Web Profesional",
    description: "Desarrollo de plataformas web modernas y escalables. Desde sistemas de gestión hasta aplicaciones innovadoras como plataformas de drones y e-learning.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    features: [
      "Plataformas web escalables",
      "Sistemas de tiempo real", 
      "APIs para comunicación",
      "Integración con bases de datos"
    ]
  },
  {
    number: "02", 
    title: "Creación de Contenido Tech",
    description: "Producción de contenido tecnológico para YouTube y redes sociales. Reviews de gadgets, tutoriales y contenido educativo para la comunidad hispana.",
    icon: Video,
    color: "from-red-500 to-pink-500",
    features: [
      "Videos técnicos profesionales",
      "Reviews detallados de productos",
      "Contenido educativo",
      "Estrategias de crecimiento"
    ]
  },
  {
    number: "03",
    title: "Colaboraciones Empresariales", 
    description: "Partnerships estratégicos con marcas tecnológicas. Creación de contenido promocional y participación en eventos de lanzamiento.",
    icon: Handshake,
    color: "from-green-500 to-emerald-500",
    features: [
      "Contenido promocional",
      "Participación en eventos", 
      "Reviews exclusivos",
      "Campañas de marketing"
    ]
  }
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
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
            S e r v i c i o s
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales en desarrollo web y creación de contenido tecnológico.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.01, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800/50 rounded-3xl p-8 lg:p-12 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  
                  {/* Left - Service Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-start gap-6">
                      {/* Number & Icon */}
                      <div className="flex flex-col items-center gap-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-gray-300 dark:text-gray-600">
                          {service.number}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Features */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      Incluye:
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                          className="flex items-center gap-3 text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 flex items-center gap-2 group/btn"
                    >
                      <span>Saber más</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            ¿Necesitas algo específico? Hablemos sobre tu proyecto.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Iniciar proyecto
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}