import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, TerminalSquare, CheckCircle2 } from "lucide-react";

const textReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const charReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const titleWords = "Hi, I'm Nithish Pitla.".split(" ");

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Hero Background"
          className="w-full h-full object-cover opacity-15 dark:opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
        
        {/* Floating gradient orbs */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }} 
              transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
              className="absolute top-[20%] left-[20%] w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[100px] mix-blend-screen" 
            />
            <motion.div 
              animate={{ x: [0, -50, 0], y: [0, 50, 0] }} 
              transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
              className="absolute bottom-[20%] right-[20%] w-[25rem] h-[25rem] bg-accent/20 rounded-full blur-[100px] mix-blend-screen" 
            />
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
            >
              <TerminalSquare className="w-4 h-4" />
              <span>Available for new opportunities</span>
            </motion.div>

            <motion.div
              variants={textReveal}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-6 text-foreground flex flex-wrap gap-x-4 gap-y-2"
            >
              {titleWords.map((word, i) => (
                <motion.span key={i} variants={charReveal} className={word.includes('Nithish') || word.includes('Pitla') ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent drop-shadow-sm' : ''}>
                  {word}
                </motion.span>
              ))}
              <motion.span variants={charReveal} className="w-full mt-2 block text-4xl sm:text-5xl lg:text-6xl text-foreground">
                Senior Full Stack Developer
              </motion.span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            >
              I build scalable, high-performance web applications and robust backend systems using React, Node.js, and Azure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button size="lg" className="text-base h-14 px-8 rounded-full shadow-lg shadow-primary/25 shimmer-button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8 rounded-full bg-background/50 backdrop-blur-md shimmer-button border-border/50 hover:bg-muted" onClick={() => alert("Resume download simulated!")}>
                <Download className="mr-2 w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* Trust Indicator Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 text-sm font-medium text-muted-foreground"
            >
              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                9+ Years Experience
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                React Specialist
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Node.js Expert
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <div className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border/50">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                Azure Cloud
              </div>
            </motion.div>
          </div>

          {/* Code Block (Desktop Only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block w-full"
          >
            <div className="rounded-xl overflow-hidden border border-border/50 bg-[#0d1117] shadow-2xl shadow-black/50">
              <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-border/20">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="mx-auto text-xs text-muted-foreground font-mono">developer.ts</div>
              </div>
              <div className="p-6 overflow-x-auto text-sm sm:text-base font-mono leading-relaxed">
                <pre className="text-[#e6edf3]">
                  <span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">developer</span> <span className="text-[#ff7b72]">=</span> {'{'}
                  <br />
                  {'  '}name: <span className="text-[#a5d6ff]">"Nithish Pitla"</span>,
                  <br />
                  {'  '}role: <span className="text-[#a5d6ff]">"Senior Full Stack Dev"</span>,
                  <br />
                  {'  '}stack: [<span className="text-[#a5d6ff]">"React"</span>, <span className="text-[#a5d6ff]">"Node.js"</span>, <span className="text-[#a5d6ff]">"Azure"</span>],
                  <br />
                  {'  '}yearsExp: <span className="text-[#79c0ff]">9</span>,
                  <br />
                  {'  '}focus: <span className="text-[#a5d6ff]">"Scalable Systems"</span>
                  <br />
                  {'}'};
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
