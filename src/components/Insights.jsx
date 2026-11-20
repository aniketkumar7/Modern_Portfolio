import { useEffect, useMemo, useRef, useState } from "react";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { GITHUB_USER } from "../data";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const W = 1000;
const H = 200;

const iso = (d) => d.toISOString().slice(0, 10);
const pct = (a, b) => (b ? Math.round(((a - b) / b) * 100) : null);
const fmtDate = (s) => new Date(s).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

function longestStreak(days) {
    let best = 0, run = 0;
    for (const d of days) { run = d.count ? run + 1 : 0; best = Math.max(best, run); }
    return best;
}

// Smooth line through points (Catmull-Rom → cubic Bézier)
function smoothPath(pts) {
    if (pts.length < 2) return "";
    let d = `M${pts[0][0]},${pts[0][1]}`;
    for (let i = 0; i < pts.length - 1; i++) {
        const [x0, y0] = pts[i - 1] ?? pts[i];
        const [x1, y1] = pts[i];
        const [x2, y2] = pts[i + 1];
        const [x3, y3] = pts[i + 2] ?? pts[i + 1];
        d += ` C${x1 + (x2 - x0) / 6},${y1 + (y2 - y0) / 6} ${x2 - (x3 - x1) / 6},${y2 - (y3 - y1) / 6} ${x2},${y2}`;
    }
    return d;
}

function analyse(all) {
    const today = iso(new Date());
    const days = all.filter((d) => d.date <= today).sort((a, b) => a.date.localeCompare(b.date));

    // Last 53 weeks, starting on a Sunday so the grid columns are whole weeks
    const end = days.length;
    let start = Math.max(0, end - 365);
    while (start > 0 && new Date(days[start].date).getDay() !== 0) start--;
    const year = days.slice(start);
    const prev = days.slice(Math.max(0, start - year.length), start);

    const sum = (arr) => arr.reduce((s, d) => s + d.count, 0);
    const active = (arr) => arr.filter((d) => d.count > 0).length;
    const best = year.reduce((m, d) => (d.count > m.count ? d : m), { count: 0, date: today });

    const weeks = (arr) => {
        const out = [];
        for (let i = 0; i < arr.length; i += 7) out.push(sum(arr.slice(i, i + 7)));
        return out;
    };
    const thisWeeks = weeks(year);
    const prevWeeks = weeks(prev).slice(-thisWeeks.length);
    const max = Math.max(1, ...thisWeeks, ...prevWeeks);
    const toPts = (ws) => ws.map((v, i) => [(i / Math.max(1, thisWeeks.length - 1)) * W, H - 8 - (v / max) * (H - 36)]);
    const bestWeek = thisWeeks.indexOf(Math.max(...thisWeeks));

    // Month label at the first week each month starts
    const months = [];
    for (let i = 0; i < year.length; i += 7) {
        const m = new Date(year[i].date).getMonth();
        if (!months.length || months[months.length - 1].m !== m) months.push({ m, col: i / 7 });
    }

    return {
        year,
        months,
        weeksCount: thisWeeks.length,
        stats: [
            { label: "Contributions", value: sum(year).toLocaleString("en-IN"), delta: pct(sum(year), sum(prev)) },
            { label: "Active days", value: active(year), delta: pct(active(year), active(prev)) },
            { label: "Longest streak", value: `${longestStreak(year)}d`, delta: pct(longestStreak(year), longestStreak(prev)) },
            { label: "Best day", value: best.count, sub: fmtDate(best.date) },
        ],
        thisPath: smoothPath(toPts(thisWeeks)),
        prevPath: smoothPath(toPts(prevWeeks)),
        best: { x: (bestWeek / Math.max(1, thisWeeks.length - 1)) * 100, value: thisWeeks[bestWeek], y: toPts(thisWeeks)[bestWeek][1] / H * 100 },
    };
}

export default function Insights() {
    const [raw, setRaw] = useState(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}`)
            .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
            .then((d) => setRaw(d.contributions))
            .catch(() => setFailed(true));
    }, []);

    const data = useMemo(() => (raw?.length ? analyse(raw) : null), [raw]);
    const gridRef = useRef(null);

    // Narrow screens: start the dot grid at the latest weeks
    useEffect(() => {
        if (gridRef.current) gridRef.current.scrollLeft = gridRef.current.scrollWidth;
    }, [data]);

    if (failed) return <p className="muted">GitHub stats are taking a nap. <a className="link" href={`https://github.com/${GITHUB_USER}`}>See them on GitHub ↗</a></p>;
    if (!data) return <div className="insights insights-skeleton" aria-busy="true" />;

    return (
        <div className="insights">
            <dl className="ins-stats">
                {data.stats.map((s) => (
                    <div key={s.label} className="ins-stat">
                        <dt className="mono faint">{s.label}</dt>
                        <dd>
                            <span className="ins-value">{s.value}</span>
                            {s.delta != null && (
                                <span className={`ins-delta mono ${s.delta < 0 ? "down" : ""}`}>
                                    {s.delta < 0 ? <FiArrowDownRight /> : <FiArrowUpRight />}
                                    {Math.abs(s.delta)}%
                                </span>
                            )}
                            {s.sub && <span className="ins-sub mono faint">{s.sub}</span>}
                        </dd>
                    </div>
                ))}
            </dl>

            <div className="ins-chart">
                <div className="ins-legend mono faint">
                    <span><i className="key key-now" /> last 12 months</span>
                    <span><i className="key key-prev" /> year before</span>
                </div>
                <div className="ins-plot">
                    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden="true">
                        <defs>
                            <linearGradient id="ins-fill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0" stopColor="var(--g3)" stopOpacity="0.22" />
                                <stop offset="1" stopColor="var(--g3)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path d={`${data.thisPath} L${W},${H} L0,${H} Z`} fill="url(#ins-fill)" />
                        <path d={data.prevPath} className="line-prev" />
                        <path d={data.thisPath} className="line-now" />
                    </svg>
                    <span className="ins-best" style={{ left: `${data.best.x}%`, top: `${data.best.y}%` }}>
                        <span className="ins-best-label mono">best week <b>{data.best.value}</b></span>
                    </span>
                </div>
            </div>

            <div className="ins-grid-wrap" ref={gridRef}>
                <div className="ins-grid-inner" style={{ "--weeks": data.weeksCount }}>
                    <div className="ins-months mono faint">
                        {data.months.map((m) => (
                            <span key={`${m.m}-${m.col}`} style={{ gridColumnStart: m.col + 1 }}>{MONTHS[m.m]}</span>
                        ))}
                    </div>
                    <div className="ins-dots">
                        {data.year.map((d) => (
                            <span key={d.date} className="dot" data-l={d.level} title={`${d.count} on ${fmtDate(d.date)}`} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="ins-foot mono faint">
                <span>Less <i className="dot" data-l="0" /><i className="dot" data-l="1" /><i className="dot" data-l="2" /><i className="dot" data-l="3" /><i className="dot" data-l="4" /> More</span>
            </div>
        </div>
    );
}
