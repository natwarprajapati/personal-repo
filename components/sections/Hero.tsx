"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { Download, X } from "lucide-react";

// Dynamically load the UniverseBackground component
const UniverseBackground = dynamic(() => import('@/components/ui/UniverseBackground').then(mod => mod.UniverseBackground), { ssr: false });
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";

const titles = ["Frontend Developer", "React Specialist", "UI Engineer"];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const title = titles[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (currentText.length < title.length) {
        timeout = setTimeout(() => {
          setCurrentText(title.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(title.slice(0, currentText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, titleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <UniverseBackground />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1 mb-6 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan font-mono text-sm"
          >
            Available for Work
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-6">
            Hi, I'm <span className="text-glow-cyan text-accent-cyan">Natwar</span>
            <br />
            <span className="text-3xl md:text-5xl text-muted-foreground min-h-[1.5em] inline-block">
              I'm a{" "}
              <span className="text-foreground border-r-2 border-accent-cyan pr-1 animate-pulse">
                {currentText}
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
            I craft stunning, high-performance web applications with a focus on modern design and exceptional user experience. Let's build something extraordinary together.
          </p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <a
              href="#projects"
              className="px-8 py-4 bg-accent-cyan text-background font-bold rounded relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative">View My Work</span>
            </a>

            <a
              href="/assets/PDFFiles/Natwar-WebDev.pdf"
              download="Natwar-WebDev.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-border hover:border-accent-violet rounded font-bold flex items-center gap-2 group transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:text-accent-violet"
            >
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider">Connect:</span>
            <div className="flex items-center gap-4">
              <a href="https://github.com/natwarprajapati" className="p-2 border border-border rounded-full hover:border-accent-cyan hover:text-accent-cyan transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer"  >
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/natwarprajapati/" className="p-2 border border-border rounded-full hover:border-accent-violet hover:text-accent-violet transition-colors" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Natwar__" className="p-2 border border-border rounded-full hover:border-accent-magenta hover:text-accent-magenta transition-colors" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <BsTwitterX size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-cyan to-transparent" />
      </motion.div> */}
    </section>
  );
}
