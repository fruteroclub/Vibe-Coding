import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session4 = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          {t('session4.title')}
        </h1>

        <p className="text-xl text-orange-400 font-semibold mb-8">
          {t('session4.subtitle')}
        </p>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
          <p>
            {t('session4.intro.p1')}
          </p>

          <p className="text-foreground font-semibold text-xl text-center my-6">
            {t('session4.intro.p2')}
          </p>

          <p>
            {t('session4.intro.p3')}
          </p>
        </div>

        {/* ¿Qué vas a aprender? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          {t('session4.whatYouWillLearn.title')}
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          {t('session4.whatYouWillLearn.subtitle')}
        </p>

        <div className="space-y-8 mb-12">
          {/* 1. Cómo una app puede "ver" */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('session4.whatYouWillLearn.items.0.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('session4.whatYouWillLearn.items.0.p1')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('session4.whatYouWillLearn.items.0.p2')}
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('session4.whatYouWillLearn.items.0.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('session4.whatYouWillLearn.items.0.footer') }} />
          </div>

          {/* 2. Evaluar acciones, no solo clicks */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('session4.whatYouWillLearn.items.1.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('session4.whatYouWillLearn.items.1.p1')}
            </p>
            <p className="text-muted-foreground mb-2">{t('session4.whatYouWillLearn.items.1.subtitle')}</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('session4.whatYouWillLearn.items.1.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('session4.whatYouWillLearn.items.1.footer') }} />
          </div>

          {/* 3. Recompensar el esfuerzo */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('session4.whatYouWillLearn.items.2.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('session4.whatYouWillLearn.items.2.p1')}
            </p>
            <p className="text-muted-foreground mb-2">{t('session4.whatYouWillLearn.items.2.subtitle')}</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('session4.whatYouWillLearn.items.2.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              {t('session4.whatYouWillLearn.items.2.footer')}
            </p>
          </div>

          {/* 4. Progreso acumulado y evolución */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('session4.whatYouWillLearn.items.3.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('session4.whatYouWillLearn.items.3.p1')}
            </p>
            <p className="text-foreground font-semibold text-lg text-center mb-4">
              {t('session4.whatYouWillLearn.items.3.highlight')}
            </p>
            <p className="text-muted-foreground mb-2">{t('session4.whatYouWillLearn.items.3.subtitle')}</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('session4.whatYouWillLearn.items.3.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              {t('session4.whatYouWillLearn.items.3.footer')}
            </p>
          </div>

          {/* 5. Mirar hacia atrás para avanzar */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('session4.whatYouWillLearn.items.4.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('session4.whatYouWillLearn.items.4.p1')}
            </p>
            <p className="text-muted-foreground mb-2">{t('session4.whatYouWillLearn.items.4.subtitle')}</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('session4.whatYouWillLearn.items.4.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('session4.whatYouWillLearn.items.4.footer') }} />
          </div>
        </div>

        {/* ¿Qué vas a hacer? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          {t('session4.whatYouWillDo.title')}
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          {t('session4.whatYouWillDo.subtitle')}
        </p>

        <ul className="space-y-3 text-muted-foreground ml-6 mb-8">
          {t('session4.whatYouWillDo.list', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground text-lg mb-12">
          {t('session4.whatYouWillDo.footer')}
        </p>

        {/* ¿Qué se espera que logres? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          {t('session4.whatYouWillAchieve.title')}
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          {t('session4.whatYouWillAchieve.subtitle')}
        </p>

        <ul className="space-y-3 text-muted-foreground ml-6 mb-8">
          {t('session4.whatYouWillAchieve.list', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="glass-card p-6 border-l-4 border-orange-400 bg-orange-500/5 mb-12">
          <p className="text-foreground text-lg font-semibold">
            {t('session4.whatYouWillAchieve.important.intro')}
          </p>
          <p className="text-foreground text-xl mt-2">
            {t('session4.whatYouWillAchieve.important.message')}
          </p>
        </div>

        {/* Por qué esta sesión es importante */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          {t('session4.whyImportant.title')}
        </h2>

        <div className="glass-card p-8 border-l-4 border-orange-400 bg-primary/5 mb-12">
          <p className="text-foreground text-lg mb-4">
            {t('session4.whyImportant.intro')}
          </p>
          <p className="text-foreground text-lg mb-4">
            {t('session4.whyImportant.p1')}
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-2">
            {t('session4.whyImportant.from')}
          </p>
          <p className="text-foreground text-lg text-center mb-4">
            {t('session4.whyImportant.middle')}
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-4">
            {t('session4.whyImportant.to')}
          </p>
          <p className="text-foreground text-lg">
            {t('session4.whyImportant.outro')}
          </p>
        </div>

        {/* Puente hacia Sesión 5 */}
        <div className="glass-card p-8 mt-12 border-2 border-orange-400/30">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            {t('session4.bridge.title')}
          </h2>
          <p className="text-foreground text-lg mb-4" dangerouslySetInnerHTML={{ __html: t('session4.bridge.intro') }} />

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">
              {t('session4.bridge.subtitle')}
            </h3>
            <ul className="space-y-2 text-foreground">
              {t('session4.bridge.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mt-4">
            <p className="text-foreground text-sm" dangerouslySetInnerHTML={{ __html: t('session4.bridge.analogy') }} />
          </div>
        </div>

        {/* Navegación entre páginas */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 3</div>
            </div>
          </Link>

          <Link
            to="/doc/session-4/support"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Material de Apoyo</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session4;
