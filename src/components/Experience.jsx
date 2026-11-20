import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { careerSummary, eras, journey } from "../data";

// Map geometry: x in % of width, y in px of a fixed-height strip
const H = 226;
const Y = { up: 62, main: 114, down: 166 };
const PAD = 4;
const xOf = (i) => PAD + (i * (100 - PAD * 2)) / (journey.length - 1);

// Branch curves: leave main between two stops, ride the side lane, rejoin main
const curve = (x1, y1, x2, y2) => `M${x1} ${y1} C${(x1 + x2) / 2} ${y1} ${(x1 + x2) / 2} ${y2} ${x2} ${y2}`;

function Lines() {
    const step = xOf(1) - xOf(0);
    const workStart = xOf(journey.findIndex((n) => n.lane === "down")) - step * 0.5;
    const last = xOf(journey.length - 1);
    return (
        <svg className="jr-lines" viewBox={`0 0 100 ${H}`} preserveAspectRatio="none" aria-hidden="true">
            <path className="jr-main jr-past" d={`M${xOf(0)} ${Y.main} L${workStart} ${Y.main}`} />
            <path className="jr-main" d={`M${workStart} ${Y.main} L${last} ${Y.main}`} />
            {/* each side stop branches off just before it and rejoins just after (or at the merge commit) */}
            {journey.map((n, i) => {
                if (n.lane === "main") return null;
                const x = xOf(i);
                const back = journey[i + 1]?.merge ? xOf(i + 1) : x + step * 0.5;
                return (
                    <g key={n.short} className={`jr-${n.lane}`}>
                        <path d={curve(x - step * 0.5, Y.main, x, Y[n.lane])} />
                        <path d={curve(x, Y[n.lane], back, Y.main)} />
                    </g>
                );
            })}
        </svg>
    );
}

// Phones: the same journey as a vertical timeline, newest first, grouped by where it happened
function VerticalJourney({ sel, setSel }) {
    const items = journey.map((node, i) => ({ node, i })).reverse();
    return (
        <ol className="jv">
            {items.map(({ node, i }) => {
                const era = eras.find((e) => i === e.to);
                const open = sel === i;
                return (
                    <li key={node.short} className="jv-group">
                        {era && (
                            <p className={`jv-era${era.current ? " is-now" : ""}`}>
                                <b>{era.label}</b> <span className="mono">{era.sub}</span>
                            </p>
                        )}
                        <div className={`jv-item jv-${node.lane}${open ? " is-open" : ""}${node.head ? " is-head" : ""}`}>
                            <button type="button" className="jv-head" onClick={() => setSel(open ? -1 : i)} aria-expanded={open}>
                                <span className="jv-dot" aria-hidden="true" />
                                <span className="jv-title">{node.title}</span>
                                <span className="jv-date mono">{node.date}</span>
                            </button>
                            {open && (
                                <div className="jv-body">
                                    <p>{node.body}</p>
                                    {node.points && <ul className="jr-points">{node.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
                                </div>
                            )}
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}

export default function Experience() {
    const [sel, setSel] = useState(journey.length - 1);
    const scroller = useRef(null);
    const n = journey[sel] ?? journey[journey.length - 1];

    // On narrow screens start scrolled to "now"
    useEffect(() => {
        const el = scroller.current;
        if (el) el.scrollLeft = el.scrollWidth;
    }, []);

    return (
        <div className="jr">
            <p className="git-cmd mono">
                <span className="git-prompt">$</span> git log --graph --reverse career
                <span className="git-sum">{careerSummary}</span>
            </p>

            <VerticalJourney sel={sel} setSel={setSel} />

            <div className="jr-scroll" ref={scroller}>
                <div className="jr-map" style={{ height: H }}>
                    <Lines />
                    {journey.map((node, i) => (
                        <button
                            key={node.short}
                            type="button"
                            className={`jr-node jr-${node.lane}${i === sel ? " is-sel" : ""}${node.head ? " is-head" : ""}${node.merge ? " is-merge" : ""}`}
                            style={{ left: `${xOf(i)}%`, top: Y[node.lane] }}
                            onClick={() => setSel(i)}
                            onMouseEnter={() => setSel(i)}
                            aria-pressed={i === sel}
                            aria-label={`${node.title}, ${node.org}, ${node.date}`}
                        >
                            <span className="jr-dot" />
                            <span className="jr-label">
                                <span className="jr-title">{node.short}</span>
                                <span className="jr-date mono">{node.date}</span>
                            </span>
                            {node.head && <span className="jr-here" aria-hidden="true">you are here</span>}
                        </button>
                    ))}
                </div>
                <div className="jr-eras">
                    {eras.map((e) => (
                        <span
                            key={e.label}
                            className={`jr-era${e.current ? " is-now" : ""}`}
                            style={{ left: `${xOf(e.from) - 2}%`, width: `${xOf(e.to) - xOf(e.from) + 4}%` }}
                        >
                            <b>{e.label}</b> <span className="mono">{e.sub}</span>
                        </span>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={sel}
                    className="jr-detail"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                >
                    <p className="jr-detail-meta mono">
                        {n.date} · {n.org}
                        {n.tag && <span className="ref ref-tag">tag: {n.tag}</span>}
                        {n.head && <span className="ref ref-head">HEAD</span>}
                    </p>
                    <h3 className="jr-detail-title">{n.title}</h3>
                    <p className="jr-detail-body">{n.body}</p>
                    {n.points && (
                        <ul className="jr-points">
                            {n.points.map((pt) => <li key={pt}>{pt}</li>)}
                        </ul>
                    )}
                    {n.stack && <p className="commit-stack mono">{n.stack.map((s) => <span key={s}>+ {s}</span>)}</p>}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
