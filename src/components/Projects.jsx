import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projectsList = [
  {
    title: "Maharashtra Property Price Prediction",
    description: "A machine learning solution developed to predict real estate property values across various cities and regions in Maharashtra. Built utilizing data prep processing, exploratory analysis, regression model tuning, and validation testing to deliver accurate valuation predictions.",
    tags: ["Python", "Machine Learning", "Data Science", "Pandas", "Scikit-Learn", "Regression"],
    githubLink: "https://github.com/JatinSapkal24/maharashtra-property-price-prediction"
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden px-6">
      {/* Background Glow */}
      <div className="bg-glow-sphere bottom-1/4 -right-10 bg-cloudBlue/10 dark:bg-cloudBlue/5" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white mb-2"
          >
            Featured Project
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cloudBlue to-orangeAccent mx-auto rounded-full" />
        </div>

        {/* Projects Layout - Centered Single Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center"
        >
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="w-full max-w-2xl rounded-3xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between p-8 shadow-xl glass-card-hover"
            >
              <div>
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-white mb-4 text-left leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-8 text-left leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-cloudBlue/10 text-cloudBlue dark:bg-cloudBlue/10 dark:text-cloudBlue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Icons */}
                <div className="flex justify-between items-center pt-5 border-t border-slate-200/40 dark:border-white/5">
                  <span className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                    Machine Learning Project
                  </span>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 text-white dark:bg-slate-800/80 hover:bg-cloudBlue hover:text-white dark:hover:bg-cloudBlue dark:hover:text-white hover:-translate-y-0.5 transition-all duration-200 font-semibold text-sm shadow-md"
                      aria-label="View Github Repository"
                    >
                      <FaGithub size={18} />
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
