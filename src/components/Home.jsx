import { forwardRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Home.css";

const Home = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.floating-card');
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardX = rect.left + rect.width / 2;
                const cardY = rect.top + rect.height / 2;

                const angleX = (mouseY - cardY) / 30;
                const angleY = (mouseX - cardX) / -30;

                card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className={`home ${theme}`} ref={ref} style={{ "--accent-color": textColor }}>
            <div className="home-content">
                <div className="floating-card main-title-card">
                    <div className="card-content">
                        <div className="title-wrapper">
                            {"PORTFOLIO".split('').map((char, index) => (
                                <span
                                    key={index}
                                    className="title-char"
                                    style={{
                                        "--char-index": index,
                                        "--accent-color": textColor
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="floating-card subtitle-card">
                    <div className="card-content">
                        <div className="subtitle-wrapper">
                            {"FRONTEND DEVELOPER".split('').map((char, index) => (
                                <span
                                    key={index}
                                    className="subtitle-char"
                                    style={{
                                        "--char-index": index,
                                        "--accent-color": textColor
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <a
                    href="https://drive.google.com/file/d/18c5oQ-fM_LxIHn4BURCtwoOlzpsymu7g/view?usp=sharing"
                    target="_blank"
                    className="floating-card resume-button"
                    style={{ "--accent-color": textColor }}
                >
                    <div className="rotating-text">
                        <svg viewBox="0 0 100 100">
                            <path
                                id="curve"
                                d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                                fill="none"
                            />
                            <text>
                                <textPath href="#curve">
                                    DOWNLOAD RESUME • VIEW MY WORK •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="button-inner">
                        <svg
                            className="arrow-icon"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7" />
                            <polyline points="7 7 17 7 17 17" />
                        </svg>
                    </div>
                </a>
            </div>

            <div className="background-grid"></div>
            <div className="glow-effect"></div>
        </section>
    );
});

Home.displayName = "Home";

export default Home;
