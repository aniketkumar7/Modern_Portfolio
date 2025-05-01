import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { getRandomColor } from "./utils/color";
import './styles/theme-variables.css';
import { ThemeProvider } from "./context/ThemeContext";

// Lazy load components
const About = lazy(() => import("./components/About"));
const Home = lazy(() => import("./components/Home"));
const AnimatedCursor = lazy(() => import("./Loader/Cursor"));
const Menu = lazy(() => import("./components/Menu"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Preloader = lazy(() => import("./Loader/Preloader"));
const Achievements = lazy(() => import("./components/Achievements"));
const Experience = lazy(() => import("./components/Experience"));
const Education = lazy(() => import("./components/Education"));

const App = () => {
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const achievementsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const [textColor, setTextColor] = useState(getRandomColor());

  useEffect(() => {
    setTextColor(getRandomColor());
  }, []);

  return (
    <ThemeProvider>
      <Suspense fallback={<Preloader />}>
        <div className="App">
          <Preloader />
          <Menu
            sectionRefs={[
              homeRef,
              skillsRef,
              aboutRef,
              projectsRef,
              contactRef,
              achievementsRef,
              experienceRef,
              educationRef,
            ]}
            textColor={textColor}
          />
          <div ref={homeRef}>
            <Home textColor={textColor} />
          </div>
          <div ref={skillsRef}>
            <Skills textColor={textColor} />
          </div>
          <div ref={aboutRef}>
            <About textColor={textColor} />
          </div>
          <div ref={experienceRef}>
            <Experience textColor={textColor} />
          </div>
          <div ref={educationRef}>
            <Education textColor={textColor} />
          </div>
          <div ref={projectsRef}>
            <Projects textColor={textColor} />
          </div>
          <div ref={achievementsRef}>
            <Achievements textColor={textColor} />
          </div>
          <div ref={contactRef}>
            <Contact homeRef={homeRef} textColor={textColor} />
          </div>
        </div>
        <AnimatedCursor />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
