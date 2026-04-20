# Omme Design System

**Omme** is an AI-native digital men's health platform operating in Mexico.  
This design system covers the **visual revamp** for the **Hair Loss vertical** landing page. The existing Omme logo is preserved; everything else is new.

The new aesthetic is **"clinical-tech with warmth"** — medical credibility without the cold waiting-room feel. Think *Glyphic Biotechnologies × Autopharma × Zara Health*, rendered by a Swiss studio.

> Voice: confident, discreet, intelligent.  
> Feel: editorial, quiet, precise.  
> Never: machismo, fear-mongering, exaggerated promises.

---

## Source materials given

| Source | Location |
|---|---|
| Full wordmark logo | `uploads/Full logo.png` → copied to `assets/omme-logo-full.png` |
| Isotype (mark only) | `uploads/logo iso.png` → copied to `assets/omme-logo-iso.png` |
| Brand direction | Written brief (pasted in-thread) — moodboard references: Glyphic Biotechnologies, Autopharma, Hims, Zara Health |

No codebase, Figma, or existing product screenshots were provided for this vertical — this is a **greenfield visual direction** built from the written brief.

---

## CONTENT FUNDAMENTALS

### Language
- **Spanish (Mexico)** — the product is Mexico-only.
- **Clinical-but-human** medical register. Not pharmacy-flat, not marketing-shouty.

### Mandatory lexicon
- Always **"protocolo"**, never *tratamiento*. The product is a medical protocol, not a treatment.
- **"Evaluación"** for the intake quiz — not *test*, not *diagnóstico*.
- **"Seguimiento"** (follow-up) is core vocabulary — the product's differentiator.
- **"Dermatólogo certificado"** — always certified, always explicit.

### Voice traits
| Trait | Yes | No |
|---|---|---|
| Tone | Confident, discreet, intelligent | Braggy, pharma-corporate, bro-y |
| Pronoun | **Tú** (informal, respectful) | *Usted* (too distant) |
| Claims | Specific, measured ("seguimiento mensual real") | Hype ("transforma tu vida") |
| Humor | Dry, almost absent | Joky, meme-y |
| Sentence length | Short. Editorial. Some single-line statements that feel printed. | Long pharma disclaimers as body copy |
| Emoji | **Never.** | — |

### Example copy (from the brief — reference these)
- **Hero headline:** "Tu cabello tiene solución."
- **Hero subhead:** "Protocolo personalizado con seguimiento mensual por un dermatólogo certificado. Sin visitas al consultorio."
- **Product section:** "No es un shampoo. Es un protocolo médico."
- **Final CTA:** "La ventana está abierta. El folículo responde." (editorial, almost literary — this is the voice at its peak)
- **Differentiator:** "Protocolo de mínimo 6 meses porque así funciona."

### Casing rules
- **Headlines:** sentence case. Always. Even for H1.
- **Buttons & CTAs:** sentence case ("Empieza tu evaluación gratuita").
- **Eyebrows / micro-labels:** ALL CAPS with wide tracking (0.16em) — the only place caps appear.
- **Proper nouns:** Omme (always capital O, lowercase rest). Dutasterida, Minoxidil capitalize.

### Punctuation
- Periods at the end of headlines are **encouraged** — they give the editorial "printed" feel.
- Em-dashes for clinical asides. "Sin visitas al consultorio."
- No exclamation marks. None.

---

## VISUAL FOUNDATIONS

### Colors
The palette is intentionally **tiny**. Restraint is the aesthetic.

| Role | Token | Hex | Usage |
|---|---|---|---|
| Canvas | `--cream-100` | `#F5F3EF` | Page background. **Never pure white.** |
| Surface up | `--cream-50` | `#FBFAF7` | Cards, elevated panels |
| Surface down | `--cream-200` | `#EFEBE4` | Subtle banded sections |
| Ink | `--ink-1000` | `#0D0D0D` | Primary text, primary buttons |
| Muted ink | `--ink-500` | `#6B6B6B` | Body de-emphasis, meta |
| Border | `--cream-300` | `#E4DFD5` | Hairline dividers |
| **Accent** | `--accent-lime` | `#D4F233` | **Max 2–3 uses per page.** Used like a highlighter. |
| Amber capsule | `--amber-capsule` | `#D99A4E` | Product imagery only — never UI |

**Accent discipline:** the lime yellow-green is *punctuation*, not decoration. A single featured-plan badge, a hover underline, maybe a stat emphasis — that's the whole budget.

### Typography
| Family | Role | Weights |
|---|---|---|
| **Instrument Serif** | Display headlines, editorial moments | 400, 400 italic |
| **DM Sans** | All body, UI, buttons, meta | 400, 500, 600, 700 |

> **Substitution note:** the brief suggested *Cormorant Garamond / Playfair Display* for display. I substituted **Instrument Serif** — it has the same editorial high-contrast feel but reads more modern-clinical and has excellent italic. Ask me to swap back if you prefer Playfair. Font files are loaded from Google Fonts CDN; no local `fonts/` yet.

**Tracking:** display serif gets `-0.03em`; eyebrows get `+0.16em` uppercase. This contrast is half the identity.

### Backgrounds
- Solid cream. **No gradients**, no hero videos, no mesh, no patterns.
- One exception: the **final CTA section** is full-bleed near-black (`--ink-1000`) — the only dark section on the page.
- Dark sections use cream text, not white.

### Imagery
- **3D photorealistic product shots** floating on cream — the amber bottle is the hero object, shadow cast on the floor.
- **Clinical macro photography** — hair follicles, scalp close-ups, texture detail. Cool warmth, low saturation.
- **Portraits** — men shot with dignity. Natural light, warm cream backgrounds, neutral expressions. No smiling-while-pointing stock. No gym shots. No "before/after" split screens.
- Grain: subtle film grain acceptable on editorial imagery.
- **Never:** drawn SVG "products," emoji, stock thumbs-up.

### Animation & motion
- **Slow and considered.** Base duration is 320ms; hero capsule floats at **6s** per loop.
- Easing: `cubic-bezier(0.2, 0.7, 0.2, 1)` — a soft out.
- Hero capsule: `transform: translateY(-12px)` sine-style loop, infinite.
- Scroll reveals: opacity + 8px Y, staggered.
- **No** bounces, springs, confetti, parallax.

### Hover states
- **Primary buttons (dark):** background stays `--ink-1000`; the *label* gets an underline offset 4px, or the pill fills with accent lime for key moments (once per page).
- **Ghost buttons:** background fades to `rgba(13,13,13,0.04)`.
- **Links in body:** underline appears from 0→100% width, left origin, 200ms.
- **Cards:** lift is `translateY(-2px)` + `--shadow-md`. No scale.

### Press states
- 160ms scale to `0.98`. That's it.

### Borders
- Always hairline: **1px solid `--cream-300`**.
- Dark sections: `1px solid rgba(255,255,255,0.08)`.
- No double borders, no colored borders except accent lime (rare).

### Shadows
Three layers, all warm-tinted and diffuse:
- `--shadow-sm` — card resting state.
- `--shadow-md` — card hover, sticky nav.
- `--shadow-capsule` — amber-tinted (`rgba(217,154,78,0.35)`), used ONLY on the hero product shot to make it glow.

Never use harsh black drop shadows. Never use inset shadows except form inputs on focus.

### Transparency & blur
- Sticky nav uses `backdrop-filter: blur(12px)` over `rgba(245,243,239,0.8)` — "warm glass."
- Modal overlays: `rgba(13,13,13,0.4)` + `blur(4px)`.
- That's all the blur in the system.

### Corner radii
- **Pills** (`--radius-pill`, 999px) — all primary CTAs, all badges, all plan tier markers. **This is the signature shape.**
- **Medium** (`--radius-md`, 12px) — form inputs, small cards.
- **Large** (`--radius-lg`, 20px) — plan cards, hero media containers.
- Sharp corners (0) allowed only on editorial headline text containers.

### Cards
- Background: `--cream-50` over `--cream-100` page.
- Border: 1px `--cream-300`.
- Radius: `--radius-lg` (20px).
- Shadow: `--shadow-sm` at rest.
- Padding: `--space-7` (48px) on desktop, `--space-6` (32px) on mobile.
- **Featured card** (pricing): `--ink-1000` background, cream text, small lime badge at the top.

### Layout rules
- Mobile-first; generous negative space on desktop.
- Max content width: **1200px** for body; **1440px** for full-bleed sections.
- Section vertical rhythm: **`--space-10` (128px)** between major sections on desktop.
- Sticky nav: 64px tall, Omme wordmark left, pill CTA right.
- Asymmetric layouts preferred for editorial sections; strict grids for data (stats bar, pricing).

---

## ICONOGRAPHY

**Approach: minimal-to-absent.** This brand is type-led. Icons are accents, never focal.

### What we use
- **Lucide** icons via CDN (`https://unpkg.com/lucide@latest`) — 1.5px stroke, rounded line caps. Matches the warm-clinical tone.
- Usage restricted to: the three "How it works" steps, the pricing-card feature bullets (checkmarks), and the sticky nav if needed. That's it.

### What we never use
- **Emoji.** Ever.
- **Colored icons.** All icons are `currentColor` → inherit `--ink-1000` on cream, `--fg-on-dark` on dark.
- **Filled/solid icons.** Stroke only.
- **Custom illustrations / spot art.** If a section feels empty, the answer is more whitespace or a photograph — never a drawn glyph.

### Unicode usage
- Arrow glyphs (`→`, `↗`) are encouraged in CTAs and link text — they fit the editorial register.
- Em dashes (`—`) as structural punctuation.
- No check-mark unicode; use Lucide `check` for bullet lists.

### Logos (in `assets/`)
- `omme-logo-full.png` — horizontal wordmark, near-black. Use in nav and footer. 441×91 native.
- `omme-logo-iso.png` — the "O" isotype alone. Use for favicon, app icon, footer secondary, social share.

Both logos are **kept as-is** — they are not being redesigned. Treat them as sacred. Never tint, never outline, never place on busy imagery. Place on cream or on ink-1000 only.

---

## Index — files in this system

| File / folder | What it is |
|---|---|
| `README.md` | This document — read first |
| `SKILL.md` | Agent-invocable skill manifest (for Claude Code / skill use) |
| `colors_and_type.css` | All CSS variables: color tokens, type scale, spacing, radii, shadows, motion |
| `assets/` | Logos (full + iso). Drop additional product photography / portraits here when they arrive. |
| `preview/` | Small HTML cards that render in the Design System tab — one file per token cluster |
| `ui_kits/hair-loss-landing/` | High-fidelity React component kit for the Hair Loss landing page — all sections buildable from these pieces |

---

## Open questions / caveats for the user

1. **Font substitution — Instrument Serif vs. Cormorant Garamond vs. Playfair Display.** I chose Instrument Serif. Confirm or swap.
2. **No product photography yet.** Hero amber capsule, hair-follicle macros, dignified portraits — I've used labeled placeholders. Please provide shots or greenlight a placeholder commission brief.
3. **No testimonial photos / copy.** Placeholders in the social proof section.
4. **No Dr. Manuel Amador headshot.** Placeholder used in hero trust signal.
5. **Accent lime exact hex.** Brief said `#D4F233 or similar`. Locked to `#D4F233`. Flag if you want to tune.
