// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { THEMES, STORAGE_KEY } from '../constants/themeConstants';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        return savedTheme || THEMES.LIGHT;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
