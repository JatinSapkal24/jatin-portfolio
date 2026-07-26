import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-slate-200/40 dark:border-white/5 bg-slate-950/20 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand/Name */}
        <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">
          &copy; {new Date().getFullYear()} Jatin Sapkal. All rights reserved.
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
          <a href="#about" className="hover:text-cloudBlue transition-colors">About</a>
          <a href="#projects" className="hover:text-cloudBlue transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cloudBlue transition-colors">Contact</a>
        </div>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-cloudBlue dark:hover:text-cloudBlue border border-slate-200/50 dark:border-white/5 shadow-md transition-all duration-200 hover:-translate-y-1 cursor-pointer"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
