import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Developer / Product Lead",
    company: "Hexaware Technologies",
    logoText: "HT",
    period: "Aug 2022 - Present",
    achievements: [
      "Architecting and leading development of scalable web platforms using React, Node.js, and Azure services.",
      "Designed and implemented REST APIs with secure authentication and optimized PostgreSQL queries.",
      "Led a 5-member development team, managing end-to-end delivery and stakeholder communication.",
      "Improved application performance by 35% through frontend optimization and efficient API design.",
      "Integrated AI-based modules using Azure OpenAI to automate HR workflows and improve productivity."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "GGS Technologies (Client - HAL)",
    logoText: "GG",
    period: "Apr 2021 - Aug 2022",
    achievements: [
      "Designed and developed a full-stack training configurator platform using React and Node.js.",
      "Built modular APIs and integrated frontend with backend services for seamless configuration workflows.",
      "Optimized data flow and reduced configuration time significantly through efficient architecture."
    ]
  },
  {
    role: "Full Stack / Unity Developer",
    company: "WoWExp Technologies",
    logoText: "WX",
    period: "Oct 2019 - Apr 2020",
    achievements: [
      "Developed interactive applications integrating frontend dashboards with backend services.",
      "Contributed to system design and implementation for client-facing solutions."
    ]
  },
  {
    role: "Software Engineer",
    company: "Cyient Ltd",
    logoText: "CY",
    period: "Dec 2018 - Oct 2019",
    achievements: [
      "Developed enterprise-level applications and simulation tools for aerospace clients.",
      "Collaborated with cross-functional teams to deliver high-quality solutions within deadlines."
    ]
  },
  {
    role: "Software Developer",
    company: "CHRP India Pvt Ltd",
    logoText: "CI",
    period: "Mar 2018 - Sep 2018",
    achievements: [
      "Built industrial training and enterprise applications with a focus on usability and performance."
    ]
  },
  {
    role: "Unity Developer",
    company: "Puffythumb Game Studio Pvt Ltd",
    logoText: "PG",
    period: "Nov 2016 - Dec 2017",
    achievements: [
      "Developed 10+ mobile applications with over 1M downloads."
    ]
  },
  {
    role: "Junior Developer",
    company: "Laxmimayee Technologies",
    logoText: "LT",
    period: "Sep 2015 - Oct 2016",
    achievements: [
      "Developed mobile applications and simulation-based solutions using C# and Unity."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Professional Journey</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="relative pl-8 ml-4 md:ml-0 space-y-12">
          {/* Animated vertical line */}
          <motion.div 
            className="absolute left-[39px] md:left-[39px] top-4 bottom-0 w-0.5 bg-border origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="relative z-10"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-4 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className={`w-1.5 h-1.5 rounded-full bg-primary ${idx === 0 ? 'animate-ping' : ''}`} />
              </div>
              
              <div className="bg-card glass-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-colors relative">
                
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <div className="pr-14 md:pr-0">
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-lg text-accent font-medium mt-1">{exp.company}</p>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground whitespace-nowrap mt-3">
                      {exp.period}
                    </span>
                  </div>
                  
                  {/* Company Logo Placeholder */}
                  <div className="absolute top-6 right-6 md:relative md:top-0 md:right-0">
                    <div className="w-12 h-12 rounded-xl bg-muted text-foreground text-lg font-black border border-border flex items-center justify-center shadow-sm">
                      {exp.logoText}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6 pt-6 border-t border-border/50">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start text-muted-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (idx * 0.2) + (i * 0.1) + 0.3 }}
                    >
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
