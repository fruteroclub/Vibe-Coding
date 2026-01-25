import { Lightbulb, Rocket, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ForWho = () => {
  const { t } = useTranslation();

  const cards = [
    {
      icon: Lightbulb,
      title: t('forWho.items.0.title'),
      description: t('forWho.items.0.description'),
    },
    {
      icon: Rocket,
      title: t('forWho.items.1.title'),
      description: t('forWho.items.1.description'),
    },
    {
      icon: RefreshCw,
      title: t('forWho.items.2.title'),
      description: t('forWho.items.2.description'),
    },
  ];

  return (
    <section className="py-10 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-card-hover p-4 group"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">
                {card.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
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
