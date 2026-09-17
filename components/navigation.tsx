"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { BrandMark } from "@/components/brand-mark"
import { Menu, X } from "lucide-react"

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia" },
  { id: "colaboraciones", label: "Colaboraciones" },
  { id: "proyectos", label: "Proyectos" },
  { id: "contacto", label: "Contacto" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = React.useState("inicio")
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)

      const scrollPosition = window.scrollY + 120
      let current = sections[0].id

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && scrollPosition >= element.offsetTop) {
          current = section.id
        }
      }

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const offsetPosition = element.offsetTop - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-border/70 bg-background/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-[4.5rem]">
            <Link
              href="#inicio"
              onClick={() => scrollToSection("inicio")}
              className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <BrandMark showName className="sm:gap-3" nameClassName="hidden text-lg sm:block" />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    activeSection === section.id
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeSection === section.id && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-full bg-accent/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{section.label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted lg:hidden"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/35 backdrop-blur-[2px] lg:hidden"
              aria-label="Cerrar menú"
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 right-0 left-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                      activeSection === section.id
                        ? "bg-accent/10 text-accent"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
