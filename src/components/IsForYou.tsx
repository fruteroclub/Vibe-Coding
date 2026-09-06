import { Check, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const IsForYou = () => {
  const { t } = useTranslation();

  const forYou = t('isForYou.forYou.items', { returnObjects: true }) as Record<string, string>;
  const notForYou = t('isForYou.notForYou.items', { returnObjects: true }) as Record<string, string>;

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          {t('isForYou.title')}
        </h2>
        <p className="text-center text-muted-foreground mb-8 text-sm">
          {t('isForYou.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* For You */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('isForYou.forYou.title')}</h3>
            <ul className="space-y-3">
              {Object.values(forYou).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div className="glass-card p-6 border-destructive/20">
            <h3 className="text-lg font-semibold text-foreground mb-4">{t('isForYou.notForYou.title')}</h3>
            <ul className="space-y-3">
              {Object.values(notForYou).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsForYou;
