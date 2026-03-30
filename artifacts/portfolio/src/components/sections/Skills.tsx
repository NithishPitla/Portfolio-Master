import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Database, Cloud, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: ["⚛️ React 19", "📘 TypeScript", "▲ Next.js", "🎨 Material UI", "🌊 Tailwind CSS", "🧊 React Three Fiber", "🔄 Redux", "🐻 Zustand"]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["🟢 Node.js", "🚂 Express.js", "🔌 REST APIs", "🕸️ GraphQL", "🔑 JWT Auth", "🧱 Microservices", "⚡ WebSockets"]
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: ["🐘 PostgreSQL", "🍃 MongoDB", "🔴 Redis", "☁️ Azure SQL", " Prisma", "💧 Drizzle ORM"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["☁️ Microsoft Azure", "📦 Azure Blob Storage", "⚡ Azure Functions", "🧠 Azure OpenAI", "🐳 Docker", "🔄 CI/CD", "🐙 GitHub Actions"]
  },
  {
    title: "Architecture & Concepts",
    icon: GitBranch,
    skills: ["📐 System Design", "📈 Scalability", "⚡ Performance Optimization", "🧪 TDD", "🏃 Agile/Scrum", "🔒 Security Best Practices"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  }
};

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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={idx === skillCategories.length - 1 ? "lg:col-span-2" : ""}
            >
              <div className="conic-border rounded-xl h-full">
                <Card className="h-full glass-card relative z-10 bg-card">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <category.icon className="w-5 h-5" />
                      </div>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {category.skills.map((skill) => (
                        <motion.div key={skill} variants={badgeVariants}>
                          <Badge 
                            variant="secondary" 
                            className="px-3 py-1.5 text-sm bg-secondary/50 hover:bg-secondary transition-colors"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
