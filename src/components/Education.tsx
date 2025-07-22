import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      institution: "Nxtwave Disruptive Technologies",
      period: "Aug 2022 - Jan 2025",
      degree: "Industry Ready Certification in Full-stack Development",
      icon: "🎓",
      type: "certification"
    },
    {
      institution: "Columbia Institute Of Engineering And Technology, Raipur",
      period: "2020 - 2024",
      degree: "B.Tech in Computer Science Engineering (74.0%)",
      icon: "🎓",
      type: "bachelor"
    },
    {
      institution: "Century Cement Higher Secondary School, Baikunth, Raipur",
      period: "2019 - 2020",
      degree: "Intermediate (MPC) – 71.0%",
      icon: "📘",
      type: "intermediate"
    },
    {
      institution: "Century Cement Higher Secondary School, Tilda, Raipur",
      period: "2017 - 2018",
      degree: "Secondary School Certificate – 78.0%",
      icon: "📗",
      type: "secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Academic Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My academic background and continuous learning journey in technology and development
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {educationData.map((education, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-2xl">
                        {education.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {education.institution}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {education.degree}
                      </p>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{education.period}</span>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    <div className="flex-shrink-0">
                      <div className="bg-secondary/20 px-3 py-1 rounded-full">
                        <Award className="h-4 w-4 text-secondary inline mr-1" />
                        <span className="text-secondary text-sm font-medium capitalize">
                          {education.type}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;