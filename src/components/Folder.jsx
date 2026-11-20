// Glassy front-only folder (same flap as Bookmarky). The project screenshot is the paper inside.
const FLAP_PATH =
    "M28 50Q28 0 78 0H134C151 0 163 7 172 19C179 28 185 30 196 30H243Q293 30 293 80V191Q293 241 243 241H78Q28 241 28 191V50Z";

export default function Folder({ name, year, tint, image, open, placeholder, onClick }) {
    // Placeholder sits inside a link, so it can't be a button
    const Tag = onClick ? "button" : "span";
    return (
        <Tag
            type={onClick ? "button" : undefined}
            className={`folder${open ? " is-open" : ""}${placeholder ? " is-placeholder" : ""}`}
            style={{ "--tint": tint }}
            onClick={onClick}
            aria-expanded={onClick ? !!open : undefined}
        >
            <span className="folder-art">
                {image && <img className="folder-paper" src={image} alt="" loading="lazy" decoding="async" />}
                <svg className="folder-flap" viewBox="0 0 321 241" fill="none" aria-hidden="true">
                    <path d={FLAP_PATH} className="folder-flap-fill" />
                    <path d={FLAP_PATH} className="folder-flap-edge" />
                </svg>
                <span className="folder-label">
                    <span className="folder-name">{name}</span>
                    {year && <span className="folder-year">{year}</span>}
                </span>
            </span>
        </Tag>
    );
}
