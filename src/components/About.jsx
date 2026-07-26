import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaAward } from 'react-icons/fa';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="bg-glow-sphere top-1/3 -right-20 bg-cloudBlue/10 dark:bg-cloudBlue/5" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white mb-2"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cloudBlue to-orangeAccent mx-auto rounded-full" />
        </div>

        {/* Layout Split */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Side: Stats/Visual cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col items-center text-center shadow-lg"
            >
              <div className="p-3 bg-cloudBlue/10 text-cloudBlue rounded-xl mb-4">
                <FaGraduationCap size={24} />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Education</h3>
              <p className="text-base font-bold text-slate-800 dark:text-white">BE Computer Eng.</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Student</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col items-center text-center shadow-lg"
            >
              <div className="p-3 bg-orangeAccent/10 text-orangeAccent rounded-xl mb-4">
                <FaCode size={24} />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Linux / DevOps</h3>
              <p className="text-base font-bold text-slate-800 dark:text-white">2+ Years</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Hands-on Experience</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col items-center text-center shadow-lg sm:col-span-2"
            >
              <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl mb-4">
                <FaAward size={24} />
              </div>
              <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Certifications</h3>
              <p className="text-base font-bold text-slate-800 dark:text-white">AWS, Azure & Linux</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Continuous Learning</p>
            </motion.div>

          </div>

          {/* Right Side: Narrative */}
          <motion.div variants={itemVariants} className="lg:col-span-7 text-left">
            <h3 className="text-2xl font-bold font-sans text-slate-900 dark:text-white mb-6">
              Engineering Infrastructure with a Software Developer's Mindset
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I am a Computer Engineering student dedicated to mastering Cloud computing and DevOps methodologies. My focus lies at the intersection of development and operations, where I apply automation, containerization, and configuration-as-code to build stable environments.
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              I have spent significant time setting up, maintaining, and automating Linux systems. Through Docker and Kubernetes, I deploy containerized architectures, and I configure robust CI/CD pipelines to bridge the gap between building software and running it in production.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cloudBlue" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Infrastructure Automation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orangeAccent" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Container Orchestration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cloudBlue" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">CI/CD Pipeline Construction</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-orangeAccent" />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Cloud Resource Management</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
