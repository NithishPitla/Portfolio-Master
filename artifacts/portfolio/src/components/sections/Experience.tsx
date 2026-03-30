import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Developer / Product Lead",
    company: "Hexaware Technologies",
    period: "2020 - Present",
    achievements: [
      "Led a 4-person engineering team to deliver 3 mission-critical enterprise applications.",
      "Architected backend services reducing response times by 40% across major endpoints.",
      "Integrated Azure OpenAI solutions resulting in massive efficiency gains for HR clients.",
      "Established CI/CD pipelines reducing deployment time from hours to minutes."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "GGS Technologies",
    period: "2018 - 2020",
    achievements: [
      "Built and maintained scalable REST APIs using Node.js and Express.",
      "Migrated legacy frontend architectures to modern React, improving core web vitals.",
      "Optimized PostgreSQL queries, achieving a 35% performance improvement in reporting.",
      "Collaborated closely with UX designers to implement pixel-perfect interfaces."
    ]
  },
  {
    role: "Junior Developer",
    company: "Various Startups",
    period: "2015 - 2018",
    achievements: [
      "Developed interactive UI components and widgets.",
      "Assisted in database schema design and API integration.",
      "Gained foundational experience in agile methodologies and full-stack environments."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
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

        <div className="relative border-l-2 border-border pl-8 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              
              <div className="bg-card glass-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-lg text-accent font-medium">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-muted text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
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
