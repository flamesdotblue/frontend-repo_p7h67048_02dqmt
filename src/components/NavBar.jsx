import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 border-b border-black/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">awwrds.studio</a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              {l.label}
            </a>
          ))}
          <div className="h-6 w-px bg-black/20" />
          <div className="flex items-center gap-3">
            <a href="https://github.com" aria-label="GitHub" className="p-2 rounded hover:bg-black/5">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded hover:bg-black/5">
              <Linkedin size={18} />
            </a>
            <a href="#contact" aria-label="Email" className="p-2 rounded hover:bg-black/5">
              <Mail size={18} />
            </a>
          </div>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded hover:bg-black/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden overflow-hidden border-t border-black/10 bg-white/90"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-base tracking-wider uppercase"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com" aria-label="GitHub" className="p-2 rounded hover:bg-black/5">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="p-2 rounded hover:bg-black/5">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" aria-label="Email" className="p-2 rounded hover:bg-black/5">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
