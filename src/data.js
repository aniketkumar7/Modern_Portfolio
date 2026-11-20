import bookmarky from "./assets/linkvault.webp";
import daybuddy from "./assets/tydo.webp";
import atelier from "./assets/atelier.webp";
import kaarigar from "./assets/kaarigar.webp";
import foodie from "./assets/food.webp";
import netflix from "./assets/movie.webp";
import taskflow from "./assets/task.webp";

export const GITHUB_USER = "aniketkumar7";

export const profile = {
    name: "Aniket Kumar",
    role: "software developer",
    company: "CatalyzeX",
    location: "India",
    timeZone: "Asia/Kolkata",
    email: "aniketkumar639597@gmail.com",
    // TODO: resume link
    resume: "",
    links: [
        { label: "github", href: "https://github.com/aniketkumar7" },
        { label: "linkedin", href: "https://www.linkedin.com/in/aniketkumar07/" },
        { label: "medium", href: "https://medium.com/@aniketkumar639597" },
        { label: "figma", href: "https://www.figma.com/@aniketkumar7" },
    ],
};

export const experience = [
    {
        company: "CatalyzeX",
        roles: [
            { title: "software developer", period: "sep 2025 — present" },
            { title: "software developer intern", period: "jun 2025 — aug 2025" },
        ],
        location: "remote",
        current: true,
        tldr: "Primary frontend owner on four products, growing into backend, services and infra.",
        stats: ["4 products", "11+ repos", "~800 commits"],
        highlights: [
            {
                lead: "Built the RecordX frontend platform.",
                body: "Created the monorepo, split a monolithic frontend into four apps (admin, client, console, gateway) on a shared package, and led the move from SSR to CSR to a plain Vite SPA. The whole team's frontend now builds and ships on it.",
            },
            {
                lead: "Shipped Global Search end to end in about three weeks.",
                body: "A new FastAPI + Qdrant microservice with keyword and hybrid search, kept in sync through NATS events, rolled out behind a feature flag, plus the search UI. Now one of the most used features.",
            },
            {
                lead: "Built the growth layer for JellyFish.",
                body: "Challenges, friends, leaderboards, streaks, animated badges, referral campaigns with rewards, generated Open Graph share images and an embeddable quiz widget: the social side that drives retention.",
            },
            {
                lead: "Owned the Cases module and Saved Views in Legal-X.",
                body: "Backend and frontend for case overviews with caching and autofill, plus Filters and Saved Views (the largest feature by volume), DOCX preview, a dark-mode theming system and cross-tab auth sync.",
            },
            {
                lead: "Primary frontend dev on Intake Portal.",
                body: "Google and Microsoft OAuth, a leads → prospects → clients CRM, bulk import and export, dashboard analytics, notifications and an activity log.",
            },
        ],
        stack: ["React", "TypeScript", "Vite", "FastAPI", "Qdrant", "NATS"],
    },
    {
        company: "Tublian",
        roles: [{ title: "open source intern", period: "apr 2024 — may 2024" }],
        location: "remote",
        tldr: "Contributed to 5+ open-source projects and learned to ship in public codebases.",
        highlights: [],
        stack: ["Git", "GitHub", "Open source"],
    },
];

export const education = {
    school: "MIET, Meerut",
    degree: "B.Tech, Computer Science & Engineering",
    period: "2021 — 2025",
};

// Folder tints stay light so the glass reads in both themes
export const projects = [
    {
        name: "Bookmarky",
        year: "2026",
        tint: "#f5cb5c",
        image: bookmarky,
        blurb: "A personal library for links, screenshots and files. Rich previews, folders, tags, bulk and browser-bookmark import, PDF export.",
        stack: ["React", "TypeScript", "Supabase", "Node.js"],
        live: "https://link-vault-two.vercel.app/",
        code: "https://github.com/aniketkumar7/LinkVault",
    },
    {
        name: "Day Buddy",
        year: "2026",
        tint: "#8fb4ff",
        image: daybuddy,
        blurb: "One workspace for planning, focus and review: todos in list and kanban, habits and streaks, a focus timer, notes, Google Calendar sync and a command palette.",
        stack: ["React", "TypeScript", "Zustand", "Supabase"],
        live: "https://tydo-rho.vercel.app/",
        code: "https://github.com/aniketkumar7/Tydo",
    },
    {
        name: "Atelier",
        year: "2026",
        tint: "#ff8f8f",
        image: atelier,
        blurb: "A neo-brutalist art gallery and marketplace with collections, commissions and a full admin dashboard, running on Cloudflare Workers + D1.",
        stack: ["Next.js", "TypeScript", "Cloudflare D1", "Cloudinary"],
        live: "https://art-marketplace.aniketkumar639597.workers.dev/",
        code: "https://github.com/aniketkumar7/Atelier",
    },
    {
        name: "Kaarigar",
        year: "2026",
        tint: "#ffa26b",
        image: kaarigar,
        blurb: "Client site for a Delhi laser cutting and CNC studio. Every page pre-rendered to static HTML for SEO, content-driven services, blog and shop.",
        stack: ["React Router v7", "Tailwind v4"],
        live: "https://kaarigar-studio-mu.vercel.app/",
        code: "https://github.com/aniketkumar7/kaarigar-studio",
    },
    {
        name: "Foodie",
        year: "2025",
        tint: "#f7b955",
        image: foodie,
        blurb: "A community recipe platform to discover, cook and share recipes, with AI meal planning and recipe suggestions.",
        stack: ["React", "Node.js", "MongoDB", "Tailwind"],
        live: "https://food-blog-app-green.vercel.app/",
        code: "https://github.com/aniketkumar7/FOOD_BLOG_APP",
    },
    {
        name: "Netflix GPT",
        year: "2024",
        tint: "#ff6b6b",
        image: netflix,
        blurb: "Movie discovery with GPT-powered recommendations on top of the TMDB API, with Firebase auth.",
        stack: ["React", "Tailwind", "Firebase", "TMDB API"],
        live: "https://netflix-gpt-jade-five.vercel.app/",
        code: "https://github.com/aniketkumar7/NETFLIX_GPT",
    },
    {
        name: "TaskFlow",
        year: "2026",
        tint: "#e98bf0",
        image: taskflow,
        blurb: "A minimal, local-first task tracker with priorities, due dates, search and keyboard shortcuts.",
        stack: ["HTML", "CSS", "JavaScript"],
        live: "https://task-flow-theta-ruddy.vercel.app/",
        code: "https://github.com/aniketkumar7/Task-Flow",
    },
];

export const designs = [
    { name: "Auth UI", href: "https://www.figma.com/proto/GpmHQsK3nTkFwaKi9IQM1T/sign-up-page" },
    { name: "Nike shoe UI", href: "https://www.figma.com/proto/MC3mX6GDgWdyq1NO635pTu/NIKE-SHOES-UI" },
];

export const stack = [
    { group: "language", items: ["TypeScript", "JavaScript", "Python", "C++"] },
    { group: "frontend", items: ["React", "Next.js", "Vite", "Tailwind", "Framer Motion", "Zustand"] },
    { group: "backend", items: ["Node.js", "FastAPI", "Supabase", "MongoDB", "Qdrant", "NATS"] },
    { group: "tools", items: ["Git", "Figma", "Vercel", "Cloudflare", "AWS"] },
];
