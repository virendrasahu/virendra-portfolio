import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'Bootstrap', category: 'Frontend' },
    { name: 'Tailwind', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Python', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'SQLite', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Git', category: 'Tools' },
    { name: 'VS Code', category: 'Tools' },
    { name: 'Flexbox', category: 'Frontend' },
    { name: 'OOPs', category: 'Concepts' },
  ];

  const tools = [
    'Git & GitHub', 'VS Code', 'Postman', 'Figma', 
    'n8n', '11 Labs', 'Lovable', 'MCP Server',
    'Supbase', 'Lovable', 'Firebase', 'Netlify',
    'Vercel', 'Render', 
  ];

  const softSkills = [
    'Problem-Solving', 'Teamwork', 'Communication', 'Continuous Learning'
  ];

  const skillCategories = {
    Frontend: technicalSkills.filter(skill => skill.category === 'Frontend'),
    Backend: technicalSkills.filter(skill => skill.category === 'Backend'),
    Database: technicalSkills.filter(skill => skill.category === 'Database'),
    Cloud: technicalSkills.filter(skill => skill.category === 'Cloud'),
    Tools: technicalSkills.filter(skill => skill.category === 'Tools'),
    Concepts: technicalSkills.filter(skill => skill.category === 'Concepts'),
  };

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>
          
          <div className="w-24 h-1 bg-accent-gradient mx-auto mb-12" />

          {/* Technical Skills */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <Card key={category} className="bg-card-gradient border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge 
                          key={skill.name} 
                          variant="secondary" 
                          className="bg-accent/20 text-accent hover:bg-accent/30 transition-colors"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Tools & Technologies</h3>
            <Card className="bg-card-gradient border-border/20 shadow-card">
              <CardContent className="p-8">
                <div className="flex flex-wrap justify-center gap-3">
                  {tools.map((tool) => (
                    <Badge 
                      key={tool} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-colors text-sm py-2 px-4"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Soft Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill) => (
                <Card key={skill} className="bg-card-gradient border-border/20 shadow-card hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl">💡</span>
                    </div>
                    <h4 className="font-semibold text-foreground">{skill}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
