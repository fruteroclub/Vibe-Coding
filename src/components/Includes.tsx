import { Video, Film, MessageCircle, Calendar, Users, Award, Briefcase, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Includes = () => {
  const { t } = useTranslation();

  const icons = [Video, Film, MessageCircle, Calendar, Users, Award, Briefcase, Code];
  const texts = t('includes.items', { returnObjects: true }) as string[];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="text-foreground">{t('includes.title.normal')}</span>
          <span className="gradient-text">{t('includes.title.gradient')}</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="glass-card p-3 flex items-center gap-2 group hover:border-primary/30 transition-colors"
            >
              <Icon className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors text-xs">
                {texts[index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Includes;
