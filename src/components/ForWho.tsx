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
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="glass-card-hover p-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground">
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
