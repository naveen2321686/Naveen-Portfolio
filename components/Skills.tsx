'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Layout, Terminal, Wrench } from 'lucide-react';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Tools & Libraries',
    icon: Wrench,
    skills: ['Git & GitHub', 'REST API Integration', 'Formik', 'Yup Validation', 'Framer Motion', 'Axios'],
  },
  {
    title: 'Other Skills',
    icon: Terminal,
    skills: ['Responsive Design', 'Reusable Components', 'UI Optimization', 'Authentication UI', 'Dashboard Development'],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, -80]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 80]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-black/50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute top-20 right-[10%] w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px]" 
      />
      <motion.div 
        style={{ y: y2, opacity }}
        className="absolute bottom-20 left-[10%] w-64 h-64 bg-violet-500/5 rounded-full blur-[100px]" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            A comprehensive set of tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/10">
                <category.icon className="text-indigo-500 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
