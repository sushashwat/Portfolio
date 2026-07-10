import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import useTheme from "./hooks/useTheme";
import Hero from "./components/Hero";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className="scanlines" aria-hidden="true"></div>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
