"use client"

import { useEffect, useState } from "react"
import { Youtube } from "lucide-react"
import { site } from "@/lib/site"

export function YouTubeCounter() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 500)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="flex min-w-0 flex-wrap items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/30">
      <Youtube className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" aria-hidden />
      <span className="font-semibold text-red-700 dark:text-red-300">YouTube</span>
      <div className="flex min-w-0 items-baseline gap-2">
        {ready ? (
          <>
            <span className="font-display text-2xl font-bold text-red-700 tabular-nums dark:text-red-300">
              {site.subscribers}
            </span>
            <span className="text-sm text-red-700/80 dark:text-red-300/80">suscriptores</span>
          </>
        ) : (
          <span className="text-sm text-red-700/80 dark:text-red-300/80" aria-live="polite">
            Cargando…
          </span>
        )}
      </div>
    </div>
  )
}
