import { useEffect, useState, useCallback } from "react";
import "./Preloader.css";

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [hide, setHide] = useState(false);

    const animateCount = useCallback(() => {
        // Smooth counting animation using easing
        const startTime = Date.now();
        const duration = 2000; // 2 seconds total animation

        const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth counting
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.min(Math.floor(easeOutQuart * 100), 100);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setHide(true);
                setTimeout(() => setLoading(false), 400);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        animateCount();
    }, [animateCount]);

    if (!loading) return null;

    return (
        <div className={`preloader ${hide ? "hide" : ""}`}>
            <div className="preloader-content">
                <div className="preloader-inner">
                    <div className="preloader-circle"></div>
                    <div className="preloader-lines">
                        <div className="preloader-line"></div>
                        <div className="preloader-line"></div>
                        <div className="preloader-line"></div>
                    </div>
                </div>
                <div className="counter">
                    <span className="counter-number">{count}</span>
                    <span className="counter-label">%</span>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
