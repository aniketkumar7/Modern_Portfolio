import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub, FiGrid, FiList, FiMaximize2, FiX } from "react-icons/fi";
import BrowserFrame from "./BrowserFrame";
import { designs, projects, profile } from "../data";

const VIEW_KEY = "projects-view";
const num = (i) => String(i + 1).padStart(2, "0");

function Links({ p }) {
    return (
        <div className="case-links">
            <a className="btn btn-solid" href={p.live} target="_blank" rel="noreferrer">Visit site <FiArrowUpRight /></a>
            <a className="btn" href={p.code} target="_blank" rel="noreferrer"><FiGithub /> Code</a>
        </div>
    );
}

function ProjectView({ index, onClose, onStep }) {
    const p = projects[index];
    const closeRef = useRef(null);

    useEffect(() => {
        closeRef.current?.focus();
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onStep(1);
            if (e.key === "ArrowLeft") onStep(-1);
        };
        window.addEventListener("keydown", onKey);
        return () => {
            document.body.style.overflow = prev;
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose, onStep]);

    return (
        <motion.div
            className="pv-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <motion.div
                className="pv"
                role="dialog"
                aria-modal="true"
                aria-label={`${p.name} details`}
                initial={{ opacity: 0, y: 32, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
                <header className="pv-head">
                    <span className="mono faint">{num(index)} / {num(projects.length - 1)}</span>
                    <div className="pv-nav">
                        <button type="button" className="icon-btn" onClick={() => onStep(-1)} aria-label="Previous project"><FiArrowLeft /></button>
                        <button type="button" className="icon-btn" onClick={() => onStep(1)} aria-label="Next project"><FiArrowRight /></button>
                        <button type="button" className="icon-btn" ref={closeRef} onClick={onClose} aria-label="Close"><FiX /></button>
                    </div>
                </header>

                <div className="pv-scroll">
                    <div className="pv-title">
                        <div>
                            <h3 className="case-name">{p.name}</h3>
                            <p className="case-meta mono">{p.type} · {p.year}</p>
                        </div>
                        <Links p={p} />
                    </div>
                    <BrowserFrame key={p.name} src={p.image} url={p.live} alt={`${p.name} website`} />
                    <div className="case-details">
                        <p className="case-one">{p.oneLiner}</p>
                        <div>
                            <ul className="case-points">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                            <div className="chips">{p.stack.map((s) => <span key={s} className="chip">{s}</span>)}</div>
                        </div>
                    </div>
                </div>
                <p className="pv-keys mono faint" aria-hidden="true">← → to browse · esc to close</p>
            </motion.div>
        </motion.div>
    );
}

// Index: compact accordion rows. Hover shows a small thumbnail that trails the cursor.
function IndexView({ onOpen }) {
    const [expanded, setExpanded] = useState(null);
    const [hot, setHot] = useState(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 300, damping: 30 });
    const sy = useSpring(y, { stiffness: 300, damping: 30 });

    const onMove = (e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - r.left + 24);
        y.set(e.clientY - r.top - 70);
    };

    return (
        <div className="pindex" onMouseMove={onMove} onMouseLeave={() => setHot(null)}>
            <motion.div className="ptrail" style={{ x: sx, y: sy }} aria-hidden="true" animate={{ opacity: hot === null ? 0 : 1, scale: hot === null ? 0.9 : 1 }}>
                {hot !== null && <img src={projects[hot].image} alt="" />}
            </motion.div>

            <ol className="pindex-list">
                {projects.map((p, i) => {
                    const isOpen = expanded === i;
                    return (
                        <li key={p.name} className={`pitem${isOpen ? " is-open" : ""}`}>
                            <button
                                type="button"
                                className="prow"
                                aria-expanded={isOpen}
                                onMouseEnter={() => setHot(isOpen ? null : i)}
                                onClick={() => { setExpanded(isOpen ? null : i); setHot(null); }}
                            >
                                <img className="prow-thumb" src={p.image} alt="" loading="lazy" decoding="async" />
                                <span className="mono prow-num">{num(i)}</span>
                                <span className="prow-name">{p.name}</span>
                                <span className="prow-type mono faint">{p.type}</span>
                                <span className="prow-stack mono faint">{p.stack.slice(0, 3).join(" · ")}</span>
                                <span className="prow-year mono faint">{p.year}</span>
                                <span className="prow-toggle" aria-hidden="true">+</span>
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        className="pdetail"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="pdetail-inner">
                                            <div>
                                                <p className="case-one">{p.oneLiner}</p>
                                                <div className="pdetail-links">
                                                    <button type="button" className="btn btn-solid" onClick={() => onOpen(i)}><FiMaximize2 /> Full view</button>
                                                    <a className="btn" href={p.live} target="_blank" rel="noreferrer">Visit <FiArrowUpRight /></a>
                                                    <a className="btn" href={p.code} target="_blank" rel="noreferrer"><FiGithub /> Code</a>
                                                </div>
                                            </div>
                                            <div>
                                                <ul className="case-points">{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                                                <div className="chips">{p.stack.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}

function GridView({ onOpen }) {
    return (
        <div className="pgrid">
            {projects.map((p, i) => (
                <button key={p.name} type="button" className="pcard" onClick={() => onOpen(i)}>
                    <span className="pcard-thumb">
                        <img src={p.image} alt="" loading="lazy" decoding="async" />
                        <span className="pcard-expand"><FiMaximize2 /> View</span>
                    </span>
                    <span className="pcard-body">
                        <span className="pcard-name">{p.name}</span>
                        <span className="pcard-type mono faint">{p.type} · {p.year}</span>
                    </span>
                </button>
            ))}
            <a className="pcard pcard-more" href={profile.github} target="_blank" rel="noreferrer">
                <span className="pcard-name">More on GitHub</span>
                <span className="pcard-type mono faint">experiments & clones ↗</span>
            </a>
        </div>
    );
}

export default function Projects() {
    const [view, setView] = useState(() => {
        try { return localStorage.getItem(VIEW_KEY) || "index"; } catch { return "index"; }
    });
    const [open, setOpen] = useState(null);

    const pick = (v) => {
        setView(v);
        try { localStorage.setItem(VIEW_KEY, v); } catch { /* ignore */ }
    };
    const close = useCallback(() => setOpen(null), []);
    const step = useCallback((d) => setOpen((i) => (i + d + projects.length) % projects.length), []);

    return (
        <>
            <div className="proj-bar">
                <span className="mono faint">{projects.length} projects · open a row for details</span>
                <div className="seg" role="radiogroup" aria-label="Layout">
                    <button type="button" role="radio" aria-checked={view === "index"} className={view === "index" ? "on" : ""} onClick={() => pick("index")}>
                        <FiList /> Index
                    </button>
                    <button type="button" role="radio" aria-checked={view === "grid"} className={view === "grid" ? "on" : ""} onClick={() => pick("grid")}>
                        <FiGrid /> Grid
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={view}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                >
                    {view === "index" ? <IndexView onOpen={setOpen} /> : <GridView onOpen={setOpen} />}
                </motion.div>
            </AnimatePresence>

            <p className="designs mono faint">
                Design explorations:{" "}
                {designs.map((d, i) => (
                    <span key={d.name}>
                        <a href={d.href} target="_blank" rel="noreferrer">{d.name}</a>
                        {i < designs.length - 1 && " · "}
                    </span>
                ))}
            </p>

            <AnimatePresence>
                {open !== null && <ProjectView key="pv" index={open} onClose={close} onStep={step} />}
            </AnimatePresence>
        </>
    );
}
