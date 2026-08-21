'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import ParallaxText from '@/components/ParallaxText';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, -300]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 300]);

  return (
    <main className="bg-[#030303] min-h-screen text-white relative overflow-hidden">
      {/* Global Background Parallax Elements - Very Subtle */}
      <motion.div
        style={{ y: y1 }}
        className="fixed top-[15%] left-[-10%] w-[35vw] h-[35vw] bg-cyan-600/[0.04] rounded-full blur-[140px] pointer-events-none z-0"
      />
      <motion.div
        style={{ y: y2 }}
        className="fixed bottom-[15%] right-[-10%] w-[35vw] h-[35vw] bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none z-0"
      />

      <Navbar />

      <div className="relative z-10">
        <Hero />

        <ParallaxText baseVelocity={-2.5} className="py-20 opacity-[0.15]">
          DEVELOPER DESIGNER INNOVATOR
        </ParallaxText>

        <Skills />

        <ParallaxText baseVelocity={2.5} className="py-20 opacity-[0.15]">
          REACT NEXT.JS TYPESCRIPT TAILWIND
        </ParallaxText>

        <Experience />

        <Projects />

        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-500 text-sm">
            © 2026 Naveen Kumar. Built with Next.js, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </footer>
    </main>
  );
}
