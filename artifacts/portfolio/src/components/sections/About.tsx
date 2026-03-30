import { motion, useInView, useReducedMotion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Layers, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (inView) {
      if (prefersReducedMotion) {
        setCount(value);
        return;
      }
      let start = 0;
      const duration = 2000;
      const startTime = performance.now();
      
      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing out function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * value);
        setCount(currentCount);
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(update);
    }
  }, [inView, value, prefersReducedMotion]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

const highlights = [
  { icon: Code2, titleNum: 9, suffix: "+ Years", desc: "Of proven engineering experience" },
  { icon: Zap, title: "React & Node.js", desc: "Expert level proficiency" },
  { icon: Cloud, title: "Azure Cloud", desc: "Architecture and deployment" },
  { icon: Layers, title: "Scalable Systems", desc: "Built for high availability" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            With nearly a decade of experience in software engineering, I specialize in architecting 
            and delivering enterprise-grade applications. My expertise spans the entire stack, 
            from crafting fluid React interfaces to designing resilient Node.js microservices 
            deployed on Microsoft Azure. I am passionate about performance optimization, 
            system design, and building tools that create real business value.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="glass-card hover:border-primary/50 transition-colors duration-300 h-full">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    {item.titleNum !== undefined ? (
                      <AnimatedNumber value={item.titleNum} suffix={item.suffix} />
                    ) : (
                      item.title
                    )}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
