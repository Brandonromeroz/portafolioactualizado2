"use client"
import { useState, useEffect } from "react"
import { Youtube } from "lucide-react"

export function YouTubeCounter() {
  const [subscribers, setSubscribers] = useState(970)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading and then show the counter
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    // Simulate real-time updates (you'll replace this with actual API calls)
    const updateInterval = setInterval(() => {
      // Simulate small fluctuations in subscriber count
      const variation = Math.floor(Math.random() * 3) - 1 // -1, 0, or 1
      setSubscribers(prev => Math.max(970, prev + variation))
    }, 30000) // Update every 30 seconds

    return () => {
      clearTimeout(timer)
      clearInterval(updateInterval)
    }
  }, [])

  // TODO: Replace with actual YouTube API integration
  // const fetchSubscribers = async () => {
  //   try {
  //     const response = await fetch('/api/youtube-stats')
  //     const data = await response.json()
  //     setSubscribers(data.subscriberCount)
  //   } catch (error) {
  //     console.error('Error fetching YouTube stats:', error)
  //   }
  // }

  return (
    <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
      <div className="flex items-center gap-2">
        <Youtube className="h-5 w-5 text-red-600" />
        <span className="font-semibold text-red-600">YouTube</span>
      </div>
      
      <div className="flex items-center gap-2">
        {isLoading ? (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        ) : (
          <>
            <span className="text-2xl font-bold text-red-600 font-mono">
              {subscribers.toLocaleString()}
            </span>
            <span className="text-sm text-red-600/80">suscriptores</span>
          </>
        )}
      </div>
      
      <div className="ml-auto">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="En vivo" />
      </div>
    </div>
  )
}