import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-44 pb-40 md:pb-24 bg-brand-light min-h-screen">
      <Helmet>
        <title>Terms of Service | Green Stone Atlantic</title>
        <meta name="description" content="Terms of Service for Green Stone Atlantic Landscaping Halifax" />
      </Helmet>

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-display font-black text-brand-dark mb-4 uppercase tracking-tighter">
            Terms of <span className="text-brand-secondary">Service</span>
          </h1>
          <p className="text-brand-dark/40 font-display font-bold uppercase tracking-[0.3em] text-xs mb-8">
            Last Updated: May 12, 2026
          </p>

          <div className="prose prose-brand max-w-none space-y-8 font-sans text-brand-dark/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Green Stone Atlantic website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">2. Services Description</h2>
              <p>
                Green Stone Atlantic provides professional landscaping, hardscaping, and garden maintenance services. Our website provides information about these services and allows users to request quotes. Any quoted prices are subject to on-site assessment and formal contract agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">3. Quotations and Estimations</h2>
              <p>
                All estimates provided through the website are preliminary. A final binding contract will only be established after a physical site visit and the signing of a formal project proposal.
              </p>
            </section>

            <section>
              <h2 className="text-20 font-display font-black text-brand-dark uppercase tracking-tight mb-4 text-2xl">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images (especially project portfolio photos), is the property of Green Stone Atlantic and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">5. Limitation of Liability</h2>
              <p>
                Green Stone Atlantic shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the website or any information provided herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">6. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of the Province of Nova Scotia, Canada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">7. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us:
              </p>
              <div className="mt-4 p-6 bg-white rounded-2xl border border-brand-dark/5">
                <p className="font-bold text-brand-dark">{BUSINESS_INFO.name}</p>
                <p>Email: {BUSINESS_INFO.email}</p>
                <p>Phone: {BUSINESS_INFO.phone}</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
