import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
      className="group relative bg-white h-[500px] rounded-[40px] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]"
    >
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent transition-opacity group-hover:opacity-80" />
      </div>
      
      <div className="absolute inset-0 p-10 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-2">
        <span className="text-brand-secondary font-display font-medium tracking-[0.2em] text-[10px] uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          Professional Care
        </span>
        <h3 className="text-3xl font-display font-black text-white uppercase tracking-tighter leading-none mb-6">
          {service.title.split(' ').map((word, i) => (
            <React.Fragment key={i}>
              {word} <br />
            </React.Fragment>
          ))}
        </h3>
        
        <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
          <p className="text-white/60 font-sans text-sm mb-8 leading-relaxed max-w-[240px]">
            {service.shortDescription}
          </p>
        </div>

        <Link
          to={`/services/${service.slug}`}
          className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-brand-dark transition-all duration-500 hover:bg-brand-accent hover:text-white"
        >
          <ArrowUpRight size={24} />
        </Link>
      </div>

      <div className="absolute top-8 right-8 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/40 text-xs font-bold font-display">
        0{index + 1}
      </div>
    </motion.div>
  );
};
