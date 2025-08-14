
# ZAZIM – Final Build (React + Vite + Tailwind + PWA + i18n + API + Vercel SPA)

## Run locally
npm install
npm run dev

## Build
npm run build

## Deploy (Vercel)
- Import the repo; Framework: Vite; Output dir: dist
- SPA fallback & security headers are configured in `vercel.json`

## Notes
- Replace `public/hero.jpg` and `public/logo-zazim.svg` with real assets.
- Update `public/sitemap.xml` with your domain.
- `/api/contact` is a simple serverless example; connect to your email/CRM provider with secrets.
