import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React 19", "TypeScript", "Next.js", "Material UI", "Tailwind CSS", "React Three Fiber", "Redux", "Zustand"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth", "Microservices", "WebSockets"]
  },
  {
    title: "Database & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Azure SQL", "Prisma", "Drizzle ORM"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Microsoft Azure", "Azure Blob Storage", "Azure Functions", "Azure OpenAI", "Docker", "CI/CD", "GitHub Actions"]
  },
  {
    title: "Architecture & Concepts",
    skills: ["System Design", "Scalability", "Performance Optimization", "TDD", "Agile/Scrum", "Security Best Practices"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={idx === skillCategories.length - 1 ? "lg:col-span-2" : ""}
            >
              <Card className="h-full glass-card">
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
