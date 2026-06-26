import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Cpu, Globe, Rocket, ChevronRight, CheckCircle2 } from 'lucide-react';
import Hero3D from './components/Hero3D';
import ProjectCanvas from './components/ProjectCanvas';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/80 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white tracking-tighter">
              PORTFOLIO<span className="text-blue-500">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-300 hover:text-white transition-colors font-medium">Home</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors font-medium">Projects</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-lg font-bold">
              Hire Me
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#home" className="block text-lg text-slate-300 font-medium" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="block text-lg text-slate-300 font-medium" onClick={() => setIsOpen(false)}>About</a>
              <a href="#projects" className="block text-lg text-slate-300 font-medium" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#contact" className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl flex items-center justify-center font-bold shadow-lg" onClick={() => setIsOpen(false)}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <Hero3D />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>
    </div>
    <div className="relative text-center px-4 max-w-4xl z-10">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-blue-500 font-bold tracking-[0.4em] uppercase text-sm mb-6 block"
      >
        Available for Freelance
      </motion.span>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-8xl font-bold text-white mb-8 leading-tight"
      >
        Building the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Future in 3D</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xl md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Full-stack developer specializing in immersive web experiences and automated content pipelines.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row justify-center gap-6"
      >
        <a href="#projects" className="bg-blue-600 text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-2xl">
          View Projects
        </a>
        <a href="#contact" className="bg-white/10 text-white backdrop-blur-md border border-white/20 px-12 py-5 rounded-full text-lg font-bold hover:bg-white/20 transition-all shadow-2xl">
          Contact Me
        </a>
      </motion.div>
    </div>
  </section>
);

const About = () => (
    <section id="about" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative">
                    <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-emerald-500 p-1 shadow-2xl">
                        <div className="w-full h-full bg-slate-900 rounded-[calc(1.5rem-4px)] flex items-center justify-center">
                            <Code2 size={120} className="text-blue-500" />
                        </div>
                    </div>
                </div>
                <div>
                    <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">About Me</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">I bridge the gap between <br/>Design & Tech</h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        With over 5 years of experience in web development, I focus on creating high-performance, visually stunning applications. My approach combines technical rigor with creative flair.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">50+</h4>
                            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Projects Done</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white mb-2">12</h4>
                            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Projects = () => {
  const projects = [
    {
      title: "YouTube Automation Pro",
      desc: "An AI-powered pipeline to automate YouTube Shorts creation, featuring auto-clipping, transcription, and captioning.",
      tech: ["Python", "Whisper AI", "FFmpeg"],
      link: "#"
    },
    {
      title: "3D Immersive Landing",
      desc: "A high-performance landing page using React Three Fiber for interactive 3D product visualization.",
      tech: ["React", "Three.js", "R3F"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Work</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-slate-950 p-8 rounded-3xl border border-white/5 shadow-2xl overflow-hidden"
            >
              <ProjectCanvas type={i === 0 ? 'knot' : 'box'} />
              <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {p.tech.map(t => (
                  <span key={t} className="bg-blue-500/10 text-blue-400 text-xs font-bold px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <a href={p.link} className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-500 transition-colors">
                View Case Study <ExternalLink size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to start a <br/>project together?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">I'm currently accepting new projects and would love to hear about your ideas.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:hello@example.com" className="bg-white text-blue-600 px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
              Get in Touch
            </a>
            <div className="flex gap-6 items-center">
              <a href="#" className="hover:scale-110 transition-transform"><Github size={32} /></a>
              <a href="#" className="hover:scale-110 transition-transform"><Linkedin size={32} /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em]">© 2026 Developer Portfolio • Built with Soul & 3D</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500 selection:text-white scroll-smooth overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
