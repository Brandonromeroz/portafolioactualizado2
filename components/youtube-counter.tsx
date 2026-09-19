import { ExternalLink, Youtube } from "lucide-react"
import { site } from "@/lib/site"

export function YouTubeCounter() {
  return (
    <a
      href={site.youtube}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir el canal de YouTube ${site.youtubeName}`}
      className="surface-card group flex w-full min-w-0 flex-col gap-4 p-5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex-row sm:items-center sm:justify-between sm:p-6"
    >
      <div className="flex min-w-0 items-start gap-3 sm:gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-600 text-white sm:h-12 sm:w-12">
          <Youtube className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
        </span>
        <span className="min-w-0">
          <span className="block text-[0.7rem] font-semibold tracking-[0.16em] text-red-600 uppercase dark:text-red-400">
            YouTube
          </span>
          <span className="mt-1 block text-lg font-semibold text-pretty text-foreground sm:text-xl">
            {site.youtubeName}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-pretty text-muted-foreground">
            {site.youtubeBlurb}
          </span>
        </span>
      </div>
      <span className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-red-700 sm:w-auto">
        Ver canal
        <ExternalLink className="h-4 w-4" aria-hidden />
      </span>
    </a>
  )
}
