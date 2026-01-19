import { forwardRef, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "./Home.css";

const Home = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    const nameChars = "ANIKET".split("");
    const surnameChars = "KUMAR".split("");

    return (
        <section
            className={`hero ${theme}`}
            ref={ref}
            style={{ "--accent": textColor }}
        >
            {/* Noise Overlay */}
            <div className="hero-noise" />

            {/* Gradient Orbs */}
            <motion.div
                className="hero-orb hero-orb-1"
                animate={{ x: mousePos.x * 2, y: mousePos.y * 2 }}
                transition={{ type: "spring", stiffness: 50 }}
            />
            <motion.div
                className="hero-orb hero-orb-2"
                animate={{ x: mousePos.x * -1.5, y: mousePos.y * -1.5 }}
                transition={{ type: "spring", stiffness: 50 }}
            />

            <div className="hero-frame">
                {/* Corner Labels */}
                <div className="corner corner-tl">
                    <span>Portfolio</span>
                    <span>2026</span>
                </div>
                <div className="corner corner-tr">
                    <motion.span
                        className="status-dot"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span>Available</span>
                </div>
                <div className="corner corner-bl">
                    <span>Scroll</span>
                    <motion.span
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >↓</motion.span>
                </div>
                {/* <div className="corner corner-br">
                    <span>001</span>
                </div> */}

                {/* Main Content */}
                <div className="hero-center">
                    {/* Giant Name */}
                    <div className="hero-name-block">
                        <div className="name-row">
                            {nameChars.map((char, i) => (
                                <motion.span
                                    key={`name-${i}`}
                                    className="name-char"
                                    initial={{ y: 200, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: i * 0.08,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="name-row name-row-outline">
                            {surnameChars.map((char, i) => (
                                <motion.span
                                    key={`surname-${i}`}
                                    className="name-char"
                                    initial={{ y: 200, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{
                                        duration: 1,
                                        delay: 0.3 + i * 0.08,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </div>

                    {/* Floating Roles */}
                    <motion.div
                        className="hero-roles"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <span className="role-tag">Frontend Developer</span>
                        <span className="role-divider">/</span>
                        <span className="role-tag role-accent">UI/UX Designer</span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        className="hero-tagline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                    >
                        Crafting digital experiences that blend aesthetics with functionality
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 }}
                    >
                        <a
                            href="mailto:aniketkumar639597@gmail.com"
                            className="hero-btn hero-btn-secondary"
                        >
                            <span>Get in Touch</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </motion.div>
                </div>

                {/* Social Strip */}
                <motion.div
                    className="hero-social-strip"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.8 }}
                >
                    <a href="https://github.com/aniketkumar7" target="_blank" rel="noopener noreferrer">GH</a>
                    <a href="https://www.linkedin.com/in/aniketkumar07/" target="_blank" rel="noopener noreferrer">LI</a>
                    <a href="mailto:aniketkumar639597@gmail.com">EM</a>
                </motion.div>
            </div>
        </section>
    );
});

Home.displayName = "Home";

export default Home;
