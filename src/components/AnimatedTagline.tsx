
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const roles = [
  "AI Enthusiast",
  "Full-Stack Developer", 
  "Innovation Driver",
  "Problem Solver",
  "Tech Explorer"
];

export default function AnimatedTagline() {
  const [currentRole, setCurrentRole] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const roleVariants = {
    enter: {
      opacity: 0,
      y: 12,
      scale: 0.96
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.45,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -12,
      scale: 0.96,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.28,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden text-left"
    >
      {/* Main Tagline */}
      <motion.div 
        variants={textVariants}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight"
      >
        <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
          Passionate about Technology
        </span>
      </motion.div>

      {/* Animated Role Switcher */}
      <motion.div 
        variants={textVariants}
        className="text-xl md:text-2xl font-bold h-10 relative flex items-center"
      >
        <span className="text-slate-700 dark:text-slate-300 mr-3">I'm a</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={currentRole}
            variants={roleVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-extrabold"
            aria-live="polite"
          >
            {roles[currentRole]}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        variants={textVariants}
        className="flex items-center justify-start mt-6 space-x-3"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </motion.div>

      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-transparent rounded-2xl blur-xl -z-10"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}
