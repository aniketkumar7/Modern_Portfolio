import { useEffect, useState } from "react";
import { FiEye } from "react-icons/fi";
import { profile } from "../data";

// Profile views pill.
// With profile.goatcounter set: loads GoatCounter and shows its public total (unique-ish visits).
// Without it: falls back to a free hit-counter badge (counts every page load, no account needed).
const BADGE = "https://visitor-badge.laobi.icu/badge?page_id=aniketkumar7.portfolio&left_text=visitors&left_color=%231b1a17&right_color=%23b9572f";

export default function Visitors() {
    const [count, setCount] = useState(null);
    const code = profile.goatcounter;

    useEffect(() => {
        if (!code) return;
        if (!document.querySelector("script[data-goatcounter]")) {
            const s = document.createElement("script");
            s.async = true;
            s.src = "https://gc.zgo.at/count.js";
            s.dataset.goatcounter = `https://${code}.goatcounter.com/count`;
            document.head.appendChild(s);
        }
        fetch(`https://${code}.goatcounter.com/counter/TOTAL.json`)
            .then((r) => (r.ok ? r.json() : null))
            .then((d) => d?.count && setCount(d.count))
            .catch(() => setCount(null));
    }, [code]);

    if (!code) return <img className="visit-badge" src={BADGE} alt="Profile visitors" height="20" />;
    return (
        <span className="hpill" title="Profile views">
            <FiEye aria-hidden="true" />
            <span className="visit-count">{count ?? "…"}</span> visitors
        </span>
    );
}
