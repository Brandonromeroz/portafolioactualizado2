export const site = {
  name: "Brandon Romero",
  legalName: "Brandon Romero Zavala",
  shortName: "Brandon Romero",
  firstName: "Brandon",
  role: "Software Engineer",
  focus: "Frontend + Mobile",
  subtitle: "Building modern web & mobile experiences with React and React Native.",
  description:
    "Software Engineer focused on frontend and mobile — React, React Native, and Expo. Currently at Black Sheep, working on published App Store apps with the team.",
  descriptionEs:
    "Software Engineer enfocado en frontend y mobile. Interfaces web y apps iOS/Android con React, React Native y Expo. Actualmente en Black Sheep.",
  email: "romerozavalabrandon@gmail.com",
  phoneDisplay: "+52 729 895 8841",
  whatsapp: "https://wa.me/527298958841",
  location: "Ecatepec de Morelos, México",
  github: "https://github.com/Brandonromeroz",
  linkedin: "https://www.linkedin.com/in/brandon-romero-zavala-8247a6267",
  youtube: "https://www.youtube.com/@BrandonYRubenTV",
  youtubeName: "Somos Brandon y Rubén TV",
  cvPath: "/Cv BrandonRomeroZ.pdf",
  cvDownloadName: "CV_Brandon_Romero_Zavala.pdf",
  photo: "/devbran.jpg",
  url: "https://portfoliobrandondev.vercel.app",
  title: "Brandon Romero — Software Engineer",
} as const

export const appStoreUrls = {
  hagamosCine: "https://apps.apple.com/mx/app/hagamos-cine/id6764647013",
  redMexicoEmprende: "https://apps.apple.com/mx/app/red-m%C3%A9xico-emprende/id6761429362",
} as const

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "habilidades", label: "Habilidades" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
] as const

export const experience = [
  {
    company: "Black Sheep",
    team: "Black Sheep Labs",
    role: "Software Engineer",
    period: "Octubre 2025 — Presente",
    current: true,
    description:
      "Participo en el equipo en interfaces web y apps iOS/Android. Trabajo con React, React Native y Expo, integración de APIs, PostgreSQL y Docker, y en el mantenimiento de productos en producción: nuevas funcionalidades y corrección de errores.",
    technologies: ["React", "React Native", "Expo", "TypeScript", "PostgreSQL", "Docker"],
  },
] as const

export type ProjectKind = "mobile" | "saas"

export type FeaturedProject = {
  id: string
  title: string
  kind: ProjectKind
  subtitle: string
  badge: string
  description: string
  attribution: string
  technologies: readonly string[]
  storeUrl?: string
  storeLabel?: string
  mockupSlots: readonly string[]
  screenshots: readonly string[]
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: "hagamos-cine",
    title: "Hagamos Cine",
    kind: "mobile",
    subtitle: "Mobile App · iOS / Android",
    badge: "Live on App Store",
    description:
      "App de redes sociales para colaboración en producción audiovisual. La ficha pública describe perfiles por especialidad, convocatorias, organización de equipos, seguimiento de tareas, comunicación interna, notificaciones, bookmarks y mensajes. Disponible para iPhone, iPad y Apple Watch. © Black Sheep Labs.",
    attribution:
      "Producto del equipo Black Sheep Labs. Participé como Software Engineer / Mobile Developer — no soy el autor único.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "iOS",
      "Android",
      "Apple Watch",
      "Widgets",
      "Push Notifications",
      "App Groups",
    ],
    storeUrl: appStoreUrls.hagamosCine,
    storeLabel: "View on App Store",
    mockupSlots: ["Pantalla 1", "Pantalla 2", "Pantalla 3"],
    screenshots: [],
  },
  {
    id: "red-mexico-emprende",
    title: "Red México Emprende",
    kind: "mobile",
    subtitle: "Mobile App · iOS / Android",
    badge: "Live on App Store",
    description:
      "App de networking para emprendedores de la Red Nacional México Emprende. La ficha pública incluye comunidad, eventos, membresías, boletería con QR, cursos, blogs, TV en vivo, revistas digitales y directorio de empresas. Disponible para iPhone e iPad; compatible con Wallet. © Black Sheep Labs.",
    attribution:
      "Producto del equipo Black Sheep Labs. Participé como Software Engineer / Mobile Developer — no soy el autor único.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "PostgreSQL",
      "JWT",
      "Mercado Pago",
      "QR",
      "Apple Wallet",
      "Google Wallet",
      "Sign in with Apple",
    ],
    storeUrl: appStoreUrls.redMexicoEmprende,
    storeLabel: "View on App Store",
    mockupSlots: ["Pantalla 1", "Pantalla 2", "Pantalla 3"],
    screenshots: [],
  },
  {
    id: "hum",
    title: "HÜM",
    kind: "saas",
    subtitle: "SaaS · En desarrollo",
    badge: "In progress",
    description:
      "Plataforma SaaS de gestión multiempresa. En desarrollo con Next.js, React, TypeScript, Tailwind CSS y PostgreSQL.",
    attribution: "Producto en construcción. Solo se listan el propósito y el stack confirmados.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    mockupSlots: ["Interfaz web"],
    screenshots: [],
  },
] as const

export const skillCategories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Mobile",
    items: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    name: "Backend / Data",
    items: ["PostgreSQL", "APIs", "JWT"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub", "Docker"],
  },
] as const

export const education = {
  degree: "Ingeniería en Software",
  school: "Universidad Politécnica de Tecámac",
  period: "2020 — 2025",
} as const

export const aboutParagraphs = [
  "Soy Software Engineer. Me gusta construir productos digitales, sobre todo interfaces y aplicaciones móviles.",
  "Hoy me enfoco en React, React Native y Expo: web, iOS y Android. También trabajo con TypeScript, PostgreSQL y Docker cuando el producto lo pide. El backend no es el centro de mi perfil.",
] as const

export const heroButtons = [
  { href: "#proyectos", label: "View Projects", kind: "primary" as const, external: false },
  { href: site.github, label: "GitHub", kind: "secondary" as const, external: true },
  { href: "#contacto", label: "Contact", kind: "secondary" as const, external: false },
] as const

export function isAppStoreProject(
  project: FeaturedProject,
): project is FeaturedProject & { storeUrl: string; storeLabel: string } {
  return Boolean(project.storeUrl && project.storeLabel)
}
