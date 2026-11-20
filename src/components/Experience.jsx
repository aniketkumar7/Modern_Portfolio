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
                <div>
                    <h3 className="job-company">
                        {job.company}
                        {job.current && <span className="badge">working</span>}
                    </h3>
                    {job.roles.map((r) => (
                        <div key={r.title} className="job-role">
                            <span>{r.title}</span>
                            <span className="mono faint">{r.period}</span>
                        </div>
                    ))}
                </div>
                <span className="mono faint job-loc">{job.location}</span>
            </header>

            <p className="job-tldr">{job.tldr}</p>
            {job.stats && <p className="mono faint job-stats">{job.stats.join(" · ")}</p>}

            {shown.length > 0 && (
                <ul className="job-list">
                    {shown.map((h) => (
                        <li key={h.lead}><strong>{h.lead}</strong> {h.body}</li>
                    ))}
                </ul>
            )}
            {hidden > 0 && (
                <button type="button" className="more" onClick={() => setAll(!all)}>
                    {all ? "show less ↑" : `the long version (+${hidden}) ↓`}
                </button>
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
