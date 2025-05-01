import { forwardRef } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Achievements.css";

const Achievements = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();
    const achievements = [
        {
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            date: "2024",
            icon: "🏆",
            link: "https://drive.google.com/file/d/1UtmbBetAwZdfD9ssWpBncvWjAmSrBWMC/view?usp=sharing",
            description: "Advanced cloud computing and AWS services expertise",
            category: "Cloud Computing"
        },
        {
            title: "C++ Programming",
            issuer: "Coursera",
            date: "2023",
            icon: "🎯",
            link: "https://coursera.org/share/fc6f972841e5856714ecd47ea16f40e0",
            description: "Data structures and algorithmic problem-solving",
            category: "Programming"
        },
        {
            title: "UI/UX Design",
            issuer: "Google",
            date: "2023",
            icon: "🎨",
            link: "https://coursera.org/share/6a3a99086b4f52822754eb6a6061d787",
            description: "User interface and experience design principles",
            category: "Design"
        }
    ];

    return (
        <section className={`achievements-section ${theme}`} ref={ref}>
            <div className="achievements-background">
                <div className="gradient-sphere"></div>
                <div className="gradient-sphere-2"></div>
                <div className="noise-overlay"></div>
            </div>

            <Marquee
                items={Array(5).fill("Achievements & Certifications")}
                textColor={textColor}
            />

            <div className="achievements-container">
                <div className="achievements-header">
                    <span className="section-subtitle" style={{ "--accent-color": textColor }}>
                        PROFESSIONAL MILESTONES
                    </span>
                    {/* <h2 className="section-title">
                        Achievements & <span className="text-gradient">Certifications</span>
                    </h2> */}
                    <p className="section-description">
                        A collection of professional certifications and achievements that
                        demonstrate my commitment to continuous learning and excellence
                    </p>
                </div>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="achievement-card"
                            style={{
                                "--card-index": index,
                                "--accent-color": textColor
                            }}
                        >
                            <div className="achievement-content">
                                <div className="achievement-top">
                                    <div className="achievement-icon-wrapper">
                                        <span className="achievement-icon">{achievement.icon}</span>
                                        <div className="icon-backdrop"></div>
                                    </div>
                                    <div className="achievement-category">
                                        <span>{achievement.category}</span>
                                    </div>
                                </div>

                                <div className="achievement-details">
                                    <h3 className="achievement-title">{achievement.title}</h3>
                                    <div className="achievement-meta">
                                        <span className="achievement-issuer">{achievement.issuer}</span>
                                        <span className="achievement-date">{achievement.date}</span>
                                    </div>
                                    <p className="achievement-description">{achievement.description}</p>
                                </div>

                                <div className="achievement-footer">
                                    <a
                                        href={achievement.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="credential-link"
                                    >
                                        <span>View Credential</span>
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="link-arrow"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M7 17L17 7M17 7H7M17 7V17"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div className="card-backdrop">
                                <div className="backdrop-blur"></div>
                                <div className="backdrop-gradient"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

Achievements.displayName = "Achievements";

export default Achievements;
