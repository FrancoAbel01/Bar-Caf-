import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

const links = [
  { label: 'Inicio', href: '#home' },
  { label: 'Nosotros', href: '#about' },
  { label: 'Menú', href: '#menu' },
  { label: 'Catálogo', href: '#catalog' },
  { label: 'Contacto', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass bg-cream-50/85 shadow-lg shadow-coffee-900/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        <a href="#home" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ rotate: -15, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400 }}
            className="w-11 h-11 rounded-full bg-gradient-to-br from-coffee-600 to-coffee-800 flex items-center justify-center shadow-lg shadow-coffee-900/30"
          >
            <Coffee className="w-6 h-6 text-cream-100" />
          </motion.div>
          <div className="leading-none">
            <span className="font-display text-2xl font-bold text-coffee-800">Barú</span>
            <span className="font-display text-2xl font-medium text-accent-500 ml-1">Café</span>
          </div>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative px-4 py-2 text-sm font-medium text-coffee-700 hover:text-coffee-900 transition-colors group"
              >
                {l.label}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-1 w-0 h-0.5 bg-accent-500 rounded-full transition-all duration-300 group-hover:w-2/3" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coffee-800 text-cream-50 text-sm font-semibold hover:bg-coffee-700 transition-colors shadow-md shadow-coffee-900/20"
        >
          Reservar
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-lg text-coffee-800 hover:bg-coffee-100 transition-colors"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden glass bg-cream-50/95 border-t border-coffee-200"
          >
            <ul className="flex flex-col px-5 py-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-lg text-coffee-700 font-medium hover:bg-coffee-100 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block mt-2 px-4 py-3 rounded-lg bg-coffee-800 text-cream-50 font-semibold text-center"
                >
                  Reservar
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
