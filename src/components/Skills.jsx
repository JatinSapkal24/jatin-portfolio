import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLinux, 
  FaGitAlt, 
  FaGithub, 
  FaDocker, 
  FaAws, 
  FaJava, 
  FaTerminal 
} from 'react-icons/fa';
import { 
  SiKubernetes, 
  SiGithubactions 
} from 'react-icons/si';
import { TbBrandAzure } from 'react-icons/tb';

const skillCategories = [
  {
    title: "Operating Systems & Scripting",
    skills: [
      { name: "Linux", icon: FaLinux, level: "90%", color: "hover:text-amber-500" },
      { name: "Shell Scripting", icon: FaTerminal, level: "85%", color: "hover:text-emerald-400" },
    ]
  },
  {
    title: "Containerization & Orchestration",
    skills: [
      { name: "Docker", icon: FaDocker, level: "85%", color: "hover:text-sky-500" },
      { name: "Kubernetes", icon: SiKubernetes, level: "80%", color: "hover:text-blue-500" },
    ]
  },
  {
    title: "Cloud & Version Control",
    skills: [
      { name: "AWS", icon: FaAws, level: "80%", color: "hover:text-orangeAccent" },
      { name: "Azure", icon: TbBrandAzure, level: "75%", color: "hover:text-sky-600" },
      { name: "Git", icon: FaGitAlt, level: "85%", color: "hover:text-orange-600" },
      { name: "GitHub", icon: FaGithub, level: "85%", color: "hover:text-slate-400" },
    ]
  },
  {
    title: "CI/CD & Languages",
    skills: [
      { name: "CI/CD", icon: SiGithubactions, level: "80%", color: "hover:text-blue-400" },
      { name: "Java", icon: FaJava, level: "75%", color: "hover:text-red-500" },
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden px-6 bg-slate-900/10 dark:bg-slate-950/20">
      {/* Background Glow */}
      <div className="bg-glow-sphere top-1/4 left-10 bg-orangeAccent/10 dark:bg-orangeAccent/5" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white mb-2"
          >
            Technical Skills
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cloudBlue to-orangeAccent mx-auto rounded-full" />
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-3xl glass-card border-slate-200/50 dark:border-white/5 shadow-xl flex flex-col justify-start"
            >
              <h3 className="text-lg font-bold font-sans text-slate-900 dark:text-white mb-6 text-left border-l-4 border-cloudBlue pl-3">
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={sIdx} 
                      className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200/20 dark:border-white/5 flex flex-col gap-3 group transition-all duration-300 hover:border-cloudBlue/20"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl bg-slate-200/50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 transition-colors duration-300 ${skill.color}`}>
                            <Icon size={20} />
                          </div>
                          <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">{skill.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{skill.level}</span>
                      </div>
                      
                      {/* Skill level bar */}
                      <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-cloudBlue to-orangeAccent rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
