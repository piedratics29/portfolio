import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';

const About = lazy(() => import('./components/About.jsx'));
const Skills = lazy(() => import('./components/Skills.jsx'));
const Projects = lazy(() => import('./components/Projects.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));

function App() {
  return (
    <div className="min-h-screen bg-bg text-text relative overflow-hidden font-sans">
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen bg-bg" />}>
          <div className="light-theme transition-colors duration-700">
            <About />
          </div>
          <Skills />
          <div className="light-theme transition-colors duration-700">
            <Projects />
          </div>
          <Contact />
        </Suspense>
      </main>
      <footer className="border-t border-border py-12 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Portfolio / 24</span>
          <span className="text-sm font-bold tracking-tight">Rose Piedra Singco</span>
        </div>
        
        <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold opacity-40">
          <a href="https://github.com/piedratics29" className="hover:opacity-100 transition-opacity">GitHub</a>
          <a href="https://ph.linkedin.com/in/rose-piedra-a77282199" className="hover:opacity-100 transition-opacity">LinkedIn</a>
        </div>

        <button
          type="button"
          className="text-[10px] uppercase tracking-widest font-bold opacity-40 hover:opacity-100 transition-opacity"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top ↑
        </button>
      </footer>
    </div>
  );
}

export default App;
