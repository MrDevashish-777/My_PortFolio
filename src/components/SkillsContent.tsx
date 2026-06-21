import React from 'react';
import { motion } from 'framer-motion';
import skillsData from '@/data/skills.json';

const categoryIcons: Record<string, string> = {
  "Languages": "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  "Frontend": "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
  "Backend": "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01",
  "Databases": "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
  "AI & ML": "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "DevOps & Tools": "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  "Architecture & Security": "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
};

const categoryColors: Record<string, string> = {
  "Languages": "from-amber-500 to-orange-500",
  "Frontend": "from-blue-500 to-cyan-500",
  "Backend": "from-green-500 to-emerald-500",
  "Databases": "from-blue-600 to-indigo-600",
  "AI & ML": "from-purple-500 to-pink-500",
  "DevOps & Tools": "from-slate-600 to-slate-800",
  "Architecture & Security": "from-red-500 to-rose-600"
};

export default function SkillsContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const allSkills = Object.values(skillsData).flat();
  const marqueeItems = [...allSkills, ...allSkills]; // Duplicate for infinite scroll

  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium mb-6">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span>My Toolkit</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6">
          Skills & <span className="text-gradient">Expertise</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A comprehensive toolkit spanning frontend, backend, mobile development, and collaborative excellence.
        </p>
      </motion.div>

      {/* Marquee */}
      <div className="relative overflow-hidden mb-20 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
        <div className="flex animate-marquee whitespace-nowrap py-4">
          {marqueeItems.map((skill, index) => (
            <span key={index} className="inline-block px-6 py-2 mx-2 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold rounded-full text-lg shadow-sm border border-indigo-100 dark:border-slate-700">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid lg:grid-cols-2 gap-8 mb-20"
      >
        {Object.entries(skillsData).map(([category, items], idx) => (
          <motion.div 
            key={category} 
            variants={itemVariants}
            className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-shadow duration-300 relative overflow-hidden group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category]} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className={`w-14 h-14 bg-gradient-to-r ${categoryColors[category]} rounded-2xl flex items-center justify-center shadow-lg`}>
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={categoryIcons[category] || "M13 10V3L4 14h7v7l9-11h-7z"} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-3 relative z-10">
              {items.map((skill: string) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium shadow-sm hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-indigo-600 rounded-3xl p-10 md:p-16 text-white text-center shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 relative z-10">By the Numbers</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          <div>
            <div className="text-5xl font-bold mb-2">{allSkills.length}+</div>
            <div className="text-indigo-200 font-medium">Total Skills</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">{Object.keys(skillsData).length}</div>
            <div className="text-indigo-200 font-medium">Categories</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">3+</div>
            <div className="text-indigo-200 font-medium">Years Active</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">10+</div>
            <div className="text-indigo-200 font-medium">Projects Built</div>
          </div>
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
}
