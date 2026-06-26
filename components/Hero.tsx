'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Globe, Mail } from 'lucide-react';
import { useEffect } from 'react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax transformations for background elements (more subtle)
  const bgX = useTransform(smoothMouseX, [0, 1000], [10, -10]);
  const bgY = useTransform(smoothMouseY, [0, 1000], [10, -10]);

  // Parallax transformations for the code card (reduced intensity for professional look)
  const cardRotateX = useTransform(smoothMouseY, [0, 1000], [3, -3]);
  const cardRotateY = useTransform(smoothMouseX, [0, 1000], [-3, 3]);
  const cardX = useTransform(smoothMouseX, [0, 1000], [-5, 5]);
  const cardY = useTransform(smoothMouseY, [0, 1000], [-5, 5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030303]">
      {/* Background Orbs with Parallax */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ x: useTransform(smoothMouseX, [0, 1000], [-30, 30]), y: useTransform(smoothMouseY, [0, 1000], [-30, 30]) }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-6"
          >
            Available for opportunities
          </motion.span>
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            I'm Naveen Kumar <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Frontend Developer
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl">
            With 1 year of experience building responsive and scalable web applications using Next.js, React, TypeScript, and Tailwind CSS. Passionate about creating clean UI and modern user experiences.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/25"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all"
            >
              Contact Me
            </motion.a>
          </div>

          <div className="flex gap-6">
            {[
              { icon: Code2, href: 'https://github.com' },
              { icon: Globe, href: 'https://linkedin.com' },
              { icon: Mail, href: 'mailto:naveenkumar7722@gmail.com' },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden md:block perspective-1000"
          style={{
            rotateX: cardRotateX,
            rotateY: cardRotateY,
            x: cardX,
            y: cardY
          }}
        >
          <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-3xl border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl">
            {/* Visual representation - code snippets or abstract design */}
            <div className="absolute inset-0 p-8 flex flex-col justify-center gap-4 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-violet-400">const</span>
                <span className="text-indigo-300">developer</span>
                <span className="text-gray-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div className="pl-6 flex gap-2">
                <span className="text-indigo-300">name:</span>
                <span className="text-emerald-400">'Naveen Kumar'</span>,
              </div>
              <div className="pl-6 flex gap-2">
                <span className="text-indigo-300">role:</span>
                <span className="text-emerald-400">'Frontend Developer'</span>,
              </div>
              <div className="pl-6 flex gap-2">
                <span className="text-indigo-300">experience:</span>
                <span className="text-amber-400">1</span>,
              </div>
              <div className="pl-6 flex gap-2">
                <span className="text-indigo-300">passion:</span>
                <span className="text-emerald-400">'Building scalable UI'</span>,
              </div>
              <div className="pl-6 flex gap-2">
                <span className="text-indigo-300">tech:</span>
                <span className="text-gray-400">['React', 'Next.js', 'TS']</span>
              </div>
              <div><span className="text-gray-400">{'}'}</span></div>
            </div>

            {/* Animated circles with parallax offset */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-20 -right-20 w-64 h-64 border border-indigo-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-20 -left-20 w-64 h-64 border border-violet-500/20 rounded-full"
            />
          </div>

          {/* Decorative floating elements */}
          <motion.div
            style={{
              x: useTransform(smoothMouseX, [0, 1000], [20, -20]),
              y: useTransform(smoothMouseY, [0, 1000], [20, -20])
            }}
            className="absolute -top-6 -left-6 w-12 h-12 bg-indigo-500 rounded-xl blur-2xl opacity-50"
          />
          <motion.div
            style={{
              x: useTransform(smoothMouseX, [0, 1000], [-40, 40]),
              y: useTransform(smoothMouseY, [0, 1000], [-40, 40])
            }}
            className="absolute -bottom-6 -right-6 w-12 h-12 bg-violet-500 rounded-xl blur-2xl opacity-50"
          />
        </motion.div>
      </div>
    </section>
  );
}
