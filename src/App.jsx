import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { FiArrowUpRight, FiBookmark, FiCheck, FiCopy, FiGithub, FiLayers, FiLinkedin, FiMail, FiMapPin, FiMoon, FiServer, FiSun, FiZap } from "react-icons/fi";
import { SiFigma, SiMedium } from "react-icons/si";
import ThemeToggle from "./components/ThemeToggle";
import NowStrip from "./components/NowStrip";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Insights from "./components/Insights";
import SideNav from "./components/SideNav";
import Annot from "./components/Annot";
import Visitors from "./components/Visitors";
import { principles, profile, socials, stack } from "./data";
import banner from "./assets/banner.webp";
import avatar from "./assets/avatar.webp";
import rest from "./assets/rest.webp";

const NAV = [
    { href: "#about", label: "About" },
    { href: "#work", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const INDEX = [
    { id: "top", label: "Top" },
    { id: "about", label: "About" },
    { id: "work", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "insights", label: "Insights" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Say hi" },
];

const fmtTime = () =>
    new Date().toLocaleTimeString("en-IN", { timeZone: profile.timeZone, hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();

const fmtDate = () =>
    new Date().toLocaleDateString("en-IN", { timeZone: profile.timeZone, weekday: "short", day: "numeric", month: "short" });
const istHour = () => Number(new Date().toLocaleString("en-US", { timeZone: profile.timeZone, hour: "numeric", hour12: false }));

function useClock() {
    const read = () => ({ time: fmtTime(), date: fmtDate(), day: istHour() >= 6 && istHour() < 18 });
    const [t, setT] = useState(read);
    useEffect(() => {
        const id = setInterval(() => setT(read()), 15000);
        return () => clearInterval(id);
    }, []);
    return t;
}

// Small frosted clock sitting in the banner's sky
function BannerClock({ time, date, day }) {
    const [hm, ampm] = time.split(" ");
    return (
        <div className="bclock" aria-label={`Local time in India: ${time}, ${date}`}>
            <span className="bclock-icon" aria-hidden="true">{day ? <FiSun /> : <FiMoon />}</span>
            <span className="bclock-time">{hm}<small>{ampm}</small></span>
            <span className="bclock-date mono">{date} · IST</span>
        </div>
    );
}

// Postmark with today's date for the contact postcard
function Postmark({ date }) {
    return (
        <svg className="postmark" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
                <path id="pm-ring" d="M60 60 m-44 0 a44 44 0 1 1 88 0 a44 44 0 1 1 -88 0" />
            </defs>
            <circle cx="60" cy="60" r="56" />
            <circle cx="60" cy="60" r="34" />
            <text><textPath href="#pm-ring" startOffset="0">INDIA · AIR MAIL · INDIA · AIR MAIL ·</textPath></text>
            <text x="60" y="56" textAnchor="middle" className="pm-date">{date.toUpperCase()}</text>
            <text x="60" y="72" textAnchor="middle" className="pm-year">{new Date().getFullYear()}</text>
        </svg>
    );
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

// Letters rise in one by one, then a soft shine sweeps across
function RevealTitle({ text }) {
    return (
        <span className="reveal" aria-label={text}>
            {[...text].map((ch, i) => (
                <motion.span
                    key={i}
                    aria-hidden="true"
                    initial={{ y: "0.6em", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25 + i * 0.035, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    {ch === " " ? " " : ch}
                </motion.span>
            ))}
        </span>
    );
}

// Greeting in the visitor's own time of day
const greeting = () => {
    const h = new Date().getHours();
    return h < 5 ? "up late? same." : h < 12 ? "good morning!" : h < 17 ? "good afternoon!" : "good evening!";
};

// Inline icon pill used inside the About sentences
const Pill = ({ icon, logo, tone, children }) => (
    <span className={`ipill ipill-${tone}`}>
        <span className="ipill-icon" aria-hidden="true">{logo ?? icon}</span>
        {children}
    </span>
);

// Two-column section: sticky title + handwritten note on the left, content on the right
const Section = ({ id, title, note, wide, annot, children }) => (
    <section id={id} className={`section${wide ? " section-wide" : ""}`}>
        {annot}
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
    const { time, date, day } = useClock();

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

            <SideNav sections={INDEX} />

            <main id="main" className="wrap">
                <div id="top" className="hero">
                    <Annot side="right" top="330px">live from GitHub, updates on every push</Annot>
                    <div className="banner">
                        <img src={banner} alt="Illustration of two figures walking up a flowered hillside under towering clouds" fetchPriority="high" />
                        <BannerClock time={time} date={date} day={day} />
                    </div>

                    <div className="hero-grid">
                        <div className="hero-main">
                            <img className="avatar" src={avatar} alt="Illustrated portrait of Aniket" width="128" height="128" />
                            <h1 className="name">{profile.name}</h1>
                            <p className="tagline-big">
                                <RevealTitle text="Software engineer" />
                            </p>
                            <p className="tagline">{profile.intro}</p>
                            <div className="hero-pills">
                                <span className="hpill"><FiMapPin aria-hidden="true" /> India · IST</span>
                                <span className="hpill"><span className="live-dot" /> open to work</span>
                                <Visitors />
                            </div>
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
                                <div><dt>based</dt><dd>{profile.location} · IST</dd></div>
                                <div><dt>email</dt><dd><CopyEmail /></dd></div>
                            </dl>
                            <NowStrip />
                        </aside>
                    </div>
                </div>

                <Section id="about" title="About" note="the short version">
                    <p className="about-hi">{greeting()}</p>
                    <p className="about-big">
                        I build <Pill icon={<FiLayers />} tone="a">frontend platforms</Pill>, the{" "}
                        <Pill icon={<FiServer />} tone="b">services</Pill> behind them, and the{" "}
                        <Pill icon={<FiZap />} tone="c">tiny details</Pill> that make software feel fast.
                    </p>
                    <p className="about-big about-quiet">
                        By day at <Pill logo="C" tone="d">CatalyzeX</Pill>, owning the frontend of four products.
                        After hours, <Pill icon={<FiBookmark />} tone="a">Bookmarky</Pill> and{" "}
                        <Pill icon={<FiSun />} tone="e">Day Buddy</Pill>.
                    </p>
                    <p className="about-tags mono">
                        {principles.map((p, i) => (
                            <span key={p}>{i > 0 && <i aria-hidden="true">✦</i>}{p}</span>
                        ))}
                    </p>
                </Section>

                <Section
                    id="work"
                    title="Experience"
                    note="college to now, as a git graph"
                    wide
                    annot={<Annot side="right" top="150px">hover a commit to read it</Annot>}
                >
                    <Experience />
                </Section>

                <Section
                    id="projects"
                    title="Projects"
                    wide
                    note="things I've built and shipped"
                    annot={<Annot side="left" top="190px">open one for the full site preview</Annot>}
                >
                    <Projects />
                </Section>

                <Section
                    id="insights"
                    title="Insights"
                    note="my last 12 months on GitHub"
                    wide
                    annot={<Annot side="right" top="120px">compared with the year before, mostly private repos</Annot>}
                >
                    <Insights />
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

                <Section
                    id="contact"
                    title="Say hi"
                    note="write me a postcard"
                    annot={<Annot side="left" top="150px">yes, the stamp is me</Annot>}
                >
                    <article className="postcard">
                        <div className="pc-write">
                            <p className="pc-kicker mono faint">postcard · from the internet</p>
                            <p className="cta-title">
                                Working on something?<br />
                                <span>Let&apos;s build it.</span>
                            </p>
                            <p className="pc-msg">
                                Hi! I&apos;m open to interesting roles, freelance work, or just a good chat about
                                building things. Drop a line, I try to reply within a day.
                            </p>
                            <p className="pc-sign">— Aniket</p>
                            <div className="cta-actions">
                                <a className="btn btn-solid" href={`mailto:${profile.email}`}><FiMail /> Send an email</a>
                                <CopyEmail className="btn" label="Copy address" />
                            </div>
                        </div>

                        <div className="pc-address">
                            <div className="pc-marks">
                                <Postmark date={date} />
                                <div className="stamp">
                                    <img src={avatar} alt="" />
                                    <span className="mono">IN · ₹5</span>
                                </div>
                            </div>
                            <dl className="pc-lines mono">
                                <div><dt>to</dt><dd>Aniket Kumar</dd></div>
                                <div><dt>mail</dt><dd><CopyEmail /></dd></div>
                                <div><dt>from</dt><dd>India · {time} IST</dd></div>
                            </dl>
                        </div>
                    </article>

                    <ul className="social-pills">
                        {socials.map((s) => {
                            const Icon = { GitHub: FiGithub, LinkedIn: FiLinkedin, Medium: SiMedium, Figma: SiFigma }[s.label];
                            return (
                                <li key={s.label}>
                                    <a className="spill" href={s.href} target="_blank" rel="noreferrer">
                                        <Icon aria-hidden="true" />
                                        <span>{s.label}</span>
                                        <span className="mono faint">{s.handle}</span>
                                    </a>
                                </li>
                            );
                        })}
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
