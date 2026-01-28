import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { PromptBlock } from '@/components/doc/PromptBlock';
import { Link } from 'react-router-dom';

const Session3Prompt = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          📝 {t('doc.quickStartPage.subsections.prompt')}
        </h1>

        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.quickStartPage.sessions.session3.title')} - {t('doc.quickStartPage.sessions.session3.description')}
        </p>

        <PromptBlock
          prompt={t('doc.quickStartPage.promptsSection.session3Prompt')}
          title="Prompt para Sesión 3: Identidad"
        />

        <div className="mt-12 p-6 border border-orange-500/30 rounded-lg bg-orange-500/5">
          <h3 className="text-lg font-semibold text-orange-400 mb-3">
            🔐 Sobre Privy
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Privy es una plataforma de autenticación que facilita el uso de wallets:
          </p>
          <ul className="space-y-2 text-muted-foreground ml-4">
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>Login social (Google, Twitter, Email)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>Wallet integrada automáticamente</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400">•</span>
              <span>No necesitas saber sobre criptomonedas para usarla</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Volver a</div>
              <div className="font-semibold">{t('doc.sidebarItems.session3')}</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3/deliverable"
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

export default Session3Prompt;
