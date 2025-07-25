import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const { theme } = useTheme();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background - only show in light mode */}
      {theme === 'light' && (
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Developer workspace" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-hero-gradient opacity-90" />
        </div>
      )}

      {/* Content */}
      <div className={`container mx-auto px-4 z-10 text-center ${theme === 'dark' ? 'backdrop-blur-sm bg-background/20 rounded-3xl py-16 border border-white/10' : ''}`}>
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 mt-20 rounded-full overflow-hidden shadow-glow border-4 border-white/20">
            <img 
              src="https://res.cloudinary.com/dmljpnbpu/image/upload/v1753174614/1752389260340_50_-_Copy_1_wv4lcf.jpg" 
              alt="Virendra Sahu - Profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white drop-shadow-lg">
              Virendra Sahu
            </span>
          </h1>

          <h2 className={`text-xl md:text-2xl mb-6 font-medium ${
            theme === 'dark' ? 'text-gray-300' : 'text-foreground'
          }`}>
            Full Stack Developer | GenAI Enthusiast
          </h2>

          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
            theme === 'light' ? 'text-gray-400' : 'text-muted-foreground'
          }`}>
            Building scalable web solutions using MERN stack and AI tools, driven by curiosity and creativity.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button 
              variant="outline" 
              size="icon" 
              className={theme === 'dark' 
                ? "bg-white/10 border-white/20 hover:bg-white/20 text-white" 
                : "border-primary/30 hover:bg-primary/10 text-primary"}
              asChild
            >
              <a href="https://github.com/virendrasahu" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className={theme === 'dark' 
                ? "bg-white/10 border-white/20 hover:bg-white/20 text-white" 
                : "border-primary/30 hover:bg-primary/10 text-primary"}
              asChild
            >
              <a href="https://www.linkedin.com/in/virendra-sahu-14117121a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className={theme === 'dark' 
                ? "bg-white/10 border-white/20 hover:bg-white/20 text-white" 
                : "border-primary/30 hover:bg-primary/10 text-primary"}
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
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
              className={theme === 'dark' 
                ? "bg-white/10 border-white/20 hover:bg-white/20 text-white" 
                : "border-primary/30 hover:bg-primary/10 text-primary"}
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>

            {/* Download Resume Button */}
          
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg rounded-xl border border-white/10"
              onClick={() => {
                const link = document.createElement('a');
                link.href = 'https://drive.google.com/uc?export=download&id=1qLJ8JcBXz6MGc7Rep1cwElUdZCsbwqj4';
                link.download = 'Virendra_Sahu_Resume.pdf';
                link.target = '_blank';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume
            </Button>
         
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className={`animate-bounce transition-colors ${
              theme === 'dark' ? 'text-white/60 hover:text-white' : 'text-foreground/60 hover:text-foreground'
            }`}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
