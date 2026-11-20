import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(() => document.documentElement.dataset.theme);

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        try { localStorage.setItem("theme", next); } catch { /* ignore */ }
        setTheme(next);
    };

    return (
        <button type="button" className="icon-btn" onClick={toggle} aria-label={`switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>
    );
}
