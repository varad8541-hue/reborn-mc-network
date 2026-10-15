# RebornMC Network Website

A modern, responsive Minecraft network website with integrated web store, admin dashboard, server status, leaderboard, ranks, crates, and Discord integration.

## Features
- Dark theme with purple and electric‑blue accents
- React + TypeScript frontend styled with Tailwind CSS
- Node.js + Express backend hosted on Supabase (PostgreSQL)
- Stripe Checkout integration (test mode ready)
- Admin dashboard for managing products, orders, and site settings
- Server status widget, leaderboard, and Discord link
- Fully responsive design (desktop, tablet, mobile)

## Folder Structure
```
reborn-mc-network/
├─ frontend/
│   ├─ src/
│   │   ├─ components/
│   │   ├─ pages/
│   │   └─ main.tsx
│   ├─ public/
│   ├─ tailwind.config.js
│   ├─ vite.config.ts
│   └─ package.json
├─ backend/
│   ├─ src/
│   │   ├─ routes/
│   │   └─ index.ts
│   ├─ prisma/
│   │   └─ schema.prisma
│   ├─ .env.example
│   └─ package.json
├─ .gitignore
└─ README.md
```

## Prerequisites
- Node.js >= 18
- npm or yarn
- Supabase account (PostgreSQL) or any PostgreSQL database
- Stripe account (test keys)

## Installation & Development
### 1. Clone the repo (or copy the generated files)
```bash
git clone <repo‑url> reborn-mc-network
cd reborn-mc-network
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev   # starts Vite dev server at http://localhost:3000
```

### 3. Backend
```bash
cd ../backend
npm install
# copy the .env.example to .env and fill in your values
cp .env.example .env
# run Prisma migrations (adjust DATABASE_URL first)
npx prisma migrate dev --name init
npm run dev   # starts Express server at http://localhost:4000
```

### 4. Open the site
Visit **http://localhost:3000** – the frontend will proxy API calls to **http://localhost:4000**.

## Production Deployment
- **Frontend** – `npm run build` → static files in `dist/`. Deploy to Vercel, Netlify, Cloudflare Pages, etc.
- **Backend** – Deploy the Express app to Railway, Render, Fly.io, or any Node.js host. Set the same environment variables as in `.env.example`.
- **Supabase** – Use the hosted PostgreSQL instance; no extra server needed.
- **Stripe** – Switch from test keys to live keys in the backend `.env` when you’re ready to go live.

## Configuration
- Edit `backend/.env` to set your database URL, Stripe keys, admin credentials, and front‑end URL.
- The frontend reads the server status and shop data from the backend API (`/api/...`).

## Extending the Project
- Add real database queries in the backend routes (replace the placeholder arrays).
- Implement the admin dashboard pages (`/admin/*`).
- Hook the order webhook to your Minecraft server (RCON, Pterodactyl, or a custom plugin) to deliver purchased items.
- Add authentication middleware to protect admin routes.

## Troubleshooting
- **CORS errors** – Ensure `FRONTEND_URL` in `.env` matches the URL you’re using.
- **Stripe webhook not firing** – Use `stripe listen --forward-to localhost:4000/api/orders/webhook` during development.
- **Database connection** – Verify `DATABASE_URL` is correct and the DB is reachable.

---

Enjoy building your premium Minecraft network!
