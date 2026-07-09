import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import useTheme from "./hooks/useTheme";


function App(){
  const { theme, toggleTheme } = useTheme();

    return (
    <>
      <div className="scanlines" aria-hidden="true"></div>
      <Header theme={theme} toggleTheme={toggleTheme} />
         <main>  
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
export default App;