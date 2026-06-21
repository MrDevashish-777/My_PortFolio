import React from 'react';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects.json';

export default function ProjectsContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Enhanced Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-4xl mx-auto mb-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium mb-6">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span>My Work</span>
        </div>
        
        <h1 className="text-5xl lg:text-6xl font-bold lg:tracking-tight mb-6">
          <span className="text-gradient">Featured Projects</span>
        </h1>
        
        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
          A showcase of my technical expertise through innovative projects that solve real-world problems using cutting-edge technologies.
        </p>
        
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-indigo-400 mx-auto mt-8 rounded-full"></div>
      </motion.div>

      {/* Enhanced Projects Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
      >
        {projectsData.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group block relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300"
          >
            {project.featured && (
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                Featured
              </div>
            )}
            
            <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((techItem, techIndex) => (
                <span key={techIndex} className="px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full">
                  {techItem}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="bg-indigo-600 rounded-3xl p-10 text-white shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'2\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">Let's collaborate and bring your ideas to life with cutting-edge technology.</p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm"
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
