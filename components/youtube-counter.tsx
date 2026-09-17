"use client"

import { useState, useEffect } from "react"
import { Youtube } from "lucide-react"

const BASE_SUBSCRIBERS = 900

export function YouTubeCounter() {
  const [subscribers, setSubscribers] = useState(BASE_SUBSCRIBERS)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 700)

    const updateInterval = setInterval(() => {
      const variation = Math.floor(Math.random() * 3) - 1
      setSubscribers((prev) => Math.max(BASE_SUBSCRIBERS, prev + variation))
    }, 30000)

    return () => {
      clearTimeout(timer)
      clearInterval(updateInterval)
    }
  }, [])

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-900/50 dark:bg-red-950/30">
      <Youtube className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400" />
      <span className="font-semibold text-red-700 dark:text-red-300">YouTube</span>

      <div className="flex min-w-0 items-center gap-2">
        {isLoading ? (
          <div className="flex items-center gap-1" aria-hidden>
            <div className="h-2 w-2 animate-bounce rounded-full bg-red-600" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:0.1s]" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-red-600 [animation-delay:0.2s]" />
          </div>
        ) : (
          <>
            <span className="font-display text-2xl font-bold text-red-700 tabular-nums dark:text-red-300">
              {subscribers.toLocaleString("es-MX")}
            </span>
            <span className="text-sm text-red-700/80 dark:text-red-300/80">suscriptores</span>
          </>
        )}
      </div>

      <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" title="En vivo" />
    </div>
  )
}
