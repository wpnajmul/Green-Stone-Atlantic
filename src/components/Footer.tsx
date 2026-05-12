import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-40 md:pb-12 overflow-hidden relative">
      {/* Visual Decoration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-primary opacity-5 rounded-full blur-[100px] -mr-24 -mb-24" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-2xl">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl tracking-tight leading-none uppercase">Green Stone</span>
                <span className="text-brand-secondary text-xs uppercase tracking-[0.2em] leading-none">Atlantic</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed font-sans mt-6">
              The premier choice for luxury landscaping and professional hardscaping in the Halifax Regional Municipality.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-brand-accent transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-lg font-display font-bold tracking-wider uppercase border-b border-white/10 pb-4">Services</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-white/60 hover:text-brand-secondary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-lg font-display font-bold tracking-wider uppercase border-b border-white/10 pb-4">Contact</h4>
            <ul className="space-y-6 font-sans">
              <li className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={18} className="text-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Call Us</p>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-white hover:text-brand-secondary transition-colors font-bold">
                    {BUSINESS_INFO.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail size={18} className="text-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Email Us</p>
                  <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-brand-secondary transition-colors font-bold">
                    {BUSINESS_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={18} className="text-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Visit Area</p>
                  <p className="text-white font-bold">{BUSINESS_INFO.location}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="space-y-8">
            <h4 className="text-lg font-display font-bold tracking-wider uppercase border-b border-white/10 pb-4">Schedule</h4>
            <div className="glass shadow-xl p-6 rounded-2xl border border-white/5">
              <ul className="space-y-3 font-sans text-sm">
                <li className="flex justify-between">
                  <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Mon - Fri</span>
                  <span className="font-bold">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Saturday</span>
                  <span className="font-bold">9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Sunday</span>
                  <span className="text-red-400 font-bold uppercase text-[10px] tracking-widest">Closed</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3 p-3 glass rounded-xl border border-white/10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/60">Now accepting Spring bookings</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs font-sans">
            © {new Date().getFullYear()} Green Stone Atlantic. All rights reserved. Precision Craftsmanship in NS.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-white/30">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
