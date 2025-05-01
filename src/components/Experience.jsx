import { forwardRef } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Experience.css";

const Experience = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();

    const experiences = [
        {
            role: "Open Source Intern",
            company: "Tublian",
            period: "March 2024 - April 2024",
            location: "Remote",
            description: "Contributed to open-source projects, focusing on code quality and collaboration.",
            achievements: [
                "Contributed to 5+ open-source projects, improving code quality through refactoring and bug fixes.",
                "Enhanced proficiency in navigating and understanding complex codebases, enabling efficient collaboration."
            ],
            skills: ["Open Source", "Code Refactoring", "Bug Fixing", "Collaboration"],
            color: "#5C6FF5"
        },
        {
            role: "Frontend Developer",
            company: "LetsGrowMore",
            period: "July 2023 - August 2023",
            location: "Remote",
            description: "Created responsive and interactive web applications",
            achievements: [
                "Developed user-facing features and components",
                "Collaborated with design techniques on UI/UX improvements",
            ],
            skills: ["JavaScript", "Tailwind CSS", "HTML", "CSS"],
            color: "#7B66FF"
        }
    ];

    return (
        <section
            className={`expUnique-section ${theme}`}
            ref={ref}
            style={{ "--accent-color": textColor }}
        >
            <div className="expUnique-background">
                <div className="expUnique-gridOverlay"></div>
                <div className="expUnique-glowSphere"></div>
            </div>

            <Marquee items={Array(5).fill("Professional Experience")} textColor={textColor} theme={theme} />

            <div className="expUnique-container">
                <div className="expUnique-header">
                    <span className="expUnique-subtitle" style={{ color: textColor }}>
                        CAREER JOURNEY
                    </span>
                </div>

                <div className="expUnique-timelineContainer">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="expUnique-timelineItem"
                            style={{
                                "--expUnique-itemColor": exp.color,
                                "--expUnique-itemIndex": index
                            }}
                        >
                            <div className="expUnique-timelineMarker">
                                <div className="expUnique-markerLine"></div>
                                <div className="expUnique-markerDot"></div>
                            </div>

                            <div className="expUnique-timelineContent">
                                <div className="expUnique-card">
                                    <div className="expUnique-cardHeader">
                                        <div className="expUnique-roleInfo">
                                            <h3 className="expUnique-roleTitle">{exp.role}</h3>
                                            <div className="expUnique-companyInfo">
                                                <span className="expUnique-companyName">{exp.company}</span>
                                                <span className="expUnique-location">{exp.location}</span>
                                            </div>
                                        </div>
                                        <div className="expUnique-periodBadge">
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>

                                    <div className="expUnique-cardBody">
                                        <p className="expUnique-description">{exp.description}</p>

                                        <div className="expUnique-achievements">
                                            <h4>Key Achievements</h4>
                                            <ul>
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i}>
                                                        <span className="expUnique-achievementBullet">→</span>
                                                        {achievement}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="expUnique-skills">
                                            <h4>Skills</h4>
                                            <ul>
                                                {exp.skills.map((skill, i) => (
                                                    <li className="expUnique-skillTag" key={i}>{skill}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Experience.displayName = "Experience";

export default Experience;
