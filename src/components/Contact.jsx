import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      // Reset success status after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="bg-glow-sphere bottom-0 right-1/4 bg-cloudBlue/10 dark:bg-cloudBlue/5" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white mb-2"
          >
            Get In Touch
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cloudBlue to-orangeAccent mx-auto rounded-full" />
        </div>

        {/* Contact Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Details Column */}
          <div className="lg:col-span-5 text-left flex flex-col gap-6">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-white mb-2">
              Let's talk about cloud architecture, scripts, or opportunities!
            </h3>
            
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am open to engineering internships, junior DevOps positions, and collaborative open-source projects. Drop a message or reach out on socials.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/20 dark:border-white/5">
                <div className="p-3 bg-cloudBlue/10 text-cloudBlue rounded-xl">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400">Email Me</h4>
                  <a href="mailto:jatin.sapkal@example.com" className="text-sm sm:text-base font-bold text-slate-800 dark:text-white hover:underline">
                    jatin.sapkal@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/20 dark:border-white/5">
                <div className="p-3 bg-orangeAccent/10 text-orangeAccent rounded-xl">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400">Location</h4>
                  <span className="text-sm sm:text-base font-bold text-slate-800 dark:text-white">
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/jatin-sapkal-4b96a5294/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-cloudBlue dark:hover:text-cloudBlue border-slate-200/50 dark:border-white/5 hover:-translate-y-1 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
              <a
                href="https://github.com/JatinSapkal24"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-orangeAccent dark:hover:text-orangeAccent border-slate-200/50 dark:border-white/5 hover:-translate-y-1 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 w-full">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl glass-card border-slate-200/50 dark:border-white/5 shadow-xl flex flex-col gap-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col text-left gap-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white outline-none focus:border-cloudBlue dark:focus:border-cloudBlue transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div className="flex flex-col text-left gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white outline-none focus:border-cloudBlue dark:focus:border-cloudBlue transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col text-left gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleInputChange}
                  className="w-full bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 rounded-xl px-4 py-3 text-sm text-slate-800 dark:text-white outline-none focus:border-cloudBlue dark:focus:border-cloudBlue transition-colors duration-200 resize-none"
                  placeholder="Hey Jatin, let's connect..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 bg-cloudBlue hover:bg-cloudBlue/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-cloudBlue/10 hover:shadow-cloudBlue/20 disabled:opacity-75 transition-all duration-200 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : isSuccess ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>
                    <FiSend size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
