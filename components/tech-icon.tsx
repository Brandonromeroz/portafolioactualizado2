"use client"

import {
  Code,
  Database,
  Palette,
  Globe,
  GitBranch,
  Container,
  Figma as FigmaIcon,
} from "lucide-react"
import { motion } from "framer-motion"

interface TechIconProps {
  tech: string
  className?: string
  showLabel?: boolean
}

const techConfig = {
  html: {
    icon: Palette,
    color: "text-orange-500",
    name: "HTML",
  },
  css: {
    icon: Palette,
    color: "text-blue-500",
    name: "CSS",
  },
  javascript: {
    icon: Code,
    color: "text-yellow-500",
    name: "JavaScript",
  },
  typescript: {
    icon: Code,
    color: "text-blue-600 dark:text-blue-400",
    name: "TypeScript",
  },
  react: {
    icon: Code,
    color: "text-cyan-500",
    name: "React",
  },
  nextjs: {
    icon: Globe,
    color: "text-foreground",
    name: "Next.js",
  },
  astro: {
    icon: Code,
    color: "text-orange-500",
    name: "Astro",
  },
  nodejs: {
    icon: Code,
    color: "text-green-500",
    name: "Node.js",
  },
  mongodb: {
    icon: Database,
    color: "text-green-600 dark:text-green-400",
    name: "MongoDB",
  },
  supabase: {
    icon: Database,
    color: "text-emerald-500",
    name: "Supabase",
  },
  tailwind: {
    icon: Palette,
    color: "text-teal-500",
    name: "Tailwind CSS",
  },
  figma: {
    icon: FigmaIcon,
    color: "text-pink-500",
    name: "Figma",
  },
  git: {
    icon: GitBranch,
    color: "text-orange-600 dark:text-orange-400",
    name: "Git",
  },
  docker: {
    icon: Container,
    color: "text-blue-600 dark:text-blue-400",
    name: "Docker",
  },
  vite: {
    icon: Code,
    color: "text-purple-500",
    name: "Vite",
  },
  laravel: {
    icon: Code,
    color: "text-red-600 dark:text-red-400",
    name: "Laravel",
  },
}

export function TechIcon({ tech, className = "h-5 w-5", showLabel = false }: TechIconProps) {
  const config = techConfig[tech.toLowerCase() as keyof typeof techConfig]

  if (!config) {
    return (
      <span className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1 text-muted-foreground">
        <Code className={className} />
        {showLabel ? <span className="text-xs font-medium">{tech}</span> : null}
      </span>
    )
  }

  const IconComponent = config.icon

  if (showLabel) {
    return (
      <motion.span
        whileHover={{ y: -2 }}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground shadow-sm"
      >
        <IconComponent className={`${className} ${config.color}`} />
        <span>{config.name}</span>
      </motion.span>
    )
  }

  return <IconComponent className={`${className} ${config.color}`} />
}
