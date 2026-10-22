import type { ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { BrandMark } from "@/components/brand-mark"
import { Footer } from "@/components/footer"
import { ThemeToggle } from "@/components/theme-toggle"
import { site } from "@/lib/site"

const privacy = {
  appName: "BR TV Publicador",
  owner: "Brandon Zavala Romero",
  email: "brandonromerozavala@gmail.com",
  updated: "22 de octubre de 2026",
  updatedEn: "October 22, 2026",
  revokeUrl: "https://myaccount.google.com/permissions",
  googlePrivacyUrl: "https://policies.google.com/privacy",
  youtubeTermsUrl: "https://www.youtube.com/t/terms",
  youtubeApiTermsUrl: "https://developers.google.com/youtube/terms/api-services-terms-of-service",
  googleUserDataPolicyUrl: "https://developers.google.com/terms/api-services-user-data-policy",
} as const

const description =
  "Política de privacidad de BR TV Publicador: acceso a datos del canal de YouTube Somos Brandon y Rubén TV, uso exclusivo del titular y cómo revocar el permiso de Google."

export const metadata: Metadata = {
  title: "Política de privacidad",
  description,
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Política de privacidad",
    description,
    url: "/privacidad",
    type: "website",
    locale: "es_MX",
  },
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {children}
    </a>
  )
}

export default function PrivacidadPage() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Saltar al contenido
      </a>

      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <BrandMark showName nameClassName="text-lg" />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Portafolio
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="contenido" className="px-4 py-16 sm:px-6 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.22em] text-accent uppercase sm:text-xs">
            {privacy.appName}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Política de privacidad
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">Última actualización: {privacy.updated}</p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {privacy.appName} es una aplicación de OAuth de Google de {privacy.owner}. Sirve para que el titular
            suba y programe videos y consulte las estadísticas de su propio canal de YouTube,{" "}
            <ExternalLink href={site.youtube}>{site.youtubeName}</ExternalLink>. La aplicación pertenece al
            proyecto de Google Cloud del mismo nombre y usa YouTube Data API v3 y YouTube Analytics API. Esta
            política explica qué datos puede consultar, con qué finalidad y cómo retirar el acceso.
          </p>

          <div className="mt-12 space-y-10">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Responsable</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                El responsable del tratamiento es {privacy.owner}, titular del canal {site.youtubeName}. Para
                cualquier consulta sobre esta política o sobre los datos de la aplicación, escribe a{" "}
                <a
                  href={`mailto:${privacy.email}`}
                  className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {privacy.email}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3 border-t border-border pt-10">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Datos a los que accede
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Cuando el titular autoriza {privacy.appName} con su cuenta de Google, la aplicación puede
                acceder únicamente a datos de ese canal:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                <li>Información del canal de YouTube, como el nombre y el identificador del canal.</li>
                <li>
                  Datos de los videos necesarios para subirlos, programarlos y consultar su estado, incluidos
                  título, descripción y metadatos de publicación.
                </li>
                <li>
                  Estadísticas de YouTube del propio canal, obtenidas con YouTube Analytics API, como
                  reproducciones y métricas de rendimiento.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground">
                El acceso se limita a la cuenta que otorga el permiso. La aplicación no está pensada para
                gestionar canales de otras personas.
              </p>
            </section>

            <section className="space-y-3 border-t border-border pt-10">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Finalidad</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Los datos se usan solo para la gestión del propio canal {site.youtubeName}: subir y programar
                videos y leer sus estadísticas. No se utilizan para publicidad, para elaborar perfiles de
                terceros ni para ningún fin distinto de esa gestión.
              </p>
            </section>

            <section className="space-y-3 border-t border-border pt-10">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Los datos no se venden ni se comparten
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                La información del canal, los videos y las estadísticas no se venden ni se comparten con
                terceros. Tampoco se ceden a anunciantes ni se usan para entrenar modelos. Permanecen bajo el
                control del titular y solo se consultan a través de las APIs de Google para las funciones
                descritas.
              </p>
            </section>

            <section className="space-y-3 border-t border-border pt-10">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Tokens y almacenamiento
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Los tokens de OAuth (de acceso y de actualización) se guardan de forma privada, con acceso
                restringido al titular de la aplicación. No se publican, no se incluyen en repositorios
                públicos y no se comparten con terceros. Sirven únicamente para mantener la autorización y
                ejecutar las acciones del canal.
              </p>
            </section>

            <section className="space-y-3 border-t border-border pt-10">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Cómo revocar el acceso
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Puedes retirar el permiso de {privacy.appName} en cualquier momento desde los permisos de tu
                cuenta de Google:{" "}
                <ExternalLink href={privacy.revokeUrl}>{privacy.revokeUrl}</ExternalLink>. Al revocarlo, la
                aplicación deja de poder usar las APIs de YouTube en tu nombre. Si quieres que también se
                eliminen los tokens almacenados, escríbele a{" "}
                <a
                  href={`mailto:${privacy.email}`}
                  className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {privacy.email}
                </a>
                .
              </p>
            </section>

            <section className="space-y-3 border-t border-border pt-10">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Políticas de Google y términos de YouTube
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                El uso y la transferencia de la información recibida de las APIs de Google se ajustan a la{" "}
                <ExternalLink href={privacy.googleUserDataPolicyUrl}>
                  Política de datos de usuario de los servicios de API de Google
                </ExternalLink>
                , incluidos los requisitos de uso limitado (Limited Use).
              </p>
              <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                <li>
                  <ExternalLink href={privacy.googlePrivacyUrl}>Política de privacidad de Google</ExternalLink>
                </li>
                <li>
                  <ExternalLink href={privacy.youtubeTermsUrl}>Términos del Servicio de YouTube</ExternalLink>
                </li>
                <li>
                  <ExternalLink href={privacy.youtubeApiTermsUrl}>
                    Términos de los servicios de la API de YouTube
                  </ExternalLink>
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted-foreground">
                YouTube es una marca de Google LLC. {privacy.appName} usa las APIs autorizadas y no está
                respaldada por Google ni por YouTube.
              </p>
            </section>

            <section className="space-y-3 border-t border-border pt-10">
              <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Contacto</h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {privacy.owner}
                <br />
                <a
                  href={`mailto:${privacy.email}`}
                  className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {privacy.email}
                </a>
              </p>
            </section>
          </div>

          <section
            lang="en"
            className="surface-card mt-14 p-6 sm:p-8"
            aria-labelledby="english-summary-heading"
          >
            <p className="mb-3 text-[0.7rem] font-semibold tracking-[0.22em] text-accent uppercase sm:text-xs">
              English
            </p>
            <h2
              id="english-summary-heading"
              className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
            >
              Privacy policy summary
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                {privacy.appName} is a Google OAuth application by {privacy.owner}. It uses the YouTube Data
                API v3 and the YouTube Analytics API only so the owner can upload or schedule videos and read
                statistics for his own channel, {site.youtubeName}.
              </p>
              <p>
                The app may access channel information, video data, and YouTube statistics. That information
                is not sold and is not shared with third parties. OAuth tokens are stored privately and are
                not published. You can revoke access at any time at{" "}
                <ExternalLink href={privacy.revokeUrl}>{privacy.revokeUrl}</ExternalLink>.
              </p>
              <p>
                See the{" "}
                <ExternalLink href={privacy.googlePrivacyUrl}>Google Privacy Policy</ExternalLink> and the{" "}
                <ExternalLink href={privacy.youtubeTermsUrl}>YouTube Terms of Service</ExternalLink>. Contact:{" "}
                <a
                  href={`mailto:${privacy.email}`}
                  className="font-medium text-accent underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {privacy.email}
                </a>
                . Last updated: {privacy.updatedEn}.
              </p>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </>
  )
}
