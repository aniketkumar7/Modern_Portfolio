import { forwardRef, useMemo } from "react";
import { useTheme } from "../context/ThemeContext";
import Marquee from "../Loader/Marquee";
import './Skills.css'

const SKILLS_DATA = [
    { name: 'C', category: 'Programming' },
    { name: 'C++', category: 'Programming', highlighted: true },
    { name: 'JAVA', category: 'Programming' },
    { name: 'PYTHON', category: 'Programming', highlighted: true },
    { name: 'JAVASCRIPT', category: 'Web' },
    { name: 'HTML', category: 'Web', highlighted: true },
    { name: 'CSS', category: 'Web' },
    { name: 'TAILWIND CSS', category: 'Web', highlighted: true },
    { name: 'REACT', category: 'Framework' },
    { name: 'NODE JS', category: 'Framework', highlighted: true },
    { name: 'GIT', category: 'Tools' },
    { name: 'GITHUB', category: 'Tools', highlighted: true },
    { name: 'SKETCHING', category: 'Design' },
    { name: 'FIGMA', category: 'Design', highlighted: true },
    { name: 'CANVA', category: 'Design' },
    { name: 'SQL', category: 'Database', highlighted: true },
    { name: 'STREAMLIT', category: 'Framework' },
    { name: 'AWS', category: 'Cloud', highlighted: true },
    { name: 'SQLITE', category: 'Database' },
    { name: 'UI DESIGN', category: 'Design', highlighted: true },
];

const Skills = forwardRef(({ textColor }, ref) => {
    const { theme } = useTheme();
    // Memoize the marquee items to prevent unnecessary re-renders
    const marqueeItems = useMemo(() => Array(5).fill('Skills/Tech'), []);

    // Memoize the skill cards
    const skillCards = useMemo(() =>
        SKILLS_DATA.map((skill) => (
            <div
                key={skill.name}
                className={`card ${skill.highlighted ? 'highlighted' : ''}`}
                style={skill.highlighted ? { backgroundColor: textColor } : undefined}
                data-category={skill.category}
            >
                <h1>{skill.name}</h1>
            </div>
        )), [textColor]);

    return (
        <div className={`skills-container ${theme}`} ref={ref} style={{ "--accent-color": textColor }}>
            <Marquee items={marqueeItems} textColor={textColor} />
            <div className="skills">
                <div className="cards">
                    {skillCards}
                </div>
            </div>
        </div>
    );
});

Skills.displayName = "Skills";

export default Skills;
