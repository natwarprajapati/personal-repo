"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Fox-Play",
    description: "Built a modern dark-themed casino-style web application with dynamic game categorization, real-time leaderboards, and a bonus-driven user experience. Integrated multi-method payment flows and implemented gamification features like rewards, rankings, and promotions to enhance user engagement and retention.",
    tech: ["Next.js", "MUI", "bootstrap", "Redux Toolkit", "Socket.io", "TypeScript"],
    github: "https://github.com",
    demo: "https://fox-play.com/",
    image: "/assets/projectbanner/Fox-Play.webp",
    color: "from-accent-cyan to-blue-500",
  },
  {
    title: "Dalal",
    description: "Real-time online casino platform, featuring live dealer games, dynamic game categories, and localized payment integration. Includes bonus-driven engagement systems, leaderboard-based gamification, and a fully responsive design optimized for seamless mobile and desktop experiences.",
    tech: ["Next.js", "Socket.io", "tailwind", "Redux Toolkit", "TypeScript"],
    github: "https://github.com",
    demo: "https://dalal.live/bd/en",
    image: "/assets/projectbanner/Dalal.webp",

    color: "from-accent-violet to-purple-600",
  },
  {
    title: "My Local Law",
    description: "Developed a CMS-driven legal platform with dynamic service pages and blog management, featuring consultation workflows and location-based lawyer discovery with a scalable, SEO-friendly architecture.",
    tech: ["Next.js", "TypeScript", "Redux Toolkit", "bootstrap" ,"Formik"],
    github: "https://github.com",
    demo: "https://mylocallaw.com/",
    image: "/assets/projectbanner/my-local-law.webp",
    color: "from-accent-magenta to-pink-600",
  },
];

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 40 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="relative group w-full perspective-1000"
    >
      <div
        className="glass-card rounded-2xl overflow-hidden border border-border h-full flex flex-col relative"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Glowing Top Border */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-2xl font-bold font-heading mb-3 text-foreground group-hover:text-accent-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 text-xs font-mono bg-card/50 border border-border rounded text-muted-foreground">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {/* <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-violet transition-colors"
            >
              <Github size={18} />
              <span>Source</span>
            </a> */}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-cyan transition-colors ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Behind Glow Effect */}
      <div
        className={`absolute inset-0 -z-10 bg-gradient-to-r ${project.color} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}
        style={{ transform: "translateZ(-10px)" }}
      />
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Work"
          subtitle="A selection of my best projects showcasing my skills in frontend development, design, and architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <TiltCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
