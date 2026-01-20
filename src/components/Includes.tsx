import { Video, Film, MessageCircle, Calendar, Users, Award, Briefcase, Code } from 'lucide-react';

const Includes = () => {
  const items = [
    { icon: Video, text: '5 sesiones en vivo (75 min c/u)' },
    { icon: Film, text: 'Grabaciones permanentes' },
    { icon: MessageCircle, text: 'Soporte Discord <24hrs' },
    { icon: Calendar, text: '2 office hours por semana' },
    { icon: Users, text: 'Comunidad 1,000+ builders' },
    { icon: Award, text: 'Certificado verificable' },
    { icon: Briefcase, text: 'Proyecto en portfolio' },
    { icon: Code, text: 'Templates de código' },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-foreground">✅ Qué incluye </span>
          <span className="gradient-text">tu inversión</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index}
              className="glass-card p-4 flex items-center gap-3 group hover:border-primary/30 transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Includes;
