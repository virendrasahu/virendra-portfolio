import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-hero-gradient bg-clip-text text-transparent">About Me</span>
          </h2>
          
          <div className="w-24 h-1 bg-accent-gradient mx-auto mb-12" />

          <Card className="bg-card-gradient border-border/20 shadow-card">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="order-2 md:order-1 space-y-6">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> from 
                  <span className="text-primary font-semibold"> Raipur, Chhattisgarh</span>, with experience in 
                  building modern web applications and mentoring learners at 
                  <span className="text-primary font-semibold"> Nxtwave</span>.
                </p>

                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  I specialize in the <span className="text-primary font-semibold">MERN stack</span>, 
                  <span className="text-primary font-semibold"> Python</span>, and integrating 
                  <span className="text-primary font-semibold"> Generative AI tools</span> into real-world web projects.
                </p>

                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    What sets me apart is my ability to <span className="text-primary font-semibold">simplify complex topics</span>, 
                    my <span className="text-primary font-semibold">curiosity to explore emerging tech</span>, and my drive to create 
                    <span className="text-primary font-semibold"> clean, scalable, and impactful solutions</span>.
                  </p>
                </div>
                
                <div className="order-1 md:order-2 flex justify-center">
                  <div className="relative">
                    <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-card">
                      <img 
                        src="https://res.cloudinary.com/dmljpnbpu/image/upload/v1753098000/1752389260340_50_ofye9e.jpg" 
                        alt="Virendra Sahu - Full Image" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -inset-4 bg-accent-gradient rounded-3xl opacity-20 -z-10"></div>
                  </div>
                </div>
              </div>

              <div className="text-center">

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">💻</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Development</h3>
                    <p className="text-muted-foreground">Full-stack web applications with modern technologies</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">🤖</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">AI Integration</h3>
                    <p className="text-muted-foreground">Implementing GenAI tools in practical solutions</p>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold">👨‍🏫</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Mentoring</h3>
                    <p className="text-muted-foreground">Helping others learn and grow in tech</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
