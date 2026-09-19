"use client"

import { Github, ArrowDown } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { site, heroButtons } from "@/lib/site"

export function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-center justify-center overflow-x-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_oklch,var(--foreground)_5%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_oklch,var(--foreground)_5%,transparent)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_32%,transparent_72%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-20 text-center sm:py-24">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
            className="flex w-full max-w-4xl flex-col items-center"
          >
            <div className="relative mb-6 sm:mb-8">
              <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-background shadow-[0_0_0_4px_color-mix(in_oklch,var(--accent)_32%,transparent)] sm:h-28 sm:w-28">
                <Image
                  src={site.photo}
                  alt={`Foto de ${site.name}`}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover object-top"
                  priority
                />
              </div>
            </div>

            <p className="mb-3 max-w-full px-1 text-[0.65rem] font-semibold tracking-[0.16em] text-accent uppercase sm:mb-4 sm:text-xs sm:tracking-[0.22em]">
              {site.role}
            </p>

            <h1 className="font-display max-w-full text-balance text-4xl leading-tight font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
              {site.name}
            </h1>

            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-xl md:text-2xl">
              {site.subtitle}
            </p>

            <p className="mt-3 text-pretty text-sm font-medium text-foreground/80 sm:mt-4 sm:text-base">
              {site.focus} · React · React Native · Expo
            </p>

            <div className="mt-7 flex w-full max-w-lg flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center">
              {heroButtons.map((button) => {
                const isPrimary = button.kind === "primary"
                const className = isPrimary
                  ? "inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:px-7 sm:text-base"
                  : "inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto sm:px-7 sm:text-base"

                if (button.external) {
                  return (
                    <a
                      key={button.label}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      <Github className="h-4 w-4 shrink-0" aria-hidden />
                      {button.label}
                    </a>
                  )
                }

                return (
                  <a key={button.label} href={button.href} className={className}>
                    {button.label}
                    {isPrimary ? <ArrowDown className="h-4 w-4 shrink-0" aria-hidden /> : null}
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
