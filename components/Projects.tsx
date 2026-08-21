'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Zaraaq - Dealer Management',
    description: 'Built responsive UI screens for dealer dashboard and invoice management. Features clean table layouts, modal forms with validation, and reusable components using Tailwind CSS.',
    image: '/zaraaq-dealer.png',
    tags: ['React', 'Tailwind CSS', 'Next.js', 'Responsive Design'],
    link: '#',
    github: '#',
  },
  {
    title: 'Zaraaq - HRMS',
    description: 'Automated HR processes for blue-collar workforce operations. Integrated RESTful APIs for attendance, payroll, and scheduling with efficient state management.',
    image: '/zaraaq-hrms.png',
    tags: ['React.js', 'REST APIs', 'Figma to UI', 'State Management'],
    link: '#',
    github: '#',
  },
  {
    title: 'Inventory Management System',
    description: 'Developed a scalable UI for inventory tracking, stock updates, and order management. Implemented real-time data sync and optimized performance with lazy loading.',
    image: '/inventory-system.png',
    tags: ['Next.js', 'REST APIs', 'Search & Filter', 'Performance'],
    link: '#',
    github: '#',
  },
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const springY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Use the smoothed spring value for the transform
  const y = useTransform(springY, [0, 1], [index % 2 === 0 ? 40 : 15, index % 2 === 0 ? -40 : -15]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all shadow-xl hover:shadow-cyan-500/10"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
          <div className="flex gap-4">
            <a href={project.link} className="p-3 bg-white text-black rounded-full hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-110">
              <ExternalLink size={20} />
            </a>
            <a href={project.github} className="p-3 bg-white/10 text-white rounded-full backdrop-blur-md hover:bg-white/20 transition-all transform hover:scale-110">
              <Code2 size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              A selection of my recent work, ranging from admin dashboards to AI-powered applications.
            </motion.p>
          </div>
          <motion.a
            href="https://github.com"
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
          >
            View all on GitHub <ExternalLink size={18} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
