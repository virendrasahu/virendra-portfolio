import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Developer workspace" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-accent-gradient shadow-glow flex items-center justify-center">
            <span className="text-4xl font-bold text-white">VS</span>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Virendra Sahu
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mb-6 font-medium">
            Full Stack Developer | GenAI Enthusiast
          </h2>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building scalable web solutions using MERN stack and AI tools, driven by curiosity and creativity.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
              asChild
            >
              <a href="https://github.com/virendrasahu" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
              asChild
            >
              <a href="https://www.linkedin.com/in/virendra-sahu-14117121a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors"
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;