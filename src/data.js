import bookmarky from "./assets/shot-bookmarky.webp";
import daybuddy from "./assets/shot-daybuddy.webp";
import atelier from "./assets/shot-atelier.webp";
import kaarigar from "./assets/shot-kaarigar.webp";
import foodie from "./assets/shot-foodie.webp";
import netflix from "./assets/shot-netflix.webp";
import taskflow from "./assets/shot-taskflow.webp";

export const GITHUB_USER = "aniketkumar7";

export const profile = {
    name: "Aniket Kumar",
    role: "Software Developer",
    company: "CatalyzeX",
    location: "India",
    timeZone: "Asia/Kolkata",
    email: "aniketkumar639597@gmail.com",
    // TODO: resume link
    resume: "",
    intro: "I build web products end to end: frontend platforms, the services behind them, and the small details that make them feel fast.",
};

export const socials = [
    { label: "GitHub", handle: "@aniketkumar7", href: "https://github.com/aniketkumar7" },
    { label: "LinkedIn", handle: "in/aniketkumar07", href: "https://www.linkedin.com/in/aniketkumar07/" },
    { label: "Medium", handle: "@aniketkumar639597", href: "https://medium.com/@aniketkumar639597" },
    { label: "Figma", handle: "@aniketkumar7", href: "https://www.figma.com/@aniketkumar7" },
];

export const facts = [
    { label: "based in", value: "India (IST)" },
    { label: "currently", value: "Software Developer, CatalyzeX" },
    { label: "studied", value: "B.Tech CSE, MIET Meerut ’25" },
    { label: "focus", value: "Frontend platforms, search, DX" },
];

export const experience = [
    {
        company: "CatalyzeX",
        roles: [
            { title: "Software Developer", period: "Sep 2025 — Present" },
            { title: "Software Developer Intern", period: "Jun 2025 — Aug 2025" },
        ],
        location: "Remote",
        current: true,
        tldr: "Primary frontend owner on four products, growing into backend, services and infra.",
        stats: [
            { value: "4", label: "products" },
            { value: "11+", label: "repos" },
            { value: "~800", label: "commits" },
        ],
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
        // How the role grew, oldest first
        timeline: [
            { period: "Jun — Jul 2025", focus: "Client and admin portals for a law firm" },
            { period: "Jul 2025 — Feb 2026", focus: "Feature owner on JellyFish and Intake Portal" },
            { period: "Feb — Jun 2026", focus: "Legal-X frontend plus backend domain work" },
            { period: "Jun 2026 — now", focus: "Architecture: RecordX platform, Global Search" },
        ],
        stack: ["React", "TypeScript", "Vite", "FastAPI", "Qdrant", "NATS"],
    },
    {
        company: "Tublian",
        roles: [{ title: "Open Source Intern", period: "Apr 2024 — May 2024" }],
        location: "Remote",
        tldr: "Contributed to 5+ open-source projects and learned to ship in shared, public codebases.",
        highlights: [],
        stack: ["Git", "GitHub", "Open source"],
    },
];

export const projects = [
    {
        name: "Bookmarky",
        type: "Full-stack web app",
        year: "2026",
        image: bookmarky,
        live: "https://link-vault-two.vercel.app/",
        code: "https://github.com/aniketkumar7/LinkVault",
        oneLiner: "Links from reels, threads and docs get lost in chats and tabs. Bookmarky saves anything with one paste and makes it findable months later.",
        points: [
            "Paste any URL and the title, description, image and favicon are fetched for you",
            "Coloured folders, tags, favourites, and search across titles, notes, URLs and tags",
            "Bulk and browser-bookmark import, duplicate detection and PDF export",
        ],
        stack: ["React", "TypeScript", "Vite", "Supabase", "Node.js"],
    },
    {
        name: "Day Buddy",
        type: "Productivity workspace",
        year: "2026",
        image: daybuddy,
        live: "https://tydo-rho.vercel.app/",
        code: "https://github.com/aniketkumar7/Tydo",
        oneLiner: "Planning, focus and review in one calm app instead of five tabs.",
        points: [
            "Todos in list and kanban views, habits with streaks, and a focus timer",
            "Google Calendar sync, a GitHub inbox, notes and bookmarks in one place",
            "Command palette, analytics and XP, with Supabase auth (email, Google, GitHub)",
        ],
        stack: ["React 19", "TypeScript", "Zustand", "Framer Motion", "Supabase"],
    },
    {
        name: "Atelier",
        type: "Art marketplace",
        year: "2026",
        image: atelier,
        live: "https://art-marketplace.aniketkumar639597.workers.dev/",
        code: "https://github.com/aniketkumar7/Atelier",
        oneLiner: "A neo-brutalist storefront and admin for selling original art, wallpapers and Figma resources.",
        points: [
            "Gallery with filters, curated collections, commission requests and WhatsApp inquiries",
            "Admin with JWT auth (PBKDF2 via Web Crypto), Cloudinary uploads, drag-to-reorder and bulk edits",
            "Built-in analytics, newsletter and testimonial moderation, served from the edge",
        ],
        stack: ["Next.js 16", "TypeScript", "Cloudflare Workers", "D1", "Cloudinary"],
    },
    {
        name: "Kaarigar Studio",
        type: "Client website",
        year: "2026",
        image: kaarigar,
        live: "https://kaarigar-studio-mu.vercel.app/",
        code: "https://github.com/aniketkumar7/kaarigar-studio",
        oneLiner: "Marketing site for a Delhi laser cutting and CNC workshop, built to rank on search and turn visits into quotes.",
        points: [
            "Every page pre-rendered to static HTML, with sitemap and robots generated at build",
            "Content-driven: adding a service, industry or material updates pages, nav and sitemap",
            "Services, industries, materials, blog and shop, with quote and WhatsApp CTAs throughout",
        ],
        stack: ["React 19", "React Router v7", "Tailwind v4", "Vite"],
    },
    {
        name: "Foodie",
        type: "Community platform",
        year: "2025",
        image: foodie,
        live: "https://food-blog-app-green.vercel.app/",
        code: "https://github.com/aniketkumar7/FOOD_BLOG_APP",
        oneLiner: "Discover, cook and share recipes, with AI helping you plan meals from what you have.",
        points: [
            "Accounts, recipe publishing and management with secure ownership checks",
            "AI recipe ideas and meal planning, plus a weekly feed of top recipes",
            "Light and dark themes with a playful, illustrated brand",
        ],
        stack: ["React", "Node.js", "MongoDB", "Tailwind"],
    },
];

export const earlier = [
    {
        name: "Netflix GPT",
        year: "2024",
        image: netflix,
        blurb: "GPT-powered movie suggestions on top of TMDB, with Firebase auth.",
        live: "https://netflix-gpt-jade-five.vercel.app/",
        code: "https://github.com/aniketkumar7/NETFLIX_GPT",
    },
    {
        name: "TaskFlow",
        year: "2026",
        image: taskflow,
        blurb: "A minimal, local-first task tracker with priorities, due dates and shortcuts.",
        live: "https://task-flow-theta-ruddy.vercel.app/",
        code: "https://github.com/aniketkumar7/Task-Flow",
    },
];

export const designs = [
    { name: "Auth UI", href: "https://www.figma.com/proto/GpmHQsK3nTkFwaKi9IQM1T/sign-up-page" },
    { name: "Nike shoe UI", href: "https://www.figma.com/proto/MC3mX6GDgWdyq1NO635pTu/NIKE-SHOES-UI" },
];

export const stack = [
    { group: "Language", items: ["TypeScript", "JavaScript", "Python", "C++"] },
    { group: "Frontend", items: ["React", "Next.js", "Vite", "Tailwind", "Framer Motion", "Zustand"] },
    { group: "Backend", items: ["Node.js", "FastAPI", "Supabase", "MongoDB", "Qdrant", "NATS"] },
    { group: "Tools", items: ["Git", "Figma", "Vercel", "Cloudflare", "AWS"] },
];
