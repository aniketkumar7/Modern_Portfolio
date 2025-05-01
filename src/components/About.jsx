import img from "../assets/about.jpg";
import { forwardRef, useEffect } from "react";
import excited from "../assets/excited.png";
import eye from "../assets/eye.png";
import hand from "../assets/hand.png";
import shield from "../assets/medal.png";
import "./About.css";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";

const About = forwardRef(({ textColor }, ref) => {
    const items = Array(7).fill("About Me");
    const { theme } = useTheme();

    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.tilt-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        };

        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div ref={ref} className={`about-wrapper ${theme}`}>
            <div className="aboutme">
                <Marquee items={items} textColor={textColor} theme={theme} />
            </div>

            <div className="about-container" style={{ "--accent-color": textColor }}>
                <div className="about-left tilt-card">
                    <div className="card-content">
                        <div className="profile-wrapper">
                            <div className="profile-image">
                                <img src={img} alt="Aniket Kumar" loading="lazy" />
                            </div>
                            <div className="floating-elements">
                                <img className="float-icon icon-1" src={excited} alt="" />
                                <img className="float-icon icon-2" src={eye} alt="" />
                                <img className="float-icon icon-3" src={shield} alt="" />
                            </div>
                        </div>
                        <div className="name-plate">
                            <div className="name-text">ANIKET KUMAR</div>
                            <div className="name-subtitle">Frontend Developer</div>
                        </div>
                    </div>
                </div>

                <div className="about-right tilt-card">
                    <div className="card-content">
                        <div className="greeting">
                            <span className="greeting-text">Namaste</span>
                            <img src={hand} alt="Namaste" className="hand-wave" />
                        </div>
                        <div className="about-text">
                            <p>
                                I&apos;m <span className="highlight">Aniket Kumar</span>, an ambitious
                                student at <span className="highlight">MIET</span> pursuing B.Tech
                                in Computer Science and Engineering. My journey in technology is driven
                                by a profound passion for creating impactful digital experiences through
                                <span className="highlight"> web development</span> and solving complex
                                problems through <span className="highlight">competitive programming</span>.
                            </p>
                            <p>
                                As a <span className="highlight">Frontend Developer</span>, I specialize
                                in crafting responsive and intuitive user interfaces. My approach combines
                                clean code principles with modern design practices, ensuring both
                                functionality and aesthetic appeal.
                            </p>
                            <p>
                                Beyond coding, I&apos;m deeply invested in <span className="highlight">UI/UX
                                    design</span>, believing that great software should not only work
                                flawlessly but also provide an exceptional user experience. I regularly
                                participate in <span className="highlight">hackathons</span> and coding
                                competitions to sharpen my problem-solving skills and stay updated with
                                industry trends.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

About.displayName = "About";

export default About;
