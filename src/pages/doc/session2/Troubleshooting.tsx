import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { Link } from 'react-router-dom';
import { AlertTriangle, Key, MessageCircle, RefreshCw, Bot, DollarSign, LifeBuoy } from 'lucide-react';

const Session2Troubleshooting = () => {
  const { t } = useTranslation();

  return (
    <DocLayout>
      <DocContent>
        <div className="flex items-center gap-3 mb-4">
          <AlertTriangle className="w-10 h-10 text-orange-400" />
          <h1 className="gradient-text text-4xl font-bold">
            {t('doc.session2Troubleshooting.title')}
          </h1>
        </div>
        <p className="text-muted-foreground text-lg mb-8">
          {t('doc.session2Troubleshooting.subtitle')}
        </p>

        {/* Error 1 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-red-500">
          <div className="flex items-start gap-4 mb-4">
            <Key className="w-10 h-10 text-red-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {t('doc.session2Troubleshooting.error1.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('doc.session2Troubleshooting.error1.description')}
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              {t('doc.session2Troubleshooting.error1.solutions', { returnObjects: true }).map((solution: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: solution }} />
              ))}
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              {t('doc.session2Troubleshooting.error1.why')}
            </p>
          </div>
        </div>

        {/* Error 2 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-yellow-500">
          <div className="flex items-start gap-4 mb-4">
            <MessageCircle className="w-10 h-10 text-yellow-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {t('doc.session2Troubleshooting.error2.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('doc.session2Troubleshooting.error2.description')}
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              {t('doc.session2Troubleshooting.error2.solutions', { returnObjects: true }).map((solution: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: solution }} />
              ))}
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              {t('doc.session2Troubleshooting.error2.why')}
            </p>
          </div>
        </div>

        {/* Error 3 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-purple-500">
          <div className="flex items-start gap-4 mb-4">
            <RefreshCw className="w-10 h-10 text-purple-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {t('doc.session2Troubleshooting.error3.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('doc.session2Troubleshooting.error3.description')}
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              {t('doc.session2Troubleshooting.error3.solutions', { returnObjects: true }).map((solution: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: solution }} />
              ))}
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              {t('doc.session2Troubleshooting.error3.why')}
            </p>
          </div>
        </div>

        {/* Error 4 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-4 mb-4">
            <Bot className="w-10 h-10 text-blue-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {t('doc.session2Troubleshooting.error4.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('doc.session2Troubleshooting.error4.description')}
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              {t('doc.session2Troubleshooting.error4.solutions', { returnObjects: true }).map((solution: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: solution }} />
              ))}
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              {t('doc.session2Troubleshooting.error4.why')}
            </p>
          </div>
        </div>

        {/* Error 5 */}
        <div className="glass-card p-6 mb-6 border-l-4 border-green-500">
          <div className="flex items-start gap-4 mb-4">
            <DollarSign className="w-10 h-10 text-green-400 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {t('doc.session2Troubleshooting.error5.title')}
              </h2>
              <p className="text-muted-foreground mb-4">
                {t('doc.session2Troubleshooting.error5.description')}
              </p>
            </div>
          </div>

          <div className="bg-orange-400/10 border border-orange-400/30 rounded-lg p-4 mb-4">
            <h3 className="font-bold text-orange-400 mb-2">✅ Soluciones:</h3>
            <ol className="space-y-2 text-foreground">
              {t('doc.session2Troubleshooting.error5.solutions', { returnObjects: true }).map((solution: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: solution }} />
              ))}
            </ol>
          </div>

          <div className="bg-blue-400/10 border border-blue-400/30 rounded-lg p-4">
            <h3 className="font-bold text-blue-400 mb-2">💡 Por qué pasa:</h3>
            <p className="text-foreground text-sm">
              {t('doc.session2Troubleshooting.error5.why')}
            </p>
          </div>
        </div>

        {/* Ayuda Adicional */}
        <div className="glass-card p-6 bg-gradient-to-r from-orange-400/10 to-pink-400/10 border-2 border-orange-400/30">
          <div className="flex items-center gap-3 mb-4">
            <LifeBuoy className="w-8 h-8 text-orange-400" />
            <h2 className="text-2xl font-bold text-orange-400">
              {t('doc.session2Troubleshooting.needHelp.title')}
            </h2>
          </div>
          <p className="text-foreground mb-4">
            {t('doc.session2Troubleshooting.needHelp.intro')}
          </p>
          <ol className="space-y-3 text-foreground mb-6">
            {t('doc.session2Troubleshooting.needHelp.steps', { returnObjects: true }).map((step: string, index: number) => (
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
            to="/doc/session-2/prompt"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">Anterior</div>
              <div className="font-semibold">Prompt</div>
            </div>
          </Link>

          <Link
            to="/doc/session-3"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">Siguiente</div>
              <div className="font-semibold">Sesión 3</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default Session2Troubleshooting;
