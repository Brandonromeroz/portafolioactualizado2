export const site = {
  name: "Brandon Romero",
  legalName: "Brandon Romero Zavala",
  shortName: "Brandon Romero",
  firstName: "Brandon",
  role: "Ingeniero de Software Full Stack",
  focus: "Web y mobile",
  headline:
    "Ingeniero de Software Full Stack | React, React Native, Next.js, TypeScript, PostgreSQL | Apps publicadas en App Store",
  subtitle: "Productos web y apps con React, React Native, Next.js, TypeScript y PostgreSQL.",
  description:
    "Ingeniero de Software Full Stack. Productos web y apps con React, React Native, Expo, Next.js, TypeScript, PostgreSQL y Docker. Apps publicadas en el App Store.",
  descriptionEs:
    "Ingeniero de Software Full Stack. Productos web y apps con React, React Native, Expo, Next.js, TypeScript, PostgreSQL y Docker. Apps publicadas en el App Store.",
  email: "romerozavalabrandon@gmail.com",
  phoneDisplay: "+52 729 895 8841",
  whatsapp: "https://wa.me/527298958841",
  location: "Ecatepec de Morelos, México",
  github: "https://github.com/Brandonromeroz",
  linkedin: "https://www.linkedin.com/in/brandon-romero-zavala-8247a6267",
  youtube: "https://www.youtube.com/@BrandonYRubenTV",
  youtubeName: "Somos Brandon y Rubén TV",
  youtubeBlurb:
    "Canal de tecnología en YouTube (@BrandonYRubenTV), de enero de 2020 a la fecha.",
  cvPath: "/CV_Brandon_Romero_Zavala.pdf",
  cvDownloadName: "CV_Brandon_Romero_Zavala.pdf",
  photo: "/devbran.jpg",
  url: "https://portfoliobrandondev.vercel.app",
  title: "Brandon Romero — Ingeniero de Software Full Stack",
} as const

export const appStoreUrls = {
  hagamosCine: "https://apps.apple.com/mx/app/hagamos-cine/id6764647013",
  redNacionalMexicoEmprende: "https://apps.apple.com/mx/app/id6761429362",
  stick: "https://apps.apple.com/mx/app/stick-by-black-sheep/id6760153552",
} as const

export const projectUrls = {
  hum: "https://fyttsatalent.com",
} as const

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "proyectos", label: "Proyectos" },
  { id: "experiencia", label: "Experiencia" },
  { id: "habilidades", label: "Habilidades" },
  { id: "youtube", label: "YouTube" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
] as const

export const experience = [
  {
    company: "Somos Brandon y Rubén TV",
    team: "YouTube · @BrandonYRubenTV",
    role: "Creador de contenido tech",
    period: "Enero 2020 — Presente",
    current: false,
    description:
      "Canal de tecnología en YouTube (@BrandonYRubenTV), de enero de 2020 a la fecha.",
    technologies: [],
  },
  {
    company: "SKY DELIVER (Grupo AB)",
    team: "",
    role: "Desarrollador web",
    period: "Marzo 2025 — Junio 2025",
    current: false,
    description:
      "Desarrollo de una plataforma web para pedidos automatizados con drones: base de datos MongoDB para usuarios, pedidos y rutas de entrega, y una API REST para la comunicación entre la web y los drones. Resultado: reducción de errores y tiempos de operación en 30%.",
    technologies: ["MongoDB", "REST APIs"],
  },
  {
    company: "AI KOI (Fundación)",
    team: "",
    role: "Desarrollador web",
    period: "Septiembre 2024 — Diciembre 2024",
    current: false,
    description:
      "Desarrollo de la página principal y módulos para cursos en línea. Implementación de pasarelas de pago y automatización de procesos. Resultado: reducción de tiempos administrativos en 40%.",
    technologies: [],
  },
  {
    company: "Sherwin-Williams",
    team: "",
    role: "Colaboración en drones y sitio web",
    period: "",
    current: false,
    description:
      "Participé en la construcción de drones para un servicio de entrega a domicilio y desarrollé el sitio web de ese servicio.",
    technologies: [],
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
  websiteUrl?: string
  websiteLabel?: string
  mockupSlots: readonly string[]
  screenshots: readonly string[]
}

export const featuredProjects: readonly FeaturedProject[] = [
  {
    id: "hagamos-cine",
    title: "Hagamos Cine",
    kind: "mobile",
    subtitle: "App móvil · iOS / Android",
    badge: "En el App Store",
    description:
      "Red social para profesionales de la industria audiovisual: perfiles por especialidad, convocatorias, equipos de producción, tareas, chat y notificaciones. Publicada en el App Store para iPhone, iPad y Apple Watch.",
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
    storeLabel: "Ver en App Store",
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
    title: "Red Nacional México Emprende",
    kind: "mobile",
    subtitle: "App móvil · iOS / Android",
    badge: "En el App Store",
    description:
      "App de networking para la Red Nacional México Emprende. Comunidad, eventos, membresías, boletos con QR, cursos, TV en vivo y directorio de empresas. En el App Store, con Apple Wallet y Google Wallet.",
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
    storeUrl: appStoreUrls.redNacionalMexicoEmprende,
    storeLabel: "Ver en App Store",
    mockupSlots: ["Inicio", "Mensajes", "Eventos"],
    screenshots: [
      "/projects/rnme/rnme-1.jpg",
      "/projects/rnme/rnme-2.jpg",
      "/projects/rnme/rnme-3.jpg",
      "/projects/rnme/rnme-4.jpg",
    ],
  },
  {
    id: "stick",
    title: "Stick",
    kind: "mobile",
    subtitle: "App móvil · iOS",
    badge: "En el App Store",
    description:
      "App publicada en el App Store para organizar tareas y equipos: gestión de proyectos, tableros, calendario y línea de tiempo.",
    technologies: ["iOS"],
    storeUrl: appStoreUrls.stick,
    storeLabel: "Ver en App Store",
    mockupSlots: ["Proyectos", "Tablero", "Inicio"],
    screenshots: [
      "/projects/stick/stick-1.jpg",
      "/projects/stick/stick-2.jpg",
      "/projects/stick/stick-3.jpg",
    ],
  },
  {
    id: "hum",
    title: "HÜM",
    kind: "saas",
    subtitle: "Sitio web · fyttsatalent.com",
    badge: "Sitio web",
    description:
      "Sitio web de una plataforma de recursos humanos. No es una app. Interfaz, API y datos con Next.js, React, TypeScript, Tailwind CSS y PostgreSQL.",
    logo: "/projects/hum/hum-logo.png",
    websiteUrl: projectUrls.hum,
    websiteLabel: "Ver sitio",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    mockupSlots: ["Landing"],
    screenshots: ["/projects/hum/hum-landing-1.png"],
  },
] as const

export const skillCategories = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    name: "Móvil",
    items: ["React Native", "Expo"],
  },
  {
    name: "Datos y APIs",
    items: ["PostgreSQL", "REST APIs"],
  },
  {
    name: "Herramientas",
    items: ["Docker"],
  },
] as const

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "B1" },
] as const

export const certifications = [
  {
    name: "Desarrollador de Contenido Digital",
    issuer: "Fundación Carlos Slim",
    date: "Enero 2024",
  },
  {
    name: "Tester de Software",
    issuer: "Fundación Carlos Slim",
    date: "Septiembre 2023",
  },
  {
    name: "Desarrollador Back-End",
    issuer: "Fundación Carlos Slim",
    date: "Noviembre 2021",
  },
  {
    name: "Programación Orientada a Objetos",
    issuer: "Fundación Carlos Slim",
    date: "Agosto 2021",
  },
] as const

export const education = {
  degree: "Ingeniería en Software",
  school: "Universidad Politécnica de Tecámac",
  period: "2020 — 2025",
} as const

export const aboutParagraphs = [
  "Soy Ingeniero de Software Full Stack. Diseño y construyo productos digitales: web, móvil y la capa de datos que los sostiene.",
  "El stack de producto es React, React Native, Expo, Next.js, TypeScript, PostgreSQL, REST APIs y Docker. Hay tres apps publicadas en el App Store.",
  "Desde enero de 2020 publico contenido de tecnología en el canal de YouTube Somos Brandon y Rubén TV (@BrandonYRubenTV).",
] as const

export const heroButtons = [
  { href: "#proyectos", label: "Ver proyectos", kind: "primary" as const, external: false },
  { href: site.github, label: "GitHub", kind: "secondary" as const, external: true },
  { href: "#contacto", label: "Contacto", kind: "secondary" as const, external: false },
] as const

export function isAppStoreProject(
  project: FeaturedProject,
): project is FeaturedProject & { storeUrl: string; storeLabel: string } {
  return Boolean(project.storeUrl && project.storeLabel)
}

export function isWebsiteProject(
  project: FeaturedProject,
): project is FeaturedProject & { websiteUrl: string; websiteLabel: string } {
  return Boolean(project.websiteUrl && project.websiteLabel)
}
