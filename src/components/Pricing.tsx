import { Check, Calendar, Clock, Globe, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
  const { t } = useTranslation();

  const features = t('pricing.features', { returnObjects: true }) as string[];
  const details = [
    { icon: Calendar },
    { icon: Clock },
    { icon: Globe },
    { icon: Users },
  ];
  const detailTexts = t('pricing.details', { returnObjects: true }) as Array<{ text: string }>;

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          <span className="text-foreground">{t('pricing.title.normal')}</span>
          <span className="gradient-text">{t('pricing.title.gradient')}</span>
        </h2>

        <div className="max-w-lg mx-auto">
          <div className="glass-card p-6 relative overflow-hidden">

            {/* Price */}
            <div className="mb-6 pt-4">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-bold text-foreground">{t('pricing.price.current')}</span>
                <span className="text-lg text-muted-foreground line-through">{t('pricing.price.original')}</span>
              </div>
              <p className="text-primary font-medium text-sm">{t('pricing.price.badge')}</p>
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
                  <span>{detailTexts[index].text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <a href="https://tally.so/r/gDqk1M" target="_blank" rel="noopener noreferrer" className="btn-primary-gradient w-full block text-center">
                {t('pricing.cta.primary')}
              </a>
              <a href="https://x.com/fruteroclub" target="_blank" rel="noopener noreferrer" className="btn-outline-glow w-full block text-center text-sm py-3">
                {t('pricing.cta.secondary')}
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
