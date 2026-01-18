import { useState, useEffect, useRef } from "react";

function AnimatedCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div className="cursor"
            ref={cursorRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "35px",
                height: "35px",
                zIndex: 9999,
                borderRadius: "50%",
                backgroundColor: "transparent",
                mixBlendMode: "difference",
                border: "2px solid white",
                pointerEvents: "none",
                transform: `translate(${position.x - 17.5}px, ${position.y - 17.5}px)`,
                transition: "transform 0.1s ease-out",
            }}
        />
    );
}

export default AnimatedCursor;
