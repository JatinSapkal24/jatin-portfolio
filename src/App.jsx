import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import GitHubStats from './components/GitHubStats';
import ResumeDownload from './components/ResumeDownload';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Dark mode is enabled by default to respect the requested theme direction
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="bg-lightBg text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen transition-colors duration-300 relative overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <GitHubStats darkMode={darkMode} />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

