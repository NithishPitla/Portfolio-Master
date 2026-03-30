import { motion } from "framer-motion";
import { Layers, Zap, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Layers,
    title: "Scalable Systems",
    description: "I architect systems that handle millions of requests reliably. From designing distributed microservices to setting up fault-tolerant cloud infrastructure on Azure, I build for tomorrow's scale.",
    bullets: [
      "Microservices with Node.js & Express",
      "Azure-native cloud architecture",
      "99.9% uptime SLA delivery"
    ],
    color: "primary"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "I treat performance as a feature. From database query optimization to React bundle size, I systematically identify and eliminate bottlenecks.",
    bullets: [
      "35–40% API response time improvements",
      "Redis caching & query optimization",
      "Core Web Vitals tuning"
    ],
    color: "accent"
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "I mentor, lead, and deliver. I've guided cross-functional teams to ship production features on deadline without compromising quality.",
    bullets: [
      "Led 4-person engineering teams",
      "Code review & pair programming culture",
      "Agile/Scrum facilitation"
    ],
    color: "muted-foreground"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export function WhatIBring() {
  return (
    <section className="py-24 relative bg-muted/10 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What I Bring to Your Team</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Senior-level impact across the full stack
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Card className="h-full glass-card overflow-hidden group hover:-translate-y-2 transition-transform duration-300 relative border-t-4" style={{ borderTopColor: `hsl(var(--${feature.color}))` }}>
                <div className="absolute inset-0 bg-gradient-to-b from-background/5 to-background/50 z-0" />
                <CardContent className="p-8 relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm" style={{ backgroundColor: `hsl(var(--${feature.color}) / 0.1)`, color: `hsl(var(--${feature.color}))` }}>
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: `hsl(var(--${feature.color}))` }} />
                        <span className="text-sm font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
