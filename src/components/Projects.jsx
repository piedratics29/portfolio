import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import SectionShell from './SectionShell.jsx';
import { wordpressProjects, frontendProjects } from '../data/projects.js';

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.45, ease: 'easeOut' },
  }),
};

function ScreenshotsModal({ project, index, onClose, onPrev, onNext, onSelect }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onPrev();
      if (event.key === 'ArrowRight') onNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!project) return null;

  const activeShot = project.screenshots[index];

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-bg/95 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="w-full max-w-5xl bg-bg border border-border shadow-2xl flex flex-col relative overflow-hidden h-[90vh]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-border">
          <div>
            <p className="text-[10px] uppercase tracking-widest opacity-40">Gallery</p>
            <h3 className="text-xl font-bold uppercase">{project.title}</h3>
          </div>
          <button type="button" className="text-2xl hover:opacity-50 transition-opacity" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="flex-1 flex items-center justify-between p-4 bg-accent">
          <button type="button" className="text-4xl px-4 hover:opacity-50 transition-opacity" onClick={onPrev}>
            ‹
          </button>
          <div className="flex-1 flex items-center justify-center h-full">
            <img 
              loading="lazy"
              src={activeShot.src} 
              alt={activeShot.label} 
              className="max-h-full max-w-full object-contain shadow-lg"
            />
          </div>
          <button type="button" className="text-4xl px-4 hover:opacity-50 transition-opacity" onClick={onNext}>
            ›
          </button>
        </div>

        <div className="p-6 border-t border-border bg-bg flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="flex flex-col">
            <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">
              {index + 1} / {project.screenshots.length}
            </p>
            <p className="text-sm font-semibold">{activeShot.label}</p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {project.screenshots.map((shot, shotIndex) => (
              <button
                key={`${shot.src}-${shotIndex}`}
                type="button"
                className={`w-12 h-12 flex-shrink-0 border-2 transition-all ${shotIndex === index ? 'border-border' : 'border-transparent opacity-50 hover:opacity-100'}`}
                onClick={() => onSelect(shotIndex)}
              >
                <img loading="lazy" src={shot.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectGrid({ items, startIndex = 0, onOpenScreens }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-4 md:px-0 mb-12">
      {items.map((project, idx) => (
        <motion.article
          key={project.title}
          className="relative bg-[#d1d1d1] rounded-3xl overflow-hidden group cursor-pointer h-[500px]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          custom={startIndex + idx}
          onClick={() => project.action.type === 'screens' ? onOpenScreens(project) : window.open(project.action.href, '_blank')}
        >
          {/* Background Image */}
          {project.image && (
            <img 
              loading="lazy"
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-md group-hover:brightness-50"
            />
          )}
          
          {/* Subtle gradient overlay to ensure text is legible */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-80" />

          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-white pointer-events-none z-10">
            
            {/* Top Text */}
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-2xl md:text-[26px] font-medium leading-tight drop-shadow-md">
                {project.title.split('-')[0].trim()}
              </h3>
              <span className="text-[11px] opacity-90 whitespace-nowrap mt-1 drop-shadow-sm pointer-events-auto hover:underline transition-opacity">
                /{project.action.label.replace('View ', '')}
              </span>
            </div>

            {/* Bottom Stack Pills */}
            <div className="flex flex-col gap-2 items-start pointer-events-auto opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              {project.stack.split('·').map(t => t.trim()).filter(Boolean).map((tech, i) => (
                <span 
                  key={i} 
                  className="text-[12px] md:text-sm font-bold tracking-tight bg-white text-black px-4 py-2 border border-transparent rounded-full shadow-2xl hover:bg-black hover:text-white transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openScreens = (project) => {
    setActiveProject(project);
    setActiveIndex(0);
  };

  const closeScreens = () => {
    setActiveProject(null);
    setActiveIndex(0);
  };

  const showPrev = () => {
    if (!activeProject) return;
    setActiveIndex((current) => (current - 1 + activeProject.screenshots.length) % activeProject.screenshots.length);
  };

  const showNext = () => {
    if (!activeProject) return;
    setActiveIndex((current) => (current + 1) % activeProject.screenshots.length);
  };

  return (
    <>
      <SectionShell id="projects" title="OUR WORK" muted>
        <div className="project-section mt-10">
          <div className="section-header px-4 md:px-0 mb-6 flex items-center justify-between">
            <h3 className="text-sm tracking-widest uppercase opacity-60">WordPress Development</h3>
          </div>
          <ProjectGrid items={wordpressProjects} startIndex={0} onOpenScreens={openScreens} />
        </div>

        <div className="project-section mt-16">
          <div className="section-header px-4 md:px-0 mb-6 flex items-center justify-between">
            <h3 className="text-sm tracking-widest uppercase opacity-60">Frontend / Web Apps</h3>
          </div>
          <ProjectGrid items={frontendProjects} startIndex={wordpressProjects.length} onOpenScreens={openScreens} />
        </div>
      </SectionShell>

      <AnimatePresence>
        {activeProject ? (
          <ScreenshotsModal
            project={activeProject}
            index={activeIndex}
            onClose={closeScreens}
            onPrev={showPrev}
            onNext={showNext}
            onSelect={setActiveIndex}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}
