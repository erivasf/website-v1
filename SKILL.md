---
name: omme-design
description: Use this skill to generate well-branded interfaces and assets for Omme (AI-native men's health platform, Mexico — Hair Loss vertical), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — full brand + content + visual foundations
- `colors_and_type.css` — every design token (colors, type, spacing, radii, shadows, motion)
- `assets/` — logos (full wordmark + isotype)
- `preview/` — small design-system reference cards (colors, type, components)
- `ui_kits/hair-loss-landing/` — complete React component kit for the landing page

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions (always confirming if they want to iterate on existing sections or design new ones), and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Hard rules to preserve the aesthetic:
- Background is cream (`#F5F3EF`), never pure white, never dark except the final CTA.
- Accent lime (`#D4F233`) is used **max 2–3 times per page**, like punctuation.
- Pill radius (999px) is the signature shape for all CTAs and badges.
- Always "protocolo", never "tratamiento". Spanish (MX), informal "tú". No emoji.
- Display serif is Instrument Serif; body is DM Sans.
- No machismo, no fear-mongering, no exaggerated promises.
