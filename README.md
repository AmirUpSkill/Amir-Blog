# Amir Abdallah — Personal Blog

Personal blog and portfolio built with modern web tooling. It showcases blog posts (linked to public Notion pages), projects, and a resume-style About page with theme toggle and social links.

Live: https://amir-blog.netlify.app/

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Zod (data validation)
- Zustand (state management)
- Lucide Icons
- PNPM (package manager)

## Features
- Blog index that links each post to a public Notion page
- Projects page with responsive card grid and GitHub links
- About Me page with avatar, resume download, experience, education, projects, languages, and activities
- Header with centered navigation, social icons, and theme toggle; footer with contact links
- Dark/light theme with next-themes

## Project Structure
```
amir-blog/
├─ .gitignore
├─ .env.local
├─ next.config.ts
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ components.json
│
├─ app/
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx                  # Home (Blog listing)
│  ├─ about/
│  │  └─ page.tsx
│  └─ projects/
│     └─ page.tsx
│
├─ components/
│  ├─ layout/
│  │  ├─ header.tsx
│  │  ├─ footer.tsx
│  │  └─ theme-provider.tsx
│  ├─ shared/
│  │  ├─ project-card.tsx
│  │  ├─ theme-toggle.tsx
│  │  ├─ resume-section.tsx
│  │  └─ resume-entry.tsx
│  ├─ resume/
│  │  ├─ basic-info.tsx
│  │  ├─ experience.tsx
│  │  ├─ education.tsx
│  │  ├─ projects.tsx
│  │  ├─ languages.tsx
│  │  └─ extracurricular.tsx
│  └─ ui/
│     ├─ button.tsx
│     └─ card.tsx
│
├─ data/
│  └─ index.tsx                 # Social links, projects, blogPosts data
│
├─ lib/
│  ├─ schemas.ts                # Zod schemas
│  ├─ types.ts                  # TypeScript types inferred from schemas
│  └─ utils.ts                  # Utils (e.g., className helpers)
│
├─ public/
│  ├─ avatar.png                # Profile picture used in About page
│  └─ Amir_Abdallah_Resume.pdf  # Downloadable resume
│
└─ node_modules/
```

## Getting Started
Requirements: Node.js 18+ and PNPM installed.

Install dependencies:
```bash
pnpm install
```

Run the dev server:
```bash
pnpm dev
```
Open http://localhost:3000.

Build for production:
```bash
pnpm build
```

Start the production server:
```bash
pnpm start
```

## Configuration & Content
- No environment variables are required for the current setup.
- Edit data at data/index.tsx:
  - socialLinks: LinkedIn, X (Twitter), GitHub, Email
  - projects: title, description, keywords, githubUrl
  - blogPosts: title, description (max ~2 lines), keywords, notionUrl
- Replace public/avatar.png and public/Amir_Abdallah_Resume.pdf with your assets.

## Deployment
### Netlify (recommended for this project)
1) Push the repo to GitHub/GitLab/Bitbucket.
2) In Netlify, “Add new site” → “Import an existing project”.
3) Select the repo. Build command: `pnpm build`. Node version: 18 or newer.
4) Netlify auto-detects Next.js and configures the runtime. Deploy.

Alternative: Vercel (first-class Next.js hosting). Import the repo and deploy with defaults.

## Contributing
Issues and pull requests are welcome. For significant changes, please open an issue first to discuss what you’d like to modify.

## License
MIT
