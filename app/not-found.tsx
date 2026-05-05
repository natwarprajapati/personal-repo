"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";

const UniverseBackground = dynamic(
  () => import("@/components/ui/UniverseBackground").then((mod) => mod.UniverseBackground),
  { ssr: false }
);

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <UniverseBackground />
      
      <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
        <div className="glass-card p-12 md:p-16 rounded-3xl border border-border/50 max-w-2xl w-full flex flex-col items-center backdrop-blur-xl">
          
          {/* Glitchy 404 Text */}
          <h1 className="text-8xl md:text-9xl font-heading font-extrabold mb-4 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-accent-cyan via-accent-violet to-accent-magenta">
              404
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Lost in Cyberspace
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-md">
            The page you are looking for has vanished into the digital void, or perhaps it never existed at all.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/"
              className="px-8 py-4 bg-foreground text-background font-bold rounded-lg flex items-center gap-2 group transition-all hover:bg-accent-cyan hover:text-black w-full sm:w-auto justify-center"
            >
              <Home size={20} className="group-hover:-translate-y-1 transition-transform" />
              Return Home
            </Link>
            
            <Link
              href="/#projects"
              className="px-8 py-4 border border-border hover:border-accent-violet text-foreground rounded-lg font-bold flex items-center gap-2 group transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:text-accent-violet w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
