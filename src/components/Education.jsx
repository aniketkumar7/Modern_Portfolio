import { forwardRef } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Education.css";

const Education = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();

    const educations = [
        {
            degree: "Bachelor of Technology",
            field: "Computer Science & Engineering",
            school: "MIET, Meerut",
            period: "2021 - 2025",
            grade: "8.0 CGPA",
            highlights: [
                "Published research paper on ML",
                "Led 3 major projects",
            ],
        },
        {
            degree: "Higher Secondary",
            field: "Science & Mathematics",
            school: "Moon Light Public School",
            period: "2020 - 2021",
            grade: "86.8%",
            highlights: [
                "School topper",
                "Academic excellence award",
            ],
        },
        {
            degree: "Secondary School",
            field: "Science & Mathematics",
            school: "Sunrise Public School",
            period: "2018 - 2019",
            grade: "90%",
            highlights: [
                "Academic excellence award",
                "Top 5 in class",
            ],
        },
    ];

    return (
        <section
            className={`education-section ${theme}`}
            ref={ref}
            style={{ "--accent-color": textColor }}
        >
            <div className="education-background">
                <div className="education-gridOverlay"></div>
                <div className="education-glow"></div>
            </div>

            <Marquee
                items={Array(5).fill("Academic Journey")}
                textColor={textColor}
                theme={theme}
            />

            <div className="education-container">
                {/* <div className="education-header">
                    <h2 className="education-title">Academic Excellence</h2>
                    <p className="education-subtitle">Academic Excellence</p>
                </div> */}

                <div className="education-grid">
                    {educations.map((edu, idx) => (
                        <div className="education-card" key={idx}>
                            <div className="education-card-content">
                                <div className="education-card-header">
                                    <div className="education-period-badge">
                                        {edu.period}
                                    </div>
                                    <div className="education-grade-badge">
                                        {edu.grade}
                                    </div>
                                </div>

                                <h3 className="education-degree">{edu.degree}</h3>
                                <p className="education-field">{edu.field}</p>
                                <p className="education-school">{edu.school}</p>

                                <div className="education-highlights">
                                    {edu.highlights.map((highlight, i) => (
                                        <div className="education-highlight-item" key={i}>
                                            <span className="highlight-dot"></span>
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Education.displayName = "Education";
export default Education;
