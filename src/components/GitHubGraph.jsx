import { useEffect, useRef, useState } from "react";
import { GITHUB_USER } from "../data";

export default function GitHubGraph() {
    const [data, setData] = useState(null);
    const scroller = useRef(null);

    useEffect(() => {
        fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`)
            .then((r) => (r.ok ? r.json() : null))
            .then(setData)
            .catch(() => setData(null));
    }, []);

    // On narrow screens show the most recent weeks first
    useEffect(() => {
        if (scroller.current) scroller.current.scrollLeft = scroller.current.scrollWidth;
    }, [data]);

    if (!data?.contributions?.length) return null;

    // Pad the first week so columns start on Sunday
    const days = data.contributions;
    const lead = new Date(days[0].date).getDay();
    const cells = [...Array(lead).fill(null), ...days];

    return (
        <div className="graph">
            <div className="graph-scroll" ref={scroller}>
                <div className="graph-grid" style={{ gridTemplateColumns: `repeat(${Math.ceil(cells.length / 7)}, 1fr)` }}>
                    {cells.map((d, i) =>
                        d ? (
                            <span key={d.date} className="graph-cell" data-l={d.level} title={`${d.count} contributions on ${d.date}`} />
                        ) : (
                            <span key={`pad-${i}`} />
                        )
                    )}
                </div>
            </div>
            <div className="graph-foot mono faint">
                <span><span className="graph-total">{data.total?.lastYear ?? 0}</span> contributions in the last year</span>
                <span className="graph-legend">
                    less {[0, 1, 2, 3, 4].map((l) => <span key={l} className="graph-cell" data-l={l} />)} more
                </span>
            </div>
        </div>
    );
}
