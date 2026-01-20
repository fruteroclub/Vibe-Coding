import { Lightbulb, Rocket, RefreshCw } from 'lucide-react';

const ForWho = () => {
  const cards = [
    {
      icon: Lightbulb,
      title: 'Tienes ideas, no código',
      description: 'Valida tu MVP en 2 semanas. No esperes 6 meses aprendiendo sintaxis.',
    },
    {
      icon: Rocket,
      title: 'Emprendedor sin budget',
      description: 'Construye tu v1.0 sin gastar $10K en developers. Hazlo tú mismo.',
    },
    {
      icon: RefreshCw,
      title: 'Cambio de carrera a tech',
      description: 'Prueba si el desarrollo es para ti por $50 y 2 semanas. Sin riesgo.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="glass-card-hover p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
