# Evelyn Carter — Magical Midnight Portfolio

A premium, performance-first personal portfolio built with **Astro**, **React**, **Tailwind CSS**, and **Framer Motion**. The "Magical Midnight" aesthetic combines deep indigo backgrounds, bioluminescent accent glows, and elegant typography for a memorable developer presence.

---

## ✨ Features

- 🚀 **Blazing fast** — Astro static generation, zero JS by default
- 🎨 **Magical Midnight** aesthetic — dark indigo palette, glowing orbs, particle system
- 📱 **Fully responsive** — mobile-first, tested from 320px to 4K
- 🔍 **SEO-optimized** — full meta tags, OG/Twitter cards, JSON-LD schema
- ✏️ **One-file data layer** — edit `src/data/config.ts` to update everything
- 💡 **React islands** — only the contact form hydrates; everything else is static HTML
- 🎞️ **Scroll reveal animations** — IntersectionObserver-powered staggered entrances
- 🌌 **Interactive particle canvas** — subtle, mouse-repellent particle network
- 💎 **Glassmorphism components** — frosted glass cards and nav bar
- ♿ **Accessible** — semantic HTML, ARIA labels, focus states

---

## 📁 Folder Structure

```
evelyn-portfolio/
├── public/
│   ├── favicon.svg          # SVG favicon (auto-generated)
│   ├── resume.pdf           # ← PUT YOUR RESUME HERE
│   ├── og-image.png         # ← PUT YOUR OG IMAGE HERE (1200×630)
│   └── robots.txt
│
├── src/
│   ├── data/
│   │   └── config.ts        # ✏️  ALL YOUR DATA LIVES HERE
│   │
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML shell, SEO head, particle canvas, scroll reveal
│   │
│   ├── components/
│   │   ├── Navigation.astro # Sticky glassmorphism nav with mobile menu
│   │   ├── Hero.astro       # Full-screen hero with floating terminal card
│   │   ├── Skills.astro     # Grouped badge grid + dual marquee
│   │   ├── SkillBadge.astro # Reusable skill badge component
│   │   ├── Projects.astro   # Projects gallery section
│   │   ├── ProjectCard.astro# Reusable glowing project card
│   │   ├── Experience.astro # Vertical timeline with placeholder card
│   │   ├── Resume.astro     # Resume preview + glowing download button
│   │   ├── Contact.tsx      # React island — working contact form
│   │   └── Footer.astro     # Footer with nav + socials
│   │
│   ├── pages/
│   │   └── index.astro      # Main page — assembles all sections
│   │
│   └── styles/
│       └── global.css       # Tailwind @layer base/components/utilities
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start dev server

```bash
npm run dev
```

The site runs at `http://localhost:4321`.

### 3. Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## ✏️ How to Customise

**All content is controlled from a single file: `src/data/config.ts`**

### Update personal info

```ts
export const personal = {
  name:     'Evelyn',
  fullName: 'Evelyn Carter',
  title:    'Full-Stack Developer & DevOps Enthusiast',
  email:    'you@domain.com',
  github:   'https://github.com/your-handle',
  linkedin: 'https://linkedin.com/in/your-profile',
  resumeUrl: '/resume.pdf',
  location:  'Your City, Country',
};
```

### Add a skill

```ts
// In the skills array:
{
  name:     'Rust',
  category: 'Language',
  color:    '#CE412B',
  icon:     'M12 2...',   // paste a 24×24 SVG path d="" value
},
```

> **Tip:** Get SVG paths from [Simple Icons](https://simpleicons.org/) or [Heroicons](https://heroicons.com/).

### Add a project

```ts
// In the projects array:
{
  id:          'my-new-project',
  name:        'My New Project',
  description: 'One-line elevator pitch',
  longDesc:    'Longer description of what it does and why it matters.',
  tags:        ['React', 'Go', 'PostgreSQL'],
  liveUrl:     'https://my-project.com',
  githubUrl:   'https://github.com/me/my-project',
  featured:    true,
  status:      'live',         // 'live' | 'wip' | 'archived'
  gradient:    'from-emerald-600/20 via-teal-600/10 to-cyan-600/20',
},
```

### Add an experience entry

```ts
{
  id:          'my-role',
  title:       'Software Engineer Intern',
  org:         'Acme Corp',
  period:      'Summer 2024',
  description: 'Short summary sentence.',
  bullets:     ['Built X', 'Shipped Y', 'Improved Z by 40%'],
  type:        'work',
  icon:        'rocket',   // 'code' | 'graduation' | 'rocket' | 'star'
},
```

---

## 📬 Contact Form

The form in `src/components/Contact.tsx` currently simulates a send (1.8 s delay). To make it real, replace the `handleSubmit` function body with a real API call.

### Option A — [Formspree](https://formspree.io/) (free tier, no backend needed)

```ts
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method:  'POST',
  headers: { 'Content-Type': 'application/json' },
  body:    JSON.stringify(form),
});
if (res.ok) setStatus('success');
else        setStatus('error');
```

### Option B — [Resend](https://resend.com/) (API-driven, works with Astro SSR)

Add an Astro API route at `src/pages/api/contact.ts` and `POST` to it from the form.

---

## 🎨 Theming

All design tokens live in `tailwind.config.mjs`. Key variables:

| Token | Value | Purpose |
|---|---|---|
| `void` | `#07071a` | Deepest background |
| `abyss` | `#0b0b2e` | Card backgrounds |
| `cosmos` | `#0f1040` | Elevated surfaces |
| `midnight.*` | indigo scale | Primary accent family |
| `shadow-glow-*` | indigo glows | Hover shadow system |

---

## 📄 License

MIT — use freely for your own portfolio.
