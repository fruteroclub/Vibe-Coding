import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { PromptBlock } from '@/components/doc/PromptBlock';
import { Link } from 'react-router-dom';

const Session3 = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          🔐 {t('doc.quickStartPage.sessions.session3.title')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session3.description')}
        </p>

        <h2 className="text-2xl font-bold text-doc-primary mt-12 mb-4">
          ✨ Lo que construirás
        </h2>

        <div className="space-y-3 mb-12">
          {(t('doc.quickStartPage.sessions.session3.whatYouBuild', { returnObjects: true }) as string[]).map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-green-400">→</span>
              <span className="text-foreground/90">{item}</span>
            </div>
          ))}
        </div>

        {/* Sub-apartados */}
        <div className="space-y-12 mt-16">
          {/* Prompt */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-6">
              📝 {t('doc.quickStartPage.subsections.prompt')}
            </h2>
            <PromptBlock
              prompt={t('doc.quickStartPage.promptsSection.session3Prompt')}
              title="Prompt para Sesión 3: Identidad"
            />
          </div>

          {/* Entregable */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-6">
              🎯 {t('doc.quickStartPage.subsections.deliverable')}
            </h2>
            <div className="p-6 border border-border/50 rounded-lg bg-muted/20">
              <p className="text-muted-foreground text-lg">
                {t('doc.quickStartPage.sessions.session3.deliverable')}
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
                {(t('doc.quickStartPage.sessions.session3.supportMaterial', { returnObjects: true }) as string[]).map((material, i) => (
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
            to="/doc/session-2"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.previous')}</div>
              <div className="font-semibold">{t('doc.sidebarItems.session2')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-4"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.next')}</div>
              <div className="font-semibold">{t('doc.sidebarItems.session4')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session3;
