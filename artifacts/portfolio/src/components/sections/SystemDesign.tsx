import { motion } from "framer-motion";
import { MonitorSmartphone, ArrowRight, ServerCog, Database, Cloud } from "lucide-react";

export function SystemDesign() {
  return (
    <section className="py-24 bg-muted/30 border-y border-border/50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How I Design Scalable Systems</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My architectural approach prioritizes separation of concerns, high availability, and performance.
          </p>
        </motion.div>

        {/* Visual Architecture Diagram */}
        <div className="py-12 relative">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 max-w-5xl mx-auto">
            
            {/* Client */}
            <motion.div 
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="flex flex-col items-center p-6 bg-card rounded-2xl border-2 border-border shadow-lg w-48 relative z-10 hover:border-primary/50 transition-colors duration-300"
            >
              <MonitorSmartphone className="w-10 h-10 text-primary mb-3" />
              <h4 className="font-bold">Client Layer</h4>
              <p className="text-xs text-muted-foreground text-center mt-1">React / Next.js</p>
            </motion.div>

            {/* Arrow */}
            <motion.div 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden lg:flex items-center text-muted-foreground"
            >
              <div className="h-0.5 w-12 bg-border relative overflow-hidden">
                <ArrowRight className="absolute -right-3 -top-2.5 w-6 h-6" />
                <div className="flowing-dot-x" />
              </div>
            </motion.div>
            <div className="lg:hidden h-8 w-0.5 bg-border my-2 relative overflow-hidden">
              <div className="absolute -bottom-1 -left-1.5 w-3 h-3 border-b-2 border-r-2 border-border transform rotate-45" />
              <div className="flowing-dot-y" />
            </div>

            {/* API Gateway / Node */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
              className="flex flex-col items-center p-6 bg-card rounded-2xl border-2 border-primary/50 shadow-lg shadow-primary/10 w-48 relative z-10 animate-pulse-border"
            >
              <ServerCog className="w-10 h-10 text-primary mb-3" />
              <h4 className="font-bold">Services</h4>
              <p className="text-xs text-muted-foreground text-center mt-1">Node.js / Express API</p>
            </motion.div>

            {/* Split Arrows */}
            <div className="hidden lg:flex flex-col justify-center h-48 relative w-20">
               <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }} 
                  className="absolute top-1/4 left-0 h-0.5 bg-border w-full overflow-hidden"
               >
                 <ArrowRight className="absolute -right-3 -top-2.5 w-6 h-6 text-muted-foreground" />
                 <div className="flowing-dot-x" style={{ animationDelay: "0.2s" }} />
               </motion.div>
               <motion.div 
                  initial={{ width: 0 }} 
                  whileInView={{ width: "100%" }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: 0.6 }} 
                  className="absolute bottom-1/4 left-0 h-0.5 bg-border w-full overflow-hidden"
               >
                 <ArrowRight className="absolute -right-3 -top-2.5 w-6 h-6 text-muted-foreground" />
                 <div className="flowing-dot-x" style={{ animationDelay: "0.5s" }} />
               </motion.div>
            </div>
            
            <div className="lg:hidden flex gap-8 my-2">
              <div className="h-8 w-0.5 bg-border relative overflow-hidden">
                <div className="absolute -bottom-1 -left-1.5 w-3 h-3 border-b-2 border-r-2 border-border transform rotate-45" />
                <div className="flowing-dot-y" style={{ animationDelay: "0.2s" }} />
              </div>
              <div className="h-8 w-0.5 bg-border relative overflow-hidden">
                <div className="absolute -bottom-1 -left-1.5 w-3 h-3 border-b-2 border-r-2 border-border transform rotate-45" />
                <div className="flowing-dot-y" style={{ animationDelay: "0.5s" }} />
              </div>
            </div>

            {/* Data & Cloud */}
            <div className="flex lg:flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.7 }}
                className="flex flex-col items-center p-6 bg-card rounded-2xl border-2 border-border shadow-lg w-48 hover:border-accent/50 transition-colors duration-300"
              >
                <Database className="w-10 h-10 text-accent mb-3" />
                <h4 className="font-bold">Database</h4>
                <p className="text-xs text-muted-foreground text-center mt-1">PostgreSQL / Redis</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
                className="flex flex-col items-center p-6 bg-card rounded-2xl border-2 border-border shadow-lg w-48 hover:border-[#0078D4]/50 transition-colors duration-300"
              >
                <Cloud className="w-10 h-10 text-[#0078D4] mb-3" />
                <h4 className="font-bold">Azure Cloud</h4>
                <p className="text-xs text-muted-foreground text-center mt-1">Blob / Functions / OpenAI</p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            { title: "API Design", desc: "RESTful principles with strict validation (Zod), rate limiting, and structured JSON logging." },
            { title: "Scalability", desc: "Stateless microservices architecture ready for horizontal scaling behind load balancers." },
            { title: "Performance", desc: "Query optimization, aggressive caching with Redis, and minimal bundle sizes on the frontend." }
          ].map((pillar, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 1 }}
              className="text-center px-4"
            >
              <h4 className="text-lg font-bold text-foreground mb-2">{pillar.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
