#!/usr/bin/env python3
"""Build the Spanish, ATS-friendly CV PDF for Brandon Romero Zavala.

Facts mirror lib/site.ts and the previous CV. Do not add employers, dates,
or skills that are not already recorded there.
"""

from __future__ import annotations

from pathlib import Path

from pypdf import PdfReader
from reportlab.lib.colors import HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    HRFlowable,
    KeepTogether,
    PageTemplate,
    Paragraph,
)

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "CV_Brandon_Romero_Zavala.pdf"
FONT_DIR = Path("/usr/share/fonts/truetype/liberation")

INK = HexColor("#111827")
MUTED = HexColor("#374151")
RULE = HexColor("#D1D5DB")
LINK = HexColor("#1D4ED8")
SECTION = HexColor("#111827")

pdfmetrics.registerFont(TTFont("LibSans", str(FONT_DIR / "LiberationSans-Regular.ttf")))
pdfmetrics.registerFont(TTFont("LibSans-Bold", str(FONT_DIR / "LiberationSans-Bold.ttf")))
pdfmetrics.registerFont(TTFont("LibSans-Italic", str(FONT_DIR / "LiberationSans-Italic.ttf")))
pdfmetrics.registerFont(TTFont("LibSans-BoldItalic", str(FONT_DIR / "LiberationSans-BoldItalic.ttf")))
pdfmetrics.registerFontFamily(
    "LibSans",
    normal="LibSans",
    bold="LibSans-Bold",
    italic="LibSans-Italic",
    boldItalic="LibSans-BoldItalic",
)


def styles() -> dict[str, ParagraphStyle]:
    return {
        "name": ParagraphStyle(
            "name",
            fontName="LibSans-Bold",
            fontSize=16,
            leading=19,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=1,
        ),
        "headline": ParagraphStyle(
            "headline",
            fontName="LibSans",
            fontSize=9.5,
            leading=12.2,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=3,
        ),
        "contact": ParagraphStyle(
            "contact",
            fontName="LibSans",
            fontSize=8.8,
            leading=11.2,
            textColor=MUTED,
            alignment=TA_LEFT,
            spaceAfter=0,
        ),
        "section": ParagraphStyle(
            "section",
            fontName="LibSans-Bold",
            fontSize=11,
            leading=13,
            textColor=SECTION,
            alignment=TA_LEFT,
            spaceBefore=4,
            spaceAfter=1,
        ),
        "body": ParagraphStyle(
            "body",
            fontName="LibSans",
            fontSize=9.5,
            leading=12,
            textColor=INK,
            alignment=TA_LEFT,
            spaceAfter=1,
        ),
        "role": ParagraphStyle(
            "role",
            fontName="LibSans-Bold",
            fontSize=10,
            leading=12.4,
            textColor=INK,
            alignment=TA_LEFT,
            spaceBefore=2,
            spaceAfter=0,
        ),
        "meta": ParagraphStyle(
            "meta",
            fontName="LibSans-Italic",
            fontSize=9,
            leading=11.2,
            textColor=MUTED,
            alignment=TA_LEFT,
            spaceAfter=1,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            fontName="LibSans",
            fontSize=9.5,
            leading=11.5,
            textColor=INK,
            alignment=TA_LEFT,
            leftIndent=12,
            firstLineIndent=-12,
            spaceBefore=0,
            spaceAfter=0,
        ),
        "url": ParagraphStyle(
            "url",
            fontName="LibSans",
            fontSize=9,
            leading=12,
            textColor=LINK,
            alignment=TA_LEFT,
            spaceBefore=0,
            spaceAfter=0,
        ),
    }


def href(url: str, label: str | None = None) -> str:
    visible = label or url
    return f'<link href="{url}" color="#1D4ED8"><u>{visible}</u></link>'


def bullets(items: list[str], style: ParagraphStyle) -> list[Paragraph]:
    return [Paragraph(f"• {item}", style) for item in items]


def section(title: str, style: ParagraphStyle) -> list:
    return [
        Paragraph(title, style),
        HRFlowable(width="100%", thickness=0.5, color=RULE, spaceBefore=0, spaceAfter=1),
    ]


def job(role: str, meta: str, items: list[str], s: dict[str, ParagraphStyle]) -> KeepTogether:
    flow = [Paragraph(role, s["role"])]
    if meta:
        flow.append(Paragraph(meta, s["meta"]))
    flow.extend(bullets(items, s["bullet"]))
    return KeepTogether(flow)


def project(title: str, url: str, summary: str, s: dict[str, ParagraphStyle]) -> KeepTogether:
    return KeepTogether(
        [
            Paragraph(title, s["role"]),
            Paragraph(href(url), s["url"]),
            Paragraph(summary, s["body"]),
        ]
    )


def build() -> None:
    s = styles()
    story: list = [
        Paragraph("Brandon Romero Zavala", s["name"]),
        Paragraph(
            "Ingeniero de Software Full Stack | React, React Native, Next.js, TypeScript, PostgreSQL<br/>Apps publicadas en App Store",
            s["headline"],
        ),
        Paragraph("Ecatepec de Morelos, México · +52 729 895 8841 · romerozavalabrandon@gmail.com", s["contact"]),
        Paragraph(f"LinkedIn: {href('https://www.linkedin.com/in/brandon-romero-zavala-8247a6267')}", s["contact"]),
        Paragraph(f"GitHub: {href('https://github.com/Brandonromeroz')}", s["contact"]),
        Paragraph(f"YouTube: {href('https://www.youtube.com/@BrandonYRubenTV')}", s["contact"]),
        Paragraph(f"Portafolio: {href('https://portfoliobrandondev.vercel.app')}", s["contact"]),
        *section("Perfil", s["section"]),
        Paragraph(
            "Ingeniero de Software Full Stack. Desarrollo productos web y apps con React, React Native, Expo, Next.js, TypeScript, PostgreSQL, REST APIs y Docker. Tres apps publicadas en el App Store.",
            s["body"],
        ),
        *section("Experiencia", s["section"]),
        job(
            "Creador de contenido tech — Somos Brandon y Rubén TV",
            "Enero 2020 — Presente · YouTube @BrandonYRubenTV",
            [
                "Canal de tecnología en YouTube, de enero de 2020 a la fecha.",
            ],
            s,
        ),
        job(
            "Desarrollador web — SKY DELIVER (Grupo AB)",
            "Marzo 2025 — Junio 2025",
            [
                "Desarrollo de una plataforma web para pedidos automatizados con drones.",
                "Diseño de base de datos MongoDB para usuarios, pedidos y rutas de entrega.",
                "Programación de una API REST para la comunicación entre la web y los drones.",
                "Resultado: reducción de errores y tiempos de operación en 30%.",
            ],
            s,
        ),
        job(
            "Desarrollador web — AI KOI (Fundación)",
            "Septiembre 2024 — Diciembre 2024",
            [
                "Desarrollo de la página principal y de módulos para cursos en línea.",
                "Pasarelas de pago y automatización de procesos. Resultado: reducción de tiempos administrativos en 40%.",
            ],
            s,
        ),
        job(
            "Sherwin-Williams",
            "Colaboración en un servicio de entrega a domicilio",
            [
                "Participé en la construcción de drones para un servicio de entrega a domicilio.",
                "Desarrollé el sitio web de ese servicio.",
            ],
            s,
        ),
        *section("Proyectos", s["section"]),
        project(
            "Hagamos Cine — App en el App Store",
            "https://apps.apple.com/mx/app/hagamos-cine/id6764647013",
            "Red social para profesionales del audiovisual: perfiles, convocatorias, equipos, tareas, chat y notificaciones. Publicada para iPhone, iPad y Apple Watch. React Native, Expo y TypeScript.",
            s,
        ),
        project(
            "Red Nacional México Emprende — App en el App Store",
            "https://apps.apple.com/mx/app/id6761429362",
            "App de networking: comunidad, eventos, membresías, boletos con QR, cursos, TV en vivo y directorio de empresas. Apple Wallet y Google Wallet. React Native, Expo, TypeScript y PostgreSQL.",
            s,
        ),
        project(
            "Stick — App en el App Store",
            "https://apps.apple.com/mx/app/stick-by-black-sheep/id6760153552",
            "App publicada en el App Store para organizar tareas y equipos: gestión de proyectos, tableros, calendario y línea de tiempo.",
            s,
        ),
        project(
            "HÜM — Sitio web (no es una app)",
            "https://fyttsatalent.com",
            "Sitio web de una plataforma de recursos humanos. Next.js, React, TypeScript, Tailwind CSS y PostgreSQL.",
            s,
        ),
        KeepTogether(
            [
                *section("Educación", s["section"]),
                Paragraph("Ingeniería en Software — Universidad Politécnica de Tecámac", s["role"]),
                Paragraph("2020 — 2025", s["meta"]),
            ]
        ),
        *section("Certificaciones", s["section"]),
        *bullets(
            [
                "Desarrollador de Contenido Digital — Fundación Carlos Slim — enero 2024",
                "Tester de Software — Fundación Carlos Slim — septiembre 2023",
                "Desarrollador Back-End — Fundación Carlos Slim — noviembre 2021",
                "Programación Orientada a Objetos — Fundación Carlos Slim — agosto 2021",
            ],
            s["bullet"],
        ),
        *section("Habilidades", s["section"]),
        Paragraph(
            "React, React Native, Expo, Next.js, TypeScript, PostgreSQL, REST APIs, Docker.",
            s["body"],
        ),
        Paragraph(
            "Competencias: resolución de problemas, trabajo en equipo, adaptabilidad, gestión del tiempo, comunicación, aprendizaje continuo y ética profesional.",
            s["body"],
        ),
        Paragraph("Idiomas: español nativo. Inglés B1.", s["body"]),
    ]

    doc = BaseDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        title="CV Brandon Romero Zavala",
        author="Brandon Romero Zavala",
        subject="Currículum de Ingeniero de Software Full Stack",
        creator="Brandon Romero Zavala",
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        topMargin=11 * mm,
        bottomMargin=11 * mm,
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="body", showBoundary=0)
    doc.addPageTemplates([PageTemplate(id="cv", frames=[frame], onPage=draw_footer)])
    doc.build(story)
    assert_cv()


def draw_footer(canvas, doc) -> None:
    canvas.saveState()
    canvas.setFillColor(white)
    canvas.setFont("LibSans", 8)
    canvas.setFillColor(MUTED)
    label = f"Brandon Romero Zavala · CV · {doc.page}"
    canvas.drawRightString(A4[0] - 15 * mm, 6.5 * mm, label)
    canvas.restoreState()


def assert_cv() -> None:
    reader = PdfReader(str(OUTPUT))
    pages = len(reader.pages)
    if pages < 1 or pages > 2:
        raise SystemExit(f"CV must be 1 or 2 pages, got {pages}")
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    required = [
        "Ingeniero de Software Full Stack | React, React Native, Next.js, TypeScript, PostgreSQL",
        "Apps publicadas en App Store",
        "https://apps.apple.com/mx/app/hagamos-cine/id6764647013",
        "https://apps.apple.com/mx/app/id6761429362",
        "https://apps.apple.com/mx/app/stick-by-black-sheep/id6760153552",
        "https://fyttsatalent.com",
        "https://www.linkedin.com/in/brandon-romero-zavala-8247a6267",
        "Somos Brandon y Rubén TV",
        "Enero 2020 — Presente",
        "Sherwin-Williams",
        "Universidad Politécnica de Tecámac",
        "React, React Native, Expo, Next.js, TypeScript, PostgreSQL, REST APIs, Docker.",
        "Idiomas: español nativo. Inglés B1.",
        "romerozavalabrandon@gmail.com",
        "+52 729 895 8841",
        "no es una app",
    ]
    missing = [item for item in required if item not in text]
    if missing:
        raise SystemExit("Missing CV text:\n" + "\n".join(missing))
    forbidden = [
        "Black Sheep",
        "Actualmente",
        "actualmente",
        "Photoshop",
        "Illustrator",
        "Marketing",
        "Inglés (Intermedio B2)",
        "B2",
        "Octubre 2025",
    ]
    present = [item for item in forbidden if item in text]
    if present:
        raise SystemExit("Forbidden CV text:\n" + "\n".join(present))
    print(f"Wrote {OUTPUT} ({pages} page(s), {OUTPUT.stat().st_size} bytes)")


if __name__ == "__main__":
    build()
