import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Tars Technologies",
    period: "May 2025 – Jun 2025",
    type: "Internship",
    bullets: [
      "Built and deployed full-stack apps using React (Vite), JavaScript, TailwindCSS, MongoDB, Firebase",
      "Implemented responsive UI, auth flows, and real-time features",
      "Collaborated with design & backend teams using agile workflows"
    ]
  },
  {
    role: "Live Project Member",
    company: "Crypto Forensic Technology",
    period: "Aug 2024 – Nov 2025",
    type: "Project",
    bullets: [
      "Built & maintained responsive web apps",
      "Managed website via CPanel",
      "Developed biometric security & forensic systems"
    ]
  },
  {
    role: "Web Dev Intern",
    company: "HOTIT Institute",
    period: "Jun 2024",
    type: "Internship",
    bullets: ["Developed full website with HTML/CSS/JS/PHP & MySQL"]
  },
  {
    role: "Website Manager",
    company: "Jain International School",
    period: "Aug 2023 – Apr 2024",
    type: "Role",
    bullets: ["Managed official website, improved UI/UX, SEO, QA, bug fixes"]
  }
];

export default function ExperienceContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative z-10 max-w-5xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <div className="w-20 h-20 mx-auto mb-6 bg-indigo-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-sm">
          <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6">
          Experience
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Journey through internships, roles and live projects showcasing practical impact and continuous growth.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center"
      >
        {[
          { num: "4+", label: "Experiences" },
          { num: "2+", label: "Years Active" },
          { num: "10+", label: "Projects" },
          { num: "5+", label: "Technologies" }
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.num}</div>
            <p className="text-slate-500 dark:text-slate-400 font-medium text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-slate-200 dark:bg-slate-700 hidden lg:block"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12 lg:space-y-16"
        >
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`relative flex items-center flex-col lg:flex-row gap-8 lg:gap-16 ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-slate-800 rounded-full border-4 border-indigo-500 shadow-sm z-10 hidden lg:flex items-center justify-center"></div>
              
              {/* Content Card */}
              <div className={`w-full lg:w-1/2 ${idx % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-shadow duration-300 relative group overflow-hidden">
                  
                  {/* Subtle hover gradient */}
                  <div className="absolute inset-0 bg-indigo-50 dark:bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-bold mb-6">
                      {exp.type}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 mb-6">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0"></div>
                          <span className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
