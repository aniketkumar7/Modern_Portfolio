import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Marquee.css";

const Marquee = ({ items, textColor }) => {
    const { theme } = useTheme();
    const words = useMemo(() => [...items, ...items, ...items, ...items], [items]);

    return (
        <div className={`mq ${theme}`} style={{ "--mq-accent": textColor }}>
            <div className="mq-container">
                <div className="mq-track">
                    {words.map((word, i) => (
                        <div className="mq-segment" key={i}>
                            <span className="mq-txt">{word}</span>
                            <span className="mq-slash">/</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;
