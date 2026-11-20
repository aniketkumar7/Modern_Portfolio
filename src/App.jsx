import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy, FiMail } from "react-icons/fi";
import ThemeToggle from "./components/ThemeToggle";
import NowStrip from "./components/NowStrip";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import GitHubGraph from "./components/GitHubGraph";
import { facts, profile, socials, stack } from "./data";
import banner from "./assets/banner.webp";
import avatar from "./assets/avatar.webp";
import rest from "./assets/rest.webp";

const NAV = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const fmtTime = () =>
    new Date().toLocaleTimeString("en-IN", { timeZone: profile.timeZone, hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();

function useClock() {
    const [t, setT] = useState(fmtTime);
    useEffect(() => {
        const id = setInterval(() => setT(fmtTime()), 15000);
        return () => clearInterval(id);
    }, []);
    return t;
}

function CopyEmail({ className = "", label }) {
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1600);
        } catch {
            window.location.href = `mailto:${profile.email}`;
        }
    };
    return (
        <button type="button" className={`copy ${className}`} onClick={copy} aria-label="Copy email address">
            <span>{copied ? "Copied!" : label ?? profile.email}</span>
            {copied ? <FiCheck /> : <FiCopy />}
        </button>
    );
}

// Two-column section: sticky title + handwritten note on the left, content on the right
const Section = ({ id, title, note, wide, children }) => (
    <section id={id} className={`section${wide ? " section-wide" : ""}`}>
        <div className="rail">
            <h2 className="section-title">{title}</h2>
            {note && <p className="note">{note}</p>}
        </div>
        <motion.div
            className="section-body"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    </section>
);

export default function App() {
    const time = useClock();

    return (
        <MotionConfig reducedMotion="user">
            <a className="skip" href="#main">Skip to content</a>
            <header className="topbar">
                <div className="wrap topbar-inner">
                    <a href="#top" className="monogram" aria-label="Back to top">ak.</a>
                    <nav className="nav" aria-label="Sections">
                        {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
                        <ThemeToggle />
                    </nav>
                </div>
            </header>

            <main id="main" className="wrap">
                <div id="top" className="hero">
                    <div className="banner">
                        <img src={banner} alt="Illustration of a boy resting on a mountain ridge beside a jeep" fetchPriority="high" />
                    </div>

                    <div className="hero-grid">
                        <div className="hero-main">
                            <img className="avatar" src={avatar} alt="Illustrated portrait of Aniket" width="128" height="128" />
                            <h1 className="name">{profile.name}</h1>
                            <p className="tagline">{profile.intro}</p>
                            <div className="hero-actions">
                                <a className="btn btn-solid" href="#projects">See my work</a>
                                <a className="btn" href={`mailto:${profile.email}`}><FiMail /> Email me</a>
                                {profile.resume && (
                                    <a className="btn" href={profile.resume} target="_blank" rel="noreferrer">
                                        Resume <FiArrowUpRight />
                                    </a>
                                )}
                            </div>
                        </div>

                        <aside className="status" aria-label="Quick info">
                            <dl className="status-list mono">
                                <div><dt>role</dt><dd>{profile.role} @ {profile.company}</dd></div>
                                <div><dt>local</dt><dd>{time} · {profile.location}</dd></div>
                                <div><dt>status</dt><dd><span className="live-dot" /> open to good problems</dd></div>
                                <div><dt>email</dt><dd><CopyEmail /></dd></div>
                            </dl>
                            <NowStrip />
                        </aside>
                    </div>
                </div>

                <Section id="about" title="About" note="the short version">
                    <div className="prose">
                        <p>
                            I&apos;m a software developer at <strong>CatalyzeX</strong>, where I&apos;ve been the main frontend
                            owner on four products. That has meant setting up the monorepo the team ships on, building a
                            search service that became one of our most used features, and a lot of careful UI work in between.
                        </p>
                        <p>
                            Outside work I build tools I actually use, like Bookmarky for links and Day Buddy for my day.
                            I like quiet, fast interfaces that get out of the way, and I care about why something is
                            being built before how.
                        </p>
                    </div>
                    <dl className="facts">
                        {facts.map((f) => (
                            <div key={f.label} className="fact">
                                <dt className="mono faint">{f.label}</dt>
                                <dd>{f.value}</dd>
                            </div>
                        ))}
                    </dl>
                </Section>

                <Section id="work" title="Experience" note="where I've shipped">
                    <Experience />
                </Section>

                <Section
                    id="projects"
                    title="Projects"
                    wide
                    note={<><span className="on-hover">hover a site to scroll it ↓</span><span className="on-touch">swipe inside a site ↓</span></>}
                >
                    <Projects />
                </Section>

                <Section id="activity" title="GitHub" note="mostly private repos, still counts">
                    <GitHubGraph />
                </Section>

                <Section id="stack" title="Stack" note="what I reach for">
                    <dl className="stack">
                        {stack.map((s, i) => (
                            <div key={s.group} className="stack-row">
                                <dt className="mono faint">0{i + 1} · {s.group}</dt>
                                <dd className="chips">
                                    {s.items.map((it) => <span key={it} className="chip">{it}</span>)}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </Section>

                <Section id="contact" title="Say hi" note="I reply to every email">
                    <div className="cta">
                        <p className="cta-title">
                            Working on something?<br />
                            <span>Let&apos;s build it.</span>
                        </p>
                        <p className="muted">
                            Open to interesting roles, freelance work, or a good conversation about building things.
                        </p>
                        <div className="cta-actions">
                            <a className="btn btn-solid" href={`mailto:${profile.email}`}><FiMail /> Send an email</a>
                            <CopyEmail className="btn" label="Copy address" />
                        </div>
                    </div>
                    <ul className="socials">
                        {socials.map((s) => (
                            <li key={s.label}>
                                <a href={s.href} target="_blank" rel="noreferrer">
                                    <span>{s.label}</span>
                                    <span className="mono faint">{s.handle}</span>
                                    <FiArrowUpRight className="social-arrow" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Section>

                <figure className="rest">
                    <img src={rest} alt="Illustration of a boy napping in the grass" loading="lazy" />
                    <figcaption className="hand">done for the day? so am i.</figcaption>
                </figure>

                <footer className="footer">
                    <nav className="footer-nav" aria-label="Footer">
                        {NAV.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
                    </nav>
                    <span className="mono faint">© {new Date().getFullYear()} Aniket Kumar · {time} IST</span>
                </footer>
            </main>
        </MotionConfig>
    );
}
