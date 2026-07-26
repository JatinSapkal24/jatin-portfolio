import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaRegCalendarAlt } from 'react-icons/fa';
import { VscGitMerge } from 'react-icons/vsc';

// Helper to generate simulated grid data for contribution graph
const generateContributionGrid = () => {
  const grid = [];
  const weeks = 24; // ~6 months
  const days = 7;
  for (let w = 0; w < weeks; w++) {
    const weekData = [];
    for (let d = 0; d < days; d++) {
      // Random activity density (higher green concentration for DevOps flavor)
      const rand = Math.random();
      let level = 0;
      if (rand > 0.8) level = 4; // High commits
      else if (rand > 0.6) level = 3;
      else if (rand > 0.3) level = 2;
      else if (rand > 0.1) level = 1;
      weekData.push(level);
    }
    grid.push(weekData);
  }
  return grid;
};

const contributionLevels = [
  "bg-slate-200 dark:bg-slate-800", // 0
  "bg-emerald-500/20 dark:bg-emerald-500/10", // 1
  "bg-emerald-500/40 dark:bg-emerald-500/30", // 2
  "bg-emerald-500/70 dark:bg-emerald-500/60", // 3
  "bg-emerald-500 dark:bg-emerald-500" // 4
];

const languageDistribution = [
  { name: "Shell Scripting", percentage: 42, color: "bg-emerald-500" },
  { name: "Java", percentage: 28, color: "bg-red-500" },
  { name: "Python", percentage: 20, color: "bg-amber-500" },
  { name: "YAML / Dockerfile", percentage: 10, color: "bg-cloudBlue" }
];

export default function GitHubStats() {
  const [gridData] = useState(() => generateContributionGrid());

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden px-6">
      {/* Background glow */}
      <div className="bg-glow-sphere top-10 -left-10 bg-orangeAccent/10 dark:bg-orangeAccent/5" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white mb-2"
          >
            GitHub Activity
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cloudBlue to-orangeAccent mx-auto rounded-full" />
        </div>

        {/* Dashboard Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Left Block: Basic Stats */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 h-full">
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
                <FaRegCalendarAlt size={20} />
                <span className="text-xs font-semibold">Yearly</span>
              </div>
              <div className="text-left mt-6">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">1,482</span>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Commits Made</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
                <FaCodeBranch size={20} />
                <span className="text-xs font-semibold">Active</span>
              </div>
              <div className="text-left mt-6">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">32</span>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Repositories</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
                <VscGitMerge size={20} />
                <span className="text-xs font-semibold">Merged</span>
              </div>
              <div className="text-left mt-6">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">134</span>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">PRs Handled</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
                <FaGithub size={20} />
                <span className="text-xs font-semibold">Profile</span>
              </div>
              <div className="text-left mt-6">
                <a 
                  href="https://github.com/JatinSapkal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-cloudBlue dark:text-cloudBlue hover:underline flex items-center gap-1.5"
                >
                  @JatinSapkal
                </a>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1.5">View GitHub</p>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Graph and Language Breakdown */}
          <div className="lg:col-span-8 flex flex-col gap-6 w-full">
            
            {/* Contribution Calendar Graph */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-3xl glass-card border-slate-200/50 dark:border-white/5 shadow-xl w-full"
            >
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 text-left">
                Simulated Contributions (Last 6 Months)
              </h3>
              
              <div className="overflow-x-auto w-full">
                <div className="flex gap-1.5 min-w-[400px]">
                  {gridData.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-1.5">
                      {week.map((level, dIdx) => (
                        <div
                          key={dIdx}
                          className={`w-3.5 h-3.5 rounded ${contributionLevels[level]} transition-colors duration-300 hover:scale-110`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span>Less</span>
                <div className="flex gap-1.5 items-center">
                  {contributionLevels.map((lvlClass, idx) => (
                    <div key={idx} className={`w-3 h-3 rounded ${lvlClass}`} />
                  ))}
                </div>
                <span>More</span>
              </div>
            </motion.div>

            {/* Language Breakdown */}
            <motion.div
              variants={itemVariants}
              className="p-6 sm:p-8 rounded-3xl glass-card border-slate-200/50 dark:border-white/5 shadow-xl"
            >
              <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-6 text-left">
                Languages Breakdown (DevOps Profile)
              </h3>

              {/* Stacked bar */}
              <div className="w-full h-4 rounded-full overflow-hidden flex mb-6">
                {languageDistribution.map((lang, idx) => (
                  <div
                    key={idx}
                    className={`${lang.color} h-full`}
                    style={{ width: `${lang.percentage}%` }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Language labels */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {languageDistribution.map((lang, idx) => (
                  <div key={idx} className="flex flex-col items-start text-left">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${lang.color}`} />
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-4">
                      {lang.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
