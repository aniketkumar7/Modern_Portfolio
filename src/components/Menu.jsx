import { useState, useCallback } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { useTheme } from '../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import "./Menu.css";

const Menu = ({ sectionRefs, textColor }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const { theme, toggleTheme } = useTheme();

    const menuItems = [
        { name: "Home", description: "Back to start" },
        { name: "Skills", description: "My expertise" },
        { name: "About", description: "Get to know me" },
        { name: "Experience", description: "My journey" },
        { name: "Education", description: "Academic background" },
        { name: "Projects", description: "View my work" },
        { name: "Achievements", description: "My accomplishments" },
        { name: "Contact", description: "Let's talk" }
    ];

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);

    const handleItemClick = useCallback((index) => {
        setActiveItem(index);
        sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    }, [sectionRefs]);

    return (
        <header className="header">
            <nav className="nav-container">
                <div className="nav-left">
                    <a style={{ color: textColor }} href="#" className="logo">
                        ANIKET
                    </a>
                </div>

                <div className="nav-right">
                    <button
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                        style={{ color: textColor }}
                    >
                        {theme === 'light' ? <BsMoon /> : <BsSun />}
                    </button>

                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? (
                            <IoClose color={textColor} />
                        ) : (
                            <RiMenu4Line color={textColor} />
                        )}
                    </button>
                </div>

                <div className={`menu-overlay ${menuOpen ? 'active' : ''}`}>
                    <nav className="menu-content">
                        {menuItems.map((item, index) => (
                            <button
                                key={item.name}
                                className={`menu-item ${activeItem === index ? 'active' : ''}`}
                                onClick={() => handleItemClick(index)}
                                style={{ '--item-index': index, '--accent-color': textColor }}
                                aria-label={`Go to ${item.name}`}
                            >
                                <div className="menu-item-main">
                                    <span className="menu-item-number">
                                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                                    </span>
                                    <span style={{ color: textColor }} className="menu-item-text">
                                        {item.name}
                                    </span>
                                </div>
                                <span className="menu-item-description">{item.description}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Menu;
