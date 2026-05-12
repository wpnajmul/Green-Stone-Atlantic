import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import { Project } from '../types';

interface BeforeAfterCardProps {
  project: Project;
}

const BeforeAfterCard: React.FC<BeforeAfterCardProps> = ({ project }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.min(100, Math.max(0, position)));
  };

  return (
    <div className="flex flex-col gap-6">
      <div 
        className="relative aspect-[4/3] rounded-[32px] overflow-hidden cursor-ew-resize group shadow-2xl"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
      >
        {/* After Image */}
        <img 
          src={project.afterImage} 
          alt="After Landscaping"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Before Image (Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <img 
            src={project.beforeImage} 
            alt="Before Landscaping"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6 bg-brand-dark/60 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            Before
          </div>
        </div>
        
        {/* Labels Overlay */}
        <div className="absolute top-6 right-6 bg-brand-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
          After
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <MoveHorizontal size={20} className="text-brand-dark" />
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-display font-bold text-brand-dark">{project.title}</h4>
        <p className="text-gray-600 font-sans">{project.description}</p>
      </div>
    </div>
  );
};

export const BeforeAfter: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <section className="py-24 bg-brand-light" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-display font-bold tracking-widest uppercase mb-4 block">
              Proven Transformations
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6">
              See the Results for Yourself
            </h2>
            <p className="text-lg text-gray-600 font-sans">
              Interact with our transformation slider to see how we turn ordinary yards into extraordinary outdoor living spaces.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="hidden md:block"
          >
            <div className="px-6 py-3 border-2 border-brand-accent rounded-full text-brand-accent font-bold uppercase tracking-widest text-sm">
              Slide to Compare
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((project) => (
            <BeforeAfterCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
