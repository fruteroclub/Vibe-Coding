import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';

const Session3 = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          {t('doc.session3.title')}
        </h1>

        <p className="text-xl text-orange-400 font-semibold mb-8">
          {t('doc.session3.subtitle')}
        </p>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-12">
          <p>
            {t('doc.session3.intro.p1')}
          </p>

          <p className="text-foreground font-semibold text-xl text-center my-6">
            {t('doc.session3.intro.p2')}
          </p>

          <p>
            {t('doc.session3.intro.p3')}
          </p>
        </div>

        {/* ¿Qué vas a aprender? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          {t('doc.session3.whatYouWillLearn.title')}
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.session3.whatYouWillLearn.subtitle')}
        </p>

        <div className="space-y-8 mb-12">
          {/* 1. Por qué una app necesita reconocer al usuario */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('doc.session3.whatYouWillLearn.items.0.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('doc.session3.whatYouWillLearn.items.0.p1')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('doc.session3.whatYouWillLearn.items.0.p2')}
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('doc.session3.whatYouWillLearn.items.0.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('doc.session3.whatYouWillLearn.items.0.footer') }} />
          </div>

          {/* 2. Qué es un sistema de recursos */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('doc.session3.whatYouWillLearn.items.1.title')}
            </h3>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('doc.session3.whatYouWillLearn.items.1.p1') }} />
            <p className="text-muted-foreground mb-2">{t('doc.session3.whatYouWillLearn.items.1.subtitle')}</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('doc.session3.whatYouWillLearn.items.1.list1', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mb-2">{t('doc.session3.whatYouWillLearn.items.1.subtitle2')}</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('doc.session3.whatYouWillLearn.items.1.list2', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('doc.session3.whatYouWillLearn.items.1.footer') }} />
          </div>

          {/* 3. Acciones con costo y consecuencias */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('doc.session3.whatYouWillLearn.items.2.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('doc.session3.whatYouWillLearn.items.2.p1')}
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('doc.session3.whatYouWillLearn.items.2.list1', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mb-2">{t('doc.session3.whatYouWillLearn.items.2.subtitle')}</p>
            <ul className="space-y-2 text-muted-foreground ml-6 mb-4">
              {t('doc.session3.whatYouWillLearn.items.2.list2', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground">
              {t('doc.session3.whatYouWillLearn.items.2.p2')}
            </p>
            <p className="text-foreground font-semibold ml-6 mt-2">
              {t('doc.session3.whatYouWillLearn.items.2.formula')}
            </p>
          </div>

          {/* 4. Feedback: saber qué está pasando */}
          <div className="glass-card p-6 border-l-4 border-orange-400">
            <h3 className="text-xl font-bold text-foreground mb-4">
              {t('doc.session3.whatYouWillLearn.items.3.title')}
            </h3>
            <p className="text-muted-foreground mb-4">
              {t('doc.session3.whatYouWillLearn.items.3.p1')}
            </p>
            <p className="text-muted-foreground mb-2">{t('doc.session3.whatYouWillLearn.items.3.subtitle')}</p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              {t('doc.session3.whatYouWillLearn.items.3.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground mt-4" dangerouslySetInnerHTML={{ __html: t('doc.session3.whatYouWillLearn.items.3.footer') }} />
          </div>
        </div>

        {/* ¿Qué vas a hacer? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          {t('doc.session3.whatYouWillDo.title')}
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          {t('doc.session3.whatYouWillDo.subtitle')}
        </p>

        <ul className="space-y-3 text-muted-foreground ml-6 mb-8">
          {t('doc.session3.whatYouWillDo.list', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground text-lg mb-12">
          {t('doc.session3.whatYouWillDo.footer')}
        </p>

        {/* ¿Qué se espera que logres? */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          {t('doc.session3.whatYouWillAchieve.title')}
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          {t('doc.session3.whatYouWillAchieve.subtitle')}
        </p>

        <ul className="space-y-3 text-muted-foreground ml-6 mb-8">
          {t('doc.session3.whatYouWillAchieve.list', { returnObjects: true }).map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="glass-card p-6 border-l-4 border-orange-400 bg-orange-500/5 mb-12">
          <p className="text-foreground text-lg font-semibold">
            {t('doc.session3.whatYouWillAchieve.important.intro')}
          </p>
          <p className="text-foreground text-xl mt-2">
            {t('doc.session3.whatYouWillAchieve.important.message')}
          </p>
        </div>

        {/* Por qué esta sesión es importante */}
        <h2 className="text-3xl font-bold text-orange-400 mb-6">
          {t('doc.session3.whyImportant.title')}
        </h2>

        <div className="glass-card p-8 border-l-4 border-orange-400 bg-primary/5 mb-12">
          <p className="text-foreground text-lg mb-4">
            {t('doc.session3.whyImportant.intro')}
          </p>
          <p className="text-foreground text-lg mb-4">
            {t('doc.session3.whyImportant.p1')}
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-2">
            {t('doc.session3.whyImportant.from')}
          </p>
          <p className="text-foreground text-lg text-center mb-4">
            {t('doc.session3.whyImportant.middle')}
          </p>
          <p className="text-2xl font-bold text-orange-400 text-center mb-4">
            {t('doc.session3.whyImportant.to')}
          </p>
          <p className="text-foreground text-lg">
            {t('doc.session3.whyImportant.outro')}
          </p>
        </div>

        {/* Puente hacia Sesión 4 */}
        <div className="glass-card p-8 mt-12 border-2 border-orange-400/30">
          <h2 className="text-2xl font-bold text-orange-400 mb-4">
            {t('doc.session3.bridge.title')}
          </h2>
          <p className="text-foreground text-lg mb-4" dangerouslySetInnerHTML={{ __html: t('doc.session3.bridge.intro') }} />

          <div className="glass-card p-6">
            <h3 className="text-xl font-semibold text-orange-400 mb-3">
              {t('doc.session3.bridge.subtitle')}
            </h3>
            <ul className="space-y-2 text-foreground">
              {t('doc.session3.bridge.list', { returnObjects: true }).map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-orange-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mt-4">
            <p className="text-foreground text-sm" dangerouslySetInnerHTML={{ __html: t('doc.session3.bridge.analogy') }} />
          </div>
        </div>

        {/* Navegación entre páginas */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-2"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Sesión 2</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3/support"
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

export default Session3;
