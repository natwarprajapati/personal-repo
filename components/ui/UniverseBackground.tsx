"use client";

import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiNodedotjs,
  SiFramer,
  SiBootstrap,
  SiMui,
} from "react-icons/si";

const ICONS = [
  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiNextdotjs, color: "#ffffff", name: "Next.js" },
  { Icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiHtml5, color: "#E34F26", name: "HTML5" },
  { Icon: SiRedux, color: "#764ABC", name: "Redux" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiFramer, color: "#0055FF", name: "Framer" },
  { Icon: SiBootstrap, color: "#7952B3", name: "Bootstrap" },
  { Icon: SiMui, color: "#007FFF", name: "MUI" },
];

export function UniverseBackground() {
  const [mounted, setMounted] = useState(false);

  // Generate stars only once on mount to avoid hydration mismatch
  const stars = useMemo(() => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      delay: Math.random() * 5,
    }));
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Define orbits (distance from center, speed, direction)
  const orbits = [
    { radius: 160, duration: 35, reverse: false },
    { radius: 270, duration: 55, reverse: true },
    { radius: 390, duration: 75, reverse: false },
    { radius: 530, duration: 100, reverse: true },
  ];

  // Distribute icons across orbits
  const planets = ICONS.map((iconObj, index) => {
    const orbitIndex = index % orbits.length;
    const orbit = orbits[orbitIndex];
    const itemsInOrbit = ICONS.filter((_, i) => i % orbits.length === orbitIndex).length;

    // Find this item's position within its orbit (0, 1, 2, ...)
    const itemsBeforeThisInSameOrbit = ICONS.slice(0, index).filter(
      (_, i) => i % orbits.length === orbitIndex
    ).length;

    // Distribute evenly across 360 degrees, with a slight offset per orbit
    const angle = (360 / itemsInOrbit) * itemsBeforeThisInSameOrbit + (orbitIndex * 15);
    const size = 30 + (index % 3) * 6; // Smaller planet sizes for desktop

    return {
      ...iconObj,
      orbitRadius: orbit.radius,
      duration: orbit.duration,
      reverse: orbit.reverse,
      angle,
      size,
    };
  });

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100 dark:bg-background">
      {/* Light Mode Premium Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-slate-100 to-cyan-100/40 dark:hidden" />
      {/* Starry Background */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full dark:bg-white bg-transparent"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity * 2, star.opacity],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}

      {/* 3D Solar System Container */}
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{ perspective: "10000px" }}
      >
        <div
          className="absolute w-0 h-0 top-[65%] left-[50%] sm:top-1/2 sm:left-[60%] md:left-[65%] scale-[0.45] sm:scale-[0.7] md:scale-100 transition-all duration-1000 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className="absolute w-0 h-0"
            style={{ transform: "rotateX(65deg)", transformStyle: "preserve-3d" }}
          >
            {/* Center glowing nebula / sun */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#F7DF1E]/5 rounded-full blur-[120px] pointer-events-none opacity-0 dark:opacity-100 transition-opacity" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-[#F7DF1E]/10 rounded-full blur-[80px] pointer-events-none opacity-0 dark:opacity-100 transition-opacity" />

            {/* JavaScript Center Sun */}
            <div
              className="absolute top-1/3 left-1/3 flex items-center justify-center"
              style={{ transform: "translate(-50%, -50%) rotateX(-65deg)", transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute -translate-x-1/3 -translate-y-1/2 rounded-full bg-card/90 border backdrop-blur-md flex items-center justify-center shadow-lg"
                style={{
                  width: 60,
                  height: 60,
                  boxShadow: `0 8px 32px #F7DF1E30, inset 0 0 16px #F7DF1E20`,
                  borderColor: `#F7DF1E60`,
                }}
              >
               
                  <svg width="60px" height="60px" viewBox="-58.88 -58.88 373.76 373.76" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g id="SVGRepo_bgCarrier" strokeWidth={0}><rect x="-58.88" y="-58.88" width="373.76" height="373.76" rx="186.88" fill="#F7DF1E"  /></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M0 0h256v256H0V0z" fill="#F7DF1E" /><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" /></g></svg>

              </div>
            </div>

            {/* Orbits Lines */}
            {orbits.map((orbit, i) => (
              <div
                key={`orbit-line-${i}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5 dark:border-white/[0.04] shadow-none dark:shadow-[0_0_30px_rgba(255,255,255,0.01)_inset]"
                style={{
                  width: orbit.radius * 2,
                  height: orbit.radius * 2,
                }}
              />
            ))}

            {/* Planets (Skills) */}
            {planets.map((planet, i) => {
              const rotateValue = planet.reverse ? -360 : 360;

              return (
                <motion.div
                  key={planet.name}
                  className="absolute top-1/2 left-1/2 w-0 h-0"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotate: [0, rotateValue] }}
                  transition={{
                    duration: planet.duration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div
                    className="absolute w-0 h-0"
                    style={{
                      transform: `rotate(${planet.angle}deg) translateX(${planet.orbitRadius}px)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      className="absolute flex items-center justify-center"
                      style={{ transformStyle: "preserve-3d" }}
                      animate={{ rotate: [-planet.angle, -planet.angle - rotateValue] }}
                      transition={{
                        duration: planet.duration,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div
                        className="absolute flex items-center justify-center"
                        style={{ transform: "rotateX(-65deg)", transformStyle: "preserve-3d" }}
                      >
                        <div
                          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-card/80 border backdrop-blur-md flex items-center justify-center shadow-lg"
                          style={{
                            width: planet.size,
                            height: planet.size,
                            boxShadow: `0 4px 16px ${planet.color}30, inset 0 0 10px ${planet.color}20`,
                            borderColor: `${planet.color}40`,
                          }}
                        >
                          <planet.Icon size={planet.size * 0.46} style={{ color: planet.color }} />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top overlay to fade out the bottom seamlessly into the next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background z-10 pointer-events-none opacity-50" />
    </div>
  );
}
