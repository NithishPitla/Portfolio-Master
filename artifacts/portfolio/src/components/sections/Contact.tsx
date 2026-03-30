import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { useSubmitContact, contactSchema, type ContactInput } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

export function Contact() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactInput) => {
    submitMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        reset();
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something went wrong. Please try again later.",
        });
      }
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted/20 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Let's build something impactful</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="mailto:nithish.pitla@example.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg">nithish.pitla@example.com</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-lg">linkedin.com/in/nithishpitla</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                    <Github className="w-5 h-5" />
                  </div>
                  <span className="text-lg">github.com/nithishpitla</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card className="glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-background/50 h-12"
                      {...register("name")}
                    />
                    {errors.name && <p className="text-destructive text-sm">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      placeholder="john@example.com" 
                      className="bg-background/50 h-12"
                      {...register("email")}
                    />
                    {errors.email && <p className="text-destructive text-sm">{errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="How can I help you?" 
                      className="bg-background/50 min-h-[150px] resize-y"
                      {...register("message")}
                    />
                    {errors.message && <p className="text-destructive text-sm">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 rounded-xl text-base"
                    disabled={submitMutation.isPending}
                  >
                    {submitMutation.isPending ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...</>
                    ) : (
                      <><Send className="mr-2 h-5 w-5" /> Send Message</>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
