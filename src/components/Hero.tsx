import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grainy-bg pb-24 md:pb-32 lg:pb-40">
      {/* Immersive Background */}
      <motion.div 
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.2, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/landscaping_hero_halifax_1778526554361.png" 
          alt="Luxury Landscaping Halifax"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent opacity-80" />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-48 sm:pt-56 md:pt-64 lg:pt-72">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-brand-secondary/50" />
              <span className="text-brand-secondary font-display font-medium tracking-[0.3em] uppercase text-xs">
                Est. Halifax, Nova Scotia
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-[8vw] lg:text-[10vw] font-display font-black text-white leading-tight sm:leading-[0.85] tracking-[-0.05em] uppercase mb-12">
              <span>Modern</span> <br />
              <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>Outdoors</span> <br />
              <span className="text-brand-accent">Atlantic</span>
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-end">
              <div>
                <p className="text-lg md:text-xl text-white/70 font-sans leading-relaxed mb-10 max-w-sm">
                  We bridge the gap between nature and architecture. Specialized in high-end masonry and sustainable landscape design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/quote"
                    className="group relative bg-brand-accent hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-display font-black uppercase tracking-widest text-xs transition-all duration-500 flex items-center justify-center gap-3 overflow-hidden shadow-[0_20px_50px_rgba(139,115,91,0.1)]"
                  >
                    <span>Request Visit</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:flex flex-col items-start lg:items-end">
                <div className="glass-dark p-8 rounded-[40px] border border-white/10 max-w-xs animate-float">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                  <p className="text-white font-display text-lg font-bold mb-2 leading-tight">
                    "The standard for luxury landscaping in NS."
                  </p>
                  <p className="text-white/40 text-xs uppercase tracking-widest font-bold">
                    Bedford Resident
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Label */}
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="text-white/20 font-display font-medium tracking-[1em] uppercase text-[10px]">
          Precision • Craft • Heritage
        </span>
      </div>
    </section>
  );
};
