import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="sections">
        <Hero />
        <Experience />
        <Stack />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <button
        className="top-button"
        type="button"
        aria-label="Ir arriba"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </div>
  );
}

export default App;