import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import CustomCursor from "./components/CustomCursor";
import ScrollToTop from "./components/ScrollToTop";
import ParticlesContainer from "./components/ParticlesContainer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <div className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-x-hidden">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <CustomCursor />
          <ScrollToTop />
          <ParticlesContainer darkMode={darkMode} />
          {/* Main routed pages with proper stacking */}
          <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}
