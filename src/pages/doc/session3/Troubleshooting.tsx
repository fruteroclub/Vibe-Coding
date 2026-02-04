import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { AlertTriangle, Lock, Coins, LifeBuoy } from 'lucide-react';

const Session3Troubleshooting = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-10 h-10 text-orange-400" />
          <h1 className="gradient-text text-4xl font-bold">
            {t('doc.session3Troubleshooting.title')}
          </h1>
        </div>
        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.session3Troubleshooting.subtitle')}
        </p>

        {/* Error 1 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <Lock className="w-10 h-10 text-red-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {t('doc.session3Troubleshooting.error1.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('doc.session3Troubleshooting.error1.description')}
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              {t('doc.session3Troubleshooting.error1.solutions', { returnObjects: true }).map((solution: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: solution }} />
              ))}
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              {t('doc.session3Troubleshooting.error1.why')}
            </p>
          </div>
        </div>

        {/* Error 2 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-yellow-500">
          <div className="flex items-start gap-4 mb-4">
            <Coins className="w-10 h-10 text-yellow-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {t('doc.session3Troubleshooting.error2.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('doc.session3Troubleshooting.error2.description')}
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              {t('doc.session3Troubleshooting.error2.solutions', { returnObjects: true }).map((solution: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: solution }} />
              ))}
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              {t('doc.session3Troubleshooting.error2.why')}
            </p>
          </div>
        </div>

        {/* Ayuda Adicional */}
        <div className="glass-card p-6 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30">
          <div className="flex items-center gap-3 mb-4">
            <LifeBuoy className="w-8 h-8 text-orange-400" />
            <h2 className="text-2xl font-bold text-orange-400">
              {t('doc.session3Troubleshooting.needHelp.title')}
            </h2>
          </div>
          <p className="text-foreground mb-4">
            {t('doc.session3Troubleshooting.needHelp.intro')}
          </p>
          <ol className="space-y-3 text-foreground mb-6">
            {t('doc.session3Troubleshooting.needHelp.steps', { returnObjects: true }).map((step: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="font-bold text-orange-400">{index + 1}.</span>
                <span dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </div>

        {/* Navigation */}
        <div className="mt-16 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc/session-3/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
            </div>
          </Link>

          <Link
            to="/doc/session-4"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Sesión 4</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session3Troubleshooting;
