import { motion } from "framer-motion";
import AnimatedTagline from "./AnimatedTagline";
import { siteConfig, heroData } from "@/data/config";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 place-items-center pt-16 pb-8 md:pt-12 md:pb-24 max-w-7xl mx-auto px-4 w-full">
        
        {/* Text Content Section */}
        <motion.div 
          className="space-y-6 w-full order-2 lg:order-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter"
            >
              <span className="block text-gradient">{siteConfig.shortName}</span>
              <span className="block text-slate-800 dark:text-slate-100 mt-2">Pillay</span>
            </motion.h1>
            
            <motion.div variants={itemVariants}>
              <AnimatedTagline />
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative mt-6">
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                {heroData.greeting}{" "}
                {heroData.highlights.map((highlight, index) => (
                  <span key={index}>
                    <span className={`font-semibold ${highlight.color}`}>
                      {highlight.text}
                    </span>
                    {index < heroData.highlights.length - 2 ? ", " : index === heroData.highlights.length - 2 ? ", and " : ""}
                  </span>
                ))}
              </p>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-800 hover:bg-slate-900 dark:bg-slate-200 dark:hover:bg-white dark:text-slate-900 text-white px-8 py-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800">
            {heroData.stats.map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div 
          className="order-1 lg:order-2 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative group perspective-1000">
            {/* Subtle glow behind the image instead of CSS bloat */}
            <div className="absolute inset-0 bg-indigo-500/20 dark:bg-indigo-400/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-800 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* We use an img tag here because Astro's Picture doesn't work inside React directly, 
                  but we'll point it to the optimized image from public or imported asset */}
              <img
                src="/Myself_Ai.jpeg" 
                alt="T. Devashish Pillay"
                className="object-cover w-full h-full"
                loading="eager"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"
            animate={{ 
              y: [0, 16, 0],
              opacity: [1, 0, 1] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </main>
  );
}
