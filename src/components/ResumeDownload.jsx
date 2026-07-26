import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';

export default function ResumeDownload() {
  return (
    <section id="resume-download" className="py-24 relative overflow-hidden px-6 bg-slate-900/10 dark:bg-slate-950/20">
      {/* Background glow */}
      <div className="bg-glow-sphere bottom-10 left-10 bg-orangeAccent/10 dark:bg-orangeAccent/5" />

      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 sm:p-12 rounded-3xl glass-card border-slate-200/50 dark:border-white/5 shadow-2xl relative overflow-hidden"
        >
          {/* Inner decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10 text-left">
            <div className="flex items-start gap-4">
              {/* Document Icon */}
              <div className="p-4 bg-cloudBlue/10 text-cloudBlue rounded-2xl hidden sm:block shrink-0">
                <FiFileText size={36} />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-sans text-slate-900 dark:text-white mb-2">
                  Looking for the complete profile?
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                  Download my full resume to review my academic history, cloud projects, script examples, and developer certifications.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#"
              download="Jatin_Sapkal_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cloudBlue to-orangeAccent hover:from-cloudBlue/95 hover:to-orangeAccent/95 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-cloudBlue/10 hover:shadow-cloudBlue/20 transition-all duration-200 shrink-0 cursor-pointer text-center w-full md:w-auto justify-center"
            >
              <FiDownload size={20} />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
