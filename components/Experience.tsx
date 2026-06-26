'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { useRef } from 'react';

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'Startup Company',
    period: '2025 - Present',
    location: 'Remote / On-site',
    description: [
      'Developed responsive admin dashboard interfaces using Next.js and Tailwind CSS.',
      'Integrated APIs and handled frontend data rendering.',
      'Built reusable UI components for scalability.',
      'Worked on invoice management and license management systems.',
      'Improved UI responsiveness for desktop and mobile devices.',
      'Collaborated with backend developers for API integration.',
      'Worked with authentication and protected routes.',
    ],
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-24 bg-black/50 relative overflow-hidden">
      {/* Decorative Parallax Background */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
        className="absolute top-0 left-0 w-full h-full bg-indigo-500/5 blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Professional Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            My experience in building high-quality web applications.
          </motion.p>
        </div>

        <div ref={containerRef} className="max-w-4xl mx-auto relative">
          {/* Animated Timeline Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-indigo-500 via-violet-500 to-transparent"
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-12 pb-12 last:pb-0"
            >
              {/* Dot with pulse animation */}
              <div className="absolute left-[-5px] top-0 w-3 h-3 bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]">
                <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-75" />
              </div>

              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-all shadow-lg hover:shadow-indigo-500/5 backdrop-blur-sm"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">{exp.role}</h3>
                    <p className="text-indigo-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
