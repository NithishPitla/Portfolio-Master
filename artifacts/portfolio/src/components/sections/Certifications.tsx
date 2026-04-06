import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    Certificationnumber: "FB7623-54610O",
    skills: ["Core Data Concepts", "Relational vs Non-Relational Data", "Azure Data Services"],
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    Certificationnumber: "BGD027-A94644",
    skills: ["Cloud Concepts", "Azure Services", "Azure Governance and Pricing"],
  },
  {
    title: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    issuer: "Microsoft",
    Certificationnumber: "C53FZA-7AD6DD",
    skills: ["Power Platform Value", "Power BI and Power Apps", "Power Automate and Power Virtual Agents"]
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-muted/20 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl">
            Microsoft Azure certifications that validate my cloud architecture, development, and platform operations expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.article
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card rounded-2xl border border-border/50 p-6 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Credential ID: {cert.Certificationnumber}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="bg-background/60">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
