"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServerCog } from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiSocketdotio,
  SiRedux,
  SiJsonwebtokens,
  SiNodedotjs,
  SiTypescript
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]", border: "hover:border-[#E34F26]", shadow: "hover:shadow-[0_0_15px_rgba(227,79,38,0.3)]", description: "Semantic markup, web accessibility (a11y), SEO best practices, and modern web storage." },
  { name: "CSS3", icon: SiCss, color: "text-[#1572B6]", border: "hover:border-[#1572B6]", shadow: "hover:shadow-[0_0_15px_rgba(21,114,182,0.3)]", description: "Flexbox, CSS Grid, advanced keyframe animations, media queries, and responsive layouts." },
  { name: "React.js", icon: SiReact, color: "text-[#61DAFB]", border: "hover:border-[#61DAFB]", shadow: "hover:shadow-[0_0_15px_rgba(97,218,251,0.3)]", description: "Component-based architecture, Custom Hooks, Context API, Virtual DOM optimization, and complex state management." },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground", border: "hover:border-foreground", shadow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]", description: "Server-side rendering (SSR), Static Site Generation (SSG), App Router, SEO optimization, and API routes." },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#7952B3]", border: "hover:border-[#7952B3]", shadow: "hover:shadow-[0_0_15px_rgba(121,82,179,0.3)]", description: "Responsive grid system, pre-styled components, and rapid responsive web page design." },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", border: "hover:border-[#06B6D4]", shadow: "hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]", description: "Utility-first CSS, responsive mobile-first design, custom themes, and rapid UI prototyping." },
  { name: "Material UI", icon: SiMui, color: "text-[#007FFF]", border: "hover:border-[#007FFF]", shadow: "hover:shadow-[0_0_15px_rgba(0,127,255,0.3)]", description: "Pre-built React components, custom themes, and strictly adhering to Material Design principles." },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-foreground", border: "hover:border-foreground", shadow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]", description: "Real-time bidirectional event-based communication, live chats, and instant notifications." },
  { name: "REST API", icon: ServerCog, color: "text-accent-cyan", border: "hover:border-accent-cyan", shadow: "hover:shadow-[0_0_15px_rgba(0,245,255,0.3)]", description: "API integration, CRUD operations, endpoint testing, and data fetching optimization." },
  { name: "Redux Toolkit", icon: SiRedux, color: "text-[#764ABC]", border: "hover:border-[#764ABC]", shadow: "hover:shadow-[0_0_15px_rgba(118,74,188,0.3)]", description: "Centralized state management, RTK Query for data fetching, slices, and predictable data flow." },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", border: "hover:border-[#3178C6]", shadow: "hover:shadow-[0_0_15px_rgba(49,120,198,0.3)]", description: "Static typing, Interfaces, Generics, and ensuring highly robust and scalable codebases." },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", border: "hover:border-[#339933]", shadow: "hover:shadow-[0_0_15px_rgba(51,153,51,0.3)]", description: "Backend development, Express server creation, and asynchronous event-driven architecture." },
  { name: "Auth (JWT)", icon: SiJsonwebtokens, color: "text-accent-violet", border: "hover:border-accent-violet", shadow: "hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]", description: "Secure authentication, JSON Web Token based authorization, and protected routes implementation." },
];

// Split skills into two rows for a more dynamic marquee layout
const row1 = skills.slice(0, 7);
const row2 = skills.slice(7, 13);

export function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 bg-black/5 dark:bg-black/20 overflow-hidden">

      {/* Inline styles for the marquee animation and hover pause functionality */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 35s linear infinite;
        }
        .pause-on-hover:hover .animate-marquee-left,
        .pause-on-hover:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container mx-auto px-6 mb-16">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="A comprehensive list of the technologies, frameworks, and tools I use to build modern applications. Hover over any skill to see my expertise."
          align="center"
        />
      </div>

      {/* Marquee Container */}
      <div className="w-full flex flex-col gap-8 pause-on-hover">

        {/* Row 1 (RTL) */}
        <div className="w-full flex">
          <div className="flex w-max animate-marquee-left gap-6 px-3">
            {[...row1, ...row1, ...row1].map((skill, index) => (
              <SkillCard key={`r1-${index}`} skill={skill} />
            ))}
          </div>
          <div className="flex w-max animate-marquee-left gap-6 px-3">
            {[...row1, ...row1, ...row1].map((skill, index) => (
              <SkillCard key={`r1-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2 (LTR for dynamic feel, or can be RTL too. Let's make it RTL with different speed) */}
        <div className="w-full flex">
          <div className="flex w-max animate-marquee-right gap-6 px-3">
            {[...row2, ...row2, ...row2].map((skill, index) => (
              <SkillCard key={`r2-${index}`} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// Sub-component for individual skill cards with Tooltip
function SkillCard({ skill }: { skill: any }) {
  return (
    <div className="relative group/card flex-shrink-0">
      {/* The visible small card */}
      <div
        className={`glass-card px-5 py-4 rounded-xl flex items-center gap-3 border border-border cursor-default w-[220px] ${skill.border} ${skill.shadow} transition-all duration-300 hover:bg-white/5 hover:-translate-y-1`}
      >
        <skill.icon size={22} className={`${skill.color}`} />
        <p className="font-mono text-sm font-semibold text-muted-foreground group-hover/card:text-foreground transition-colors">
          {skill.name}
        </p>
      </div>

      {/* The Tooltip (Hover Content) */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] p-4 rounded-xl bg-card border border-border shadow-2xl opacity-0 invisible group-hover/card:opacity-100 group-hover/card:visible transition-all duration-300 z-50 pointer-events-none scale-95 group-hover/card:scale-100 origin-bottom">

        <div className="flex items-center gap-3 mb-3 border-b border-border/50 pb-2">
          <skill.icon size={18} className={`${skill.color}`} />
          <h4 className="font-bold text-sm text-foreground">{skill.name}</h4>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          {skill.description}
        </p>

        {/* Tooltip Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px]">
          <div className="border-8 border-transparent border-t-card"></div>
        </div>
        {/* Tooltip Arrow Border Match */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] -z-10">
          <div className="border-[9px] border-transparent border-t-border"></div>
        </div>

      </div>
    </div>
  );
}
