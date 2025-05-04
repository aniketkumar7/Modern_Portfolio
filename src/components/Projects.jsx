import { forwardRef } from "react";
import Marquee from "../Loader/Marquee";
import { useTheme } from "../context/ThemeContext";
import "./Projects.css";

// Import images (assuming dynamic import or static imports as needed)
import movie from "../assets/movie.png";
import disease from "../assets/disease.png";
import weather from "../assets/weather.png";
import obys from "../assets/obys.png";
import reactIcon from "../assets/react.png";
import reduxIcon from "../assets/redux.png";
import firebaseIcon from "../assets/firebase.png";
import jsIcon from "../assets/js.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import signIcon from "../assets/sign.png";
import figmaIcon from "../assets/figma.png";
import nikeIcon from "../assets/nike.png";
import tailwindIcon from "../assets/tailwind.png";
import mongoIcon from "../assets/mongodb.png";
import food from "../assets/food.png";
import task from "../assets/task.png";

const projectsData = [
    {
        id: 1,
        title: "FOOD RECIPE APP",
        image: food,
        description:
            "A community-driven recipe sharing app built with React and MongoDB. Features include user authentication, responsive UI, and secure recipe management.",
        liveLink: "https://food-app-29au.onrender.com/",
        codeLink: "https://github.com/aniketkumar7/FOOD_BLOG_APP",
        technologies: [
            { name: "React", icon: reactIcon },
            { name: "Tailwind CSS", icon: tailwindIcon },
            { name: "MongoDB", icon: mongoIcon },
        ],
    },
    {
        id: 2,
        title: "TASK FLOW",
        image: task,
        description:
            "A responsive task management app built with vanilla HTML, CSS, and JavaScript. Includes task creation, editing, filtering, and persistence via local storage.",
        liveLink: "https://task-flow-theta-ruddy.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/Task-Flow",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
        ],
    },
    {
        id: 1,
        title: "NETFLIX GPT",
        image: movie,
        description:
            "Netflix GPT is an innovative web application that allows users to browse movies recommended by a GPT-3 model based on their preferences and ratings. Developed using React, Firebase, and Redux with TMDB API integration.",
        liveLink: "https://netflix-gpt-jade-five.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/NETFLIX_GPT",
        technologies: [
            { name: "React", icon: reactIcon },
            { name: "Redux", icon: reduxIcon },
            { name: "Firebase", icon: firebaseIcon },
        ],
    },
    {
        id: 2,
        title: "DISEASE PREDICTION APP",
        image: disease,
        description:
            "This web application employs Streamlit and Python to predict diseases based on symptoms entered by users, utilizing machine learning techniques.",
        liveLink:
            "https://multiplediseaseprediction-2yendaquygiktzxcxtfmhc.streamlit.app/",
        codeLink:
            "https://github.com/aniketkumar7/Multiple_Disease_Prediction/tree/main",
        technologies: [{ name: "Javascript", icon: jsIcon }],
    },
    {
        id: 3,
        title: "OBYS UI",
        image: obys,
        description:
            "The OBYS UI project is a design-only clone created with HTML, CSS, and JavaScript, emphasizing aesthetic appeal and user experience.",
        liveLink: "https://obys-clone.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/OBYS-Clone",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
        ],
    },
    {
        id: 4,
        title: "WEATHER APP",
        image: weather,
        description:
            "Built with HTML, CSS, and JavaScript, this app utilizes a weather API to deliver accurate forecasts based on user locations.",
        liveLink: "https://weather-app-orpin-chi-53.vercel.app/",
        codeLink: "https://github.com/aniketkumar7/Weather_App",
        technologies: [
            { name: "HTML", icon: htmlIcon },
            { name: "CSS", icon: cssIcon },
            { name: "JavaScript", icon: jsIcon },
        ],
    },
    {
        id: 5,
        title: "SIGN IN & SIGN UP UI",
        image: signIcon,
        description:
            "User-friendly sign-in and sign-up page UI designed using Figma, focusing on clean and modern layout.",
        liveLink:
            "https://www.figma.com/proto/GpmHQsK3nTkFwaKi9IQM1T/sign-up-page?node-id=0-1&t=MyzaTiocBIwSw1ed-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
        technologies: [{ name: "Figma", icon: figmaIcon }],
    },
    {
        id: 6,
        title: "NIKE SHOE UI",
        image: nikeIcon,
        description:
            "Aesthetic Nike Shoe Page UI created in Figma, highlighting product images and pricing.",
        liveLink:
            "https://www.figma.com/proto/MC3mX6GDgWdyq1NO635pTu/NIKE-SHOES-UI?node-id=2-6&t=jztDYjS22BJcYrsW-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
        technologies: [{ name: "Figma", icon: figmaIcon }],
    },
];

const Projects = forwardRef(({ textColor }, ref) => {
    const {theme} = useTheme();

    const items = Array(5).fill("Projects");

    return (
        <div
            className={`projects-section ${theme}`}
            ref={ref}
            style={{ "--accent-color": textColor }}
        >
            <Marquee items={items} textColor={textColor} theme={theme} />

            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div
                        className="project-card"
                        key={project.id}
                        style={{ "--project-index": index }}
                    >
                        <div className="project-image-wrapper">
                            <img src={project.image} alt={project.title} loading="lazy" />
                            <div className="project-overlay"></div>
                        </div>

                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech-stack">
                                {project.technologies.map((tech, idx) => (
                                    <div className="tech-icon" key={idx} title={tech.name}>
                                        <img src={tech.icon} alt={tech.name} />
                                        <div className="tech-tooltip">{tech.name}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="project-links">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link live-link"
                                >
                                    Live Demo
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link code-link"
                                >
                                    Source Code
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

Projects.displayName = "Projects";

export default Projects;
