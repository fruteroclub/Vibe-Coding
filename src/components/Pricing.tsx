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
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          <span className="text-foreground">Invierte en tu futuro </span>
          <span className="gradient-text">como creador</span>
        </h2>

        <div className="max-w-lg mx-auto">
          <div className="glass-card p-6 relative overflow-hidden">

            {/* Price */}
            <div className="mb-6 pt-4">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-bold text-foreground">$0 USD</span>
                <span className="text-lg text-muted-foreground line-through">$150 USD</span>
              </div>
              <p className="text-primary font-medium text-sm">100% descuento por tiempo limitado</p>
            </div>

            {/* Features */}
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-xs">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Details */}
            <div className="border-t border-border pt-4 mb-6 grid grid-cols-2 gap-2">
              {details.map((detail, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <detail.icon className="w-3 h-3 text-primary" />
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <a href="https://tally.so/r/gDqk1M" target="_blank" rel="noopener noreferrer" className="btn-primary-gradient w-full block text-center">
                Asegurar mi lugar
              </a>
              <a href="#faq" className="btn-outline-glow w-full block text-center text-sm py-3">
                ¿Dudas? → Ver FAQ
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
