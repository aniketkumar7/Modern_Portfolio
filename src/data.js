import bookmarky from "./assets/shot-bookmarky.webp";
import daybuddy from "./assets/shot-daybuddy.webp";
import atelier from "./assets/shot-atelier.webp";
import kaarigar from "./assets/shot-kaarigar.webp";
import foodie from "./assets/shot-foodie.webp";
import netflix from "./assets/shot-netflix.webp";
import taskflow from "./assets/shot-taskflow.webp";

export const GITHUB_USER = "aniketkumar7";

// Whole months from a start month (1-12) to now, inclusive
const monthsSince = (year, month) => {
    const d = new Date();
    return (d.getFullYear() - year) * 12 + (d.getMonth() + 1 - month) + 1;
};

export const profile = {
    name: "Aniket Kumar",
    role: "Software Engineer",
    company: "CatalyzeX",
    location: "India",
    timeZone: "Asia/Kolkata",
    email: "aniketkumar639597@gmail.com",
    github: "https://github.com/aniketkumar7",
    // TODO: resume link
    resume: "",
    // GoatCounter site code (the "xyz" in xyz.goatcounter.com). Empty = visitor count hidden.
    goatcounter: "",
    intro: "I build web products end to end: frontend platforms, the services behind them, and the small details that make them feel fast.",
};

export const socials = [
    { label: "GitHub", handle: "@aniketkumar7", href: "https://github.com/aniketkumar7" },
    { label: "LinkedIn", handle: "in/aniketkumar07", href: "https://www.linkedin.com/in/aniketkumar07/" },
    { label: "Medium", handle: "@aniketkumar639597", href: "https://medium.com/@aniketkumar639597" },
    { label: "Figma", handle: "@aniketkumar7", href: "https://www.figma.com/@aniketkumar7" },
];

export const education = { school: "MIET, Meerut", degree: "B.Tech, Computer Science" };

// Small things I care about, shown as one quiet line under About
export const principles = ["why before how", "fast is a feature", "own it end to end"];

// Career as a left-to-right git graph, oldest → newest.
// lane: "main" (me), "up" (side branch above), "down" (side branch below).
// era groups nodes under a label strip so it's clear where each stop happened.
export const careerSummary = `${monthsSince(2025, 6)} months at CatalyzeX · 4 products · 14 repos · 1,000+ commits`;

export const eras = [
    { label: "MIET Meerut", sub: "B.Tech CSE", from: 0, to: 2 },
    { label: "CatalyzeX", sub: "intern → full-time", from: 3, to: 8, current: true },
];

export const journey = [
    {
        lane: "main",
        date: "2021",
        short: "B.Tech",
        title: "B.Tech CSE",
        org: "MIET Meerut",
        body: "CS fundamentals, DSA in C++, and my first web projects.",
        tag: "init",
    },
    {
        lane: "up",
        date: "Apr 2024",
        short: "Tublian",
        title: "Open Source Intern",
        org: "Tublian",
        body: "Contributed to 5+ open-source projects.",
        stack: ["Git", "GitHub"],
    },
    {
        lane: "main",
        date: "2025",
        short: "Graduated",
        title: "Graduated",
        org: "MIET Meerut",
        body: "Wrapped up the B.Tech in Computer Science & Engineering.",
        tag: "v1.0",
    },
    {
        lane: "down",
        date: "Jun 2025",
        short: "Intern",
        title: "Software Engineer Intern",
        org: "CatalyzeX",
        body: "Client and admin portals for a law firm: client management, invitations, files and settings.",
        stack: ["React", "Next.js"],
    },
    {
        lane: "main",
        date: "Sep 2025",
        short: "Full-time",
        title: "Software Engineer",
        org: "CatalyzeX",
        body: "Converted to full-time. Primary frontend owner across four products.",
        tag: "full-time",
        merge: true,
    },
    {
        lane: "main",
        date: "2025",
        short: "Intake",
        title: "Intake Portal",
        org: "CatalyzeX",
        body: "Primary frontend dev: OAuth, a leads → clients CRM, bulk import and analytics.",
        stack: ["React", "OAuth"],
    },
    {
        lane: "main",
        date: "2025",
        short: "JellyFish",
        title: "JellyFish",
        org: "CatalyzeX",
        body: "The growth layer: streaks, leaderboards, badges, referrals and share cards.",
        stack: ["React", "Animations"],
    },
    {
        lane: "main",
        date: "Feb 2026",
        short: "Legal-X",
        title: "Legal-X",
        org: "CatalyzeX",
        body: "Filters and Saved Views, the Cases module, DOCX preview and theming.",
        stack: ["React", "FastAPI"],
    },
    {
        lane: "main",
        date: "Jun 2026 — now",
        short: "RecordX",
        title: "RecordX platform",
        org: "CatalyzeX",
        body: "The frontend the whole team ships on: one monorepo, four apps, SSR → Vite SPA.",
        points: [
            "Global Search: FastAPI + Qdrant service, shipped in three weeks",
            "Neos partner integration: two-way sync of requests, notes and documents",
            "Chrome extension side panel for partner case pages",
        ],
        stack: ["React", "Vite", "FastAPI", "Qdrant"],
        head: true,
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
    {
        name: "TaskFlow",
        type: "Task tracker",
        year: "2026",
        image: taskflow,
        live: "https://task-flow-theta-ruddy.vercel.app/",
        code: "https://github.com/aniketkumar7/Task-Flow",
        oneLiner: "A minimal, local-first task tracker: no account, no backend, just fast.",
        points: [
            "Priorities, due dates and times, notes, and search with filters",
            "Keyboard-first: / to search, n to add a task",
            "Everything stays in local storage, with light and dark themes",
        ],
        stack: ["HTML", "CSS", "JavaScript"],
    },
    {
        name: "Netflix GPT",
        type: "AI side project",
        year: "2024",
        image: netflix,
        live: "https://netflix-gpt-jade-five.vercel.app/",
        code: "https://github.com/aniketkumar7/NETFLIX_GPT",
        oneLiner: "A Netflix-style movie browser where you describe a mood and GPT suggests what to watch.",
        points: [
            "Firebase sign-up and sign-in with a protected browse page",
            "GPT-powered search that turns a prompt into movie picks",
            "Movie data and posters from the TMDB API",
        ],
        stack: ["React", "Tailwind", "Firebase", "TMDB API"],
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
