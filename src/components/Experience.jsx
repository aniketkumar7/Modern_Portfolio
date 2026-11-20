import { useState } from "react";
import { experience } from "../data";

const PREVIEW = 3;

function Job({ job }) {
    const [all, setAll] = useState(false);
    const shown = all ? job.highlights : job.highlights.slice(0, PREVIEW);
    const hidden = job.highlights.length - PREVIEW;

    return (
        <article className="job">
            <header className="job-head">
                <h3 className="job-company">
                    {job.company}
                    {job.current && <span className="badge">working</span>}
                </h3>
                <span className="mono faint">{job.location}</span>
            </header>
            <div className="job-roles">
                {job.roles.map((r) => (
                    <div key={r.title} className="job-role">
                        <span>{r.title}</span>
                        <span className="mono faint">{r.period}</span>
                    </div>
                ))}
            </div>

            <p className="job-tldr"><span className="tldr mono">tl;dr</span> {job.tldr}</p>

            {job.stats && (
                <dl className="stats">
                    {job.stats.map((s) => (
                        <div key={s.label}>
                            <dt className="stat-value">{s.value}</dt>
                            <dd className="mono faint">{s.label}</dd>
                        </div>
                    ))}
                </dl>
            )}

            {shown.length > 0 && (
                <ul className="job-list">
                    {shown.map((h) => (
                        <li key={h.lead}><strong>{h.lead}</strong> {h.body}</li>
                    ))}
                </ul>
            )}
            {hidden > 0 && (
                <button type="button" className="more mono" onClick={() => setAll(!all)} aria-expanded={all}>
                    {all ? "Show less ↑" : `The long version (+${hidden}) ↓`}
                </button>
            )}

            {job.timeline && (
                <ol className="timeline">
                    {job.timeline.map((t) => (
                        <li key={t.period}>
                            <span className="mono faint">{t.period}</span>
                            <span>{t.focus}</span>
                        </li>
                    ))}
                </ol>
            )}

            <div className="chips">
                {job.stack.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
        </article>
    );
}

export default function Experience() {
    return experience.map((job) => <Job key={job.company} job={job} />);
}
