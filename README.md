# Melvstein — Full-Stack Developer Portfolio

> A modern, animated, performance-obsessed portfolio built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4** — designed to showcase production-grade engineering taste, not just code samples.

🌐 **Live**: [melvstein.vercel.app](https://melvstein.vercel.app) &nbsp;•&nbsp; 💻 **Source**: [github.com/melvstein](https://github.com/melvstein) &nbsp;•&nbsp; 💼 **LinkedIn**: [linkedin.com/in/melvstein/](https://www.linkedin.com/in/melvstein/)

---

## About Me

Hi, I'm **Melvin Justine L. Bayogo** — a Full-Stack Developer based in the Philippines with hands-on experience building and maintaining production-grade systems in the **iGaming** and **fintech** space.

My work spans legacy system modernization, seamless wallet API systems, iGaming and payment API integrations, RESTful services, and full-stack web applications. My core stack lives around **Spring Boot**, **Laravel**, and **Next.js**, with a strong focus on scalable backend architecture, system reliability, and clean API design.

Outside production work, I experiment with 3D on the web using **React Three Fiber** because building little universes in the browser never gets old.

---

## Features

- **Animated, cinematic hero** with typewriter effects, neon gradient cards, light rays, flickering grids, and scroll-velocity marquees.
- **Interactive Experience timeline** with motion-driven scroll progress and per-role highlight lists.
- **Glow-accented Projects gallery** with Safari-frame video previews, magnifying lens hover, and per-card accent shadows.
- **Custom cursor** + smooth scroll snapping for a tactile, app-like feel.
- **Dark-first theming** via `next-themes` with no system override flicker.
- **Aceternity / shadcn / Magic UI primitives** composed throughout — Bento Grids, Aurora Text, Pixelated Canvas, Orbiting Circles, ASCII art, and more.
- **Fully responsive** mobile-first layouts with sidebar + floating-dock navigation.
- **Accessible** semantic landmarks, keyboard-friendly menus, reduced-motion friendly transitions.
- **Resume download** and one-click contact CTAs.

---

## Tech Stack

### Core
| Layer | Technology |
|------|-----------|
| Framework | **Next.js 16** (App Router, Server Components) |
| Language | **TypeScript 5** |
| Runtime | **React 19** |
| Styling | **Tailwind CSS v4** (`@theme inline`, `@custom-variant dark`) |
| Animation | **motion** (Framer Motion successor), **tw-animate-css** |
| UI Primitives | **shadcn/ui**, **Radix UI**, **Aceternity UI**, **Magic UI** |
| Icons | **lucide-react**, **@tabler/icons-react**, custom SVGs |
| Theming | **next-themes** |

### Tooling
- ESLint 9 (`eslint-config-next`)
- PostCSS + `@tailwindcss/postcss`
- `@svgr/webpack` for component-ready SVG imports
- `tailwind-scrollbar` for custom scrollbar styling
- `class-variance-authority` + `tailwind-merge` for variant ergonomics

### Deployment
- **Vercel** — edge-optimized CDN, automatic preview deployments, image optimization

---

## Architecture

```
src/
├── app/                    # Next.js App Router entry (layout, page, globals)
├── assets/                 # Static SVG/asset modules
├── components/
│   ├── sections/           # High-level page sections (Home, About, Projects, Experience…)
│   ├── ui/                 # Reusable design-system primitives (shadcn + custom)
│   ├── aceternity/         # Aceternity-style composed components
│   └── providers/          # ThemeProvider and context wrappers
├── constants/              # App-level constants
├── data/                   # Typed content sources (Experience, Skills, Menus)
├── hooks/                  # Custom hooks (use-mobile, etc.)
└── lib/                    # Utilities (cn helper, links)
```

**Design principles**

- **Composition over abstraction** — small, named section components per page region.
- **Typed data layer** — content (experience, skills, projects) lives in `src/data/` as strongly-typed objects; UI is purely a renderer.
- **Tailwind-native theming** — design tokens via CSS custom properties + `@theme inline`, no JS config bloat.
- **Animation as a system** — consistent `viewport={{ once: true }}` scroll-triggered motion across sections for predictable performance.

---

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start the Next.js dev server with HMR |
| `npm run build` | Production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint with ESLint |

### Adding shadcn components

```bash
npx shadcn@latest add <component>
```

---

## Performance Optimizations

- **React Server Components** by default — only interactive islands ship JS to the client.
- **Next.js Image** with automatic AVIF/WebP, lazy loading, and responsive `sizes`.
- **Code splitting** per route — heavy 3D / canvas components are dynamically imported on demand.
- **Animation gating** with `viewport={{ once: true }}` to avoid repeat re-renders.
- **Tailwind v4 JIT** — production CSS is tree-shaken to the minimum class set.
- **Edge-cached static assets** via Vercel CDN.
- **Font optimization** through `next/font` for zero layout shift.

---

## Contact

I'm open to **full-time roles**, **contract work**, and **interesting side projects** — especially in backend systems, fintech, and iGaming.

- 🌐 **Portfolio** — [melvstein.vercel.app](https://melvstein.vercel.app)
- 💻 **GitHub** — [github.com/melvstein](https://github.com/melvstein)
- 💼 **LinkedIn** — [linkedin.com/in/melvstein/](https://www.linkedin.com/in/melvstein/)
- 📧 **Email** — melvinbayogo@gmail.com

---

<p align="center">
  Built with care by <strong>Melvin Justine L. Bayogo</strong> · © 2026
</p>
