import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Phone, MessageSquare, ArrowUp, Calendar, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export const Layout: React.FC = () => {
  const { pathname, hash } = useLocation();
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  React.useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-brand-light font-sans selection:bg-brand-accent selection:text-white">
      {/* Header Container */}
      <header className="fixed top-0 w-full z-50">
        {/* Top Promotional Bar */}
        <div className="bg-brand-dark text-white/60 py-3 text-center border-b border-white/5">
          <p className="text-[10px] font-display font-bold uppercase tracking-[0.4em]">
            Spring 2026: <span className="text-brand-secondary">15% Discount</span> on Early Season Garden Cleanup • <Link to="/quote" className="text-white hover:text-brand-accent underline underline-offset-4 transition-colors">Claim Now</Link>
          </p>
        </div>
        <Navbar />
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Floating Actions */}
      <div className="fixed bottom-12 right-8 z-[100] flex flex-col gap-4">
        {/* Scroll Top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="w-14 h-14 bg-white text-brand-dark rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-accent hover:text-white transition-all border border-gray-100 group"
            >
              <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Integration */}
        <motion.a
          whileHover={{ scale: 1.1, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          href={`https://wa.me/${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center transition-all group overflow-hidden"
        >
          <MessageSquare size={24} />
          <span className="absolute right-full mr-4 bg-white text-[#25D366] text-[10px] uppercase font-black tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-gray-100">
            WhatsApp Us
          </span>
        </motion.a>

        {/* Floating Quote Request */}
        <Link to="/quote">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-brand-accent text-white rounded-full shadow-[0_20px_50px_(139,115,91,0.4)] flex items-center justify-center relative group"
          >
            <Calendar size={24} />
            <span className="absolute right-full mr-4 bg-brand-dark text-white text-[10px] uppercase font-black tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl border border-white/10">
              Free Estimate
            </span>
          </motion.div>
        </Link>
      </div>

      {/* Mobile Sticky Bar - High Conversion */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-[110] bg-white border-t border-gray-100 p-3 pb-6 flex gap-2 shadow-[0_-15px_40px_rgba(0,0,0,0.08)]">
        <a 
          href={`tel:${BUSINESS_INFO.phone}`}
          className="flex-1 bg-brand-dark text-white py-3.5 rounded-[18px] flex items-center justify-center gap-2 font-display font-black uppercase tracking-widest text-[9px] shadow-xl active:scale-95 transition-transform"
        >
          <Phone size={14} className="text-brand-secondary" />
          Call Now
        </a>
        <Link 
          to="/quote"
          className="flex-[1.2] bg-brand-accent text-white py-3.5 rounded-[18px] flex items-center justify-center gap-2 font-display font-black uppercase tracking-widest text-[9px] shadow-[0_15px_30px_rgba(139,115,91,0.2)] active:scale-95 transition-transform"
        >
          <Calendar size={14} />
          Request Visit
        </Link>
      </div>
    </div>
  );
};
