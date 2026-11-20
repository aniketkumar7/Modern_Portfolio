import { forwardRef, useEffect, useMemo, useState } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Projects.css";

// Import images
import movie from "../assets/movie.png";
import weather from "../assets/weather.png";
import obys from "../assets/obys.png";
import reactIcon from "../assets/javascript-react.svg";
import firebaseIcon from "../assets/firebase-icon.svg";
import jsIcon from "../assets/javascript.svg";
import htmlIcon from "../assets/html5.svg";
import cssIcon from "../assets/css3.svg";
import signIcon from "../assets/sign.png";
import figmaIcon from "../assets/figma-light.svg";
import nikeIcon from "../assets/nike.png";
import tailwindIcon from "../assets/tailwindcss.svg";
import mongoIcon from "../assets/mongodb.svg";
import food from "../assets/food.png";
import task from "../assets/task.png";
import linkVaultBanner from "../assets/linkvault.png";
import cocBanner from "../assets/coc.png";
import supabaseIcon from "../assets/supabase-dark.svg";
import nodeIcon from "../assets/nodejs-icon.svg";
import tsIcon from "../assets/typescript (1).svg";
import nextIcon from "../assets/nextjs.svg";
import tydo from "../assets/tydo.png";
import atelier from "../assets/atelier.png";
import kaarigar from "../assets/kaarigar.png";

const webProjects = [
    {
        id: 2,
        title: "Bookmarky",
        category: "Full Stack",
        image: linkVaultBanner,
        description: "Personal bookmark library that turns links, screenshots and files into searchable folders: rich previews, tags, bulk and browser-bookmark import, PDF export.",
        liveLink: "https://link-vault-two.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/LinkVault",
        technologies: [
            { name: "React", icon: reactIcon },
            { name: "TypeScript", icon: tsIcon },
            { name: "Tailwind", icon: tailwindIcon },
            { name: "Supabase", icon: supabaseIcon },
            { name: "Node.js", icon: nodeIcon },
        ],
        year: "2026",
    },
    {
        id: 10,
        title: "Tydo",
        category: "Productivity",
        image: tydo,
        description: "Productivity workspace combining todos (list + kanban), habits and streaks, focus timer, notes, Google Calendar sync, analytics, and a command palette.",
        liveLink: "https://tydo-rho.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/Tydo",
        technologies: [
            { name: "React", icon: reactIcon },
            { name: "TypeScript", icon: tsIcon },
            { name: "Tailwind", icon: tailwindIcon },
            { name: "Supabase", icon: supabaseIcon },
        ],
        year: "2026",
    },
    {
        id: 11,
        title: "Atelier",
        category: "Full Stack",
        image: atelier,
        description: "Neo-brutalist art gallery and marketplace with collections, commissions, and an admin dashboard (JWT auth, bulk edits, analytics) on Cloudflare Workers + D1.",
        liveLink: "https://art-marketplace.aniketkumar639597.workers.dev/",
        codeLink: "https://github.com/aniketkumar7/Atelier",
        technologies: [
            { name: "Next.js", icon: nextIcon },
            { name: "TypeScript", icon: tsIcon },
            { name: "Cloudflare" },
        ],
        year: "2026",
    },
    {
        id: 12,
        title: "Kaarigar Studio",
        category: "Client Work",
        image: kaarigar,
        description: "SEO-first business site for a Delhi laser cutting and CNC studio. Every page pre-rendered to static HTML, content-driven services, blog and shop.",
        liveLink: "https://kaarigar-studio-mu.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/kaarigar-studio",
        technologies: [
            { name: "React", icon: reactIcon },
            { name: "React Router" },
            { name: "Tailwind", icon: tailwindIcon },
        ],
        year: "2026",
    },
    {
        id: 1,
        title: "Foodie",
        category: "Full Stack",
        image: food,
        description: "Community recipe platform to discover, cook, and share recipes, with AI-powered meal planning and recipe suggestions.",
        liveLink: "https://food-blog-app-green.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/FOOD_BLOG_APP",
        technologies: [
            { name: "React", icon: reactIcon },
            { name: "Tailwind", icon: tailwindIcon },
            { name: "MongoDB", icon: mongoIcon },
            { name: "JavaScript", icon: jsIcon },
            { name: "Node.js", icon: nodeIcon },
        ],
        year: "2025",
    },
    {
        id: 3,
        title: "Netflix GPT",
        category: "AI Powered",
        image: movie,
        description: "GPT-3 powered movie recommendation engine with TMDB API integration.",
        liveLink: "https://netflix-gpt-jade-five.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/NETFLIX_GPT",
        technologies: [
            { name: "React", icon: reactIcon },
            { name: "Tailwind", icon: tailwindIcon },
            { name: "Firebase", icon: firebaseIcon },
        ],
        year: "2024",
    },
    {
        id: 4,
        title: "TaskFlow",
        category: "Productivity",
        image: task,
        description: "Minimal, fast, local-first task tracker with priorities, due dates, search, keyboard shortcuts, and light/dark themes.",
        liveLink: "https://task-flow-theta-ruddy.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/Task-Flow",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
        ],
        year: "2024",
    },
    {
        id: 5,
        title: "OBYS Clone",
        category: "UI/UX",
        image: obys,
        description: "Pixel-perfect design clone with smooth animations.",
        liveLink: "https://obys-clone.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/OBYS-Clone",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
        ],
        year: "2023",
    },
    {
        id: 6,
        title: "Weather App",
        category: "API",
        image: weather,
        description: "Real-time weather forecasts with location-based data.",
        liveLink: "https://weather-app-orpin-chi-53.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/Weather_App",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
        ],
        year: "2023",
    },
];

const figmaDesigns = [
    {
        id: 7,
        title: "Auth UI Design",
        category: "UI Design",
        image: signIcon,
        description: "Modern authentication page designs with clean aesthetics.",
        liveLink: "https://www.figma.com/proto/GpmHQsK3nTkFwaKi9IQM1T/sign-up-page",
        technologies: [{ name: "Figma", icon: figmaIcon }],
        year: "2023",
    },
    {
        id: 8,
        title: "Nike Shoe UI",
        category: "Product Design",
        image: nikeIcon,
        description: "Premium product showcase design with dynamic layout.",
        liveLink: "https://www.figma.com/proto/MC3mX6GDgWdyq1NO635pTu/NIKE-SHOES-UI",
        technologies: [{ name: "Figma", icon: figmaIcon }],
        year: "2023",
    },
    {
        id: 9,
        title: "COC Landing Page",
        category: "Landing Page",
        image: cocBanner,
        description: "Landing page concept design (Figma).",
        // TODO: paste your Figma prototype/file link here
        liveLink: "",
        technologies: [{ name: "Figma", icon: figmaIcon }],
        year: "2026",
    },
];

const Projects = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();
    const [activeTab, setActiveTab] = useState("web");
    const [activeId, setActiveId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const currentProjects = useMemo(
        () => (activeTab === "web" ? webProjects : figmaDesigns),
        [activeTab]
    );

    useEffect(() => {
        setActiveId(currentProjects[0]?.id ?? null);
    }, [currentProjects]);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 900px)");
        const onChange = (e) => setIsMobile(e.matches);
        setIsMobile(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    const activeProject = useMemo(() => {
        return currentProjects.find((p) => p.id === activeId) ?? currentProjects[0];
    }, [activeId, currentProjects]);

    const activeIndex = useMemo(() => {
        const idx = currentProjects.findIndex((p) => p.id === activeId);
        return idx >= 0 ? idx : 0;
    }, [activeId, currentProjects]);

    const ActionButton = ({ kind, href }) => {
        const label = kind === "view" ? "View" : "GitHub";
        const className = kind === "view" ? "proj-act proj-act-primary" : "proj-act proj-act-ghost";

        if (!href) {
            return (
                <button type="button" className={`${className} is-disabled`} disabled>
                    {label}
                    {kind === "view" ? (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    )}
                </button>
            );
        }

        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
                {label}
                {kind === "view" ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                ) : (
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                )}
            </a>
        );
    };

    return (
        <section
            className={`proj ${theme}`}
            ref={ref}
            style={{ "--accent": textColor }}
        >
            <Marquee 
                items={Array(5).fill("Projects")} 
                textColor={textColor} 
                theme={theme} 
            />

            <div className="proj-container">
                {/* Header */}
                <header className="proj-header">
                    <span className="proj-eyebrow">Portfolio</span>
                    <h2 className="proj-heading">Selected Works</h2>
                    <p className="proj-subtext">
                        A showcase of my recent projects in web development and design.
                    </p>
                </header>

                {/* Tab Switcher */}
                <div className="proj-tabs">
                    <button 
                        className={`proj-tab ${activeTab === 'web' ? 'active' : ''}`}
                        onClick={() => setActiveTab('web')}
                    >
                        <span className="proj-tab-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M3 9h18M9 21V9" />
                            </svg>
                        </span>
                        <span className="proj-tab-text">Web Projects</span>
                        <span className="proj-tab-count">{webProjects.length}</span>
                    </button>
                    <button 
                        className={`proj-tab ${activeTab === 'figma' ? 'active' : ''}`}
                        onClick={() => setActiveTab('figma')}
                    >
                        <span className="proj-tab-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5zM12 2h3.5a3.5 3.5 0 110 7H12V2zM12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0zM5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0zM5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z"/>
                            </svg>
                        </span>
                        <span className="proj-tab-text">Figma Designs</span>
                        <span className="proj-tab-count">{figmaDesigns.length}</span>
                    </button>
                </div>

                {/* Unique split layout (list + preview) */}
                {isMobile ? (
                    <>
                        <div className="proj-carousel-hint" aria-hidden="true">
                            <span className="proj-carousel-hint-text">Swipe →</span>
                        </div>
                        <div className="proj-carousel" aria-label="Projects">
                        {currentProjects.map((p, i) => (
                            <article key={p.id} className="proj-mobile-card">
                                <div className="proj-preview-media">
                                    <img src={p.image} alt={p.title} loading="lazy" />
                                    <div className="proj-preview-media-overlay" />
                                    <div className="proj-preview-top">
                                        <span className="proj-preview-pill">{p.category}</span>
                                        <span className="proj-preview-count">
                                            {String(i + 1).padStart(2, "0")} / {String(currentProjects.length).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="proj-preview-actions">
                                        <ActionButton kind="view" href={p.liveLink} />
                                        <ActionButton kind="code" href={p.codeLink} />
                                    </div>
                                </div>

                                <div className="proj-preview-body">
                                    <h3 className="proj-preview-title">{p.title}</h3>
                                    <p className="proj-preview-desc">{p.description}</p>

                                    <div className="proj-preview-tech">
                                        {p.technologies.map((t) => (
                                            <span key={t.name} className="proj-chip">
                                                {t.icon ? (
                                                    <img src={t.icon} alt="" aria-hidden="true" />
                                                ) : (
                                                    <span className="proj-chip-fallback" aria-hidden="true">
                                                        {t.name.slice(0, 1).toUpperCase()}
                                                    </span>
                                                )}
                                                <span className="proj-chip-text">{t.name}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                        </div>
                    </>
                ) : (
                    <div className="proj-split" key={activeTab}>
                        <div className="proj-list" role="listbox" aria-label="Projects">
                            {currentProjects.map((p, i) => {
                                const isActive = p.id === activeId;
                                return (
                                    <button
                                        key={p.id}
                                        type="button"
                                        className={`proj-row ${isActive ? "active" : ""}`}
                                        onClick={() => setActiveId(p.id)}
                                        aria-selected={isActive}
                                    >
                                        <span className="proj-row-num">{String(i + 1).padStart(2, "0")}</span>
                                        <span className="proj-row-main">
                                            <span className="proj-row-title">{p.title}</span>
                                            <span className="proj-row-sub">
                                                <span className="proj-row-cat">{p.category}</span>
                                            </span>
                                        </span>
                                        <span className="proj-row-arrow" aria-hidden="true">↗</span>
                                    </button>
                                );
                            })}
                        </div>

                        {activeProject && (
                            <div className="proj-preview" aria-live="polite">
                                <div className="proj-preview-head" aria-hidden="true">
                                    <span className="proj-preview-head-label">Preview</span>
                                    <span className="proj-preview-head-tip">Pick a project on the left →</span>
                                </div>
                                <div className="proj-preview-card">
                                    <div className="proj-preview-media">
                                        <img src={activeProject.image} alt={activeProject.title} loading="lazy" />
                                        <div className="proj-preview-media-overlay" />
                                        <div className="proj-preview-top">
                                            <span className="proj-preview-pill">{activeProject.category}</span>
                                            <span className="proj-preview-count">
                                                {String(activeIndex + 1).padStart(2, "0")} / {String(currentProjects.length).padStart(2, "0")}
                                            </span>
                                        </div>
                                        <div className="proj-preview-actions">
                                            <ActionButton kind="view" href={activeProject.liveLink} />
                                            <ActionButton kind="code" href={activeProject.codeLink} />
                                        </div>
                                    </div>

                                    <div className="proj-preview-body">
                                        <h3 className="proj-preview-title">{activeProject.title}</h3>
                                        <p className="proj-preview-desc">{activeProject.description}</p>

                                        <div className="proj-preview-tech">
                                            {activeProject.technologies.map((t) => (
                                                <span key={t.name} className="proj-chip">
                                                    {t.icon ? (
                                                        <img src={t.icon} alt="" aria-hidden="true" />
                                                    ) : (
                                                        <span className="proj-chip-fallback" aria-hidden="true">
                                                            {t.name.slice(0, 1).toUpperCase()}
                                                        </span>
                                                    )}
                                                    <span className="proj-chip-text">{t.name}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* CTA */}
                <div className="proj-cta-wrap">
                    <a 
                        href={activeTab === "web" ? "https://github.com/aniketkumar7" : "https://www.figma.com/@aniketkumar7"} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="proj-cta-btn"
                    >
                        <span>{activeTab === "web" ? "View All on GitHub" : "View All on Figma"}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
});

Projects.displayName = "Projects";

export default Projects;
