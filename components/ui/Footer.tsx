import { Mail } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from "react-icons/fi";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-border mt-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-bold">
              <span className="text-foreground">Natwar</span>
              <span className="text-accent-cyan">.dev</span>
            </h3>
            <p className="text-sm text-muted-foreground mt-2 font-mono">
              Crafting digital experiences with code.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/natwarprajapti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/natwarprajapati/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com/Natwar__"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent-cyan transition-colors"
              aria-label="Twitter"
            >
               <BsTwitterX size={20} />
            </a>
            <a
              href="mailto:prajapatinatwar06@gmail.com"
              className="text-muted-foreground hover:text-accent-cyan transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-xs text-muted-foreground font-mono">
          <p>&copy; {currentYear} Natwar. All rights reserved.</p>
          <p className="mt-1">
            Built with <span className="text-accent-magenta">Next.js</span> &{" "}
            <span className="text-accent-cyan">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
