import { forwardRef } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Contact.css";

const currentYear = new Date().getFullYear();

const socialLinks = [
    {
        name: "GitHub",
        handle: "@aniketkumar7",
        url: "https://github.com/aniketkumar7",
    },
    {
        name: "LinkedIn",
        handle: "@aniketkumar07",
        url: "https://www.linkedin.com/in/aniketkumar07/",
    },
    {
        name: "Medium",
        handle: "@aniketkumar",
        url: "https://medium.com/@aniketkumar639597",
    },
    {
        name: "Tublian",
        handle: "@aniketkumar7",
        url: "https://www.tublian.com/profile/aniketkumar7",
    },
];

const Contact = forwardRef(({ homeRef, textColor }, ref) => {
    const { theme } = useTheme();

    return (
        <section
            className={`contact ${theme}`}
            ref={ref}
            style={{ "--accent": textColor }}
        >
            <Marquee
                items={Array(5).fill("Get in Touch")}
                textColor={textColor}
                theme={theme}
            />

            <div className="contact-wrapper">
                {/* Main Content */}
                <div className="contact-main">
                    {/* Left: CTA */}
                    <div className="contact-cta">
                        <span className="contact-eyebrow">Contact</span>
                        <h2 className="contact-heading">
                            Let's work <br />
                            <span>together</span>
                        </h2>
                        <p className="contact-text">
                            Have a project in mind? Let's create something amazing.
                        </p>

                        <a
                            href="mailto:aniketkumar639597@gmail.com"
                            className="contact-email-btn"
                        >
                            <span className="email-text">aniketkumar639597@gmail.com</span>
                            <span className="email-arrow">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    {/* Right: Social Links */}
                    <div className="contact-socials">
                        <span className="socials-label">Find me on</span>
                        <div className="socials-list">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-item"
                                    style={{ '--i': index }}
                                >
                                    <div className="social-info">
                                        <span className="social-name">{link.name}</span>
                                        <span className="social-handle">{link.handle}</span>
                                    </div>
                                    <span className="social-arrow">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Back to Top */}
                <button
                    className="back-to-top"
                    onClick={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })}
                    aria-label="Back to top"
                >
                    <span>Back to Top</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </svg>
                </button>
            </div>

            {/* Footer */}
            <footer className="contact-footer">
                <p className="footer-copy">
                    © {currentYear} Aniket Kumar. All rights reserved.
                </p>
                <p className="footer-made">
                    Designed & Built with <span className="footer-heart">♥</span> in India
                </p>
            </footer>
        </section>
    );
});

Contact.displayName = "Contact";

export default Contact;
