import Image from "next/image"
import { Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

type PhoneMockupProps = {
  label: string
  src?: string
  alt?: string
  className?: string
  offset?: "left" | "center" | "right"
}

export function PhoneMockup({ label, src, alt, className, offset = "center" }: PhoneMockupProps) {
  return (
    <figure
      className={cn(
        "relative aspect-[9/19.5] w-[9.25rem] shrink-0 overflow-hidden rounded-[1.85rem] border-[7px] border-zinc-800 bg-zinc-950 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.65)] sm:w-[10.5rem] md:w-[11.25rem]",
        offset === "left" && "md:-rotate-6 md:translate-y-4",
        offset === "right" && "md:rotate-6 md:translate-y-4",
        offset === "center" && "md:-translate-y-2 md:z-10",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center pt-2">
        <span className="h-3.5 w-16 rounded-full bg-zinc-800" aria-hidden />
      </div>
      {src ? (
        <Image src={src} alt={alt ?? label} fill className="object-cover object-top" sizes="180px" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_50%_20%,color-mix(in_oklch,var(--accent)_18%,transparent),transparent_55%)] px-4 text-center">
          <Smartphone className="h-6 w-6 text-zinc-500" aria-hidden />
          <figcaption className="text-[11px] leading-snug text-zinc-400">
            <span className="mb-1 block text-[10px] font-semibold tracking-[0.16em] text-zinc-500 uppercase">
              Mockup
            </span>
            {label}
          </figcaption>
        </div>
      )}
    </figure>
  )
}

type PhoneMockupRowProps = {
  slots: readonly string[]
  screenshots?: readonly string[]
  title: string
}

export function PhoneMockupRow({ slots, screenshots = [], title }: PhoneMockupRowProps) {
  const offsets = ["left", "center", "right"] as const

  return (
    <div
      className="flex items-end justify-center gap-3 overflow-x-auto pb-2 sm:gap-4 md:overflow-visible"
      role="group"
      aria-label={`Espacios de mockup para ${title}`}
    >
      {slots.map((slot, index) => (
        <PhoneMockup
          key={`${title}-${slot}`}
          label={slot}
          src={screenshots[index]}
          alt={screenshots[index] ? `${title} — ${slot}` : undefined}
          offset={offsets[index] ?? "center"}
        />
      ))}
    </div>
  )
}
