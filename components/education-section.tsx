import { GraduationCap } from "lucide-react"
import { education } from "@/lib/site"
import { SectionHeading } from "@/components/section-heading"

export function EducationSection() {
  return (
    <section id="educacion" className="section-shell bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Formación" title="Educación" />

        <article className="surface-card mx-auto flex max-w-2xl items-start gap-4 p-6 sm:p-7">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <GraduationCap className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
            <p className="mt-1 font-medium text-accent">{education.school}</p>
            <p className="mt-1 text-sm text-muted-foreground">{education.period}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
