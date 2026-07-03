# Gayatri Gurugubelli — Portfolio

A sleek, modern personal portfolio built with **Next.js (App Router)** and **Tailwind CSS**, with smooth Framer Motion animations and a working contact form powered by Next.js API routes.

The design uses your blue palette — mist `#EBF3FD`, sky `#B9D8FB`, azure `#88BAF8`, and deep teal `#147591` — on a light, airy layout.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:3000
```

To build for production:

```bash
npm run build
npm start
```

## Tech stack

- **Next.js 14** (App Router) — frontend + backend in one
- **Tailwind CSS** — styling and the design system (`tailwind.config.js`)
- **Framer Motion** — scroll reveals, the rotating role, custom cursor
- **lucide-react** — icons
- **Nodemailer** — contact form email delivery (optional)

## Where to edit things

Everything about the content lives in one file:

```
src/data/content.js
```

Update your name, tagline, projects, skills, awards, and **your real social links** there — no need to touch the components.

## Placeholders to fill in

| What | Where to put it |
|------|-----------------|
| Profile photo | `public/profile.jpg` (square, ~600×600) |
| Project screenshots | `public/projects/agricare.png`, `docsai.png`, `traffic.png` (16:11) |
| Resume PDF | `public/Gayatri_Resume.pdf` — already added from your upload |
| Social links | `socials` object in `src/data/content.js` (GitHub, LinkedIn, portfolio) |
| Interests / hobbies | `beyond.interests` in `src/data/content.js` (one card is a fill-in prompt) |
| Personal quote | `beyond.quote` in `src/data/content.js` |
| Testimonials | `testimonials` array in `src/data/content.js` (3 placeholder quotes) |
| Journey milestones | `journey` array in `src/data/content.js` |

Once a `profile.jpg` exists, swap the hero placeholder block for a real image: in `src/components/Hero.js` replace the placeholder `<div>` inside `inset-6` with `<Image src={profile.photo} ... />` (import `next/image`).

## Contact form

The form posts to `src/app/api/contact/route.js`, which validates input and rate-limits requests.

- **Without setup:** submissions are logged to the server console (the form still shows success). Good for local testing.
- **With email delivery:** copy `.env.local.example` to `.env.local` and fill in your SMTP credentials (e.g. a Gmail App Password). Messages then arrive in your inbox.

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=gayatri.gurugubelli05@gmail.com
```

## Deploy

The easiest path is **Vercel** (made by the Next.js team):

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Add the SMTP environment variables in Project → Settings → Environment Variables (optional).
4. Deploy — you'll get a live URL in ~1 minute.

## Project structure

```
src/
  app/
    layout.js          # fonts, metadata, SEO
    page.js            # assembles all sections
    globals.css        # design tokens + utilities
    icon.svg           # favicon
    api/contact/route.js   # contact form backend
  components/
    Navbar, Hero, About, Journey, Experience,
    Projects, Skills, Beyond, Testimonials, Awards, Contact, Footer
    ui/                # Reveal, Cursor, ScrollProgress, Counter,
                       # SectionHeader, Blobs, Tilt
  data/
    content.js         # ← single source of truth for all content
public/                # images, resume, favicons
```

Built with care. Edit `content.js`, drop in your images, and you're live.
