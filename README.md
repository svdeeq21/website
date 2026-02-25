# Sadiq Shehu — Portfolio Platform V2

A production-grade Next.js portfolio and service platform. Built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Formspree | Contact form handling |
| Google Fonts (Syne + DM Sans) | Typography |

---

## Getting Started

### Prerequisites
- Node.js v18+ installed
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
sadiq-portfolio/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, fonts)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── services/
│   │   └── page.tsx        # Services & Pricing page
│   ├── portfolio/
│   │   └── page.tsx        # Portfolio page with filter
│   ├── blog/
│   │   ├── page.tsx        # Blog listing page
│   │   └── [slug]/
│   │       └── page.tsx    # Blog post page (placeholder)
│   └── contact/
│       └── page.tsx        # Contact page with form
├── components/
│   └── Navbar.tsx          # Navigation (desktop + mobile)
├── public/                 # Static assets (add your images here)
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Customization

### Updating Your Projects (Portfolio)
Edit the `projects` array in `app/portfolio/page.tsx`:

```tsx
const projects = [
  {
    title: "Your Project Name",
    category: "Machine Learning",   // Must match a filter label
    description: "...",
    link: "https://...",
    linkLabel: "View Project",
    tags: ["Python", "Streamlit"],
    year: "2025",
  },
  // ...
];
```

### Updating Services
Edit the `services` array in `app/services/page.tsx`.

### Adding Blog Posts
For now, add post entries to the `posts` array in `app/blog/page.tsx`.  
In Phase 2, this will be replaced with MDX files.

### Changing the Contact Form
The form submits to Formspree. Your form ID is already set: `xkgjoenr`.  
To change it, update the fetch URL in `app/contact/page.tsx`.

---

## Deployment

### Deploy to Vercel (Recommended — Free)

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "New Project" → Import your repository
4. Click Deploy — that's it.

Your site will be live at `https://your-project.vercel.app`

You can also connect a custom domain from the Vercel dashboard.

---

## Phase 2 Roadmap (Backend)

When you're ready to upgrade:

- [ ] Authentication (Clerk)
- [ ] Database (Supabase + Prisma)
- [ ] Payments (Stripe)
- [ ] Client dashboard
- [ ] MDX-powered blog
- [ ] Scheduling (Cal.com)
- [ ] Admin panel

---

## Your Social Links (already configured)
- Twitter: https://x.com/svdeeq021/
- LinkedIn: https://www.linkedin.com/in/sadiqshehu/
- Instagram: https://www.instagram.com/svdeeq21/
