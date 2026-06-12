# Buddy – Stream‑Chat Powered Interview Platform

## Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Running the Development Server](#running-the-development-server)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview
Buddy is a modern interview‑management platform built with **Next.js** and **Stream Chat**. It enables interviewers to:
- Schedule and manage appointments
- Conduct real‑time video calls with integrated chat and AI‑generated questions
- View earnings and availability dashboards
- Manage payouts securely

The application uses **Clerk** for authentication, **Prisma** with PostgreSQL for data persistence, and **Tailwind CSS** for styling.

## Tech Stack
| Category            | Technology |
|---------------------|------------|
| Front‑end           | Next.js 16, React 19, Tailwind CSS |
| UI Library          | shadcn/ui, Radix UI, lucide-react |
| State / Styling    | Tailwind CSS, motion |
| Authentication      | @clerk/nextjs |
| Real‑time Chat & Video | @stream-io/video-react-sdk |
| AI Integration      | @google/generative‑ai |
| Database            | Prisma + PostgreSQL |
| Email               | Resend, @react-email |
| Linting / Formatting| ESLint, Prettier |

## Key Features
- **Authentication** – Secure sign‑in / sign‑up flow powered by Clerk.
- **Appointment Management** – Create, edit, and list appointments.
- **Video Calls** – One‑to‑one video rooms with Stream Video SDK.
- **AI‑Generated Questions** – Hook into Google Generative AI for dynamic interview questions.
- **Dashboard** – Visual overview of upcoming appointments, earnings and availability.
- **Payout System** – Review and process payouts.
- **Webhooks** – Stream events are handled via API routes under `api/webhooks/stream`.

## Folder Structure
```
.
├─ app/                     # Next.js app router (pages & layouts)
│   ├─ (auth)/               # Clerk auth routes (sign‑in, sign‑up)
│   ├─ (main)/               # Protected area after login
│   │   ├─ appointments/      # Appointment list & details
│   │   ├─ call/              # Video call UI and AI question component
│   │   ├─ dashboard/        # Stats and earnings UI
│   │   ├─ explore/           # Interviewer discovery
│   │   ├─ interviewers/      # Interviewer profile & slot picker
│   │   ├─ onboarding/        # First‑time user flow
│   │   └─ payout/            # Payout review pages
│   ├─ api/                  # Server‑less API routes
│   │   └─ webhooks/stream/   # Stream webhook handler
│   ├─ layout.js             # Root layout (providers, theme)
│   └─ page.jsx              # Home page
├─ components/               # Reusable UI components (if any)
├─ lib/                      # Helper libraries (e.g., API client wrappers)
├─ prisma/                   # Prisma schema & migrations
├─ public/                   # Static assets (favicon, images)
├─ styles/ (globals.css)    # Global Tailwind styles
├─ .eslintrc.js / eslint.config.mjs
├─ tailwind.config.js
└─ package.json
```

## Getting Started
1. **Clone the repo**
   ```bash
   git clone https://github.com/your‑username/buddy.git
   cd buddy
   ```
2. **Install dependencies**
   ```bash
   npm ci   # or `npm install`
   ```
3. **Set up the database**
   - Ensure you have a PostgreSQL instance running.
   - Create a `.env.local` file (see below) with your connection string.
   - Run Prisma migrations:
     ```bash
     npx prisma migrate dev --name init
     ```
4. **Run the development server** (see next section).

## Environment Variables
Create a `.env.local` file in the project root and populate it with the following keys:
```
# Next.js
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Clerk (authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stream (chat & video)
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Prisma / PostgreSQL
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# Google Generative AI (optional AI questions)
GEMINI_API_KEY=your_gemini_api_key

# Resend (email service)
RESEND_API_KEY=your_resend_api_key
``` 
Refer to the individual SDK documentation for obtaining these keys.

## Running the Development Server
```bash
npm run dev
```
Visit **http://localhost:3000**. The app will automatically redirect unauthenticated users to the Clerk sign‑in page.

## Available Scripts
| Script | Description |
|--------|-------------|
| `dev`   | Starts Next.js in development mode |
| `build` | Builds the production application |
| `start` | Runs the production build locally |
| `lint`  | Runs ESLint across the codebase |

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your‑feature`).
3. Make your changes and ensure lint passes (`npm run lint`).
4. Push the branch and open a Pull Request.
5. Follow the existing code style (Tailwind, shadcn components, TypeScript if added).

## License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.

---

*Happy coding!*