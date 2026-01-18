import { forwardRef, useState } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Experience.css";

const Experience = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();
    const [activeIndex, setActiveIndex] = useState(0);

    const experiences = [
        {
            role: "Software Developer",
            type: "Full-time",
            company: "CatalyzeX",
            period: "Sep 2025 — Present",
            duration: "5 mos",
            location: "Remote",
            description: "Building and scaling software solutions with focus on web engineering and software design.",
            highlights: [
                "Developing scalable web applications",
                "Contributing to software architecture decisions"
            ],
            skills: ["Software Design", "Web Engineering", "Full-Stack"],
        },
        {
            role: "Software Developer",
            type: "Internship",
            company: "CatalyzeX",
            period: "Jun 2025 — Aug 2025",
            duration: "3 mos",
            location: "Remote",
            description: "Full-stack development internship working with modern web technologies.",
            highlights: [
                "Built features using Next.js",
                "Contributed to full-stack development"
            ],
            skills: ["Next.js", "Full-Stack Development", "React"],
        },
    
        {
            role: "Open Source Intern",
            type: "Internship",
            company: "TUBLIAN",
            period: "Apr 2024 — May 2024",
            duration: "2 mos",
            location: "Remote",
            description: "Contributed to open-source projects, focusing on code quality and collaboration.",
            highlights: [
                "Contributed to 5+ open-source projects",
                "Enhanced GitHub collaboration skills"
            ],
            skills: ["GitHub", "Open-Source", "Git"],
        }
    ];

    return (
        <section
            className={`xp ${theme}`}
            ref={ref}
            style={{ "--accent": textColor }}
        >
            <Marquee 
                items={Array(5).fill("Experience")} 
                textColor={textColor} 
                theme={theme} 
            />

            <div className="xp-container">
                {/* Left - Navigation */}
                <aside className="xp-nav">
                    <header className="xp-header">
                        <span className="xp-label">Work</span>
                        <h2 className="xp-title">Experience</h2>
                    </header>

                    <div className="xp-tabs">
                        {experiences.map((exp, idx) => (
                            <button
                                key={idx}
                                className={`xp-tab ${activeIndex === idx ? 'active' : ''}`}
                                onClick={() => setActiveIndex(idx)}
                            >
                                <span className="xp-tab-num">{String(idx + 1).padStart(2, '0')}</span>
                                <div className="xp-tab-info">
                                    <span className="xp-tab-role">{exp.role}</span>
                                    <span className="xp-tab-company">@ {exp.company}</span>
                                </div>
                                <span className="xp-tab-arrow">→</span>
                            </button>
                        ))}
                    </div>

                    <div className="xp-stats">
                        <div className="xp-stat">
                            <span className="xp-stat-num">3</span>
                            <span className="xp-stat-label">Roles</span>
                        </div>
                        <div className="xp-stat">
                            <span className="xp-stat-num">1+</span>
                            <span className="xp-stat-label">Years</span>
                        </div>
                    </div>
                </aside>

                {/* Right - Content */}
                <main className="xp-content">
                    {experiences.map((exp, idx) => (
                        <article 
                            key={idx}
                            className={`xp-panel ${activeIndex === idx ? 'active' : ''}`}
                        >
                            <div className="xp-panel-header">
                                <div className="xp-panel-meta">
                                    <span className="xp-panel-type">{exp.type}</span>
                                    <span className="xp-panel-period">{exp.period} · {exp.duration}</span>
                                    <span className="xp-panel-loc">{exp.location}</span>
                                </div>
                                <h3 className="xp-panel-role">{exp.role}</h3>
                                <p className="xp-panel-company">{exp.company}</p>
                            </div>

                            <p className="xp-panel-desc">{exp.description}</p>

                            <div className="xp-panel-highlights">
                                <span className="xp-hl-label">Highlights</span>
                                <ul className="xp-hl-list">
                                    {exp.highlights.map((hl, i) => (
                                        <li key={i}>
                                            <span className="xp-hl-bullet">↗</span>
                                            {hl}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="xp-panel-skills">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="xp-skill">{skill}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </main>
            </div>
        </section>
    );
});

Experience.displayName = "Experience";

export default Experience;
