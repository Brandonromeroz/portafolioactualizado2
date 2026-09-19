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
        "relative aspect-[9/19.5] w-[10rem] shrink-0 overflow-hidden rounded-[1.35rem] bg-zinc-950 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.7)] ring-1 ring-white/15 sm:w-[11.25rem] md:w-[12.25rem]",
        offset === "left" && "md:-rotate-6 md:translate-y-4",
        offset === "right" && "md:rotate-6 md:translate-y-4",
        offset === "center" && "md:-translate-y-2 md:z-10",
        className,
      )}
    >
      {src ? (
        <Image src={src} alt={alt ?? label} fill className="object-cover" sizes="200px" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 border border-dashed border-zinc-500/70 bg-zinc-800/90 px-4 text-center">
          <Smartphone className="h-6 w-6 text-zinc-300" aria-hidden />
          <figcaption className="text-[11px] leading-snug text-zinc-200">
            <span className="mb-1 block text-[10px] font-semibold tracking-[0.16em] text-zinc-300 uppercase">
              Captura
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
  const featured = screenshots.slice(0, 3)
  const items =
    featured.length > 0
      ? featured.map((src, index) => ({
          src,
          label: slots[index] ?? `Pantalla ${index + 1}`,
        }))
      : slots.map((label) => ({ src: undefined, label }))

  return (
    <div
      className="flex items-end justify-center gap-3 overflow-x-auto pb-2 sm:gap-4 md:overflow-visible"
      role="group"
      aria-label={`Capturas de ${title}`}
    >
      {items.map((item, index) => (
        <PhoneMockup
          key={`${title}-${item.label}-${index}`}
          label={item.label}
          src={item.src}
          alt={`${title} — ${item.label}`}
          offset={offsets[index] ?? "center"}
        />
      ))}
    </div>
  )
}

type SaasMockupProps = {
  title: string
  screenshot?: string
  logo?: string
}

export function SaasMockup({ title, screenshot, logo }: SaasMockupProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_24px_50px_-18px_rgba(0,0,0,0.45)] dark:bg-zinc-950"
      role="img"
      aria-label={`Vista de producto de ${title}`}
    >
      <div className="flex items-center gap-2 border-b border-zinc-200/80 bg-zinc-50 px-4 py-2.5 dark:border-zinc-800 dark:bg-zinc-900">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" aria-hidden />
        <span className="ml-2 truncate text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="relative aspect-[16/10] min-h-[16rem] bg-gradient-to-br from-sky-50 via-white to-fuchsia-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-indigo-950">
        {logo ? (
          <div className="absolute top-5 left-5 z-10 w-28 sm:w-36">
            <Image src={logo} alt={`Logotipo de ${title}`} width={1994} height={789} className="h-auto w-full" />
          </div>
        ) : null}
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${title} — visual de producto`}
            fill
            className="object-contain object-bottom p-3 pt-16 sm:p-5 sm:pt-20"
            sizes="(min-width: 1024px) 640px, 100vw"
          />
        ) : (
          <p className="flex h-full items-center justify-center text-sm text-muted-foreground">Vista de producto</p>
        )}
      </div>
    </div>
  )
}
