import React from 'react';
import { motion } from 'framer-motion';
import { SiKubernetes } from 'react-icons/si';
import { FaLinux, FaAws, FaMicrosoft } from 'react-icons/fa';
import { TbBrandAzure } from 'react-icons/tb';

const certs = [
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "July 2026",
    id: "AWS-ASA-12345",
    icon: FaAws,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    date: "June 2026",
    id: "LF-CKA-98765",
    icon: SiKubernetes,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Red Hat Certified System Administrator (RHCSA)",
    issuer: "Red Hat",
    date: "May 2026",
    id: "RH-RHCSA-45678",
    icon: FaLinux,
    color: "text-red-500",
    bg: "bg-red-500/10"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "March 2026",
    id: "MS-AZ900-54321",
    icon: TbBrandAzure,
    color: "text-sky-500",
    bg: "bg-sky-500/10"
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden px-6 bg-slate-900/10 dark:bg-slate-950/20">
      {/* Background glow */}
      <div className="bg-glow-sphere top-1/4 right-10 bg-cloudBlue/10 dark:bg-cloudBlue/5" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-white mb-2"
          >
            Certifications
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cloudBlue to-orangeAccent mx-auto rounded-full" />
        </div>

        {/* Certs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {certs.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl glass-card border-slate-200/50 dark:border-white/5 flex items-start gap-4 shadow-lg hover:border-cloudBlue/20 transition-all duration-300"
              >
                {/* Cert Icon */}
                <div className={`p-4 rounded-xl ${cert.bg} ${cert.color} shrink-0`}>
                  <Icon size={32} />
                </div>

                {/* Text Details */}
                <div className="text-left">
                  <h3 className="text-base sm:text-lg font-bold font-sans text-slate-900 dark:text-white mb-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-0.5">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                    Issued {cert.date} &bull; Verification ID: {cert.id}
                  </p>
                  <span className="text-xs font-semibold text-cloudBlue dark:text-cloudBlue px-2.5 py-1 rounded bg-cloudBlue/10">
                    Active Credential
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
