import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedStat({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const duration = 2200;
    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(ease * value));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(value);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const stats = [
  {
    value: 9,
    suffix: "+",
    label: "Years of Experience",
    sub: "Enterprise software engineering",
    color: "from-blue-500 to-cyan-400",
  },
  {
    value: 99,
    suffix: ".9%",
    label: "Uptime Delivered",
    sub: "Dossier Digi Locker SLA",
    color: "from-violet-500 to-purple-400",
  },
  {
    value: 40,
    suffix: "%",
    label: "Efficiency Gain",
    sub: "HR system via Azure OpenAI",
    color: "from-emerald-500 to-teal-400",
  },
  {
    value: 35,
    suffix: "%",
    label: "Performance Boost",
    sub: "API & query optimization",
    color: "from-orange-500 to-amber-400",
  },
];

export function StatsBar() {
  return (
    <section className="relative py-16 border-y border-border/40 overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-10 letter-spacing-wider"
        >
          Real-world impact across enterprise products
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group flex flex-col items-center text-center p-6 rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r ${stat.color}`} />
              <div className={`text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                <AnimatedStat value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-bold text-foreground text-sm sm:text-base mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
