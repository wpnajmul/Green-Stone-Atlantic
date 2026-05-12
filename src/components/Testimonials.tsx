import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative" id="reviews">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote className="absolute top-20 left-20 w-80 h-80 rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-brand-secondary font-display font-bold tracking-widest uppercase mb-4">
            Voice of the Locals
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Trusted by Hundreds in Halifax
          </h2>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-brand-secondary text-brand-secondary" />
            ))}
            <span className="text-white/80 font-sans ml-2">(4.9/5 based on 200+ reviews)</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass p-12 md:p-16 rounded-[40px] border border-white/10"
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-xl md:text-2xl text-white italic font-sans mb-10 leading-relaxed">
                  "{TESTIMONIALS[current].content}"
                </p>
                <div>
                  <h4 className="text-white font-display font-bold text-xl">{TESTIMONIALS[current].name}</h4>
                  <p className="text-brand-secondary uppercase tracking-widest text-xs font-semibold">
                    {TESTIMONIALS[current].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 rounded-full bg-brand-accent flex items-center justify-center text-white hover:bg-brand-secondary transition-colors"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
