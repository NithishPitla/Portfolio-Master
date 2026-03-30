import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-transparent relative">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-primary via-accent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-6">Let's build something impactful together</h2>
          <Button size="lg" className="rounded-full px-8 text-base h-12 shadow-lg shadow-primary/20" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </Button>
        </div>
        
        <div className="w-full h-px bg-border mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} Nithish Pitla. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="mailto:nithish.pitla@example.com" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground text-sm flex items-center gap-1 font-medium">
            Designed & Built with <span className="text-accent px-1">♥</span> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
