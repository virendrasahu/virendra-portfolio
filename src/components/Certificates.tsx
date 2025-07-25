import { ExternalLink, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Certificates = () => {
  const certificates = [
    {
      title: 'Static Website',
      url: 'https://certificates.ccbp.in/academy/static-website?id=BVEQVXXBRL',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753182951/Static_gvtrip.png'
    },
    {
      title: 'Build Your Own Responsive Website',
      url: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=TJTYFASKTR',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183190/Responsive_w69luj.png'
    },
    {
      title: 'Programming Foundations with Python',
      url: 'https://certificates.ccbp.in/academy/programming-foundations-with-python?id=SLVJRUCNYV',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183189/Python_qbbean.png'
    },
    {
      title: 'Introduction to Databases',
      url: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=UFCISZQGDJ',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183190/SQL_rxufmi.png'
    },
    {
      title: 'Dynamic Web Application',
      url: 'https://certificates.ccbp.in/academy/dynamic-web-application?id=PHBCINWEHR',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183189/JavaScript_c8qw7y.png'
    },
    {
      title: 'Responsive Web Design using Flexbox',
      url: 'https://certificates.ccbp.in/academy/responsive-web-design-using-flexbox?id=RFOBNCCVZX',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183190/Responsive_w69luj.png'
    },
    {
      title: 'JavaScript Essentials',
      url: 'https://certificates.ccbp.in/academy/javascript-essentials?id=FGTUHYQSRF',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183189/JS_Essential_xtcn3v.png'
    },
    {
      title: 'Developer Foundations',
      url: 'https://certificates.ccbp.in/academy/developer-foundations?id=FBSWJMXXER',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183189/Developer_Foundation_Git_icpmbo.png'
    },
    {
      title: 'Node.js',
      url: 'https://certificates.ccbp.in/academy/node-js?id=GPKBZXLPLT',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183191/Node_js_Certificate_pptyrc.png'
    },
    {
      title: 'XPM 4.0 Fundamentals',
      url: 'https://certificates.ccbp.in/academy/xpm-4-0-fundamentals?id=TRQYEZFRQT',
      image: 'https://res.cloudinary.com/dmljpnbpu/image/upload/v1753183191/XPM_Fundamentals_onmpn3.png'
    }
  ];

  return (
    <section id="certificates" className="py-20 backdrop-blur-sm bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-primary font-medium">Professional Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-hero-gradient bg-clip-text text-transparent">Certificates</span>
            </h2>
            <div className="w-24 h-1 bg-accent-gradient mx-auto mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional certifications and achievements in web development and programming
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((certificate, index) => (
              <Card 
                key={index} 
                className="group backdrop-blur-md bg-card/80 border-border/20 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => window.open(certificate.url, '_blank')}
              >
                <CardContent className="p-0">
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-3 w-3 text-primary" />
                    </div>
                  </div>
                  
                  {/* Certificate Title */}
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {certificate.title}
                    </h3>
                    <div className="flex items-center mt-2 text-xs text-muted-foreground">
                      <Award className="h-3 w-3 mr-1" />
                      <span>CCBP Academy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              Click on any certificate to view the full credential
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
