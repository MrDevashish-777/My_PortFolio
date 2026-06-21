import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function DarkModeToggle(): JSX.Element {
  const [mode, setMode] = useState<string>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // Apply theme class and persist choice
  useEffect(() => {
    const root = document.documentElement;
    // Add a temporary transition helper so theme change is smooth
    root.classList.add('theme-transition');
    window.setTimeout(() => root.classList.remove('theme-transition'), 300);

    if (mode === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [mode]);

  return (
    <button
      aria-label="Toggle dark mode"
      aria-pressed={mode === 'dark'}
      title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex items-center justify-center w-12 h-7 rounded-full p-1 bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
    >
      <motion.div
        className="w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center"
        animate={{
          x: mode === 'dark' ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {mode === 'dark' ? (
          <svg className="w-3 h-3 text-slate-800" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        ) : (
          <svg className="w-3 h-3 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 4.22a1 1 0 011.415 0l.708.708a1 1 0 01-1.414 1.414l-.708-.708a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zm-4.22 4.22a1 1 0 010 1.415l-.708.708a1 1 0 01-1.414-1.414l.708-.708a1 1 0 011.415 0zM10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1zm-4.22-4.22a1 1 0 01-1.415 0l-.708-.708a1 1 0 011.414-1.414l.708.708a1 1 0 010 1.415zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm4.22-4.22a1 1 0 010-1.415l.708-.708a1 1 0 011.414 1.414l-.708.708a1 1 0 01-1.415 0z" clipRule="evenodd" />
          </svg>
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
