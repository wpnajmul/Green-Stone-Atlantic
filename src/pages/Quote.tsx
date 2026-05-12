import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { SEO } from '../components/SEO';
import { QuoteForm } from '../components/QuoteForm';
import { BUSINESS_INFO } from '../constants';

export const Quote: React.FC = () => {
  return (
    <>
      <SEO 
        title="Get a Free Quote | Halifax Landscaping"
        description="Request a free landscaping or hardscaping estimate from Green Stone Atlantic. We provide expert advice and transparent pricing in Halifax, Nova Scotia."
      />
      
      <div className="pt-56 sm:pt-64 md:pt-72 lg:pt-80 pb-24 sm:pb-32 bg-brand-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-accent font-display font-bold tracking-widest uppercase mb-4 block">The First Step</span>
              <h1 className="text-3xl sm:text-6xl font-display font-bold text-brand-dark mb-8">
                Request Your Free <br />
                <span className="text-brand-accent italic">On-Site Estimate</span>
              </h1>
              <p className="text-xl text-gray-600 font-sans leading-relaxed">
                Tell us about your outdoor vision. Our experts will assess your property and provide a detailed, itemized quote for your project.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <QuoteForm />
              </motion.div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              {/* Trust Card */}
              <div className="bg-brand-dark rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent opacity-10 -mr-12 -mt-12 rounded-full" />
                <h4 className="text-xl font-display font-bold mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-brand-secondary" /> 
                  Why Choose Us?
                </h4>
                <ul className="space-y-6 font-sans text-sm">
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-secondary">
                      <Clock size={16} />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Fast Response</p>
                      <p className="text-white/60">Quotes usually delivered within 48 hours of site visit.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-secondary">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <p className="font-bold mb-1">HRM Expertise</p>
                      <p className="text-white/60">We know Halifax soil, grades, and weather requirements.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-secondary">
                      <Phone size={16} />
                    </div>
                    <div>
                      <p className="font-bold mb-1">Personal Service</p>
                      <p className="text-white/60">No automated bots. You speak directly with our landscaping lead.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Direct Info */}
              <div className="px-8 space-y-6">
                <h4 className="text-xl font-display font-bold text-brand-dark">Prefer to Call?</h4>
                <p className="text-gray-600 font-sans text-sm">Our office is open Monday through Friday for immediate consultation bookings.</p>
                
                <div className="space-y-4">
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <span className="text-lg font-display font-bold text-brand-dark transition-colors group-hover:text-brand-accent">{BUSINESS_INFO.phone}</span>
                  </a>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <span className="text-lg font-display font-bold text-brand-dark transition-colors group-hover:text-brand-accent">{BUSINESS_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
