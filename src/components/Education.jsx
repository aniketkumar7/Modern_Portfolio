import { forwardRef } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Education.css";

const Education = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();

    const educations = [
        {
            degree: "B.Tech",
            fullDegree: "Bachelor of Technology",
            field: "Computer Science & Engineering",
            school: "MIET, Meerut",
            period: "2021 - 2025",
            grade: "8.0 CGPA",
        },
        {
            degree: "XII",
            fullDegree: "Higher Secondary",
            field: "Science & Mathematics",
            school: "Moon Light Public School",
            period: "2020 - 2021",
            grade: "86.8%",
        },
        {
            degree: "X",
            fullDegree: "Secondary School",
            field: "Science & Mathematics",
            school: "Sunrise Public School",
            period: "2018 - 2019",
            grade: "90%",
        },
    ];

    return (
        <section
            className={`edu ${theme}`}
            ref={ref}
            style={{ "--accent": textColor }}
        >
            <Marquee
                items={Array(5).fill("Education")}
                textColor={textColor}
                theme={theme}
            />

            <div className="edu-wrapper">
                {/* Header */}
                <header className="edu-header">
                    <span className="edu-label">Academic Journey</span>
                    <h2 className="edu-title">Education</h2>
                </header>

                {/* Cards Row */}
                <div className="edu-row">
                    {educations.map((edu, idx) => (
                        <article 
                            className="edu-card" 
                            key={idx}
                            style={{ '--i': idx }}
                        >
                            {/* Header Row */}
                            <div className="edu-card-header">
                                <span className="edu-card-num">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                                <span className="edu-card-grade">{edu.grade}</span>
                            </div>

                            {/* Content */}
                            <div className="edu-card-content">
                                <span className="edu-card-period">{edu.period}</span>
                                <h3 className="edu-card-degree">{edu.fullDegree}</h3>
                                <p className="edu-card-field">{edu.field}</p>
                                <p className="edu-card-school">{edu.school}</p>
                            </div>

                            {/* Bottom Line */}
                            <div className="edu-card-line" />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
});

Education.displayName = "Education";
export default Education;
