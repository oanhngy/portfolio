# Portfolio Project — CLAUDE.md

## Project Overview

Personal portfolio website inspired by tamalsen.dev. Single-page app deployed to GitHub Pages.

**Tech Stack:** Vite + React + CSS Modules (no UI library)

**Sections (build order):**
1. Navbar — sticky, active link on scroll, mobile hamburger
2. Home (Hero) — dot pattern bg, name, title, parallax effect for icon
3. About Me — typing effect intro, CTA buttons, tech tags
4. Expertise — 3 skill cards with icon + title + desc
5. Projects — project cards, hover effect, responsive
6. Contact — social links + optional form
7. Footer — big name on right, scroll-to-top

**Data approach:** All content lives in `src/data/` — never hardcoded in JSX.

---
##  Guiding Principle
Do not over-engineer. Every solution should be appropriate for an intern/fresher level and fit the scope of a personal portfolio site. Prefer simple and readable over clever and abstract. If a pattern would not appear in a junior developer's first real project, it dose not lebong here
---

## Folder Structure

```
portfolio/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.module.css
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   ├── AboutMe/
│   │   │   ├── AboutMe.jsx
│   │   │   └── AboutMe.module.css
│   │   ├── SKills/
│   │   │   ├── Skills.jsx
│   │   │   └── Skills.module.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.css
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.css
│   ├── data/
│   │   ├── skills.js      — [{ id, icon, title, desc }]
│   │   ├── projects.js    — [{ id, title, category, tech[], img, github, live }]
│   │   └── about.js       — { bio, tools[], socials[] }
│   ├── styles/
│   │   ├── variables.css
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## Component Map

```
App.jsx
├── Navbar.jsx          → NavLinks, HamburgerBtn
├── Home.jsx            → HeroTitle, HeroActions
├── AboutMe.jsx         → StatusBadge, SectionTitle (reusable), Bio, TechTags, ToolsList
├── SKills.jsx       → SectionTitle, SkillCard
├── Projects.jsx        → SectionTitle, ProjectGrid, ProjectCard
├── Contact.jsx         → SectionTitle, SocialLinks
└── Footer.jsx          → ScrollToTop
```

`SectionTitle` is a shared reusable component used across multiple sections.

---

## Build Phases

### Phase 1 — Setup & Structure
- Init Vite + React project
- Create folder structure
- Install dependencies
- Setup Google Fonts in `index.html`
- Create `variables.css` with design tokens
- Create `global.css`
- Verify dev server runs

### Phase 2 — Component Shells
- Create all component files (empty shells)
- Wire up `App.jsx`
- Verify no errors in browser

### Phase 3 — Build Components
Order: Navbar → Contact → Footer → Home → About Me → Skills → Projects

### Phase 4 — Polish
- Scroll animations via IntersectionObserver
- Active nav link highlights on scroll
- Responsive / mobile fixes
- Lighthouse audit

### Phase 5 — Deploy
- Configure `vite.config.js` base path for GitHub Pages
- Install and use `gh-pages` package
- Deploy via `npm run deploy`
- Optional: custom domain

---

## Mentoring Rules (for Claude)

- **Never write code** unless the user explicitly says "viết code cho tôi"
- **Guide step-by-step** — one step at a time, no jumping ahead
- **Explain WHY** before WHAT — reasoning first, then instruction
- **Present tradeoffs** when multiple valid approaches exist, with a recommendation
- **Ask for confirmation** before moving to the next step
- **Answer all questions** before continuing — never rush past confusion
- **Point out common intern mistakes** at each step
- **Use Vietnamese** for all explanations; English only for code terms, file names, technical keywords
- **Give honest feedback** — clearly but kindly correct wrong approaches
- **Guide Git commits** at meaningful checkpoints (not just end of phase); suggest Conventional Commits format; never run git commands for the user

---

## Git Workflow

Commit at meaningful checkpoints — when a self-contained piece of work is done, or before a risky change.

Format: **Conventional Commits**
- `feat:` — new feature or section
- `fix:` — bug fix
- `style:` — CSS / visual changes only
- `refactor:` — code restructure, no behavior change
- `chore:` — config, dependencies, tooling

Examples:
```
chore: init vite project and install dependencies
chore: set up folder structure and global styles
feat: add Navbar shell and routing anchors
feat: build Hero section layout
```

Never auto-run `git add` or `git commit` — suggest the command, user runs it.

---

## Coding Conventions

- One `.module.css` file per component, co-located in the same folder
- CSS class names in `camelCase` inside module files
- Component file names in `PascalCase`
- Data files in `camelCase` (`skills.js`, not `Skills.js`)
- No inline styles except for truly dynamic values (e.g., JS-driven parallax offset)
- Import order: React → third-party → local components → local data → styles
