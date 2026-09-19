export const site = {
  name: "Brandon Romero",
  legalName: "Brandon Romero Zavala",
  shortName: "Brandon Romero",
  firstName: "Brandon",
  role: "Full Stack Software Engineer",
  focus: "Web + Mobile",
  subtitle: "Building modern web and mobile products with React, React Native, APIs, and PostgreSQL.",
  description:
    "Full Stack Software Engineer — web and mobile. I build products with React, React Native, Expo, APIs, PostgreSQL, and Docker. Currently at Black Sheep, shipping apps on the App Store.",
  descriptionEs:
    "Full Stack Software Engineer. Productos web y apps iOS/Android con React, React Native, Expo, APIs y PostgreSQL. Actualmente en Black Sheep.",
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
  title: "Brandon Romero — Full Stack Software Engineer",
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
    role: "Full Stack Software Engineer",
    period: "Octubre 2025 — Presente",
    current: true,
    description:
      "En Black Sheep Labs construyo productos web y móviles de punta a punta: interfaces en React, apps iOS/Android con React Native y Expo, APIs, PostgreSQL y Docker. Entrego funcionalidades en producción y mantengo las apps publicadas en el App Store.",
    technologies: ["React", "React Native", "Expo", "TypeScript", "APIs", "PostgreSQL", "Docker"],
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
  company?: string
  logo?: string
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
      "Red social para profesionales de la industria audiovisual: perfiles por especialidad, convocatorias, equipos de producción, tareas, chat y notificaciones. Publicada en el App Store para iPhone, iPad y Apple Watch.",
    company: "Black Sheep Labs",
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
    mockupSlots: ["Red profesional", "Oportunidades", "Perfiles"],
    screenshots: [
      "/projects/hagamos-cine/hagamos-1.jpg",
      "/projects/hagamos-cine/hagamos-2.jpg",
      "/projects/hagamos-cine/hagamos-3.jpg",
      "/projects/hagamos-cine/hagamos-4.jpg",
      "/projects/hagamos-cine/hagamos-5.jpg",
    ],
  },
  {
    id: "red-mexico-emprende",
    title: "Red México Emprende",
    kind: "mobile",
    subtitle: "Mobile App · iOS / Android",
    badge: "Live on App Store",
    description:
      "App de networking para la Red Nacional México Emprende. Comunidad, eventos, membresías, boletos con QR, cursos, TV en vivo y directorio de empresas. En el App Store, con Apple Wallet y Google Wallet.",
    company: "Black Sheep Labs",
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
    mockupSlots: ["Inicio", "Mensajes", "Eventos"],
    screenshots: [
      "/projects/rnme/rnme-1.jpg",
      "/projects/rnme/rnme-2.jpg",
      "/projects/rnme/rnme-3.jpg",
      "/projects/rnme/rnme-4.jpg",
    ],
  },
  {
    id: "hum",
    title: "HÜM",
    kind: "saas",
    subtitle: "SaaS · En desarrollo",
    badge: "In progress",
    description:
      "SaaS de gestión multiempresa. Lo construyo con Next.js, React, TypeScript, Tailwind CSS y PostgreSQL — interfaz, API y datos en el mismo ciclo.",
    logo: "/projects/hum/hum-logo.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    mockupSlots: ["Landing"],
    screenshots: ["/projects/hum/hum-landing-1.png"],
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
    name: "Backend",
    items: ["APIs", "PostgreSQL", "JWT"],
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
  "Soy Full Stack Software Engineer. Diseño y construyo productos digitales — web, mobile y la capa de datos que los sostiene.",
  "Trabajo con React, React Native y Expo, y cierro el ciclo con TypeScript, APIs, PostgreSQL y Docker.",
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
