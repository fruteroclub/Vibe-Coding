import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-border/50 mb-6 animate-fade-in">
          <span className="text-muted-foreground text-sm">{t('hero.badge')}</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">{t('hero.title.prefix')}</span>
          <span className="gradient-text">{t('hero.title.highlight')}</span>
          <br />
          <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">{t('hero.title.suffix')}</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a href="https://tally.so/r/gDqk1M" target="_blank" rel="noopener noreferrer" className="btn-primary-gradient glow-effect">
            {t('hero.cta.primary')}
          </a>
          <a href="#viaje" className="btn-outline-glow">
            {t('hero.cta.secondary')}
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">{t('hero.stats.sessions.value')}</span>
            <span className="text-sm">{t('hero.stats.sessions.label')}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block self-center" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">{t('hero.stats.students.value')}</span>
            <span className="text-sm">{t('hero.stats.students.label')}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-muted-foreground hidden sm:block self-center" />
          <div className="flex items-center gap-2">
            <span className="text-foreground font-semibold">{t('hero.stats.deployment.value')}</span>
            <span className="text-sm">{t('hero.stats.deployment.label')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
