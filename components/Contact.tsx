'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, Phone, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { sendEmail } from '@/app/actions';
import { toast } from 'sonner';

export default function Contact() {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    setIsPending(false);

    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success('Message sent successfully!');
      (event.target as HTMLFormElement).reset();
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Let's Build Something Great
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <a
              href="mailto:naveenkumarr7722@gmail.com"
              className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-indigo-500/50 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-indigo-400" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Email Me</h4>
                <p className="text-gray-400 group-hover:text-indigo-400 transition-colors">naveenkumarr7722@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/919361429669"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-green-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-green-400" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">WhatsApp Me</h4>
                <p className="text-gray-400 group-hover:text-green-400 transition-colors">+91 9361429669</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/naveenkumar7722"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-violet-500/50 transition-colors group cursor-pointer"
            >
              <div className="w-14 h-14 bg-violet-500/10 rounded-2xl flex items-center justify-center shrink-0">
                <MessageSquare className="text-violet-400" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1">Let's Chat</h4>
                <p className="text-gray-400 group-hover:text-violet-400 transition-colors">LinkedIn: Naveen Kumar K</p>
              </div>
            </a>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
              <h4 className="text-2xl font-bold mb-4">Why hire me?</h4>
              <p className="text-indigo-100/80 mb-6 leading-relaxed">
                I combine technical proficiency with a keen eye for design, ensuring that every pixel serves a purpose and every interaction feels intuitive.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">✓ Clean & Maintainable Code</li>
                <li className="flex items-center gap-2">✓ Performance-focused Frontend</li>
                <li className="flex items-center gap-2">✓ Modern Aesthetic Sense</li>
              </ul>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm sticky top-24"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-indigo-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 group"
            >
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
