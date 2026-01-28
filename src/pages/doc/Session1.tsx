import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { PromptBlock } from '@/components/doc/PromptBlock';
import { Link } from 'react-router-dom';

const Session1 = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
      <h1 className="gradient-text text-4xl font-bold mb-6">
        🥚 {t('doc.session1Page.title')}
      </h1>

      <p className="text-muted-foreground text-lg mb-8">
        {t('doc.session1Page.subtitle')}
      </p>

      <h2 className="text-2xl font-bold text-doc-primary mt-12 mb-4">
        {t('doc.session1Page.whatYouLearn.title')}
      </h2>

      <div className="my-8 glass-card p-6 border-l-4 border-doc-primary">
        <ul className="space-y-3 text-muted-foreground">
          {(t('doc.session1Page.whatYouLearn.items', { returnObjects: true }) as string[]).map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-doc-primary">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 border-b border-border/50 pb-2">
        {t('doc.session1Page.whatYouBuild.title')}
      </h2>

      <div className="grid grid-cols-1 gap-4 my-8">
        <div className="glass-card p-4 border-l-4 border-doc-primary/50">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            {t('doc.session1Page.whatYouBuild.display.title')}
          </h4>
          <p className="text-sm text-muted-foreground">
            {t('doc.session1Page.whatYouBuild.display.description')}
          </p>
        </div>

        <div className="glass-card p-4 border-l-4 border-doc-primary/50">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            {t('doc.session1Page.whatYouBuild.modal.title')}
          </h4>
          <p className="text-sm text-muted-foreground">
            {t('doc.session1Page.whatYouBuild.modal.description')}
          </p>
        </div>

        <div className="glass-card p-4 border-l-4 border-doc-primary/50">
          <h4 className="text-lg font-semibold text-foreground mb-2">
            {t('doc.session1Page.whatYouBuild.stats.title')}
          </h4>
          <p className="text-sm text-muted-foreground">
            {t('doc.session1Page.whatYouBuild.stats.description')}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 border-b border-border/50 pb-2">
        {t('doc.session1Page.finalResult.title')}
      </h2>

      <div className="my-8 glass-card p-6 border-l-4 border-doc-primary bg-primary/5">
        <p className="text-foreground leading-relaxed">
          {t('doc.session1Page.finalResult.description')}
        </p>
      </div>

      {/* Sub-apartados */}
      <div className="space-y-12 mt-16">
        {/* Prompt */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            📝 {t('doc.quickStartPage.subsections.prompt')}
          </h2>
          <PromptBlock
            prompt={t('doc.quickStartPage.promptsSection.session1Prompt')}
            title="Prompt para Sesión 1: Nacimiento"
          />
        </div>

        {/* Entregable */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            🎯 {t('doc.quickStartPage.subsections.deliverable')}
          </h2>
          <div className="p-6 border border-border/50 rounded-lg bg-muted/20">
            <p className="text-muted-foreground text-lg">
              {t('doc.quickStartPage.sessions.session1.deliverable')}
            </p>
          </div>
        </div>

        {/* Material de Apoyo */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-6">
            📚 {t('doc.quickStartPage.subsections.supportMaterial')}
          </h2>
          <div className="p-6 border border-border/50 rounded-lg bg-muted/20">
            <ul className="space-y-3">
              {(t('doc.quickStartPage.sessions.session1.supportMaterial', { returnObjects: true }) as string[]).map((material, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-muted-foreground text-lg">{material}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Navegación entre páginas */}
      <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
        <Link
          to="/doc"
          className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
        >
          <span>←</span>
          <div>
            <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.previous')}</div>
            <div className="font-semibold">{t('doc.session1Page.navigation.intro')}</div>
          </div>
        </Link>

        <Link
          to="/doc/session-2"
          className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
        >
          <div>
            <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.next')}</div>
            <div className="font-semibold">{t('doc.sidebarItems.session2')}</div>
          </div>
          <span>→</span>
        </Link>
      </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session1;
