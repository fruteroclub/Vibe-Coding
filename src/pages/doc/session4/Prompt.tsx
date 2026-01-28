import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { PromptBlock } from '@/components/doc/PromptBlock';
import { Link } from 'react-router-dom';

const Session4Prompt = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          📝 {t('doc.quickStartPage.subsections.prompt')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session4.title')} - {t('doc.quickStartPage.sessions.session4.description')}
        </p>

        <PromptBlock
          prompt={t('doc.quickStartPage.promptsSection.session4Prompt')}
          title="Prompt para Sesión 4: Crecimiento"
        />

        <div className="mt-12 p-6 border border-orange-500/30 rounded-lg bg-orange-500/5">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">
            💡 Cómo usar este prompt
          </h3>
          <ol className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">1.</span>
              <span>Copia el prompt completo usando el botón "Copiar prompt"</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">2.</span>
              <span>Ve a <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="text-orange-400 underline hover:text-orange-300">v0.dev</a> y pega el prompt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">3.</span>
              <span>Espera a que la IA genere tu código</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 font-bold">4.</span>
              <span>Revisa el código generado y haz ajustes si es necesario</span>
            </li>
          </ol>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-4"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Volver a</div>
              <div className="font-semibold">{t('doc.sidebarItems.session4')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-4/deliverable"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">{t('doc.quickStartPage.subsections.deliverable')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session4Prompt;
