import { useEffect } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/avatar.webp";

export default function SignaturePreloader({ onComplete }) {
    useEffect(() => {
        const id = window.setTimeout(onComplete, 2350);
        return () => window.clearTimeout(id);
    }, [onComplete]);

    return (
        <motion.div
            className="preloader"
            role="status"
            aria-label="Loading portfolio"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="preloader-inner">
                <motion.div
                    className="preloader-image-wrap"
                    initial={{ clipPath: "inset(100% 0 0 0)" }}
                    animate={{ clipPath: "inset(0% 0 0 0)" }}
                    transition={{ duration: 1.2, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                    aria-hidden="true"
                >
                    <img className="preloader-image preloader-avatar" src={avatar} alt="" />
                </motion.div>
                <motion.div
                    className="preloader-mark"
                    initial={{ opacity: 0, y: 18, scale: 1.1 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden="true"
                >ak.</motion.div>
                <motion.div
                    className="preloader-rule"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden="true"
                />
            </div>
        </motion.div>
    );
}
