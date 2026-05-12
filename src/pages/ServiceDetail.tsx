import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Clock, MapPin, Star, ChevronRight, Calculator, Plus } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '../constants';
import { QuoteForm } from '../components/QuoteForm';
import { SEO } from '../components/SEO';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-display font-bold mb-4">Service Not Found</h2>
          <Link to="/" className="text-brand-accent font-bold underline">Return Home</Link>
        </div>
      </div>
    );
  }

  const relatedServices = SERVICES.filter(s => s.id !== service.id).slice(0, 2);

  return (
    <div className="grain-overlay">
      <SEO 
        title={`${service.title} in Halifax | Green Stone Atlantic`}
        description={service.shortDescription}
      />

      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pb-24 md:pb-32 lg:pb-40">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-6 pt-56 sm:pt-64 md:pt-72 lg:pt-80">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-px w-12 bg-brand-secondary" />
              <span className="text-brand-secondary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
                Professional Halifax Landscaping
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-[7vw] font-display font-black text-white leading-tight sm:leading-[0.9] tracking-tighter uppercase mb-8">
              {service.title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 === 1 ? 'text-brand-accent' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-sans max-w-2xl leading-relaxed mb-10">
              {service.shortDescription}
            </p>
            <div className="flex flex-wrap gap-6">
              <a 
                href="#quote" 
                className="bg-brand-accent text-white px-10 py-5 rounded-full font-display font-black uppercase tracking-widest text-xs hover:bg-white hover:text-brand-dark transition-all shadow-2xl"
              >
                Instant Estimate
              </a>
              <div className="flex items-center gap-3 glass py-2 px-6 rounded-full border border-white/10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-brand-gold text-brand-gold" />)}
                </div>
                <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest leading-none">5.0 Halifax Rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local SEO & Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="heading-editorial text-5xl text-brand-dark mb-8">
                The Standard for <span className="text-brand-accent italic">Excellent</span> Lawn Care in NS
              </h2>
              <p className="text-lg text-gray-500 font-sans leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand-accent">
                      <CheckCircle2 size={18} />
                    </div>
                    <span className="font-display font-bold text-sm uppercase tracking-tight text-brand-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-dark p-12 rounded-[50px] text-white">
              <h3 className="text-2xl font-display font-black uppercase tracking-tighter mb-6">Service Benefits</h3>
              <ul className="space-y-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-brand-secondary font-display font-black text-xl italic">0{i+1}</span>
                    <span className="text-white/60 font-sans leading-snug">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Split */}
      <section className="py-32 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-brand-accent/60 font-display font-medium tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Commitment</span>
            <h2 className="heading-editorial text-5xl md:text-6xl text-brand-dark">Why Halifax Owners Trust Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: "Owner-Operated", desc: "No middleman. Every project is overseen by the owner for uncompromising quality." },
              { icon: MapPin, title: "Halifax Native", desc: "We know Nova Scotia soil, weather patterns, and local construction codes like no one else." },
              { icon: Clock, title: "Reliability First", desc: "We show up on time, every time. No ghosting. Just professional, scheduled service." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-12 rounded-[40px] border border-brand-secondary/10 group hover:shadow-2xl transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-brand-light flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-dark group-hover:text-white transition-all">
                  <ShieldCheck size={32} />
                </div>
                <h4 className="text-2xl font-display font-black uppercase tracking-tighter text-brand-dark mb-4">{item.title}</h4>
                <p className="text-gray-500 font-sans leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="heading-editorial text-5xl text-brand-dark mb-8">Our Proven Process</h2>
              <p className="text-gray-500 mb-10">We follow a strict set of standards to ensure every project meets the Green Stone Atlantic level of excellence.</p>
              <div className="p-8 rounded-[30px] border-2 border-dashed border-gray-100 flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-brand-accent">
                  <Calculator size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Pricing Policy</p>
                  <p className="text-brand-dark font-display font-black text-lg">No Hidden Costs</p>
                </div>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-4">
              {service.process.map((p, i) => (
                <div key={i} className="group bg-brand-light rounded-[30px] p-10 flex flex-col md:flex-row gap-8 items-center transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-brand-secondary/10">
                  <span className="text-6xl font-display font-black text-brand-accent/20 group-hover:text-brand-accent transition-colors leading-none italic">
                    {i+1}
                  </span>
                  <div>
                    <h4 className="text-2xl font-display font-black uppercase text-brand-dark mb-2 tracking-tighter">{p.step}</h4>
                    <p className="text-gray-600 font-sans max-w-md">{p.description}</p>
                  </div>
                  <Plus className="ml-auto text-gray-300 group-hover:text-brand-accent transition-all group-hover:rotate-45" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-dark overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="heading-editorial text-5xl text-white">Halifax Voice</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="glass p-10 rounded-[40px] border border-white/5">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />)}
                </div>
                <p className="text-white italic text-lg leading-relaxed mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center text-white font-display font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="text-white font-display font-bold leading-none">{t.name}</h5>
                    <p className="text-white/40 text-xs uppercase font-bold tracking-widest mt-1">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-brand-light">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="heading-editorial text-5xl text-brand-dark">Service FAQs</h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-[24px] p-8 border border-brand-secondary/10">
                <h4 className="text-xl font-display font-black uppercase tracking-tighter text-brand-dark mb-4">{faq.question}</h4>
                <p className="text-gray-500 leading-relaxed italic border-l-2 border-brand-accent pl-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Integration */}
      <section className="py-32 bg-white" id="quote">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 px-6">
            <h2 className="heading-editorial text-5xl text-brand-dark text-center">Instant {service.title} Quote</h2>
            <p className="text-gray-400 mt-4 text-center max-w-md">Complete the multi-step request below. We usually respond within 2 hours during Atlantic business hours.</p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-32 bg-brand-dark border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="heading-editorial text-4xl text-white mb-16">Other Premium Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relatedServices.map((rs, i) => (
              <Link 
                key={i} 
                to={`/services/${rs.slug}`}
                className="group relative h-96 rounded-[50px] overflow-hidden"
              >
                <img src={rs.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-dark/60 group-hover:bg-brand-dark/40 transition-colors" />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <h4 className="text-4xl font-display font-black text-white uppercase tracking-tighter mb-4">{rs.title}</h4>
                  <div className="flex items-center gap-3 text-brand-secondary font-display font-bold uppercase tracking-widest text-[10px]">
                    Learn More <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
