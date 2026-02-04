
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 border-t border-white/5 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Portafolio de desarrollador profesional. Desarrollado con React y Tailwind CSS.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-slate-400">
            <a href="https://github.com/villegas13" className="hover:text-white transition-colors"><i className="fa-brands fa-github text-lg"></i></a>
            <a href="https://www.linkedin.com/in/jes%C3%BAs-villegas/" className="hover:text-white transition-colors"><i className="fa-brands fa-linkedin text-lg"></i></a>            
          </div>
        </div>
      </footer>     
      <AIChat />
    </div>
  );
};

export default App;
