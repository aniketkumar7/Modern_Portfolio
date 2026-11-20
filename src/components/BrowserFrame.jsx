// Full-page screenshot in a browser window. Hover pans down the page; on touch screens it scrolls natively.
export default function BrowserFrame({ src, url, alt, compact }) {
    const host = new URL(url).hostname.replace(/^www\./, "");
    return (
        <div className={`browser${compact ? " browser-compact" : ""}`}>
            <div className="browser-bar">
                <span className="browser-dots" aria-hidden="true"><i /><i /><i /></span>
                <a className="browser-url mono" href={url} target="_blank" rel="noreferrer">{host}</a>
            </div>
            <div className="browser-view" tabIndex={0} aria-label={`${alt}, scrollable preview`}>
                <img src={src} alt={alt} loading="lazy" decoding="async" />
            </div>
            {!compact && (
                <span className="browser-hint mono" aria-hidden="true">
                    <span className="on-hover">hover to scroll ↓</span>
                    <span className="on-touch">swipe inside ↓</span>
                </span>
            )}
        </div>
    );
}
