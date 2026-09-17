import Image from "next/image"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

interface BrandMarkProps {
  className?: string
  showName?: boolean
  nameClassName?: string
}

export function BrandMark({ className, showName = false, nameClassName }: BrandMarkProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className="relative h-9 w-9 overflow-hidden rounded-xl ring-1 ring-border shadow-sm sm:h-10 sm:w-10">
        <Image
          src={site.photo}
          alt={site.name}
          width={40}
          height={40}
          className="h-full w-full object-cover object-top"
        />
      </span>
      {showName ? (
        <span className={cn("font-semibold tracking-tight text-foreground", nameClassName)}>
          {site.firstName}
        </span>
      ) : null}
    </span>
  )
}
