import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaUsers, FaFolder } from 'react-icons/fa';

export default function GitHubStats({ darkMode }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/JatinSapkal24')
      .then(res => res.json())
      .then(data => {
        if (data && data.id) {
          setProfile(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

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

  // Color parameters matching our custom palette
  const titleColor = "0ea5e9"; // cloudBlue
  const iconColor = "f97316";  // orangeAccent
  const textColor = darkMode ? "94a3b8" : "475569";
  const statCardUrl = `https://github-readme-stats.vercel.app/api?username=JatinSapkal24&show_icons=true&theme=dark&hide_border=true&bg_color=00000000&title_color=${titleColor}&icon_color=${iconColor}&text_color=${textColor}`;
  const langCardUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=JatinSapkal24&layout=compact&theme=dark&hide_border=true&bg_color=00000000&title_color=${titleColor}&text_color=${textColor}`;

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
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Block: Basic Stats from GitHub API */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 h-full">
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
                <FaFolder size={20} />
                <span className="text-xs font-semibold font-sans">Public</span>
              </div>
              <div className="text-left mt-6">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {loading ? '...' : (profile?.public_repos ?? 0)}
                </span>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Repositories</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
                <FaUsers size={20} />
                <span className="text-xs font-semibold font-sans">Followers</span>
              </div>
              <div className="text-left mt-6">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {loading ? '...' : (profile?.followers ?? 0)}
                </span>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Followers</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
                <FaCodeBranch size={20} />
                <span className="text-xs font-semibold font-sans">Gists</span>
              </div>
              <div className="text-left mt-6">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {loading ? '...' : (profile?.public_gists ?? 0)}
                </span>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">Public Gists</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center text-slate-400 dark:text-slate-500">
                <FaGithub size={20} />
                <span className="text-xs font-semibold font-sans">Profile</span>
              </div>
              <div className="text-left mt-6 font-sans">
                <a 
                  href="https://github.com/JatinSapkal24" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-cloudBlue dark:text-cloudBlue hover:underline flex items-center gap-1"
                >
                  @JatinSapkal24
                </a>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1.5">View GitHub</p>
              </div>
            </motion.div>
          </div>

          {/* Right Block: Official Readme Stats Cards */}
          <div className="lg:col-span-8 flex flex-col md:flex-row gap-6 w-full">
            
            {/* Stats Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-3xl glass-card border-slate-200/50 dark:border-white/5 shadow-xl flex-1 flex items-center justify-center min-h-[220px]"
            >
              <img 
                src={statCardUrl} 
                alt="JatinSapkal24 GitHub Stats" 
                className="w-full h-auto max-w-sm object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>

            {/* Languages Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-3xl glass-card border-slate-200/50 dark:border-white/5 shadow-xl flex-1 flex items-center justify-center min-h-[220px]"
            >
              <img 
                src={langCardUrl} 
                alt="JatinSapkal24 Top Languages" 
                className="w-full h-auto max-w-sm object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
