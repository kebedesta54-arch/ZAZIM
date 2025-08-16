ZAZIM - Delta Package
=====================
This ZIP contains additive files to merge into your existing project.

Add/Replace these paths under your local project folder (Desktop\zazim):
- api/requests.list.js
- api/offers.list.js
- api/offers.accept.js
- api/requests.js   (replace your existing one to get validation & limits)
- src/pages/AdminDashboard.jsx
- src/pages/Offers.jsx
- src/styles/typography.css   (import from src/main.jsx if not already)
- src/utils/analytics.js
- vercel.json                 (replace; includes security headers + SPA)
- locales/he/marketing.json   (new file)
- locales/he/common.additions.json (copy keys into your existing common.json)

Manual edits required (in your editor):
- src/routes/index.jsx: add routes for /admin and /offers/:requestId
- NavBar.jsx: optional link to /admin
