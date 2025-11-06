"use client"

import * as React from "react"
import { Mail, Linkedin, Github, Twitter, Send, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Github, href: "https://github.com/Brandonromeroz", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
  { icon: Linkedin, href: "https://linkedin.com/in/brandon-romero", label: "LinkedIn", color: "hover:text-blue-600" },
  { icon: Twitter, href: "https://twitter.com/brandon_romero", label: "Twitter", color: "hover:text-blue-400" },
  { icon: Mail, href: "mailto:romerozavalabrandon@gmail.com", label: "Email", color: "hover:text-red-600" },
]

export function ContactSection() {
  const [formState, setFormState] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Crear el enlace mailto con los datos del formulario
    const subject = `Mensaje de ${formState.name}`
    const body = `Nombre: ${formState.name}\nEmail: ${formState.email}\n\nMensaje:\n${formState.message}`
    const mailtoLink = `mailto:romerozavalabrandon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Abrir cliente de email
    window.open(mailtoLink)
    
    // Limpiar formulario
    setFormState({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contacto" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
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
            C r e e m o s  a l g o  j u n t o s
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Envíame un mensaje
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="tu@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Enviar mensaje</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Conectemos
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Estoy siempre abierto a discutir nuevos proyectos, oportunidades creativas 
                o simplemente charlar sobre tecnología y desarrollo.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <motion.a
                href="mailto:romerozavalabrandon@gmail.com"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer"
              >
                <Mail className="w-6 h-6 text-red-600" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">romerozavalabrandon@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/527298958841"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer"
              >
                <MessageCircle className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">WhatsApp</p>
                  <p className="text-gray-600 dark:text-gray-400">+52 729 895 8841</p>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Sígueme en redes
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 shadow-sm hover:shadow-lg`}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Respuesta rápida
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Normalmente respondo en menos de 24 horas
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}