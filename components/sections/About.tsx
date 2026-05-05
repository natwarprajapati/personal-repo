"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Briefcase, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me and what drives my passion for web development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image & Badges */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative w-full aspect-square max-w-md mx-auto"
            >
              {/* Glowing Frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan via-accent-violet to-accent-magenta rounded-2xl blur-xl opacity-50" />
              <div className="absolute inset-0 rounded-2xl border border-border/50 glass-card overflow-hidden flex items-center justify-center">
                {/* Fallback image/avatar */}
                <img src="/assets/ProfileImage/profile-image.webp" alt="Natwar" className="w-full h-full object-cover absolute inset-0 scale-180 " />
                <div className="w-full h-full bg-card/80 flex flex-col items-center justify-center text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-accent-cyan to-accent-violet mb-6 shadow-[0_0_30px_rgba(0,245,255,0.4)] overflow-hidden" > <img src="/assets/ProfileImage/profile-image.webp" alt="Natwar" className="w-full h-full object-cover absolute inset-0 " /></div>
                  <h3 className="text-2xl font-bold font-heading mb-2">Natwar</h3>
                  <p className="text-accent-cyan font-mono text-sm">Frontend Developer</p>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-6 -right-6 glass-card p-4 rounded-xl border border-accent-cyan/30 shadow-[0_0_15px_rgba(0,245,255,0.2)] flex items-center gap-3"
              >
                <div className="p-2 bg-accent-cyan/20 rounded-lg text-accent-cyan">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="font-bold font-mono text-xl">1.5 <sup>+</sup></p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Exp</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl border border-accent-violet/30 shadow-[0_0_15px_rgba(124,58,237,0.2)] flex items-center gap-3"
              >
                <div className="p-2 bg-accent-violet/20 rounded-lg text-accent-violet">
                  <Code2 size={24} />
                </div>
                <div>
                  <p className="font-bold font-mono text-xl">10 <sup>+</sup></p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-6 text-foreground">
              Passionate about building <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">digital experiences</span>.
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Hello! I'm Natwar, a passionate Frontend Developer with 1.5 years of experience in crafting modern, responsive, and user-centric web applications. My journey in web development started with a deep curiosity for creating interactive interfaces that bring ideas to life.
              </p>
              <p>
                I specialize in the React ecosystem, specifically building fast and SEO-friendly applications with Next.js. I love blending aesthetic design with robust technical implementation, ensuring that every project I touch not only looks stunning but also performs exceptionally well under the hood.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-lg border border-border hover:border-accent-cyan transition-colors">
                <Award className="text-accent-cyan mb-2" size={24} />
                <h4 className="font-bold text-foreground">100%</h4>
                <p className="text-xs text-muted-foreground">Passion & Dedication</p>
              </div>
              <div className="glass-card p-4 rounded-lg border border-border hover:border-accent-violet transition-colors">
                <Code2 className="text-accent-violet mb-2" size={24} />
                <h4 className="font-bold text-foreground">Modern Tech</h4>
                <p className="text-xs text-muted-foreground">React, Next.js, TS</p>
              </div>
              <div className="glass-card p-4 rounded-lg border border-border hover:border-accent-magenta transition-colors">
                <Briefcase className="text-accent-magenta mb-2" size={24} />
                <h4 className="font-bold text-foreground">Problem Solver</h4>
                <p className="text-xs text-muted-foreground">Clean & Scalable Code</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
