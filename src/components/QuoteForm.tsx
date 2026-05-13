import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Upload, CheckCircle2, ChevronRight, ChevronLeft, Calendar as CalendarIcon, MapPin, DollarSign, MessageCircle } from 'lucide-react';
import { SERVICES } from '../constants';
import { cn } from '../lib/utils';

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  address: z.string().min(5, 'Property address is required'),
  serviceId: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please select a date'),
  // budgetRange: z.string().min(1, 'Please select a budget'),
  description: z.string().min(10, 'Please provide more project details'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export const QuoteForm: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const [step, setStep] = React.useState(1);
  const [submitted, setSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    // defaultValues: {
    //   budgetRange: '$1k - $5k',
    // }
  });

  const nextStep = async () => {
    let fieldsToValidate: (keyof QuoteFormData)[] = [];
    if (step === 1) fieldsToValidate = ['serviceId'];
    if (step === 2) fieldsToValidate = ['address', 'preferredDate',  'description'];
    
    const isValid = await trigger(fieldsToValidate);
    if (isValid) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const onSubmit = async (data: QuoteFormData) => {
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send lead');
      }

      setSubmitted(true);
      
      const history = JSON.parse(localStorage.getItem('quote_history') || '[]');
      localStorage.setItem('quote_history', JSON.stringify([...history, { ...data, date: new Date().toISOString() }]));
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error sending your request. Please try again or call us directly.');
    }
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[48px] p-16 text-center shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-brand-secondary/10"
      >
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg shadow-green-500/20">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h3 className="heading-editorial text-4xl text-brand-dark mb-6">Inquiry Sent!</h3>
        <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
          One of our Halifax specialists will review your project and contact you within 24 hours at your provided number.
        </p>
        <button 
          onClick={() => { setSubmitted(false); setStep(1); }}
          className="bg-brand-dark text-white px-10 py-5 rounded-full font-display font-black uppercase tracking-widest text-xs hover:bg-brand-accent transition-all"
        >
          Send Another Request
        </button>
      </motion.div>
    );
  }

  const selectedServiceId = watch('serviceId');

  return (
    <div className={cn("relative", compact ? "" : "max-w-4xl mx-auto")}>
      {/* Progress Dots */}
      <div className="flex justify-center gap-4 mb-12">
        {[1, 2, 3].map((s) => (
          <div 
            key={s} 
            className={cn(
              "h-1.5 transition-all duration-500 rounded-full",
              step === s ? "w-12 bg-brand-accent" : "w-4 bg-gray-200"
            )}
          />
        ))}
      </div>

      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-[48px] p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-50 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className="text-center md:text-left mb-10">
                <span className="text-brand-accent font-display font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Stage 01</span>
                <h3 className="heading-editorial text-4xl text-brand-dark">Select Your Service</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {SERVICES.map((s) => (
                  <label key={s.id} className="relative cursor-pointer group">
                    <input
                      type="radio"
                      value={s.id}
                      {...register('serviceId')}
                      className="peer sr-only"
                    />
                    <div className="h-full flex flex-col items-center justify-center p-6 rounded-3xl border-2 border-gray-100 peer-checked:border-brand-accent peer-checked:bg-brand-accent/5 transition-all group-hover:bg-gray-50">
                      <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-4 transition-colors group-hover:border-brand-accent/30 group-hover:bg-white">
                        <CheckCircle2 size={24} className="text-gray-200 peer-checked:text-brand-accent transition-colors" />
                      </div>
                      <span className="text-xs font-display font-black uppercase text-center tracking-tighter text-brand-dark leading-tight">{s.title}</span>
                    </div>
                  </label>
                ))}
              </div>
              {errors.serviceId && <p className="text-red-500 text-xs font-bold text-center">{errors.serviceId.message}</p>}
              
              <div className="flex justify-end pt-10">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!selectedServiceId}
                  className="bg-brand-dark hover:bg-brand-accent text-white px-8 py-4 rounded-full font-display font-black uppercase tracking-widest text-xs flex items-center gap-4 transition-all disabled:opacity-30"
                >
                  Project Details <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center md:text-left">
                <span className="text-brand-accent font-display font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Stage 02</span>
                <h3 className="heading-editorial text-4xl text-brand-dark">Project Scope</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={14} className="text-brand-accent" />
                    <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest">Property Address</label>
                  </div>
                  <input
                    {...register('address')}
                    placeholder="Halifax street address..."
                    className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-accent transition-all outline-none"
                  />
                  {errors.address && <p className="text-red-500 text-[10px] font-bold">{errors.address.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-2">
                    <CalendarIcon size={14} className="text-brand-accent" />
                    <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest">Preferred Date</label>
                  </div>
                  <input
                    type="date"
                    {...register('preferredDate')}
                    className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-accent transition-all outline-none"
                  />
                  {errors.preferredDate && <p className="text-red-500 text-[10px] font-bold">{errors.preferredDate.message}</p>}
                </div>
              </div>

              {/* <div className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={14} className="text-brand-accent" />
                  <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest">Expected Budget</label>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {['< $1k', '$1k - $5k', '$5k - $15k', '$15k+'].map((range) => (
                    <label key={range} className="cursor-pointer group">
                      <input type="radio" value={range} {...register('budgetRange')} className="peer sr-only" />
                      <div className="text-center py-4 rounded-xl border border-gray-100 peer-checked:bg-white peer-checked:border-brand-accent peer-checked:shadow-xl transition-all text-xs font-black uppercase text-gray-400 peer-checked:text-brand-dark">
                        {range}
                      </div>
                    </label>
                  ))}
                </div>
              </div> */}

              <div className="space-y-2">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle size={14} className="text-brand-accent" />
                  <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest">Project Vision</label>
                </div>
                <textarea
                  {...register('description')}
                  rows={4}
                  placeholder="Describe the transformation you are looking for..."
                  className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-accent transition-all outline-none resize-none"
                />
                {errors.description && <p className="text-red-500 text-[10px] font-bold">{errors.description.message}</p>}
              </div>

              <div className="flex items-center justify-between pt-6">
                <button type="button" onClick={prevStep} className="text-brand-dark font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <ChevronLeft size={18} /> Back
                </button>
                <button type="button" onClick={nextStep} className="bg-brand-dark hover:bg-brand-accent text-white px-8 py-4 rounded-full font-display font-black uppercase tracking-widest text-xs flex items-center gap-4 transition-all">
                  Next Step <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-10"
            >
              <div className="text-center md:text-left">
                <span className="text-brand-accent font-display font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Stage 03</span>
                <h3 className="heading-editorial text-4xl text-brand-dark">Contact Information</h3>
              </div>
              
              <div className="grid md:grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest">Full Name</label>
                  <input
                    {...register('fullName')}
                    placeholder="Enter your name"
                    className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-accent transition-all outline-none"
                  />
                  {errors.fullName && <p className="text-red-500 text-[10px] font-bold">{errors.fullName.message}</p>}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest">Phone Number</label>
                    <input
                      {...register('phone')}
                      placeholder="902-XXX-XXXX"
                      className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-accent transition-all outline-none"
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] font-bold">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-brand-dark uppercase tracking-widest">Email Address</label>
                    <input
                      {...register('email')}
                      placeholder="you@example.com"
                      className="w-full px-6 py-5 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-brand-accent transition-all outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-bold">{errors.email.message}</p>}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
                <div className="flex-1">
                  <div className="w-full h-[120px] rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center group hover:border-brand-accent transition-colors relative cursor-pointer overflow-hidden">
                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" multiple accept="image/*" />
                    <Upload size={24} className="text-gray-400 group-hover:text-brand-accent transition-colors mb-2" />
                    <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-brand-accent">Add Project Photos</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button type="button" onClick={prevStep} className="text-brand-dark font-black text-xs uppercase tracking-widest flex items-center gap-2">
                  <ChevronLeft size={18} /> Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-brand-accent hover:bg-brand-dark text-white px-8 py-4 rounded-full font-display font-black uppercase tracking-widest text-xs flex items-center gap-4 transition-all shadow-xl shadow-brand-accent/30"
                >
                  {isSubmitting ? 'Finalizing...' : 'Request Inspection'}
                  <Send size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};
