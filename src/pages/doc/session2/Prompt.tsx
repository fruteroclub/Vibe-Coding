import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { PromptBlock } from '@/components/doc/PromptBlock';
import { Link } from 'react-router-dom';

const Session2Prompt = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          📝 {t('doc.quickStartPage.subsections.prompt')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session2.title')} - {t('doc.quickStartPage.sessions.session2.description')}
        </p>

        <PromptBlock
          prompt={t('doc.quickStartPage.promptsSection.session2Prompt')}
          title="Prompt para Sesión 2: Conversación"
        />

        <div className="mt-12 p-6 border border-orange-500/30 rounded-lg bg-orange-500/5">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">
            💡 Nota Importante sobre APIs
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Para esta sesión necesitarás obtener una API key de Claude. Asegúrate de:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-4">
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>Crear una cuenta en Anthropic (Claude)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>Generar tu API key desde el dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>Guardarla de forma segura en variables de entorno</span>
            </li>
          </ul>
        </div>

        {/* Navegación */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-2"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Volver a</div>
              <div className="font-semibold">{t('doc.sidebarItems.session2')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-2/deliverable"
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

export default Session2Prompt;
