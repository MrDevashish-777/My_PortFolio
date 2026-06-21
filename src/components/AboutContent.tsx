import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  { number: "3+", label: "Years Experience", icon: "time" },
  { number: "10+", label: "Projects Completed", icon: "code" },
  { number: "5+", label: "Technologies Mastered", icon: "cog" },
  { number: "100%", label: "Client Satisfaction", icon: "happy" }
];

const timeline = [
  {
    year: "2024",
    title: "Advanced AI Projects",
    description: "Working on cutting-edge biometric authentication systems and forensic technology applications."
  },
  {
    year: "2023",
    title: "Full-Stack Development",
    description: "Mastered modern web development stack including React, Node.js, and cloud technologies."
  },
  {
    year: "2022",
    title: "Computer Science Journey",
    description: "Started my Computer Science and Engineering degree, focusing on AI and software development."
  }
];

export default function AboutContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-20 max-w-7xl mx-auto"
    >
      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Profile Image */}
        <motion.div variants={itemVariants} className="relative group perspective-1000">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl blur-xl opacity-20 transition-opacity duration-300"></div>
          <div className="relative bg-white dark:bg-slate-800 p-2 rounded-2xl shadow-xl">
            <img
              src="/Myself_Ai.jpeg"
              alt="T. Devashish Pillay"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Hi, I'm <span className="text-gradient">Devashish</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Aspiring B.Tech (CSE) student at SBJITMR, Nagpur with strong full-stack development skills. Passionate about building responsive applications, creative problem-solving, and contributing to impactful projects. Experienced in UI/UX, authentication systems, and working within agile teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Skills</h3>
              <p className="text-slate-600 dark:text-slate-400">React.js, Node.js, Express.js, Tailwind CSS, MongoDB, Firebase</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-3">Education</h3>
              <p className="text-slate-600 dark:text-slate-400">B.Tech CSE – SBJITMR, Nagpur (86.60%)</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements Section */}
      <motion.div variants={itemVariants} className="bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200 dark:border-slate-700">
        <h3 className="text-2xl font-bold text-center mb-10 text-slate-800 dark:text-slate-100">Achievements & Milestones</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{achievement.number}</div>
              <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{achievement.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline Section */}
      <motion.div variants={itemVariants}>
        <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">My Journey</h3>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block"></div>
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="flex gap-8 relative z-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="hidden md:flex w-16 h-16 bg-white dark:bg-slate-800 border-4 border-indigo-500 rounded-full items-center justify-center font-bold text-indigo-600 dark:text-indigo-400 shrink-0 shadow-sm">
                  {item.year.slice(-2)}'
                </div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 flex-1">
                  <div className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mb-2 md:hidden">{item.year}</div>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div variants={itemVariants} className="text-center pt-10">
        <div className="bg-indigo-600 rounded-3xl p-10 lg:p-16 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <h3 className="text-3xl font-bold mb-6 relative z-10">Let's Connect!</h3>
          <p className="text-lg text-indigo-100 mb-8 max-w-xl mx-auto relative z-10">I'm always excited to discuss new opportunities and innovative projects.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a href="mailto:devashishp.cse22@sbjit.edu.in" className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-sm">
              Get In Touch
            </a>
            <a href="/project" className="px-8 py-4 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-400 transition-colors shadow-sm border border-indigo-400">
              View Projects
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
