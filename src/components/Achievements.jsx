import { forwardRef, useState } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Achievements.css";

const Achievements = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();
    const [activeCard, setActiveCard] = useState(null);

    const achievements = [
        {
            id: 1,
            title: "AWS Certified Developer",
            issuer: "Amazon Web Services",
            year: "2024",
            link: "https://drive.google.com/file/d/1UtmbBetAwZdfD9ssWpBncvWjAmSrBWMC/view?usp=sharing",
            description: "Advanced cloud computing and AWS services expertise",
            category: "Cloud",
            color: "#FF9500",
        },
        {
            id: 2,
            title: "C++ Programming",
            issuer: "Coursera",
            year: "2023",
            link: "https://coursera.org/share/fc6f972841e5856714ecd47ea16f40e0",
            description: "Data structures and algorithmic problem-solving",
            category: "Programming",
            color: "#00C9FF",
        },
        {
            id: 3,
            title: "UI/UX Design",
            issuer: "Google",
            year: "2023",
            link: "https://coursera.org/share/6a3a99086b4f52822754eb6a6061d787",
            description: "User interface and experience design principles",
            category: "Design",
            color: "#FF3B7F",
        },
    ];

    return (
        <section
            className={`ach ${theme}`}
            ref={ref}
            style={{ "--accent": textColor }}
        >
            <Marquee
                items={Array(5).fill("Achievements")}
                textColor={textColor}
                theme={theme}
            />

            <div className="ach-container">
                {/* Header */}
                <header className="ach-header">
                    <span className="ach-eyebrow">Certifications</span>
                    <h2 className="ach-heading">Awards & Credentials</h2>
                    <p className="ach-subtext">
                        Professional certifications that validate my expertise.
                    </p>
                </header>

                {/* Achievement Cards */}
                <div className="ach-showcase">
                    {achievements.map((item, index) => (
                        <article
                            key={item.id}
                            className={`ach-card ${activeCard === item.id ? 'active' : ''}`}
                            style={{
                                '--i': index,
                                '--card-color': item.color
                            }}
                            onMouseEnter={() => setActiveCard(item.id)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Ribbon */}
                            <div className="ach-ribbon">
                                <span>{item.category}</span>
                            </div>

                            {/* Main Content */}
                            <div className="ach-card-inner">
                                {/* Info */}
                                <div className="ach-info">
                                    <span className="ach-year">{item.year}</span>
                                    <h3 className="ach-title">{item.title}</h3>
                                    <p className="ach-issuer">{item.issuer}</p>
                                </div>

                                {/* Reveal on hover */}
                                <div className="ach-reveal">
                                    <p className="ach-desc">{item.description}</p>
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ach-link"
                                    >
                                        <span>View Certificate</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Decorative Number */}
                            <span className="ach-num">{String(index + 1).padStart(2, '0')}</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
});

Achievements.displayName = "Achievements";

export default Achievements;
