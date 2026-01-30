import { useTranslation } from 'react-i18next';
import { DocLayout } from '@/components/doc/DocLayout';
import { DocContent } from '@/components/doc/DocContent';
import { PromptBlock } from '@/components/doc/PromptBlock';
import { Link } from 'react-router-dom';
import { ExternalLink, Clock, CheckCircle2 } from 'lucide-react';

const QuickStart = () => {
  const { t } = useTranslation();

  const sessions = [
    {
      number: 1,
      title: t('doc.quickStartPage.sessions.session1.title'),
      duration: t('doc.quickStartPage.sessions.session1.duration'),
      description: t('doc.quickStartPage.sessions.session1.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session1.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session1Prompt'),
    },
    {
      number: 2,
      title: t('doc.quickStartPage.sessions.session2.title'),
      duration: t('doc.quickStartPage.sessions.session2.duration'),
      description: t('doc.quickStartPage.sessions.session2.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session2.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session2Prompt'),
    },
    {
      number: 3,
      title: t('doc.quickStartPage.sessions.session3.title'),
      duration: t('doc.quickStartPage.sessions.session3.duration'),
      description: t('doc.quickStartPage.sessions.session3.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session3.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session3Prompt'),
    },
    {
      number: 4,
      title: t('doc.quickStartPage.sessions.session4.title'),
      duration: t('doc.quickStartPage.sessions.session4.duration'),
      description: t('doc.quickStartPage.sessions.session4.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session4.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session4Prompt'),
    },
    {
      number: 5,
      title: t('doc.quickStartPage.sessions.session5.title'),
      duration: t('doc.quickStartPage.sessions.session5.duration'),
      description: t('doc.quickStartPage.sessions.session5.description'),
      whatYouBuild: t('doc.quickStartPage.sessions.session5.whatYouBuild', { returnObjects: true }) as string[],
      prompt: t('doc.quickStartPage.promptsSection.session5Prompt'),
    },
  ];

  return (
    <DocLayout>
      <DocContent>
        <h1 className="gradient-text text-4xl font-bold mb-6">
          {t('doc.quickStartPage.title')}
        </h1>

        <p className="text-muted-foreground text-lg mb-12">
          {t('doc.quickStartPage.subtitle')}
        </p>

        {/* Descripción del Proyecto */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">
            {t('doc.quickStartPage.projectOverview.title').replace('🎯 ', '')}
          </h2>
          <p className="text-muted-foreground mb-6 text-lg">
            {t('doc.quickStartPage.projectOverview.description')}
          </p>
          <div className="space-y-2 ml-4">
            {(t('doc.quickStartPage.projectOverview.features', { returnObjects: true }) as string[]).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-green-400">✓</span>
                <span className="text-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Primeros Pasos */}
        <h2 className="text-3xl font-bold mb-8 mt-16">
          Primeros Pasos
        </h2>

        <div className="mb-8 p-6 border-l-4 border-orange-400 bg-orange-500/5 rounded-r-lg">
          <p className="text-muted-foreground text-base leading-relaxed">
            <span className="text-orange-400 font-semibold">Importante:</span> Estos pasos de configuración son necesarios ANTES de usar los prompts de cada sesión. Asegúrate de completar esta configuración inicial para poder seguir el bootcamp sin problemas.
          </p>
        </div>

        <div className="space-y-8 mb-20 ml-4">
          {/* Paso 1 */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">
              {t('doc.quickStartPage.setup.step1.title')}
            </h3>
            <p className="text-muted-foreground mb-3">
              {t('doc.quickStartPage.setup.step1.description')}
            </p>
            <a
              href="https://v0.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              <span>{t('doc.quickStartPage.setup.step1.action')}</span>
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Paso 2 */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">
              {t('doc.quickStartPage.setup.step2.title')}
            </h3>
            <p className="text-muted-foreground mb-2">
              {t('doc.quickStartPage.setup.step2.description')}
            </p>
            <p className="text-sm text-muted-foreground/70 italic">
              {t('doc.quickStartPage.setup.step2.note')}
            </p>
          </div>

          {/* Paso 3 */}
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-2">
              {t('doc.quickStartPage.setup.step3.title')}
            </h3>
            <p className="text-muted-foreground mb-3">
              {t('doc.quickStartPage.setup.step3.description')}
            </p>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-medium"
            >
              <span>{t('doc.quickStartPage.setup.step3.action')}</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Sesiones */}
        <h2 className="text-3xl font-bold mb-4 mt-20">
          {t('doc.quickStartPage.sessions.title')}
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          {t('doc.quickStartPage.sessions.description')}
        </p>

        {sessions.map((session) => (
          <div key={session.number} className="mb-16 pb-8 border-b border-border/30 last:border-0">
            {/* Header de Sesión */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-green-400">
                  {session.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground/60 text-sm">
                  <Clock size={14} />
                  <span>{session.duration}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 ml-1">
                {session.description}
              </p>

              {/* Lo que construirás */}
              <div className="mt-5 ml-4">
                <p className="text-sm text-muted-foreground/70 mb-2">
                  Lo que construirás:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {session.whatYouBuild.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-green-400/80 text-sm mt-0.5">→</span>
                      <span className="text-sm text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub-apartados */}
            <div className="space-y-8">
              {/* Prompt */}
              <div>
                <h4 className="text-xl font-semibold text-orange-400 mb-4">
                  📝 {t('doc.quickStartPage.subsections.prompt')}
                </h4>
                <PromptBlock
                  prompt={session.prompt}
                  title={`Prompt para ${session.title}`}
                />
              </div>

              {/* Entregable */}
              <div>
                <h4 className="text-xl font-semibold text-orange-400 mb-4">
                  🎯 {t('doc.quickStartPage.subsections.deliverable')}
                </h4>
                <div className="p-6 border border-border/50 rounded-lg bg-muted/20">
                  <p className="text-muted-foreground">
                    {t(`doc.quickStartPage.sessions.session${session.number}.deliverable`)}
                  </p>
                </div>
              </div>

              {/* Material de Apoyo */}
              <div>
                <h4 className="text-xl font-semibold text-orange-400 mb-4">
                  📚 {t('doc.quickStartPage.subsections.supportMaterial')}
                </h4>
                <div className="p-6 border border-border/50 rounded-lg bg-muted/20">
                  <ul className="space-y-2">
                    {(t(`doc.quickStartPage.sessions.session${session.number}.supportMaterial`, { returnObjects: true }) as string[]).map((material, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-orange-400 mt-1">•</span>
                        <span className="text-muted-foreground">{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navegación */}
        <div className="mt-20 flex items-center justify-between border-t border-border/50 pt-8">
          <Link
            to="/doc"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors"
          >
            <span>←</span>
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.previous')}</div>
              <div className="font-semibold">Introducción</div>
            </div>
          </Link>

          <Link
            to="/doc/resources"
            className="flex items-center gap-2 text-muted-foreground hover:text-doc-primary transition-colors text-right"
          >
            <div>
              <div className="text-xs text-muted-foreground">{t('doc.session1Page.navigation.next')}</div>
              <div className="font-semibold">{t('doc.sidebarItems.resources')}</div>
            </div>
            <span>→</span>
          </Link>
        </div>
      </DocContent>
    </DocLayout>
  );
};

export default QuickStart;
