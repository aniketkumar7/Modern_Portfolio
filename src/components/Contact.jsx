import { forwardRef } from "react";
import Marquee from "../Loader/Marquee";
import arrow from "../assets/arrow.png";
import { useTheme } from "../context/ThemeContext";
import "./Contact.css";

const currentYear = new Date().getFullYear();
const socialLinks = [
    {
        name: "GITHUB",
        url: "https://github.com/aniketkumar7",
        icon: "🐱" // You can replace with actual icons
    },
    {
        name: "TUBLIAN",
        url: "https://www.tublian.com/profile/aniketkumar7",
        icon: "💻"
    },
    {
        name: "LINKEDIN",
        url: "https://www.linkedin.com/in/aniketkumar07/",
        icon: "💼"
    },
    {
        name: "MEDIUM",
        url: "https://medium.com/@aniketkumar639597",
        icon: "📝"
    }
];

const Contact = forwardRef(({ homeRef, textColor }, ref) => {
    const { theme } = useTheme();
    const items = Array(5).fill("Get in touch");

    return (
        <div className={`contact-section ${theme}`}  ref={ref} style={{ "--accent-color": textColor }}>
            <Marquee items={items} textColor={textColor} />

            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-text">
                        <h2 className="contact-heading">
                            <span className="text-gradient">Thanks for watching</span>
                        </h2>
                        <div className="contact-info">
                            <p>You can contact me anytime via</p>
                            <a
                                href="mailto:aniketkumar639597@gmail.com"
                                className="email-link"
                            >
                                aniketkumar639597@gmail.com
                                <span className="email-underline"></span>
                            </a>
                            <p>or find me on</p>
                        </div>

                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    style={{ "--delay": `${index * 0.1}s` }}
                                >
                                    <span className="social-icon">{link.icon}</span>
                                    <span className="social-name">{link.name}</span>
                                    <div className="social-hover-effect"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <button
                        className="scroll-top-button"
                        onClick={(e) => {
                            e.preventDefault();
                            homeRef.current.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        <span className="bracket">[</span>
                        <div className="arrow-wrapper">
                            <img src={arrow} alt="Scroll to top" />
                        </div>
                        <span className="bracket">]</span>
                    </button>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© {currentYear} Aniket Kumar. All rights reserved.</p>
                <div className="footer-stats">
                    <span>
                        Designed & Built with{" "}
                        <span className="heart" style={{ "--accent-color": textColor }}>
                            ❤️
                        </span>
                    </span>
                    <span>Made in India 🇮🇳</span>
                </div>
            </div>
        </div>
    );
});

Contact.displayName = "Contact";

export default Contact;
