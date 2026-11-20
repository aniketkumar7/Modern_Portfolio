import { useEffect, useState } from "react";

// Fixed tick-mark index on the left edge (wide screens only)
export default function SideNav({ sections }) {
    const [active, setActive] = useState(sections[0].id);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-40% 0px -55% 0px" }
        );
        sections.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, [sections]);

    return (
        <nav className="sidenav" aria-label="Section index">
            {sections.map((s) => (
                <a key={s.id} href={`#${s.id}`} className={`tick${active === s.id ? " is-active" : ""}`} aria-current={active === s.id ? "true" : undefined}>
                    <span className="tick-line" aria-hidden="true" />
                    <span className="tick-label mono">{s.label}</span>
                </a>
            ))}
        </nav>
    );
}
