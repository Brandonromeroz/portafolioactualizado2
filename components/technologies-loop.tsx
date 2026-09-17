"use client"

import { TechIcon } from "./tech-icon"
import { SectionHeading } from "@/components/section-heading"

const technologies = [
  "react",
  "nextjs",
  "typescript",
  "tailwind",
  "nodejs",
  "mongodb",
  "figma",
  "git",
  "docker",
  "html",
  "css",
  "javascript",
  "astro",
]

export function TechnologiesLoop() {
  const loopItems = [...technologies, ...technologies]

  return (
    <section id="habilidades" className="section-shell overflow-hidden bg-background">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Habilidades"
          title="Tecnologías que utilizo"
          description="Herramientas y tecnologías modernas para crear experiencias digitales excepcionales."
        />

        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex w-max gap-3 pr-3 sm:gap-4 sm:pr-4">
              {loopItems.map((tech, index) => (
                <div key={`${tech}-${index}`} className="flex-shrink-0">
                  <TechIcon tech={tech} showLabel className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent sm:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent sm:w-16" />
        </div>
      </div>
    </section>
  )
}
