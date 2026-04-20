# Hair Loss Landing — UI Kit

High-fidelity React component kit for the **Omme Hair Loss vertical landing page**. Each section from the brief is a separate, composable component.

## Components

| File | Components | What it renders |
|---|---|---|
| `Nav.jsx` | `Nav` | Sticky top nav — warm-glass blur, wordmark, pill CTA |
| `Hero.jsx` | `Hero` | Headline + subhead + dual CTAs + doctor trust signal + floating capsule placeholder |
| `Flow.jsx` | `ProblemBar`, `HowItWorks` | 3-stat bar + 3-step editorial-numbered flow |
| `Protocol.jsx` | `Protocol` | Product section with ingredient callouts (Dutasterida / Minoxidil) |
| `WhyPricing.jsx` | `WhyOmme`, `Pricing` | 3-column differentiators + 2-plan pricing with featured card |
| `Closing.jsx` | `Testimonials`, `FAQ`, `FinalCTA`, `Footer` | Quotes · accordion · dark CTA · footer |
| `styles.css` | — | All component styles, scoped with `.omm-` prefix |
| `index.html` | `App` | Full page composition, in order |

## How to use
- Open `index.html` directly — it composes all sections.
- Pick components à la carte by copying the JSX file + `styles.css` into another project (also bring `/colors_and_type.css` for tokens).

## What's placeholdered (needs real assets)
- **Hero capsule:** currently a CSS-drawn amber pill. Replace with a 3D render (transparent PNG ~600×900, floating on cream).
- **Doctor avatar:** initials bubble. Replace with Dr. Manuel Amador's portrait.
- **Testimonial avatars:** initials bubbles. Replace with real patient photography (respectful, naturally lit).
- **Product section capsule:** same CSS capsule, larger. Replace with the same 3D render at higher res.

## Kit conventions
- All class names prefixed `omm-` to avoid global leakage.
- Uses CSS variables from `/colors_and_type.css` — do not hardcode hex.
- Pill (999px) is the signature radius for every CTA and badge.
- Accent lime appears only in: the featured pricing badge, the featured pricing bullets, and the final CTA button. **Three uses total.** Hold this line.
