import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "EduMentor Lite",
      description: "AI-powered real-time learning assistant designed to help students get instant explanations, answers, and academic support.",
      technologies: ["React.js", "Tailwind CSS", "OpenAI API", "Firebase Auth", "Vercel"],
      liveDemo: "https://edu-mentor-kappa.vercel.app/signup",
      github: "https://github.com/virendrasahu",
      category: "AI & Modern Web Projects"
    },
    {
      title: "BhashaSetu",
      description: "AI-powered multilingual chat translator app that allows users to communicate across different languages seamlessly.",
      technologies: ["Next.js", "Tailwind CSS", "OpenAI API", "Gemini API", "Firebase Auth"],
      liveDemo: "https://bhasa-setu.vercel.app/auth",
      github: "https://github.com/virendrasahu",
      category: "AI & Modern Web Projects"
    },
    {
      title: "Write-Spark-Blogs",
      description: "AI-based blogging assistant that helps users generate engaging blog content on any topic with just a few prompts.",
      technologies: ["React.js", "Tailwind CSS", "OpenAI API", "Responsive Design"],
      liveDemo: "https://viblogwriter.netlify.app",
      github: "https://github.com/virendrasahu",
      category: "AI & Modern Web Projects"
    },
    {
      title: "ViExpense Tracker",
      description: "Personal expense management app that allows users to track income and spending in real-time with dynamic charts.",
      technologies: ["React.js", "Tailwind CSS", "Supabase", "Chart.js", "Netlify"],
      liveDemo: "https://viexpensetracker.netlify.app/auth",
      github: "https://github.com/virendrasahu",
      category: "AI & Modern Web Projects"
    },
    {
      title: "Movies App (Netflix/Amazon Clone)",
      description: "A full-featured movie streaming platform clone using React and TMDb APIs.",
      technologies: ["React.js", "Bootstrap", "TMDb API", "React Slick"],
      liveDemo: "http://cp40primeviapp.ccbp.tech",
      github: "https://github.com/virendrasahu",
      category: "MERN & Web Projects"
    },
    {
      title: "Nxt Trendz (E-Commerce Clone)",
      description: "Clone of Amazon/Flipkart with login, product filters, sorting, and JWT authentication.",
      technologies: ["React.js", "REST APIs", "Routing", "JWT", "Local Storage"],
      liveDemo: "http://vinxttrendzapp.ccbp.tech",
      github: "https://github.com/virendrasahu",
      category: "MERN & Web Projects"
    },
    {
      title: "Emoji Game",
      description: "A memory game using emojis where users click unique emojis to win.",
      technologies: ["React.js", "CSS", "State Management"],
      liveDemo: "http://cp18myemojigame.ccbp.tech",
      github: "https://github.com/virendrasahu",
      category: "MERN & Web Projects"
    },
    {
      title: "Food Munch",
      description: "A static food menu website with product videos, fully responsive using Bootstrap.",
      technologies: ["HTML", "CSS", "Bootstrap"],
      liveDemo: "http://foodiechoice.ccbp.tech",
      github: "https://github.com/virendrasahu",
      category: "MERN & Web Projects"
    }
  ];

  return (
    <section id="projects" className="py-20 backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Featured Projects</span>
          </h2>
          
          <div className="w-24 h-1 bg-accent-gradient mx-auto mb-12" />

          {/* AI & Modern Web Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">AI & Modern Web Projects</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {projects.filter(project => project.category === "AI & Modern Web Projects").map((project, index) => (
                <Card 
                  key={index} 
                  className="backdrop-blur-md bg-card/80 border-border/20 shadow-card hover:shadow-glow transition-all duration-300 group"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="bg-accent/20 text-accent text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      <Button 
                        asChild 
                        size="sm" 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                      >
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        asChild
                        className="border-border/30 hover:bg-accent/10 flex-1"
                      >
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* MERN & Web Projects */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center text-primary mb-8">MERN & Web Projects</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.category === "MERN & Web Projects").map((project, index) => (
              <Card 
                key={index} 
                className="backdrop-blur-md bg-card/80 border-border/20 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-accent/20 text-accent text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      asChild 
                      size="sm" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground flex-1"
                    >
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild
                      className="border-border/30 hover:bg-accent/10 flex-1"
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="border-primary/30 hover:bg-primary/10 text-primary"
            >
              <a 
                href="https://github.com/virendrasahu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="h-5 w-5" />
                <span>View All Projects on GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;