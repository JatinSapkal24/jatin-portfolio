import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaCloud, FaServer, FaCogs } from 'react-icons/fa';

const roles = [
  "Aspiring Cloud & DevOps Engineer",
  "Linux Enthusiast",
  "Computer Engineering Student"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 px-6"
    >
      {/* Dynamic Glowing Mesh Elements */}
      <div className="bg-glow-sphere -top-10 -left-10 bg-cloudBlue/20 dark:bg-cloudBlue/10 animate-pulse-slow" />
      <div className="bg-glow-sphere bottom-10 right-10 bg-orangeAccent/20 dark:bg-orangeAccent/10 animate-pulse-slow" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e908_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e908_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Hero Left Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-cloudBlue/20 dark:border-white/5 mb-6 text-sm font-semibold text-cloudBlue dark:text-cloudBlue"
          >
            <span className="w-2 h-2 rounded-full bg-cloudBlue animate-ping" />
            <span>Available for Internships & Projects</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-slate-900 dark:text-white leading-tight mb-4"
          >
            Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-cloudBlue to-orangeAccent">Jatin Sapkal</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-12 sm:h-16 flex items-center mb-6"
          >
            <span className="text-xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300 cursor-blink">
              {currentText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-xl leading-relaxed"
          >
            Passionate about building highly available, scalable infrastructure, automation scripts, and self-healing microservice configurations. Combining computer engineering fundamentals with practical DevOps skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center justify-center gap-2 bg-cloudBlue hover:bg-cloudBlue/90 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-cloudBlue/20 hover:shadow-cloudBlue/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>View Projects</span>
              <FiArrowRight size={18} />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center justify-center gap-2 glass-card hover:bg-slate-200/50 dark:hover:bg-slate-900/50 text-slate-800 dark:text-slate-200 font-semibold px-6 py-3.5 rounded-2xl border-slate-200/60 dark:border-white/10 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Contact Me</span>
            </button>
          </motion.div>
        </div>

        {/* Hero Right Visuals */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative w-72 h-72 sm:w-96 sm:h-96"
          >
            {/* Outer rotating glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cloudBlue to-orangeAccent rounded-full filter blur-2xl opacity-20 dark:opacity-30 animate-pulse-slow" />
            
            {/* Glassmorphic dashboard container */}
            <div className="absolute inset-0 rounded-full glass-card border-white/10 flex items-center justify-center overflow-hidden">
              
              {/* Floating Cloud/DevOps visual widgets */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/4 p-4 rounded-2xl glass-card border-cloudBlue/30 text-cloudBlue"
              >
                <FaCloud size={36} />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute bottom-1/4 right-1/4 p-4 rounded-2xl glass-card border-orangeAccent/30 text-orangeAccent"
              >
                <FaCogs size={36} />
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="p-6 rounded-3xl bg-slate-950/80 dark:bg-slate-900/80 border border-white/10 shadow-2xl flex flex-col items-center justify-center gap-3"
              >
                <FaServer className="text-white animate-pulse" size={48} />
                <span className="text-sm font-mono text-slate-300">k8s-cluster: active</span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                  99.98% uptime
                </span>
              </motion.div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
