"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const experiences = [
  {
    role: "Frontend Web Developer",
    company: "Ais Technolabs",
    duration: "Dec 2024 - Present",
    description: [
      "Developed and maintained a scalable Next.js application using React, TypeScript, and Redux, ensuring optimal performance and seamless user experience.",
      "Implemented secure authentication, payment integrations, dynamic content loading, and multi-language support to enhance application functionality.",
      "Enhanced UI/UX using Material UI , Tailwind CSS and Bootstrap, while collaborating with backend teams to deliver robust and reliable features.",
      "Adopted modern frontend tools and best practices to continuously improve code quality, performance, and development efficiency.",

    ],
    color: "accent-cyan",
  },
  // {
  //   role: "Junior Web Developer",
  //   company: "Creative Agency X",
  //   duration: "Oct 2022 - Dec 2023",
  //   description: [
  //     "Developed interactive landing pages and marketing websites for diverse clients, focusing on high conversion rates and accessibility.",
  //     "Utilized Three.js and WebGL to create immersive 3D web experiences for premium brand campaigns.",
  //     "Optimized website performance by implementing lazy loading, image optimization, and efficient caching strategies.",
  //   ],
  //   color: "accent-violet",
  // },
];

export function Experience() {
  return (
    <section id="experience" className="py-10 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and the impact I've made along the way."
          align="center"
        />

        <div className="max-w-3xl mx-auto relative mt-16">
          {/* Vertical Line */}
          {experiences.length > 1 && (
            <>
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:hidden" />
            </>
          )}

          {experiences.map((exp, index) => {
            const isSingle = experiences.length === 1;
            const isEven = index % 2 === 0;
            const colorClass = exp.color === "accent-cyan" ? "bg-accent-cyan" : "bg-accent-violet";
            const shadowClass = exp.color === "accent-cyan" ? "shadow-[0_0_15px_rgba(0,245,255,0.5)]" : "shadow-[0_0_15px_rgba(124,58,237,0.5)]";

            return (
              <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${isSingle ? '' : 'mb-16 md:mb-24'}`}>

                {/* Timeline Dot */}
                {!isSingle && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
                    className={`absolute left-6 md:left-1/2 w-4 h-4 rounded-full ${colorClass} ${shadowClass} border-4 border-background -translate-x-1/2 z-10`}
                  />
                )}

                {/* Content Left (Even) or Right (Odd) on Desktop */}
                <div className={`w-full flex ${isSingle ? 'justify-center' : 'md:w-1/2 pl-16 md:pl-0'} ${!isSingle && isEven ? 'md:justify-end md:pr-12' : ''} ${!isSingle && !isEven ? 'md:justify-start md:pl-12 md:ml-auto' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isSingle ? 0 : (isEven ? -50 : 50), y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.6 }}
                    className={`glass-card p-6 md:p-8 rounded-2xl border border-border hover:border-border/80 transition-colors relative group ${isSingle ? 'w-full max-w-2xl' : 'w-full'}`}
                  >
                    {/* Hover Glow Background */}
                    <div className={`absolute inset-0 -z-10 bg-${exp.color}/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <h3 className={`text-2xl font-bold font-heading mb-1 text-${exp.color}`}>
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-foreground mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-sm font-mono text-muted-foreground mb-4">
                      {exp.duration}
                    </p>

                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex gap-3">
                          <span className={`text-${exp.color} mt-1`}>▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
