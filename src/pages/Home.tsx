import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { ServiceCard } from '../components/ServiceCard';
import { BeforeAfter } from '../components/BeforeAfter';
import { Testimonials } from '../components/Testimonials';
import { QuoteForm } from '../components/QuoteForm';
import { SEO } from '../components/SEO';
import { SERVICES, PROJECTS } from '../constants';

const RevealHeader: React.FC<{ subtitle: string; title: string; light?: boolean }> = ({ subtitle, title, light }) => (
  <div className="flex flex-col mb-20">
    <motion.span 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={light ? "text-brand-secondary/60 font-display font-medium tracking-[0.4em] uppercase text-[10px] mb-4" : "text-brand-accent/60 font-display font-medium tracking-[0.4em] uppercase text-[10px] mb-4"}
    >
      {subtitle}
    </motion.span>
    <div className="overflow-hidden">
      <motion.h2 
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        className={light ? "heading-editorial text-5xl md:text-[6vw] text-white" : "heading-editorial text-5xl md:text-[6vw] text-brand-dark"}
      >
        {title}
      </motion.h2>
    </div>
  </div>
);

export const Home: React.FC = () => {
  return (
    <div className="grain-overlay">
      <SEO 
        title="Halifax Premium Landscaping & Hardscaping"
        description="Green Stone Atlantic is Halifax's premier landscaping company. Specializing in paver patios, retaining walls, lawn mowing, and garden design in Nova Scotia."
      />
      <Hero />
      <Stats />
      
      {/* Services Grid */}
      <section className="py-32 bg-white" id="services">
        <div className="container mx-auto px-6">
          <RevealHeader 
            subtitle="Masterful Craft" 
            title="Premium Services" 
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Ultra Modern Split */}
      <section className="bg-brand-dark py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 1.1, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.2, 1, 0.3, 1] }}
                className="aspect-[4/5] rounded-[60px] overflow-hidden"
              >
                <img 
                  src="/images/retaining_wall_modern_1778526590652.png" 
                  alt="Landscaping Excellence" 
                  className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              <div className="absolute -bottom-12 -right-12 p-12 glass shadow-2xl rounded-[40px] max-w-sm hidden md:block">
                <p className="text-white font-display text-2xl font-black italic tracking-tighter mb-4">
                  "Architecture is nature's partner."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-px bg-brand-secondary" />
                  <span className="text-brand-secondary font-display font-medium text-[10px] uppercase tracking-widest">
                    Green Stone Philosophy
                  </span>
                </div>
              </div>
            </div>

            <div>
              <RevealHeader 
                subtitle="The Difference" 
                title="Built To Last" 
                light 
              />
              
              <div className="space-y-12">
                {[
                  { 
                    icon: ShieldCheck, 
                    title: 'Precision Hardscaping', 
                    desc: 'Every stone is leveled to 1/8th of an inch. We engineer for the harsh Atlantic freeze-thaw cycles.' 
                  },
                  { 
                    icon: MapPin, 
                    title: 'HRM Dedicated', 
                    desc: 'Based in Halifax. We know the local grades, the specific soil types of Bedford, and the coastal requirements of Dartmouth.' 
                  },
                  { 
                    icon: Clock, 
                    title: 'Punctual Precision', 
                    desc: 'High-end service requires high-end communication. We respect your property and your time.' 
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.8 }}
                    className="flex gap-8 group"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-bold text-white mb-3 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-white/40 font-sans leading-relaxed text-sm max-w-md">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <BeforeAfter projects={PROJECTS} />
      </section>

      {/* Financing & Promo Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-dark p-12 rounded-[50px] text-white flex flex-col justify-between"
            >
              <div>
                <span className="text-brand-secondary font-display font-medium tracking-[0.4em] uppercase text-[10px] mb-6 block">Limited Time Offer</span>
                <h3 className="heading-editorial text-4xl mb-6">Spring Cleanup <br /> <span className="text-brand-accent">15% Off</span></h3>
                <p className="text-white/40 font-sans max-w-sm mb-10">Prepare your property for the Nova Scotia summer. Book any full garden cleanup before June 1st and save instantly.</p>
              </div>
              <Link to="/quote" className="inline-flex items-center gap-4 text-brand-secondary font-display font-bold uppercase tracking-widest text-xs group">
                Claim Discount <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-light p-12 rounded-[50px] border border-brand-secondary/10 flex flex-col justify-between"
            >
              <div>
                <span className="text-brand-accent font-display font-medium tracking-[0.4em] uppercase text-[10px] mb-6 block">Flexible Payments</span>
                <h3 className="heading-editorial text-4xl text-brand-dark mb-6">Major Projects <br /> <span className="italic">Financed</span></h3>
                <p className="text-gray-500 font-sans max-w-sm mb-10">Don't wait for your dream patio. We offer flexible payment plans for projects over $5,000. Build now, pay later.</p>
              </div>
              <Link to="/quote" className="inline-flex items-center gap-4 text-brand-dark font-display font-bold uppercase tracking-widest text-xs group">
                Check Eligibility <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="reviews">
        <Testimonials />
      </section>

      {/* Modern Quote Section */}
      <section className="py-32 bg-white" id="quote">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <RevealHeader 
              subtitle="Get Started" 
              title="Request Estimate" 
            />
            <p className="text-xl text-gray-500 font-sans max-w-2xl -mt-10">
              Your property is an asset. Let's maximize its value and your enjoyment of it.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Ultra Modern Footer Map Integration */}
      <section className="h-[600px] w-full bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 grayscale invert brightness-50">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181464.39803138377!2d-63.7431525!3d44.7049449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a2f1a66699197%3A0x286395fb2a06ede6!2sHalifax%2C%20NS!5e0!3m2!1sen!2sca!4v1715421500000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40" />
        
        <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-dark p-12 rounded-[50px] border border-white/10 max-w-xl text-center pointer-events-auto"
          >
            <h3 className="heading-editorial text-4xl text-white mb-6">Serving All HRM</h3>
            <p className="text-white/60 mb-8 font-sans">From Peggys Cove to Bedford and everywhere in between. Our local roots run deep across Nova Scotia.</p>
            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-brand-accent font-display font-black text-3xl">902</span>
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Regional</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col items-center">
                <span className="text-brand-accent font-display font-black text-3xl">Nova</span>
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">Provincial</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
