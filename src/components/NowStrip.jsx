import { useEffect, useState } from "react";
import { GITHUB_USER } from "../data";

const CACHE_KEY = "now-strip";
const TTL = 10 * 60 * 1000;

const ago = (iso) => {
    const m = Math.round((Date.now() - new Date(iso)) / 60000);
    if (m < 60) return `${Math.max(m, 1)}m ago`;
    if (m < 60 * 24) return `${Math.round(m / 60)}h ago`;
    return `${Math.round(m / 1440)}d ago`;
};

async function fetchLatestPush() {
    try {
        const cached = JSON.parse(sessionStorage.getItem(CACHE_KEY));
        if (cached && Date.now() - cached.at < TTL) return cached.data;
    } catch { /* storage unavailable */ }

    const events = await fetch(`https://api.github.com/users/${GITHUB_USER}/events/public?per_page=30`).then((r) => r.ok ? r.json() : []);
    const push = events.find((e) => e.type === "PushEvent");
    if (!push) return null;

    // Events no longer carry commit messages; look the head commit up
    const commit = await fetch(`https://api.github.com/repos/${push.repo.name}/commits/${push.payload.head}`)
        .then((r) => r.ok ? r.json() : null).catch(() => null);

    const data = {
        repo: push.repo.name.split("/")[1],
        url: `https://github.com/${push.repo.name}`,
        message: commit?.commit?.message?.split("\n")[0] ?? "",
        at: push.created_at,
    };
    try { sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data })); } catch { /* ignore */ }
    return data;
}

export default function NowStrip() {
    const [push, setPush] = useState(null);

    useEffect(() => {
        fetchLatestPush().then(setPush).catch(() => setPush(null));
    }, []);

    if (!push) return null;

    return (
        <a className="now" href={push.url} target="_blank" rel="noreferrer">
            <span className="now-dot" aria-hidden="true" />
            <span className="now-label">latest push</span>
            <span className="now-repo">{push.repo}</span>
            {push.message && <span className="now-msg">{push.message}</span>}
            <span className="now-time">{ago(push.at)}</span>
        </a>
    );
}
