import { useState, useCallback, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { useTheme } from '../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import "./Menu.css";

const Menu = ({ sectionRefs, textColor }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [hoveredItem, setHoveredItem] = useState(null);
    const { theme, toggleTheme } = useTheme();
    const menuRef = useRef(null);

    const menuItems = [
        { name: "Home", description: "Back to start", icon: "↗" },
        { name: "Skills", description: "My expertise", icon: "◈" },
        { name: "About", description: "Get to know me", icon: "◉" },
        { name: "Experience", description: "My journey", icon: "◎" },
        { name: "Education", description: "Academic background", icon: "◇" },
        { name: "Projects", description: "View my work", icon: "◆" },
        { name: "Achievements", description: "My accomplishments", icon: "★" },
        { name: "Contact", description: "Let's talk", icon: "→" }
    ];

    const toggleMenu = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, []);

    const handleItemClick = useCallback((index) => {
        setActiveItem(index);
        sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    }, [sectionRefs]);

    // Magnetic cursor effect for menu items
    const handleMouseMove = useCallback((e, index) => {
        if (hoveredItem !== index) return;
        const item = e.currentTarget;
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        item.style.setProperty('--mouse-x', `${x * 0.15}px`);
        item.style.setProperty('--mouse-y', `${y * 0.15}px`);
    }, [hoveredItem]);

    const handleMouseLeave = useCallback((e) => {
        e.currentTarget.style.setProperty('--mouse-x', '0px');
        e.currentTarget.style.setProperty('--mouse-y', '0px');
        setHoveredItem(null);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <header className="header">
            <nav className="nav-container">
                <div className="nav-left">
                    <a style={{ color: textColor }} href="#" className="logo">
                        <span className="logo-text">ANIKET</span>
                        <span className="logo-dot" style={{ background: textColor }}></span>
                    </a>
                </div>

                <div className="nav-right">
                    <button
                        className="theme-toggle-btn"
                        onClick={toggleTheme}
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                        style={{ color: textColor, borderColor: `${textColor}30` }}
                    >
                        <span className="theme-icon">
                            {theme === 'light' ? <BsMoon /> : <BsSun />}
                        </span>
                    </button>

                    <button
                        className={`menu-toggle ${menuOpen ? 'is-active' : ''}`}
                        onClick={toggleMenu}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        style={{ borderColor: `${textColor}30` }}
                    >
                        <span className="menu-toggle-inner">
                            {menuOpen ? (
                                <IoClose color={textColor} />
                            ) : (
                                <RiMenu4Line color={textColor} />
                            )}
                        </span>
                        <span className="menu-toggle-bg" style={{ background: textColor }}></span>
                    </button>
                </div>

                <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} ref={menuRef}>
                    {/* Animated background lines */}
                    <div className="menu-bg-lines">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="menu-bg-line" style={{ '--line-index': i }}></div>
                        ))}
                    </div>
                    
                    {/* Gradient orbs */}
                    <div className="menu-orb menu-orb-1" style={{ background: `radial-gradient(circle, ${textColor}40 0%, transparent 70%)` }}></div>
                    <div className="menu-orb menu-orb-2" style={{ background: `radial-gradient(circle, ${textColor}20 0%, transparent 70%)` }}></div>

                    <nav className="menu-content">
                        <div className="menu-header">
                            <span className="menu-header-label">Navigation</span>
                            <span className="menu-header-line" style={{ background: textColor }}></span>
                        </div>
                        
                        <div className="menu-items-container">
                            {menuItems.map((item, index) => (
                                <button
                                    key={item.name}
                                    className={`menu-item ${activeItem === index ? 'active' : ''} ${hoveredItem === index ? 'hovered' : ''}`}
                                    onClick={() => handleItemClick(index)}
                                    onMouseEnter={() => setHoveredItem(index)}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ 
                                        '--item-index': index, 
                                        '--accent-color': textColor,
                                        '--total-items': menuItems.length
                                    }}
                                    aria-label={`Go to ${item.name}`}
                                >
                                    <div className="menu-item-bg" style={{ background: `${textColor}10` }}></div>
                                    
                                    <div className="menu-item-content">
                                        <span className="menu-item-number">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        
                                        <div className="menu-item-text-wrapper">
                                            <span className="menu-item-text" style={{ color: textColor }}>
                                                {item.name.split('').map((char, charIndex) => (
                                                    <span 
                                                        key={charIndex} 
                                                        className="menu-item-char"
                                                        style={{ '--char-index': charIndex }}
                                                    >
                                                        {char}
                                                    </span>
                                                ))}
                                            </span>
                                            <span className="menu-item-text-clone">
                                                {item.name.split('').map((char, charIndex) => (
                                                    <span 
                                                        key={charIndex} 
                                                        className="menu-item-char"
                                                        style={{ '--char-index': charIndex }}
                                                    >
                                                        {char}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>

                                        <span className="menu-item-icon">{item.icon}</span>
                                    </div>
                                    
                                    <span className="menu-item-description">{item.description}</span>
                                    
                                    <div className="menu-item-line" style={{ background: textColor }}></div>
                                </button>
                            ))}
                        </div>

                        <div className="menu-footer">
                            <div className="menu-footer-info">
                                <span>Available for work</span>
                                <span className="menu-footer-status" style={{ background: textColor }}></span>
                            </div>
                            <div className="menu-footer-cta" style={{ color: textColor }}>
                                Let's build something amazing →
                            </div>
                        </div>
                    </nav>
                </div>
            </nav>
        </header>
    );
};

export default Menu;
