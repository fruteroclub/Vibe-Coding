import { useTranslation } from 'react-i18next';

const Problem = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          <span className="text-foreground">{t('problem.title.normal')}</span>
          <span className="gradient-text">{t('problem.title.gradient')}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {(t('problem.items', { returnObjects: true }) as string[]).map((problem, index) => (
            <div
              key={index}
              className="glass-card px-6 py-4 text-center"
            >
              <p className="text-muted-foreground line-through decoration-destructive/50">
                {problem}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-foreground">
          {t('problem.conclusion.prefix')}<span className="gradient-text font-semibold">{t('problem.conclusion.brand')}</span>
        </p>
      </div>
    </section>
  );
};

export default Problem;
