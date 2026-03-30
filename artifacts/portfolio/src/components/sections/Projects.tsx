import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderGit2, X } from "lucide-react";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const projects = [
  {
    title: "Dossier Digi Locker",
    description: "A secure, highly available document management system designed for enterprise compliance and rapid retrieval.",
    impact: "Achieved 99.9% uptime and improved document retrieval performance by 35%.",
    tags: ["React", "Node.js", "Azure Blob", "PostgreSQL", "Security"],
    demoLink: "#",
    githubLink: "#",
    caseStudy: {
      problem: "Enterprise clients needed a secure, compliant document management system with fast retrieval and zero downtime.",
      solution: "Architected a React + Node.js system with Azure Blob Storage for document management, implementing role-based access, encryption at rest, and CDN delivery.",
      impactMetrics: [
        "99.9% uptime SLA maintained",
        "35% faster document retrieval",
        "200+ enterprise users",
        "Zero security incidents"
      ]
    }
  },
  {
    title: "Safe Spaces Platform",
    description: "Comprehensive workplace safety and compliance platform with real-time dashboards and risk prediction ML integrations.",
    impact: "Deployed to 10k+ users, reducing reporting latency by 50%.",
    tags: ["React", "Node.js", "PostgreSQL", "Analytics", "Compliance"],
    demoLink: "#",
    githubLink: "#",
    caseStudy: {
      problem: "Organizations lacked real-time visibility into workplace safety incidents and compliance status across distributed teams.",
      solution: "Built a real-time dashboard platform with risk prediction, incident reporting workflows, and analytics using PostgreSQL and Node.js.",
      impactMetrics: [
        "10,000+ active users",
        "50% reduction in reporting latency",
        "Risk incidents surfaced 3x faster"
      ]
    }
  },
  {
    title: "GenAI Performance Management",
    description: "AI-powered employee appraisal system utilizing advanced language models to generate constructive feedback and summaries.",
    impact: "Improved HR workflow efficiency by 40% globally.",
    tags: ["React", "Node.js", "Azure OpenAI", "GPT-4", "HR Tech"],
    demoLink: "#",
    githubLink: "#",
    caseStudy: {
      problem: "Manual HR appraisal processes were slow, biased, and failed to scale across global teams.",
      solution: "Integrated Azure OpenAI (GPT-4) into the appraisal workflow to auto-generate structured feedback, summaries, and goal recommendations.",
      impactMetrics: [
        "40% improvement in HR team efficiency",
        "5,000+ appraisals processed",
        "Manager time savings of 2hrs/review cycle"
      ]
    }
  },
  {
    title: "Mentor-Mentee Matching Platform",
    description: "Enterprise application facilitating algorithmic matching of mentors with mentees based on skills, goals, and capacity.",
    impact: "Drove a 30% increase in active mentorship engagement across the organization.",
    tags: ["React", "Node.js", "PostgreSQL", "Algorithms", "EdTech"],
    demoLink: "#",
    githubLink: "#",
    caseStudy: {
      problem: "Large organizations struggled to match mentors and mentees effectively, resulting in low engagement and poor outcomes.",
      solution: "Designed an algorithmic matching engine with skills-based compatibility scoring, calendar integration, and progress analytics dashboards.",
      impactMetrics: [
        "30% increase in active mentorship engagement",
        "500+ matches facilitated",
        "4.8/5 average satisfaction score"
      ]
    }
  }
];

function ProjectCard({ project, onViewCaseStudy }: { project: typeof projects[0], onViewCaseStudy: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className="h-full conic-border rounded-xl">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="h-full relative transition-all duration-300"
      >
        <Card className="h-full flex flex-col glass-card group overflow-hidden border-border/40 hover:border-primary/50 bg-card relative z-10">
          <CardContent className="p-8 flex-1 relative z-10">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <FolderGit2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pb-4">
              {project.tags.map(tag => (
                <Badge key={tag} variant="outline" className="bg-background/50 backdrop-blur-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="px-8 pb-8 pt-0 flex gap-4 relative z-10">
            <Button variant="default" size="sm" onClick={onViewCaseStudy} className="rounded-full px-6">
              View Case Study
            </Button>
            <Button variant="outline" size="sm" asChild className="rounded-full px-6 bg-background">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub <Github className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
}

function CaseStudyModal({ project, onClose }: { project: typeof projects[0] | null, onClose: () => void }) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [project]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-card w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl border border-border/50 relative flex flex-col"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-card/90 backdrop-blur-md border-b border-border p-6 flex items-start justify-between z-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3">{project.title}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-6 sm:p-8 space-y-10">
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center font-bold">1</div>
                The Problem
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.caseStudy.problem}
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">2</div>
                My Solution
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.caseStudy.solution}
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold">3</div>
                Impact & Results
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.caseStudy.impactMetrics.map((metric, i) => {
                  const match = metric.match(/^([\d.,+%]+)(.*)/);
                  const number = match ? match[1] : "";
                  const text = match ? match[2] : metric;
                  
                  return (
                    <div key={i} className="bg-muted/30 p-4 rounded-xl border border-border/50">
                      {number ? (
                        <>
                          <div className="text-3xl font-black text-primary mb-1">{number}</div>
                          <div className="text-sm font-medium text-foreground">{text}</div>
                        </>
                      ) : (
                        <div className="text-sm font-medium text-foreground flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                          {metric}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
          
          <div className="p-6 border-t border-border bg-muted/10 flex justify-end">
            <Button onClick={onClose} variant="outline" className="rounded-full">
              Close Case Study
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
              <ProjectCard project={project} onViewCaseStudy={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </div>
      </div>
      
      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
