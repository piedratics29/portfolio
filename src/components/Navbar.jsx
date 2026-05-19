import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('scroll', close);
    return () => window.removeEventListener('scroll', close);
  }, []);

  return (
    <header id="top" className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4 md:px-8 md:py-5 backdrop-blur-lg bg-bg/70 border-b border-border/50 transition-colors duration-700">
      <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo(0,0)}>
        <span className="text-[10px] uppercase tracking-widest font-bold mb-1 opacity-50">
          Portfolio
        </span>
        <span className="text-xl md:text-2xl font-bold tracking-tighter leading-none">
          Rose Piedra
        </span>
      </div>
      <button
        type="button"
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="w-6 h-px bg-text" />
        <span className="w-6 h-px bg-text" />
      </button>
      <nav
        id="site-nav"
        className={`${
          open
            ? 'fixed inset-0 bg-bg z-50 flex flex-col items-center justify-center gap-8'
            : 'hidden md:flex gap-8 items-center'
        } text-[11px] uppercase tracking-widest font-semibold`}
      >
        {open && (
           <button 
             className="absolute top-10 right-10 text-2xl" 
             onClick={() => setOpen(false)}
           >
             ×
           </button>
        )}
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            className="hover:opacity-50 transition-opacity"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
    </header>
  );
}
