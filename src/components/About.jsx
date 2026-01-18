import img from "../assets/about.jpg";
import { forwardRef, useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import "./About.css";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";

const AnimatedNumber = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    
    return (
        <span ref={ref}>
            <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {value}{suffix}
            </motion.span>
        </span>
    );
};

const TextReveal = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    
    return (
        <div ref={ref} className="text-reveal-wrapper">
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ 
                    duration: 0.8, 
                    delay,
                    ease: [0.16, 1, 0.3, 1] 
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

const About = forwardRef(({ textColor }, ref) => {
    const items = Array(7).fill("About");
    const { theme } = useTheme();
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 768px)");
        const onChange = (e) => setIsMobile(e.matches);
        setIsMobile(mql.matches);
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, []);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const textX = useTransform(scrollYProgress, [0, 0.5], [50, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <div 
            ref={ref} 
            className={`about-section ${theme}`} 
            style={{ "--accent-color": textColor }}
        >
            <Marquee items={items} textColor={textColor} theme={theme} />

            <div className="about-stage" ref={containerRef}>
                {/* Left: Large Typography */}
                <motion.div 
                    className="about-left"
                    style={{ x: isMobile ? 0 : textX, opacity }}
                >
                    <div className="about-title-block">
                        <TextReveal>
                            <span className="title-line title-outline">Creative</span>
                        </TextReveal>
                        <TextReveal delay={0.1}>
                            <span className="title-line">Developer</span>
                        </TextReveal>
                        <TextReveal delay={0.2}>
                            <span className="title-line title-accent">&amp; Designer</span>
                        </TextReveal>
                    </div>

                    <motion.p 
                        className="about-description"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Building digital experiences that blend aesthetics with functionality. 
                        Currently crafting interfaces at the intersection of design and code.
                    </motion.p>

                    <motion.div 
                        className="about-stats"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="stat">
                            <div className="stat-value">
                                <AnimatedNumber value={1} suffix="+" />
                            </div>
                            <div className="stat-label">Years</div>
                        </div>
                        <div className="stat-divider" />
                        <div className="stat">
                            <div className="stat-value">
                                <AnimatedNumber value={10} suffix="+" />
                            </div>
                            <div className="stat-label">Projects</div>
                        </div>
                        <div className="stat-divider" />
                    </motion.div>
                </motion.div>

                {/* Right: Image with effects */}
                <div className="about-right">
                    <motion.div 
                        className="image-container"
                        style={{ y: imageY, scale: imageScale }}
                    >
                        <motion.div 
                            className="image-mask"
                            initial={{ clipPath: "inset(100% 0 0 0)" }}
                            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true }}
                        >
                            <img src={img} alt="Aniket Kumar" />
                        </motion.div>
                        
                        {/* Floating name card */}
                        <motion.div 
                            className="floating-card"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="card-name">Aniket Kumar</span>
                            <span className="card-role">Frontend Developer</span>
                            <span className="card-location">📍 India</span>
                        </motion.div>

                        {/* Decorative ring */}
                        <motion.div 
                            className="deco-ring"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* Bottom focus area */}
            <motion.div 
                className="about-focus"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="focus-label">Currently exploring</span>
                <div className="focus-items">
                    {["React", "Next.js", "UI Animation", "Web3"].map((item, i) => (
                        <motion.span
                            key={item}
                            className="focus-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ 
                                scale: 1.1, 
                                backgroundColor: textColor,
                                color: theme === 'dark' ? '#000' : '#fff'
                            }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
});

About.displayName = "About";

export default About;
