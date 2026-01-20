import { Check, Calendar, Clock, Globe, Users } from 'lucide-react';

const Pricing = () => {
  const features = [
    '5 sesiones en vivo',
    'Grabaciones permanentes',
    'Soporte Discord <24hrs',
    '2 office hours/semana',
    'Comunidad 1,000+ builders',
    'Certificado verificable',
    'Proyecto portfolio-ready',
    'Templates + código base',
  ];

  const details = [
    { icon: Calendar, text: 'Inicio: Febrero 10, 2025' },
    { icon: Clock, text: 'Horario: Lun/Mié/Vie 7-8:15pm CDMX' },
    { icon: Globe, text: '100% virtual, español' },
    { icon: Users, text: 'Máximo 30 participantes' },
  ];

  return (
    <section id="pricing" className="py-24 relative section-glow">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-foreground">Invierte en tu futuro </span>
          <span className="gradient-text">como creador</span>
        </h2>

        <div className="max-w-lg mx-auto">
          <div className="glass-card p-8 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                🔥 Primeros 20 lugares
              </span>
            </div>

            {/* Price */}
            <div className="mb-8 pt-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-foreground">$0 USD</span>
                <span className="text-xl text-muted-foreground line-through">$150 USD</span>
              </div>
              <p className="text-primary font-medium">100% descuento por tiempo limitado</p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Details */}
            <div className="border-t border-border pt-6 mb-8 space-y-3">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <detail.icon className="w-4 h-4 text-primary" />
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <a href="#" className="btn-primary-gradient w-full block text-center">
                Asegurar mi lugar - GRATIS
              </a>
              <a href="#faq" className="btn-outline-glow w-full block text-center">
                ¿Dudas? → Ver FAQ
              </a>
            </div>

            {/* Footer note */}
            <p className="text-sm text-muted-foreground text-center mt-6">
              Early Bird termina en 20 lugares. Después: $99 USD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
