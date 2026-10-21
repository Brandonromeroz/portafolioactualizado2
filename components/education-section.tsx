import { Award, GraduationCap } from "lucide-react"
import { certifications, education } from "@/lib/site"
import { SectionHeading } from "@/components/section-heading"

export function EducationSection() {
  return (
    <section id="educacion" className="section-shell bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Formación"
          title="Educación"
          description="Ingeniería en Software y certificaciones de Fundación Carlos Slim."
        />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <article className="surface-card flex items-start gap-4 p-6 sm:p-7">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <GraduationCap className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
              <p className="mt-1 font-medium text-accent">{education.school}</p>
              <p className="mt-1 text-sm text-muted-foreground">{education.period}</p>
            </div>
          </article>

          <article className="surface-card p-6 sm:p-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Award className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Certificaciones</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((item) => (
                <li key={`${item.name}-${item.date}`} className="text-sm leading-relaxed">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="text-muted-foreground">
                    {" "}
                    · {item.issuer} · {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
