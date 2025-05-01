import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import "./Marquee.css";

const Marquee = ({ items, textColor }) => {
    const { theme } = useTheme();
    // Memoize duplicated items to prevent unnecessary re-renders
    const duplicatedItems = useMemo(() => [...items, ...items, ...items], [items]);

    return (
        <div
            className={`marquee ${theme}`}
            style={{ "--marquee-color": textColor }}
        >
            <div className="marquee-content">
                {duplicatedItems.map((item, index) => (
                    <div
                        className="marquee-item"
                        key={`${item}-${index}`}
                        style={{
                            "--item-index": index,
                            "--total-items": duplicatedItems.length
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default Marquee;
