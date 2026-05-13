import React from 'react';
import { motion } from 'motion/react';

export const Stats: React.FC = () => {
  const stats = [
    { label: 'Star Rating', value: '5/5' },
    { label: 'projects completed', value: '50+' },
    { label: 'Consultation & Estimates', value: 'Free' },
    
    { label: 'Locally owned', value: 'Halifax' },
  ];

  return (
    <div className="py-12 bg-brand-light">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
              className="bg-white p-10 rounded-[32px] border border-brand-secondary/10 flex flex-col items-center text-center group hover:bg-brand-dark transition-colors duration-500"
            >
              <span className="text-5xl md:text-6xl font-display font-black tracking-tighter text-brand-dark group-hover:text-white transition-colors mb-2">
                {stat.value}
              </span>
              <span className="text-brand-accent font-display font-bold uppercase tracking-widest text-[10px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
