import { motion, useMotionValue, useTransform, useMotionTemplate } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { useState } from "react";

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

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // For the spotlight effect
  const [isHovered, setIsHovered] = useState(false);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);
  
  const handleSpotlightMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
    handleMouseMove(e);
  };

  const background = useMotionTemplate`radial-gradient(circle 300px at ${spotlightX}px ${spotlightY}px, rgba(var(--primary), 0.15), transparent 80%)`;

  return (
    <motion.div
      style={{ perspective: 1000 }}
      className="h-full conic-border rounded-xl"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleSpotlightMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMouseLeave();
        }}
        className="h-full relative transition-all duration-300"
      >
        <Card className="h-full flex flex-col glass-card group overflow-hidden border-border/40 hover:border-primary/50 bg-card relative z-10">
          {/* Spotlight Effect */}
          {isHovered && (
            <motion.div 
              className="pointer-events-none absolute -inset-px rounded-xl z-0 transition-opacity duration-300" 
              style={{ background }}
            />
          )}

          <CardContent className="p-8 flex-1 relative z-10" style={{ transform: "translateZ(30px)" }}>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <FolderGit2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <motion.div 
              initial={{ backgroundColor: "rgba(var(--muted), 0.5)" }}
              whileInView={{ backgroundColor: ["rgba(var(--muted), 0.5)", "rgba(var(--primary), 0.2)", "rgba(var(--muted), 0.5)"] }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="rounded-lg p-4 mb-6 border border-border/50"
            >
              <p className="text-sm font-medium text-foreground"><span className="text-accent">Impact:</span> {project.impact}</p>
            </motion.div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-background/50 backdrop-blur-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="px-8 pb-8 pt-0 flex gap-4 relative z-10" style={{ transform: "translateZ(20px)" }}>
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
    </motion.div>
  );
}

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
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
