import { forwardRef, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import Marquee from "../Loader/Marquee";
import './Skills.css'

// Import icons
import reactIcon from "../assets/javascript-react.svg";
import tsIcon from "../assets/typescript (1).svg";
import jsIcon from "../assets/javascript.svg";
import pythonIcon from "../assets/python.svg";
import htmlIcon from "../assets/html5.svg";
import cssIcon from "../assets/css3.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import figmaIcon from "../assets/figma-light.svg";
import mongodbIcon from "../assets/mongodb.svg";
import firebaseIcon from "../assets/firebase-icon.svg";
import nodeIcon from "../assets/nodejs-icon.svg";
import gitIcon from "../assets/git.svg";
import githubIcon from "../assets/github-dark.svg";
import gcpIcon from "../assets/gcp.svg";
import cppIcon from "../assets/cpp.svg";
import nextIcon from "../assets/nextjs.svg";
import supabaseIcon from "../assets/supabase-dark.svg";
import mySqlIcon from "../assets/mysql.svg";

// Skills data - just add new skills here and the grid adapts automatically
const SKILLS_DATA = [
    { name: 'React', icon: reactIcon, category: 'Frontend' },
    { name: 'TypeScript', icon: tsIcon, category: 'Language' },
    { name: 'JavaScript', icon: jsIcon, category: 'Language' },
    { name: 'Python', icon: pythonIcon, category: 'Language' },
    { name: 'HTML', icon: htmlIcon, category: 'Frontend' },
    { name: 'CSS', icon: cssIcon, category: 'Frontend' },
    { name: 'Tailwind', icon: tailwindIcon, category: 'Frontend' },
    { name: 'MongoDB', icon: mongodbIcon, category: 'Database' },
    { name: 'MySQL', icon: mySqlIcon, category: 'Database' },
    { name: 'Firebase', icon: firebaseIcon, category: 'Backend' },
    { name: 'Supabase', icon: supabaseIcon, category: 'Backend' },
    { name: 'Figma', icon: figmaIcon, category: 'Design' },
    { name: 'Next.js', icon: nextIcon, category: 'Frontend' },
    { name: 'Node.js', icon: nodeIcon, category: 'Backend' },
    { name: 'Git', icon: gitIcon, category: 'Tools' },
    { name: 'GitHub', icon: githubIcon, category: 'Tools' },
    { name: 'GCP', icon: gcpIcon, category: 'Cloud' },
    { name: 'C++', icon: cppIcon, category: 'Language' },
];

// Get unique categories for filtering (optional future use)
const CATEGORIES = [...new Set(SKILLS_DATA.map(s => s.category))];

const Skills = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();
    const marqueeItems = useMemo(() => Array(5).fill('Skills & Tech'), []);

    return (
        <div className={`skills-section ${theme}`} ref={ref} style={{ "--accent-color": textColor }}>
            <Marquee items={marqueeItems} textColor={textColor} />
            
            <div className="skills-wrapper">
                <div className="skills-header">
                    <span className="skills-header__label">What I work with</span>
                    <h2 className="skills-header__title">
                        My Tech Stack
                    </h2>
                </div>

                <div className="skills-grid">
                    {SKILLS_DATA.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="skill-chip"
                            style={{ '--delay': `${index * 0.04}s` }}
                        >
                            {skill.icon ? (
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="skill-chip__icon"
                                    loading="lazy"
                                />
                            ) : (
                                <span className="skill-chip__placeholder">
                                    {skill.name.charAt(0)}
                                </span>
                            )}
                            <span className="skill-chip__name">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="skills-categories">
                    {CATEGORIES.map(cat => (
                        <span key={cat} className="category-tag">{cat}</span>
                    ))}
                </div>
            </div>
        </div>
    );
});

Skills.displayName = "Skills";

export default Skills;
