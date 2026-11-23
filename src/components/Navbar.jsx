import { useState, useEffect } from 'react';

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
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') close();
    };

    window.addEventListener('scroll', close);
    window.addEventListener('keydown', handleKeyDown);

    if (open) document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('scroll', close);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header id="top" className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-border/50 bg-bg/70 p-4 backdrop-blur-lg transition-colors duration-700 md:px-8 md:py-5">
      <div className="flex cursor-pointer flex-col" onClick={() => window.scrollTo(0, 0)}>
        <span className="mb-1 text-[10px] font-bold uppercase tracking-widest opacity-50">
          Portfolio
        </span>
        <span className="text-xl font-bold leading-none tracking-tighter md:text-2xl">
          Rose Piedra
        </span>
      </div>

      <button
        type="button"
        className="relative z-10 flex h-10 w-10 flex-col items-end justify-center gap-1.5 md:hidden"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
      >
        <span className={`h-px bg-text transition-all duration-300 ${open ? 'w-6 -translate-y-0.5 -rotate-45' : 'w-6'}`} />
        <span className={`h-px bg-text transition-all duration-300 ${open ? 'w-6 -translate-y-1.5 rotate-45' : 'w-4'}`} />
      </button>

      <nav
        id="site-nav"
        className={`${
          open
            ? 'absolute left-0 right-0 top-full flex max-h-[calc(100vh-5rem)] flex-col items-center gap-7 overflow-y-auto border-t border-border bg-bg px-6 py-8 shadow-2xl'
            : 'hidden md:flex md:items-center md:gap-8'
        } text-[11px] font-semibold uppercase tracking-widest`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition-opacity hover:opacity-50"
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}Rose-Piedra-Singco-Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-50"
          onClick={() => setOpen(false)}
        >
          Resume
        </a>
        <a
          href={`${import.meta.env.BASE_URL}Rose-Piedra-Singco-CV.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-opacity hover:opacity-50"
          onClick={() => setOpen(false)}
        >
          CV
        </a>
      </nav>
    </header>
  );
}
