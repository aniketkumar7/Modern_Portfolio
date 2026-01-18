import { useEffect, useState, useCallback } from "react";
import "./Preloader.css";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [phase, setPhase] = useState("loading"); // loading, complete, exit

    const animateCount = useCallback(() => {
        const startTime = Date.now();
        const duration = 3500; // Longer duration - 3.5 seconds

        const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Smooth easing
            const easeInOutCubic = progress < 0.5
                ? 4 * progress * progress * progress
                : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
            const currentCount = Math.min(Math.floor(easeInOutCubic * 100), 100);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setPhase("complete");
                setTimeout(() => {
                    setPhase("exit");
                    setTimeout(() => setLoading(false), 1000);
                }, 500);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        // Small delay before starting
        const timeout = setTimeout(animateCount, 300);
        return () => clearTimeout(timeout);
    }, [animateCount]);

    if (!loading) return null;

    return (
        <div className={`loader ${phase}`}>
            {/* Background with subtle gradient */}
            <div className="loader-bg" />
            
            {/* Animated vertical lines */}
            <div className="loader-lines">
                {[...Array(5)].map((_, i) => (
                    <div 
                        key={i} 
                        className="loader-line" 
                        style={{ '--line-index': i }}
                    />
                ))}
            </div>

            {/* Main content */}
            <div className="loader-content">
                {/* Top label */}
                <div className="loader-label">
                    <span className="loader-label-text">Portfolio</span>
                    <span className="loader-label-year">2026</span>
                </div>

                {/* Large counter */}
                <div className="loader-counter">
                    <div className="loader-counter-wrapper">
                        <span className="loader-number">{String(count).padStart(3, '0')}</span>
                    </div>
                </div>

                {/* Name reveal */}
                <div className="loader-name">
                    <div className="loader-name-line">
                        {"ANIKET".split("").map((char, i) => (
                            <span 
                                key={i} 
                                className="loader-char"
                                style={{ '--char-index': i }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                    <div className="loader-name-line loader-name-line-2">
                        {"KUMAR".split("").map((char, i) => (
                            <span 
                                key={i} 
                                className="loader-char"
                                style={{ '--char-index': i + 6 }}
                            >
                                {char}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom info */}
                <div className="loader-info">
                    <span className="loader-role">Frontend Developer</span>
                    <span className="loader-divider">—</span>
                    <span className="loader-location">India</span>
                </div>
            </div>

            {/* Progress bar at bottom */}
            <div className="loader-progress">
                <div 
                    className="loader-progress-bar"
                    style={{ transform: `scaleX(${count / 100})` }}
                />
            </div>

            {/* Exit overlay */}
            <div className="loader-overlay" />
        </div>
    );
};

export default Preloader;
