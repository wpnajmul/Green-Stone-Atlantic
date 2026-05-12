import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-44 pb-40 md:pb-24 bg-brand-light min-h-screen">
      <Helmet>
        <title>Privacy Policy | Green Stone Atlantic</title>
        <meta name="description" content="Privacy Policy for Green Stone Atlantic Landscaping Halifax" />
      </Helmet>

      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-display font-black text-brand-dark mb-4 uppercase tracking-tighter">
            Privacy <span className="text-brand-primary">Policy</span>
          </h1>
          <p className="text-brand-dark/40 font-display font-bold uppercase tracking-[0.3em] text-xs mb-8">
            Effective Date: May 12, 2026
          </p>

          <div className="prose prose-brand max-w-none space-y-8 font-sans text-brand-dark/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">1. Introduction</h2>
              <p>
                At Green Stone Atlantic, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">2. Information We Collect</h2>
              <p>We collect several types of information from and about users of our website, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Personal identification information (Name, email address, phone number, etc.)</li>
                <li>Property details for landscaping assessments</li>
                <li>Information about your internet connection and the equipment you use to access our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">3. How We Use Your Information</h2>
              <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">4. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. The safety and security of your information also depends on you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-black text-brand-dark uppercase tracking-tight mb-4">5. Contact Information</h2>
              <p>
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
              </p>
              <div className="mt-4 p-6 bg-white rounded-2xl border border-brand-dark/5">
                <p className="font-bold text-brand-dark">{BUSINESS_INFO.name}</p>
                <p>Email: {BUSINESS_INFO.email}</p>
                <p>Phone: {BUSINESS_INFO.phone}</p>
                <p>Location: {BUSINESS_INFO.location}</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
