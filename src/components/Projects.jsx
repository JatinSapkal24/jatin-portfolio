import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const projectsList = [
  {
    title: "Kubernetes 3-Tier Library Management System",
    description: "Deployed a secure, highly available 3-tier library management application on a local and cloud Kubernetes cluster. Handled persistent volumes, secret configuration, service discovery, and Nginx ingress controllers.",
    tags: ["Kubernetes", "Docker", "Node.js", "MongoDB", "Nginx"],
    githubLink: "https://github.com/JatinSapkal/k8s-3tier-library",
    demoLink: "#"
  },
  {
    title: "AI-Based Smart Farming",
    description: "An IoT-enabled platform that utilizes machine learning classifiers to predict crop soil requirements and automate water pump triggers. Built Docker containers to deploy the Flask API interface.",
    tags: ["Python", "TensorFlow", "IoT", "Flask", "Docker"],
    githubLink: "https://github.com/JatinSapkal/smart-farming-ai",
    demoLink: "#"
  },
  {
    title: "Linux Administration Scripts",
    description: "A robust toolkit of system administration scripts automating daily tasks: secure backups, log rotation, user account provisioning, and resource usage threshold notifications.",
    tags: ["Bash", "Linux", "Syslog", "Cron", "Automation"],
    githubLink: "https://github.com/JatinSapkal/linux-admin-scripts",
    demoLink: "#"
  },
  {
    title: "Cloud Cost Dashboard",
    description: "Aggregated cost metrics from multiple cloud environments (AWS & Azure APIs) into a unified visual dashboard. Offers recommendations to optimize costs through instance rightsizing.",
    tags: ["React", "Node.js", "AWS SDK", "Azure SDK", "Tailwind"],
    githubLink: "https://github.com/JatinSapkal/cloud-cost-dashboard",
    demoLink: "#"
  },
  {
    title: "Self-Healing Microservices",
    description: "Established a monitoring stack using Prometheus and Grafana connected to Kubernetes. Designed auto-remediation scripts triggered by webhook alerts to restore failing services.",
    tags: ["Prometheus", "Grafana", "Kubernetes", "Bash", "Webhooks"],
    githubLink: "https://github.com/JatinSapkal/self-healing-services",
    demoLink: "#"
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
            Featured Projects
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cloudBlue to-orangeAccent mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="rounded-3xl glass-card border-slate-200/50 dark:border-white/5 flex flex-col justify-between h-full p-6 shadow-xl glass-card-hover"
            >
              <div>
                {/* Title */}
                <h3 className="text-lg font-bold font-sans text-slate-900 dark:text-white mb-3 text-left leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 text-left leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-cloudBlue/10 text-cloudBlue dark:bg-cloudBlue/10 dark:text-cloudBlue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Action Icons */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-200/40 dark:border-white/5">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">DevOps Project</span>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-cloudBlue dark:hover:text-cloudBlue hover:-translate-y-0.5 transition-all duration-200"
                      aria-label="View Github Repository"
                    >
                      <FaGithub size={18} />
                    </a>
                    
                    <a
                      href={project.demoLink}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-orangeAccent dark:hover:text-orangeAccent hover:-translate-y-0.5 transition-all duration-200"
                      aria-label="View Live Project"
                    >
                      <FiExternalLink size={18} />
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
