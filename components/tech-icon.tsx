import { 
  Code, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  Video, 
  Youtube, 
  Figma as FigmaIcon,
  GitBranch,
  Container,
  Flame,
  Layers
} from "lucide-react"
import { motion } from "framer-motion"

interface TechIconProps {
  tech: string
  className?: string
  showLabel?: boolean
}

const techConfig = {
  // Frontend
  "html": { 
    icon: Palette, 
    color: "text-orange-500",
    hoverColor: "hover:text-orange-500 hover:bg-orange-500/10",
    name: "HTML"
  },
  "css": { 
    icon: Palette, 
    color: "text-blue-500",
    hoverColor: "hover:text-blue-500 hover:bg-blue-500/10",
    name: "CSS"
  },
  "javascript": { 
    icon: Code, 
    color: "text-yellow-500",
    hoverColor: "hover:text-yellow-500 hover:bg-yellow-500/10",
    name: "JavaScript"
  },
  "typescript": { 
    icon: Code, 
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600 hover:bg-blue-600/10",
    name: "TypeScript"
  },
  "react": { 
    icon: Code, 
    color: "text-cyan-400",
    hoverColor: "hover:text-cyan-400 hover:bg-cyan-400/10",
    name: "React"
  },
  "nextjs": { 
    icon: Globe, 
    color: "text-gray-900 dark:text-white",
    hoverColor: "hover:text-gray-900 hover:bg-gray-900/10 dark:hover:text-white dark:hover:bg-white/10",
    name: "Next.js"
  },
  "astro": { 
    icon: Code, 
    color: "text-orange-500",
    hoverColor: "hover:text-orange-500 hover:bg-orange-500/10",
    name: "Astro"
  },

  // Backend
  "nodejs": { 
    icon: Code, 
    color: "text-green-500",
    hoverColor: "hover:text-green-500 hover:bg-green-500/10",
    name: "Node.js"
  },
  "mongodb": { 
    icon: Database, 
    color: "text-green-600",
    hoverColor: "hover:text-green-600 hover:bg-green-600/10",
    name: "MongoDB"
  },
  "supabase": { 
    icon: Database, 
    color: "text-emerald-500",
    hoverColor: "hover:text-emerald-500 hover:bg-emerald-500/10",
    name: "Supabase"
  },

  // Styling
  "tailwind": { 
    icon: Palette, 
    color: "text-teal-500",
    hoverColor: "hover:text-teal-500 hover:bg-teal-500/10",
    name: "Tailwind CSS"
  },

  // Tools
  "figma": { 
    icon: FigmaIcon, 
    color: "text-pink-500",
    hoverColor: "hover:text-pink-500 hover:bg-pink-500/10",
    name: "Figma"
  },
  "git": { 
    icon: GitBranch, 
    color: "text-orange-600",
    hoverColor: "hover:text-orange-600 hover:bg-orange-600/10",
    name: "Git"
  },
  "docker": { 
    icon: Container, 
    color: "text-blue-600",
    hoverColor: "hover:text-blue-600 hover:bg-blue-600/10",
    name: "Docker"
  },

  // Legacy support
  "vite": { 
    icon: Code, 
    color: "text-purple-500",
    hoverColor: "hover:text-purple-500 hover:bg-purple-500/10",
    name: "Vite"
  },
  "laravel": { 
    icon: Code, 
    color: "text-red-600",
    hoverColor: "hover:text-red-600 hover:bg-red-600/10",
    name: "Laravel"
  },
}

export function TechIcon({ tech, className = "h-5 w-5", showLabel = false }: TechIconProps) {
  const config = techConfig[tech.toLowerCase() as keyof typeof techConfig]
  
  if (!config) {
    return (
      <motion.div 
        whileHover={{ scale: 1.1 }}
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 hover:bg-gray-200/50 dark:hover:bg-gray-800/50 transition-all duration-200 ${showLabel ? 'text-xs font-medium' : ''}`}
      >
        <Code className={className} />
        {showLabel && <span>{tech}</span>}
      </motion.div>
    )
  }
  
  const IconComponent = config.icon
  
  if (showLabel) {
    return (
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${config.hoverColor} transition-all duration-200 text-sm font-medium cursor-pointer shadow-sm hover:shadow-md`}
      >
        <IconComponent className={`${className} ${config.color}`} />
        <span>{config.name}</span>
      </motion.div>
    )
  }
  
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="inline-block"
    >
      <IconComponent className={`${className} ${config.color} transition-colors duration-200`} />
    </motion.div>
  )
}