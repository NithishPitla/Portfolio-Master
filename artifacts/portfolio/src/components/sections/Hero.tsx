import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, TerminalSquare } from "lucide-react";

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
            <motion.div 
              animate={{ x: [0, 30, 0], y: [0, 40, 0] }} 
              transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
              className="absolute top-[40%] left-[60%] w-[20rem] h-[20rem] bg-muted/30 rounded-full blur-[80px] mix-blend-screen" 
            />
          </div>
        )}
      </div>

      {/* Floating Tech Icons */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 pointer-events-none z-0">
          {[
            { icon: "⚛️", top: "25%", left: "10%", speed: 4 },
            { icon: "🟢", top: "60%", left: "15%", speed: 5 },
            { icon: "☁️", top: "30%", left: "85%", speed: 6 },
            { icon: "📦", top: "70%", left: "80%", speed: 4.5 },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl opacity-30"
              style={{ top: item.top, left: item.left }}
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: item.speed, ease: "easeInOut" }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border animate-pulse-border"
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
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-base h-14 px-8 rounded-full shadow-lg shadow-primary/25 shimmer-button" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base h-14 px-8 rounded-full bg-background/50 backdrop-blur-md shimmer-button" onClick={() => alert("Resume download simulated!")}>
              <Download className="mr-2 w-5 h-5" />
              Download Resume
            </Button>
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
