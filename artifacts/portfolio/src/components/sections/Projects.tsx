import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Dossier Digi Locker",
    description: "A secure, highly available document management system designed for enterprise compliance and rapid retrieval.",
    impact: "Achieved 99.9% uptime and improved document retrieval performance by 35%.",
    tags: ["React", "Node.js", "Azure Blob", "PostgreSQL", "Security"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Safe Spaces Platform",
    description: "Comprehensive workplace safety and compliance platform with real-time dashboards and risk prediction ML integrations.",
    impact: "Deployed to 10k+ users, reducing reporting latency by 50%.",
    tags: ["React", "Node.js", "PostgreSQL", "Analytics", "Compliance"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "GenAI Performance Management",
    description: "AI-powered employee appraisal system utilizing advanced language models to generate constructive feedback and summaries.",
    impact: "Improved HR workflow efficiency by 40% globally.",
    tags: ["React", "Node.js", "Azure OpenAI", "GPT-4", "HR Tech"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Mentor-Mentee Matching Platform",
    description: "Enterprise application facilitating algorithmic matching of mentors with mentees based on skills, goals, and capacity.",
    impact: "Drove a 30% increase in active mentorship engagement across the organization.",
    tags: ["React", "Node.js", "PostgreSQL", "Algorithms", "EdTech"],
    demoLink: "#",
    githubLink: "#",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full" />
          </div>
          <p className="text-muted-foreground max-w-lg">
            A selection of production-grade systems I've architected and built, focusing on scale, security, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col glass-card group overflow-hidden border-border/40 hover:border-primary/50">
                <CardContent className="p-8 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <FolderGit2 className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-6 border border-border/50">
                    <p className="text-sm font-medium text-foreground"><span className="text-accent">Impact:</span> {project.impact}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="bg-background/50 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-0 flex gap-4">
                  <Button variant="default" size="sm" asChild className="rounded-full px-6">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      View Demo <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="rounded-full px-6 bg-background">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      GitHub <Github className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
