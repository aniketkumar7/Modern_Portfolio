// Handwritten margin note with a sketchy arrow pointing at the content (wide screens only)
const ARROWS = {
    // note sits in the right margin, arrow curls down-left toward the content
    right: "M58 6 C 66 30, 52 52, 14 56 M24 47 L13 56 L25 64",
    // note sits in the left margin, arrow curls down-right toward the content
    left: "M10 6 C 2 30, 18 52, 56 56 M46 47 L57 56 L45 64",
};

export default function Annot({ side = "right", top = 0, children }) {
    return (
        <div className={`annot annot-${side}`} style={{ top }} aria-hidden="true">
            <p>{children}</p>
            <svg viewBox="0 0 70 70" fill="none">
                <path d={ARROWS[side]} />
            </svg>
        </div>
    );
}
