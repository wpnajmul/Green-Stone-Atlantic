import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';
import { BUSINESS_INFO } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/#services' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Reviews', path: '/#reviews' },
    { name: 'Contact', path: '/quote' },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        'w-full transition-all duration-700 px-6',
        scrolled ? 'py-4' : 'py-8'
      )}
    >
      <div 
        className={cn(
          'max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 px-8 py-3 rounded-[32px]',
          (scrolled || !isHomePage) ? 'glass-dark border border-white/10 shadow-2xl' : 'bg-transparent'
        )}
      >
        <Link to="/" className="flex items-center gap-3 group">
           <img src="/logo.png" className='xl:w-32 w-22 h-18 xl:h-26 scale-150 overflow-hidden' alt="" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.path)}
              className="text-white/60 hover:text-white font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
          <div className="h-4 w-px bg-white/10" />
          <Link
            to="/quote"
            className="group bg-brand-accent hover:bg-white text-white hover:text-brand-dark px-6 py-2.5 rounded-full font-display font-bold uppercase tracking-widest text-[10px] transition-all duration-500 shadow-lg flex items-center gap-2"
          >
            Get Estimate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-brand-dark flex flex-col p-8 pt-32 lg:hidden"
          >
            <button 
              className="absolute top-8 right-8 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={28} />
            </button>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="text-4xl font-display font-black text-white hover:text-brand-accent transition-colors flex items-center justify-between group"
                  >
                    <span className="uppercase tracking-tighter">{link.name}</span>
                    <span className="text-white/10 font-mono text-sm group-hover:text-brand-accent">0{i+1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-6">
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="w-full bg-brand-accent text-white py-4 rounded-[32px] font-display font-black uppercase tracking-widest text-xs text-center shadow-2xl"
              >
                Request Free Visit
              </Link>
              <div className="flex items-center justify-between p-6 glass rounded-[32px]">
                <div className="flex flex-col">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Speak Directly</span>
                  <span className="text-white font-display font-black text-lg">{BUSINESS_INFO.phone}</span>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-secondary">
                  <Phone size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
