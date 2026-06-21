import { motion } from "framer-motion";

const techStack = [
  "Kubernetes", "Docker", "Python", "Go", "React", "Next.js", 
  "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "Redis", 
  "Framer Motion", "Tailwind CSS", "Astro", "Machine Learning"
];

export default function TechMarquee() {
  return (
    <section className="py-24 overflow-hidden bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 dark:from-slate-950 via-transparent to-slate-50 dark:to-slate-950 z-10 pointer-events-none" />
      
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mb-2">
          Powering Innovation With
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-8 py-4 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Double the array for seamless infinite scroll */}
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="text-xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-200 px-6 opacity-60 hover:opacity-100 transition-opacity cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
