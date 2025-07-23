import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 backdrop-blur-sm bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          
          <div className="w-24 h-1 bg-accent-gradient mx-auto mb-12" />

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="backdrop-blur-md bg-card/80 border-border/20 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Raipur, Chhattisgarh, India</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">Virendra2609.vs@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="backdrop-blur-md bg-card/80 border-border/20 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Connect With Me</h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-border/30 hover:bg-accent/10 h-16"
                    asChild
                  >
                    <a 
                      href="https://github.com/virendrasahu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <Github className="h-6 w-6 text-primary" />
                      <div className="text-left">
                        <p className="font-semibold text-foreground">GitHub</p>
                        <p className="text-sm text-muted-foreground">github.com/virendrasahu</p>
                      </div>
                    </a>
                  </Button>

                  <Button 
                    variant="outline" 
                    className="w-full justify-start border-border/30 hover:bg-accent/10 h-16"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/virendra-sahu-14117121a/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4"
                    >
                      <Linkedin className="h-6 w-6 text-primary" />
                      <div className="text-left">
                        <p className="font-semibold text-foreground">LinkedIn</p>
                        <p className="text-sm text-muted-foreground">Connect professionally</p>
                      </div>
                    </a>
                  </Button>
                </div>

                <div className="mt-8 pt-6 border-t border-border/20">
                  <p className="text-sm text-muted-foreground text-center">
                    Open to new opportunities and collaborations
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Card className="backdrop-blur-md bg-card/80 border-border/20 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground mb-6">
                  Ready to bring your ideas to life? Let's discuss your next project.
                </p>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/virendra-sahu-14117121a/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Start a Conversation
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
