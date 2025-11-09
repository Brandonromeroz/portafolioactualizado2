"use client"
import { ArrowDown, Download } from "lucide-react"
import { motion } from "framer-motion"
import { TechIcon } from "./tech-icon"
import Image from "next/image"

const floatingTechs = [
  { name: "react", position: "top-20 left-[5%]", delay: 0 },
  { name: "nextjs", position: "top-40 right-[8%]", delay: 0.2 },
  { name: "tailwind", position: "bottom-32 right-[5%]", delay: 1.0 },
  { name: "figma", position: "bottom-40 left-[8%]", delay: 1.2 },
]

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("experiencia")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingTechs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 0.6,
              delay: tech.delay,
              y: {
                duration: 3 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className={`absolute ${tech.position} hidden lg:block`}
          >
            <div className="w-12 h-12 p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <TechIcon tech={tech.name} className="w-full h-full" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
       <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="space-y-4 sm:space-y-6 max-w-4xl pt-16 sm:pt-20 px-4"
          >
            
            {/* Profile Image - justo encima del nombre */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative flex justify-center mb-6"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg">
                <Image
                  src="/devbran.jpg"
                  alt="Brandon Romero Zavala - Desarrollador Full Stack"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 shadow-lg"
              />
            </motion.div>
            <div className="space-y-6">
              {/* Main Name - GRANDE */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-gray-900 dark:text-white leading-none tracking-tight"
              >
                Brandon
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-500 dark:text-gray-400 leading-none tracking-tight"
              >
                Romero
              </motion.h2>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-500 dark:text-gray-400 leading-none tracking-tight"
              >           
                Zavala
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light"
              >
                Desarrollador &amp; Creador de Contenido
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed px-2"
            >
              Ingeniero de Software especializado en desarrollo web moderno. 
              Construyo experiencias digitales innovadoras y comparto conocimiento con la comunidad.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
            >
              <motion.a
                href="/Cv BrandonRomeroZ.pdf"
                download="CV_Brandon_Romero_Zavala.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold transition-all duration-300 hover:bg-gray-800 dark:hover:bg-gray-100 flex items-center justify-center gap-2 sm:gap-3 shadow-xl hover:shadow-2xl text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                <span>Descargar CV</span>
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToNext}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <span>Conocer más</span>
                <ArrowDown className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-green-500 rounded-full"
              />
              <span>Disponible para proyectos</span>
            </motion.div>
          </motion.div>


        </div>
      </div>


      
    </section>
  )
}