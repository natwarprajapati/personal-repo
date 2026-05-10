"use client";

import { useActionState, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sendEmail } from "@/app/actions/sendEmail";

export function Contact() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);
  const [visibleMessage, setVisibleMessage] = useState<{success?: string, error?: string} | null>(null);

  useEffect(() => {
    if (state?.success || state?.error) {
      setVisibleMessage(state);
      const timer = setTimeout(() => {
        setVisibleMessage(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  return (
    <section id="contact" className="py-24 pb-0 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Let's Build Something" 
          subtitle="Have a project in mind or want to discuss opportunities? I'd love to hear from you." 
          align="center"
        />

        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-heading font-bold mb-8 text-foreground">
              Get In Touch
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-card border border-border rounded-xl text-accent-cyan shadow-[0_0_15px_rgba(0,245,255,0.1)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-foreground mb-1">Email</h4>
                  <a href="mailto:prajapatinatwar06@gmail.com" className="text-muted-foreground hover:text-accent-cyan transition-colors">
                    prajapatinatwar06@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-card border border-border rounded-xl text-accent-violet shadow-[0_0_15px_rgba(124,58,237,0.1)]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-foreground mb-1">Phone</h4>
                  <a href="tel:+917405413108" className="text-muted-foreground hover:text-accent-violet transition-colors">
                    +91 74054-13108
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-card border border-border rounded-xl text-accent-magenta shadow-[0_0_15px_rgba(240,0,184,0.1)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                      Ahmedabad, Gujarat (India)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-2xl border border-border relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan to-accent-violet" />
            
            <form action={formAction} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-muted-foreground ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-muted-foreground ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-violet focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-mono text-muted-foreground ml-1">Phone (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  minLength={10}
                  maxLength={15}
                  pattern="^\+?[0-9\s\-()]{7,15}$"
                  title="Please enter a valid phone number (7 to 15 digits)"
                  placeholder="+91 98765 43210"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9\s\-()+]/g, '');
                  }}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-muted-foreground ml-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent-magenta focus:border-transparent transition-all resize-none"
                />
              </div>

              {visibleMessage?.error && (
                <p className="text-red-500 text-sm font-mono">{visibleMessage.error}</p>
              )}
              {visibleMessage?.success && (
                <p className="text-green-500 text-sm font-mono">{visibleMessage.success}</p>
              )}

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full py-4 bg-foreground text-background font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-accent-cyan hover:text-black transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isPending ? "Sending..." : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
