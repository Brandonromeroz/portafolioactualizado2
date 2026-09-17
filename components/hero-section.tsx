"use client"

import { ArrowDown, Download } from "lucide-react"
import { motion } from "framer-motion"
import { TechIcon } from "./tech-icon"
import Image from "next/image"
import { site } from "@/lib/site"

const floatingTechs = [
  { name: "react", position: "top-24 left-[6%]", delay: 0 },
  { name: "nextjs", position: "top-36 right-[8%]", delay: 0.2 },
  { name: "tailwind", position: "bottom-36 right-[7%]", delay: 0.8 },
  { name: "figma", position: "bottom-28 left-[9%]", delay: 1 },
]

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById("sobre-mi")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-background"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--foreground)_6%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--foreground)_6%,transparent)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]" />
      <div className="pointer-events-none absolute top-[-12%] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl dark:bg-accent/10" />

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingTechs.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.6,
              delay: tech.delay,
              y: {
                duration: 3.4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className={`absolute ${tech.position}`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/80 bg-card/80 p-2 shadow-lg backdrop-blur-sm">
              <TechIcon tech={tech.name} className="h-full w-full" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[80svh] flex-col items-center justify-center py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex max-w-4xl flex-col items-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="relative mb-8"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-background shadow-[0_0_0_4px_color-mix(in_oklch,var(--accent)_35%,transparent)] sm:h-28 sm:w-28 md:h-32 md:w-32">
                <Image
                  src={site.photo}
                  alt={`${site.name} - Desarrollador Full Stack`}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
              <span className="absolute right-1 bottom-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-background bg-emerald-500 sm:right-1.5 sm:bottom-1.5 sm:h-5 sm:w-5">
                <span className="sr-only">Disponible</span>
              </span>
            </motion.div>

            <p className="mb-4 text-[0.7rem] font-semibold tracking-[0.22em] text-accent uppercase sm:text-xs">
              Portafolio 2026
            </p>

            <h1 className="font-display text-[2.6rem] leading-[0.95] font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              {site.firstName}
            </h1>
            <p className="mt-2 font-display text-2xl leading-none font-medium tracking-tight text-muted-foreground sm:text-4xl md:text-5xl">
              Romero Zavala
            </p>
            <p className="mt-5 text-lg font-medium text-foreground/80 sm:text-xl md:text-2xl">
              {site.role}
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.description}
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
              <motion.a
                href={site.cvPath}
                download={site.cvDownloadName}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-colors hover:bg-primary/90 sm:text-base"
              >
                <Download className="h-4 w-4" />
                Descargar CV
              </motion.a>
              <motion.button
                type="button"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToNext}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted sm:text-base"
              >
                Conocer más
                <ArrowDown className="h-4 w-4" />
              </motion.button>
            </div>

            <div className="mt-8 inline-flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Disponible para proyectos
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
