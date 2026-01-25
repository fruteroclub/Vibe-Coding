import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-8 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {t('finalCTA.title')}
          </h2>

          <p className="text-muted-foreground mb-6 text-sm">
            {t('finalCTA.description')}
          </p>

          <a href="https://tally.so/r/gDqk1M" target="_blank" rel="noopener noreferrer" className="btn-primary-gradient inline-block animate-glow">
            {t('finalCTA.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
