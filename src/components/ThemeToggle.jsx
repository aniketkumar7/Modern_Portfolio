import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => document.documentElement.dataset.theme);
    const btn = useRef(null);

    const apply = (next) => {
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem("theme", next); } catch { /* ignore */ }
        setTheme(next);
    };

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!document.startViewTransition || reduce) return apply(next);

        // Circle reveal growing out of the toggle button
        const r = btn.current.getBoundingClientRect();
        const x = r.left + r.width / 2;
        const y = r.top + r.height / 2;
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

        document.startViewTransition(() => flushSync(() => apply(next))).ready.then(() => {
            document.documentElement.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
            );
        });
    };

    return (
        <button
            ref={btn}
            type="button"
            className="icon-btn theme-btn"
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
            <span key={theme} className="theme-icon">{theme === "dark" ? <FiSun /> : <FiMoon />}</span>
        </button>
    );
}
