# 1. Introduction
This is my personal portfilio website built with React and Vite - no UI library, just CSS Modules and vanilla React. Designed to present my background, technical skills and projects.
**Live demo:** [link later]
---

## 2. Main Features

- **Sticky Navbar** — smooth scroll navigation with mobile hamburger menu
- **Hero Section** — name, title, and direct CV download link
- **About Me** — typing effect intro, status badge, tech tag list
- **Skills** — skill cards with icon, title, and description
- **Projects** — project grid with hover effect, tech stack tags, live/GitHub links
- **Contact** — email link and social media links
- **Footer** — scroll-to-top button

---

## 3. Technologies Used

- **Programming Languages:** JavaScript, HTML, CSS
- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** CSS Modules (no UI library)
- **Deployment:** GitHub Pages

---
## 4. Project Structure

- `src/components/` — One folder per UI section, each contains a `.jsx` file and a `.module.css` file
- `src/data/` — All content (bio, links, skills, projects) separated from JSX — never hardcoded
- `src/styles/` — Global stylesheet and CSS variables (design tokens: colors, spacing, fonts)
- `src/assets/` — Static images and icons
- `public/` — Files served directly (CV PDF, favicon)

---
## 5. Technical Highlights

- CSS Modules — component-scoped styles, zero class name conflicts, no extra library needed
- Data-driven content — all text, links, and tags live in src/data/, making updates trivial
- Shared SectionTitle component — single source of truth for section headings across all sections
- IntersectionObserver — scroll-triggered animations without any animation library
- Active nav tracking — highlights current section in navbar as user scrolls
- Mobile-first responsive — hamburger menu on small screens, no media query breakpoint hacks

---
## 6. What I learned

- How to structure a React project cleanly without over-engineering it
- Why CSS Modules beat global stylesheets for component-level isolation
- How to separate data from presentation so the site is easy to update
- Using IntersectionObserver to build scroll animations from scratch
- Deploying a Vite SPA to GitHub Pages with the correct base config



<!-- 





-->