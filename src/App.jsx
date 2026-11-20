import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import ThemeToggle from "./components/ThemeToggle";
import NowStrip from "./components/NowStrip";
import Experience from "./components/Experience";
import ProjectFolders from "./components/ProjectFolders";
import GitHubGraph from "./components/GitHubGraph";
import { education, profile, stack } from "./data";
import banner from "./assets/banner.webp";
import avatar from "./assets/avatar.webp";
import rest from "./assets/rest.webp";

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

function CopyEmail({ className = "" }) {
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
        <button type="button" className={`copy ${className}`} onClick={copy} aria-label="copy email">
            <span>{profile.email}</span>
            {copied ? <FiCheck /> : <FiCopy />}
        </button>
    );
}

const Section = ({ id, title, children, aside }) => (
    <motion.section
        id={id}
        className="section"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
        <div className="section-head">
            <h2 className="section-title">{title}</h2>
            {aside}
        </div>
        {children}
    </motion.section>
);

export default function App() {
    const time = useClock();

    return (
        <MotionConfig reducedMotion="user">
            <header className="topbar">
                <div className="page topbar-inner">
                    <a href="#top" className="monogram" aria-label="home">ak.</a>
                    <nav className="nav">
                        <a href="#work">work</a>
                        <a href="#projects">projects</a>
                        <a href="#contact">contact</a>
                        <ThemeToggle />
                    </nav>
                </div>
            </header>

            <main id="top" className="page">
                <div className="hero">
                    <div className="banner">
                        <img src={banner} alt="Illustration of a boy resting on a mountain ridge beside a jeep" fetchPriority="high" />
                    </div>
                    <img className="avatar" src={avatar} alt="Aniket Kumar" width="112" height="112" />

                    <h1 className="name">{profile.name.toLowerCase()}</h1>
                    <p className="tagline mono">
                        {profile.role} @ {profile.company.toLowerCase()}
                    </p>

                    <div className="meta mono">
                        <span>◷ {time} in {profile.location.toLowerCase()}</span>
                        <CopyEmail />
                    </div>

                    <div className="pills">
                        {profile.links.map((l) => (
                            <a key={l.label} className="pill" href={l.href} target="_blank" rel="noreferrer">
                                {l.label}
                            </a>
                        ))}
                        {profile.resume && (
                            <a className="pill pill-solid" href={profile.resume} target="_blank" rel="noreferrer">
                                resume <FiArrowUpRight />
                            </a>
                        )}
                    </div>

                    <NowStrip />
                </div>

                <Section id="about" title="about">
                    <div className="prose">
                        <p>
                            I build products for the web. Mostly the frontend, more and more of what sits behind it.
                            At CatalyzeX I&apos;m the main frontend owner on four products, from setting up the monorepo
                            to a search service that became one of our most used features.
                        </p>
                        <p>
                            Outside work I build tools I actually use, like Bookmarky for links and Day Buddy for my day.
                            I like quiet, fast interfaces that get out of the way, and I care about why something is
                            being built before how.
                        </p>
                    </div>
                </Section>

                <Section id="work" title="experience">
                    <Experience />
                    <div className="edu">
                        <span>{education.degree}</span>
                        <span className="mono faint">{education.school} · {education.period}</span>
                    </div>
                </Section>

                <Section id="projects" title="projects" aside={<span className="hint">tap a folder to open it</span>}>
                    <ProjectFolders />
                </Section>

                <Section id="activity" title="github">
                    <GitHubGraph />
                </Section>

                <Section id="stack" title="stack">
                    <dl className="stack">
                        {stack.map((s, i) => (
                            <div key={s.group} className="stack-row">
                                <dt className="mono faint">0{i + 1} {s.group}</dt>
                                <dd className="chips">
                                    {s.items.map((it) => <span key={it} className="chip">{it}</span>)}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </Section>

                <Section id="contact" title="say hi">
                    <p className="muted">
                        Open to interesting work, side projects, or just a good conversation about building things.
                    </p>
                    <CopyEmail className="copy-big" />
                </Section>

                <figure className="rest">
                    <img src={rest} alt="Illustration of a boy napping in the grass" loading="lazy" />
                    <figcaption className="hand">done for the day? so am i.</figcaption>
                </figure>

                <footer className="footer mono faint">
                    <span>© {new Date().getFullYear()} aniket kumar</span>
                    <span>{time} ist</span>
                </footer>
            </main>
        </MotionConfig>
    );
}
