import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Certificates from '@/components/Certificates';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GalaxyBackground from '@/components/GalaxyBackground';
import { useTheme } from 'next-themes';

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background relative">
      {theme === 'dark' && <GalaxyBackground />}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Certificates />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
